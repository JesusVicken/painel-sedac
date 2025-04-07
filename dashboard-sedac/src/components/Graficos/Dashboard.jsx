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
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Card
                    className="rounded-2xl shadow-md text-white"
                    sx={{
                        bgcolor: '#0f172a', 
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            className="text-white text-center"
                        >
                            Servidores por Data Center
                        </Typography>

                        <Servidores data={servidoresData} />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card
                    className="rounded-2xl shadow-md text-white"
                    sx={{
                        bgcolor: '#0f172a', // fundo uniforme
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            className="text-white text-center"
                        >
                            Ativos por Data Center
                        </Typography>

                        <Ativos data={ativosData} />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12}>
                <ServidoresPorSecao />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
