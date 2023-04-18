import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip
} from "recharts";

const Statistics = () => {

    const data = [
        { subject: 'Assignment-01', Mark: 55, fullMark: 60 },
        { subject: 'Assignment-02', Mark: 59, fullMark: 60 },
        { subject: 'Assignment-03', Mark: 60, fullMark: 60 },
        { subject: 'Assignment-04', Mark: 58, fullMark: 60 },
        { subject: 'Assignment-05', Mark: 59, fullMark: 60 },
        { subject: 'Assignment-06', Mark: 58, fullMark: 60 },
        { subject: 'Assignment-07', Mark: 60, fullMark: 60 },
        { subject: 'Assignment-08', Mark: 60, fullMark: 60 },
    ];

    return (

        <div className='my-container'>
            <h2 className='text-3xl font-bold text-center mt-10 mb-5'>Assignment Analytics</h2>
            <div className='flex justify-center'>
                <RadarChart
                    cx={300}
                    cy={200}
                    outerRadius={150}
                    width={600}
                    height={500}
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Tooltip />
                    <Radar
                        name="Mike"
                        dataKey="Mark"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </div>
        </div>
    );
};

export default Statistics;