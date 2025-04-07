import { Grid, Typography, Card, CardContent } from '@mui/material';
import Servidores from './Servidores';
import Ativos from './Ativos';
import ServidoresPorSecao from './ServidoresPorSecao';

const Dashboard = () => {
    const servidoresData = [
        { name: 'Cetec Norte', servidores: 42 },
        { name: 'Cetec Sul', servidores: 36 },
    ];

    const ativosData = [
        { name: 'Cetec Norte', value: 110 },
        { name: 'Cetec Sul', value: 98 },
    ];

    return (
        <Grid container spacing={{ xs: 2, md: 4 }} sx={{
            width: '100%',
            marginLeft: { xs: '-8px', sm: 0 }, // Corrige o alinhamento no mobile
            paddingLeft: { xs: '8px', sm: 0 } // Compensa o margin negativo
        }}>
            <Grid item xs={12} md={6}>
                <Card
                    sx={{
                        bgcolor: '#0f172a',
                        borderRadius: { xs: '8px', md: '16px' },
                        boxShadow: { xs: 1, md: 3 },
                        color: '#fff',
                        marginLeft: { xs: 0, md: 0 }
                    }}
                >
                    <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                color: '#fff',
                                textAlign: 'center',
                                fontSize: { xs: '1rem', sm: '1.25rem' }
                            }}
                        >
                            Servidores por Data Center
                        </Typography>
                        <Servidores data={servidoresData} />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card
                    sx={{
                        bgcolor: '#0f172a',
                        borderRadius: { xs: '8px', md: '16px' },
                        boxShadow: { xs: 1, md: 3 },
                        color: '#fff'
                    }}
                >
                    <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                color: '#fff',
                                textAlign: 'center',
                                fontSize: { xs: '1rem', sm: '1.25rem' }
                            }}
                        >
                            Ativos por Data Center
                        </Typography>
                        <Ativos data={ativosData} />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: { xs: 1, md: 0} }}>
                <ServidoresPorSecao />
            </Grid>
        </Grid>
    );
};

export default Dashboard;