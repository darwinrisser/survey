import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './Survey.css'


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: '5',
    label: '5',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '1',
    label: '1',
  },
];

class InputAdornments extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} id="everything">
        <TextField
          label="Your Name"
          id="simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">...</InputAdornment>,
          }}
        />

        <TextField
          select
          label="Rating, with 5 being the best"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
            
          ))}
        </TextField>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Overall, were you pleased with your experience with Quality People?</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start">...</InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">What could we have done better?</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start">...</InputAdornment>}
          />
        </FormControl>
        <Button variant="outlined" className={classes.button}>
          Submit
        </Button>
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);