import { GrUserManager } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { BiMailSend } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import edit from "../../assets/images/edit.png"
import bin from "../../assets/images/bin.png"
import save from "../../assets/images/save.png"
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
interface contact {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    image: string;
}
interface ContactCardProps {
    contact: contact;
}
const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
    const { _id, name, email, phone, address, image } = contact;
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleEdit = (_id: string) => {
        navigate(`/editContact/${_id}`, { state: { contact } });
    }

    const handleDelete = (_id: string) => {
        console.log(_id);
        axiosPublic.delete(`/deleteContact/${_id}`)
            .then(res => {
                if (res.data) {
                    toast.success("Contact deleted successfully", {
                        position: "top-center",
                        hideProgressBar: true,
                        autoClose: 2000,
                    });
                    navigate("/allContacts");
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div data-aos="fade-right" data-aos-duration="2500" className="rounded-lg">
            <div className="flex items-center justify-start rounded-t-2xl gap-4 bg-tertiary p-4 w-full">
                <h2 className="text-2xl">{name}</h2>
                <div className="flex gap-2 justify-center">
                    <img src={edit} onClick={() => handleEdit(_id)} alt="" className="h-8 bg-white p-1 rounded-lg" />
                    <img src={bin} onClick={() => handleDelete(_id)} alt="" className="h-8 bg-white p-1 rounded-lg" />
                    <img src={save} alt="" className="h-8 bg-white p-1 rounded-lg" />
                </div>
            </div>
            <div className="flex items-center bg-secondary relative rounded-b-2xl text-white">
                <div data-aos="fade-up" data-aos-duration="3000" className="w-full p-4">
                    <p className="flex items-center gap-1"><BiPhoneCall className="text-primary text-xl" />{phone}</p>
                    <p className="flex items-center gap-1"><BiMailSend className="text-primary text-xl" />{email}</p>
                    <p className="flex items-center gap-1"><ImLocation className="text-primary text-xl" />{address}</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="3000" className="-top-6 absolute right-2">
                    {
                        image ?
                            <img src={image} alt="" className="h-24 rounded-full bg-primary p-1" />
                            :
                            <GrUserManager className="h-24 w-24 rounded-full bg-primary p-1" />
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ContactCard;