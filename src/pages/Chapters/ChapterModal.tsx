import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import instance from "../../api/instance";
import { useParams } from "react-router";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Chapter = {
  _id: string;
  chapterName: string;
  book: string;
};

type Props = {
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

export default function ChapterModal({
  openModal,
  handleClose,
  handleOpen,
}: Props) {
  const [chapters, setChapters] = React.useState<Chapter[]>([]);
  const [pending, setPending] = React.useState(false);
  const { pageNumber, id } = useParams();

  React.useEffect(() => {
    if (id) {
      setPending(true);
      instance.get(`/chapter/${id}`).then((res) => {
        setChapters(res.data.docs);
        setPending(false);
      });
    }
    console.log("hello");
  }, [id]);

  console.log("enter===", chapters);

  return (
    <>
      <>
        <Button onClick={handleOpen} variant="outlined" size="small">
          One specific book chapter
        </Button>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {pending ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ width: "100px" }}>ID</TableCell>
                      <TableCell>chapterName</TableCell>
                      <TableCell>book ID</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {chapters.map((chapter) => (
                      <TableRow
                        key={chapter._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {chapter._id}
                        </TableCell>
                        <TableCell>{chapter.chapterName}</TableCell>
                        <TableCell>{chapter.book}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Modal>
      </>
    </>
  );
}
