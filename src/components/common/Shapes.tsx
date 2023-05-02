
export const Ribbon = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="ribbon bg-polygon-border-gradient p-[1px] h-[65px] min-w-[160px]">
            <div className="ribbon h-full w-full ml-[0.7px] bg-black flex items-center justify-center text-white space-x-2 py-4">{children}</div>
        </div>
    )
}

export const ParentArrow = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="arrow bg-polygon-border-gradient p-[1px] w-full h-[65px]">
            <div className="arrow h-full w-full ml-[0.7px] bg-black flex items-center text-white space-x-2 py-[5px] pl-[10px] pr-[5rem]">{children}</div>
        </div>
    )
}

export const Arrow = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="arrow bg-polygon-border-gradient p-[1px] w-full">
            <div className="arrow h-full w-full ml-[0.7px] bg-black flex items-center text-white space-x-2 py-2 px-[10px]">{children}</div>
        </div>
    )
}
export const InnerArrow = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="arrow bg-polygon-border-gradient p-[1px]  h-full w-full">
            <div className="arrow h-full w-full ml-[0.7px] bg-black flex items-center justify-center text-white">{children}</div>
        </div>
    )
}

type ShapeProps = {
    children: React.ReactNode
    props?: any
    type?: 'primary' | 'secondary'
    onClick?: () => void
}
export const InnerStraightArrow = ({ children, props, type, onClick }: ShapeProps) => {
    return (
        <div {...props} className="cursor-pointer inner-straight-arrow bg-polygon-border-gradient p-[1px] h-full w-full " onClick={onClick}>
            <div className={`inner-straight-arrow h-full w-full ml-[0.3px] ${type === 'primary' ? 'bg-gradient text-white' : 'bg-black text-gray'} flex items-center justify-center `}>{children}</div>
        </div>
    )
}

export const Rectangle = ({ children, type, onClick }: ShapeProps) => {
    return (
        <div className="cursor-pointer h-full bg-polygon-border-gradient p-[1px] w-full" onClick={onClick}>
            <div className={`h-full w-full ${type === 'primary' ? 'bg-gradient text-white' : 'bg-black text-gray'} flex items-center justify-center space-x-2 py-4`}>{children}</div>
        </div>
    )
}
