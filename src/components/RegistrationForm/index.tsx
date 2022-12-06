import { useEffect, useState } from "react";

import {
    TextField,
    Button,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
} from "@mui/material";

import styles from "./styles.module.scss";
import { api } from "../../services/api";
interface RegistrationFormProps {
    selected: string;
}

type Client = {
    name: string;
    email: string;
    cpf: string;
    phone: string;
};

const initialValueClient = {
    name: "",
    email: "",
    cpf: "",
    phone: "",
};

function RegistratioForm({ selected }: RegistrationFormProps) {
    const [clientData, setClientData] = useState(initialValueClient);
    console.log(clientData);

    const handleClientChange = (event: React.ChangeEvent) => {
        const { name, value } = event.target as HTMLInputElement;
        setClientData({ ...clientData, [name]: value });
    };

    function postClient(
        table: string,
        nome: string,
        email: string,
        cpf: string,
        telefone: string
    ) {
        api.post("/insert", null, { params: {
            table,
            nome,
            email,
            cpf,
            telefone
          }})
            .then((response) => console.log("Post enviado com sucesso!"))
            .catch((error) => console.log(error));
    }

    const clientForm = () => (
        <div className={styles.form}>
            <TextField
                label="Nome"
                name="name"
                value={clientData.name}
                onChange={handleClientChange}
                required
            />

            <TextField
                label="CPF"
                name="cpf"
                value={clientData.cpf}
                onChange={handleClientChange}
                required
            />
            <TextField
                value={clientData.email}
                onChange={handleClientChange}
                label="Email"
                name="email"
                required
            />
            <TextField
                label="Telefone"
                name="phone"
                value={clientData.phone}
                onChange={handleClientChange}
                required
            />
            <Button
                onClick={() =>
                    postClient(
                        "cliente",
                        clientData.name,
                        clientData.email,
                        clientData.cpf,
                        clientData.phone
                    )
                }
            >
                Cliente Button
            </Button>
        </div>
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

    const selectedForm = () => {
        switch (selected) {
            case "client":
                return clientForm();
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

    return selectedForm();
}

export default RegistratioForm;
