import { useState } from "react"
import { BsChevronDown } from "react-icons/bs"
import OutsideClickHandler from "react-outside-click-handler"

type Props = {
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
    options: string[]
}

const Dropdown = ({ selected, setSelected, options }: Props) => {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="relative max-w-[250px] w-full">
            <div className="cursor-pointer inner-arrow h-[50px] bg-profile-select-gradient p-[1px] w-full max-w-[250px] rotate-180" >
                <div className={`cursor-pointer inner-arrow px-2 ml-[1px] h-full w-full bg-black bg-row-gradient text-white flex items-center justify-center text-[14px] font-lexend space-x-2 py-4`} onClick={() => !showDropdown ? setShowDropdown(true) : null}>
                    <p className="rotate-180 flex items-center justify-between px-4 w-full"><span >{selected || options[0]}</span><BsChevronDown className={` text-white`} /></p>
                </div>
            </div>

            {showDropdown && <OutsideClickHandler
                onOutsideClick={() => {
                    setShowDropdown(false)
                }}
            > <div className="absolute z-20 top-[120%]   cursor-pointer h-auto bg-profile-select-gradient p-[1px] w-full max-w-[250px]" >
                    <div className={`p-4 h-auto w-full bg-black bg-row-gradient text-white flex flex-col space-y-2 items-center justify-center text-[14px] font-lexend`}>
                        {options?.map((option, i) => <><p key={option} className="cursor-pointer flex items-center justify-between py-1 w-full" onClick={() => { setSelected(option); setShowDropdown(false) }}>{option}</p>{i + 1 !== options.length && <div className="bg-white-line h-[1px] w-full"></div>}</>)}

                    </div>
                </div></OutsideClickHandler>}

        </div>
    )
}

export default Dropdown