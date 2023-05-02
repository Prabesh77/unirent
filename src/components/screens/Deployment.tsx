import MainLayout from '@/layout/MainLayout'
import React, { useState } from 'react'
import Dropdown from '../common/Dropdown'
import DeployLoadingModal from '../modals/DeployLoadingModal'
import DeploySuccessModal from '../modals/DeploySuccessModal'

const Deployment = () => {
    const [selectedChain, setSelectedChain] = useState('')
    const chainOptions = ['Ethereum', 'BSC', 'Polygon']
    const [showDeployLoadingModal, setShowDeployLoadingModal] = useState(false)
    const [showDeploySuccessModal, setShowDeploySuccessModal] = useState(false)
    return (
        <MainLayout>
            <DeployLoadingModal isOpen={showDeployLoadingModal} onSuccess={() => { setShowDeployLoadingModal(false); setShowDeploySuccessModal(true) }} onClose={() => { setShowDeploySuccessModal(true); setShowDeployLoadingModal(false) }} />
            <DeploySuccessModal isOpen={showDeploySuccessModal} onClose={() => setShowDeploySuccessModal(false)} />
            <div className='container mx-auto px-2 md:px-0'>
                <DeploymentHeader />
                <div className='mt-4 md:mt-10'>
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 items-center md:space-x-4'>
                        <Dropdown selected={selectedChain} setSelected={setSelectedChain} options={chainOptions} />
                        <div className="cursor-pointer inner-arrow  bg-filter-border p-[1px] w-full  rotate-180 h-[50px]" >
                            <div className={`cursor-pointer inner-arrow px-1 ml-[1px] h-full w-full bg-black  bg-row-gradient text-white flex flex-row-reverse items-center justify-center text-[14px] font-lexend space-x-2 py-1`} >
                                <form className='h-full w-full flex  items-center rotate-180 '>
                                    <div className='flex items-center ml-2 w-full'>
                                        <img src="/icons/search-normal.svg" className='h-5 w-5 opacity-50' /><input type="text" placeholder='Please enter the contract address' className='bg-transparent w-full h-[35px] px-2 outline-none text-white font-lexend placeholder:text-[13px] placeholder:text-gray' />
                                    </div>
                                    <CheckBtn />
                                </form>

                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center h-[400px]  w-full' onClick={() => setShowDeployLoadingModal(true)}>
                        <img src="/images/deploy.svg" className='h-[200px] w-[200px]' />
                    </div>

                    {/* <div className='relative '>
                        <img src="/shapes/gradient-rectangle.svg" />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center '>
                            <h3 className='text-white font-techno text-[24px]'>Tips</h3>
                            <div className='bg-tips-underline h-[1px] w-full mt-1'></div>
                            <p className='text-white text-[15px] font-lexend mt-6 font-[300]'>If your contract is upgradeable, you can directly upgrade your contract to the <span className='text-transparent bg-clip-text bg-gradient'>ERC-4907 contract</span> or <span className='text-transparent bg-clip-text bg-gradient'>ERC-5006 contract.</span></p>
                        </div>
                    </div> */}


                    <div className="gradient-container alt w-full py-4">
                        <div className=' flex flex-col items-center '>
                            <h3 className='text-white font-techno text-[24px]'>Tips</h3>
                            <div className='bg-tips-underline h-[1px]  mt-1 w-[90%]'></div>
                            <p className='text-white text-[15px] font-lexend mt-6 font-[300]'>If your contract is upgradeable, you can directly upgrade your contract to the <a href="#"><span className='text-transparent bg-clip-text bg-gradient'>ERC-4907 contract</span></a> or <a href="#"><span className='text-transparent bg-clip-text bg-gradient'>ERC-5006 contract.</span></a></p>
                        </div>
                    </div>


                </div>
            </div>
        </MainLayout>
    )
}

const CheckBtn = () => {
    return (
        <div className="cursor-pointer inner-arrow h-full bg-border-gradient p-[1px] w-full max-w-[100px] rotate-180" >
            <button className={`cursor-pointer inner-arrow px-2 ml-[1px] h-full w-full  bg-gradient text-white flex items-center justify-center text-[14px] font-lexend space-x-2 py-4`} >
                <span className='rotate-180'>Check</span>
            </button>
        </div>
    )
}

const DeploymentHeader = () => {
    return (
        <div className="bg-[#140621] py-8 flex flex-row md:space-x-8 space-y-4 md:space-y-0 items-center justify-around relative px-4 md:px-8">
            <div className='h-[100px] w-[100px] md:h-[196px] md:w-[196px]'>
                <img src="/images/face-headphone.png" />
            </div>
            <h1 className='text-[30px] md:text-[50px] lg:text-[70px] font-techno text-white text-center'>Integrate with unirent</h1>
            <div className='h-[100px] w-[100px] md:h-[196px] md:w-[196px]'>
                <img src="/images/face-headphone.png" />
            </div>

        </div>
    )
}

export default Deployment