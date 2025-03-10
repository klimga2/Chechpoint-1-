import React from 'react';
import UserItem from './UserItem';
import '../style/UserList.css'
const UserList = ({ users, onDelete, onEdit }) => {
  if (users.length === 0) {
    return <div>No hay usuarios registrados</div>;
  }
  
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <div>
        {users.map(user => (
          <UserItem 
            key={user.id} 
            user={user} 
            onDelete={onDelete} 
            onEdit={onEdit} 
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;