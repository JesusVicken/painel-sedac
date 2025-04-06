import { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { LineChart as LineChartIcon } from 'lucide-react';

const allData = {
    2023: [
        { name: 'Jan', norte: 320, sul: 210 },
        { name: 'Feb', norte: 290, sul: 180 },
        { name: 'Mar', norte: 400, sul: 300 },
        { name: 'Apr', norte: 450, sul: 310 },
        { name: 'May', norte: 380, sul: 270 },
        { name: 'Jun', norte: 300, sul: 250 },
        { name: 'Jul', norte: 370, sul: 230 },
        { name: 'Aug', norte: 390, sul: 260 },
        { name: 'Sep', norte: 410, sul: 290 },
        { name: 'Oct', norte: 360, sul: 280 },
        { name: 'Nov', norte: 420, sul: 310 },
        { name: 'Dec', norte: 480, sul: 330 },
    ],
    2024: [
        { name: 'Jan', norte: 400, sul: 240 },
        { name: 'Feb', norte: 300, sul: 139 },
        { name: 'Mar', norte: 200, sul: 980 },
        { name: 'Apr', norte: 278, sul: 390 },
        { name: 'May', norte: 189, sul: 480 },
        { name: 'Jun', norte: 239, sul: 380 },
        { name: 'Jul', norte: 349, sul: 430 },
        { name: 'Aug', norte: 420, sul: 310 },
        { name: 'Sep', norte: 300, sul: 240 },
        { name: 'Oct', norte: 280, sul: 210 },
        { name: 'Nov', norte: 310, sul: 330 },
        { name: 'Dec', norte: 390, sul: 290 },
    ],
};

const LinhaAtivos = () => {
    const [ano, setAno] = useState(2024);

    const handleChange = (event) => {
        setAno(event.target.value);
    };

    return (
        <div className="p-4 rounded-2xl bg-[#0f172a] text-white shadow-lg w-full" style={{ height: '450px', width: '1000px' }}>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <LineChartIcon className="text-white" size={22} />
                    <h2 className="text-white text-xl font-semibold">Ativos por Mês</h2>
                </div>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel id="ano-label" sx={{ color: '#fff' }}>Ano</InputLabel>
                    <Select
                        labelId="ano-label"
                        id="ano-select"
                        value={ano}
                        label="Ano"
                        onChange={handleChange}
                        sx={{ color: '#fff', borderColor: '#fff', '.MuiOutlinedInput-notchedOutline': { borderColor: '#334155' }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#22d3ee' } }}
                    >
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2024}>2024</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={allData[ano]} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#cbd5e1" />
                    <YAxis stroke="#cbd5e1" />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', color: '#fff' }}
                        labelStyle={{ color: '#94a3b8' }}
                    />
                    <Line type="monotone" dataKey="norte" stroke="#6366f1" strokeWidth={2} />
                    <Line type="monotone" dataKey="sul" stroke="#22d3ee" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LinhaAtivos;