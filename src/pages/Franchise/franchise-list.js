import React from "react";
import {
  Datagrid,
  List,
  TextField,
  EditButton,
  Filter,
  TextInput,
  CardActions,
  CreateButton,
  RefreshButton
} from "react-admin";

const FranchiseFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Buscar" source="email" alwaysOn />
  </Filter>
);

const CustomActions = () => <CardActions>
                          <CreateButton />
                          <RefreshButton />
                      </CardActions>

const FranchiseList = props => {
  return (
    <List bulkActionButtons={false} {...props} filters={<FranchiseFilter />} actions={<CustomActions />} >
      <Datagrid rowClick="show">
        <TextField source="entity_id" label="ID" />
        <TextField source="email" label="Email" />
        <TextField source="data.nome" label="nome" />
        <EditButton />
      </Datagrid>

    </List>
  );
};

export default FranchiseList;
