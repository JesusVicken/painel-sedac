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
    return (
      <div
        className="rounded-2xl bg-[#0f172a] text-white shadow-lg w-full"
        style={{ height: '460px', width: '600px' }}
      >
        <h2 className="text-white text-xl font-semibold mb-4 text-center">
          Qtd. de Servidores por Seção
        </h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              dataKey="secao"
              stroke="#cbd5e1"
              tick={{ angle: -45, textAnchor: 'end', fontSize: 12, fill: '#cbd5e1' }}
              interval={0}
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
                style={{ fill: '#fff', fontWeight: 'bold', fontSize: 14 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default ServidoresPorSecao;
  