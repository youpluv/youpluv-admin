import React from "react";
import {
  Datagrid,
  List,
  TextField,
  Filter,
  TextInput,
  DateField,
  TopToolbar,
  RefreshButton,
  useAuthenticated
} from "react-admin";

<<<<<<< HEAD:src/pages/Contato/contato-list.js
const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source="email" alwaysOn />
  </Filter>
);

const CustomActions = () => (
  <TopToolbar>
    <RefreshButton />
  </TopToolbar>
);

const UserList = props => {
  useAuthenticated();
=======
const NewsList = props => {
>>>>>>> s3-upload:src/pages/News/news-list.js
  return (
    <List bulkActionButtons={false} {...props}>
      <Datagrid>
        <DateField source="date" label="Data envio" />
        <TextField source="title" label="Titulo" />
        <TextField source="source" label="Origem" />
      </Datagrid>
    </List>
  );
};

export default NewsList;
