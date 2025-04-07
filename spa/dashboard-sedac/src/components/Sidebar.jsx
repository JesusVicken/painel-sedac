import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
    useMediaQuery,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import DevicesIcon from '@mui/icons-material/Devices';

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    const drawerContent = (
        <Box sx={{ width: drawerWidth, backgroundColor: '#004d2b', height: '100%', color: '#fff' }}>
            <Box display="flex" justifyContent="center" alignItems="center" py={1} mt={1}>
                <img
                    src="/camaraLogo.jpeg"
                    alt="Logo SEDAC"
                    style={{
                        width: '80%',
                        height: 'auto',
                        borderRadius: '12px',
                    }}
                />
            </Box>

            <List>
                <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.2)' }} />
                <ListItem button>
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard Geral" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <DnsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Servidores" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <DevicesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ativos" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <StorageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Racks" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            {/* Drawer móvel (celular) */}
            {isMobile && (
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { width: drawerWidth, backgroundColor: '#004d2b', color: '#fff' },
                    }}
                >
                    {drawerContent}
                </Drawer>
            )}

            {/* Drawer fixo (desktop) */}
            {!isMobile && (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#004d2b',
                            color: '#fff',
                        },
                    }}
                >
                    {drawerContent}
                </Drawer>
            )}
        </>
    );
};

export default Sidebar;
