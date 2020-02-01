import React from "react";
import {
  Datagrid,
  List,
  TextField,
  Filter,
  TextInput,
  DateField,
  DeleteButton,
  TopToolbar,
  RefreshButton,
  useAuthenticated
} from "react-admin";

const NewsList = props => {
  return (
    <List bulkActionButtons={false} {...props}>
      <Datagrid rowClick="edit">
        <DateField source="date" label="Data envio" />
        <TextField source="title" label="Titulo" />
        <TextField source="source" label="Origem" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default NewsList;
