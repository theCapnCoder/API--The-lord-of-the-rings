import { FC, useState, ChangeEvent } from "react";
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
  const [value, setValue] = useState(Pagination.limit);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as Pagination);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Type Pagination</FormLabel>
      <RadioGroup
        row
        // onChange={handleChange}
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

// import * as React from 'react';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';

// export enum Pagination {
//   limit = 'limit',
//   page = 'page',
//   offset = 'offset'
// }

// export default function RadioButtonsGroup() {
//   const [value, setValue] = React.useState(Pagination.limit);

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <FormControl component="fieldset">
//       <FormLabel component="legend">Pagination</FormLabel>
//       <RadioGroup aria-label="pagination" name="pagination" value={value} onChange={handleChange}>
//         <FormControlLabel value={Pagination.limit} control={<Radio />} label="Limit" />
//         <FormControlLabel value={Pagination.page} control={<Radio />} label="Page" />
//         <FormControlLabel value={Pagination.offset} control={<Radio />} label="Offset" />
//       </RadioGroup>
//     </FormControl>
//   );
// }
