import Title from "@/components/common/Title"

const ForRenters = () => {
    return (
        <section className="container mx-auto px-2 md:px-0 mt-20  relative">
            {/* Absolute styling elements */}
            <div className='bg-primary bg-opacity-20 h-40 w-40 absolute left-0 top-[100%] -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl absolute top-[80%] left-0"></div>
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl"></div>
            <div className="h-1 w-1 rounded-full bg-primary absolute right-8 top-28 shadow-xl"></div>
            <Title title="For Renters" />
            <div className=" h-full w-full relative mt-16 md:mt-32">
                <div className="max-w-[1100px] mx-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between">
                    <One />
                    <Two />
                </div>
                <div className="lg:absolute lg:top-[70%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 h-[500px] w-[450px] mx-auto">
                    <img src="/images/renters-banner-temp.png" />
                </div>

                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-between lg:mt-16 -mt-8">
                    <Three />
                    <Four />
                </div>
            </div>
        </section>
    )
}

const One = () => {
    return (
        <div className="flex space-x-6  min-h-[100px] ">
            <div className="text-right py-4">
                <h3 className="font-techno text-white text-[20px]">No Collateral Required</h3>
                <p className="font-lexend text-gray text-[14px] max-w-[250px] mt-1">More accessible, more practical</p>
            </div>
            <div className="h-[62px] flex items-center">
                <div className=" relative ">
                    <img src="/shapes/small-number-shape.svg" />
                    <h2 className="font-techno text-white text-[24px] md:text-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">O1</h2>
                </div>
                <div className="">
                    <img src="/shapes/small-number-line.svg" className="translate-y-3 w-[120px]" />
                </div>
            </div>

        </div>
    )
}

const Two = () => {
    return (
        <div className="flex space-x-6 ">
            <div className="h-[62px] flex items-center rotate-180">
                <div className=" relative ">
                    <img src="/shapes/small-number-shape.svg" />
                    <h2 className="font-techno text-white text-[24px] md:text-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180">O2</h2>
                </div>
                <div className="">
                    <img src="/shapes/small-number-line.svg" className="-translate-y-3 rotate-360 scale-y-[-1] w-[120px]" />
                </div>
            </div>
            <div className="text-left min-h-[100px] py-4">
                <h3 className="font-techno text-white text-[20px]">Rent on Demand</h3>
                <p className="font-lexend text-gray text-[14px] max-w-[250px] mt-1">Start using your NFT as soon as it&apos;s rented, no need to wai</p>
            </div>
        </div>
    )
}

const Three = () => {
    return (
        <div className="flex space-x-6  min-h-[100px] ">
            <div className="text-right py-4">
                <h3 className="font-techno text-white text-[20px]">Automatic Expiration</h3>
                <p className="font-lexend text-gray text-[14px] max-w-[250px] mt-1">No hassle of returning NFTs, saving time and gas</p>
            </div>
            <div className="h-[62px] flex items-center">
                <div className=" relative ">
                    <img src="/shapes/small-number-shape.svg" />
                    <h2 className="font-techno text-white text-[24px] md:text-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">O3</h2>
                </div>
                <div className="">
                    <img src="/shapes/small-number-line.svg" className="-translate-y-3 w-[120px] scale-y-[-1]" />
                </div>
            </div>

        </div>
    )
}

const Four = () => {
    return (
        <div className="flex space-x-6 ">
            <div className="h-[62px] flex items-center rotate-180">
                <div className=" relative ">
                    <img src="/shapes/small-number-shape.svg" />
                    <h2 className="font-techno text-white text-[24px] md:text-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180">O4</h2>
                </div>
                <div className="">
                    <img src="/shapes/small-number-line.svg" className="translate-y-3 w-[120px] rotate-360" />
                </div>
            </div>
            <div className="text-left min-h-[100px] py-4">
                <h3 className="font-techno text-white text-[20px]">Easy Subletting</h3>
                <p className="font-lexend text-gray text-[14px] max-w-[250px] mt-1">Rent out an NFT you are renting Rent Now</p>
            </div>
        </div>
    )
}

export default ForRenters