interface RegistrationFormProps {
    selected: string;
}

import {
    TextField,
    Button,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers/";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { ChangeEvent } from "react";

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

    const ClientForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Nome" required />
            <TextField label="CPF" required />
            <TextField label="Email" required />
            <TextField label="Telefone" required />
        </FormControl>
    );

    const EmployeeForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Nome" required />
            <TextField label="CPF" required />
            Implementar os códigos que serão chaves estrangeiras
            <span>Chave estrangeira</span>
            <span>Chave estrangeira</span>
        </FormControl>
    );

    const RoleForm = () => (
        <div className={styles.form}>
            <TextField label="Salário" required />
            <TextField label="Descrição do cargo" multiline rows={2} required />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="permission-label">Permissões</InputLabel>
                <Select labelId="permission-label">
                    <MenuItem value="true">Pode vender</MenuItem>
                    <MenuItem value="false">Não pode vender</MenuItem>
                </Select>
            </FormControl>
        </div>
    );

    const ProductForm = () => (
        <FormControl className={styles.form}>
            <TextField
                label="Descrição do produto"
                multiline
                rows={2}
                required
            />
            <TextField label="Valor" required />
            <TextField label="Quantidade no estoque" type={"number"} required />
            //Implementar chaves estrangeiras
            <span>chave estrangeira</span>
            <span>chave estrangeira</span>
        </FormControl>
    );

    const MakerForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Nome do fabricante" required />
        </FormControl>
    );

    const BranchForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Nome da filial" required />
            <TextField label="Cidade" required />
            <TextField label="UF" required />
            <TextField label="CEP" required />
            <TextField label="Rua" required />
            <TextField label="Número" required />
        </FormControl>
    );

    const NoteForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Número de parcelas" required />
            <span>Chave estrangeira</span>
            <span>Chave estrangeira</span>
            <span>Chave estrangeira</span>
            <span>Chave estrangeira</span>
            Implementar os códigos que serão chaves estrangeiras
        </FormControl>
    );

    const ProductCategoryForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Descrição da categoria" required />
        </FormControl>
    );

    const PaymentMethodForm = () => (
        <FormControl className={styles.form}>
            <TextField label="Descrição" required />
        </FormControl>
    );

    const SelectedForm = () => {
        switch (selected) {
            case "client":
                return <ClientForm />;
            case "employee":
                return <EmployeeForm />;
            case "role":
                return <RoleForm />;
            case "product":
                return <ProductForm />;
            case "maker":
                return <MakerForm />;
            case "branch":
                return <BranchForm />;
            case "note":
                return <NoteForm />;
            case "product-category":
                return <ProductCategoryForm />;
            case "payment-method":
                return <PaymentMethodForm />;
            default:
                return <></>;
        }
    };

    return <SelectedForm />;
}

export default RegistratioForm;
