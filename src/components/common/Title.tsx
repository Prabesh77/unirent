
const Title = ({ title }: { title: string }) => {
    return (
        <div className='  flex items-end justify-center space-x-1'>
            <img src="/icons/stars.svg" className=' translate-y-2' />

            <div>
                <h2 className='font-techno text-white text-[28px] md:text-[44px]'>{title}</h2>
                <div className='flex items-center'>
                    <div className='bg-line-gradient h-[1px] w-full'></div>
                </div>
            </div><img src="/icons/stars.svg" className='rotate-180 translate-y-2' />
        </div>
    )
}

export default Title