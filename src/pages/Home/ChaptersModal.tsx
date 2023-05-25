import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import instance from "../../api/instance";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '80vw',
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  overflow: "scroll",
  boxShadow: 24,
  p: 4,
};

type Chapter = {
  _id: string;
  chapterName: string;
};

type Props = {
  id: string;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

export default function ChaptersModal({
  id,
  openModal,
  handleClose,
  handleOpen,
}: Props) {
  const [chapters, setChapters] = React.useState<Chapter[]>([]);

  React.useEffect(() => {
    instance.get(`/book/${id}/chapter`).then((res) => setChapters(res.data.docs));
  }, [id]);

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" size="small">
        Chapters
      </Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "100px" }}>ID</TableCell>
                  <TableCell>Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chapters.map((chapter) => (
                  <TableRow
                    key={chapter._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {chapter._id}
                    </TableCell>
                    <TableCell>{chapter.chapterName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </>
  );
}
