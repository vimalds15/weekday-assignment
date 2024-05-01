import { Grid } from '@mui/material';
import './App.css'
import JobCard from './components/JobCard';
import { useEffect, useState } from 'react';

function App() {
  const [jobs,setJobs] = useState([]);

  const fetchData = async() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "limit": 10,
      "offset": 0
     });
     
     const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
     };
     
     try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions) 
        const result = await response?.json();
        setJobs(result.jdList);
        console.log(result);
     } catch (error) {
      console.error(error?.message)
     }
  }


  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='container'>
      <Grid container className='wrapper'>
        {jobs?.map(job => (
          <Grid key={job?.jdUid} item>
            <JobCard 
              jobLink={job?.jdLlink}
              jobRole={job?.jobRole}
              jobLocation={job?.location}
              jobDescription={job?.jobDetailsFromCompany}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
