import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Create, Edit, TextInput, SimpleForm } from "react-admin";
import CustomToolbar from "../../components/CustomToolbar/CustomToolbar";
import Upload from "../../components/Upload/Upload";
import RichTextInput from "ra-input-rich-text";

const useStyles = makeStyles(theme => ({
  richText: {
    width: "100%",
    backgroundColor: "transparent"
  }
}));

const NewsCreateOrEdit = props => {
  const CreateOrEdit = props => {
    if (props.id) return <Edit title="Editar Notícia" {...props} />;
    return <Create title="Criar Notícia" {...props} />;
  };

  const classes = useStyles();

  return (
    <CreateOrEdit {...props}>
      <SimpleForm
        redirect="list"
        toolbar={<CustomToolbar />}
        initialValues={{ date: new Date() }}
      >
        <TextInput source="title" label="Titulo" />
        <TextInput source="subtitle" label="Subtitulo" />
        <TextInput source="source" label="Origem" />

        <RichTextInput
          formClassName={classes.richText}
          className={classes.richText}
          source="description"
          label="Descrição"
          fullWidth={true}
        />
        <Upload source="image" />
      </SimpleForm>
    </CreateOrEdit>
  );
};

export default NewsCreateOrEdit;
