import React, { useState } from "react";
import "./Userpostedit.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Userpostedit = () => {
  const PF = "http://localhost:8800/images/";

  const [post, setPost] = useState({});
  const [desc, setDesc] = useState("");
  const postId = useParams().postId;

  useEffect(() => {
    const editpost = async () => {
      const res = await axios.get(`/posts/editpost/${postId}`);
      setPost(res.data)
      setDesc(res.data.desc)
    };
    editpost();
  }, [postId]);

  const submitPost = async () =>{
 
    const res = await axios.patch("/posts/updatepost",{
        postId:post._id,
        desc})
        navigate("/")
  }

  const submitDelete = async() =>{

const res = await axios.delete(`/posts/${postId}`)
navigate("/")
  }
 

  const navigate = useNavigate();
  return (
    <div className="middleregwrapp">
      <div class="container register3">
        <div class="row">
          <div class="col-md-9 register-right1">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {/* <h3 class="register-heading">Register Here</h3> */}
                <div class="row register-form">
                  <div class="col-md-6">
                    <Card>
                    {post.img && (
                        <CardMedia
                          component="img"
                          height="15%"
                          image={PF + post?.img}
                          alt="Paella dish"
                        />
                      )}
                    <CardContent>
                      <TextField
                        style={{ marginBottom: 10 }}
                        sx={{ width: "100%" }}
                        id="desc"
                        value={desc}
                        name="comments"
                        rows={3}
                        onChange={(e) => setDesc(e.target.value)}
                        variant="standard"
                      />
                    </CardContent>
                    <CardActions
                      disableSpacing
                      sx={{ justifyContent: "center" }}
                    >
                      <Button
                        variant="contained"
                        sx={{ bgcolor: "green" }}
                          onClick={submitPost}
                      >
                        Update
                      </Button>

                      <Button
                        variant="contained"
                        sx={{ bgcolor: "red", marginLeft: "15px" }}
                          onClick={submitDelete}
                      >
                        Delete
                      </Button>
                    </CardActions>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userpostedit;
