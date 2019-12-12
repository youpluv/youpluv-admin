import React, { useState } from "react";
import {
  Datagrid,
  List,
  TextField,
  EditButton,
  DeleteButton,
  Filter,
  TextInput,
  CardActions,
  CreateButton,
  // RefreshButton
} from "react-admin";

// import { API } from "aws-amplify";

// import config from "../../config/constants";
// import Upload from "../../components/upload/Upload";

const FranchiseFilter = props => {

  return(
    <Filter {...props}>
      <TextInput label="Buscar" source="email" alwaysOn />
    </Filter>
  )
};

const CustomActions = ({ basePath }) => {

  return(
    <CardActions>
      <CreateButton basePath={basePath} />
    </CardActions>
  )
};

const FranchiseList = props => {
  // const [state, setState] = useState({});
  // const [file, setFile] = useState({});

  // async function getUrl() {
  //   const response = await API.get(
  //     config.APIS.BOLAOABBR_ADMIN,
  //     "intranet/upload"
  //   );
  //   console.log("response :: ", response);
  //   setState({ ...response.fields, url: response.url });
  // }

  // function fileUpload(form) {
  //   let formData = new FormData();
  //   formData.append("key", form.key);
  //   formData.append("AWSAccessKeyId", form.AWSAccessKeyId);
  //   formData.append("policy", form.policy);
  //   formData.append("signature", form.signature);
  //   formData.append("x-amz-security-token", form["x-amz-security-token"]);
  //   formData.append("file", file);
  //   const config = {
  //     method: "POST",
  //     body: formData,
  //     enctype: "multipart/form-data"
  //   };
  //   console.log(formData)
  //   fetch(form.url, config)
  // }

  // function handleChangeFile(e) {
  //   setFile(e.target.files[0]);
  // }

  return (
    <>
      {/* <input type="file" name="file" onChange={handleChangeFile} />
      <button onClick={() => getUrl()}>GetLink</button>
      <button onClick={() => fileUpload(state)}>Upload</button> */}

      {/* <Upload form={state} /> */}
      <List
        bulkActionButtons={false}
        {...props}
        filters={<FranchiseFilter />}
        actions={<CustomActions />}
      >
        <Datagrid>
          <TextField source="name" label="Nome" />
          <TextField source="email" label="Email" />
          <TextField source="phone_number" label="Telefone" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </List>
    </>
  );
};

export default FranchiseList;
