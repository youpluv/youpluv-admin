import React from "react";
import { Create, Edit, TextInput, SimpleForm } from "react-admin";
import CustomToolbar from "../../components/CustomToolbar/CustomToolbar";

const NewsCreateOrEdit = props => {
  const CreateOrEdit = props => {
    if (props.id) return <Edit title="Editar Notícia" {...props} />;
    return <Create title="Criar Notícia" {...props} />;
  };
  return (
    <CreateOrEdit {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source="title" label="Titulo" />
        <TextInput source="subtitle" label="Subtitulo" />
        <TextInput source="description" label="Descrição" />
        <TextInput source="source" label="Origem" />
      </SimpleForm>
    </CreateOrEdit>
  );
};

export default NewsCreateOrEdit;
