import { Button } from "@/components/common/Button"
import Title from "@/components/common/Title"

const ForGuilds = () => {
    return (
        <section className="max-w-[1400px] mx-auto px-2 md:px-0 mt-28 relative">
            {/* Absolute styling elements */}
            <div className='bg-primary bg-opacity-20 h-40 w-40 absolute right-[5%] top-[80%] -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            {/* <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl absolute top-[80%] left-[10%]"></div> */}
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl absolute left-[10%] top-[10%]"></div>
            <div className="h-1 w-1 rounded-full bg-primary absolute right-[10%] top-[20%] shadow-xl"></div>
            <Title title="For Guilds" />
            <div className="mt-16">
                <div className=" flex items-center justify-center w-[400px] md:w-[500px] lg:w-[600px] mx-auto p-8">
                    <img src="/images/guilds-banner.svg" className="h-full w-full" />
                </div>
                <div className="mt-8 lg:-mt-40 hidden lg:block">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <One />
                        <Five />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto">
                        <Two />
                        <Four />
                    </div>
                    <div className="flex justify-center mt-4 md:mt-0">
                        <Three />
                    </div>

                </div>
                <div className="mt-8 container mx-auto lg:hidden grid grid-cols-1 md:grid-cols-2 place-items-center">
                    <MobileListItem number="01" title="No Collatrol Required" desc="More accessible, more practical" />
                    <MobileListItem number="02" title="No Collatrol Required" desc="More accessible, more practical" />
                    <MobileListItem number="03" title="No Collatrol Required" desc="More accessible, more practical" />
                    <MobileListItem number="04" title="No Collatrol Required" desc="More accessible, more practical" />
                    <MobileListItem number="05" title="No Collatrol Required" desc="More accessible, more practical" />
                </div>
                <div className="flex items-center justify-center mt-8 space-x-6">
                    <Button type="primary" label="Create your Guild" />
                    <Button type="primary" label="Join the best guild" />
                </div>
            </div>
        </section>
    )
}

const MobileListItem = ({ number, title, desc }: { number: string, title: string, desc: string }) => {
    return (
        <div className="flex  min-h-[100px] ">
            <div className="h-[62px] flex items-center">
                <div className=" relative ">
                    <img src="/shapes/small-number-shape.svg" />
                    <h2 className="font-techno text-white text-[24px] md:text-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{number}</h2>
                </div>

            </div>
            <div className="text-right">
                <h3 className="font-techno text-white text-[20px]">{title}</h3>
                <p className="font-lexend text-gray text-[14px] max-w-[250px] mt-1">{desc}</p>
            </div>


        </div>
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
        <div className="flex space-x-6  min-h-[100px] ">
            <div className="text-right py-4">
                <h3 className="font-techno text-white text-[20px]">No Collateral Required</h3>
                <p className="font-lexend text-gray text-[14px] max-w-[250px] mt-1">More accessible, more practical</p>
            </div>
            <div className="h-[62px] flex items-center">
                <div className=" relative ">
                    <img src="/shapes/small-number-shape.svg" />
                    <h2 className="font-techno text-white text-[24px] md:text-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">O2</h2>
                </div>
                <div className="">
                    <img src="/shapes/small-number-line.svg" className="translate-y-3 w-[120px]" />
                </div>
            </div>

        </div>
    )
}

const Three = () => {
    return (
        <div className=" relative"> <div className="">
            <img src="/shapes/small-number-line.svg" className="absolute left-1/2 -translate-x-1/2 -top-[40%] w-[100px] rotate-[270deg]" />
        </div>
            <div className="flex space-x-6 ">
                <div className="h-[62px] flex items-center rotate-180">
                    <div className=" relative ">
                        <img src="/shapes/small-number-shape.svg" />
                        <h2 className="font-techno text-white text-[24px] md:text-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180">O3</h2>
                    </div>

                </div>
                <div className="text-left min-h-[100px] py-4">
                    <h3 className="font-techno text-white text-[20px]">Easy Subletting</h3>
                    <p className="font-lexend text-gray text-[14px] max-w-[250px] mt-1">Rent out an NFT you are renting Rent Now</p>
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
const Five = () => {
    return (
        <div className="flex space-x-6 ">
            <div className="h-[62px] flex items-center rotate-180">
                <div className=" relative ">
                    <img src="/shapes/small-number-shape.svg" />
                    <h2 className="font-techno text-white text-[24px] md:text-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180">O5</h2>
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

export default ForGuilds