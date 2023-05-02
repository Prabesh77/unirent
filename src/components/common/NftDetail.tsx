import { useState } from "react"
import MainCard from "./MainCard"
import { ParentArrow } from "./Shapes"
import { Button } from "./Button"
import { ActivityTable } from "./Table"
import { BsChevronDown } from "react-icons/bs"
import FilterCheckBox from "./FilterCheckBox"
import Link from "next/link"
import WalletsModal from "../modals/WalletsModal"
import RentalModal from "../modals/RentalModal"

const NftDetail = () => {
    const [currentTab, setCurrentTab] = useState(0)
    const [showWalletModal, setShowWalletModal] = useState(false)
    const [showRentalModal, setShowRentalModal] = useState(false)
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
        <div className="">
            <WalletsModal isOpen={showWalletModal} setShowRentalModal={setShowRentalModal} onClose={() => setShowWalletModal(false)} />
            <RentalModal isOpen={showRentalModal} onClose={() => setShowRentalModal(false)} />



            <div className=" flex flex-col space-y-8 md:space-y-0 md:flex-row items-center md:items-start justify-start space-x-8 w-full mt-4">
                <div className="min-w-[300px] flex flex-col items-center md:items-start space-y-4 ">
                    <h1 className="text-[38px] font-techno text-white">Rainbow colors</h1>
                    {/* <MainCard name="Rainbow Colors" image="/images/rainbow-colors.png" price={0.0025} /> */}
                    <div className="relative w-full max-w-[300px] md:max-w-[400px] " >
                        <img src="/shapes/rent-shape.svg" className="w-full h-full" />
                        <div className="w-full p-10 flex flex-col justify-between h-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="flex items-center justify-center h-full w-full  mx-auto ">
                                <img src="/images/rainbow-colors.png" className="h-full w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer inner-arrow h-full bg-filter-border p-[1px] w-[70%] md:w-full rotate-180" onClick={() => setCurrentTab(0)}>
                        <div className={`inner-arrow px-2 ml-[1px] h-full w-full bg-black text-white flex items-center justify-center text-[14px] font-lexend space-x-2 py-4`}>
                            <p className="rotate-180 flex items-center justify-between px-4 w-full"><span >Explore Location (2 land)</span><BsChevronDown className={` text-white`} /></p>
                        </div>
                    </div>
                    <div className="cursor-pointer inner-arrow h-full bg-filter-border p-[1px] w-[70%] md:w-full rotate-180" onClick={() => setCurrentTab(0)}>
                        <div className={`inner-arrow px-2 ml-[1px] h-full w-full bg-black text-white flex items-center justify-center text-[14px] font-lexend space-x-2 py-4`}>
                            <p className="rotate-180 flex items-center justify-between px-4 w-full"><span >Properties</span><BsChevronDown className={` text-white`} /></p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-[118%] md:max-w-[500px] mt-3">
                        <ParentArrow>
                            <div className="cursor-pointer inner-arrow h-full bg-polygon-border-gradient p-[1px] w-full" onClick={() => setCurrentTab(0)}>
                                <div className={`inner-arrow px-2 ml-[1px] h-full w-full ${currentTab ? 'bg-black text-gray' : 'bg-gradient text-white'} flex items-center justify-center text-[14px] font-lexend space-x-2`}>
                                    <img src="/icons/info-icon.svg" className={`h-[20px] w-[20px] ${currentTab ? 'opacity-50' : ''}`} /><span>Rental Information</span>
                                </div>
                            </div>

                            <div className="cursor-pointer inner-straight-arrow bg-polygon-border-gradient p-[1px] h-full w-[310px] " onClick={() => setCurrentTab(1)}>
                                <div className={`inner-straight-arrow h-full w-full ml-[0.3px] ${currentTab === 0 ? 'bg-black text-gray' : 'bg-gradient text-white'} flex items-center justify-center`}>
                                    <div className=" font-lexend text-[14px] flex items-center space-x-2"><img src="/icons/cube-white.svg" className={`h-[20px] w-[20px] ${currentTab === 0 ? 'opacity-50' : ''}`} /><span>NFT Activity</span></div>
                                </div>
                            </div>
                        </ParentArrow>
                    </div>
                    <div className="w-full">
                        {currentTab ?
                            <>
                                <div className="w-full flex items-center space-x-8 mt-8">
                                    <FilterCheckBox name="Rent" checked={false} onClick={() => null} />
                                    <FilterCheckBox name="List" checked={false} onClick={() => null} />
                                    <FilterCheckBox name="Delist" checked={false} onClick={() => null} />
                                </div>
                                <div className=" bg-collection-table-wrapper-gradient w-full   overflow-x-scroll lg:overflow-x-hidden ">
                                    <div className="bg-black h-full w-full min-w-[800px] relative">
                                        <ActivityTable tableHeadings={tableHeadings} tableItems={tableItems} />
                                    </div>
                                </div>
                            </>
                            : <>
                                <div className="bg-filter-border p-[1px] w-full mt-8">
                                    <div className="bg-black bg-row-gradient w-full h-full">
                                        <div className="text-white font-lexend flex items-center space-x-2 py-4 px-4 ">
                                            <p className="text-[15px]">Rent Periods :</p>
                                            <p className="text-[20px]">7-155 Days</p>
                                        </div>
                                        {/* line */}
                                        <div className="bg-filter-border h-[1px] w-full"></div>
                                        <div className="text-white font-lexend flex items-center space-x-2 py-4 px-4">
                                            <div className="flex items-center space-x-2"><p className="text-[15px]">Unit Price : </p><div className="flex space-x-2 items-center"><img src="/icons/eth.svg" className="h-6 w-6" /><p className="text-[20px]">0.00085</p><p className="text-[15px]">/Days ($1.23)</p></div></div>
                                        </div>
                                        {/* line */}
                                        <div className="bg-filter-border h-[1px] w-full"></div>

                                        <div className=" flex items-center justify-start px-4 py-4">
                                            <Button type="primary" label="Rent" onClick={() => setShowWalletModal(true)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-filter-border p-[1px] mt-4">
                                    <div className="bg-black bg-row-gradient w-full h-full px-4 py-4 flex items-center space-x-2">
                                        <p className="text-[14px] font-lexend text-white">Lender : </p><Link href="/profile/id"><p className="text-[14px] font-lexend text-primary underline">0xdca5.....2d06</p></Link>
                                    </div>
                                </div>
                            </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftDetail