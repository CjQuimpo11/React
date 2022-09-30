
import React ,{useEffect, useState} from "react";
import axios from "axios";

const Adduser = ({setShowModal,showModal,getData,editData, type}) =>{
   
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [phone, setPhone] = useState(" ");
    ;
    // const navigate = useNavigate();
    

    const addData = async () =>{
        try{
            const data ={
                name: name,
                email: email,
                phone: phone,
              }; 
          let res = await axios.post("http://localhost:4000/contact/create", data)
          .then(res=>{
            setShowModal(false)
            getData();
            setName("");
            setEmail("");
            setPhone("");
            console.log(res);
            alert(`${type} successful`)
          })}
              catch(e){
                console.log(e)
              }
      //   fetch('http://localhost:4000/contact/create',{
      //         method: 'POST',
      //         headers: {
      //           'Content-Type': 'application/json',
                
      //         },
      //         body: JSON.stringify({
      //           full_name: name,
      //           email: email,
      //           phone: phone
            
      //         })
      //       })
      //       .then(res => res.json())
      //       setShowModal(false)
      //       getData();
      //       setName("");
      //       setEmail("");
      //       setPhone("");
      
      //       alert(`${type} successful`)
          

      }


      const addBtn = async (e) =>{
        e.preventDefault();
        if(name.length === 0 && email.length === 0 && phone.length === 0 ){
          alert("Nothing is field")
        }
        else if(name.length === 0){
          alert("Name not field")
        } 
        else if (email.length === 0){
          alert("Email not field")
          } 
        else if (phone.length === 0){
          alert("Phone not field")
        }
       
        else{
            if(type === 'Add'){
                addData();
            }
            else{
                edit();
            }
       
        }
      }

      const edit = async () =>{
        try{
            const data ={
                name: name,
                email: email,
                phone: phone,
              }; 
          let res = await axios.put(`http://localhost:4000/contact/${editData._id}`, data)
          .then(res=>{
            setShowModal(false)
            getData();
            setName("");
            setEmail("");
            setPhone("");
            console.log(res);
            alert(`${type} successful`)
          })}
              catch(e){
                console.log(e)
              }
      }
         
      useEffect(()=>{
        setName(editData ? editData.name :'');
        setEmail(editData ? editData.email : '');
        setPhone(editData ? editData.phone : '');
       
      }, [editData])
       




    return (
     <div>
            
            {showModal ?(
                <>
              
                <div className="justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font=semibold">{type} Contact</h3>
                        {/* {editData.phone} */}
                        <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                        >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                            x
                        </span>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                        <label className="block text-black text-sm font-bold mb-1">
                            Full Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                        value={name || ''}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Enter your name"
                        />
                        
                        <label className="block text-black text-sm font-bold mb-1">
                        Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                        value={email || ''}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter your email"
                        />
                        
                        <label className="block text-black text-sm font-bold mb-1">
                            Phone
                        </label>  
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                        value={phone || ''}
                        onChange={(e)=>setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        />
                        
                        </div>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                        >
                        Close
                        </button>
                        <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={e=>addBtn(e)}
                        >
                        {type} Contact
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </>
             ) : null} 
        </div>
    )
}

export default Adduser;