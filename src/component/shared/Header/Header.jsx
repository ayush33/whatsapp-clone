import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import HeaderTabs from "./HeaderTab"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerStyle: {
      backgroundColor: '#128C7E'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 50,
    paddingBottom: theme.spacing(1),
  },
  title: {
   
  },
  actionButton: {
    position: 'absolute',
    right: 0,
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const {setValue, value} = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.headerStyle} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h5" noWrap>
              WhatsApp
          </Typography>
          <div className={classes.actionButton}>
            <IconButton aria-label="search" color="inherit">
                <SearchIcon />
            </IconButton>
            <IconButton aria-label="display more actions" color="inherit">
                <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        <HeaderTabs setValue={setValue} value={value}/>
      </AppBar>
    </div>
  );
}
