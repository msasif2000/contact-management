import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.jpg"

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Discover seamless contact management with our intuitive platform. Stay organized, stay connected, and boost productivity effortlessly.</p>
                    <Link to="/addContact"><button className="btn bg-primary hover:bg-tertiary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;