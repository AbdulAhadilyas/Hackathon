import { Box } from "@mui/material";
import React, { useEffect, useContext } from "react";
import { List, Navbar } from "../../../Component";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AddItem from "../AddIteam";
import ItemList from "../itemList";
import axios from "axios";
import { GlobalContext } from "../../../context/loginContext";

function Home() {
  const [value, setValue] = React.useState(0);
  const [produtcs, setProdutcs] = React.useState([]);

  let { state, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${state.baseUrl}/products`, {
        withCredentials: true,
      });
      setProdutcs(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          marginTop: 2,
          paddingLeft: 3,
          mt:15
        }}
      >
        <Box>
          <Typography
            variant="button"
            gutterBottom
            sx={{
              color: "secondary.main",
            }}
          >
            All Products
          </Typography>
        </Box>
        <Box sx={{
          height:"100vh"
        }}>
          {produtcs.map((eachProduct , i) => (
            <List key={i}
              name={eachProduct.name}
              price={eachProduct.price}
              url={eachProduct.url}
              unit={eachProduct.unit}
            />
          ))}
        </Box>
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
            setValue(newValue);
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
    </div>
  );
}

export default Home;
