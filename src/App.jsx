import React, { useState, useEffect } from 'react';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
import UserItem from './Components/UserItem';
import Dashboard from './Components/Dashboard';
import { initialUsers } from './Data/Data.js';

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);
 
  
  
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    
  }, []);
  
  const addUser = (user) => {
    const newUser = {
      ...user,
      id: Date.now()
    };
    setUsers([...users, newUser]);
  };
  
  
  const updateUser = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    setEditingUser(null);
  };
  

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };
  

  const startEditing = (user) => {
    setEditingUser(user);
  };
  

  const cancelEditing = () => {
    setEditingUser(null);
  };

  const adminCount = users.filter(user => user.role === 'admin').length;
  
  return (
    <div>
      <h1>Panel Administrativo de Usuarios</h1>
      
      <Dashboard totalUsers={users.length} adminCount={adminCount}/>
      
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} cancelEditing={cancelEditing}/>
      
      <UserList users={users} onDelete={deleteUser} onEdit={startEditing}/>
    </div>
  );
}

export default App;