import { Pagination, PaginationProps } from "@parte-dev/ui";
import { Story, Meta } from "@storybook/react";
import { useCallback, useState } from "react";

export default {
  title: "Components/Controls/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<PaginationProps> = ({
  page: initialPage,
  totalPages,
}) => {
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

export const Default = Template.bind({});
Default.args = {
  page: 4,
  totalPages: 10,
};

export const Under7Page = Template.bind({});
Under7Page.args = {
  page: 3,
  totalPages: 6,
};
