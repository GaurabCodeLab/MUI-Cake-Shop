import {
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

const cakes = [
  {
    name: "Chocolate",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
  },
  {
    name: "Red Velvet",
    image:
      "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80",
  },
  {
    name: "Rose",
    image:
      "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Butter Scotch",
    image:
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80",
  },
  {
    name: "Strawberry",
    image:
      "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80",
  },
  {
    name: "Mix fruit",
    image:
      "https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const Cakes = () => {
  return (
    <Container>
      <Typography variant="h3">Cakes:-</Typography>
      <Grid container>
        {cakes.map((value, index) => (
          <Grid item sx={{ mt: "2rem" }} xs={12} md={6} lg={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={value.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cakes;
