import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './styles/Nav.css';

export default function Nav({user, setUser}){

    const navigate = useNavigate();

    const [nav, setNav] = useState("");

    function logout(){
        localStorage.removeItem("user");
        setUser({});
        navigate("/");
      }
    

    useEffect(() => {
        if (Object.keys(user).length !== 0) { //we are logged in if the user object is not empty
            console.log("user is: ", user);
          setNav(
            <nav id="navbar">
              <span className="leftjustify">
                <Link to="/">Jobly</Link>
              </span>
              <span className="rightjustify">
                <Link to="/companies">Companies</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </span>
            </nav>
          );
        } else {
            setNav(
                <nav id="navbar">
                  <span className="leftjustify">
                    <Link to="/">Jobly</Link>
                  </span>
                  <span className="rightjustify">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                  </span>
                </nav>
              );
        }
      }, [user]);




    return (
        <div>
            {nav}
        </div>
    )
}