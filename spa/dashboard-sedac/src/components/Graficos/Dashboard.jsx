
import { Grid, Typography, Card, CardContent } from '@mui/material';
import Servidores from './Servidores';
import Ativos from './Ativos';
//import LinhaAtivos from './LinhaAtivos';
import ServidoresPorSecao from './ServidoresPorSecao';
//import LinhaAtivos from './LinhaAtivos';

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
                <Card className="rounded-2xl shadow-md bg-gray-800 text-white">
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Servidores por Data Center
                        </Typography>
                        <Servidores data={servidoresData} />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card className="rounded-2xl shadow-md bg-gray-800 text-white">
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold" gutterBottom marginLeft='130px'>
                            Ativos por Local
                        </Typography>
                        <Ativos data={ativosData} />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12}>
                <ServidoresPorSecao />
                {/*<LinhaAtivos /> */}
            </Grid>
        </Grid>
    );
};

export default Dashboard;