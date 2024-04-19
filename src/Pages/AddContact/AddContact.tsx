import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import cntc from "../../assets/images/contct.jpg";

interface contactData {
    name: string;
    email: string;
    phone: string;
    address: string;
    image: string;
}
const AddContact = () => {
    const { loading, setLoading, userRefetch } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
    } = useForm<contactData>();

    const onSubmit = async (data: contactData) => {
        axiosPublic.post("/addContact", data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Contact added successfully", {
                        position: "top-center",
                        hideProgressBar: true,
                        autoClose: 2000,
                    });
                    userRefetch()
                    setLoading(false);
                    navigate("/allContacts");
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("Error adding contact", {
                    position: "top-center",
                    hideProgressBar: true,
                    autoClose: 2000,
                });
                setLoading(false);
            })
    };

    return (
        <div>
            <div className="lg:max-w-screen-lg 2xl:max-w-screen-xl min-h-screen flex mx-auto justify-center lg:px-3 md:px-12 px-8 mb-4 mt-8">
                {/* form div */}
                <div className="flex flex-col items-center justify-center flex-1 w-full">
                    <div className="w-full md:px-10 lg:px-4 2xl:px-12">
                        <div className="">
                            <h1 className="text-2xl md:text-4xl xl:text-5xl text-center font-semibold py-2">
                                Add Contact
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3  border-2 p-4 rounded-lg border-secondary">
                            <div className="form-control w-full">
                                <label htmlFor="name" className="font-semibold text-lg ">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="John Doe"
                                    className="input-md rounded-lg border-b-4 hover:border-b-primary duration-500 outline-none bg-[#F7FBFF]"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="email" className="font-semibold text-lg ">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    placeholder="example@gmail.com"
                                    className="input-md rounded-lg border-b-4 hover:border-b-primary duration-500 outline-none bg-[#F7FBFF]"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="phone" className="font-semibold text-lg ">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    {...register("phone", { required: "Phone Number is required" })}
                                    placeholder="08012345678"
                                    className="input-md rounded-lg border-b-4 hover:border-b-primary duration-500 outline-none bg-[#F7FBFF]"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="address" className="font-semibold text-lg ">
                                Address
                                </label>
                                <input
                                    type="text"
                                    {...register("address")}
                                    placeholder="#123, Lakeview Street, Lagos"
                                    className="input-md rounded-lg border-b-4 hover:border-b-primary duration-500 outline-none bg-[#F7FBFF]"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="image" className="font-semibold text-lg ">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    {...register("image")}
                                    placeholder="https://example.com/image.jpg"
                                    className="input-md rounded-lg border-b-4 hover:border-b-primary duration-500 outline-none bg-[#F7FBFF]"
                                />
                            </div>
                            <button
                                type="submit"
                                value=""
                                className="btn w-full bg-secondary text-white hover:bg-primary duration-500 "
                            >
                                {loading ? (
                                    <span className="loading loading-dots loading-md"></span>
                                ) : (
                                    "Add Contact"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-1">
                    <img src={cntc} alt="" className="w-full"/>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddContact;