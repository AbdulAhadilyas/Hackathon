import { Box, Typography } from "@mui/material";
import React from "react";
import DemoImg from "../../assets/image 18.png";

function ProductBox() {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "primary.main",
        width: "90%",
        padding:1,
        borderRadius:2,
        marginTop:2,
        marginBottom:5
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
     
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={DemoImg} alt="" width={100} />
          <Box sx={{
padding:0.5
          }}>
            <Typography
              variant="button"
              gutterBottom
              sx={{
                color: "primary.main",
              }}
            >
              Apple
            </Typography>
            <Box>
              <Typography
                variant="button"
                gutterBottom
                sx={{
                  color: "grey",
                }}
              >
                1.kg
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="button" gutterBottom>
            pkr 500
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductBox;
