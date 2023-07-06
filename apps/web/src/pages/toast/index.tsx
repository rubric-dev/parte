import { Box, Button, toaster } from "@parte-ds/ui";

const Toast = () => {
  return (
    <Box padding={30}>
      <Button
        onClick={() =>
          toaster.notify({
            status: "info",
            title: "title",
            children: "description",
          })
        }
      >
        토스트 실행
      </Button>
    </Box>
  );
};
export default Toast;
