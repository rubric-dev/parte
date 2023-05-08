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
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <HeaderCell
        width={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      </HeaderCell>
    ),
    cell: ({ row }) => {
      return (
        <Cell
          display="flex"
          alignItems="center"
          width={50}
          justifyContent="center"
        >
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Cell>
      );
    },
  }),
  columnHelper.accessor("name", {
    header: () => <HeaderCell width={150}>Name</HeaderCell>,
    cell: (info) => {
      const { type, name } = info.row.original;

      return (
        <Cell display="flex" alignItems="center" gap={8} width={150}>
          <Avatar avatarColor={getBadgeColorByType(type)} name={name} />
          <Headline size={300}>{name}</Headline>
        </Cell>
      );
    },
  }),
  columnHelper.accessor("type", {
    header: ({ column }) => {
      return (
        <HeaderCell width={100}>
          <FilterHeader column={column} />
        </HeaderCell>
      );
    },
    cell: (info) => {
      const type = info.getValue();
      return (
        <Cell width={100}>
          <Badge
            badgeColor={getBadgeColorByType(type)}
            text={info.getValue()}
          />
        </Cell>
      );
    },
  }),
  columnHelper.accessor("position", {
    header: () => <HeaderCell flex="1">Position</HeaderCell>,
    cell: (info) => <Cell flex="1">{info.getValue()}</Cell>,
  }),
  columnHelper.accessor("bio", {
    header: () => <HeaderCell flex="1">Bio</HeaderCell>,
    cell: (info) => {
      const link = info.getValue();
      return (
        <Cell flex="1">
          <Link href={`https://${link}`} target="_blank" size={300}>
            {link}
          </Link>
        </Cell>
      );
    },
  }),
  columnHelper.display({
    id: "icon",
    header: () => (
      <HeaderCell width={60} display="flex" justifyContent="center">
        Icon
      </HeaderCell>
    ),
    cell: (info) => {
      const { name } = info.row.original;
      const onClick = () => {
        toaster.notify({
          title: "채팅",
          status: "info",
          description: `${name}와 채팅하기`,
        });
      };
      return (
        <Cell width={60} display="flex" justifyContent="center">
          <IconButton
            variant="ghost-secondary"
            onClick={onClick}
            size={32}
            Icon={<ActionChatIcon size={16} />}
          />
        </Cell>
      );
    },
  }),
  columnHelper.accessor("active", {
    header: () => <HeaderCell width={50}>Active</HeaderCell>,
    cell: (info) => {
      const [on, setOn] = useState(!!info.getValue());
      return (
        <Cell width={50}>
          <Toggle on={on} onChange={() => setOn((prev) => !prev)} />
        </Cell>
      );
    },
  }),
  columnHelper.display({
    id: "menu",
    header: () => <HeaderCell width={50} />,
    cell: () => {
      return (
        <Cell width={50}>
          <Dropdown usePortal>
            <Dropdown.Trigger>
              <IconButton
                variant="ghost-secondary"
                size={32}
                Icon={<InterfaceMoreIcon size={12} />}
              />
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Menu>
                <Menu.Group title="Action">
                  <Menu.Row>채팅</Menu.Row>
                  <Menu.Row>새로고침</Menu.Row>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group title="Delete">
                  <Menu.Row>삭제</Menu.Row>
                </Menu.Group>
              </Menu>
            </Dropdown.Menu>
          </Dropdown>
        </Cell>
      );
    },
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
