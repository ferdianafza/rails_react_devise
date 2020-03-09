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
    const TableBooks = books.map((book, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
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
          No recipes yet. Why not <Link to="/new_recipe">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <div>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
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