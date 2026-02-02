import React from 'react';
import DashboardComun from '../DashboardComun';

function AlusurPage() {
  return (
    <DashboardComun clienteNombre="Alusur">
      {/* Contenido específico de Alusur */}
      <div style={{
        background: 'rgba(70, 130, 180, 0.1)',
        border: '1px solid rgba(70, 130, 180, 0.3)',
        borderRadius: '12px',
        padding: '30px',
        marginBottom: '20px'
      }}>
        <h2 style={{ 
          color: 'rgb(70, 130, 180)', 
          fontWeight: 400,
          marginBottom: '15px'
        }}>
          Presupuestos de Ventanas
        </h2>
        <p style={{ color: '#aaa' }}>
          Sistema de presupuestos para aberturas de aluminio.
        </p>
      </div>

      {/* Placeholder para funcionalidades futuras */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <h3 style={{ fontWeight: 400, marginBottom: '10px' }}>Perfiles</h3>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>Gestión de perfiles de aluminio</p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <h3 style={{ fontWeight: 400, marginBottom: '10px' }}>Vidrios</h3>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>Catálogo de vidrios</p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <h3 style={{ fontWeight: 400, marginBottom: '10px' }}>Accesorios</h3>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>Herrajes y complementos</p>
        </div>
      </div>
    </DashboardComun>
  );
}

export default AlusurPage;
