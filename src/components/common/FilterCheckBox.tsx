import { useState, useEffect } from "react"

const FilterCheckBox = ({
    name,
    items,
    onClick,
    checked,
}: {
    name: string
    items?: number | string
    onClick?: any
    checked: boolean
}) => {
    const [check, setCheck] = useState(checked)
    useEffect(() => {
        setCheck(checked)
    }, [checked])
    return (
        <div className="flex items-center justify-between">
            <div
                className="flex items-center justify-between w-full space-x-2  cursor-pointer"
                onClick={() => {
                    setCheck(!check)
                    onClick()
                }}
            >
                <p className="text-[14px] text-gray font-lexend">{name}</p>
                <div className="bg-filter-border p-[1px]">
                    <div
                        className={`min-h-[18px] min-w-[18px] bg-black   ${check
                            ? "bg-gradient  flex items-center justify-center"
                            : ""
                            }`}
                    >
                        <img
                            src="/icons/check-white.svg"
                            className={`${check ? "" : "hidden"}`}
                        />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FilterCheckBox
