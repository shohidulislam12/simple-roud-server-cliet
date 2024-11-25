import { useLoaderData } from "react-router-dom";


   
const Update = () => {
    const lodeduser=useLoaderData()


    const handleUpdate=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const email=form.email.value
        const updateuser={name,email}
        console.log(updateuser);
        fetch(`http://localhost:3000/users/${lodeduser._id}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateuser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('update user successfully')
              form.name.value=''
              form.email.value=''
            }
        })
    } 

    return (
        <div>
            <h1>Update infu of {lodeduser.name}</h1>
            <form onSubmit={handleUpdate} >
   <input type="text" name="name" defaultValue={lodeduser?.name} id="" /><br />
   <input type="email" name="email" defaultValue={lodeduser?.email} id="" /> <br />
   <input type="submit" value="Update user" />

      </form>
        </div>
    );
};

export default Update;