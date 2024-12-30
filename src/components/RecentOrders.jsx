import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { data } from '../data/data.js'

const RecentOrders = () => {
    return (
        <div className='col-span-3 md:col-span-1 bg-white rounded-md h-80 w-full m-auto p-4 mt-5 md:mt-0 '>
            <h1 className='text-lg font-semibold pb-3'>Recent Orders</h1>
            <ul className='flex flex-col gap-2'>
                {
                    data.map((order, id) => (
                        <li key={id} className='bg-gray-100 p-2 my-2 flex items-center'>
                            <div className='p-2 rounded-md bg-gray-300'>
                                <FaShoppingBag className='text-purple-800' />
                            </div>
                            <div className='w-full flex justify-between'>
                                <div className='ml-4'>
                                    <p className='text-lg font-bold '>{order.name.first}</p>
                                    <p className='font-semibold text-gray-700 '>${order.total}</p>
                                </div>
                                <p>{order.date}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RecentOrders