import { BsHandIndexThumbFill } from "react-icons/bs"; 
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ContactCard from "../../Pages/AllContacts/ContactCard";

interface contactData {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    image: string;
    bookmarked: boolean;
}
const MyContacts = () => {
    const [contacts, setContacts] = useState<contactData[]>([]);
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    useEffect(() => {
        axiosPublic.get(`/allContacts/${user?.email}`)
            .then(res => {
                setContacts(res.data);
            })
    })
    const len = 3;
    return (
        <div>
            {
                user ? (
                    <div className="lg:max-w-screen-lg 2xl:max-w-screen-xl min-h-screen mx-auto  lg:px-3 md:px-12 px-8 mb-4 mt-16">
                        <h2 className="text-2xl md:text-4xl xl:text-5xl text-center font-semibold py-2">Your Contacts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-12">
                            {
                                contacts?.map((contact, index) => (
                                    index < len && <ContactCard key={contact._id} contact={contact}></ContactCard>
                                ))
                            }
                        </div>
                        <div className="flex justify-end">
                            <Link to="/allContacts"><button className="btn bg-primary hover:bg-tertiary">View All</button></Link>
                        </div>
                    </div>
                ) :
                    <div className="lg:max-w-screen-lg 2xl:max-w-screen-xl mx-auto  lg:px-3 md:px-12 px-8 mb-16 mt-16 flex justify-between items-center">
                        <p className="flex items-center gap-2">You are Log out. Please Sign in here <BsHandIndexThumbFill  className="text-3xl rotate-90"/></p>
                        <Link to="/login"><button className="btn bg-primary hover:bg-tertiary">Login Now</button></Link>
                    </div>
            }
        </div>
    );
};

export default MyContacts;