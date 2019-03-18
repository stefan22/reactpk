import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  card: {
    minWidth: 325,
    marginTop: 25,
    background:'#110e52',
    border:'1px solid black',
  },
  button: {
    margin: theme.spacing.unit,
    color:'deepskyblue',
    cursor: 'pointer',
  },
  cankey: {
    fontSize: 12,
    marginRight: 10,
    float: 'left',
    height: 20,
    color:'#d5d5d5',
  },
  canval: {
    textAlign: 'right',
    width: 300,
    lineHeight:1.35,
    padding: '4px 0 0 0',
    color:'#2196F3',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class UserItem extends Component {

  render() {
    const {classes} = this.props;
    const {id,name,email,phone,website,
      street,city,business,catchPhrase} = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.canval} variant="h5" component="p">
          <span className={classes.cankey}>Id:</span>{id}
          </Typography>

          <Typography className={classes.canval} variant="h6" component="p">
          <span className={classes.cankey}>Name:</span>{name}
          </Typography>

          <Typography className={classes.canval} variant="h6" component="p">
          <span className={classes.cankey}>Street:</span>{street}
          </Typography>

          <Typography className={classes.canval}  variant="h6" component="p">
          <span className={classes.cankey}>Phone:</span> {phone}
          </Typography>

          <Typography className={classes.canval}  variant="h6" component="p">
          <span className={classes.cankey}>Email:</span> {email}
          </Typography>

          <Typography className={classes.canval}  variant="h6" component="p">
          <span className={classes.cankey}>Website:</span> {website}
          </Typography>

          <Typography className={classes.canval}  variant="h6" component="p">
          <span className={classes.cankey}>City:</span> {city}
          </Typography>

          <Typography className={classes.canval}  variant="h6" component="p">
          <span className={classes.cankey}>Business:</span> {business}
          </Typography>

          <Typography className={classes.canval}  variant="h6" component="p">
          <span className={classes.cankey}>CatchPhrase:</span>{catchPhrase}
          </Typography>

        </CardContent>
        <CardActions>
          <Button variant='outlined' color='primary' className={classes.button} size="small">Contact Applicant</Button>
        </CardActions>
      </Card>
    )
  }

};


export default withStyles(styles)(UserItem);
