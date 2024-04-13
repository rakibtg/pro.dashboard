import Navbar from "./Navbar";
import { Box, Container, Grid } from "@mui/material";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container columnSpacing={2} height="calc(100vh - 80px)">
          <Grid item xs={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={8}>
            <Box height="100%">{children}</Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
