import React from 'react'

type Props = {
    logo: string
    name: string
    twitter: string
    website?: string
}

const PartnerCard = ({ logo, name, twitter, website }: Props) => {
    return (
        <div className={`relative  bg-[url(/shapes/partner-shape.svg)] bg-contain bg-no-repeat w-[300px]  bg-gray-600 h-[160px] `} >
            {/* <img src="/shapes/partner-shape.svg" className="w-full h-full" /> */}
            <div className="w-full  flex items-center space-x-6  h-full text-center pl-4 pb-3">

                <img src={logo} alt="" className='h-[100px] w-[100px]' />
                <div className='flex flex-col space-y-3'>
                    <h2 className='text-[22px] text-white font-techno'>{name}</h2>
                    <div className='flex items-center space-x-4'>
                        <a href={twitter} target="_blank"><img src="/icons/twitter-2.svg" alt="" className='h-6 w-6' /></a>
                        <a href={website} target="_blank"><img src="/icons/global.svg" alt="" className='h-6 w-6' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerCard