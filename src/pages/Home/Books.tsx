import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/type";
import { Book } from "../../redux/reducers/booksReducer/booksSlice";
import { getAllBooks } from "../../redux/reducers/booksReducer/actionCreators/getAllBooks";

export const Books = () => {
  const books = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch<AppDispatch>();
  console.log(books)

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div>
      <h1>Books</h1>
      {books.books.map((book: Book) => (
        <div key={book._id}>
          <h2>{book._id}</h2>
          <h3>{book.name}</h3>
        </div>
      ))}
    </div>
  );
};
