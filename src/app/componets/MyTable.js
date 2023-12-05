import { Table } from "@radix-ui/themes";

const defaultColumns = [
  {
    title: "Title",
    key: "title",
  },
  {
    title: "Subtitle",
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
  columns = defaultColumns,
  records = defaultRecords,
}) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell key={column.key}>
              {column.title}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {records.map((record, index) => (
          <Table.Row key={index}>
            {columns.map((column) => record[column.key])}
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell key={columns.key}>danilo@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
