import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const EditContact = () => {
    const id = useParams().id;
    const axiosPublic = useAxiosPublic();
    const [contact, setContact] = useState();
    useEffect(() => {
        axiosPublic.get(`/contacts/${id}`)
        .then((res) => {
            setContact(res.data);
        })
    })
    
    return (
        <div>
            
        </div>
    );
};

export default EditContact;