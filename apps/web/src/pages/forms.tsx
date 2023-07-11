import { Box, Textarea } from "@parte-ds/ui";

const Forms = () => {
  return (
    <Box display="flex" flexDirection="column" gap={16} width={300}>
      <Textarea placeholder="Placeholder" resizable width={300} />
    </Box>
  );
};
export default Forms;
