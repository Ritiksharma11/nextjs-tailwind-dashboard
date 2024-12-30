import React from 'react'

const TopCards = () => {
    return (
        <div className='px-3 md:px-5 grid gap-4 p-4 lg:grid-cols-5'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between p-4 w-full border rounded-lg '>
                <div className='flex justify-between w-full '>
                    <div>
                        <p className='text-lg font-semibold'>$7,358</p>
                        <p className='font-semibold text-gray-600'>Daily Revenue</p>
                    </div>
                    <p className='bg-blue-200 p-2 rounded-md flex justify-center items-center'>
                        <span>18%</span>
                    </p>
                </div>
            </div>

            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between p-4 w-full border rounded-lg '>
                <div className='flex justify-between w-full '>
                    <div>
                        <p className='text-lg font-semibold'>$1,625,358</p>
                        <p className='font-semibold text-gray-600'>YTD Revenue</p>
                    </div>
                    <p className='bg-blue-200 p-2 rounded-md flex justify-center items-center'>
                        <span>11%</span>
                    </p>
                </div>
            </div>

            <div className='col-span-1 bg-white flex justify-between p-4 w-full border rounded-lg '>
                <div className='flex justify-between w-full '>
                    <div>
                        <p className='text-lg font-semibold'>12,224</p>
                        <p className='font-semibold text-gray-600'>Customers</p>
                    </div>
                    <p className='bg-blue-200 p-2 rounded-md flex justify-center items-center'>
                        <span>8%</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopCards