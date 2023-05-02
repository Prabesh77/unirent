import { Button } from "@/components/common/Button"
import Title from "@/components/common/Title"

const ForLenders = () => {
    const cardContent = [{ title: "Asset Security", desc: "No need to transfer a rented NFT to the tenant, ensuring that the NFT does not incur any losses or theft." },
    { title: "Complete Control", desc: "Retrieve your staked NFT whenever (as long as it’s not rented), modify rental information at any time." },
    { title: "Batch Listing", desc: "List multiple NFTs all at once. " },
    { title: "Unparalleled Simplicity", desc: "Just select a guild and list!" },
    { title: "Instant Yield", desc: "Earn yield income as a LP as soon as the NFT is listed in the pool." }]


    return (
        <section className="mt-24 container px-2 md:px-0 mx-auto relative">
            {/* Absolute styling elements */}
            <div className='bg-primary bg-opacity-20 h-32 w-32 absolute left-0 top-[50%] -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl"></div>
            <div className="h-1 w-1 rounded-full bg-primary absolute right-8 top-28 shadow-xl"></div>
            <Title title="For Lenders" />

            <svg className="mt-20 px-8 md:px-16" width="" height="1" viewBox="0 0 1480 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="1480" y2="0.5" stroke="url(#paint0_linear_83_6448)" stroke-dasharray="6 6" />
                <defs>
                    <linearGradient id="paint0_linear_83_6448" x1="-4.96236e-05" y1="0.916667" x2="0.0102525" y2="5.4494" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CB42AD" stop-opacity="0.1" />
                        <stop offset="0.619792" stop-color="#7B39FE" />
                        <stop offset="1" stop-color="#CB42AD" stop-opacity="0.1" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 place-items-center">
                {cardContent?.map(content => <LenderCard key={content.title} title={content.title} desc={content.desc} />)}
            </div>
            <div className="flex justify-center mt-10">
                <Button type="primary" label="List now" />
            </div>
        </section>
    )
}

const LenderCard = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <div className="relative max-w-[300px]" key={title}>
            {/* <div className="border-b border-primary border-dashed w-8 rotate-90 absolute left-[40%] -top-4 "></div> */}
            <img src="/shapes/vertical-short-line.svg" className=" absolute left-1/2 -top-10 " />
            <img src="/shapes/book-shape.svg" className="w-full h-full" />
            <div className="w-full p-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className="font-techno text-white text-[20px]">{title}</h3>
                <p className="font-lexend text-gray text-[14px] mt-2">{desc}</p>
            </div>
        </div>
    )
}

export default ForLenders