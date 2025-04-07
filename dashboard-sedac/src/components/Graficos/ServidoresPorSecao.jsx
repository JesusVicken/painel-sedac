import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from 'recharts';
import { useMediaQuery } from '@mui/material';

const data = [
  { secao: 'SEVIR', servidores: 12 },
  { secao: 'SEDAC', servidores: 20 },
  { secao: 'SESEG', servidores: 8 },
  { secao: 'SESAP', servidores: 15 },
  { secao: 'SESAR', servidores: 6 },
  { secao: 'GESTIC', servidores: 10 },
  { secao: 'SENET', servidores: 9 },
  { secao: 'SECID', servidores: 11 },
  { secao: 'SESUP', servidores: 14 },
  { secao: 'SDADOS', servidores: 7 },
];

const ServidoresPorSecao = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className="rounded-2xl bg-[#0f172a] text-white shadow-lg w-full">
      <h2 className="text-white text-xl font-semibold mb-4 text-center pt-4">
        Qtd. de Servidores por Seção
      </h2>
      <div
        style={{
          minWidth: isMobile ? '100%' : '550px',
          height: isMobile ? '320px' : '400px',
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, bottom: isMobile ? 60 : 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              dataKey="secao"
              stroke="#cbd5e1"
              interval={0}
              tick={{
                angle: -40,
                textAnchor: 'end',
                fontSize: isMobile ? 10 : 12,
                fill: '#cbd5e1',
              }}
            />
            <YAxis allowDecimals={false} stroke="#cbd5e1" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', color: '#fff' }}
              labelStyle={{ color: '#94a3b8' }}
            />
            <Bar dataKey="servidores" fill="#38bdf8" radius={[8, 8, 0, 0]}>
              <LabelList
                dataKey="servidores"
                position="top"
                style={{
                  fill: '#fff',
                  fontWeight: 'bold',
                  fontSize: isMobile ? 10 : 14,
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ServidoresPorSecao;
