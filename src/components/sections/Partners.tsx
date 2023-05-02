import Title from "@/components/common/Title"

const Partners = () => {
    const partners = [{ name: "Media Eye", logo: "/icons/media-eye.svg" },
    { name: "OIX", logo: "/icons/oix.svg" },
    { name: "Binance", logo: "/icons/binance.svg" },
    { name: "Coinbase", logo: "/icons/coinbase.svg" },
    { name: "Opensea", logo: "/icons/opensea.svg" }]


    return (
        <section className="container mx-auto px-2 md:px-0 mt-20 relative">

            {/* Absolute styling elements */}
            <div className='bg-primary bg-opacity-20 h-32 w-32 absolute left-0 top-[50%] -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl"></div>
            <div className="h-1 w-1 rounded-full bg-primary absolute right-8 top-28 shadow-xl"></div>

            <Title title="Partners" />
            <div className="mt-16 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-items-center">
                {partners?.map((partner, i) => <Bubble key={i} name={partner.name} index={i} logo={partner.logo} rotate={i % 2 !== 0 ? true : false} />)}



            </div>
        </section>
    )
}

const Bubble = ({ name, logo, rotate, index }: { name: string, logo: string, rotate?: boolean, index?: number }) => {
    return (
        <div className={` flex items-center ${rotate ? 'flex-col-reverse -mt-6' : 'flex-col'}`}>
            <img src={logo} alt="" className="my-2" />
            <div className="relative">
                <img src="/shapes/partner-line.svg" className={`absolute ${index === 0 && 'hidden'} ${rotate ? 'bottom-0' : 'top-0'} -left-[45%] w-[90px]`} />
                <img src="/shapes/half-eclipse.svg" className={`${rotate && 'rotate-180'}`} />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-techno text-[22px]">{name}</p>
            </div>
        </div>
    )
}

export default Partners