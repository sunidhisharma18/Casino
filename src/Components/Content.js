import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Tabless from "./Tabless";
import SLots from "./SLots";
import Fake from "./Fake";
import "./style.css"

const useStyles = makeStyles({
  button: {
    color: "#a0522d",
    padding: "20px",
  },
});

const Content = () => {
  const [showIcons, setShowIcons] = useState(true);
  const [showPlay, setShowPlay] = useState(true);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  // const [value, setValue] = useState(2);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const buttonhandler = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowIcons(true);
  };

  const iconsDisplay = () => {
    setShowIcons(false);
    setShowPlay(true);
  };
  const play = () => {
    setShowPlay(false);
    setShowIcons(true);
  };

  return (
    <>
    <br/>
    <br/>
      <Tabless />
      <br />
      <Button
        color="default"
        className={classes.button}
        onClick={buttonhandler}
        variant="outlined"
        color="secondary"
      >
        Start Game
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="form-dialog-title">Game Time !!</DialogTitle>
        <DialogContent>
          {/* <Card className={classes.root} variant="outlined">
            <CardContent>
              <SLots />
            </CardContent>
            <CardActions>
              <Button color="primary" size="medium" >
                Cards Available
              </Button>
              <Button color="primary" size="medium" onClick={Fakes}>
                Fake
              </Button>
              <Button color="primary" size="medium" onClick={handleClose}>
                Discard
              </Button>
            </CardActions>
          </Card> */}
          <Card className={classes.root} variant="outlined">
          <div>
            <CardContent hidden={showPlay} style={{ textAlign: "center" }}>
              <SLots />
            </CardContent>
            </div>
            <div>
            <CardContent hidden={showIcons} style={{ textAlign: "center" }}>
              <Fake/>
            </CardContent>
            </div>
            <CardActions>
              <Button color="primary" size="medium" onClick={play} >
                Play
              </Button>
              <Button color="primary" size="medium" onClick={iconsDisplay}>
                Fake
              </Button>
              <Button color="primary" size="medium" onClick={handleClose}>
                Discard
              </Button>
            </CardActions>
          </Card>
          
            {/* <div hidden={showIcons} style={{ textAlign: "center" }}>
              ❤️
              <hr style={{ width: "50%" }} /> ♠️
              <hr style={{ width: "50%" }} /> ♦️ <hr style={{ width: "50%" }} />{" "}
              ♣️
            </div> */}
{/*          
          <Grid item xs={4}>
            <div hidden={showIcons} style={{ textAlign: "center" }}>
              ❤️
              <hr style={{ width: "50%" }} /> ♠️
              <hr style={{ width: "50%" }} /> ♦️ <hr style={{ width: "50%" }} />{" "}
              ♣️
            </div>
          </Grid>
          <Grid item xs={4}>
            <div hidden={showIcons} style={{ textAlign: "center" }}>
              ❤️
              <hr style={{ width: "50%" }} /> ♠️
              <hr style={{ width: "50%" }} /> ♦️ <hr style={{ width: "50%" }} />{" "}
              ♣️
            </div>
          </Grid> */}
          {/* <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Play" key="1">
              <SLots/>
            </Tab>
            <Tab label="Disabled" key="2"  >
              <Fake/>
            </Tab>
            <Tab label="Active" key="3" />
          </Tabs> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Content;
