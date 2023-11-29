import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import logo from '../../assets/profile/logo-removebg-preview.png'
import { AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={`footer p-10 bg-base-200 text-base-content`}>
            <aside>
                <div className='flex items-center gap-2'>
                    <img className='h-14 invert border-2 border-red-500 hover:border-green-600 cursor-pointer  rounded-full' src={logo} alt="" />
                    <h5 className='font-extrabold text-lg'>Contest Hub</h5>
                </div>
                <p>Contest-Hub-Ltd.</p>
                <p>Copyright © {year} - All right reserved</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
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
            <nav>
                <header className="footer-title">Social Links</header>
                <div className='flex text-2xl gap-5'>
                    <BsFacebook className='cursor-pointer text-blue-600 hover:text-gray-500' />
                    <AiOutlineTwitter className='cursor-pointer text-indigo-600 hover:text-gray-500' />
                    <BsInstagram className='cursor-pointer text-orange-600 hover:text-gray-500' />
                    <BsYoutube className='cursor-pointer text-red-500 hover:text-gray-500' />
                </div>
            </nav>
        </footer>

    )
}

export default Footer