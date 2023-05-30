import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/type";
import {
  Pagination,
  getAllQuotes,
} from "../../redux/reducers/quotesReducer/actionReducer/getAllQuotes";
import PaginationRadioButtons from "./PaginationRadioButton";

export const QuoteList = () => {
  const quotes = useSelector((state: RootState) => state.quotes);
  const dispatch = useDispatch<AppDispatch>();

  const [typePagination, setTypePagination] = useState<Pagination>(Pagination.limit);

  console.log({ typePagination });
  console.log(quotes);

  const handleTypePagination = (value: ChangeEvent<HTMLInputElement>) => {
    setTypePagination(value.target.value as Pagination);
  };

  console.log({ typePagination });

  // const enumValue: Pagination = stringValue as Pagination;
  // console.log(enumValue); // Output: "offset"

  useEffect(() => {

    dispatch(getAllQuotes(typePagination));
  }, [dispatch, typePagination]);

  return (
    <div>
      <h3>QuoteList</h3>
      <PaginationRadioButtons onChange={handleTypePagination} />
      <div></div>
    </div>
  );
};
