import React from "react";
import {
  Edit,
  TextInput,
  SimpleForm
} from "react-admin";
import CustomToolbar from "../../components/CustomToolbar/CustomToolbar";

const FolderEdit = props => {
  return (
    <Edit title="Usuário" {...props}>
      <SimpleForm toolbar={<CustomToolbar />} >
        <TextInput source="name" label="Nome" />
      </SimpleForm>
    </Edit>
  );
};

export default FolderEdit;
