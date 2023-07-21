import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Sidebar from "./components/Sidebar";
import { Box, Paper } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function App() {
  const api = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = process.env.REACT_APP_API;

  const berlin = {
    lon: 10.99,
    lat: 44.34,
  };

  const hamburg = {
    lon: 53.5488,
    lat: 9.9872,
  };

  const duesseldorf = {
    lon: 53.5488,
    lat: 9.9872,
  };

  async function getWeather() {
    // const url = api + 'lat=' + berlin.lat + '&lon=' + berlin.lon + '&appid=' + API_KEY
    // const response = await fetch(url)
    // const data = await response.json();
    // console.log(url)
  }

  return (
    <Grid container>
      <Grid xs={4}>
        <Sidebar></Sidebar>
      </Grid>

      <Grid container xs={8} sx={{ p: 4 }}>
        <Grid xs={12}>
          <Typography variant="h4">Forecast</Typography>
        </Grid>

        <Grid container xs={12} sx={{ mt: 2 }} justifyContent="space-between">
          <Grid xs={2}>
            <Paper elevation={4} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="body1">Friday</Typography>
              <WbSunnyIcon sx={{ mt: 1, mb: 1 }} style={{ fontSize: 50 }} />
              <Typography variant="body1">27.2°C</Typography>
            </Paper>
          </Grid>

          <Grid xs={2}>
            <Paper elevation={4} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="body1">Friday</Typography>
              <WbSunnyIcon sx={{ mt: 1, mb: 1 }} style={{ fontSize: 50 }} />
              <Typography variant="body1">27.2°C</Typography>
            </Paper>
          </Grid>

          <Grid xs={2}>
            <Paper elevation={4} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="body1">Friday</Typography>
              <WbSunnyIcon sx={{ mt: 1, mb: 1 }} style={{ fontSize: 50 }} />
              <Typography variant="body1">27.2°C</Typography>
            </Paper>
          </Grid>

          <Grid xs={2}>
            <Paper elevation={4} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="body1">Friday</Typography>
              <WbSunnyIcon sx={{ mt: 1, mb: 1 }} style={{ fontSize: 50 }} />
              <Typography variant="body1">27.2°C</Typography>
            </Paper>
          </Grid>

          <Grid xs={2}>
            <Paper elevation={4} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="body1">Friday</Typography>
              <WbSunnyIcon sx={{ mt: 1, mb: 1 }} style={{ fontSize: 50 }} />
              <Typography variant="body1">27.2°C</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="h4" sx={{ mt: 4 }}>Today</Typography>
        <Grid container spacing={4} xs={12} sx={{ mt: 2 }} justifyContent="space-between">
          <Grid xs>
            <Paper elevation={4} sx={{ p: 2 }}>
              <Typography variant="body1">Visibility</Typography>
              <Typography variant="h4" sx={{ my: 1 }}>
                1000
              </Typography>
              <Typography variant="body1">High</Typography>
            </Paper>
          </Grid>
          <Grid xs>
            <Paper elevation={4} sx={{ p: 2 }}>
              <Typography variant="body1">Visibility</Typography>
              <Typography variant="h4" sx={{ my: 1 }}>
                1000
              </Typography>
              <Typography variant="body1">High</Typography>
            </Paper>
          </Grid>
          <Grid xs>
            <Paper elevation={4} sx={{ p: 2 }}>
              <Typography variant="body1">Visibility</Typography>
              <Typography variant="h4" sx={{ my: 1 }}>
                1000
              </Typography>
              <Typography variant="body1">High</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={4} xs={12} sx={{ mt: 2 }} justifyContent="space-between">
          <Grid xs>
            <Paper elevation={4} sx={{ p: 2 }}>
              <Typography variant="body1">Visibility</Typography>
              <Typography variant="h4" sx={{ my: 1 }}>
                1000
              </Typography>
              <Typography variant="body1">High</Typography>
            </Paper>
          </Grid>
          <Grid xs>
            <Paper elevation={4} sx={{ p: 2 }}>
              <Typography variant="body1">Visibility</Typography>
              <Typography variant="h4" sx={{ my: 1 }}>
                1000
              </Typography>
              <Typography variant="body1">High</Typography>
            </Paper>
          </Grid>
          <Grid xs>
            <Paper elevation={4} sx={{ p: 2 }}>
              <Typography variant="body1">Visibility</Typography>
              <Typography variant="h4" sx={{ my: 1 }}>
                1000
              </Typography>
              <Typography variant="body1">High</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
