import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/type";
import {
  Pagination as TPagination,
  getAllQuotes,
} from "../../redux/reducers/quotesReducer/actionReducer/getAllQuotes";
import PaginationRadioButtons from "./PaginationRadioButton";
import Pagination from "./Pagination";

export const QuoteList = () => {
  const quotes = useSelector((state: RootState) => state.quotes);
  const dispatch = useDispatch<AppDispatch>();

  const [typePagination, setTypePagination] = useState<TPagination>(
    TPagination.limit
  );

  console.log({ typePagination });
  console.log(quotes);

  const handleTypePagination = (value: ChangeEvent<HTMLInputElement>) => {
    setTypePagination(value.target.value as TPagination);
  };

  console.log({ typePagination });

  useEffect(() => {
    dispatch(getAllQuotes(typePagination));
  }, [dispatch, typePagination]);

  return (
    <div>
      <h3>QuoteList</h3>
      <Pagination count={quotes.total} />
      <PaginationRadioButtons onChange={handleTypePagination} />
      <div></div>
    </div>
  );
};
