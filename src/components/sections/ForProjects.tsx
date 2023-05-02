import { Button } from "@/components/common/Button"
import Title from "@/components/common/Title"

const ForProjects = () => {
    const cardContent = [{ title: "Asset Security", desc: "No need to transfer a rented NFT to the tenant, ensuring that the NFT does not incur any losses or theft." },
    { title: "Complete Control", desc: "Retrieve your staked NFT whenever (as long as it’s not rented), modify rental information at any time." },
    { title: "Batch Listing", desc: "List multiple NFTs all at once. " },
    { title: "Unparalleled Simplicity", desc: "Just select a guild and list!" },
    { title: "Instant Yield", desc: "Earn yield income as a LP as soon as the NFT is listed in the pool." }]
    return (
        <section className="container mx-auto px-2 md:px-0 mt-20 relative">
            {/* Absolute styling elements */}
            <div className='bg-primary bg-opacity-30 h-32 w-32 absolute left-0 top-[70%] -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl"></div>
            <div className="h-1 w-1 rounded-full bg-primary absolute right-8 top-28 shadow-xl"></div>
            <Title title="For Projects" />

            <div className="">
                <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 place-items-center">
                    {cardContent?.map((content, i) => <ProjectCard key={content.title} index={i} title={content.title} desc={content.desc} length={cardContent.length} />)}
                </div>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-10">
                <Button type="primary" label="Contact us" />
                <Button type="primary" label="Integrate with Double" />
            </div>


        </section>
    )
}

const ProjectCard = ({ title, desc, index, length }: { title: string, desc: string, index: number, length: number }) => {
    return (
        <div className="relative">
            <div className={`md:translate-y-[220px] translate-y-[400px] translate-x-0 rotate-90 md:rotate-0 md:translate-x-[180px] h-[20px] bg-primary bg-opacity-[15%] ${index + 1 === length ? 'hidden' : ''}`}></div>

            <div className="text-[60px] font-techno opacity-[15%] translate-y-8 text-primary">0{index + 1}</div>
            <div className="relative max-w-[250px]" key={title}>
                <img src="/shapes/projects-shape.svg" className="w-full h-full" />
                <div className="w-full max-w-[200px] p-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h3 className="font-techno text-white text-[20px]">{title}</h3>
                    <p className="font-lexend text-gray text-[14px] mt-2">{desc}</p>
                </div>
            </div>

        </div>
    )
}

export default ForProjects