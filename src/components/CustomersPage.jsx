import React from 'react'
import Header from './Header'
import { FaUser } from "react-icons/fa";
import { data } from '../data/data.js'

const CustomersPage = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-3 md:px-5 pt-4'>
        <h1 className='text-lg md:text-xl font-semibold'>Customers</h1>
        <h1 className='font-medium'>Welcome Back,Ritik</h1>
      </div>
      <div className='bg-white p-4 m-3 md:m-5 rounded-lg'>
        <div className='flex w-full justify-between font-medium px-2'>
          <span>Name</span>
          <span>Email</span>
          <span className='hidden md:flex'>Last Order</span>
          <span className='hidden lg:flex'>Method</span>
        </div>

        <ul className='flex flex-col gap-4 mt-5'>
          {
            data.map((customer, id) => (
              <li className='flex items-center justify-between text-start bg-gray-100 p-2 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <div className='p-2 bg-gray-300 rounded-md '>
                    <FaUser className='text-purple-800 ' />
                  </div>
                  <p className='font-medium text-start'>{customer.name.first} {customer.name.last}</p>
                </div>

                <div>
                  {customer.name.first}@gmail.com
                </div>

                <div className='hidden md:flex'>
                  {customer.date}
                </div>

                <div className='hidden lg:flex'>
                  {customer.method}
                </div>
              </li>
            ))
          }
        </ul>

      </div>
    </div>
  )
}

export default CustomersPage