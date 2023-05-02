
import FilterCheckBox from "./FilterCheckBox"
import Accordion from "./Accordion"
import { Button } from "./Button"

const Filters = ({
    setShowFilters,
    showFilters,
    appliedFilters,
    setAppliedFilters,
}: {
    setShowFilters: any
    showFilters: any
    appliedFilters: any
    setAppliedFilters: any
}) => {
    const statusFilters = [
        { name: "Rent", items: "409" },
        { name: "List", items: "73" },
        { name: "Delist", items: "73" },

    ]

    return (
        <div className="w-[300px] h-full flex flex-col justify-start bg-filter-border p-[1px] filter-shape">
            <div className=" flex flex-col justify-start  py-8 px-4 bg-black filter-shape">
                <div className="flex items-center justify-center">
                    <h3 className="text-white font-techno text-center text-[24px]">Filter</h3>

                </div>



                <div className="">
                    <Accordion title="Status" isOpen={false}>
                        <div className="flex flex-col space-y-2 mb-4">
                            {statusFilters?.map((filter) => (
                                <FilterCheckBox
                                    key={filter.name}
                                    name={filter.name}
                                    items={filter.items}
                                    checked={appliedFilters?.includes(filter.name)}
                                    onClick={() =>
                                        setAppliedFilters([...appliedFilters, filter.name])
                                    }
                                />
                            ))}
                        </div>
                    </Accordion>
                </div>

                <div className="">
                    <Accordion title="Rental Duration" isOpen={false}>
                        <div className="flex flex-col space-y-2 mb-4">
                            {statusFilters?.map((filter) => (
                                <FilterCheckBox
                                    key={filter.name}
                                    name={filter.name}
                                    items={filter.items}
                                    checked={appliedFilters?.includes(filter.name)}
                                    onClick={() =>
                                        setAppliedFilters([...appliedFilters, filter.name])
                                    }
                                />
                            ))}
                        </div>
                    </Accordion>
                </div>

                {/* PRICE RANGE FILTER */}
                <div className="filter-box">
                    <Accordion title="Price" isOpen={true}>
                        <div className=" flex space-x-2 items-center justify-between w-full  overflow-hidden mb-4">
                            <div className="w-[150px] h-[47px] bg-gradient p-[1px]">
                                <input placeholder="0" className=" p-1 h-full w-full bg-black" />
                            </div>
                            <span className="text-white font-lexend text-[13px]">To</span>
                            <div className="w-[150px] h-[47px] bg-gradient p-[1px]">
                                <input placeholder="0" className=" p-1 h-full w-full bg-black" />
                            </div>
                        </div>
                    </Accordion>
                </div>

                <div className="mt-2">
                    <Button type="primary" label="Apply" />
                </div>


            </div>
        </div>
    )
}

export default Filters
