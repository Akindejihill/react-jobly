import Company from './Company';
import { useEffect, useState } from 'react';
import { JoblyApi } from './api';

export default function Companies(){

    const [companies, setCompanies] = useState([]);


    useEffect(() => {
        async function callApi(){
            const data = await JoblyApi.getCompany("");
            console.log("data: ", data);
            if (data.companies){
                console.log("IS an array!");
                setCompanies(data.companies);
            } 
            // else {  //put the single company in a list format so it works with the map method in the JSX
            //     console.log("Not an array!");
            //     const myList=[];
            //     // myList.push(data.company);
            //     setCompanies([data.company]);
            // }
        }

        callApi();

    }, []);


    return (
        <div style={{backgroundColor : "black"}}>
            <form>
                <label htmlFor="search">Search</label>
                <input type="text" id="search"/>
            </form>
            {companies.map((company) => <Company company={company} key={company.handle}/>)}
        </div>
    )

}