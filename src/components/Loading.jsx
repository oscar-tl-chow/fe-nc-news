import { LoadingOverlay } from "@mantine/core";

const Loading = () => {
  return (
    <LoadingOverlay
      visible
      zIndex={1000}
      overlayProps={{ radius: "sm", blur: 2 }}
    />
  );
};

export default Loading;
