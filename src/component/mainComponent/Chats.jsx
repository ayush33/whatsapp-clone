import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

const messages = [
  {
    id: 1,
    from: 'Ayush Jain',
    secondary: "I'll be in the neighbourhood this week.",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    from: 'Ayush Jain',
    secondary: "I'll be in the neighbourhood this week.",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 3,
    from: 'Ayush Jain',
    secondary: "I'll be in the neighbourhood this week.",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 4,
    from: 'Ayush Jain',
    secondary: "I'll be in the neighbourhood this week.",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 3,
    from: 'Ayush Jain',
    secondary: "I'll be in the neighbourhood this week.",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 5,
    from: 'Ayush Jain',
    secondary: "I'll be in the neighbourhood this week.",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 6,
    from: 'Ayush Jain',
    secondary: "I'll be in the neighbourhood this week.",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    from: 'Ayush Jain',
    secondary: "I'll be in the neighbourhood this week.",
    person: '/static/images/avatar/5.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  list: {
    marginBottom: theme.spacing(1),
  },
  messageStyle: {
    borderBottom: '1px solid #D3D3D3',
    "& p":{
        marginBottom: '10px'
    }
  },
}));

export default function Chats() {
    const classes = useStyles();
  return (
    <div>
        <List className={classes.list}>
          {messages.map(({ id, from, secondary, person }) => (
            <React.Fragment key={id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText className={classes.messageStyle} primary={from} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
    </div>
  );
}
