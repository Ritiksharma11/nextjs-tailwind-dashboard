import React from 'react'
import ChartCom from './ChartCom'
import Header from './Header'
import RecentOrders from './RecentOrders'
import TopCards from './TopCards'

const Dashboard = () => {
    return (
        <div className='col-span-12 bg-gray-100 '>
            <Header />
            <TopCards />
            <div className='px-3 md:px-5 grid grid-cols-1 md:grid-cols-3 gap-5 bg-gray-100  '>
                <ChartCom />
                <RecentOrders />
            </div>
        </div>
    )
}

export default Dashboard