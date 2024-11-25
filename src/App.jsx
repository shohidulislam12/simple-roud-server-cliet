
import { NavLink } from 'react-router-dom'
import './App.css'

function App() {

const handleaddUser=(e)=>{
e.preventDefault()
const form=e.target
const name=form.name.value
const email=form.email.value

console.log(name,email)
const user={name:name,email:email}
fetch("http://localhost:3000/users", {
  method: "POST",
  
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify(user),
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.insertedId){
    alert ('user add sucessfully')
    form.reset()
  }
})
console.log(user);
}

  return (
    <>
     
      <h1>Simple Crud</h1>
      <form onSubmit={handleaddUser} >
   <input type="text" name="name" id="" /><br />
   <input type="email" name="email" id="" /> <br />
   <input type="submit" value="add user" />

      </form>
      <NavLink to="/users"> show user </NavLink>
     
   
    </>
  )
}

export default App
