import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const COLORS = ['#fb923c', '#f97316'];

const Ativos = ({ data }) => {
    const total = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <div
            className="bg-[#0f172a] rounded-2xl shadow-lg text-white p-2 sm:p-4"
            style={{
                width: '100%',
                maxWidth: '450px',
                height: '360px',
                margin: '0 auto',
                boxSizing: 'border-box',
            }}
        >
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
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
