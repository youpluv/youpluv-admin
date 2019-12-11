import React from "react";
import { Admin, Resource } from "react-admin";
import Theme from './Theme';

import ConcursoList from "./pages/Concurso/concurso-list";
// import ConcursoEdit from "./pages/Concurso/concurso-edit";
import ConcursoCreate from "./pages/Concurso/ConcursoCreate";
import ConcursoShow from "./pages/Concurso/concurso-show";

import UserList from "./pages/User/user-list";
import UserEdit from "./pages/User/user-edit";
import UserCreate from "./pages/User/user-create";
import UserShow from "./pages/User/user-show";

import FranchiseList from "./pages/Franchise/franchise-list";
import FranchiseEdit from "./pages/Franchise/franchise-edit";
import FranchiseCreate from "./pages/Franchise/franchise-create";
import FranchiseShow from "./pages/Franchise/franchise-show";

import ContatoList from "./pages/Contato/contato-list";

import PendenciaList from "./pages/Pendencia/pendencia-list";
import PendenciaShow from "./pages/Pendencia/pendencia-show";
import PendenciaEdit from "./pages/Pendencia/pendencia-edit";

import './style.scss'
import dataProvider from "./services/data-provider";
import authProvider from './services/auth-provider';
import TimeList from "./pages/Times/time-list";
import TimeCreate from "./pages/Times/time-create";



function App() {
  return (
    <>
      <Admin theme={Theme} dataProvider={dataProvider()} authProvider={authProvider}>
        <Resource
          name="franchise"
          list={FranchiseList}
          edit={FranchiseCreate}
          show={FranchiseShow}
          create={FranchiseCreate}
        />
        {/* <Resource
          name="concurso"
          list={ConcursoList}
          edit={ConcursoCreate}
          create={ConcursoCreate}
          show={ConcursoShow}
        />
        <Resource
          name="user"
          list={UserList}
          edit={UserEdit}
          show={UserShow}
          create={UserCreate}
        />
        <Resource
          name="contato"
          list={ContatoList}
        />
        <Resource
          name="pendencias"
          list={PendenciaList}
          show={PendenciaShow}
          edit={PendenciaEdit}
        />
        <Resource 
          name="time"
          list={TimeList}
          create={TimeCreate}
        /> */}
        {/* <Resource
          name="time"
          list={TimeList}
        /> */}
      </Admin>
    </>
  );
}

export default App;


