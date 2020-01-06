import React from "react";
import {
  Datagrid,
  List,
  TextField,
  EditButton,
  DeleteButton,
  CardActions,
  CreateButton,
} from "react-admin";

const CustomActions = ({ basePath }) => {
  return(
    <CardActions>
      <CreateButton basePath={basePath} />
    </CardActions>
  )
};

const FolderList = props => {
  return (
    <>
      <List
        bulkActionButtons={false}
        actions={<CustomActions />}
        {...props}
      >
        <Datagrid>
          <TextField source="name" label="Nome" />
          <TextField />
          <TextField />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </List>
    </>
  );
};

export default FolderList;
