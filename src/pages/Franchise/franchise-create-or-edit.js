import React from "react";
import {
  Create,
  Edit,
  TextInput,
  SimpleForm,
  required,
  email
} from "react-admin";
import Input from "../../components/Input/Input";

const FranchiseCreate = props => {
  const CreateOrEdit = props => {
    if (props.id) return <Edit title="Editar Franquia" {...props} />;
    return <Create title="Criar Franquia" {...props} />;
  };

  return (
    <CreateOrEdit {...props}>
      <SimpleForm>
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
        <TextInput source="address_zip" label="CEP" />
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
      </SimpleForm>
    </CreateOrEdit>
  );
};

export default FranchiseCreate;
