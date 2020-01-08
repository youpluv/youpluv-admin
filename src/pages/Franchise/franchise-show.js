import React from "react";
import { BooleanField, TextField, Show, SimpleShowLayout } from "react-admin";

const FranchiseEdit = props => {
  return (
    <>
      <div style={{ margin: "20px 0" }}>
        <Show {...props} title="Usuário">
          <SimpleShowLayout>
            <BooleanField source="is_admin" label="Admin" />
            <TextField source="entity_id" label="ID" />
            <TextField source="name" label="Nome da Franquia" />
            <TextField source="email" label="Email" />
            <TextField source="phone_number" label="Telefone" />
            <TextField source="address_zip" label="CEP" />
            <TextField source="address_street" label="Rua" />
            <TextField source="address_number" label="Numero" />
            <TextField source="address_complement" label="Complemento" />
            <TextField source="address_neighborhood" label="Bairro" />
            <TextField source="address_city" label="Cidade" />
            <TextField source="address_state" label="Estado" />
            <TextField source="url_trinks" label="Link Trinks" />
            <TextField source="url_maps" label="Link Google Maps" />
            <TextField source="work_hours" label="Horario de Funcionamento" />
          </SimpleShowLayout>
        </Show>
      </div>

      {/* <Show {...props} title=" " actions={<div />}>
        <TabbedShowLayout>
          <Tab label="Cartelas">
            <ArrayField source="cartela">
              <Datagrid>
                <TextField source="entity_id" label="ID" />
                <DateField source="concurso_data_inicio" label="Data Início" />
                <DateField source="concurso_data_fim" label="Data Fim" />
                <ArrayField source="jogos">
                  <Datagrid>
                    <TextField source="entity_id" label="ID" />
                    <DateField source="data" label="Data" />
                    <TextField source="mandante" label="Mandante" />
                    <TextField source="visitante" label="Visitante" />
                    <TextField source="palpite" label="Palpite" />
                  </Datagrid>
                </ArrayField>
              </Datagrid>
            </ArrayField>
          </Tab>

          <Tab label="Compras">
            <ArrayField source="compras">
              <Datagrid>
                <TextField source="payment.reference_id" label="Referência" />
                <NumberField source="value" label="Valor" />
                <TextField source="payment.payment_type" label="Tipo" />
                <DateField source="purchase_datetime" label="Data" />
                <ArrayField source="payment.transactions" label="Status">
                  <Datagrid>
                    <TextField source="status" label="Status" />
                    <DateField source="transaction_datetime" label="Data" />
                  </Datagrid>
                </ArrayField>
              </Datagrid>
            </ArrayField>
          </Tab>
        </TabbedShowLayout>
      </Show> */}
    </>
  );
};

export default FranchiseEdit;
