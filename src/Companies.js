import Company from './Company';
import { useEffect, useState } from 'react';
import { JoblyApi } from './api';
import "./styles/Companies.css"

export default function Companies(){

    const [companies, setCompanies] = useState([]);
    const [search, setSearch] = useState("");

    function fieldControl(evt){
        const field = evt.target.name;
        const data = evt.target.value;

        //the commands for the appropriate controlled field
        const update4 = {
            search : setSearch
        }

        update4[field](data);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        companySearch(`${search}`);
    }


    useEffect(() => {
        async function callApi(){
            const data = await JoblyApi.getCompany(`${search}`);
            console.log("data: ", data);
            if (data.companies){
                setCompanies(data.companies);
            } 

        }

        callApi();

    }, []);


    async function companySearch(handle){
        const data = await JoblyApi.findCompany(`${search}`);
        console.log("data: ", data);
        if (data.companies){
            setCompanies(data.companies);
        } else {
            console.log("Only one company");
        }
    }


    return (
        <div id="companies">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input type="text" id="search" name="search" value={search} onChange={fieldControl}/>
                <button>search</button>
            </form>
            {companies.map((company) => <Company company={company} key={company.handle}/>)}
        </div>
    )

}