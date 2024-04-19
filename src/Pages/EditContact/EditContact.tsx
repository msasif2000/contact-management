
import { useLocation } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import cntc from "../../assets/images/contct.jpg"
interface ContactData {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    image: string;
}

const EditContact = () => {
    const location = useLocation();
    const contact = location.state.contact;
    const navigate = useNavigate();
    //console.log(contact);
    const { loading, setLoading, userRefetch } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm<ContactData>();

    const onSubmit: SubmitHandler<ContactData> = async (data: ContactData) => {
        console.log(contact?._id);
        axiosPublic.patch(`/updateContact/${contact?.id}`, data)
            .then(res => {
                if (res.data) {
                    toast.success("Contact updated successfully", {
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
                toast.error("Error updating contact", {
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
                                Edit Contact
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
                                    defaultValue={contact?.name}
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
                                    defaultValue={contact?.email}
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
                                    defaultValue={contact?.phone}
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
                                    defaultValue={contact?.address}
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
                                    defaultValue={contact?.image}
                                    className="input-md rounded-lg border-b-4 hover:border-b-primary duration-500 outline-none bg-[#F7FBFF]"
                                />
                            </div>
                            <button
                                type="submit"
                                value=""
                                className="btn w-full bg-secondary text-white hover:bg-primary hover:text-black duration-500 "
                            >
                                {loading ? (
                                    <span className="loading loading-dots loading-md"></span>
                                ) : (
                                    "Update Contact"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-1">
                    <img src={cntc} alt="" className="w-full" />
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default EditContact;