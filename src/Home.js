import {Link} from 'react-router-dom';



export default function Home({user}){
    return (
        <div>
            <h1>Jobly</h1>
            <p>Go git you one!</p>
            {user?<h1>Welcome back, {user.firstName}!</h1> : <h1>Please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link></h1>}
        </div>
    )
}