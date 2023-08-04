import { Box, Steps, Step } from "@parte-ds/ui";

const StepTest = () => {
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Steps
        stepList={[
          { id: 1, label: "Step 1" },
          { id: 2, label: "Step 2" },
          { id: 3, label: "Step 3" },
          { id: 4, label: "Step 4" },
          { id: 5, label: "Step 5" },
        ]}
        currentStep={2}
      />
      <Step currentStep={1} stepIndex={1} />
    </Box>
  );
};
export default StepTest;
