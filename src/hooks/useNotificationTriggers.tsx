import { useEffect } from 'react';
import { useNotificationsStore } from '@/store/useNotificationsStore';
import { useInterviewStore } from '@/store/useInterviewStore';

export const useNotificationTriggers = () => {
  const { addNotification } = useNotificationsStore();
  const sessions = useInterviewStore((state) => state.sessions);

  // Interview completed notification
  useEffect(() => {
    const lastSessionCount = parseInt(localStorage.getItem('lastSessionCount') || '0');
    if (sessions.length > lastSessionCount) {
      const latestSession = sessions[sessions.length - 1];
      if (latestSession?.endedAt) {
        const score = latestSession.finalScore || 0;
        let message = '';
        if (score >= 80) message = 'Excelente trabajo. Tus respuestas fueron impresionantes.';
        else if (score >= 60) message = 'Buen trabajo. Sigue practicando para mejorar.';
        else message = 'La práctica hace al maestro. Sigue adelante.';

        addNotification({
          type: 'success',
          title: 'Entrevista completada',
          message,
          actionUrl: `/dashboard/interviews/results`,
          actionLabel: 'Ver resultados',
        });
      }
    }
    localStorage.setItem('lastSessionCount', sessions.length.toString());
  }, [sessions.length]);

  return null;
};
