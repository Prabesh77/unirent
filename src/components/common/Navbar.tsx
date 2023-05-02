import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"
import { HiOutlineMenu } from "react-icons/hi"
import { useRouter } from "next/router"
import { IconButton } from "./Button"

const Navbar = () => {
    const router = useRouter()
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const navMenus = [
        { name: "Rent", link: "/" },
        { name: "Lend", link: "#" },
        { name: "Earn", link: "#" },
        { name: "Partner", link: "/partners" },

        // { name: "Contact", link: "/contact" },
    ]
    return (
        <div className="border-b border-[#3b3b3b] border-dashed relative">
            {/* Absolute styling elements */}
            <div className='bg-secondary bg-opacity-20 h-32 w-32 absolute -right-4 -bottom-4 blur-3xl z-0'></div>
            <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl absolute right-8 bottom-8"></div>

            <nav className="container mx-auto py-1 hidden md:flex items-center justify-between space-x-4">
                <div className="p-2 w-1/3">
                    <Link href="/">
                        <Image src="/logo.svg" alt="uniRent Logo" height="80" width="80" className="h-16 w-16" />
                    </Link>
                </div>
                <ul className="w-full text-gray  flex items-center justify-center font-lexend space-x-[6.5%]">
                    {navMenus?.map(menu => <Link href={menu.link} key={menu.name}><li className="hover:text-white">{menu.name}</li></Link>)}
                </ul>
                <div className="flex items-center space-x-3 justify-end ">

                    <IconButton icon="/icons/search-normal.svg" type="primary" />
                    <IconButton icon="/icons/empty-wallet.svg" type="primary" />


                    <div className="w-[190px] z-20">
                        <select className="h-[42px] w-full px-2 border border-[#474747] bg-transparent text-white">
                            <option>Select</option>
                        </select>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav */}
            <div className="h-full md:hidden   md:px-0 mx-auto  flex flex-col relative">
                {/* Absolute styling elements */}
                <div className='bg-secondary bg-opacity-20 h-32 w-32 absolute -right-4 -bottom-4 blur-3xl z-0'></div>
                <div className="h-1 w-1 rounded-full bg-[#DD0DAC] bg-opacity-60 shadow-xl absolute right-8 bottom-8"></div>
                <div className=" flex items-center justify-between px-2 overflow-x-hidden">
                    <Link href="/">
                        <div className="h-full w-20  p-3">
                            <img src="/logo.svg" alt="" className="w-full h-full" />
                        </div>
                    </Link>
                    {/* Opacity */}
                    <div
                        className={`w-[60%] h-screen z-20 bg-black opacity-50 absolute top-[66px]  transition-all ${showMobileMenu ? "left-0" : "-left-[100%]"
                            }`}
                    ></div>
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setShowMobileMenu(false)
                        }}
                    >
                        <ul
                            className={`flex flex-col border-t border-gray-400 absolute bg-black h-screen top-[66px] z-[500]  w-[60%] transition-all ${showMobileMenu ? "right-0" : "-right-[70%]"
                                }`}
                        >
                            {navMenus.map((menu, i) => (
                                <Link key={i} href={menu.link}>
                                    <li
                                        className={`text-[14px] tracking-wide text-white px-[17.5px] py-2 cursor-pointer transition-all  ${router.asPath === menu.link
                                            ? "bg-primary text-white font-[500]"
                                            : ""
                                            }`}
                                    // onClick={(e) => setActiveTab(i)}
                                    >
                                        {menu.name}
                                    </li>
                                </Link>
                            ))}


                            <div className="flex flex-col items-center space-y-2 px-2 mt-4 justify-end ">
                                <div className="bg-border-gradient h-[42px] w-full flex items-center justify-center">
                                    <button className=" bg-gradient h-[40px] w-full p-[9px] flex items-center justify-center ">
                                        <Image src="/icons/search-normal.svg" alt="" height="20" width="20" className=" h-full w-full" />
                                    </button>
                                </div>
                                <div className="bg-border-gradient h-[42px] w-full flex items-center justify-center">
                                    <button className=" bg-gradient h-[40px] w-full p-[9px] flex items-center justify-center ">
                                        <Image src="/icons/empty-wallet.svg" alt="" height="20" width="20" className=" h-full w-full" />
                                    </button>
                                </div>

                                <div className="w-full">
                                    <select className="h-[42px] w-full px-2 border border-[#474747] bg-transparent text-white">
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>
                        </ul>
                    </OutsideClickHandler>
                    <div
                        className="border border-primary p-1 rounded-md cursor-pointer z-20"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <HiOutlineMenu className="text-primary text-xl" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar