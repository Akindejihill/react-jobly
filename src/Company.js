import {useNavigate} from 'react-router-dom';


export default function Company({company}){

    const navigate = useNavigate();

    const handleClick = (evt) => {
        evt.stopPropagation();
        navigate(`/companies/${company.handle}`);
    };

    return (
        <div style={{backgroundColor : "white", width : "600px", margin : "0 auto", textAlign : "left"}} onClick={handleClick}>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
        </div>
    )

}