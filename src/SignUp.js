import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function SignUp({doSignUp}){
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");

    function fieldControl(evt){
        const field = evt.target.name;
        const data = evt.target.value;

        //set the commands for the appropriate controlled field
        const update4 = {
            username : setUsername,
            password : setPassword,
            first : setFirst,
            last : setLast,
            email : setEmail
        }

        update4[field](data);

    }

    function handleSubmit(){
        doSignUp(username, password, first, last, email);
        navigate("/");
    }

    return (
        <div>
            <h1>Sign up:</h1>
            <form onSubmit={handleSubmit}> 
                <p><label htmlFor="username">Username</label><br/>
                <input type="text" id="username" name="username" placeholder='username' onChange={fieldControl} value={username} /></p>
                <p><label htmlFor="password">Password</label><br/>
                <input type="password" id="password" name="password" placeholder="password" onChange={fieldControl} value={password}/></p>
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