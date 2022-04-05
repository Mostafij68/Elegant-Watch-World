import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCharts(data))
    }, []);
    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <div className="charts-container">
                <div className='bar-chart'>
                    <h3>Bar Chart</h3>
                    <BarChart width={350} height={250} data={charts}>
                        <Bar dataKey={"sell"} fill="blue"></Bar>
                        <Bar dataKey={"revenue"} fill="purple"></Bar>
                        <Tooltip></Tooltip>
                        <Legend/>
                        <XAxis dataKey={"month"}></XAxis>
                        <YAxis dataKey={"investment"}></YAxis>
                    </BarChart>
                </div>
                <div className="composed-chart">
                    <h3>Composed Chart</h3>
                    <ComposedChart width={350} height={250} data={charts}>
                        <XAxis dataKey="month"></XAxis>
                        <YAxis dataKey="investment"></YAxis>
                        <Tooltip/>
                        <Legend/>
                        <CartesianGrid stroke="#f5f5f5" />
                        <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;