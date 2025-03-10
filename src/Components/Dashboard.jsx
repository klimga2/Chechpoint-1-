import React from 'react';
import '../style/Dashboard.css'
const Dashboard = ({ totalUsers, adminCount }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <div>
          <div>Total de Usuarios</div>
          <div>{totalUsers}</div>
        </div>
        
        <div>
          <div>Administradores</div>
          <div>{adminCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;