import React, { useState, useEffect } from "react";
import { Center, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import companyName from "../../comanyName.jpg";
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
      <div className={classes.centerStyle}>
        <Container className="name">
          <Title align="center" sx={(theme) => ({})}>
            <div>
              <img
                style={{ width: "70%", height: "70%", marginBottom: "-30%" }}
                className="circle"
                src={companyName}
                height={100}
                alt="Company"
              />
            </div>
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
    </div>
  );
}
