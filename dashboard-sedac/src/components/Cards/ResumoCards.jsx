import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import DevicesIcon from '@mui/icons-material/Devices';
import LanIcon from '@mui/icons-material/Lan';

const mockData = {
    servidores: { norte: 42, sul: 36 },
    ativos: { norte: 110, sul: 98 },
    racks: { norte: 20, sul: 15 },
    switches: { norte: 30, sul: 28 },
};

const totalServidores = mockData.servidores.norte + mockData.servidores.sul;
const totalAtivos = mockData.ativos.norte + mockData.ativos.sul;
const totalRacks = mockData.racks.norte + mockData.racks.sul;
const totalSwitches = mockData.switches.norte + mockData.switches.sul;

const cards = [
    { title: 'Servidores - Cetec Norte', value: mockData.servidores.norte, icon: <DnsIcon />, bgColor: '#475569' },
    { title: 'Servidores - Cetec Sul', value: mockData.servidores.sul, icon: <DnsIcon />, bgColor: '#64748b' },
    { title: 'Total de Servidores', value: totalServidores, icon: <StorageIcon />, bgColor: '#1e293b' },
    { title: 'Ativos - Cetec Norte', value: mockData.ativos.norte, icon: <DevicesIcon />, bgColor: '#fbbf24' },
    { title: 'Ativos - Cetec Sul', value: mockData.ativos.sul, icon: <DevicesIcon />, bgColor: '#facc15' },
    { title: 'Total de Ativos', value: totalAtivos, icon: <StorageIcon />, bgColor: '#22c55e' },
    { title: 'Racks - Cetec Norte', value: mockData.racks.norte, icon: <StorageIcon />, bgColor: '#c084fc' },
    { title: 'Racks - Cetec Sul', value: mockData.racks.sul, icon: <StorageIcon />, bgColor: '#a855f7' },
    { title: 'Total de Racks', value: totalRacks, icon: <StorageIcon />, bgColor: '#8b5cf6' },
    { title: 'Switches - Cetec Norte', value: mockData.switches.norte, icon: <LanIcon />, bgColor: '#60a5fa' },
    { title: 'Switches - Cetec Sul', value: mockData.switches.sul, icon: <LanIcon />, bgColor: '#93c5fd' },
    { title: 'Total de Switches', value: totalSwitches, icon: <LanIcon />, bgColor: '#60a5fa' },
];

const ResumoCards = () => (
    <Box sx={{
        overflowX: 'hidden',
        px: { xs: 0.5, md: 4 }, // Padding ainda menor no mobile
        py: 4,
        width: '100%'
    }}>
        <Grid container spacing={1} sx={{ // Espaçamento reduzido entre cards
            width: '100%',
            margin: 0,
            '& .MuiGrid-item': {
                display: 'flex',
                flexDirection: 'column',
                padding: '4px !important' // Padding mínimo entre os cards
            }
        }}>
            {cards.map((card, index) => (
                <Grid item xs={6} sm={4} md={3} key={index} sx={{
                    // Garante que o último card não fique sozinho
                    '&:nth-last-child(1):nth-child(odd)': {
                        width: '100%'
                    }
                }}>
                    <Card
                        sx={{
                            backgroundColor: card.bgColor,
                            borderRadius: 2, // Bordas mais suaves
                            boxShadow: 2, // Sombra mais suave
                            color: '#fff',
                            transition: 'transform 0.2s',
                            '&:hover': { transform: 'scale(1.02)' }, // Efeito hover mais sutil
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: { xs: 100, sm: 120 } // Altura menor no mobile
                        }}
                    >
                        <CardContent sx={{
                            px: 1,
                            py: 1.5,
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Box display="flex" alignItems="flex-start" gap={1}>
                                <Box sx={{
                                    fontSize: { xs: 24, sm: 32 }, // Ícone menor no mobile
                                    color: '#fff',
                                    mt: 0.5
                                }}>
                                    {card.icon}
                                </Box>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="subtitle2"
                                        fontSize={{ xs: 10, sm: 12 }} // Texto menor no mobile
                                        color="inherit"
                                        sx={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2, // Limita a 2 linhas
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            lineHeight: 1.2
                                        }}
                                    >
                                        {card.title}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="inherit"
                                        fontSize={{ xs: 14, sm: 16 }} // Tamanho ajustável
                                    >
                                        {card.value}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default ResumoCards;