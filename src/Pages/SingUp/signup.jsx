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
import FrameSvg from "../../assets/Frame.svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  let { state, dispatch } = useContext(GlobalContext);
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    name: yup
      .string("Enter your name")
      .min(3, "name should be of minimum 3 characters length")
      .required("name is required"),
    contact: yup
      .number("Enter your contact number")
      .min(11, "number should be of minimum 11 characters length")
      .required("contact is required"),
  });

  const singUpFormik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
      name: "",
      contact: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        let response = await axios.post(`${state.baseUrl}/signup`, {
          fullName: values.name,
          contact: values.contact,
          email: values.email,
          password: values.password,    
        });

        console.log("signup successful", response);
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
        <form onSubmit={singUpFormik.handleSubmit}>
          <Box
            sx={{
              background: "#f2fff",
              width: "100%",
              height: "70vh",
            }}
          >
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
                label="Full Name"
                value={singUpFormik.values.name}
                onChange={singUpFormik.handleChange}
                error={
                  singUpFormik.touched.name && Boolean(singUpFormik.errors.name)
                }
                helperText={
                  singUpFormik.touched.name && singUpFormik.errors.name
                }
                id="name"
                name="name"
              />
              <CustomInput
                icon={<img src={FrameSvg} alt="" />}
                sx={{
                  width: 220,
                }}
                label="Contact"
                value={singUpFormik.values.contact}
                onChange={singUpFormik.handleChange}
                error={
                  singUpFormik.touched.contact &&
                  Boolean(singUpFormik.errors.contact)
                }
                helperText={
                  singUpFormik.touched.contact && singUpFormik.errors.contact
                }
                id="contact"
                name="contact"
              />{" "}
              <CustomInput
                icon={<MailOutlineIcon />}
                sx={{
                  width: 220,
                }}
                label="Email"
                value={singUpFormik.values.email}
                onChange={singUpFormik.handleChange}
                error={
                  singUpFormik.touched.email &&
                  Boolean(singUpFormik.errors.email)
                }
                helperText={
                  singUpFormik.touched.email && singUpFormik.errors.email
                }
                id="email"
                name="email"
              />
              <CustomInput
                icon={<VisibilityOff />}
                sx={{
                  width: 220,
                }}
                label="Password"
                id="password"
                name="password"
                onChange={singUpFormik.handleChange}
                error={
                  singUpFormik.touched.password &&
                  Boolean(singUpFormik.errors.password)
                }
                helperText={
                  singUpFormik.touched.password && singUpFormik.errors.password
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
                Sign Up
              </CustomButton>
              <Button
                variant="text"
                sx={{
                  color: "secondary.main",
                  fontSize: ".7rem",
                }}
                onClick={() => navigate("/login")}
              >
                Already have an account? Login
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}
