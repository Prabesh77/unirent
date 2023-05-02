"use client"

type Props = {
    type: 'primary' | 'secondary'
    label: string
    props?: any
    onClick?: () => void
    classes?: string
}

export const Button = ({ type, label, props, onClick, classes }: Props) => {
    return (
        <div className={`${type === 'primary' ? 'button-holder' : 'secondary-btn-holder'} ${classes}`}>
            <button onClick={onClick} {...props} className={`button text-white text-[14px] md:text-[15px] font-lexend px-8 py-2 ${type === 'secondary' && 'secondary-btn'}`}>
                {/* <img src={type === 'primary' ? "/shapes/primary-btn.svg" : "/shapes/secondary-btn.svg"} className='' /> */}
                {label}
            </button>
        </div>

    )
}

export const IconButton = ({ icon, type, props, onClick }: { icon: string, type: 'primary' | 'secondary', props?: any, onClick?: any }) => {
    return (
        <div className=" bg-polygon-border-gradient p-[1px] h-[42px] w-[42px]">
            <button onClick={onClick} {...props} className={` h-full w-full  ${type === 'primary' ? 'bg-gradient' : 'bg-black'} flex items-center justify-center text-white space-x-2 py-4`}>
                <img src={icon} alt={icon} />
            </button>
        </div>
    )
}


