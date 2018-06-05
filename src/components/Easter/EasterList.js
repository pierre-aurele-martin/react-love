import React from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemIcon,
  Checkbox
} from '@material-ui/core';

import Emoji from '../Emoji/Emoji';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    bottom: '115px',
    right: '50px'
  },
  listText: {
    color: 'white'
  }
});

const easterlist = props => {
  const { classes, visible, easters } = props;

  const easterContent = {
    bep: {
      name: 'Travis Scott',
      emoji: <Emoji emoji="🎧" label="easter egg description" />
    },
    zola: {
      name: 'Emile Zola',
      emoji: <Emoji emoji="🧐" label="easter egg description" />
    },
    link: {
      name: 'Find Zelda',
      emoji: <Emoji emoji="🧝‍" label="easter egg description" />
    },
    home: {
      name: 'Find my home',
      emoji: <Emoji emoji="🏠" label="easter egg description" />
    },
    love: {
      name: 'Make it beat',
      emoji: <Emoji emoji="💓" label="easter egg description" />
    }
  };

  let showTweet = true;
  for (var easter in easters) {
    if (!easters[easter]) showTweet = false;
  }

  return (
    <div
      className={classes.root}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <List>
        {Object.keys(easterContent).map(key => {
          return (
            <ListItem key={key} dense button className={classes.listItem}>
              <ListItemIcon>{easterContent[key].emoji}</ListItemIcon>
              <ListItemText
                inset
                disableTypography
                primary={easterContent[key].name}
                className={classes.listText}
              />
              <ListItemSecondaryAction>
                <Checkbox checked={easters[key]} style={{ color: 'white' }} />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
        {showTweet ? (
          <iframe
            src="https://platform.twitter.com/widgets/tweet_button.html?size=l&url=https://react-love.now.sh/&via=PierreAurele&related=twitterapi%2Ctwitter&text=I've found all the Easter Eggs ! Will you ?"
            width="140"
            height="28"
            title="Twitter Tweet Button"
            style={{ border: 0, overflow: 'hidden' }}
            dnt="true"
          />
        ) : (
          ''
        )}
      </List>
    </div>
  );
};

easterlist.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(easterlist);
