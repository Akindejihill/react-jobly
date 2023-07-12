import Company from './Company';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { JoblyApi } from './api';
import Listing from './Listing';

export default function Companies(){

    const { handle } = useParams();
    const [company, setCompany] = useState([]);
    const [jobs, setJobs] = useState([]);

//if there is a param, find that company in the list sent though props
//otherwise show all companies
    console.log("handle: ", handle);


    useEffect(() => {
        async function callApi(){
            const data = await JoblyApi.getCompany(handle);
            console.log("data: ", data);
            if (data.company){
                setCompany(data.company);
                setJobs(data.company.jobs);
            } 
            
        }

        callApi();

    }, []);


    return (
        <div style={{color : "white", backgroundColor : "black", textAlign : "left", width : "800px", margin : "0 auto"}}>
            <h1>{company.name}</h1> 
            <p>{company.description}</p>
            {jobs.map((job) => <Listing job={job} key={job.id}/>)}
        </div>
    )

}