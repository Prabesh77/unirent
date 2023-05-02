import { CollectionTable } from "@/components/common/Table"
import Title from "@/components/common/Title"

const TrendingCollections = () => {
    const tableHeadings = ["Collection", "Total Rented", "Total Listed", "Available for Rent", "Floor Price", "Items"]
    const tableItems = [{ collection: 'Decentraland', total_rented: 66, total_listed: 80, available_for_rent: 14, floor_price: 1.23, items: 98, item_unit: 'k', icon: '/icons/decentraland.png' },
    { collection: 'Deathly Hallow', total_rented: 3578, total_listed: 1005, available_for_rent: 569, floor_price: 0.03, items: 952, item_unit: '', icon: '/icons/deathly_hallow.png' },
    { collection: 'GLMJ', total_rented: 5055, total_listed: 1000, available_for_rent: 4055, floor_price: 1.50, items: 40, item_unit: 'k', icon: '/icons/glmj.png' },
    { collection: 'Warena', total_rented: 369, total_listed: 169, available_for_rent: 200, floor_price: 3.23, items: 68, item_unit: 'k', icon: '/icons/warena.png' },
    { collection: 'Elite Eight', total_rented: 1003, total_listed: 1000, available_for_rent: 3, floor_price: 1.58, items: 100, item_unit: 'k', icon: '/icons/elite_eight.png' },
    { collection: 'New Super Five', total_rented: 1236, total_listed: 236, available_for_rent: 1000, floor_price: 296, items: 1287, item_unit: '', icon: '/icons/new_super_five.png' },
    { collection: 'Nova Creed: Ships', total_rented: 698, total_listed: 590, available_for_rent: 108, floor_price: 65.22, items: 36, item_unit: 'k', icon: '/icons/nova_creed.png' },

    ]
    return (
        <section className='container mx-auto px-2 md:px-0 mt-10 relative'>
            {/* Absolute styling elements */}
            <div className='bg-primary bg-opacity-20 h-40 w-40 absolute left-0 top-[90%] -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl"></div>
            <div className="h-1 w-1 rounded-full bg-primary absolute right-8 top-28 shadow-xl"></div>
            <Title title="Trending Collections" />
            <div className='overflow-x-scroll lg:overflow-x-hidden mt-12'>
                <CollectionTable tableHeadings={tableHeadings} tableItems={tableItems} />
            </div>
        </section>
    )
}

export default TrendingCollections