import {useNavigate} from 'react-router-dom';
import JobListings from './JobListings';

export default function Company({company}){

    const navigate = useNavigate();

    const handleClick = (evt) => {
        evt.stopPropagation();
        navigate(`/companies/${company.handle}`);
    };

    //somehow compose listings
    const listings = {};

    return (
        <div style={{backgroundColor : "white", width : "600px", margin : "0 auto", textAlign : "left"}} onClick={handleClick}>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
        </div>
    )

}