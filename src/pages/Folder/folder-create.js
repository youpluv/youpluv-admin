import React, { useEffect, useState } from "react";
import {
    Create,
    Edit,
    TextInput,
    SimpleForm
} from "react-admin";
import CustomToolbar from "../../components/CustomToolbar/CustomToolbar";
import TransferList from '../../components/TransferList/TransferList';

import { getFiles } from '../../services/folders-service';

const FolderCreate = props => {

    useEffect(() => {
        getFiles().then(response => {
            console.log(response)
            setFiles(response.data)   
        }).catch(error => {
            console.log(error.response)
        });
    }, [])

    const [files, setFiles] = useState([]);

    console.log("PROPS :: ", props)
    const CreateOrEdit = (props) => {
        if (props.id)
            return <Edit title="Editar Pasta" {...props} />
        return <Create title="Criar Pasta" {...props} />
    }
    return (
        <CreateOrEdit {...props}>
            <SimpleForm toolbar={<CustomToolbar />} >
                <TextInput source="name" label="Nome da Pasta" />
                <TransferList files={files} />
            </SimpleForm>
        </CreateOrEdit>
    );
};

export default FolderCreate;
