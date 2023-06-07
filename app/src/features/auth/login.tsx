import React from "react";
import { Center } from "@mantine/core";
import { Link } from "react-router-dom";
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

const centerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export function AuthenticationTitle() {
  return (
    <div style={centerStyle}>
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
  );
}
