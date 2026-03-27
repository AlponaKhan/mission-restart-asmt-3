import React from 'react';
import { BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from 'recharts';



// const data = [  
// { name: "5 star", count: 32000 },
// { name: "4 star", count: 18200 },
//  { name: "3 star", count: 5400 }, 
//  { name: "2 star", count: 2000 }, 
//  {name: "1 star", count: 1400 }
// ];

const RatingChart = ({rating}) => {
    const data = rating;

    return (
        <div className='w-full h-full p-5'>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={data} layout='vertical' margin={{top:5, right:30, left:40, bottom:5}} barCategoryGap='5%'>
                    <XAxis type='number' axisLine={{stroke: '#888'}} tickLine={true} tick={{fill: '#666', fontSize: 12}}>

                    </XAxis>

                    <YAxis dataKey='name' type='category' reversed={true} axisLine={{stroke: '#888'}} tickLine={true} tick={{fill: '#666', fontSize: 12}} width={60}>

                    </YAxis>
                    <Tooltip cursor={{fill: 'transparent'}}></Tooltip>
                    <Bar dataKey="count" fill= '#ff9800' radius={[0,4,4,0]} barSize={30}></Bar>

                </BarChart>
            </ResponsiveContainer>
            
        </div>
    );
};

export default RatingChart;