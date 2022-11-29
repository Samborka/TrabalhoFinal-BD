interface RegistrationFormProps {
    selected: string;
}

import { TextField, Button, FormControl } from "@mui/material";
import { ChangeEvent, useState } from "react";

import styles from "./styles.module.scss";

function RegistratioForm({ selected }: RegistrationFormProps) {
    //TODO
    // const [basicForm, setBasicForm] = useState({
    //     name: "",
    //     cpf: "",
    // });

    // const handleBasicForm = (event: ChangeEvent<HTMLInputElement>) => {
    //     setBasicForm({
    //         ...basicForm,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    const BasicForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Nome" required />
            <TextField label="CPF" required />
        </FormControl>
    );

    const RoleForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Nome do cargo" required />
            <TextField label="Salário" required />
            <TextField label="Descrição do cargo" multiline rows={2} required />
        </FormControl>
    );

    const ProductForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Nome do produto" required />
            <TextField label="Preço" required />
            <TextField
                label="Descrição do produto"
                multiline
                rows={2}
                required
            />
            <TextField label="Quantidade no estoque" type={"number"} required />
        </FormControl>
    );

    const MakerForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Nome do fabricante" required />
        </FormControl>
    );

    const SelectedForm = () => {
        switch (selected) {
            case "client":
                return <BasicForm />;
            case "employee":
                return <BasicForm />;
            case "role":
                return <RoleForm />;
            case "product":
                return <ProductForm />;
            case "maker":
                return <MakerForm />;
            default:
                return <></>;
        }
    };

    return <SelectedForm />;
}

export default RegistratioForm;
