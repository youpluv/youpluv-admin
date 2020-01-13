import React from "react";
import {
  Datagrid,
  List,
  TextField,
  EditButton,
  DeleteButton,
  TopToolbar,
  CreateButton
} from "react-admin";

const CustomActions = ({ basePath }) => {
  return (
    <TopToolbar>
      <CreateButton basePath={basePath} />
    </TopToolbar>
  );
};

const FileList = props => {
  return (
    <>
      <List bulkActionButtons={false} actions={<CustomActions />} {...props}>
        <Datagrid>
          <TextField source="name" label="Nome" />
          <TextField source="file_name" label="File" />
          <TextField source="date" label="Data" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </List>
    </>
  );
};

export default FileList;
