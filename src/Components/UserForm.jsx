import React, { useState, useEffect } from 'react';
import '../style/UserForm.css';
const UserForm = ({ addUser, updateUser, editingUser, cancelEditing }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'viewer'
  });
  
  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({
        name: '',
        email: '',
        role: 'viewer'
      });
    }
  }, [editingUser]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingUser) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    
    setFormData({
      name: '',
      email: '',
      role: 'viewer'
    });
  };
  
  return (
    <div>
      <h2>{editingUser ? 'Editar Usuario' : 'Agregar Usuario'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>Rol:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
            <option value="viewer">Visualizador</option>
          </select>
        </div>
        
        <div>
          <button type="submit">
            {editingUser ? 'Actualizar' : 'Agregar'}
          </button>
          
          {editingUser && (
            <button 
              type="button" 
              onClick={cancelEditing}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;