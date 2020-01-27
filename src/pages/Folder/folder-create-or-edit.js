import React, { useState, useEffect } from "react";
import {
  Create,
  TextInput,
  SimpleForm,
  Toolbar,
  SaveButton,
  Edit,
  useAuthenticated
} from "react-admin";

import FilesService from "../../services/file.service";
import TransferList from "../../components/TransferList/TransferList";

const CustomToolbar = props => {
  return (
    <Toolbar {...props}>
      <SaveButton redirect={"list"} />
    </Toolbar>
  );
};

const FolderCreateOrEdit = props => {
  useAuthenticated();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getFiles();
  }, []);

  const CreateOrEdit = props => {
    if (props.id) return <Edit title="Editar Pasta" {...props} />;
    return <Create title="Criar Pasta" {...props} />;
  };

  const getFiles = async () => {
    try {
      const response = await FilesService.getFiles();
      setFiles(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <CreateOrEdit title="Usuário" {...props}>
      <SimpleForm toolbar={<CustomToolbar {...props} />}>
        <TextInput source="name" label="Nome" />
        <TextInput source="url_name" label="Url" />
        <TextInput source="table_info.url_title" label="Url Header" />
        <TextInput source="table_info.name_title" label="Nome Header" />
        <TextInput source="table_info.date_title" label="Data Header" />

        <TransferList
          source="files"
          items={files}
          itemsSelected="allowed_franchises"
          labelRight="Arquivos Selecionados"
          labelLeft="Todos Arquivos"
        />
      </SimpleForm>
    </CreateOrEdit>
  );
};

export default FolderCreateOrEdit;
