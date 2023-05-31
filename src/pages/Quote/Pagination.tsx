import { useState } from "react";
import { Pagination as MUIPagination } from "@mui/material";
import Stack from "@mui/material/Stack";

type Props = {
  count: number;
}

export default function Pagination({ count }: Props) {

  return (
    <Stack spacing={2}>
      <MUIPagination count={count} color="secondary" />
    </Stack>
  );
}
