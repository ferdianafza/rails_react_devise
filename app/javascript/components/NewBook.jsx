import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      price: "",
      total: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }




  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/books/create";
    const { title, author, price, total } = this.state;

    if (title.length == 0 || author.length == 0 || price.length == 0 || total.length == 0)
      return;

    const body = {
      title,
      author,
      price,
      total
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/`))
      .catch(error => console.log(error.message));
  }

 render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new book.
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                
                <TextField
                  type="text"
                  name="title"
                  id="recipeName"
                  className="form-control"
                  required
                  onChange={this.onChange}
                  label="Title Book"
                />
              </div>
              <div className="form-group">
                <TextField
                  type="text"
                  name="author"
                  id="recipeIngredients"
                  className="form-control"
                  required
                  onChange={this.onChange}
                  label="Author"
                />
              </div>
              <div className="form-group">
                <TextField
                  type="text"
                  className="form-control"
                  id="instruction"
                  name="price"
                  required
                  onChange={this.onChange}
                  label="price"
                />
              </div> 
              <div className="form-group">
                <TextField
                  type="text"
                  name="total"
                  id="recipeIngredients"
                  className="form-control"
                  required
                  onChange={this.onChange}
                  label="Total"
                />
              </div>  
                <input type="file" />
              <button type="submit" className="btn custom-button mt-3">
                Create Book
              </button>
              <Button type="submit" style={{marginTop: "10px"}} variant="contained" color="primary">
                Primary
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  } 
}

export default NewBook;