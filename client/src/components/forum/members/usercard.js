import React from "react";
import Paper from "@mui/material/Paper";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
// import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { MoreVert } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { fontFamily } from "@mui/system";

import { object } from "prop-types";

const UserCard = (props) => {
  console.log(props);

  return (
    <Paper
      sx={{
        padding: "10px",
        marginTop: 3,
        color: "white",
        backgroundColor: "black",
        border: "1px solid rgba(240, 248, 255, 0.715)",
      }}
      style={props.pstyle}
    >
      <Box sx={{ float: "right" }}>
        <a href="www.google.com" target="blank">
          <MoreVert className="option" />
        </a>
      </Box>
      <Box id="user--card" style={props.styles}>
        <img src={props.image} alt="userimage" className="user-image" />

        <Typography
          variant="subtitle"
          component="h2"
          sx={{ textAlign: "center", marginRight: "10px" }}
        >
          {props.name}
        </Typography>

        <Typography variant="body" component="h4" sx={{ textAlign: "center" }}>
          {props.role.toUpperCase()}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginX: 3,
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <Typography sx={{ textAlign: "center" }}>
                {props.noOfFollowers.length}
              </Typography>
            </Box>
            <Box>
              <Typography marginX={1}>Followers</Typography>
            </Box>
          </Box>
          <Box borderLeft={1} borderColor="white">
            <Box>
              <Typography sx={{ textAlign: "center" }}>
                {props.noOfFollowing.length}
              </Typography>
            </Box>
            <Box>
              <Typography marginX={1}>Following</Typography>
            </Box>
          </Box>
        </Box>
        <Box paddingX={3} padding={1} sx={{ display: "flex", gap: "5px" }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#ec5218",
              width: "30px",
              borderRadius: "0px",
              width: "100%",
              color: "black",
              fontSize: "large",
              fontWeight: "400",
            }}
            onClick={() => props.handleClick(props.id)}
          >
            {props.followstatus ? "Unfollow" : "Follow"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserCard;
