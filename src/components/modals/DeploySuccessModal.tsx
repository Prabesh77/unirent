import React, { useState } from 'react'
import Modal from '../common/Modal'
import { Button } from '../common/Button'
import { IoWarningOutline, IoCloseOutline } from 'react-icons/io5'

import Link from 'next/link'

type Props = {
    isOpen: boolean
    onClose: () => void
}

const DeploySuccessModal = ({ isOpen, onClose }: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={() => onClose()}>
            <div className='text-center'>
                <img src="/icons/success.svg" className='mx-auto' />
                <p className='max-w-[500px] text-white font-lexend text-[18px] mt-8'>The contract has been deployed, and all data scans are expected to be completed before 04-12 15:37(local time).</p>
                <p className='max-w-[500px] text-white font-lexend text-[17px] mt-3'>Wrap ERC-4907 address : <Link href=""><span className='text-transparent bg-clip-text bg-gradient'>0xfb45...64de</span></Link></p>
                <Link href="#"><p className='mt-3 text-transparent bg-clip-text bg-gradient font-lexend text-[17px]'>  View on block explorer</p></Link>
                <div className='mt-10 flex space-x-4 items-center justify-center'>
                    <Button type="secondary" label="View on collection" />
                    <Button type="primary" label="Integration tutorials" />

                </div>
            </div>
        </Modal>
    )
}

export default DeploySuccessModal