import React, { Component } from 'react';
import './Ratings.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Ratings extends Component {

  render() {
    return (

      <div className="RatingsDiv">
        <Grid container  direction="column"  justify="center"  alignItems="center">
          <Grid item md={8}>
            <Card className="Card">
              <CardActionArea>
                <CardMedia
                  className="Chef1"
                  title="Super Chef"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chef #1
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis semper ipsum. <br />
                    Suspendisse tristique vulputate dui, non venenatis nibh pretium ac. Curabitur condimentum lectus sed ex tempor, vitae mattis eros lobortis.
          </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={8} style={{marginTop: 10}}>
            <Card className="Card">
              <CardActionArea>
                <CardMedia
                  className="Chef2"
                  title="Super Chef"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chef #2
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis semper ipsum. <br />
                    Suspendisse tristique vulputate dui, non venenatis nibh pretium ac. Curabitur condimentum lectus sed ex tempor, vitae mattis eros lobortis.
          </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={8} style={{marginTop: 10}}>
            <Card className="Card">
              <CardActionArea>
                <CardMedia
                  className="Chef3"
                  title="Super Chef"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chef #3
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis semper ipsum. <br />
                    Suspendisse tristique vulputate dui, non venenatis nibh pretium ac. Curabitur condimentum lectus sed ex tempor, vitae mattis eros lobortis.
          </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Ratings;