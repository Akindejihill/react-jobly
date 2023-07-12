
import { useEffect, useState } from 'react';
import { JoblyApi } from './api';
import Listing from './Listing';

export default function Jobs(){

    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        async function callApi(){
            const data = await JoblyApi.getJob("");
            console.log("data: ", data);
            if (data.jobs){
                console.log("IS an array!");
                setJobs(data.jobs);
            } 
        }

        callApi();

    }, []);


    return (
        <div style={{backgroundColor : "black", color : "white", textAlign : "left"}}>
            <h1>Job Listings</h1>
            {jobs.map((job) => <Listing job={job} key={job.id}/>)}
        </div>
    )

}