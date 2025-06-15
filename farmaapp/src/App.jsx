import "./App.css";

import { useState } from 'react';
import './App.css';

function App() {
  const [trabajadores, setTrabajadores] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [trabajadorEditando, setTrabajadorEditando] = useState(null);
  const [filtro, setFiltro] = useState('');
  const [vistaActual, setVistaActual] = useState('lista'); // 'lista', 'tarjetas', 'formulario'
  const [trabajadorSeleccionado, setTrabajadorSeleccionado] = useState(null);

  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    email: '',
    direccion: '',
    fechaNacimiento: '',
    cargo: '',
    salario: '',
    fechaIngreso: '',
    hobbies: '',
    zonas: [],
    medicamentos: [],
    experiencia: '',
    educacion: '',
    certificaciones: ''
  });

  const zonasDisponibles = [
    'Zona Norte', 'Zona Sur', 'Zona Este', 'Zona Oeste', 
    'Centro', 'Zona Rural', 'Zona Urbana'
  ];

  const medicamentosDisponibles = [
    'Analgésicos', 'Antibióticos', 'Antiinflamatorios', 'Antihipertensivos',
    'Antidiabéticos', 'Vitaminas', 'Suplementos', 'Dermatológicos',
    'Respiratorios', 'Gastrointestinales', 'Neurológicos', 'Cardiológicos'
  ];

  const cargosDisponibles = [
    'Representante de Ventas', 'Supervisor de Zona', 'Gerente Regional',
    'Especialista en Producto', 'Coordinador de Ventas', 'Director Comercial'
  ];

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'zonas') {
        setFormulario(prev => ({
          ...prev,
          zonas: checked 
            ? [...prev.zonas, value]
            : prev.zonas.filter(zona => zona !== value)
        }));
      } else if (name === 'medicamentos') {
        setFormulario(prev => ({
          ...prev,
          medicamentos: checked 
            ? [...prev.medicamentos, value]
            : prev.medicamentos.filter(med => med !== value)
        }));
      }
    } else {
      setFormulario(prev => ({ ...prev, [name]: value }));
    }
  };

  const validarFormulario = () => {
    const camposRequeridos = ['nombre', 'apellido', 'cedula', 'telefono', 'email', 'cargo'];
    return camposRequeridos.every(campo => formulario[campo].trim() !== '');
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    if (!validarFormulario()) {
      alert('Por favor, complete todos los campos requeridos.');
      return;
    }

    if (trabajadorEditando) {
      setTrabajadores(prev => 
        prev.map(t => t.id === trabajadorEditando.id 
          ? { ...formulario, id: trabajadorEditando.id }
          : t
        )
      );
      setTrabajadorEditando(null);
    } else {
      const nuevoTrabajador = {
        ...formulario,
        id: Date.now()
      };
      setTrabajadores(prev => [...prev, nuevoTrabajador]);
    }

    reiniciarFormulario();
  };

  const reiniciarFormulario = () => {
    setFormulario({
      nombre: '', apellido: '', cedula: '', telefono: '', email: '',
      direccion: '', fechaNacimiento: '', cargo: '', salario: '',
      fechaIngreso: '', hobbies: '', zonas: [], medicamentos: [],
      experiencia: '', educacion: '', certificaciones: ''
    });
    setMostrarFormulario(false);
    setTrabajadorEditando(null);
    setVistaActual('lista');
  };

  const editarTrabajador = (trabajador) => {
    setFormulario(trabajador);
    setTrabajadorEditando(trabajador);
    setMostrarFormulario(true);
  };

  const eliminarTrabajador = (id) => {
    if (window.confirm('¿Está seguro de eliminar este trabajador?')) {
      setTrabajadores(prev => prev.filter(t => t.id !== id));
    }
  };

  const trabajadoresFiltrados = trabajadores.filter(trabajador =>
    trabajador.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    trabajador.apellido.toLowerCase().includes(filtro.toLowerCase()) ||
    trabajador.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
    trabajador.cedula.includes(filtro)
  );

  const verDetallesTrabajador = (trabajador) => {
    setTrabajadorSeleccionado(trabajador);
    setVistaActual('detalles');
  };

  const volverALista = () => {
    setTrabajadorSeleccionado(null);
    setVistaActual('lista');
  };

  const mostrarNuevoFormulario = () => {
    setTrabajadorEditando(null);
    setFormulario({
      nombre: '', apellido: '', cedula: '', telefono: '', email: '',
      direccion: '', fechaNacimiento: '', cargo: '', salario: '',
      fechaIngreso: '', hobbies: '', zonas: [], medicamentos: [],
      experiencia: '', educacion: '', certificaciones: ''
    });
    setVistaActual('formulario');
    setMostrarFormulario(true);
  };

  const editarDesdeDetalle = (trabajador) => {
    setFormulario(trabajador);
    setTrabajadorEditando(trabajador);
    setVistaActual('formulario');
    setMostrarFormulario(true);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🏥 Sistema de Gestión de Personal Farmacéutico</h1>
        <p>Panel de Supervisión de Ventas</p>
      </header>

      <div className="container">
        {/* Menú de Navegación */}
        <div className="menu-navegacion">
          <div className="botones-menu">
            <button 
              className={`btn-menu ${vistaActual === 'lista' ? 'activo' : ''}`}
              onClick={() => setVistaActual('lista')}
            >
              📋 Lista de Trabajadores
            </button>
            <button 
              className={`btn-menu ${vistaActual === 'tarjetas' ? 'activo' : ''}`}
              onClick={() => setVistaActual('tarjetas')}
            >
              🗂️ Vista de Tarjetas
            </button>
            <button 
              className="btn btn-primary"
              onClick={mostrarNuevoFormulario}
            >
              ➕ Nuevo Trabajador
            </button>
          </div>
          
          {(vistaActual === 'lista' || vistaActual === 'tarjetas') && (
            <div className="filtro">
              <input
                type="text"
                placeholder="🔍 Buscar trabajador..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="input-filtro"
              />
            </div>
          )}
        </div>

        {/* Vista de Formulario */}
        {vistaActual === 'formulario' && (
          <div className="formulario-container">
            <div className="formulario-header">
              <button className="btn-volver" onClick={reiniciarFormulario}>
                ← Volver
              </button>
              <h2>{trabajadorEditando ? '✏️ Editar Trabajador' : '👤 Registrar Nuevo Trabajador'}</h2>
            </div>
            
            <form onSubmit={manejarEnvio} className="formulario">
              <div className="seccion">
                <h3>📋 Datos Personales</h3>
                <div className="campos-grid">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre *"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    required
                  />
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido *"
                    value={formulario.apellido}
                    onChange={manejarCambio}
                    required
                  />
                  <input
                    type="text"
                    name="cedula"
                    placeholder="Cédula *"
                    value={formulario.cedula}
                    onChange={manejarCambio}
                    required
                  />
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono *"
                    value={formulario.telefono}
                    onChange={manejarCambio}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formulario.email}
                    onChange={manejarCambio}
                    required
                  />
                  <input
                    type="date"
                    name="fechaNacimiento"
                    placeholder="Fecha de Nacimiento"
                    value={formulario.fechaNacimiento}
                    onChange={manejarCambio}
                  />
                </div>
                <textarea
                  name="direccion"
                  placeholder="Dirección"
                  value={formulario.direccion}
                  onChange={manejarCambio}
                  rows="2"
                />
              </div>

              <div className="seccion">
                <h3>💼 Información Laboral</h3>
                <div className="campos-grid">
                  <select
                    name="cargo"
                    value={formulario.cargo}
                    onChange={manejarCambio}
                    required
                  >
                    <option value="">Seleccionar Cargo *</option>
                    {cargosDisponibles.map(cargo => (
                      <option key={cargo} value={cargo}>{cargo}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    name="salario"
                    placeholder="Salario"
                    value={formulario.salario}
                    onChange={manejarCambio}
                  />
                  <input
                    type="date"
                    name="fechaIngreso"
                    placeholder="Fecha de Ingreso"
                    value={formulario.fechaIngreso}
                    onChange={manejarCambio}
                  />
                </div>
                <textarea
                  name="experiencia"
                  placeholder="Experiencia Previa"
                  value={formulario.experiencia}
                  onChange={manejarCambio}
                  rows="2"
                />
              </div>

              <div className="seccion">
                <h3>🎯 Zonas de Trabajo</h3>
                <div className="checkbox-grid">
                  {zonasDisponibles.map(zona => (
                    <label key={zona} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="zonas"
                        value={zona}
                        checked={formulario.zonas.includes(zona)}
                        onChange={manejarCambio}
                      />
                      {zona}
                    </label>
                  ))}
                </div>
              </div>

              <div className="seccion">
                <h3>💊 Medicamentos que Vende</h3>
                <div className="checkbox-grid">
                  {medicamentosDisponibles.map(medicamento => (
                    <label key={medicamento} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="medicamentos"
                        value={medicamento}
                        checked={formulario.medicamentos.includes(medicamento)}
                        onChange={manejarCambio}
                      />
                      {medicamento}
                    </label>
                  ))}
                </div>
              </div>

              <div className="seccion">
                <h3>🎨 Información Adicional</h3>
                <div className="campos-grid">
                  <textarea
                    name="hobbies"
                    placeholder="Hobbies e Intereses"
                    value={formulario.hobbies}
                    onChange={manejarCambio}
                    rows="2"
                  />
                  <textarea
                    name="educacion"
                    placeholder="Educación"
                    value={formulario.educacion}
                    onChange={manejarCambio}
                    rows="2"
                  />
                  <textarea
                    name="certificaciones"
                    placeholder="Certificaciones"
                    value={formulario.certificaciones}
                    onChange={manejarCambio}
                    rows="2"
                  />
                </div>
              </div>

              <div className="botones-formulario">
                <button type="submit" className="btn btn-success">
                  {trabajadorEditando ? '💾 Actualizar' : '✅ Registrar'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={reiniciarFormulario}
                >
                  🔄 Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Vista de Lista Compacta */}
        {vistaActual === 'lista' && (
          <div className="lista-compacta">
            <h2>📋 Lista de Trabajadores ({trabajadoresFiltrados.length})</h2>
            
            {trabajadoresFiltrados.length === 0 ? (
              <div className="mensaje-vacio">
                {filtro ? '🔍 No se encontraron trabajadores con ese criterio' : '📝 No hay trabajadores registrados'}
              </div>
            ) : (
              <div className="tabla-trabajadores">
                <div className="tabla-header">
                  <div className="col-nombre">👤 Nombre</div>
                  <div className="col-cargo">💼 Cargo</div>
                  <div className="col-telefono">📞 Teléfono</div>
                  <div className="col-acciones">⚙️ Acciones</div>
                </div>
                {trabajadoresFiltrados.map(trabajador => (
                  <div key={trabajador.id} className="fila-trabajador" onClick={() => verDetallesTrabajador(trabajador)}>
                    <div className="col-nombre">
                      <strong>{trabajador.nombre} {trabajador.apellido}</strong>
                      <small>{trabajador.cedula}</small>
                    </div>
                    <div className="col-cargo">{trabajador.cargo}</div>
                    <div className="col-telefono">{trabajador.telefono}</div>
                    <div className="col-acciones">
                      <button 
                        className="btn-icono btn-editar"
                        onClick={(e) => {
                          e.stopPropagation();
                          editarDesdeDetalle(trabajador);
                        }}
                        title="Editar"
                      >
                        ✏️
                      </button>
                      <button 
                        className="btn-icono btn-eliminar"
                        onClick={(e) => {
                          e.stopPropagation();
                          eliminarTrabajador(trabajador.id);
                        }}
                        title="Eliminar"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Vista de Tarjetas */}
        {vistaActual === 'tarjetas' && (
          <div className="vista-tarjetas">
            <h2>🗂️ Vista de Tarjetas ({trabajadoresFiltrados.length})</h2>
            
            {trabajadoresFiltrados.length === 0 ? (
              <div className="mensaje-vacio">
                {filtro ? '🔍 No se encontraron trabajadores con ese criterio' : '📝 No hay trabajadores registrados'}
              </div>
            ) : (
              <div className="tarjetas-grid">
                {trabajadoresFiltrados.map(trabajador => (
                  <div key={trabajador.id} className="tarjeta-trabajador" onClick={() => verDetallesTrabajador(trabajador)}>
                    <div className="tarjeta-header">
                      <h3>{trabajador.nombre} {trabajador.apellido}</h3>
                      <div className="acciones">
                        <button 
                          className="btn-icono btn-editar"
                          onClick={(e) => {
                            e.stopPropagation();
                            editarDesdeDetalle(trabajador);
                          }}
                          title="Editar"
                        >
                          ✏️
                        </button>
                        <button 
                          className="btn-icono btn-eliminar"
                          onClick={(e) => {
                            e.stopPropagation();
                            eliminarTrabajador(trabajador.id);
                          }}
                          title="Eliminar"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    
                    <div className="tarjeta-contenido">
                      <p><strong>🆔 Cédula:</strong> {trabajador.cedula}</p>
                      <p><strong>💼 Cargo:</strong> {trabajador.cargo}</p>
                      <p><strong>📞 Teléfono:</strong> {trabajador.telefono}</p>
                      <p><strong>📧 Email:</strong> {trabajador.email}</p>
                      
                      {trabajador.zonas.length > 0 && (
                        <div className="info-section">
                          <strong>🎯 Zonas:</strong>
                          <div className="tags">
                            {trabajador.zonas.slice(0, 2).map(zona => (
                              <span key={zona} className="tag tag-zona">{zona}</span>
                            ))}
                            {trabajador.zonas.length > 2 && (
                              <span className="tag tag-mas">+{trabajador.zonas.length - 2}</span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {trabajador.medicamentos.length > 0 && (
                        <div className="info-section">
                          <strong>💊 Medicamentos:</strong>
                          <div className="tags">
                            {trabajador.medicamentos.slice(0, 2).map(med => (
                              <span key={med} className="tag tag-medicamento">{med}</span>
                            ))}
                            {trabajador.medicamentos.length > 2 && (
                              <span className="tag tag-mas">+{trabajador.medicamentos.length - 2}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Vista de Detalles */}
        {vistaActual === 'detalles' && trabajadorSeleccionado && (
          <div className="vista-detalles">
            <div className="detalles-header">
              <button className="btn-volver" onClick={volverALista}>
                ← Volver a la Lista
              </button>
              <div className="acciones-detalle">
                <button 
                  className="btn btn-primary"
                  onClick={() => editarDesdeDetalle(trabajadorSeleccionado)}
                >
                  ✏️ Editar
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => {
                    eliminarTrabajador(trabajadorSeleccionado.id);
                    volverALista();
                  }}
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>

            <div className="detalles-contenido">
              <div className="detalles-card">
                <h1>{trabajadorSeleccionado.nombre} {trabajadorSeleccionado.apellido}</h1>
                
                <div className="detalles-grid">
                  <div className="detalle-seccion">
                    <h3>📋 Información Personal</h3>
                    <div className="detalle-item">
                      <strong>🆔 Cédula:</strong> {trabajadorSeleccionado.cedula}
                    </div>
                    <div className="detalle-item">
                      <strong>📞 Teléfono:</strong> {trabajadorSeleccionado.telefono}
                    </div>
                    <div className="detalle-item">
                      <strong>📧 Email:</strong> {trabajadorSeleccionado.email}
                    </div>
                    {trabajadorSeleccionado.fechaNacimiento && (
                      <div className="detalle-item">
                        <strong>🎂 Fecha de Nacimiento:</strong> {trabajadorSeleccionado.fechaNacimiento}
                      </div>
                    )}
                    {trabajadorSeleccionado.direccion && (
                      <div className="detalle-item">
                        <strong>🏠 Dirección:</strong> {trabajadorSeleccionado.direccion}
                      </div>
                    )}
                  </div>

                  <div className="detalle-seccion">
                    <h3>💼 Información Laboral</h3>
                    <div className="detalle-item">
                      <strong>👔 Cargo:</strong> {trabajadorSeleccionado.cargo}
                    </div>
                    {trabajadorSeleccionado.salario && (
                      <div className="detalle-item">
                        <strong>💰 Salario:</strong> ${trabajadorSeleccionado.salario}
                      </div>
                    )}
                    {trabajadorSeleccionado.fechaIngreso && (
                      <div className="detalle-item">
                        <strong>📅 Fecha de Ingreso:</strong> {trabajadorSeleccionado.fechaIngreso}
                      </div>
                    )}
                    {trabajadorSeleccionado.experiencia && (
                      <div className="detalle-item">
                        <strong>🎯 Experiencia:</strong> {trabajadorSeleccionado.experiencia}
                      </div>
                    )}
                  </div>

                  {trabajadorSeleccionado.zonas.length > 0 && (
                    <div className="detalle-seccion">
                      <h3>🎯 Zonas de Trabajo</h3>
                      <div className="tags-detalle">
                        {trabajadorSeleccionado.zonas.map(zona => (
                          <span key={zona} className="tag tag-zona">{zona}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {trabajadorSeleccionado.medicamentos.length > 0 && (
                    <div className="detalle-seccion">
                      <h3>💊 Medicamentos que Vende</h3>
                      <div className="tags-detalle">
                        {trabajadorSeleccionado.medicamentos.map(med => (
                          <span key={med} className="tag tag-medicamento">{med}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {(trabajadorSeleccionado.hobbies || trabajadorSeleccionado.educacion || trabajadorSeleccionado.certificaciones) && (
                    <div className="detalle-seccion">
                      <h3>🎨 Información Adicional</h3>
                      {trabajadorSeleccionado.hobbies && (
                        <div className="detalle-item">
                          <strong>🎨 Hobbies:</strong> {trabajadorSeleccionado.hobbies}
                        </div>
                      )}
                      {trabajadorSeleccionado.educacion && (
                        <div className="detalle-item">
                          <strong>🎓 Educación:</strong> {trabajadorSeleccionado.educacion}
                        </div>
                      )}
                      {trabajadorSeleccionado.certificaciones && (
                        <div className="detalle-item">
                          <strong>📜 Certificaciones:</strong> {trabajadorSeleccionado.certificaciones}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
