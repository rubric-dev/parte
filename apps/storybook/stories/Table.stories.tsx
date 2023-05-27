import { Meta, Story } from "@storybook/react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import styled from "styled-components";
import { ActionChatIcon, InterfaceMoreIcon } from "@parte-ds/icons";
import {
  Avatar,
  Badge,
  Cell,
  Checkbox,
  Dropdown,
  FilterHeader,
  HeaderCell,
  Headline,
  IconButton,
  Link,
  Menu,
  TableTemplate,
  toaster,
  Toggle,
} from "@parte-ds/ui";

type UserType = "user" | "manager" | "admin";
type User = {
  name: string;
  type: UserType;
  position: string;
  bio: string;
  active: boolean;
};

const MOCK_USERS: User[] = [
  {
    name: "Minho sun",
    type: "admin",
    position: "ERP PM",
    bio: "google.com",
    active: true,
  },
  {
    name: "Solmin seo",
    type: "manager",
    position: "HR Hero",
    bio: "github.com",
    active: false,
  },
  {
    name: "Dorothy",
    type: "user",
    position: "mukbang youtuber",
    bio: "naver.com",
    active: true,
  },
  {
    name: "June kim",
    type: "user",
    position: "Backend developer",
    bio: "mysql.com",
    active: false,
  },
  {
    name: "Changhee seo",
    type: "manager",
    position: "One manned design",
    bio: "figma.com",
    active: true,
  },
];
const generateUsers = (times: number) =>
  Array.from({ length: times })
    .map(() => MOCK_USERS)
    .flat();
const initialDatas = generateUsers(1);
const manyDatas = generateUsers(5);

export default {
  title: "Components/Table",
  component: TableTemplate,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const getBadgeColorByType = (type: UserType) => {
  switch (type) {
    case "admin":
      return "BLUE";
    case "manager":
      return "GREEN";
    case "user":
    default:
      return "ORANGE";
  }
};

const columnHelper = createColumnHelper<User>();

const defaultColumns = [
  columnHelper.group({
    id: "string",
    header: () => <HeaderCell>Name</HeaderCell>,
    columns: [
      {
        id: "select",
        header: ({ table }) => (
          <HeaderCell width={50}>
            <Checkbox
              checked={table.getIsAllRowsSelected()}
              indeterminate={table.getIsSomeRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </HeaderCell>
        ),
        cell: ({ row }) => {
          return (
            <Cell display="flex" alignItems="center" gap={8} width={50}>
              <Checkbox
                checked={row.getIsSelected()}
                disabled={!row.getCanSelect()}
                indeterminate={row.getIsSomeSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            </Cell>
          );
        },
      },
      {
        id: "test",
        header: () => <HeaderCell>first children</HeaderCell>,
        cell: (info) => {
          const { type, name } = info.row.original;
          return (
            <Cell display="flex" alignItems="center" gap={8}>
              <Avatar avatarColor={getBadgeColorByType(type)} name={name} />
              <Headline size={300}>{name}</Headline>
            </Cell>
          );
        },
      },
    ],
  }),
  columnHelper.group({
    id: "str2222ing",
    header: () => <HeaderCell flex="2">second Name</HeaderCell>,
    columns: [
      {
        id: "teswwwwt??",
        header: () => <HeaderCell flex="2">second children</HeaderCell>,
        cell: (info) => {
          const { type, name } = info.row.original;

          return (
            <Cell display="flex" alignItems="center" gap={8} flex="2">
              <Avatar avatarColor={getBadgeColorByType(type)} name={name} />
              <Headline size={300}>{name}</Headline>
            </Cell>
          );
        },
      },
    ],
  }),
] as ColumnDef<User>[];

const Template: Story<{ enableRowSelection?: boolean }> = ({
  enableRowSelection,
}) => {
  const [data] = useState(initialDatas);

  return (
    <TableTemplate
      data={data}
      columns={defaultColumns}
      enableRowSelection={enableRowSelection}
    />
  );
};

const RowSelectTemplate: Story = () => {
  const [data] = useState(initialDatas);
  const [selectedRowId, setSelectedRowId] = useState<number | string>();
  return (
    <TableTemplate
      data={data}
      columns={defaultColumns.slice(1)}
      selectable
      selectedRowId={selectedRowId}
      onSelect={(rowId) => setSelectedRowId(rowId)}
    />
  );
};

const ScrollContainer = styled.div`
  height: 600px;
`;

const ScrollTableTemplate: Story<{ sticky?: boolean }> = ({ sticky }) => {
  const [data] = useState(manyDatas);

  return (
    <ScrollContainer>
      <TableTemplate
        data={data}
        columns={defaultColumns}
        enableRowSelection
        sticky={sticky}
      />
    </ScrollContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  enableRowSelection: true,
};
export const RowSelect = RowSelectTemplate.bind({});

export const ScrollTable = ScrollTableTemplate.bind({});
ScrollTable.args = {
  sticky: true,
};
