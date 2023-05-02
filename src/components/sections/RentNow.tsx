import { Button } from "@/components/common/Button"
import MainCard from "@/components/common/MainCard"
import Title from "@/components/common/Title"

const RentNow = () => {
    const rentItems = [
        { name: 'Mad Meerkat', price: 4.69, image: '/images/mad-meerkat.png' },
        { name: 'Swaggy Man', price: 3.60, image: '/images/swaggy-man.png' },
        { name: 'Sword Man', price: 10.50, image: '/images/sword-man.png' },
        { name: 'Crook Legend', price: 2.69, image: '/images/crook-legend.png' },

    ]
    return (
        <section className="container mx-auto px-2 md:px-0 mt-20 relative">
            {/* Absolute styling elements */}
            <div className='bg-primary bg-opacity-30 h-32 w-32 absolute right-0 top-[70%] -translate-x-1/2 -translate-y-1/2 blur-3xl z-0'></div>
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl"></div>
            <div className="h-1 w-1 rounded-full bg-primary absolute right-8 top-28 shadow-xl"></div>
            <Title title="Rent Now" />
            <div className="">
                <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
                    {rentItems?.map(item => <MainCard key={item.name} image={item.image} name={item.name} price={item.price} />)}
                </div>
                <div className="flex items-center justify-center mt-8">
                    <Button type="primary" label="View All" />
                </div>
            </div>


        </section>
    )
}


export default RentNow