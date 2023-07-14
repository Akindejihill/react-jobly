import "./styles/Listing.css"

export default function Listing({job, apply, applications}){

    async function doApply(evt){
        apply(job.id);
    }


    return (
        <div className="joblisting">
            <h1>{job.title}</h1>
            {job.companyName ? <p>{job.companyName}</p> : ""}
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            {applications.includes(job.id) ? "" : <button onClick={doApply}>Apply</button>}
        </div>
    )
}