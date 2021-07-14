
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./style.css"

const useStyles = makeStyles({
  root: {
    width: "100%",
    background:"#282c34"
  },
});

export default function Footer() {
  const classes = useStyles();
 

  return (
    <>
    
    <BottomNavigation className={classes.root}>
     <center><b style={{fontWeight:"bold", color:"#fff" }}>Copyright © 2021 | Casino</b></center>
    </BottomNavigation>
    </>
  );
}
