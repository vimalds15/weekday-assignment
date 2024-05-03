import { Grid } from "@mui/material";
import "./App.css";
import JobCard from "./components/jobCard/JobCard";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./features/redux/jobs/jobsSlice";
import Filter from "./components/filter/Filter";

function App() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const observer = useRef();

  // For infinite loading
  useEffect(() => {
    // Initialize Intersection Observer
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && !loading) {
          // Increment offset when footer is intersecting
          setOffset((prevVal) => prevVal + 10);
        }
      },
      {
        threshold: 0.5,
      }
    );

    // Observe the footer
    observer.current.observe(document.getElementById("footer"));

    // Cleanup function
    return () => {
      observer.current.disconnect();
    };
  }, [loading]);

  useEffect(() => {
    if (offset !== 0) {
      dispatch(fetchData({ offset })); 
    }
  }, [offset]);

  console.log("rendering")
  
  return (
    <div className="container">
      <Filter />    
      <Grid container className="wrapper">
        {jobs?.map((job) => (
          <Grid key={job?.jdUid} item>
            <JobCard
              jobLink={job?.jdLink}
              jobRole={job?.jobRole}
              jobLocation={job?.location}
              jobDescription={job?.jobDetailsFromCompany}
              jobMinSalary={job?.minJdSalary}
              jobMaxSalary={job?.maxJdSalary}
              jobMinExp={job?.minExp}
              jobCurrency={job?.salaryCurrencyCode}
              companyName={job?.companyName}
              logoUrl={job?.logoUrl}
            />
          </Grid>
        ))}
      </Grid>
      {/* Footer element to observe for intersection */}
      <div id="footer" style={{ height: "10px" }}></div>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
