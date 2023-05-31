import { ChangeEvent } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Pagination } from "../../redux/reducers/quotesReducer/actionReducer/getAllQuotes";

type Props = {
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
};

export default function PaginationRadioButtons({ onChange }: Props) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Type Pagination</FormLabel>
      <RadioGroup
        row
        onChange={onChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={Pagination.limit}
        name="radio-buttons-group"
      >
        <FormControlLabel
          value={Pagination.limit}
          control={<Radio />}
          label="Limit"
        />
        <FormControlLabel
          value={Pagination.page}
          control={<Radio />}
          label="Page"
        />
        <FormControlLabel
          value={Pagination.offset}
          control={<Radio />}
          label="Offset"
        />
      </RadioGroup>
    </FormControl>
  );
}
