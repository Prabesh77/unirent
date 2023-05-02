import React, { useState } from 'react'
import Modal from '../common/Modal'
import { Button } from '../common/Button'
import { IoWarningOutline, IoCloseOutline } from 'react-icons/io5'

import Link from 'next/link'

type Props = {
    isOpen: boolean
    onClose: () => void
    onSuccess: () => void
}

const DeployLoadingModal = ({ isOpen, onClose, onSuccess }: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={() => onClose()}>
            <div className='text-center'>
                <img src="/icons/deploy.svg" className='mx-auto' />
                <p className='max-w-[400px] text-white font-lexend text-[18px] mt-8'>  The contract is being deployed, please wait a minute.</p>
                <Link href="#"><p className='mt-2 text-transparent bg-clip-text bg-gradient font-lexend text-[17px]'>  View on block explorer</p></Link>
                <div className='mt-6 flex items-center justify-center'>
                    <Button onClick={() => onSuccess()} type="primary" label="Close" classes='md:w-[300px]' />
                </div>
            </div>
        </Modal>
    )
}

export default DeployLoadingModal