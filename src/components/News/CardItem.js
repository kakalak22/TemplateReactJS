import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import images from '../../images';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 192,
    width: '100%',
    height: '100%',
    maxHeight: 293,
    padding: 12,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  content: {
    padding: 0,
  },
}));

export default function CardItem() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className={classes.root}>
      {/*
     <CardHeader
       avatar={
         <Avatar aria-label="recipe" className={classes.avatar}>
           R
         </Avatar>
       }
       action={
         <IconButton aria-label="settings">
           <MoreVertIcon />
         </IconButton>
       }
       title="Shrimp and Chorizo Paella"
       subheader="September 14, 2016"
     />
    */}
      <CardMedia className={classes.media} image={images.bds} title="Paella dish" />
      <CardContent className={classes.content}>
        <Typography variant="body1" color="textPrimary" component="p">
          This impressive
        </Typography>
        <Typography variant="body2" color="error" component="p">
          5.000.000d
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          10 phut truoc
        </Typography>
      </CardContent>
    </Card>
  );
}
