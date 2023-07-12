import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Profile({doProfile, user}){
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setFirst(user.firstName);
        setLast(user.lastName);
        setEmail(user.email);
        setUsername(user.username);
    }, []);

    function fieldControl(evt){
        const field = evt.target.name;
        const data = evt.target.value;

        //set the commands for the appropriate controlled field
        const update4 = {
            password : setPassword,
            first : setFirst,
            last : setLast,
            email : setEmail
        }

        update4[field](data);

    }

    function handleSubmit(evt){
        evt.preventDefault();
        const data = {};
        if (password) data.password = password;
        if (first) data.firstName = first;
        if (last) data.lastName = last;
        if (email) data.email = email;
        doProfile(user.username, data);
        navigate("/");
    }

    return (
        <div>
            <h1>Profile: {username}</h1>
            <form onSubmit={handleSubmit}> 
                <p><label htmlFor="password">Password</label><br/>
                <input type="password" id="password" name="password" placeholder='password' onChange={fieldControl} value={password} /></p>
                <p><label htmlFor="first">First name</label><br/>
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