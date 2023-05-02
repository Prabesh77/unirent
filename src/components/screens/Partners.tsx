import MainLayout from '@/layout/MainLayout'
import React from 'react'
import { Button } from '../common/Button'
import PartnerCard from '../common/PartnerCard'

const Partners = () => {

    const gamePartners = [
        { name: 'Bot Planet', logo: '/logos/bot-planet.png', twitter: '', website: '' },
        { name: 'Glmr Apes', logo: '/logos/glmr-apes.png', twitter: '', website: '' },
        { name: 'Bot Planet', logo: '/logos/bot-planet-2.png', twitter: '', website: '' },
        { name: 'Pooky', logo: '/logos/pooky.png', twitter: '', website: '' },
        { name: 'Prometheus', logo: '/logos/prometheus.png', twitter: '', website: '' },
        { name: 'Actocracy', logo: '/logos/actocracy.png', twitter: '', website: '' },
        { name: 'Crypcade', logo: '/logos/Crypcade.png', twitter: '', website: '' },
        { name: 'Fitevo', logo: '/logos/fitevo.png', twitter: '', website: '' },
    ]

    const ecosystemPartners = [
        { name: 'Tomochain', logo: '/logos/tomochain.png', twitter: '', website: '' },
        { name: 'Zenith', logo: '/logos/zenith.png', twitter: '', website: '' },
        { name: 'Shardeum', logo: '/logos/shardeum.png', twitter: '', website: '' },
        { name: 'Reef', logo: '/logos/reef.png', twitter: '', website: '' },
        { name: 'Fantom', logo: '/logos/fantom.png', twitter: '', website: '' },
        { name: 'Moonbeam', logo: '/logos/moonbeam.png', twitter: '', website: '' },
        { name: 'Bitkeep', logo: '/logos/bitkeep.png', twitter: '', website: '' },
        { name: 'Kapital Dao', logo: '/logos/kapital-dao.png', twitter: '', website: '' },
    ]

    const developerTools = [
        { name: 'Uniblock', logo: '/logos/uniblock.png', twitter: '', website: '' },
        { name: 'Afflux', logo: '/logos/afflux.png', twitter: '', website: '' },
        { name: 'Anmol Network', logo: '/logos/anmol-network.png', twitter: '', website: '' },
        { name: 'Glip', logo: '/logos/glip.png', twitter: '', website: '' },
        { name: 'Ethcode', logo: '/logos/ethcode.png', twitter: '', website: '' },
        { name: 'Metaengine', logo: '/logos/metaengine.png', twitter: '', website: '' },
        { name: 'Chainide', logo: '/logos/chainide.png', twitter: '', website: '' },
        { name: 'Olw Protocal', logo: '/logos/olw-protocol.png', twitter: '', website: '' },
    ]

    const pfp = [
        { name: 'Fluffy Polar', logo: '/logos/fluffy-polar.png', twitter: '', website: '' }
    ]

    const metaverse = [
        { name: 'Oland Box', logo: '/logos/oland-box.png', twitter: '', website: '' },
        { name: 'Mch Verse', logo: '/logos/mch-verse.png', twitter: '', website: '' },
        { name: 'The Cloud City', logo: '/logos/the-cloud-city.png', twitter: '', website: '' },
        { name: 'Ariva Wonde', logo: '/logos/ariva-wonder.png', twitter: '', website: '' },
    ]
    return (
        <MainLayout>
            <div className='container mx-auto'>
                <PartnersHeader />
                <div className='px-2 md:px-0 mt-16'>
                    <PartnerSection title="Game Ecosystem" titleIcon="/icons/game-ecosystem.svg" partners={gamePartners} totalItems={65} />
                    <PartnerSection title="Ecosystem" titleIcon="/icons/refresh.svg" partners={ecosystemPartners} totalItems={25} />
                    <PartnerSection title="Developer Tools" titleIcon="/icons/developer-tool.svg" partners={developerTools} totalItems={8} />
                    <PartnerSection title="PFP" titleIcon="/icons/pfp-cube.svg" partners={pfp} totalItems={1} />
                    <PartnerSection title="Metaverse" titleIcon="/icons/metaverse.svg" partners={metaverse} totalItems={4} />

                    <div className="gradient-container alt w-full py-4 mt-10">
                        <p className='text-white text-center text-[15px] -tracking-[0.9px] font-lexend font-[300]'>We are always looking for partners. If we missed your project , please <a href="#"><span className='text-transparent bg-clip-text bg-gradient font-[400]'>contact us.</span></a> </p>
                    </div>
                </div>
            </div>



        </MainLayout>
    )
}

type PartnerSectionProps = {
    partners: any
    title: string
    titleIcon: string
    totalItems: number
}

const PartnerSection = ({ partners, title, titleIcon, totalItems }: PartnerSectionProps) => {
    return (
        <div className='mt-10 relative'>
            {/* Absolute styling elements */}
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl absolute top-1/2 -left-4"></div>
            <div className="h-1 w-1 rounded-full bg-primary  shadow-xl absolute top-1/3 -right-4"></div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <img src={titleIcon} className={` ${title.includes('Game') ? 'h-[23px] w-[38px]' : 'h-[30px]'}`} />
                    <p className='text-[24px] text-white font-techno'>{title}</p>
                </div>
                <p className='text-gray font-lexend font-[500]'>Total : <span className='text-secondary'>{totalItems < 9 ? "0" + totalItems : totalItems}</span></p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 place-items-center'>
                {partners?.map((partner: any) => <PartnerCard key={partner.logo} name={partner.name} logo={partner.logo} twitter={partner.twitter} website={partner.website} />)}

            </div>

            {totalItems > 8 && <Button type="secondary" label="View all" classes='w-[150px] mx-auto mt-4' />}
        </div>
    )
}

const PartnersHeader = () => {
    return (
        <div className='bg-[#140621] flex flex-col items-start justify-center p-4 md:p-8 bg-[url(/images/partners-banner.svg)] w-full md:bg-contain bg-right bg-no-repeat'>
            <h2 className='text-white text-[30px] font-techno'>Unirent has 100 partners</h2>
            <Button type="secondary" label="Integrate" classes='inline-block mt-4' />
        </div>
    )
}

export default Partners