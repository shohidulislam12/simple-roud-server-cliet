import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedusers=useLoaderData()
    const[users,setusers]=useState(loadedusers)
const handleDelet=(_id)=>{
console.log(_id)
fetch(`http://localhost:3000/users/${_id}`,{
    method:"DELETE"
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.deletedCount>0){
        alert('delete sucessfully')
        const remaining=users.filter(user=>user._id!==_id)
        setusers(remaining)
    }
})
}
    return (
        <div>
            <h2>total user{users.length}</h2>
            <div>
                {
                    users.map(user=><p key={user._id}>{user.name};<br />{user.email} 
                <Link to={`/update/${user._id}`}>
                <button>Update</button>
                </Link>
                     <button onClick={()=>handleDelet(user._id)} >X</button> </p>)

                }
            </div>
        </div>
    );
};

export default Users;