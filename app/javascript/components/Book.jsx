import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { book: { ingredients: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ book: response }))
      .catch(() => this.props.history.push("/"));
  }

 addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

 deleteBook() {
     const {
       match: {
        params: { id }
       }
     } = this.props;
     const url = `/api/v1/destroy/${id}`;
     const token = document.querySelector('meta[name="csrf-token"]').content;

     fetch(url, {
       method: "DELETE",
       headers: {
         "X-CSRF-Token": token,
         "Content-Type": "application/json"
       }
     })
       .then(response => {
         if (response.ok) {
           return response.json();
         }
         throw new Error("Network response was not ok.");
       })
       .then(() => this.props.history.push("/"))
       .catch(error => console.log(error.message));
  }

render() {
    const { book } = this.state;
    let ingredientList = "No ingredients available";

    // if (recipe.ingredients.length > 0) {
    //   ingredientList = recipe.ingredients
    //     .split(",")
    //     .map((ingredient, index) => (
    //       <li key={index} className="list-group-item">
    //         {ingredient}
    //       </li>
    //     ));
    // }
    // const recipeInstruction = this.addHtmlEntities(recipe.instruction);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {book.title}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deleteBook}>
                Delete Book
              </button>
              <h1>{book.author}</h1>
            </div>
          </div>
          <Link to="/" className="btn btn-link">
            Back
          </Link>
        </div>
         <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </div>
    );
  }
}

export default Book;