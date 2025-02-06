// import React from 'react'
import './Dashboard.css'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'

 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

const Dashboard = () => {

  const data = [
    {
      name: 'Page A',
      Usage: 4000,
      Posts_Made: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      Usage: 3000,
      Posts_Made: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      Usage: 2000,
      Posts_Made: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      Usage: 2780,
      Posts_Made: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      Usage: 1890,
      Posts_Made: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      Usage: 2390,
      Posts_Made: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      Usage: 3490,
      Posts_Made: 4300,
      amt: 2100,
    },
    {
      name: 'Page H',
      Usage: 2390,
      Posts_Made: 3800,
      amt: 2500,
    },
    {
      name: 'Page I',
      Usage: 3490,
      Posts_Made: 4300,
      amt: 2100,
    },
  ];
 
  return (
    <div>
      {/* <div className=''>
        <h3>Dashboard </h3>
      </div> */}

      <div className=''>
        <h3>MERCHANT REQUESTS </h3>
      </div>

      <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ACCEPTED</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PENDING</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REJECTED</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REPORTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Posts_Made" fill="#8884d8" />
                <Bar dataKey="Usage" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Posts_Made" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Usage" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </div>
  )
}

export default Dashboard