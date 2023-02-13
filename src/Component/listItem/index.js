import { Box, Typography } from "@mui/material";
import React from "react";

function ProductBox({ name, url, price, unit }) {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "primary.main",
        width: "90%",
        padding: 1,
        borderRadius: 2,
        marginTop: 2,
        marginBottom: 5,
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
          <img src={url} alt="" width={80} />
          <Box
            sx={{
              padding: 0.5,
            }}
          >
            <Typography
              variant="button"
              gutterBottom
              sx={{
                color: "primary.main",
              }}
            >
              {name}
            </Typography>
            <Box>
              <Typography
                variant="button"
                gutterBottom
                sx={{
                  color: "grey",
                }}
              >
                {unit}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="button" gutterBottom>
            {price}pkr
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductBox;
