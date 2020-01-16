import React, { useState, useEffect } from "react";
import {
  Create,
  TextInput,
  SimpleForm,
  Toolbar,
  SaveButton,
  Edit
} from "react-admin";
import Grid from "@material-ui/core/Grid";

import Upload from "../../components/Upload/Upload";
import DateInput from "../../components/DateInput/DateInput";
import { getUrl } from "../../services/file.service";
import TransferList from "../../components/TransferList/TransferList";
import UserService from "../../services/users-service";

const CustomToolbar = props => {
  return (
    <Toolbar {...props}>
      <SaveButton redirect={"list"} />
    </Toolbar>
  );
};

const FileCreateOrEdit = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const CreateOrEdit = props => {
    if (props.id) return <Edit title="Editar Arquivo" {...props} />;
    return <Create title="Criar Arquivo" {...props} />;
  };

  const getUsers = async () => {
    try {
      const response = await UserService.getUsers();
      setUsers(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <CreateOrEdit title="Usuário" {...props}>
      <SimpleForm
        toolbar={<CustomToolbar {...props} />}
        initialValues={{ date: new Date() }}
      >
        <Grid container spacing={3}>
          <Upload source="file_id" sourceName={"file_name"} getUrl={getUrl} />
          <TextInput source="file_name" label="Nome do Arquivo" />
          <TextInput source="name" label="Description" />
          <DateInput source="date" label="Data" />
          <TransferList
            source="allowed_franchises"
            items={users}
            itemsSelected="allowed_franchises"
            defa
          />
        </Grid>
      </SimpleForm>
    </CreateOrEdit>
  );
};

export default FileCreateOrEdit;
