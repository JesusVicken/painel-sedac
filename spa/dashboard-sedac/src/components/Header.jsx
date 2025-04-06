import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    IconButton,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 240;

function Header({ filtro, setFiltro }) {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#004d2b', // mesma cor do Sidebar
                color: '#fff',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                paddingX: 2,
                ml: `${drawerWidth}px`,
                width: `calc(100% - ${drawerWidth}px)`,
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1 }} />

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        justifyContent: 'center',
                        flex: 1,
                    }}
                >
                    <DashboardIcon />
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        noWrap
                        textAlign="center"
                    >
                        Dashboard SEDAC – Ativos e Infraestrutura
                    </Typography>
                </Box>

                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <FormControl variant="standard" sx={{ minWidth: 160 }}>
                        <InputLabel
                            id="filtro-label"
                            sx={{
                                color: '#fff',
                                '&.Mui-focused': { color: '#fff' },
                            }}
                        >
                            Filtro de Ativos
                        </InputLabel>
                        <Select
                            labelId="filtro-label"
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                            sx={{
                                color: '#fff',
                                '& .MuiSelect-icon': { color: '#fff' },
                                '& .MuiInputBase-input': { color: '#fff' },
                            }}
                        >
                            <MenuItem value="">Todos os Ativos</MenuItem>
                            <MenuItem value="servidores">Servidores</MenuItem>
                            <MenuItem value="switches">Switches</MenuItem>
                            <MenuItem value="racks">Racks</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
