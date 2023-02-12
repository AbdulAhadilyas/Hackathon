import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import AdminAvatar from "../../assets/Ellipse 4.png";
import ListIcon from "../../assets/list_alt_FILL0_wght400_GRAD0_opsz48 1.svg";
import BackIcon from "../../assets/Vector.svg";
import Typography from "@mui/material/Typography";

const Navbar = ({ name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 3,
        alignItems: "center",
        borderBottom: 2,
        borderColor: "#D3D3D3",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={BackIcon} alt="" width={12} />
        <Avatar
          alt="Remy Sharp"
          src={AdminAvatar}
          sx={{ width: 50, height: 50, marginRight: 1, marginLeft: 1 }}
        />
        <Box>
          <Box>
            <Typography
              variant=""
              gutterBottom
              sx={{
                color: "primary.main",
              }}
            >
              Mr. Ahmed
            </Typography>
          </Box>
          <Box>
            <Typography
              variant=""
              gutterBottom
              sx={{
                color: "secondary.main",
              }}
            >
              Admin
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <img src={ListIcon} alt="" width={33} />
      </Box>
    </Box>
  );
};

export default Navbar;
