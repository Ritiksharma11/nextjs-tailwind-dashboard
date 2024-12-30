'use client'
import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'M',
    sale: 19900,
  },
  {
    name: 'Tu',
    sale: 18800,
  },
  {
    name: 'W',
    sale: 19200,
  },
  {
    name: 'Th',
    sale: 20400,
  },
  {
    name: 'Fr',
    sale: 24800,
  },
  {
    name: 'Sa',
    sale: 22600,
  },
  {
    name: 'Su',
    sale: 21100,
  },
];


const ChartCom = () => {
  return (
    <div className='h-80 w-full col-span-3 md:col-span-2 bg-white p-2 rounded-lg'>
      <h1 className='text-center md:text-lg font-semibold py-3'>Daily Sales</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="sale" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartCom