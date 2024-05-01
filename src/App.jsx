import { Card, CardContent, Typography, Box } from '@mui/material';
import './App.css'
import JobCard from './components/JobCard';

function App() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <JobCard />
        {/* <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard /> */}
      </div>
    </div>
  );
}

export default App;
