import { default as Modal_ } from "react-modal"
import localFont from 'next/font/local'

const techno = localFont({
    src: [
        {
            path: '../../../public/fonts/techno-chain-futuristic-technology-font/Techno Chain.otf',
        },
    ],
    variable: '--font-techno'
})
const lexend = localFont({
    src: [
        {
            path: '../../../public/fonts/Lexend_Exa/LexendExa-VariableFont_wght.ttf',
        },
    ],
    variable: '--font-lexend'
})

const Modal = ({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean
    onClose: any
    children: any
}) => {
    return (
        <Modal_
            isOpen={isOpen}
            onRequestClose={() => onClose()}
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, .6)",
                    zIndex: 1000,
                    // backdropFilter: "10px"
                },
            }}
            className={`${techno.variable} ${lexend.variable} max-w-[800px] min-w-[350px] md:min-w-[450px] p-[1px]  bg-filter-border absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 outline-none rounded-md`}
        >
            <div className="w-full h-full bg-black p-6">
                {children}
            </div>
        </Modal_>
    )
}

export default Modal
