import Link from "next/link"
import { Button } from "./Button"

const MainCard = ({ image, name, price, days }: { image: string, name: string, price: number, days?: number }) => {
    return (

        <div className="relative w-full max-w-[300px] md:max-w-[400px] " >
            <img src="/shapes/rent-shape.svg" className="w-full h-full" />
            <div className="w-full px-4  pb-4 pt-8 flex flex-col justify-between h-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href="/nft/id">
                    <div className="flex items-center justify-center max-w-[200px] max-h-[200px]  mx-auto ">
                        <img src={image} className="h-full w-full" />
                    </div>
                </Link>
                <div className=" mt-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-white font-techno text-[22px] text-left">{name}</h2>
                        {days && <p className="text-gray font-lexend text-[13px]">{days} days</p>}
                    </div>
                    <div className="flex items-center justify-between w-full mt-3">
                        <div className="flex items-center space-x-2">
                            <img src="/icons/currency.svg" className="h-[32px] w-[32px]" />
                            <span className="text-secondary font-lexend">{price}</span>
                        </div>
                        <Button type="primary" label="Buy" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default MainCard
