import React, { Fragment } from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyle from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// MAIN CODE
const App = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone! this is a photo album and I am trying to make this
              sentence as long as possible so that we can see what is going on
              in the screen.
            </Typography>

            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid className={classes.marginBtn}>
                  <Button variant="contained" color="primary">
                    See my Photos
                  </Button>
                </Grid>
                <Grid className={classes.marginBtn}>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item key={cards} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer  className={classes.footer}>
<Typography variant="h6" align='center' gutterBottom>
Footer
</Typography>
<Typography variant="subtitle1" align='center' color="textSecondary">
Something here to give the footer a purpose.
</Typography>
      </footer>
    </Fragment>
  );
};

export default App;
