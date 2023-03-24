import { Alert, AlertProps, Button, toaster } from "@parte/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Alerts/Toaster",
  component: Alert,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<AlertProps> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Button
        variant="primary"
        onClick={() =>
          toaster.notify({
            title: "헤벌레",
            status: "warning",
            description:
              "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
          })
        }
      >
        넋이 나가있는 벌레는
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          toaster.notify({
            title: "미식가세요?ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅇㅋㅋㅋㅎㅋㅋㅋㅋ",
            status: "error",
          })
        }
      >
        속이 좀 미식거려보이시네요
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          toaster.notify({
            title: "수정과",
            status: "info",
            description: "이게 잣인감?ㅋㅋㅋㅋㅋㅋㅋㅋ엌ㅋㅋㅋㅋㅋㅋ",
          })
        }
      >
        자신감없을때 먹는 차는
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          toaster.notify({
            title: "g.o.d",
            status: "success",
            description:
              "지오디? ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ엌 ㅋㅋㅋㅋㅋㅋ엌ㅋㅋㅋㅋ",
          })
        }
      >
        쥐가 어디있지, 쥐가 어디갔지
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
