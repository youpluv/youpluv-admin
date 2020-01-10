import React from "react";
import {
  Datagrid,
  List,
  TextField,
  ShowButton,
  Filter,
  TextInput,
  CardActions,
  CreateButton
} from "react-admin";

const FranchiseFilter = props => {
  return (
    <Filter {...props}>
      <TextInput label="Buscar" source="email" alwaysOn />
    </Filter>
  );
};

const CustomActions = ({ basePath }) => {
  return (
    <CardActions>
      <CreateButton basePath={basePath} />
    </CardActions>
  );
};

const FranchiseList = props => {
  return (
    <>
      <List
        bulkActionButtons={false}
        {...props}
        filters={<FranchiseFilter />}
        actions={<CustomActions />}
      >
        <Datagrid>
          <TextField source="name" label="Nome" />
          <TextField source="email" label="Email" />
          <TextField source="phone_number" label="Telefone" />
          <ShowButton />
        </Datagrid>
      </List>
    </>
  );
};

export default FranchiseList;
