import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Title,
  Text,
  Stack,
  Group,
  Button,
  TextInput,
} from "@mantine/core";

function ProductivityDashboard() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  return (
    <Container size={600} py={40}>
      <Stack gap="lg">
        <Title order={1}>Productivity Dashboard</Title>

        <Text c="dimmed">
          Organize your day, complete tasks, and stay focused.
        </Text>

        <Card shadow="sm" radius="md" withBorder padding="lg">
          <Stack>
            <Title order={3}>Add a new task</Title>

            <TextInput
              placeholder="What do you want to do today?"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <Group justify="flex-end">
              <Button onClick={handleAddTask}>Add Task</Button>
            </Group>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}

export default ProductivityDashboard;