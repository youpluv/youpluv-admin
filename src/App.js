import React from "react";
import { Admin, Resource } from "react-admin";
import Theme from "./Theme";
import LoginPage from "./components/LoginPage/LoginPage";

import FranchiseList from "./pages/Franchise/franchise-list";
import FranchiseCreateOrEdit from "./pages/Franchise/franchise-create-or-edit";
import FranchiseShow from "./pages/Franchise/franchise-show";

// import Documents from "./pages/Documents/Documents";
import FileList from "./pages/File/file-list";
import FileCreateOrEdit from "./pages/File/file-create-or-edit";

import FolderList from "./pages/Folder/folder-list";
import FolderEdit from "./pages/Folder/folder-edit";
import FolderCreate from "./pages/Folder/folder-create";

import "./style.scss";
import dataProvider from "./services/data-provider";
import authProvider from "./services/auth-provider";

function App() {
  return (
    <>
      <Admin
        theme={Theme}
        loginPage={LoginPage}
        dataProvider={dataProvider()}
        authProvider={authProvider}
      >
        <Resource
          name="franchise"
          list={FranchiseList}
          edit={FranchiseCreateOrEdit}
          show={FranchiseShow}
          create={FranchiseCreateOrEdit}
        />
        <Resource
          name="file"
          list={FileList}
          create={FileCreateOrEdit}
          edit={FileCreateOrEdit}
        />
        <Resource
          name="folder"
          list={FolderList}
          edit={FolderEdit}
          create={FolderCreate}
        />
      </Admin>
    </>
  );
}

export default App;
