import { AlertInfoIcon } from "@parte-ds/icons";
import { Alert, Box } from "@parte-ds/ui";

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
    </Box>
  );
};
export default AlertTest;
