export default function Listing({job}){
    return (
        <div style={{backgroundColor : "white", color : "black", width : "600px", margin : "0 auto"}}>
            <h1>{job.title}</h1>
            {job.companyName ? <p>{job.companyName}</p> : ""}
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            <button style={{backgroundColor:"red", borderRadius : "10%", fontSize : "120%", color : "white"}}>Apply</button>
        </div>
    )
}