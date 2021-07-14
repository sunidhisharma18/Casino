import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
      color: "#a0522d",
    },
  });
function Cards() {

    const classes = useStyles();
       
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container spacing={10}>
            <Grid item xs={4}>
              <div hidden={false} style={{ textAlign: "center" }}>
                ❤️
                <hr style={{ width: "50%" }} /> ♠️
                <hr style={{ width: "50%" }} /> ♦️{" "}
                <hr style={{ width: "50%" }} /> ♣️
              </div>
            </Grid>
            <Grid item xs={4}>
              <div hidden={false} style={{ textAlign: "center" }}>
                ❤️
                <hr style={{ width: "50%" }} /> ♠️
                <hr style={{ width: "50%" }} /> ♦️{" "}
                <hr style={{ width: "50%" }} /> ♣️
              </div>
            </Grid>
            <Grid item xs={4}>
              <div hidden={false} style={{ textAlign: "center" }}>
                ❤️
                <hr style={{ width: "50%" }} /> ♠️
                <hr style={{ width: "50%" }} /> ♦️{" "}
                <hr style={{ width: "50%" }} /> ♣️
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
