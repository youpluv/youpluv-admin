import React from "react";
import {
  Datagrid,
  List,
  TextField,
  ShowButton,
  Filter,
  TextInput,
  TopToolbar,
  CreateButton,
  useAuthenticated
} from "react-admin";

<<<<<<< HEAD:src/pages/Franchise/franchise-list.js
const FranchiseFilter = props => {
=======
// import { API } from "aws-amplify";

// import config from "../../config/constants";
// import Upload from "../../components/upload/Upload";

const UserFilter = props => {
>>>>>>> s3-upload:src/pages/User/user-list.js
  return (
    <Filter {...props}>
      <TextInput label="Buscar" source="email" alwaysOn />
    </Filter>
  );
};

const CustomActions = ({ basePath }) => {
  return (
    <TopToolbar>
      <CreateButton basePath={basePath} />
    </TopToolbar>
  );
};

<<<<<<< HEAD:src/pages/Franchise/franchise-list.js
const FranchiseList = props => {
  useAuthenticated();
=======
const UserList = props => {
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

  // const useStyles = makeStyles({

  // })

>>>>>>> s3-upload:src/pages/User/user-list.js
  return (
    <>
      <List
        bulkActionButtons={false}
        {...props}
        // filters={<FranchiseFilter />}
        // actions={<CustomActions />}
      >
        <Datagrid>
          <TextField source="username" label="Nome" />
          <TextField source="email" label="Email" />
<<<<<<< HEAD:src/pages/Franchise/franchise-list.js
          <TextField source="phone_number" label="Telefone" />
          <ShowButton />
=======
          {/* <ShowButton /> */}
          {/* <EditButton /> */}
>>>>>>> s3-upload:src/pages/User/user-list.js
        </Datagrid>
      </List>
    </>
  );
};

export default UserList;
