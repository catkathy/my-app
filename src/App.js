import './App.css';
import TourCards from './components/TourCard';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid"
import SearchAppBar from './components/AppBar';
import cities from "./data.json"
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{ marginY: 5 }} >
        <Grid container spacing={5}>
          <TourCards />
          <TourCards />
          <TourCards />
          <TourCards />
        </Grid>
      </Container>
    </div >
  );
}

export default App;
