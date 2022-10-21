import React from "react";
import { Box, Typography, Avatar, Stack, IconButton } from "@mui/material";
import { FavoriteBorderOutlined, MoreVertOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";

const CommentPost = ({ comments }) => {
  const users = JSON.parse(localStorage.getItem("userdata"));
  const members = useSelector((state) => state.user.allUser);
  const com = comments.map((item) =>
    item.likes.filter((ite) => ite === users?.result?._id)
  );

  //   console.log(com);
  return (
    <>
      <Box mt="40px">
        {comments.length > 0
          ? comments.map((item) => (
              <>
                <Stack direction="row" spacing={2} key={item._id} mt={2} mb={2}>
                  {members.map((mem) =>
                    mem._id === item.userid ? (
                      <Stack direction="row" spacing={2} key={mem._id}>
                        {!mem.profilePic ? (
                          <Avatar sx={{ color: "black" }}>
                            {mem.name.charAt(0)}
                          </Avatar>
                        ) : (
                          <Avatar sx={{ background: "#f57c00" }}>
                            <img
                              src={mem.profilePic}
                              alt="pic"
                              height={50}
                              width={80}
                            />
                          </Avatar>
                        )}
                        <Stack spacing={1}>
                          <Stack direction="row" justifyContent="space-around">
                            <Stack>
                              <Typography color="chocolate">
                                {mem.email}
                              </Typography>
                              <Typography color="white">
                                {item.comment}
                              </Typography>
                            </Stack>
                            <IconButton>
                              <MoreVertOutlined sx={{ color: "white" }} />
                            </IconButton>
                          </Stack>

                          <Stack direction="row" spacing={4}>
                            <Stack direction="row">
                              <IconButton>
                                <FavoriteBorderOutlined color="error" />
                              </IconButton>
                              <Typography color="white" mt="10px">
                                {item.likes.length}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Stack>
                    ) : (
                      ""
                    )
                  )}
                </Stack>
              </>
            ))
          : ""}
      </Box>
    </>
  );
};

export default CommentPost;
