import { Text } from "@mantine/core";

const Error = ({ error }) => {
  if (!error) {
    return <Text size="xl">💀Please try again later.💀</Text>;
  }

  const response = error.response;
  const status = response.status;
  const message = response.data?.msg;

  return (
    <Text size="xl">
      ❗An error has occurred with status {status}: {message}❗
    </Text>
  );
};
export default Error;
