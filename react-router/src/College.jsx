import { NavLink, Outlet } from "react-router";

const College = () => {
    return (
        <div className="college" style={{textAlign: "center"}}>
            <h1>College Page</h1>
            
            <NavLink className="link" to="student">Student</NavLink>
            <NavLink className="link" to="department">Department</NavLink>
            <NavLink className="link" to="details">College Details</NavLink>
            <Outlet />
        </div>
    )
}

export default College;