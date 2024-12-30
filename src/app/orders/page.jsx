import React from 'react'
import { data } from '@/data/data.js'
import { FaShoppingBag } from 'react-icons/fa'

const OrdersPage = () => {
    return (
        <div className='bg-gray-100 min-h-screen' >
            <div className='flex justify-between px-3 md:px-5 pt-4'>
                <h1 className='text-lg md:text-xl font-semibold'>Orders</h1>
                <h1 className='font-medium'>Welcome Back,Ritik</h1>
            </div>
            <div className='bg-white p-3 rounded-lg mx-5 my-5'>
                <div className='flex justify-between font-medium pb-2 px-3'>
                    <span>Order</span>
                    <span>Status</span>
                    <span className='hidden md:flex'>Last Order</span>
                    <span className='hidden lg:flex'>Method</span>
                </div>
                <ul className='flex flex-col gap-2'>
                    {
                        data.map((order, id) => (
                            <li key={id} className='bg-gray-100 p-2 my-2 flex justify-between items-center rounded-md'>
                                <div className='flex justify-center items-center '>
                                    <div className='p-2 rounded-md bg-gray-300'>
                                        <FaShoppingBag className='text-purple-800' />
                                    </div>
                                    <div className='ml-4'>
                                        <p className='text-lg font-bold '>{order.name.first}</p>
                                        <p className='font-semibold text-gray-700 '>${order.total}</p>
                                    </div>
                                </div>

                                <div className={order.status == 'Completed' ? 'bg-blue-200 py-1 px-2 rounded-md' : order.status == 'Processing' ? 'bg-green-200 py-1 px-2 rounded-md' : 'bg-yellow-300 py-1 px-2 rounded-md'}>
                                    {order.status}
                                </div>

                                <div className='hidden md:flex'>
                                    {order.date}
                                </div>

                                <p className='hidden lg:flex'>{order.method}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default OrdersPage