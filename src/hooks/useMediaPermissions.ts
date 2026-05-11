import { useState, useCallback } from 'react';

export type PermissionState = 'idle' | 'requesting' | 'granted' | 'denied' | 'unavailable';

interface UseMediaPermissionsReturn {
  permissionState: PermissionState;
  requestPermissions: () => Promise<boolean>;
  errorMessage: string | null;
}

export function useMediaPermissions(): UseMediaPermissionsReturn {
  const [permissionState, setPermissionState] = useState<PermissionState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const requestPermissions = useCallback(async (): Promise<boolean> => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setPermissionState('unavailable');
      setErrorMessage('Tu navegador no soporta grabación de video. Usa Chrome o Edge.');
      return false;
    }

    setPermissionState('requesting');
    setErrorMessage(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      // Stop all tracks immediately — we just needed the permission grant
      stream.getTracks().forEach((t) => t.stop());
      setPermissionState('granted');
      return true;
    } catch (err) {
      const error = err as DOMException;
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setPermissionState('denied');
        setErrorMessage(
          'Acceso a cámara y micrófono denegado. Habilítalos en la configuración de tu navegador e intenta de nuevo.'
        );
      } else if (error.name === 'NotFoundError') {
        setPermissionState('unavailable');
        setErrorMessage('No se encontró cámara o micrófono en este dispositivo.');
      } else {
        setPermissionState('denied');
        setErrorMessage('No se pudo acceder a la cámara o micrófono. Verifica los permisos del navegador.');
      }
      return false;
    }
  }, []);

  return { permissionState, requestPermissions, errorMessage };
}
