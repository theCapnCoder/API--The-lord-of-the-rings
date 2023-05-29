import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/type";
import { getAllChapters } from "../../redux/reducers/chaptersReducer/actionReducer/getAllChapters";
import {
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getChunkOfTenElements } from "../../helpers/helper";

export const ChapterList = () => {
  const { chapters } = useSelector((state: RootState) => state.chapters);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams();

  const countPages = Math.ceil(chapters.length / 10);
  const chaptersSlice = getChunkOfTenElements(chapters, id);

  console.log(chaptersSlice);

  useEffect(() => {
    dispatch(getAllChapters());
  }, [dispatch]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "100px" }}>ID</TableCell>
              <TableCell>chapterName</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chaptersSlice.map((chapter) => (
              <TableRow
                key={chapter._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/books/${chapter._id}`}>{chapter._id}</Link>
                </TableCell>
                <TableCell>{chapter.chapterName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2}>
        <Pagination
          sx={{ display: "flex", justifyContent: "center", py: 3 }}
          count={countPages}
          onChange={(_, page) => navigate(`/Chapters/${page}`)}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </>
  );
};
