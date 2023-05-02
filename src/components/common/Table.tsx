import Link from "next/link"

type Props = {
    tableHeadings: string[]
    tableItems: any
    isProfileTable?: boolean
}


export const CollectionTable = ({ tableHeadings, tableItems }: Props) => {
    return (
        <table className="table-auto w-full min-w-[800px] gradient_table">
            <thead >
                <tr className='text-gray font-lexend text-right text-[15px] bg-black '>
                    {tableHeadings?.map((heading, i) => <td key={heading} className={`${i === 0 && 'text-left'} py-4`}>{heading}</td>)}
                </tr>
            </thead>
            <tbody className='text-white font-lexend text-[13px]'>
                {tableItems?.map((item: any) => <> <tr className='text-right w-full bg-black bg-row-gradient'>
                    <Link href="/a-collection"><td className='text-left flex items-center space-x-4 mt-3  '> <div className='h-6 w-6 rounded-full'><img src={item.icon} /></div><span>{item.collection}</span></td></Link>
                    <td className='pb-2 pt-4'>{item.total_rented.toLocaleString()}</td>
                    <td className='pb-2 pt-4'>{item.total_listed.toLocaleString()}</td>
                    <td className='pb-2 pt-4'>{item.available_for_rent.toLocaleString()}</td>
                    <td className='pb-2 pt-4'>{item.floor_price.toLocaleString()}</td>
                    <td className='pb-2 pt-4 pr-2'>{item.items.toLocaleString()}{item.item_unit}</td>
                </tr>
                    <div className='bg-transparent h-[1px] w-full'></div>
                </>)}

            </tbody>
        </table>
    )
}

export const ActivityTable = ({ tableHeadings, tableItems, isProfileTable }: Props) => {
    return (
        <table className="table-auto w-full min-w-[800px] gradient_table">
            <thead >
                <tr className='text-gray font-lexend text-right text-[15px] bg-black '>
                    {tableHeadings?.map((heading, i) => <td key={heading} className={`${i === 1 && 'text-left'} pr-4 md:pr-8 py-4`}>{heading}</td>)}
                </tr>
            </thead>
            <tbody className='text-white font-lexend text-[13px]'>
                {tableItems?.map((item: any) => <> <tr className='text-right w-full bg-black bg-row-gradient'>

                    <td className='pb-2 pt-4 pr-4 md:pr-8'>{item.status}</td>
                    <Link href="/a-collection">
                        {isProfileTable ?
                            <td className='text-left flex items-center space-x-4 mt-3   pr-4 md:pr-8'>
                                <div className='h-6 w-6 rounded-full'>
                                    <img src={item.icon} />
                                </div>
                                <span className="flex flex-col">
                                    <span className="text-primary">{item.item}</span>
                                    <span className="text-gray text-[12px]">Sublime.land</span>
                                </span>
                            </td>
                            :
                            <td className='text-left flex items-center space-x-4 mt-3   pr-4 md:pr-8'>
                                <div className='h-6 w-6 rounded-full'>
                                    <img src={item.icon} />
                                </div>
                                <span>{item.item}</span>
                            </td>}
                    </Link>
                    <td className='pb-2 pt-4 pr-4 md:pr-8'>{item.quantity.toLocaleString()}</td>
                    <td className='pb-2 pt-4 pr-4 md:pr-8 flex items-center space-x-1'><img src="/icons/eth.svg" className="h-6 w-6" />{item.price}/Day</td>
                    <td className='pb-2 pt-4 pr-4 md:pr-8'>{item.rental_duration} Hours</td>
                    <td className='pb-2 pt-4 pr-4 md:pr-8'><Link href="/profile/id">{item.lender}</Link></td>
                    <td className='pb-2 pt-4 pr-4 md:pr-8'><Link href="/profile/id">{item.renter}</Link></td>
                    {/* <Link href="/profile/id"><td className='pb-2 pt-4 pr-4 md:pr-8'>{item.lender}</td></Link>
                    <Link href="/profile/id"><td className='pb-2 pt-4 pr-4 md:pr-8'>{item.renter}</td></Link> */}
                    <td className='pb-2 pt-4 pr-2'>{item.date} days ago</td>
                </tr>
                    <div className='bg-transparent h-[1px] w-full'></div>
                </>)}

            </tbody>
        </table>
    )
}


