import React from 'react';

/**
 * Dashboard común reutilizable para todos los clientes
 */
function DashboardComun({ clienteNombre, children }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header con nombre del cliente */}
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 300,
            marginBottom: '10px'
          }}>
            {clienteNombre}
          </h1>
          <p style={{ color: '#888', fontSize: '1rem' }}>
            Panel de gestión
          </p>
        </header>

        {/* Contenido específico del cliente */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ 
          marginTop: '60px', 
          paddingTop: '20px', 
          borderTop: '1px solid #333',
          color: '#666',
          fontSize: '0.85rem'
        }}>
          Desarrollado por Sebastian Prado
        </footer>
      </div>
    </div>
  );
}

export default DashboardComun;
