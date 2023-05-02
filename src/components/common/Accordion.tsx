import React, { ReactNode, useRef, useState } from "react"
import { Collapse } from "react-collapse"
import { BsChevronDown } from "react-icons/bs"
type DetailsType = {
    children: ReactNode
    title: string
    isOpen: boolean
}

const Accordion = ({ children, title, isOpen }: DetailsType) => {
    const [open, setOpen] = useState(isOpen)

    return (
        <>
            <div className="w-full cursor-pointer">
                <div className="flex items-center">
                    <div
                        onClick={() => {
                            setOpen(!open)
                        }}
                        className={`flex items-center cursor-pointer w-full  justify-between`}
                    >
                        <div className="flex items-start justify-between w-full">
                            <div className="w-full mb-4">
                                <p className="text-[14px] text-white w-full mb-[12px]  font-lexend">{title} </p>
                                <div className="bg-white-line h-[1px] w-full"></div>
                            </div>
                            <BsChevronDown className={`${open ? "" : "rotate-180"} text-white`} />
                        </div>
                    </div>
                </div>

                <Collapse isOpened={open ? true : false}>
                    <div className="">{children}</div>
                </Collapse>
            </div>
        </>
    )
}

export default Accordion
