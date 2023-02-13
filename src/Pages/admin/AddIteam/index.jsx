import React, { useContext } from "react";
import { Button, Navbar } from "../../../Component";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Box, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GlobalContext } from "../../../context/loginContext";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const AddItem = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [desp, setDesp] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [image, setImage] = React.useState(false);
  const [unitName, setUnitName] = React.useState("");
  const [itemName, setItemName] = React.useState("");
  let { state, dispatch } = useContext(GlobalContext);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("myFile", image);
    formData.append("desp", desp);
    formData.append("price", price);
    formData.append("itemName", itemName);
    formData.append("unitName", unitName);
    formData.append("category", category);

    try {
      let response = await axios.post(`${state.baseUrl}/product`, formData, {
        withCredentials: true,
      });
      console.log(response);
      toast("Product add successfuly", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (e) {
      console.log("e: ", e);
    }
    setCategory("");
    setDesp("");
    setCategory("");
    setPrice("");
    setItemName("");
    setImage(false);
    setUnitName("");
  };

  return (
    <div>
      <Navbar />
      <Box>
        <Box
          sx={{
            marginLeft: 4,
            marginTop: 1,
            height: "140vh",
            mt: 15,
          }}
        >
          <Typography
            variant="button"
            gutterBottom
            sx={{
              color: "secondary.main",
            }}
          >
            Add New Item
          </Typography>

          <form onSubmit={submitHandler}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 2,
                pl: 3,
                pr: 5,
                width: { lg: "300px", sm: "400px", xs: "410px" },
                backgroundColor: "gray",
                borderRadius: "15px",
              }}
            >
              {" "}
            </Box>

            {!image ? (
              <label htmlFor="select-image">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pl: 1,
                    pr: 1,
                    marginTop: 2,
                    width: { lg: "150px", sm: "150px", xs: "250px" },
                    backgroundColor: "gray",
                    borderRadius: "15px",
                  }}
                >
                  <CameraAltIcon sx={{ fontSize: "4em", m: 4 }} />
                  <input
                    type="file"
                    style={{
                      display: "none",
                    }}
                    id="select-image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Box>
              </label>
            ) : (
              <div className="zoom">
                <img
                  src={URL.createObjectURL(image)}
                  width="190px"
                  alt=""
                  srcset=""
                />
              </div>
            )}

            <TextField
              id="outlined-textarea"
              label="Item name"
              placeholder="Item name"
              sx={{
                height: 30,
                mt: 2,
              }}
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Box
              sx={{
                mt: 4,
              }}
            >
              <InputLabel id="demo-simple-select-autowidth-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={category}
                onChange={handleChange}
                label="Category"
                sx={{
                  width: 254,
                  height: 40,
                }}
              >
                <MenuItem value="grocery">grocery</MenuItem>
                <MenuItem value="vegetable">vegetable</MenuItem>
                <MenuItem value="fruite">fruit</MenuItem>
                <MenuItem value="meet">meet</MenuItem>
              </Select>
            </Box>

            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              value={desp}
              sx={{
                width: 254,
                mt: 2,
              }}
              onChange={(e) => setDesp(e.target.value)}
            />

            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 250,
              }}
            >
              <Typography
                variant="button"
                sx={{
                  color: "secondary.main",
                  mr: 2,
                }}
              >
                Unit Name:
              </Typography>
              <TextField
                id="outlined-textarea"
                label="Unit Name"
                placeholder="Unit Name"
                value={unitName}
                sx={{
                  width: 150,
                  height: 50,
                }}
                onChange={(e) => setUnitName(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 250,
              }}
            >
              <Typography
                variant="button"
                sx={{
                  color: "secondary.main",
                  mr: 2,
                }}
              >
                Unit Price:
              </Typography>
              <TextField
                id="outlined-textarea"
                label="unit price"
                placeholder="unit price"
                sx={{
                  width: 150,
                  height: 50,
                }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Box>

            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="submit">Add Product</Button>
            </Box>
          </form>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "red",
            height: 50,
            position: "fixed",
            left: 0,
            bottom: 0,
          }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              if (newValue === 0) {
                navigate("/");
              } else if (newValue === 1) {
                navigate("/admin/add-item");
              }
            }}
            sx={{
              background: "#fff",
              width: "100%",
            }}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="add-item" icon={<AddIcon />} />
            <BottomNavigationAction label="account" icon={<AccountBoxIcon />} />
          </BottomNavigation>
        </Box>
      </Box>
    
    </div>
  );
};

export default AddItem;
