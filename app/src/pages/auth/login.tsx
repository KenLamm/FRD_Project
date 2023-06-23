import React, { useState, useEffect } from "react";
import { Center, Image } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import companyName from "../../companyName.jpg";
import useStyles from "./loginCss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "./authAPI";

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

// const centerStyle: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
// };

export function AuthenticationTitle() {
  const [showImage, setShowImage] = useState(true);
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const inputUserName = (value: string) => {
    setUserName(value);
    setPassword(value);
  };

  // const isLoggedIn = localStorage.getItem("id");
  // if (isLoggedIn) {
  //   navigate("/project");
  // } else {
  // const handleSignIn = async () => {
  //   let result = await login(username, password);
  //   console.log(result);
  // };

  // const submitButton = () => {
  //   handleSignIn();
  // };
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowImage(false);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("id");
    if (isLoggedIn) {
      navigate("/project");
    } else {
      const timer = setTimeout(() => {
        setShowImage(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [navigate]);

  return (
    <>
      <div className={classes.centerStyle}>
        <Container className="name">
          <Title align="center" sx={(theme) => ({})}>
            <div>
              <img
                style={{
                  width: "70%",
                  height: "70%",
                  marginBottom: "-30%",
                  borderRadius: "80%",
                }}
                className="circle"
                src={companyName}
                height={100}
                alt="Company"
              />
            </div>
          </Title>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                let result = await login({ username, password });
                // on return true, navigate to home page
                // useNavigate()
                if (result) {
                  navigate("/project");
                } else {
                  alert("Invalid username or password");
                }
              }}
            >
              <TextInput
                label="username"
                onChange={(e) => setUserName(e.currentTarget.value)}
                value={username}
                placeholder="User Name"
                required
              />
              <PasswordInput
                label="Password"
                onChange={(e) => setPassword(e.currentTarget.value)}
                value={password}
                placeholder="Your password"
                required
                mt="md"
              />

              <Button type="submit" fullWidth mt="xl">
                Sign in
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </>
  );
}
