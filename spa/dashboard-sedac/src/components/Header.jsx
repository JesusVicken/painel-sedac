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
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 240;

function Header({ filtro, setFiltro, handleDrawerToggle, isMobile }) {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#004d2b',
                color: '#fff',
                ml: { sm: `${drawerWidth}px` },
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {isMobile && (
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <DashboardIcon />

                    {/* Título completo para telas maiores */}
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        noWrap
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Dashboard SEDAC – Ativos e Infraestrutura
                    </Typography>

                    {/* Título reduzido para telas menores */}
                    <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        noWrap
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        Dashboard SEDAC
                    </Typography>
                </Box>

                <FormControl variant="standard" sx={{ minWidth: 160 }}>
                    <InputLabel
                        sx={{
                            color: '#fff',
                            '&.Mui-focused': { color: '#fff' },
                        }}
                    >
                        Filtro de Ativos
                    </InputLabel>
                    <Select
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
            </Toolbar>
        </AppBar>
    );
}

export default Header;
