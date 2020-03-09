import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
      const url = "/api/v1/books";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ books: response }))
        .catch(() => this.props.history.push("/"));
  }

  render() {
    const { books } = this.state;
    const allBooks = books.map((book, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            // src={recipe.image}
            className="card-img-top"
            // alt={`${recipe.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{book.title} {book.price}</h5>
            <Link to={`/book/${book.id}`} className="btn custom-button">
              View Book
            </Link>
          </div>
        </div>
      </div>
    ));
    const TableBooks = books.map((book, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
              <TableCell align="right">{book.title}</TableCell>
              <TableCell align="right">{book.author}</TableCell>
              <TableCell align="right">{book.price}</TableCell>
              <TableCell align="right">{book.total}</TableCell>
              <TableCell align="right">
                <Link to={`/book/${book.id}`} className="btn custom-button">
                  View Book
                </Link>
                <Link to={`/book/${book.id}/edit`} className="btn custom-button">
                  Edit Student
                </Link> 
              </TableCell>
            </TableRow>
        
    ));
    const noBook = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No books yet. Why not <Link to="/new_recipe">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Recipes for every occasion</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular recipes, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
            </div>
            <div className="row">
              {books.length > 0 ? allBooks : noBook}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>

        <div>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
              {TableBooks}
        </TableBody>
      </Table>
        </div>
      </>
    );
  }

}
export default Books;