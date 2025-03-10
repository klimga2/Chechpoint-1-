import React from 'react';
import '../style/UserItem.css'; 
const UserItem = ({ user, onDelete, onEdit }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <div>
        <button onClick={() => onEdit(user)}>Editar</button>
        <button onClick={() => onDelete(user.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default UserItem;
