import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import ContactCard from "./ContactCard";

interface contactData {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    image: string;
}
const AllContacts = () => {
    const [contacts, setContacts] = useState<contactData[]>([]);
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    useEffect(() => {
        axiosPublic.get(`/allContacts/${user?.email}`)
            .then(res => {
                setContacts(res.data);
            })
    })

    return (
        <div className="lg:max-w-screen-lg 2xl:max-w-screen-xl min-h-screen mx-auto  lg:px-3 md:px-12 px-8 mb-4 mt-8">
            <h2 className="text-2xl md:text-4xl xl:text-5xl text-center font-semibold py-2">All of your Contacts are here</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-12">
                {
                    contacts?.map((contact) => (
                        <ContactCard key={contact._id} contact={contact}></ContactCard>
                    ))
                }
            </div>
        </div>
    );
};

export default AllContacts;