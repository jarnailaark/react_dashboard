import React from "react";
import { AppBar, Toolbar, Typography, Box, Paper } from "@mui/material";

function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="h5">Users</Typography>
          <Typography>Total Users: 120</Typography>
        </Paper>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="h5">Orders</Typography>
          <Typography>Pending Orders: 34</Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
