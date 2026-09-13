import logofooter from '../../../assets/logo-text.png'

const Footer = () => {
    return (
        <div className="container mx-auto my-5 bg-[#F1F5F9]">
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <img src={logofooter} alt="logo" />
                    <p className="text-[64748B]">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>
                    <div className="flex gap-3 justify-center items-center">
                        <p className=" text-semibold">GitHub</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Technologies</a>
                    <a className="link link-hover">Projects</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
            </footer>
            <div className='divider'></div>
            <div className="flex justify-between items-center mt-3 mx-3 p-3 my-5">
                <small>© 2026 Dev Stack. All rights reserved.</small>
                <div className="flex justify-center items-center gap-4">

                    <small>Privacy</small>
                    <small>Terms</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;