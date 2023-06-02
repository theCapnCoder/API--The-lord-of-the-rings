import { useState } from "react";
import {
  Button,
  Grid,
  Pagination as MUIPagination,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";

type Props = {
  count: number;
};

export default function Pagination({ count }: Props) {
  const [limit, setLimit] = useState(1);
  const limitVariant = [
    1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 100, 200, 300, 400, 500,
  ];

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        {limitVariant.map((variant, index) => (
          <Grid item key={index}>
            <Button
              variant="contained"
              onClick={() => setLimit(variant)}
              color="primary"
            >
              {variant}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3" sx={{ mb: 2 }}>
        You choose {limit}
      </Typography>

      <MUIPagination count={count} color="secondary" />
    </Stack>
  );
}
