import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    LabelList,
} from 'recharts';

const Servidores = ({ data }) => (
    <div className="p-4 bg-[#0f172a] rounded-2xl shadow-lg text-white" style={{ width: '330px', height: '360px' }}>
        {/* <h2 className="text-xl font-semibold mb-4">Total de Servidores</h2> */}
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                barCategoryGap="30%"
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                <XAxis dataKey="name" tick={{ fontSize: 14, fill: '#cbd5e1' }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 14, fill: '#cbd5e1' }} />
                <Bar dataKey="servidores" fill="#3b82f6" radius={[10, 10, 0, 0]}>
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

export default Servidores;