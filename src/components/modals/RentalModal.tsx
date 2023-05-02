import React, { useState } from 'react'
import Modal from '../common/Modal'
import { Button } from '../common/Button'
import { IoWarningOutline, IoClose, IoCloseOutline } from 'react-icons/io5'

import Link from 'next/link'

type Props = {
    isOpen: boolean
    onClose: () => void
}

const RentalModal = ({ isOpen, onClose }: Props) => {
    const [rentalDays, setRentalDays] = useState(0)
    return (
        <Modal isOpen={isOpen} onClose={() => onClose()}>
            <div className='relative'>
                <IoCloseOutline className='absolute top-0 right-0 text-white text-2xl cursor-pointer' onClick={() => onClose()} />

                <h2 className='text-white font-techno text-[25px] text-center'>Rental</h2>
                <div className='bg-line-gradient h-[1px] w-full mt-4'></div>
                <div className='font-lexend flex items-center space-x-4 mt-4'><p className='text-white text-[15px] font-[300]'>Rental Duration</p><p className='text-gray text-[14px] flex items-center'>( <img src="/icons/eth.svg" className='h-4 w-4 opacity-50' />0.0015/day)</p></div>

                <div className='bg-filter-border p-[1px] mt-3'>
                    <div className='bg-black h-full w-full p-2 flex items-center justify-between'>
                        <Button type="primary" label="-" classes='w-[70px]' onClick={() => rentalDays > 0 && setRentalDays((prev) => prev - 1)} />
                        <p className='text-white font-lexend text-[13px]'>{rentalDays} Days</p>
                        <Button type="primary" label="+" classes='w-[70px]' onClick={() => setRentalDays((prev) => prev + 1)} />
                    </div>
                </div>
                <div className='bg-white-line h-[1px] mt-4 opacity-60'></div>

                <div className='mt-3'>
                    <div className='flex items-center space-x-2'>
                        <p className='font-lexend text-white flex items-center font-[300] text-[16px]'>Total : <img src="/icons/eth.svg" className='h-4 w-4 mx-1' /> 0.0015/day</p>
                        <p className='font-lexend text-gray text-[12px]'>(= 0.0015 x 5)</p>
                    </div>
                    <p className='font-lexend text-gray text-[13px] mt-1 font-[300]'>Estimated expires at Mar-12-2023 21:51:30</p>
                </div>


                <Button type="primary" label="Rent" classes='md:w-[250px] mx-auto mt-6' />
                <Link href="#"><div className='mt-4 text-[#E12B2B] flex items-center space-x-1 w-[100px]'><IoWarningOutline className='text-lg' /><p className='font-lexend text-[13px]'>Cautions</p></div></Link>

            </div>
        </Modal>
    )
}

export default RentalModal