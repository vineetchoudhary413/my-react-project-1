import React, { useState } from "react";
import {
  Button,
  TextInput,
  Card,
  Title,
  Stack,
  Text,
} from "@mantine/core";

function MantineDemo() {
  const [name, setName] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card shadow="md" padding="lg" radius="md" withBorder>
        <Stack>
          <Title order={2}>Mantine Demo</Title>

          <TextInput
            label="Your Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button onClick={() => alert(`Hello ${name}`)}>
            Say Hello
          </Button>

          <Text>You typed: {name}</Text>
        </Stack>
      </Card>
    </div>
  );
}

export default MantineDemo;