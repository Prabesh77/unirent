

import { IconButton } from "@/components/common/Button"
import MainCard from "@/components/common/MainCard"
import { InnerStraightArrow, ParentArrow } from "@/components/common/Shapes"
import MainLayout from "@/layout/MainLayout"
import { useState } from "react"
import { ActivityTable } from "../common/Table"
import Filters from "../common/Filters"
import OutsideClickHandler from "react-outside-click-handler"

const ACollection = () => {

    const [currentTab, setCurrentTab] = useState(0)
    const [showFilters, setShowFilters] = useState(false)
    const [appliedFilters, setAppliedFilters] = useState([])
    const rentItems = [
        { name: 'Mad Meerkat', price: 4.69, image: '/images/mad-meerkat.png', days: 5 },
        { name: 'Swaggy Man', price: 3.60, image: '/images/swaggy-man.png', days: 33 },
        { name: 'Sword Man', price: 10.50, image: '/images/sword-man.png', days: 80 },
        { name: 'Crook Legend', price: 2.69, image: '/images/crook-legend.png', days: 83 },
        { name: 'Dog', price: 4.69, image: '/images/dog.png', days: 10 },
        { name: 'Lion nft', price: 4.69, image: '/images/lion.png', days: 60 },
        { name: 'Man', price: 10.50, image: '/images/man.png', days: 3 },
        { name: 'Dog NFT', price: 4.69, image: '/images/dog-nft.png', days: 123 },
        { name: 'Rainbow Colors', price: 4.69, image: '/images/rainbow-colors.png', days: 63 },
        { name: 'Old Man', price: 4.69, image: '/images/old-man.png', days: 86 },
        { name: 'Gold Bull Skull', price: 4.69, image: '/images/gold-bull-skull.png', days: 33 },
        { name: 'Polygonal Face', price: 4.69, image: '/images/polygonal-face.png', days: 83 },
        { name: '3D Hero', price: 4.69, image: '/images/3d-hero.png', days: 83 },
        { name: 'Brain NFT', price: 4.69, image: '/images/brain.png', days: 83 },
        { name: 'Wild ORC MASK', price: 4.69, image: '/images/wild-orc-mask.png', days: 83 },
        { name: 'Metallic Sphere', price: 4.69, image: '/images/metallic-sphere.png', days: 83 },
    ]

    const tableHeadings = ["Status", "Item", "Quantity", "Price", "Rental Duration", "Lender", "Renter", "Date"]
    const tableItems = [{ status: 'List', item: "Mad Meerkat", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/mad-meerkat.png" },
    { status: 'List', item: "Swage Man", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/swaggy-man.png" },
    { status: 'List', item: "Sword Man", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/sword-man.png" },
    { status: 'List', item: "Crook Legend", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/crook-legend.png" },
    { status: 'List', item: "Dog", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/dog.png" },
    { status: 'List', item: "Lion NFT", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/lion.png" },
    { status: 'List', item: "Man", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/man.png" },
    { status: 'List', item: "Dog NFT", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/dog-nft.png" },
    { status: 'List', item: "Rainbow Colors", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/rainbow-colors.png" },
    { status: 'List', item: "Old Man", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/old-man.png" },
    { status: 'List', item: "Gold Bull Skull", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/gold-bull-skull.png" },
    { status: 'List', item: "3D Head", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/3d-hero.png" },
    { status: 'List', item: "Brain NFT", quantity: 1, price: 0.09, rental_duration: 24, lender: 'erc4907.eth', renter: 'erc4907.eth', date: 16, icon: "/images/brain.png" },

    ]
    return (
        <MainLayout>
            <section className="container mx-auto px-2 md:px-0">
                <CollectionHeader />
                <div className="w-[120%] md:max-w-[450px] mt-16">
                    <ParentArrow>
                        <div className="cursor-pointer inner-arrow h-full bg-polygon-border-gradient p-[1px] w-full" onClick={() => setCurrentTab(0)}>
                            <div className={`inner-arrow px-2 ml-[1px] h-full w-full ${currentTab ? 'bg-black text-gray' : 'bg-gradient text-white'} flex items-center justify-center text-[14px] font-lexend space-x-2`}>
                                <img src="/icons/items.svg" className={` ${currentTab ? 'opacity-50' : ''} h-[20px] w-[20px]`} /><span>Items 8,365</span>
                            </div>
                        </div>

                        <div className="cursor-pointer inner-straight-arrow bg-polygon-border-gradient p-[1px] h-full w-full " onClick={() => setCurrentTab(1)}>
                            <div className={`inner-straight-arrow h-full w-full ml-[0.3px] ${currentTab === 0 ? 'bg-black text-gray' : 'bg-gradient text-white'} flex items-center justify-center`}>
                                <div className=" font-lexend text-[14px] flex items-center space-x-2"><img src="/icons/activity-white.svg" className={`${currentTab === 0 ? 'opacity-50' : ''} h-[18px] w-[18px]`} /><span>Activity</span></div>
                            </div>
                        </div>
                    </ParentArrow>
                </div>
                {/* Line */}
                <div className="bg-collection-table-wrapper-gradient h-[1px] w-full my-8"></div>

                <div className="relative flex items-center space-x-4">

                    <IconButton icon="/icons/sort.svg" type="secondary" onClick={() => setShowFilters(!showFilters)} />
                    <IconButton icon="/icons/refresh-icon.svg" type="secondary" />
                    <IconButton icon="/icons/search-normal.svg" type="secondary" />

                    {showFilters && <OutsideClickHandler
                        onOutsideClick={() => {
                            setShowFilters(false)
                        }}
                    ><div className="absolute z-20 top-16 left-0">
                            <Filters showFilters={showFilters} setShowFilters={setShowFilters} appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters} /></div></OutsideClickHandler>}

                </div>
                {currentTab ?
                    <div className='bg-collection-table-wrapper-gradient p-[1px] mt-6'>
                        <div className=" bg-black w-full   overflow-x-scroll lg:overflow-x-hidden p-8">
                            <div className="bg-black h-full w-full min-w-[800px] relative">
                                <ActivityTable tableHeadings={tableHeadings} tableItems={tableItems} />
                            </div>
                        </div>
                    </div> : <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
                        {rentItems?.map(item => <MainCard key={item.name} image={item.image} name={item.name} price={item.price} days={item.days} />)}
                    </div>}







            </section>
        </MainLayout>
    )
}

const CollectionHeader = () => {
    return (
        <div className="bg-[#140621] py-8 flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center justify-between relative">
            {/* Absolute styling elements */}
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl absolute top-[3.6rem] left-[1.2rem]"></div>
            <div className="h-1 w-1 rounded-full bg-primary absolute right-20 bottom-4 shadow-xl"></div>
            <div className="w-full md:w-1/2 flex items-center space-x-8  ">
                <div>
                    <img src="/images/ellipse-heart.png" alt="Heart" />
                </div>
                <div>
                    <h2 className="text-[28px] text-white font-techno mb-2">Decentraland</h2>
                    <div className="text-[15px] font-lexend flex items-center space-x-2"><p className="text-gray">Created : </p><p className="text-white">Mar, 2022</p></div>
                    <div className="text-[15px] font-lexend flex items-center space-x-8"><p><span className="text-gray">Service Fee : </span><span className="text-white">5%</span></p><p><span className="text-gray">Chain : </span><span className="text-white">Ethereum</span></p></div>
                    <div className="flex items-center space-x-4 mt-2">
                        <a href="#"><img src="/icons/game-controller.svg" className="h-[25px] w-[25px]" /></a>
                        <a href="#"><img src="/icons/twitter-2.svg" className="h-[25px] w-[25px]" /></a>
                        <a href="#"><img src="/icons/discord-2.svg" className="h-[25px] w-[25px]" /></a>
                        <a href="#"><img src="/icons/global.svg" className="h-[25px] w-[25px]" /></a>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 ">
                <div className="ribbon bg-polygon-gradient p-[1px]">
                    <div className="ribbon bg-[#140621] px-8 py-4 flex items-start justify-between md:space-x-4">
                        <div className="flex flex-col md:flex-row items-center w-full md:w-1/2  justify-between ">
                            <div className="">
                                <p className="text-white text-[22px] font-techno">Items</p>
                                <p className="text-secondary font-lexend text-[18px]">6,769</p>
                            </div>
                            <img src="/shapes/vertical-short-line.svg" className="h-full" />
                            <div className=" md:text-auto">
                                <p className="text-white text-[22px] font-techno">Listed</p>
                                <p className="text-secondary font-lexend text-[18px]">15</p>
                            </div>
                            <img src="/shapes/vertical-short-line.svg" className="h-full hidden md:block" />
                        </div>
                        <div className="flex flex-col md:flex-row items-center w-full md:w-1/2  justify-between ">
                            <div className=" md:text-auto">
                                <p className="text-white text-[22px] font-techno">Total rentals</p>
                                <p className="text-secondary font-lexend text-[18px]">66</p>
                            </div>
                            <img src="/shapes/vertical-short-line.svg" className="h-full" />
                            <div className=" md:text-auto">
                                <p className="text-white text-[22px] font-techno">Floor Price</p>
                                <p className="text-secondary font-lexend text-[18px]">$1.11</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ACollection