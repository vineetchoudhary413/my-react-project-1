import { Button, PasswordInput, TextInput, Stack, Paper, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

function FormValidation() {
  const form = useForm({
    initialValues: {
      name: '',
      
      email: '',
      password: '',
    },

    validate: {
      name: (value) =>
        value.trim().length < 3 ? 'Name must have at least 3 letters' : null,

      email: (value) =>
        /^\\S+@\\S+$/.test(value) ? null : 'Invalid email',

      password: (value) =>
        value.length < 6 ? 'Password must be at least 6 characters' : null,
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    alert('Form submitted successfully!');
  };

  return (
    <Paper
      shadow="md"
      radius="lg"
      p="xl"
      maw={420}
      mx="auto"
      mt={60}
      withBorder
    >
      <Title order={2} ta="center" mb="lg">
        Create Account
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Full Name"
            placeholder="Enter your name"
            {...form.getInputProps('name')}
          />

          <TextInput
            label="Email"
            placeholder="Enter your email"
            {...form.getInputProps('email')}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            {...form.getInputProps('password')}
          />

          <Button type="submit" fullWidth mt="md">
            Sign Up
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default FormValidation;