import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function Nav({user, setUser}){

    const navigate = useNavigate();

    const [nav, setNav] = useState("");

    function logout(){
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
      }
    

    useEffect(() => {
        if (user) {
            console.log("user is: ", user);
          setNav(
            <nav>
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
                <nav>
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