import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#128c7e',
  },
  tabList:{
    '& button':{
        marginRight: '5px'
    }
  }
}));

export default function HeaderTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          className = {classes.tabList}
        >
          <Tab icon={<CameraAltIcon/>}/>
          <Tab label="Chats" />
          <Tab label="Status" />
          <Tab label="Calls"/>
        </Tabs>
    </div>
  );
}
