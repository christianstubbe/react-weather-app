import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

function App() {

  const api = 'https://api.openweathermap.org/data/2.5/weather?'
  const API_KEY = process.env.REACT_APP_API

  const berlin = {
    lon: 10.99,
    lat: 44.34
  }

  const hamburg = {
    lon: 53.5488,
    lat: 9.9872
  }

  const duesseldorf = {
    lon: 53.5488,
    lat: 9.9872
  }

  async function getWeather() {
    // const url = api + 'lat=' + berlin.lat + '&lon=' + berlin.lon + '&appid=' + API_KEY
    // const response = await fetch(url)
    // const data = await response.json();
    // console.log(url)
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h3" gutterBottom>
                Düsseldorf
              </Typography>
              <Typography variant="h3" gutterBottom>
                { duesseldorf.lon }
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          Hamburg
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
