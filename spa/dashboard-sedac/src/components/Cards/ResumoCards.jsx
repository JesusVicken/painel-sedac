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
    { title: 'Servidores - Cetec Norte', value: mockData.servidores.norte, icon: <DnsIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#475569' },
    { title: 'Servidores - Cetec Sul', value: mockData.servidores.sul, icon: <DnsIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#64748b' },
    { title: 'Total de Servidores', value: totalServidores, icon: <StorageIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#1e293b' },
    { title: 'Ativos - Cetec Norte', value: mockData.ativos.norte, icon: <DevicesIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#fbbf24' },
    { title: 'Ativos - Cetec Sul', value: mockData.ativos.sul, icon: <DevicesIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#facc15' },
    { title: 'Total de Ativos', value: totalAtivos, icon: <StorageIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#22c55e' },
    { title: 'Racks - Cetec Norte', value: mockData.racks.norte, icon: <StorageIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#c084fc' },
    { title: 'Racks - Cetec Sul', value: mockData.racks.sul, icon: <StorageIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#a855f7' },
    { title: 'Total de Racks', value: totalRacks, icon: <StorageIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#8b5cf6' },
    { title: 'Switches - Cetec Norte', value: mockData.switches.norte, icon: <LanIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#60a5fa' },
    { title: 'Switches - Cetec Sul', value: mockData.switches.sul, icon: <LanIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#93c5fd' },
    { title: 'Total de Switches', value: totalSwitches, icon: <LanIcon fontSize="large" sx={{ color: '#fff' }} />, bgColor: '#60a5fa' },
];

const ResumoCards = () => (
    <Grid container spacing={3}>
        {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                    sx={{
                        backgroundColor: card.bgColor,
                        borderRadius: 4,
                        boxShadow: 4,
                        color: '#fff',
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.04)' },
                    }}
                >
                    <CardContent>
                        <Box display="flex" alignItems="center" gap={2}>
                            {card.icon}
                            <Box>
                                <Typography variant="subtitle2" color="inherit">
                                    {card.title}
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" color="inherit">
                                    {card.value}
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
);

export default ResumoCards;