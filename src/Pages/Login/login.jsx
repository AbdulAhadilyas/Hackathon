import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/loginContext";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton } from "@mui/material";
import { CustomInput } from "../../Component";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Button as CustomButton } from "../../Component";
import { height } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";


export default function Login() {
  const navigate = useNavigate();
  let { state, dispatch } = useContext(GlobalContext);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "myadmin@gmail.com",
      password: "123123123",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        let response = await axios.post(
          `${state.baseUrl}/login`,
          {
            email: values.email,
            password: values.password,
          },
          {
            withCredentials: true,
          }
        );
        dispatch({
          type: "USER_LOGIN",
        });
        dispatch({
          type: "USER",
          payload: response.data.profile,
        });
        toast("Login successfuly", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/");
      } catch (e) {
        console.log("e: ", e);
      }
    },
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: 8,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "primary.main",
              fontWeight: "Bold",
            }}
          >
            SAYLANI WELFARE
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "secondary.main",
              lineHeight: 0,
            }}
          >
            ONLINE DISCOUNT STORE
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#f2fff",
            width: "100%",
            height: "70vh",
          }}
        >
          <form onSubmit={loginFormik.handleSubmit}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CustomInput
                icon={<AccountCircleIcon />}
                sx={{
                  width: 220,
                }}
                label="Email"
                value={loginFormik.values.email}
                onChange={loginFormik.handleChange}
                error={
                  loginFormik.touched.email && Boolean(loginFormik.errors.email)
                }
                helperText={
                  loginFormik.touched.email && loginFormik.errors.email
                }
                id="email"
                name="email"
              />

              <CustomInput
                icon={<Visibility />}
                sx={{
                  width: 220,
                }}
                label="Password"
                type={"password"}
                value={loginFormik.values.password}
                id="password"
                name="password"
                onChange={loginFormik.handleChange}
                error={
                  loginFormik.touched.password &&
                  Boolean(loginFormik.errors.password)
                }
                helperText={
                  loginFormik.touched.password && loginFormik.errors.password
                }
              />

             
              <Box>
                <Button
                  variant="text"
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  Forgot Password?
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20vh",
                flexDirection: "column",
              }}
            >
              <CustomButton
                style={{
                  width: 235,
                  marginBottom: 1,
                }}
                type="submit"
              >
                Sign In
              </CustomButton>
              <Button
                variant="text"
                sx={{
                  color: "secondary.main",
                  fontSize: ".7rem",
                }}
                onClick={() => navigate("/sing-up")}
              >
                Don’t have an account? Register
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
