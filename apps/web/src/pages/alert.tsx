import { AlertInfoIcon } from "@parte-ds/icons";
import { Alert, Box, Button, toaster } from "@parte-ds/ui";

const AlertTest = () => {
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Alert type="inline" status="info" message="하이하이" />
      <Alert type="inline" status="success" message="하이하이" />
      <Alert type="inline" status="error" message="하이하이" />
      <Alert type="inline" status="warning" message="하이하이" />
      <Alert type="alert" status="info" title="제목">
        하이하이
      </Alert>
      <Alert type="alert" status="info">
        하이하이
      </Alert>
      <Alert type="toast" status="info" title="제목">
        하이하이
      </Alert>
      <AlertInfoIcon color="N700" />
      <Box display="flex" gap={8}>
        <Button
          type="button"
          onClick={() =>
            toaster.notify({
              status: "success",
              children:
                "성공 토스트 텍스트 길게길게 성공 토스트 텍스트 길게길게 성공 토스트 텍스트 길게길게 성공 토스트 텍스트 길게길게 ",
              duration: 1520512,
            })
          }
        >
          토스트 생성
        </Button>
        <Button
          type="button"
          onClick={() =>
            toaster.notify({
              status: "error",
              // children: "성공 토스트 텍스트 길게길게 ",
              duration: 1520512,
            })
          }
        >
          토스트 생성
        </Button>
        <Button
          type="button"
          onClick={() =>
            toaster.notify({
              status: "warning",
              // children: "성공 토스트 텍스트 길게길게 ",
              duration: 1520512,
            })
          }
        >
          토스트 생성
        </Button>
      </Box>
    </Box>
  );
};
export default AlertTest;
