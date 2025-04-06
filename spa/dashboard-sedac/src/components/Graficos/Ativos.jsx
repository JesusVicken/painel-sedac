import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const COLORS = ['#fb923c', '#f97316'];

const Ativos = ({ data }) => {
    const total = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <div
            className="p-4 bg-[#0f172a] rounded-2xl shadow-lg text-white"
            style={{ width: '450px', height: '360px' }} 
        >
            <h2 className="text-xl font-semibold mb-4">Total de Ativos nos Data Centers</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120} // ⬅️ Aumentando o raio para preencher melhor
                        label={({ name, value }) => `${name}: ${value}`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Label
                            value={`Total: ${total}`}
                            position="center"
                            fill="#ff1"
                            fontSize={16}
                            fontWeight="bold"
                        />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Ativos;
