import React from "react";
import {
  Datagrid,
  List,
  TextField,
  ShowButton,
  Filter,
  TextInput,
  TopToolbar,
  CreateButton,
  useAuthenticated
} from "react-admin";

const UserFilter = props => {
  return (
    <Filter {...props}>
      <TextInput label="Buscar" source="email" alwaysOn />
    </Filter>
  );
};

const CustomActions = ({ basePath }) => {
  return (
    <TopToolbar>
      <CreateButton basePath={basePath} />
    </TopToolbar>
  );
};

const UserList = props => {
  return (
    <>
      <List bulkActionButtons={false} {...props}>
        <Datagrid>
          <TextField source="username" label="Nome" />
          <TextField source="email" label="Email" />
          <TextField source="phone_number" label="Telefone" />
          <ShowButton />
        </Datagrid>
      </List>
    </>
  );
};

export default UserList;
