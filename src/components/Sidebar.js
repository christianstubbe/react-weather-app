import * as React from "react";
import {
  Box,
  Stack,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import MoodIcon from "@mui/icons-material/Mood";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: true,
  });

  return (
    <Box sx={{ p: 4 }}>
      <TextField fullWidth label="Search..." type="search" />

      <WbSunnyIcon sx={{ mt: 8, mb: 1 }} style={{ fontSize: 60 }} />

      <Typography variant="h2">30.9°C</Typography>
      <Typography variant="body1">Friday, 11:54 PM</Typography>

      <Divider sx={{ my: 2 }} />

      <Stack direction="row" alignItems="center" gap={1}>
        <WbCloudyIcon />
        <Typography sx={{ my: 1 }} variant="body1">
          Partially Cloudy
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" gap={1}>
        <WaterDropIcon />
        <Typography sx={{ my: 1 }} variant="body1">
          {" "}
          0.1%
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" gap={1}>
        <MoodIcon />
        <Typography sx={{ my: 1 }} variant="body1">
          35.2°C
        </Typography>
      </Stack>

      <Typography sx={{ mt: 4 }} variant="body1">
        Berlin, Germany
      </Typography>
    </Box>
  );
}
