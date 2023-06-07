import React, { useState, useEffect } from "react";
import { Center, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import logo from "../../logo.jpeg";
import useStyles from "./loginCss";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <div className={classes.center}>
        {showImage && (
          <div>
            <img
              className={classes.circle}
              src={logo}
              height={600}
              alt="Logo"
            />
          </div>
        )}
      </div>
      {!showImage && (
        <div className={classes.centerStyle}>
          <Container size={420} my={40}>
            <Title
              align="center"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 900,
              })}
            >
              Welcome back!
            </Title>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <TextInput label="UserName" placeholder="User Name" required />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
              />
              <Group position="apart" mt="lg">
                <Checkbox label="Remember me" />
                <Anchor component="button" size="sm">
                  Forgot password?
                </Anchor>
              </Group>
              <Link to="/project">
                <Button fullWidth mt="xl">
                  Sign in
                </Button>
              </Link>
            </Paper>
          </Container>
        </div>
      )}
    </div>
  );
}
