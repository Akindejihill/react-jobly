import Company from './Company';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { JoblyApi } from './api';
import Listing from './Listing';
import "./styles/JobListings.css"

/**
 * Displays Job listings for a particular company.
 * @returns 
 */
export default function JobListings({apply, applications}){

    const { handle } = useParams();
    const [company, setCompany] = useState([]);
    const [jobs, setJobs] = useState([]);

    // console.log("JobListings application: ", applications);
 

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
        <div id="companyjobs">
            <h1>{company.name}</h1> 
            <p>{company.description}</p>
            {jobs.map((job) => <Listing job={job} apply={apply} applications={applications} key={job.id}/>)}
        </div>
    )

}