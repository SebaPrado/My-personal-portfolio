import React, { useState } from 'react';
import './ceibos.css';

// Datos iniciales
const productosIniciales = [
  { id: 1, nombre: 'Ivermectina 500ml', categoria: 'Antiparasitarios', subcategoria: 'Endectocidas', cantidad_stock: 15, precio: 12500, umbral_minimo: 20 },
  { id: 2, nombre: 'Oxitetraciclina LA 200ml', categoria: 'Antibióticos', subcategoria: 'Tetraciclinas', cantidad_stock: 45, precio: 8900, umbral_minimo: 15 },
  { id: 3, nombre: 'Vitamina ADE 100ml', categoria: 'Vitaminas', subcategoria: 'Multivitamínicos', cantidad_stock: 8, precio: 4500, umbral_minimo: 10 },
  { id: 4, nombre: 'Penicilina G Procaínica 250ml', categoria: 'Antibióticos', subcategoria: 'Penicilinas', cantidad_stock: 30, precio: 7800, umbral_minimo: 12 },
  { id: 5, nombre: 'Calcio Borogluconato 500ml', categoria: 'Minerales', subcategoria: 'Hipocalcemia', cantidad_stock: 25, precio: 6200, umbral_minimo: 15 },
  { id: 6, nombre: 'Fipronil Pour On 1L', categoria: 'Antiparasitarios', subcategoria: 'Ectoparasiticidas', cantidad_stock: 12, precio: 18900, umbral_minimo: 8 },
  { id: 7, nombre: 'Ketoprofeno 100ml', categoria: 'Antiinflamatorios', subcategoria: 'AINES', cantidad_stock: 5, precio: 9500, umbral_minimo: 10 },
  { id: 8, nombre: 'Complejo B 100ml', categoria: 'Vitaminas', subcategoria: 'Grupo B', cantidad_stock: 40, precio: 3800, umbral_minimo: 15 },
  { id: 9, nombre: 'Oxitocina 50ml', categoria: 'Hormonas', subcategoria: 'Reproductivas', cantidad_stock: 18, precio: 5600, umbral_minimo: 10 },
  { id: 10, nombre: 'Albendazol Suspensión 1L', categoria: 'Antiparasitarios', subcategoria: 'Antihelmínticos', cantidad_stock: 22, precio: 11200, umbral_minimo: 12 }
];

function LosCeibosPage() {
  // Estado principal
  const [productos, setProductos] = useState(productosIniciales);
  const [facturas, setFacturas] = useState([]);
  const [devoluciones, setDevoluciones] = useState([]);
  const [seccionActual, setSeccionActual] = useState('productos');
  const [modalAbierto, setModalAbierto] = useState(null);

  // Estado de formularios
  const [formNuevoProducto, setFormNuevoProducto] = useState({
    nombre: '', categoria: '', subcategoria: '', cantidad_stock: 0, precio: 0, umbral_minimo: 10
  });
  const [formIngresoStock, setFormIngresoStock] = useState({ productoId: null, cantidad: 0 });
  const [formFactura, setFormFactura] = useState({
    items: [], clienteNombre: '', productoSeleccionado: '', cantidadSeleccionada: 1
  });

  // Productos con stock bajo
  const productosStockBajo = productos.filter(p => p.cantidad_stock < p.umbral_minimo);

  // Handlers
  const handleCrearProducto = () => {
    if (!formNuevoProducto.nombre.trim()) {
      alert('El nombre del producto es obligatorio');
      return;
    }
    const nuevo = {
      id: Date.now(),
      ...formNuevoProducto,
      cantidad_stock: parseFloat(formNuevoProducto.cantidad_stock),
      precio: parseFloat(formNuevoProducto.precio),
      umbral_minimo: parseFloat(formNuevoProducto.umbral_minimo)
    };
    setProductos([...productos, nuevo]);
    setFormNuevoProducto({ nombre: '', categoria: '', subcategoria: '', cantidad_stock: 0, precio: 0, umbral_minimo: 10 });
    setModalAbierto(null);
  };

  const handleIngresoStock = () => {
    if (formIngresoStock.cantidad <= 0) return;
    setProductos(productos.map(p =>
      p.id === formIngresoStock.productoId
        ? { ...p, cantidad_stock: p.cantidad_stock + parseFloat(formIngresoStock.cantidad) }
        : p
    ));
    setFormIngresoStock({ productoId: null, cantidad: 0 });
    setModalAbierto(null);
  };

  const handleAgregarItemFactura = () => {
    const productoId = parseInt(formFactura.productoSeleccionado);
    const cantidad = parseFloat(formFactura.cantidadSeleccionada);
    if (!productoId || cantidad <= 0) return;

    const producto = productos.find(p => p.id === productoId);
    if (!producto || producto.cantidad_stock < cantidad) {
      alert('Stock insuficiente');
      return;
    }

    setFormFactura({
      ...formFactura,
      items: [...formFactura.items, {
        productoId: producto.id,
        nombreProducto: producto.nombre,
        cantidad,
        precioUnitario: producto.precio
      }],
      productoSeleccionado: '',
      cantidadSeleccionada: 1
    });
  };

  const handleEliminarItemFactura = (index) => {
    setFormFactura({
      ...formFactura,
      items: formFactura.items.filter((_, i) => i !== index)
    });
  };

  const handleCrearFactura = () => {
    if (formFactura.items.length === 0 || !formFactura.clienteNombre.trim()) {
      alert('Completa los datos de la factura');
      return;
    }

    // Descontar stock
    const nuevosProductos = productos.map(p => {
      const item = formFactura.items.find(i => i.productoId === p.id);
      return item ? { ...p, cantidad_stock: p.cantidad_stock - item.cantidad } : p;
    });
    setProductos(nuevosProductos);

    // Crear factura
    const nuevaFactura = {
      id: Date.now(),
      fecha: new Date().toLocaleString('es-AR'),
      clienteNombre: formFactura.clienteNombre,
      items: [...formFactura.items]
    };
    setFacturas([...facturas, nuevaFactura]);
    setFormFactura({ items: [], clienteNombre: '', productoSeleccionado: '', cantidadSeleccionada: 1 });
  };

  const handleDevolucion = (facturaId, item) => {
    if (!confirm(`¿Confirmas la devolución de ${item.nombreProducto}?`)) return;

    // Devolver stock
    setProductos(productos.map(p =>
      p.id === item.productoId ? { ...p, cantidad_stock: p.cantidad_stock + item.cantidad } : p
    ));

    // Registrar devolución
    setDevoluciones([...devoluciones, {
      id: Date.now(),
      fecha: new Date().toLocaleString('es-AR'),
      facturaId,
      item: { ...item }
    }]);
  };

  const totalFacturaEnProgreso = formFactura.items.reduce((sum, item) => sum + (item.cantidad * item.precioUnitario), 0);

  return (
    <div className="ceibos-container">
      {/* Navegación */}
      <nav className="navegacion">
        <div className="nav-opciones">
          <button className={seccionActual === 'productos' ? 'activo' : ''} onClick={() => setSeccionActual('productos')}>Mis Productos</button>
          <button className={seccionActual === 'facturas' ? 'activo' : ''} onClick={() => setSeccionActual('facturas')}>Facturas</button>
          <button className={seccionActual === 'devoluciones' ? 'activo' : ''} onClick={() => setSeccionActual('devoluciones')}>Devoluciones</button>
        </div>
        <div className="nav-logo">
          <h2 style={{ color: '#014b08', fontWeight: 400 }}>Los Ceibos</h2>
        </div>
      </nav>

      {/* SECCIÓN PRODUCTOS */}
      {seccionActual === 'productos' && (
        <div className="seccion-productos">
          <div className="header-seccion">
            <h2>Mis Productos</h2>
            <button onClick={() => setModalAbierto('nuevoProducto')}>+ Nuevo Producto</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Umbral</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(p => (
                <tr key={p.id} className={p.cantidad_stock < p.umbral_minimo ? 'stock-bajo' : ''}>
                  <td>{p.nombre}</td>
                  <td>{p.categoria}</td>
                  <td><strong>{p.cantidad_stock}</strong></td>
                  <td>${p.precio.toLocaleString('es-AR')}</td>
                  <td>{p.umbral_minimo}</td>
                  <td>
                    <button onClick={() => { setFormIngresoStock({ productoId: p.id, cantidad: 0 }); setModalAbierto('ingresoStock'); }}>
                      + Stock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {productosStockBajo.length > 0 && (
            <div className="alertas-stock">
              <h3>⚠️ Productos con bajo stock</h3>
              <ul>
                {productosStockBajo.map(p => (
                  <li key={p.id}>{p.nombre} - Stock: {p.cantidad_stock} (mínimo: {p.umbral_minimo})</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* SECCIÓN FACTURAS */}
      {seccionActual === 'facturas' && (
        <div className="seccion-facturas">
          <div className="header-seccion">
            <h2>Nueva Factura</h2>
          </div>

          <div className="factura-items">
            <div className="form-grupo">
              <label>Cliente</label>
              <input
                type="text"
                value={formFactura.clienteNombre}
                onChange={(e) => setFormFactura({ ...formFactura, clienteNombre: e.target.value })}
                placeholder="Nombre del cliente"
              />
            </div>

            <div className="form-grupo">
              <label>Agregar Producto</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <select
                  value={formFactura.productoSeleccionado}
                  onChange={(e) => setFormFactura({ ...formFactura, productoSeleccionado: e.target.value })}
                >
                  <option value="">Seleccionar producto...</option>
                  {productos.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.nombre} - Stock: {p.cantidad_stock} - ${p.precio.toLocaleString('es-AR')}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  min="1"
                  value={formFactura.cantidadSeleccionada}
                  onChange={(e) => setFormFactura({ ...formFactura, cantidadSeleccionada: e.target.value })}
                  style={{ width: '100px' }}
                />
                <button onClick={handleAgregarItemFactura}>Agregar</button>
              </div>
            </div>

            <h3 style={{ marginTop: '20px', fontWeight: 400 }}>Items de la Factura</h3>
            {formFactura.items.length === 0 ? (
              <p style={{ color: '#6c757d' }}>No hay items agregados</p>
            ) : (
              formFactura.items.map((item, index) => (
                <div key={index} className="item-factura">
                  <div style={{ flex: 1 }}>
                    <strong>{item.nombreProducto}</strong><br />
                    <small>{item.cantidad} x ${item.precioUnitario.toLocaleString('es-AR')} = ${(item.cantidad * item.precioUnitario).toLocaleString('es-AR')}</small>
                  </div>
                  <button className="peligro" onClick={() => handleEliminarItemFactura(index)}>Eliminar</button>
                </div>
              ))
            )}

            {formFactura.items.length > 0 && (
              <>
                <div className="total-factura">
                  <strong>Total: ${totalFacturaEnProgreso.toLocaleString('es-AR')}</strong>
                </div>
                <div style={{ textAlign: 'right', marginTop: '15px' }}>
                  <button onClick={handleCrearFactura}>Finalizar Factura</button>
                </div>
              </>
            )}
          </div>

          <div className="header-seccion" style={{ marginTop: '40px' }}>
            <h2>Historial de Facturas</h2>
          </div>

          <div className="lista-facturas">
            {facturas.length === 0 ? (
              <p style={{ color: '#6c757d' }}>No hay facturas registradas</p>
            ) : (
              facturas.map(factura => {
                const total = factura.items.reduce((sum, item) => sum + (item.cantidad * item.precioUnitario), 0);
                return (
                  <div key={factura.id} className="factura-card">
                    <div className="factura-header">
                      <div>
                        <strong>Factura #{factura.id}</strong><br />
                        <span className="factura-info">Cliente: {factura.clienteNombre}</span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span className="factura-info">{factura.fecha}</span><br />
                        <strong>${total.toLocaleString('es-AR')}</strong>
                      </div>
                    </div>
                    {factura.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: '13px' }}>
                        <span>{item.nombreProducto} (x{item.cantidad})</span>
                        <span>${(item.cantidad * item.precioUnitario).toLocaleString('es-AR')}</span>
                      </div>
                    ))}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* SECCIÓN DEVOLUCIONES */}
      {seccionActual === 'devoluciones' && (
        <div className="seccion-devoluciones">
          <div className="header-seccion">
            <h2>Devoluciones</h2>
          </div>
          <p style={{ marginBottom: '20px', color: '#6c757d' }}>Selecciona los items a devolver. El stock se restaurará automáticamente.</p>

          <div className="lista-facturas">
            {facturas.length === 0 ? (
              <p style={{ color: '#6c757d' }}>No hay facturas para procesar devoluciones</p>
            ) : (
              facturas.map(factura => (
                <div key={factura.id} className="factura-card">
                  <div className="factura-header">
                    <div>
                      <strong>Factura #{factura.id}</strong><br />
                      <span className="factura-info">Cliente: {factura.clienteNombre}</span>
                    </div>
                    <span className="factura-info">{factura.fecha}</span>
                  </div>
                  {factura.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: '1px solid #dee2e6' }}>
                      <div>
                        <div>{item.nombreProducto}</div>
                        <small style={{ color: '#6c757d' }}>Cantidad: {item.cantidad}</small>
                      </div>
                      <button className="secundario" onClick={() => handleDevolucion(factura.id, item)}>Devolver</button>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>

          {devoluciones.length > 0 && (
            <>
              <div className="header-seccion" style={{ marginTop: '40px' }}>
                <h2>Historial de Devoluciones</h2>
              </div>
              <div className="lista-facturas">
                {devoluciones.map(dev => (
                  <div key={dev.id} className="factura-card">
                    <div className="factura-header">
                      <div>
                        <strong>Devolución #{dev.id}</strong><br />
                        <span className="factura-info">Factura origen: #{dev.facturaId}</span>
                      </div>
                      <span className="factura-info">{dev.fecha}</span>
                    </div>
                    <div>{dev.item.nombreProducto} - Cantidad: {dev.item.cantidad}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* MODAL NUEVO PRODUCTO */}
      {modalAbierto === 'nuevoProducto' && (
        <div className="modal-overlay" onClick={() => setModalAbierto(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Crear Nuevo Producto</h3>
            <div className="form-grupo">
              <label>Nombre</label>
              <input type="text" value={formNuevoProducto.nombre} onChange={(e) => setFormNuevoProducto({ ...formNuevoProducto, nombre: e.target.value })} />
            </div>
            <div className="form-grupo">
              <label>Categoría</label>
              <input type="text" value={formNuevoProducto.categoria} onChange={(e) => setFormNuevoProducto({ ...formNuevoProducto, categoria: e.target.value })} />
            </div>
            <div className="form-grupo">
              <label>Stock Inicial</label>
              <input type="number" value={formNuevoProducto.cantidad_stock} onChange={(e) => setFormNuevoProducto({ ...formNuevoProducto, cantidad_stock: e.target.value })} />
            </div>
            <div className="form-grupo">
              <label>Precio</label>
              <input type="number" value={formNuevoProducto.precio} onChange={(e) => setFormNuevoProducto({ ...formNuevoProducto, precio: e.target.value })} />
            </div>
            <div className="form-grupo">
              <label>Umbral Mínimo</label>
              <input type="number" value={formNuevoProducto.umbral_minimo} onChange={(e) => setFormNuevoProducto({ ...formNuevoProducto, umbral_minimo: e.target.value })} />
            </div>
            <div className="modal-botones">
              <button className="secundario" onClick={() => setModalAbierto(null)}>Cancelar</button>
              <button onClick={handleCrearProducto}>Crear</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL INGRESO STOCK */}
      {modalAbierto === 'ingresoStock' && (
        <div className="modal-overlay" onClick={() => setModalAbierto(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Ingreso de Stock</h3>
            {(() => {
              const producto = productos.find(p => p.id === formIngresoStock.productoId);
              return producto ? (
                <>
                  <p style={{ marginBottom: '20px', color: '#6c757d' }}>
                    Producto: <strong>{producto.nombre}</strong><br />
                    Stock actual: <strong>{producto.cantidad_stock}</strong>
                  </p>
                  <div className="form-grupo">
                    <label>Cantidad a Ingresar</label>
                    <input type="number" min="1" value={formIngresoStock.cantidad} onChange={(e) => setFormIngresoStock({ ...formIngresoStock, cantidad: e.target.value })} />
                  </div>
                  <div className="modal-botones">
                    <button className="secundario" onClick={() => setModalAbierto(null)}>Cancelar</button>
                    <button onClick={handleIngresoStock}>Ingresar</button>
                  </div>
                </>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

export default LosCeibosPage;
