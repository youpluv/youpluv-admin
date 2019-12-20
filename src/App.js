import React from "react";
import { Admin, Resource } from "react-admin";
import Theme from "./Theme";
import LoginPage from "./components/LoginPage/LoginPage";

import FranchiseList from "./pages/Franchise/franchise-list";
import FranchiseCreate from "./pages/Franchise/franchise-create";
import FranchiseShow from "./pages/Franchise/franchise-show";

// import Documents from "./pages/Documents/Documents";
import FileList from './pages/File/file-list';
import FileEdit from './pages/File/file-edit';

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
          edit={FranchiseCreate}
          show={FranchiseShow}
          create={FranchiseCreate}
        />
        <Resource name="file" list={FileList} edit={FileEdit} />
        <Resource name="folder" />
      </Admin>
    </>
  );
}

export default App;
