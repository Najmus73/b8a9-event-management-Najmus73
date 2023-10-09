import '../Styles/Style.css'

const Footer = () => {
    return (
        <div id="footer">
        <footer className="footer p-10 justify-center gap-[320px] text-white text-base" >
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Birthday</a>
                <a className="link link-hover">Wedding</a>
                <a className="link link-hover">Anniversaries</a>
                <a className="link link-hover">Baby shower</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <header className="footer-title">Newsletter</header>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn bg-pink-600 border-white absolute top-0 right-0 rounded-l-none text-white">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
        </div>
    )
}

export default Footer;