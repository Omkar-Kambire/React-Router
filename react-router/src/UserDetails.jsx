import { Link, useParams } from "react-router";

const UserDetails = () => {
    const paramsData = useParams();
    
  return (
    <div style={{textAlign: "center"}}>
        <h1>User Details</h1>
        <h2>User ID : {paramsData.id}</h2>
        <Link to="/users">Back</Link>
    </div>
  )
}

export default UserDetails;