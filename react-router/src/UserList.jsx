import React from 'react'
import { Link } from 'react-router'

const UserList = () => {
    const userData = [
        {id: 1, name: "Alice"},
        {id: 2, name: "Bob"},
        {id: 3, name: "Charlie"},
        {id: 4, name: "David"},
        {id: 5, name: "Eve"}
    ]
  return (
    <div style={{textAlign: "center"}}>
        <h1>User List</h1>
        {
            userData.map((user) => (
                <div key={user.id} style={{margin: "1px", padding: "2px"}}>
                    <h3><Link to={"/users/"+user.id}>{user.name}</Link></h3>
                </div>
            ))
        }

        <h1>User List with name</h1>
        {
            userData.map((user) => (
                <div key={user.id} style={{margin: "1px", padding: "2px"}}>
                    <h3><Link to={"/users/"+user.id+"/"+user.name}>{user.name}</Link></h3>
                </div>
            ))
        }
    </div>
  )
}

export default UserList