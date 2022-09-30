import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const User = () =>{
    const [users, setUsers] = useState([]);
    const getData = async () => {
        try{
        let res = await axios.get(`http://localhost:4000/contact/${id}`)
        
            setUsers(res.data)
   
          }
          catch(e){
            console.log(e)
          }
        }
       
    useEffect(()=>{
      getData();
       
    },[])
    const {id} = useParams()
    return (
        <div className="w-full h-full flex justify-center items-center">
            {users && (
              <>
           

              <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center  mt-16 border-teal-800 border-2">
                <div className="w-5/12 flex flex-col space-y-4">
                    <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">Name</h2>
                    <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">Email</h2>
                    <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">Phone</h2>
                </div>
                <div className="w-7/12 flex flex-col space-y-4">
                    <h2 className="text-blue-200 font-bold text-3xl border-black border-b-2">{users.name}</h2>
                    <h2 className="text-blue-200 font-bold text-3xl border-black border-b-2">{users.email}</h2>
                    <h2 className="text-blue-200 font-bold text-3xl border-black border-b-2">{users.phone}</h2>
                </div>
              </div>
              
              
              </>  
            )}
            
        </div>
    )
}
export default User;