import React from "react";
import { Admin, Resource } from "react-admin";
import Theme from "./Theme";
import LoginPage from "./components/LoginPage/LoginPage";

import UserList from "./pages/User/user-list";

import "./style.scss";
import dataProvider from "./services/data-provider";
import authProvider from "./services/auth-provider";
import NewsList from "./pages/News/news-list";
import NewsCreateOrEdit from "./pages/News/news-create";
import Record from "./pages/Record/Record";

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
          name="rainfall"
          options={{ label: "Registros" }}
          list={Record}
        />
        <Resource
          name="users"
          options={{ label: "Usuários" }}
          list={UserList}
        />

        <Resource
          name="news"
          options={{ label: "Notícias" }}
          list={NewsList}
          create={NewsCreateOrEdit}
          edit={NewsCreateOrEdit}
        />
      </Admin>
    </>
  );
}

export default App;
