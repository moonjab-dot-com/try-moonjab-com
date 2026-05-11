import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[MoonJab] App crash:', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'DM Sans, sans-serif',
          background: '#f0fdf4',
          color: '#1e293b',
          textAlign: 'center',
          gap: '1rem',
        }}
      >
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#10b981" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
          Algo salió mal
        </h1>
        <p style={{ color: '#64748b', maxWidth: '400px', margin: 0 }}>
          La aplicación encontró un error inesperado. Intenta recargar la página.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.6rem 1.4rem',
              background: '#10b981',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.95rem',
            }}
          >
            Recargar
          </button>
          <button
            onClick={() => { window.location.href = '/'; }}
            style={{
              padding: '0.6rem 1.4rem',
              background: 'transparent',
              color: '#10b981',
              border: '1.5px solid #10b981',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.95rem',
            }}
          >
            Ir al inicio
          </button>
        </div>
        {import.meta.env.DEV && this.state.error && (
          <pre
            style={{
              marginTop: '1rem',
              padding: '1rem',
              background: '#fee2e2',
              borderRadius: '8px',
              fontSize: '0.75rem',
              textAlign: 'left',
              maxWidth: '600px',
              overflow: 'auto',
              color: '#991b1b',
            }}
          >
            {this.state.error.message}
          </pre>
        )}
      </div>
    );
  }
}
