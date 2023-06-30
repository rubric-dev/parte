import { Box, Headline, RangeSlider } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const RangeSliderStory: Meta = {
  title: "Components/RangeSlider",
  component: RangeSlider,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};
export default RangeSliderStory;

type Story = StoryObj<typeof RangeSlider>;

const RangeSliderExamples = () => {
  const [number, setNumber] = useState([67]);
  const [percentage, setPercentage] = useState([0.5]);
  const [counts, setCounts] = useState([500]);

  const [range, setRange] = useState([50, 150]);

  return (
    <>
      <Headline size={900}>Range Slider</Headline>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="260px"
      >
        <Box width="100%" height={70} paddingTop={8} paddingBottom={8}>
          <RangeSlider
            label="기본 예시"
            min={0}
            max={120}
            values={number}
            onChange={setNumber}
            stepSize={2}
          />
        </Box>
        <Box width="100%" height={70} paddingTop={8} paddingBottom={8}>
          <RangeSlider
            label="첫 tick만 표시"
            ticks={[0]}
            min={0}
            max={120}
            values={[50]}
            stepSize={2}
          />
        </Box>
        <Box width="100%" height={70} paddingTop={8} paddingBottom={8}>
          <RangeSlider
            label="마지막 tick만 표시"
            ticks={[120]}
            min={0}
            max={120}
            values={[70]}
            stepSize={2}
          />
        </Box>
        <Box width="100%" height={70} paddingTop={8} paddingBottom={8}>
          <RangeSlider
            label="AP 판매율"
            min={0}
            max={1}
            values={percentage}
            onChange={setPercentage}
            stepSize={0.01}
            valueFormatter={(value) =>
              value.toLocaleString(undefined, { style: "percent" })
            }
          />
        </Box>
        <Box width="100%" height={70} paddingTop={8} paddingBottom={8}>
          <RangeSlider
            label="AP 판매수량"
            min={0}
            max={1000}
            values={counts}
            onChange={setCounts}
            stepSize={250}
            valueFormatter={(value) =>
              value === 1000 ? value + "+" : `${value}`
            }
          />
        </Box>
        <Box width="100%" height={70} paddingTop={8} paddingBottom={8}>
          <RangeSlider
            label="싱글 Disabled"
            min={0}
            max={100}
            values={[20]}
            stepSize={1}
            disabled
          />
        </Box>

        <Box width="100%" height={70} paddingTop={8} paddingBottom={8}>
          <RangeSlider
            label="Range 예시"
            min={0}
            max={200}
            values={range}
            onChange={setRange}
            stepSize={5}
          />
        </Box>
        <Box width="100%" height={70} paddingTop={8} paddingBottom={8}>
          <RangeSlider
            label="Range Disabled"
            min={0}
            max={200}
            values={[75, 125]}
            stepSize={5}
            disabled
          />
        </Box>
      </Box>
    </>
  );
};

export const Default: Story = {
  render: RangeSliderExamples,
};
