"use client"

const AnimatedArrow = () => {
    return (
        <div className=''>
            <div className='h-16 w-16 flex items-center justify-center relative'>
                <div className="arrow-container absolute top-[8%] left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
                <img src="/icons/rounded-words.svg" alt="" className=' h-full w-full' />
            </div>
        </div>
    )
}

export default AnimatedArrow