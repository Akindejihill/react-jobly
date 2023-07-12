import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Profile({doProfile, user}){
    const navigate = useNavigate();
    
    const [first, setFirst] = useState(user.first);
    const [last, setLast] = useState(user.last);
    const [email, setEmail] = useState(user.email);
    const [username, setUsername] = useState(user.username);

    function fieldControl(evt){
        const field = evt.target.name;
        const data = evt.target.value;

        //set the commands for the appropriate controlled field
        const update4 = {
            username : setUsername,
            first : setFirst,
            last : setLast,
            email : setEmail
        }

        update4[field](data);

    }

    function handleSubmit(){
        doProfile(username, first, last, email);
        navigate("/");
    }

    return (
        <div>
            <h1>Sign up:</h1>
            <form onSubmit={handleSubmit}> 
                <p><label htmlFor="username">Username</label><br/>
                <input type="text" id="username" name="username" placeholder='username' onChange={fieldControl} value={username} /></p>
                <p><label htmlFor="first">First</label><br/>
                <input type="text" id="first" name="first" placeholder="first" onChange={fieldControl} value={first}/></p>
                <p><label htmlFor="last">Last name</label><br/>
                <input type="text" id="last" name="last" placeholder="last" onChange={fieldControl} value={last}/></p>
                <p><label htmlFor="email">Email</label><br/>
                <input type="text" id="email" name="email" placeholder="email" onChange={fieldControl} value={email}/></p>
                <button>Submit</button>
            </form>
        </div>
    )
}