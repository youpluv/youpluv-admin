import React from "react";
import {
  Create,
  TextInput,
  SimpleForm,
  Toolbar,
  SaveButton
} from "react-admin";
import Grid from "@material-ui/core/Grid";

import Upload from "../../components/Upload/Upload";

const CustomToolbar = props => {
  console.log("CUSTOM TOOLBAR :: ", props.fileId);
  return (
    <Toolbar {...props}>
      <SaveButton />
    </Toolbar>
  );
};

const FileCreate = props => {
  return (
    <>
      <Create title="Usuário" {...props}>
        <SimpleForm toolbar={<CustomToolbar {...props} />}>
          <Grid container spacing={3}>
            {/* <Grid item sm={12} xs={12}> */}
            <Upload />
            {/* </Grid> */}

            <TextInput source="name" label="Nome" />
            <TextInput source="file_name" label="Nome do arquivo" />
          </Grid>
        </SimpleForm>
      </Create>
    </>
  );
};

export default FileCreate;
