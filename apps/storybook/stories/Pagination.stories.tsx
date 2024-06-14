import { Pagination, PaginationProps } from "@parte-ds/ui";
import { StoryObj, Meta } from "@storybook/react";
import { useCallback, useState } from "react";

export default {
  title: "Components/Controls/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Pagination>;

const Template = ({ page: initialPage, totalPages }: PaginationProps) => {
  const [page, setPage] = useState(initialPage);

  const onPageChange = useCallback((index: number) => {
    setPage(index);
  }, []);

  return (
    <Pagination
      page={page}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
};

export const Default: Story = {
  args: { page: 4, totalPages: 10 },
  render: Template,
};
export const Under7Page: Story = {
  args: { page: 3, totalPages: 6 },
  render: Template,
};
