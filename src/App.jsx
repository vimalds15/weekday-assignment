import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import './App.css'
import JobCard from './components/JobCard';

function App() {
  return (
    <div className='container'>
      <Grid container className='wrapper'>
        <Grid item>
        <JobCard />
        </Grid>
        <Grid item>
        <JobCard />
        </Grid>
        <Grid item>
        <JobCard />
        </Grid>
        <Grid item>
        <JobCard />
        </Grid>
        <Grid item>
        <JobCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
