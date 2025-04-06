import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import DevicesIcon from '@mui/icons-material/Devices';

const drawerWidth = 240;

const Sidebar = () => {
    return (
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
            {/* 🔻 Removido o <Toolbar /> para colar no topo */}

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

            <Box sx={{ overflow: 'auto' }}>
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
        </Drawer>
    );
};

export default Sidebar;
