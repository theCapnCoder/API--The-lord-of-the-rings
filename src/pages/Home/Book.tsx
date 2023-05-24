import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { Book as TBook } from "../../redux/reducers/booksReducer/booksSlice";

const _apiBaseUrl = "https://the-one-api.dev/v2";

export const Book = () => {
  const [book, setBook] = useState<TBook | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  console.log(id);

  useEffect(() => {
    fetch(`${_apiBaseUrl}/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data.docs[0]));
  }, [id]);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID: {book?._id}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 28, fontWeight: "bold" }} color="text.secondary">
          {book?.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={goBack} size="small">Back</Button>
      </CardActions>
    </Card>
  );
};
