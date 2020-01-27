import React from "react";
import {
  Create,
  Edit,
  BooleanInput,
  TextInput,
  SimpleForm,
  required,
  email,
  useAuthenticated
} from "react-admin";
import Input from "../../components/Input/Input";
import Upload from "../../components/Upload/Upload";
import FilesService from "../../services/file.service";
import { CustomToolbar } from "./toolbar";

const CreateOrEdit = props => {
  if (props.id) return <Edit title="Editar Franquia" {...props} />;
  return <Create title="Criar Franquia" {...props} />;
};

const FranchiseCreate = props => {
  useAuthenticated();

  return (
    <CreateOrEdit {...props}>
      <SimpleForm redirect="list" toolbar={<CustomToolbar {...props} />}>
        <BooleanInput source="is_active" label="Ativo" />
        <TextInput
          source="name"
          label="Nome da Franquia"
          validate={required("Campo Obrigatório")}
        />
        <TextInput
          source="email"
          label="Email"
          validate={[
            email("Insira um email válido"),
            required("Campo Obrigatório")
          ]}
        />
        <Input
          type={"phone"}
          source="phone_number"
          label="Telefone"
          validate={required("Campo Obrigatório")}
        />
        <Input type={"cep"} source="address_zip" label="CEP" />
        <TextInput source="address_street" label="Rua" />
        <TextInput source="address_number" label="Numero" />
        <TextInput source="address_complement" label="Complemento" />
        <TextInput source="address_neighborhood" label="Bairro" />
        <TextInput source="address_city" label="Cidade" />
        <TextInput source="address_state" label="Estado" />
        <TextInput source="url_trinks" label="Link Trinks" />
        <TextInput source="url_maps" label="Link Google Maps" />
        <TextInput
          source="work_hours"
          multiline
          label="Horario de Funcionamento"
        />
        <Upload
          placeholder={"Nenhuma imagem selecionada"}
          source="image"
          getUrl={FilesService.getUrlImage}
        />
      </SimpleForm>
    </CreateOrEdit>
  );
};

export default FranchiseCreate;
