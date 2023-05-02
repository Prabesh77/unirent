
const Footer = () => {
    return (
        <footer className="bg-footer-gradient mt-20 ">
            <div className="container mx-auto px-2 md:px-0 flex flex-col md:flex-row space-y-4 md:space-y-0 py-4 items-center justify-between">
                <div>
                    <img src="/logo.svg" className="h-16 w-16" />
                </div>
                <p className="text-white font-lexend">© 2023 NFT, Inc. - All Rights Reserved.</p>
                <div className="flex items-center space-x-2">
                    <a href="#"><img src="/icons/instagram.svg" /></a>
                    <a href="#"><img src="/icons/linkedin.svg" /></a>
                    <a href="#"><img src="/icons/discord.svg" /></a>
                    <a href="#"><img src="/icons/github.svg" /></a>
                    <a href="#"><img src="/icons/twitter.svg" /></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer