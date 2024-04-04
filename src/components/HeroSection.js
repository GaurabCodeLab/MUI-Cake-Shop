import { Grid, Typography, Button, Container } from "@mui/material";
import cake from "../images/cake.png";

const HeroSection = () => {
  return (
    <Container>
      <Grid container spacing={9}>
        <Grid item sx={{ marginTop: "6rem" }}>
          <Typography variant="h3">A bliss in evert byte</Typography>
          <Typography variant="h6" marginTop="0.6rem" marginBottom="0.6rem">
            we offer tasty cakes and sweets for you
          </Typography>
          <Button variant="contained">Call Us</Button>
        </Grid>
        <Grid item>
          <img src={cake} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
