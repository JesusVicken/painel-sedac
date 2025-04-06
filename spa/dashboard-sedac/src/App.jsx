import './App.css';
import Header from './components/Header';
import ResumoCards from './components/Cards/ResumoCards';
import Sidebar from './components/Sidebar';
import { Box, Toolbar } from '@mui/material';
import { useState } from 'react';
import Dashboard from './components/Graficos/Dashboard';

const drawerWidth = 240;

function App() {
  const [filtro, setFiltro] = useState('');

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      <Sidebar />
      <main className="flex-grow ml-[100px]">
        <Header filtro={filtro} setFiltro={setFiltro} />
        <Toolbar />
        <Box className="p-4 space-y-8">
          <ResumoCards />
          <Dashboard />
        </Box>
      </main>
    </div>
  );
}

export default App;
