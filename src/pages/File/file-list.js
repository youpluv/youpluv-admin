import React from "react";
import {
  Datagrid,
  List,
  TextField,
  EditButton,
  DeleteButton,
  TopToolbar,
  CreateButton,
  FunctionField
} from "react-admin";
import "moment-timezone";
import Moment from "react-moment";
import "moment/locale/pt-br";

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
          <FunctionField
            render={file => <Moment format={"DD/MM/YYYY"}>{file.date}</Moment>}
            label="Data"
          />

          <EditButton />
          <DeleteButton />
        </Datagrid>
      </List>
    </>
  );
};

export default FileList;
