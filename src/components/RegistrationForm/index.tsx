import React, { useEffect, useState } from "react";

import {
    TextField,
    Button,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    SelectChangeEvent,
} from "@mui/material";

import { api } from "../../services/api";

import styles from "./styles.module.scss";
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

const initialValueRole = {
    salary: "",
    description: "",
    permission: "",
};

function RegistratioForm({ selected }: RegistrationFormProps) {
    const [clientData, setClientData] = useState(initialValueClient);
    const [roleData, setRoleData] = useState(initialValueRole);

    useEffect(() => {
        api.get("/select", {
            params: {
                table: "filial",
            },
        }).then((response) => console.log(response));
    }, []);

    const handleFormChange = (
        event: React.ChangeEvent | SelectChangeEvent,
        state: any,
        setter: any
    ) => {
        const { name, value } = event.target as HTMLInputElement;
        setter({ ...state, [name]: value });
    };

    function createClient(
        table: string,
        nome: string,
        email: string,
        cpf: string,
        telefone: string
    ) {
        api.post("/insert", null, {
            params: {
                table,
                nome,
                email,
                cpf,
                telefone,
            },
        })
            .then((response) => {
                alert(response.data.message);
                setClientData(initialValueClient);
            })
            .catch((error) => console.log(error));
    }

    function createRole(
        salary: string,
        description: string,
        permission: string
    ) {
        api.post("/insert", null, {
            params: {
                table: "cargo",
                salario: salary,
                descricao: description,
                permissao_venda: permission,
            },
        })
            .then((response) => {
                alert(response.data.message);
                setRoleData(initialValueRole);
            })
            .catch((error) => console.log(error));
    }

    const clientForm = () => (
        <div className={styles.form}>
            <TextField
                label="Nome"
                name="name"
                value={clientData.name}
                onChange={(event) =>
                    handleFormChange(event, clientData, setClientData)
                }
                required
            />

            <TextField
                label="CPF"
                name="cpf"
                value={clientData.cpf}
                onChange={(event) =>
                    handleFormChange(event, clientData, setClientData)
                }
                required
            />
            <TextField
                value={clientData.email}
                onChange={(event) =>
                    handleFormChange(event, clientData, setClientData)
                }
                label="Email"
                name="email"
                required
            />
            <TextField
                label="Telefone"
                name="phone"
                value={clientData.phone}
                onChange={(event) =>
                    handleFormChange(event, clientData, setClientData)
                }
                required
            />
            <Button
                variant="contained"
                onClick={() =>
                    createClient(
                        "cliente",
                        clientData.name,
                        clientData.email,
                        clientData.cpf,
                        clientData.phone
                    )
                }
            >
                Registrar Cliente
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

    const roleForm = () => (
        <div className={styles.form}>
            <TextField
                label="Salário"
                name="salary"
                value={roleData.salary}
                onChange={(event) =>
                    handleFormChange(event, roleData, setRoleData)
                }
                required
            />
            <TextField
                label="Descrição do cargo"
                name="description"
                value={roleData.description}
                onChange={(event) =>
                    handleFormChange(event, roleData, setRoleData)
                }
                multiline
                rows={2}
                required
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="permission-label">Permissões</InputLabel>
                <Select
                    labelId="permission-label"
                    name="permission"
                    value={roleData.permission}
                    onChange={(event) =>
                        handleFormChange(event, roleData, setRoleData)
                    }
                >
                    <MenuItem value="true">Pode vender</MenuItem>
                    <MenuItem value="false">Não pode vender</MenuItem>
                </Select>
                <br />
                <Button
                    variant="contained"
                    onClick={() =>
                        createRole(
                            roleData.salary,
                            roleData.description,
                            roleData.permission
                        )
                    }
                >
                    Registrar cargo
                </Button>
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
                return roleForm();
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
