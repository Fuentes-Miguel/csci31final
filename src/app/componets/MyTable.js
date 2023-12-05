import { Table } from "@radix-ui/themes";

const defaultColumns = [
  {
    title: "Title",
    key: "title",
  },
  {
    title: "subtitle",
    key: "subtitle",
  },
  {
    title: "Image",
    key: "image",
  },
  {
    title: "Description",
    key: "description",
  },
];
const defaultRecords = [
  {
    title: "test",
    subtitle: "test",
    image: "test",
    description: "test",
  },
];

export default function MyTable({
  column = defaultColumns,
  records = defaultRecords,
}) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {column.map((column) => (
            <Table.ColumnHeaderCell>{column.title}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {records.map((record) => (
          <Table.Row>
            {column.map((column) => record[column.key])}
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell>danilo@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
