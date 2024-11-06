import { Text } from "@mantine/core";

const Error = ({ error }) => {
  if (error === null || error === undefined) {
    return (
      <Text size="xl" component="span">
        An error occurred. Please try again later.
      </Text>
    );
  }

  const response = error.response;
  const status = response.status;
  const message = response.data?.msg;

  return (
    <Text size="xl" component="span">
      An error has occurred with status {status}: {message}
    </Text>
  );
};

export default Error;
