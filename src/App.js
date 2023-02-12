import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GlobalContext } from "./context/loginContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { GetStartScreen, Login, SingUp, AdminHome, AddItem } from "./Pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
function App() {
  let { state, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontWeightBold: 300,
      fontWeightMedium: 600,
      fontWeightBold: 800,
    },
    palette: {
      primary: {
        main: "#61B846",
      },
      secondary: {
        main: "#024F9D",
      },
    },
  });

  // useEffect(() => {
  //   const getProfile = async () => {
  //     try {
  //       let response = await axios.get(`${state.baseUrl}/products`, {
  //         withCredentials: true
  //       })

  //       console.log("response: ", response);

  //       dispatch({
  //         type: 'USER_LOGIN'
  //       })
  //     } catch (error) {

  //       console.log("axios error: ", error);

  //       dispatch({
  //         type: 'USER_LOGOUT'
  //       })
  //     }

  //   }
  //   getProfile();

  // }, [])

  // const logoutHandler = async () => {

  //   try {
  //     let response = await axios.post(`${state.baseUrl}/logout`, {
  //       withCredentials: true
  //     })
  //     console.log("response: ", response);

  //     dispatch({
  //       type: 'USER_LOGOUT'
  //     })
  //   } catch (error) {
  //     console.log("axios error: ", error);
  //   }

  // }
  console.log(state.user.role);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<GetStartScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/add-item" element={<AddItem />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
