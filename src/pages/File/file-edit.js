import React from "react";
import {
  Edit,
  TextInput,
  SimpleForm
} from "react-admin";
import CustomToolbar from "../../components/CustomToolbar/CustomToolbar";

const FileEdit = props => {
  return (
    <Edit title="Usuário" {...props}>
      <SimpleForm toolbar={<CustomToolbar />} >
        <TextInput source="name" label="Nome" />
        <TextInput source="file_name" label="Nome do arquivo" />
      </SimpleForm>
    </Edit>
  );
};

export default FileEdit;
