import { useEffect, useState } from "react";
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
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getChunkOfTenElements } from "../../helpers/helper";
import ChapterModal from "./ChapterModal";

export const ChapterList = () => {
  const { chapters } = useSelector((state: RootState) => state.chapters);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const { pageNumber, id } = useParams();
  console.log(pageNumber, id);

  const countPages = Math.ceil(chapters.length / 10);
  const chaptersSlice = getChunkOfTenElements(chapters, pageNumber);

  const modalData = {
    openModal,
    handleOpen(){
      setOpenModal((prev) => !prev);
    },
    handleClose(){
      setOpenModal((prev) => !prev);
    },
  }

  useEffect(() => {
    dispatch(getAllChapters());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h3" sx={{ mb: 2 }}>
        List of all book chapters
      </Typography>
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
                onClick= {() => modalData.handleOpen()}
                key={chapter._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/chapters/${pageNumber ?? 1}/${chapter._id}`}>
                    {chapter._id}
                  </Link>
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

      <ChapterModal {...modalData} />
    </>
  );
};
