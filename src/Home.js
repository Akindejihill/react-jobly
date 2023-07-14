import {Link} from 'react-router-dom';
import "./styles/Home.css";


export default function Home({user}){
    return (
        <div id="home">
            <h1>Jobly</h1>
            <p>Go git you one!</p>
            {Object.keys(user).length !== 0 ?<h1>Welcome back, {user.firstName}!</h1> : <h1>Please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link></h1>}
        </div>
    )
}