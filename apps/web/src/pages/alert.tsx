import { AlertInfoIcon } from "@parte-ds/icons";
import { Alert, Box } from "@parte-ds/ui";
import { useTheme } from "styled-components";

const AlertTest = () => {
  const { colors } = useTheme();
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Alert type="alert-inline" status="info" message="하이하이" />
      <Alert type="alert-inline" status="G400" message="하이하이" />
      <Alert type="alert-inline" status="error" message="하이하이" />
      <Alert type="alert-inline" status="warning" message="하이하이" />
      <Alert type="alert" status="info" title="제목" description="하이하이" />
      <Alert type="alert" status="info" description="하이하이" />
      <Alert
        toastId={123}
        onClose={() => {}}
        type="toast"
        status="info"
        title="제목"
        description="하이하이"
      />
      <AlertInfoIcon color="N700" />
    </Box>
  );
};
export default AlertTest;
