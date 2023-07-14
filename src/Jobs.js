
import { useEffect, useState } from 'react';
import { JoblyApi } from './api';
import Listing from './Listing';

/**
 * Displays a list of all available positions at all companies
 * @param {*} apply 
 * @param {*} applications 
 * @returns 
 */
export default function Jobs({apply, applications}){

    const [jobs, setJobs] = useState([]);



    useEffect(() => {
        async function callApi(){
            const data = await JoblyApi.getJob("");
            console.log("job data: ", data);
            if (data.jobs){
                setJobs(data.jobs);
            } 
        }

        callApi();

    }, []);


    return (
        <div style={{backgroundColor : "black", color : "white", textAlign : "left"}}>
            <h1>Job Listings</h1>
            {jobs.map((job) => <Listing job={job} apply={apply} applications={applications} key={job.id}/>)}
        </div>
    )

}