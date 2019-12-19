import React from "react";
import {
  Datagrid,
  List,
  TextField,
  EditButton,
  DeleteButton,
  CardActions,
  // CreateButton,
} from "react-admin";

const CustomActions = ({ basePath }) => {
  return(
    <CardActions>
      {/* <CreateButton basePath={basePath} /> */}
    </CardActions>
  )
};


const FileList = props => {
  return (
    <>
      <List
        bulkActionButtons={false}
        actions={<CustomActions />}
        {...props}
      >
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
