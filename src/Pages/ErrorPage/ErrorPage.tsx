import { Link } from "react-router-dom";
import err from "../../assets/images/error.jpg"

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-8">
            <img src={err} alt="" className="lg:h-[550px] 2xl:h-[700px]"/>
            <div>
                    <Link to="/"><button className="btn bg-sky-300">Back to Home</button></Link>    
            </div>
        </div>
    );
};

export default ErrorPage;