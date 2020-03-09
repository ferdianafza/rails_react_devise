import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form  autoComplete="off">
      <p><TextField type="text" id="standard-basic" placeholder="Title" name="title" label="Title Book" required/></p>
      <p><TextField type="text" id="standard-basic" name="author" label="Author" required /></p>
      <p><TextField type="text" id="standard-basic" name="price" label="Price" required /></p>
      <p><TextField type="text" id="standard-basic" name="total" label="Total" required /></p>
      <button type="submit" className="btn custom-button mt-3">
       Create Book
      </button>
    </form>
  );
}