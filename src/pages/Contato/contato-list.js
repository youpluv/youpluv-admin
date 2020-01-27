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
import ContatoShow from "./contato-show";

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
  return (
    <List
      bulkActionButtons={false}
      {...props}
      filters={<UserFilter />}
      actions={<CustomActions />}
    >
      <Datagrid expand={<ContatoShow />}>
        <DateField source="data_envio" label="Data envio" />
        <TextField source="email" label="Email" />
        <TextField source="nome" label="Nome" />
        <TextField source="assunto" label="Assunto" />
      </Datagrid>
    </List>
  );
};

export default UserList;
