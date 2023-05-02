import AnimatedArrow from '@/components/common/AnimatedArrow'
import { Button } from '@/components/common/Button'
import Link from 'next/link'


const Banner = () => {
    return (
        <section className='container px-2 md:px-0 mx-auto py-16 relative'>
            {/* Absolute styling elements */}
            <div className='bg-primary bg-opacity-40 h-32 w-32 absolute left-1/2 top-[27%] -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            {/* <div className='bg-secondary bg-opacity-20 h-32 w-32 absolute right-0 top-0 -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div> */}
            <div className='bg-secondary bg-opacity-20 h-32 w-32 absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            <div className='bg-secondary bg-opacity-20 h-32 w-32 absolute right-0 top-full -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            {/* Absolute styling elements */}
            <div className='bg-primary bg-opacity-20 h-40 w-40 absolute left-0 top-[100%] -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl absolute top-[80%] left-0"></div>
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl"></div>
            <div className="h-1 w-1 rounded-full bg-primary absolute right-8 bottom-[20%] shadow-xl"></div>
            <div className=''>
                <h1 className='font-techno text-white text-[65px] text-center leading-[80px]'>Collect, sell & <span className='text-transparent bg-clip-text bg-gradient'>rent</span> super <br />rare nfts</h1>
                <p className='text-gray text-[18px] text-center font-lexend max-w-[800px] mx-auto mt-4'>UniRent allow NFT owners to list their NFTs for rent, and interested renters can browse through the listings and make offers. </p>
                <div className='flex items-center justify-center space-x-8 mt-8'>
                    <Link href="/collection"> <Button type="primary" label="Explore" /></Link>

                    <Button type="secondary" label="Lend NFTs" />

                </div>
                <div className='md:absolute top-1/2 flex justify-center mt-4'>
                    <AnimatedArrow />

                </div>
                {/* <div className='h-[40px] w-[20px] clipped-btn bg-red-400'></div> */}
                <div className='flex flex-col md:flex-row items-center justify-center md:space-x-8 mt-16'>
                    <div className='h-[350px] w-[250px] flex items-center justify-center relative'>
                        <img src="/shapes/image-shape.svg" className='h-full w-full absolute' />
                        <div className='clipped top-0 h-[307px] w-[230px]'>
                            <img src="/images/nft-2.png" className='h-full w-full' />
                        </div>
                    </div>
                    <div className='h-[450px] w-[350px] flex items-center justify-center relative'>
                        <img src="/shapes/image-shape.svg" className='h-full w-full absolute' />
                        <div className='clipped top-0 h-[430px] w-[330px]'>
                            <img src="/images/nft-1.png" className='h-full w-full' />
                        </div>
                    </div>
                    <div className='h-[350px] w-[250px] flex items-center justify-center relative'>
                        <img src="/shapes/image-shape.svg" className='h-full w-full absolute' />
                        <div className='clipped top-0 h-[307px] w-[230px]'>
                            <img src="/images/nft-3.png" className='h-full w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner