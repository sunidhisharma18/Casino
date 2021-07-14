import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  headers: {
    background: "#282c34",
    color: "white",
    height: "100px",
  },
  nav: {
    paddingTop: "20px",
  },
  avtar: {
    paddingRight: "80px",
    float: "right",
  },
  logo: {
    float: "left",
    paddingLeft: "80px",
    width: theme.spacing(25),
    height: theme.spacing(12),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  balance:{
    fontWeight:"bold",
    color:"	#FFD700",
    float:"right",
    padding:"20px"
  }
}));

function Header() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [balance, setBalance] = useState("$9.99");

  const [values, setValues] = useState({
    email: "",
    password: "",
    login:false
  });


  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const loginHandler = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = () => {
    localStorage.setItem("Email", values.email);
    setValues({
      login:true
    })

    localStorage.setItem("Balance", balance);
    alert(`Values Stored in Local Storage.`);
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.headers} color="transparent">
        <div className={classes.nav}>
          <img src="/images/logo.png" alt="logo" className={classes.logo} />
          {values.login?( 
            <>          
            <div className={classes.avtar}>
            <Avatar
              alt="avtar"
              src="/images/Sunidhi_formal.jpeg"
              className={classes.large}
            />
          </div> 
          <Button className={classes.balance}  size="large">Balance : {localStorage.getItem('balance')}</Button>
          
          </>
          ):(
           <>
           
          <Button onClick={loginHandler} size="large" className={classes.balance}> Login </Button>
          <Button className={classes.balance}  size="large">Balance : {balance}</Button>
           </>
          )
           
          }
        </div>
      </AppBar>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login to Play and Win</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter your email and password to checkout your balance.</DialogContentText>
                    <TextField
                        className={classes.root}
                        autoFocus
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={inputEvent}
                        variant="standard"
                        margin="dense"
                        label="Email Address"
                        fullWidth
                    />
                    <TextField
                        className={classes.root}
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={inputEvent}
                        variant="standard"
                        margin="dense"
                        label="Password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        <ClearIcon/>
                    </Button>
                    <Button onClick={submitHandler} color="primary">
                        <LockOpenIcon/>
                    </Button>
                </DialogActions>
            </Dialog>
    </>
  );
}

export default Header;
