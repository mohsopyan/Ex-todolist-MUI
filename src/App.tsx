import { Box, Button, Container, styled, Typography, Divider, Input } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

const Cb = styled(Checkbox)(() => ({
  color: "green",
}));

const Btn = styled(Button)(() => ({
  color: red[300],
  // backgroundColor: 'transparent',
  borderColor: red[300],
}));
function App() {
  const question = [
    "Create Guest Experience mobile check-in",
    "Document current CI/CD process",
    "Perform Code Review for final Pillow-talk release",
    "Implement new color palette from design team",
    "Fix image uploading process for guest check in",
    "Provide on-boarding documentation",
  ];

  return (
    <Box sx={{ backgroundColor: "#1a202c" }}>
      <Container>
        <Typography variant="h4" sx={{ color: "white", textAlign: "center", padding: "2em" }}>
          Chores ToDo List
        </Typography>
        {question.map((q) => (
          <Box sx={{ padding: ".5em" }}>
            <Grid container spacing={2}>
              <Grid size={2}>
                <Cb />
              </Grid>
              <Grid size={8}>
                <Typography sx={{ color: "white" }}>{q}</Typography>
              </Grid>
              <Grid size={2}>
                <Btn variant="outlined">
                  <DeleteIcon />
                </Btn>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>
      <Divider sx={{ color: "white" }}></Divider>
      <Container sx={{ padding: "2em 0" }}>
        <Box>
          <Typography sx={{ color: "white" }}>Add Todo</Typography>
        </Box>
        <Box sx={{ padding: "1em 0em" }}>
          {/* <TextField sx={{borderColor: 'white', color: 'white'}} label="" fullWidth focused/>
           */}
          <Input />
        </Box>
        <Box>
          <Button variant="contained">ADD TASK</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
