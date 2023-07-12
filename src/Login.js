import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login({doLogin}){
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function fieldControl(evt){
        const field = evt.target.name;
        const data = evt.target.value;

        //the commands for the appropriate controlled field
        const update4 = {
            username : setUsername,
            password : setPassword
        }

        update4[field](data);

    }

    function handleSubmit(evt){
        evt.preventDefault();
        doLogin(username, password);
        navigate("/");
    }

    return (
        <div>
            <h1>Login:</h1>
            <form onSubmit={handleSubmit}> 
                <p><label htmlFor="username">Username</label><br/>
                <input type="text" id="username" name="username" placeholder='username' onChange={fieldControl} value={username} /></p>
                <p><label htmlFor="password">Password</label><br/>
                <input type="password" id="password" name="password" placeholder="password" onChange={fieldControl} value={password}/></p>
                <button>Submit</button>
            </form>
        </div>
    )
}          