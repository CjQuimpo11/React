import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Adduser from "./Adduser";

const Home = () =>{
    const [users, setUsers] = useState([]);
    const [user1, setUser1] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [type, setType] = useState("Add");
   
    const getData = async () => {
        try{
        let res = await axios.get("http://localhost:4000/contact/all")
        
            setUsers(res.data);
   
          }
          catch(e){
            console.log(e)
          }
        }
        
       
    useEffect(()=>{
      getData();
       
    },[])

    const Delete = (id) =>{
        axios.delete(`http://localhost:4000/contact/${id}/delete`)
        .then(
            getData(),
            alert("Contact is now deleted")
        )
        
    }

    const HandleEdit = (data) =>{
        setUser1(data);
        setShowModal(true);
        console.log(data)
        setType("Edit")
    }

    const HandleAdd = () =>{
        setShowModal(true);
        setType("Add")
    }


    return (
        <div className='w-full h-full flex flex-col px-10 py-8'>
                  <Adduser getData={getData} setShowModal={setShowModal} editData={user1} showModal={showModal} type={type}/>
            <div className="grid  place-items-center">
                  <button className="
                    hover:bg-green-600 
                    hover:border-2 hover:border-black hover:text-white-200 hover:shadow-md rounded-lg bg-yellow-300 font-bold text-black py-2 px-8 "
                    onClick={()=>HandleAdd()}
                    >
                    Add User 
                </button>
            </div>
            <div className="w-full flex min-h-[50vh] justify-center items-center ">
                <table className="w-[80%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black ">
                    <thead className="border-b bg-gray-800">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 mt-4">
                                #
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Name
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Email
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Phone
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                {users && users.map((user, index)=>{
                    return (
                        <tr key={index} className="bg-white border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {user._id}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                                {user.name}    
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                               {user.email}  
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                                {user.phone}
                            </td>
                            <td className="flex justify-center items-center space-x-4 mt-1">
                                <Link to={`/users/${user._id}`} className='px-6 py-2 text-white font-normal bg-black rounded-lg'>View</Link>
                                <button className='px-6 py-2 text-white font-normal bg-red-600 rounded-lg' onClick={()=>Delete(user._id)}>Delete</button>
                                <button className='px-6 py-2 text-white font-normal bg-blue-800 rounded-lg' onClick={()=>HandleEdit(user)}>Edit</button>
                            </td>
                            </tr>
                    )
                })}
                  
                       
                    </tbody>
                </table>

            </div>

                
        
        
        </div>
    )
}

export default Home;