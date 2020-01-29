import React from "react";
import { Create, Edit, TextInput, SimpleForm } from "react-admin";
import CustomToolbar from "../../components/CustomToolbar/CustomToolbar";

const UserCreateOrEdit = props => {
  const CreateOrEdit = props => {
    if (props.id) return <Edit title="Editar Usuário" {...props} />;
    return <Create title="Criar Usuário" {...props} />;
  };
  return (
    <CreateOrEdit {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source="username" label="Nome" />
        <TextInput source="email" label="Email" />
        <TextInput source="password" label="Password" />
        <TextInput source="picture" label="Imagem" />
      </SimpleForm>
    </CreateOrEdit>
  );
};

export default UserCreateOrEdit;
