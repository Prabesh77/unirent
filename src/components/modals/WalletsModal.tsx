import React from 'react'
import Modal from '../common/Modal'

type Props = {
    isOpen: boolean
    onClose: () => void
    setShowRentalModal?: any
}

const WalletsModal = ({ isOpen, onClose, setShowRentalModal }: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={() => onClose()}>
            <div className='w-full'>

                <div className='bg-white-line pb-[1px] '>
                    <div className=' h-full w-full bg-black  flex flex-row justify-between -ml-[1px] -mt-[2px]'>
                        <Wallet onClick={() => { onClose(); setShowRentalModal(true) }} name="Meta Mask" desc="Connect to your meta mask wallet" icon="/icons/metamask.png" classes='border-r border-gray  ' />
                        <Wallet onClick={() => { onClose(); setShowRentalModal(true) }} name="Wallet Connect" desc="Connect to your wallet connect wallet" icon="/icons/wallet-connect.png" classes='' />

                    </div>
                </div>
                <div className='bg-white-line pb-[1px] '>
                    <div className=' h-full w-full bg-black  flex items-center justify-between -ml-[1px]'>
                        <Wallet onClick={() => { onClose(); setShowRentalModal(true) }} name="Coinbase Wallet" desc="Connect to your meta mask wallet" icon="/icons/coinbase.png" classes='border-r border-gray  ' />
                        <Wallet onClick={() => { onClose(); setShowRentalModal(true) }} name="OKX" desc="Connect to your meta mask wallet" icon="/icons/okx.png" classes='' />
                    </div>
                </div>
                <div className='flex items-start bg-white-line-vertical pr-[1px] w-1/2 '>
                    <Wallet onClick={() => { onClose(); setShowRentalModal(true) }} name="Bit Keep" desc="Connect to your meta mask wallet" icon="/icons/bitkeep.png" classes='h-full -ml-[1px] w-full bg-black' />
                </div>
            </div>
        </Modal>
    )
}

const Wallet = ({ name, desc, icon, classes, onClick }: { onClick: () => void, name: string, desc: string, icon: string, classes?: string }) => {
    return (
        <div onClick={onClick} className={`flex flex-col items-center justify-start text-center p-4  ${classes} w-1/2 cursor-pointer`}>
            <img src={icon} className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]" />
            <p className="text-white text-[15px] md:text-[18px] font-lexend mt-2">{name}</p>
            <p className="text-gray text-[13px] md:text-[15px] font-lexend">{desc}</p>
        </div>
    )
}

// const Wallets = () => {
//     return (
//         <div className='w-full'>
//             <div className='w-full'>

//                 <div className='bg-white-line pb-[1px] '>
//                     <div className=' h-full w-full bg-black  flex flex-row justify-between -ml-[1px] -mt-[1px]'>
//                         <Wallet name="Meta Mask" desc="Connect to your meta mask wallet" icon="/icons/metamask.png" classes='border-r border-gray  ' />
//                         <Wallet name="Wallet Connect" desc="Connect to your wallet connect wallet" icon="/icons/wallet-connect.png" classes='' />

//                     </div>
//                 </div>
//                 <div className='bg-white-line pb-[1px] '>
//                     <div className=' h-full w-full bg-black  flex items-center justify-between -ml-[1px]'>
//                         <Wallet name="Coinbase Wallet" desc="Connect to your meta mask wallet" icon="/icons/coinbase.png" classes='border-r border-gray  ' />
//                         <Wallet name="OKX" desc="Connect to your meta mask wallet" icon="/icons/okx.png" classes='' />
//                     </div>
//                 </div>
//                 <div className='flex items-start bg-white-line-vertical pr-[1px] w-1/2 '>
//                     <Wallet name="Bit Keep" desc="Connect to your meta mask wallet" icon="/icons/bitkeep.png" classes='h-full -ml-[1px] w-full bg-black' />
//                 </div>
//             </div>
//         </div>
//     )
// }



export default WalletsModal