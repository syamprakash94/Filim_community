import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Avatar from "@mui/material/Avatar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import { red } from "@mui/material/colors";
import DateRangeIcon from "@mui/icons-material/DateRange";
import React from "react";
import "./Add.css";

import { Box } from "@mui/system";
import { Button, ButtonGroup, Stack } from "@mui/material";

const Add = () => {
  return (
    <>
      <Card sx={{ maxWidth: 610, margin: 5 }}>
        <Box display={"flex"}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
          />
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
        </Box>
        <Stack direction="row" gap={1} className="emoji">
          <EmojiEmotionsIcon color="warning" />
          <ImageIcon color="secondary" />
          <VideoCameraBackIcon color="success" />
          <PersonAddIcon color="error" />

          <ButtonGroup variant="contained" aria-label="outlined  button group">
            <Button>Post</Button>
            <Button>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Stack>

        {/* <hr className="line"></hr> */}
      </Card>
    </>
  );
};

export default Add;
