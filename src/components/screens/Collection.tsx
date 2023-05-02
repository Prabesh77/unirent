import { Button } from "@/components/common/Button"
import { Arrow, InnerArrow, InnerStraightArrow, ParentArrow, Rectangle, Ribbon } from "@/components/common/Shapes"
import { CollectionTable } from "@/components/common/Table"
import MainLayout from "@/layout/MainLayout"
import { useState } from "react"

const Collection = () => {

    const [currentTab, setCurrentTab] = useState(0)

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1)

    const tableHeadings = ["Collection", "Total Rented", "Total Listed", "Available for Rent", "Floor Price", "Items"]
    const tableItems = [{ collection: 'Decentraland', total_rented: 66, total_listed: 80, available_for_rent: 14, floor_price: 1.23, items: 98, item_unit: 'k', icon: '/icons/decentraland.png' },
    { collection: 'Deathly Hallow', total_rented: 3578, total_listed: 1005, available_for_rent: 569, floor_price: 0.03, items: 952, item_unit: '', icon: '/icons/deathly_hallow.png' },
    { collection: 'GLMJ', total_rented: 5055, total_listed: 1000, available_for_rent: 4055, floor_price: 1.50, items: 40, item_unit: 'k', icon: '/icons/glmj.png' },
    { collection: 'Warena', total_rented: 369, total_listed: 169, available_for_rent: 200, floor_price: 3.23, items: 68, item_unit: 'k', icon: '/icons/warena.png' },
    { collection: 'Elite Eight', total_rented: 1003, total_listed: 1000, available_for_rent: 3, floor_price: 1.58, items: 100, item_unit: 'k', icon: '/icons/elite_eight.png' },
    { collection: 'New Super Five', total_rented: 1236, total_listed: 236, available_for_rent: 1000, floor_price: 296, items: 1287, item_unit: '', icon: '/icons/new_super_five.png' },
    { collection: 'Nova Creed: Ships', total_rented: 698, total_listed: 590, available_for_rent: 108, floor_price: 65.22, items: 36, item_unit: 'k', icon: '/icons/nova_creed.png' }, { collection: 'Decentraland', total_rented: 66, total_listed: 80, available_for_rent: 14, floor_price: 1.23, items: 98, item_unit: 'k', icon: '/icons/decentraland.png' },
    { collection: 'Deathly Hallow', total_rented: 3578, total_listed: 1005, available_for_rent: 569, floor_price: 0.03, items: 952, item_unit: '', icon: '/icons/deathly_hallow.png' },
    { collection: 'GLMJ', total_rented: 5055, total_listed: 1000, available_for_rent: 4055, floor_price: 1.50, items: 40, item_unit: 'k', icon: '/icons/glmj.png' },
    { collection: 'Warena', total_rented: 369, total_listed: 169, available_for_rent: 200, floor_price: 3.23, items: 68, item_unit: 'k', icon: '/icons/warena.png' },
    { collection: 'Elite Eight', total_rented: 1003, total_listed: 1000, available_for_rent: 3, floor_price: 1.58, items: 100, item_unit: 'k', icon: '/icons/elite_eight.png' },
    { collection: 'New Super Five', total_rented: 1236, total_listed: 236, available_for_rent: 1000, floor_price: 296, items: 1287, item_unit: '', icon: '/icons/new_super_five.png' },
    { collection: 'Nova Creed: Ships', total_rented: 698, total_listed: 590, available_for_rent: 108, floor_price: 65.22, items: 36, item_unit: 'k', icon: '/icons/nova_creed.png' },

    ]
    return (
        <>
            <MainLayout>
                <div className="container mx-auto px-2 md:px-0">
                    <CollectionHeader />
                    <div className="flex items-center justify-between flex-col space-y-4 lg:space-y-0 lg:flex-row mt-16">
                        <div className="flex items-center space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
                            <Ribbon>
                                <img src="/icons/refresh-icon.svg" /><span className="text-[14px]">50 Results</span>
                            </Ribbon>
                            <div className=" translate-x-8 w-[90%] md:translate-x-0 md:w-auto">
                                <ParentArrow>
                                    <div className="cursor-pointer inner-arrow h-full bg-polygon-border-gradient p-[1px] w-[200px]" onClick={() => setCurrentTab(0)}>
                                        <div className={`inner-arrow ml-[1px] h-full w-full ${currentTab === 0 ? 'bg-gradient text-white' : 'bg-black text-gray'} flex items-center justify-center text-[14px]`}>
                                            All
                                        </div>
                                    </div>

                                    <Rectangle type={currentTab === 1 ? 'primary' : 'secondary'} onClick={() => setCurrentTab(1)}>
                                        <p className=" font-lexend text-[14px]">Metaverse</p>
                                    </Rectangle>
                                    <Rectangle type={currentTab === 2 ? 'primary' : 'secondary'} onClick={() => setCurrentTab(2)}>
                                        <p className=" font-lexend text-[14px]">Gaming</p>
                                    </Rectangle>
                                    <InnerStraightArrow type={currentTab === 3 ? 'primary' : 'secondary'} onClick={() => setCurrentTab(3)}>
                                        <p className=" font-lexend text-[14px]">Tickets</p>
                                    </InnerStraightArrow>
                                </ParentArrow>
                            </div>
                        </div>

                        <div className="min-w-[287px]">
                            <Button type="primary" label="Deploy your collection +" />
                        </div>
                    </div>

                    {/* Table */}
                    <div className='bg-collection-table-wrapper-gradient p-[1px] mt-6'>
                        <div className=" bg-black w-full   overflow-x-scroll lg:overflow-x-hidden p-8">
                            <div className="bg-black h-full w-full min-w-[800px] relative">
                                <CollectionTable tableHeadings={tableHeadings} tableItems={tableItems} />
                                {/* Pagination */}
                                <div className="flex items-center justify-end  pb-8 pr-8 mt-8 ">
                                    <div className=" flex items-center justify-between space-x-2 w-[500px]  translate-x-24   h-[56px] ">
                                        <div className="cursor-pointer arrow bg-polygon-border-gradient p-[1px] w-[200px] h-[56px] rotate-180" onClick={() => setCurrentPage(prev => prev > 1 ? prev - 1 : prev)}>
                                            <div className="arrow h-full w-full ml-[0.7px] bg-black flex items-center text-white justify-center py-2 pl-[10px] pr-[5rem]"><span className="rotate-180">Prev</span></div>
                                        </div>
                                        {[1, 2].map(page => <div key={page} className="cursor-pointer bg-polygon-border-gradient p-[1px] h-[56px] w-[56px]" onClick={() => setCurrentPage(page)}>
                                            <div className={`h-full w-full  ${page === currentPage ? 'bg-gradient' : 'bg-black'} flex items-center justify-center text-white space-x-2 py-4`}>{page}</div>
                                        </div>)}


                                        <div className=" cursor-pointer arrow bg-polygon-border-gradient p-[1px] w-[200px] h-[56px]" onClick={() => setCurrentPage(prev => prev < 2 ? prev + 1 : prev)}>
                                            <div className="arrow h-full w-full ml-[0.7px] bg-black flex items-center text-white justify-center py-2 pl-[10px] pr-[5rem]">Next</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    )
}

const CollectionHeader = () => {
    return (
        <div className="bg-[#140621] p-8 flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0 items-center justify-between relative">
            {/* Absolute styling elements */}
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl absolute top-[3.6rem] left-[1.2rem]"></div>
            <div className="h-1 w-1 rounded-full bg-primary absolute right-20 bottom-4 shadow-xl"></div>
            <div className="w-full md:w-1/2">
                <h2 className="text-white font-techno text-[28px]">Collection Stats</h2>
                <p className="text-gray font-lexend text-[14px] mt-1">Double Protocol is a fully decentralized NFT rental protocol aiming to connect the NFT owners with users in an on-chain marketplace . you can find the most trending utility NFTs here.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="ribbon bg-polygon-gradient p-[1px]">
                    <div className="ribbon bg-[#140621] px-8 py-4 flex items-center justify-between">
                        <div>
                            <p className="text-white text-[22px] font-techno">Total rentals</p>
                            <p className="text-secondary font-lexend text-[18px]">6,769</p>
                        </div>
                        <img src="/shapes/vertical-short-line.svg" className="h-full" />
                        <div>
                            <p className="text-white text-[22px] font-techno">Total listed</p>
                            <p className="text-secondary font-lexend text-[18px]">3,482</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection