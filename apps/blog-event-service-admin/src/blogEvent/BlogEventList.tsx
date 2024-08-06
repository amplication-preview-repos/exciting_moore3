import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BlogEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BlogEvents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="EventType" source="eventType" />
        <TextField label="ID" source="id" />
        <TextField label="Payload" source="payload" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
