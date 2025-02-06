import React, { useState } from 'react';

const Section_5 = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(prev => !prev);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', maxWidth: '300px' }}>
      {/* Título y botón para expandir/contraer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Mi Título</h2>
        <button 
          onClick={toggleList} 
          style={{ 
            fontSize: '24px', 
            border: 'none', 
            background: 'none', 
            cursor: 'pointer'
          }}
          aria-label="Toggle list"
        >
          {showList ? '-' : '+'}
        </button>
      </div>

      {/* Lista de 5 divs que se muestran al hacer clic */}
      {showList && (
        <div style={{ marginTop: '10px' }}>
          <div>Elemento 1</div>
          <div>Elemento 2</div>
          <div>Elemento 3</div>
          <div>Elemento 4</div>
          <div>Elemento 5</div>
        </div>
      )}
    </div>
  );
};

export default Section_5;
