import React, { useEffect, useState } from "react";
import {
    initialValueClient,
    initialValueRole,
    initialValueEmployee,
    initialValueProduct,
    initialValueMaker,
    initialValueBranch,
    initialValueNote,
    initialValueProductCategory,
    initialValuePaymentMethod,
} from "./initialValues";

import {
    TextField,
    Button,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    SelectChangeEvent,
    List,
    ListItem,
    Checkbox,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import { api } from "../../services/api";

import styles from "./styles.module.scss";
interface RegistrationFormProps {
    selected: string;
}

function RegistratioForm({ selected }: RegistrationFormProps) {
    const [clientData, setClientData] = useState(initialValueClient);
    const [roleData, setRoleData] = useState(initialValueRole);
    const [employeeData, setEmployeeData] = useState(initialValueEmployee);
    const [productCategoryData, setProductCategoryData] = useState(
        initialValueProductCategory
    );
    const [makerData, setMakerData] = useState(initialValueMaker);
    const [productData, setProductData] = useState(initialValueProduct);
    const [paymentMethodData, setPaymentMethodData] = useState(
        initialValuePaymentMethod
    );
    // const [noteData, setNoteData] = useState(initialValueNote);
    const [branchData, setBranchData] = useState(initialValueBranch);
    const [branch, setBranch] = useState([]);
    const [role, setRole] = useState([]);
    const [maker, setMaker] = useState([]);
    const [category, setCategory] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [client, setClient] = useState([]);
    const [product, setProduct] = useState([]);

    const getBranch = () => {
        api.get("/select", {
            params: {
                table: "filial",
            },
        }).then((response) => setBranch(response.data.records));
    };

    const getRole = () => {
        api.get("/select", {
            params: {
                table: "cargo",
            },
        }).then((response) => setRole(response.data.records));
    };

    const getMaker = () => {
        api.get("/select", {
            params: {
                table: "fabricante",
            },
        }).then((response) => setMaker(response.data.records));
    };

    const getCategory = () => {
        api.get("/select", {
            params: {
                table: "categoriaproduto",
            },
        }).then((response) => setCategory(response.data.records));
    };

    const getPaymentMethod = () => {
        api.get("/select", {
            params: {
                table: "metodo_pag",
            },
        }).then((response) => setPaymentMethod(response.data.records));
    };

    const getEmployee = () => {
        api.get("/select", {
            params: {
                table: "funcionario",
            },
        }).then((response) => setEmployee(response.data.records));
    };

    const getClient = () => {
        api.get("/select", {
            params: {
                table: "cliente",
            },
        }).then((response) => setClient(response.data.records));
    };

    const getProducts = () => {
        api.get("/select", {
            params: {
                table: "produto",
            },
        }).then((response) => setProduct(response.data.records));
    };

    useEffect(() => {
        getBranch();
        getRole();
        getMaker();
        getCategory();
        getEmployee();
        getClient();
        getPaymentMethod();
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
        nome: string,
        email: string,
        cpf: string,
        telefone: string
    ) {
        api.post("/insert", null, {
            params: {
                table: "cliente",
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

    function createEmployee(
        name: string,
        cpf: string,
        cod_filial: string,
        cod_cargo: string
    ) {
        api.post("/insert", null, {
            params: {
                table: "funcionario",
                nome: name,
                cpf: cpf,
                cod_filial: cod_filial,
                cod_cargo: cod_cargo,
            },
        })
            .then((response) => {
                alert(response.data.message);
                setRoleData(initialValueRole);
            })
            .catch((error) => console.log(error));
    }

    function createProductCategory(description: string) {
        api.post("/insert", null, {
            params: {
                table: "categoriaproduto",
                descricao_cat: description,
            },
        })
            .then((response) => {
                alert(response.data.message);
                setProductCategoryData(initialValueProductCategory);
            })
            .catch((error) => console.log(error));
    }

    function createMaker(name: string) {
        api.post("/insert", null, {
            params: {
                table: "fabricante",
                nome: name,
            },
        })
            .then((response) => {
                alert(response.data.message);
                setMakerData(initialValueMaker);
            })
            .catch((error) => console.log(error));
    }

    function createProduct(
        description: string,
        value: string,
        cod_fabricante: string,
        cod_categoriaproduto: string
    ) {
        api.post("/insert", null, {
            params: {
                table: "produto",
                descricao: description,
                valor: value,
                cod_fab: cod_fabricante,
                cod_cat: cod_categoriaproduto,
            },
        })
            .then((response) => {
                alert(response.data.message);
                setProductCategoryData(initialValueProductCategory);
            })
            .catch((error) => console.log(error));
    }

    function createPaymentMethod(description: string) {
        api.post("/insert", null, {
            params: {
                table: "metodo_pag",
                descricao: description,
            },
        })
            .then((response) => {
                alert(response.data.message);
                setPaymentMethodData(initialValuePaymentMethod);
            })
            .catch((error) => console.log(error));
    }

    // function createNote(
    //     num_parcelas: string,
    //     cod_product: string,
    //     quantidade: string,
    //     cod_funcionario: string,
    //     cod_cliente: string,
    //     cod_metodo: string
    // ) {
    //     api.post("/gerarnota", null, {
    //         params: {
    //             num_parcelas: num_parcelas,
    //             cod_funcionario: cod_funcionario,
    //             cod_produto: cod_product,
    //             qtde: quantidade,
    //             cod_cliente: cod_cliente,
    //             cod_metodo: cod_metodo,
    //         },
    //     })
    //         .then((response) => {
    //             alert(response.data.message);
    //             setNoteData(initialValueNote);
    //         })
    //         .catch((error) => console.log(error));
    // }

    function createBranch(
        name: string,
        city: string,
        uf: string,
        cep: string,
        rua: string,
        numero: string
    ) {
        api.post("/insert", null, {
            params: {
                table: "filial",
                nome_filial: name,
                cidade: city,
                uf: uf,
                cep: cep,
                rua: rua,
                numero: numero,
            },
        })
            .then((response) => {
                alert(response.data.message);
                setBranchData(initialValueBranch);
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

    const employeeForm = () => (
        <div className={styles.form}>
            <TextField
                label="Nome"
                name="name"
                value={employeeData.name}
                onChange={(event) =>
                    handleFormChange(event, employeeData, setEmployeeData)
                }
                required
            />
            <TextField
                label="CPF"
                name="cpf"
                value={employeeData.cpf}
                onChange={(event) =>
                    handleFormChange(event, employeeData, setEmployeeData)
                }
                required
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="cod-filial-label">Filial</InputLabel>
                <Select
                    labelId="cod-filial-label"
                    name="cod_filial"
                    value={employeeData.cod_filial}
                    onChange={(event) =>
                        handleFormChange(event, employeeData, setEmployeeData)
                    }
                    onClick={getBranch}
                >
                    {branch.map((item: any) => (
                        <MenuItem value={item[0]} key={item[0]}>
                            {item[1]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="cod-role-label">Cargo</InputLabel>
                <Select
                    labelId="cod-role-label"
                    name="cod_cargo"
                    value={employeeData.cod_cargo}
                    onChange={(event) =>
                        handleFormChange(event, employeeData, setEmployeeData)
                    }
                    onClick={getRole}
                >
                    {role.map((item: any) => (
                        <MenuItem value={item[0]} key={item[0]}>
                            {item[2]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                variant="contained"
                onClick={() =>
                    createEmployee(
                        employeeData.name,
                        employeeData.cpf,
                        employeeData.cod_filial,
                        employeeData.cod_cargo
                    )
                }
            >
                Registrar Funcionário
            </Button>
        </div>
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
            </FormControl>
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
        </div>
    );

    const productForm = () => (
        <div className={styles.form}>
            <TextField
                label="Descrição do produto"
                name="description"
                value={productData.description}
                onChange={(event) =>
                    handleFormChange(event, productData, setProductData)
                }
                multiline
                rows={2}
                required
            />
            <TextField
                label="Valor"
                name="value"
                value={productData.value}
                onChange={(event) =>
                    handleFormChange(event, productData, setProductData)
                }
                required
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="cod-fabricante-label">Fabricante</InputLabel>
                <Select
                    labelId="cod-fabricante-label"
                    name="cod_fab"
                    value={productData.cod_fab}
                    onChange={(event) =>
                        handleFormChange(event, productData, setProductData)
                    }
                    onClick={getMaker}
                >
                    {maker.map((item: any) => (
                        <MenuItem value={item[0]} key={item[0]}>
                            {item[1]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="cod-categoria-label">Categoria</InputLabel>
                <Select
                    labelId="cod-categoria-label"
                    name="cod_cat"
                    value={productData.cod_cat}
                    onChange={(event) =>
                        handleFormChange(event, productData, setProductData)
                    }
                    onClick={getCategory}
                >
                    {category.map((item: any) => (
                        <MenuItem value={item[0]} key={item[0]}>
                            {item[1]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                variant="contained"
                onClick={() =>
                    createProduct(
                        productData.description,
                        productData.value,
                        productData.cod_fab,
                        productData.cod_cat
                    )
                }
            >
                Registar produto
            </Button>
        </div>
    );

    const makerForm = () => (
        <div className={styles.form}>
            <TextField
                name="name"
                value={makerData.name}
                onChange={(event) =>
                    handleFormChange(event, makerData, setMakerData)
                }
                label="Nome do fabricante"
                required
            />
            <Button
                variant="contained"
                onClick={() => createMaker(makerData.name)}
            >
                Cadastrar fabricante
            </Button>
        </div>
    );

    const branchForm = () => (
        <div className={styles.form}>
            <TextField
                label="Nome da filial"
                name="name"
                value={branchData.name}
                onChange={(event) =>
                    handleFormChange(event, branchData, setBranchData)
                }
                required
            />
            <TextField
                label="Cidade"
                name="city"
                value={branchData.city}
                onChange={(event) =>
                    handleFormChange(event, branchData, setBranchData)
                }
                required
            />
            <TextField
                label="UF"
                name="uf"
                value={branchData.uf}
                onChange={(event) =>
                    handleFormChange(event, branchData, setBranchData)
                }
                required
            />
            <TextField
                label="CEP"
                name="cep"
                value={branchData.cep}
                onChange={(event) =>
                    handleFormChange(event, branchData, setBranchData)
                }
                required
            />
            <TextField
                label="Rua"
                name="rua"
                value={branchData.rua}
                onChange={(event) =>
                    handleFormChange(event, branchData, setBranchData)
                }
                required
            />
            <TextField
                label="Número"
                name="numero"
                value={branchData.numero}
                onChange={(event) =>
                    handleFormChange(event, branchData, setBranchData)
                }
                required
            />
            <Button
                variant="contained"
                onClick={() =>
                    createBranch(
                        branchData.name,
                        branchData.city,
                        branchData.uf,
                        branchData.cep,
                        branchData.rua,
                        branchData.numero
                    )
                }
            >
                Cadastrar Filial
            </Button>
        </div>
    );

    // const noteForm = () => (
    //     <div className={styles.form}>
    //         <TextField
    //             label="Número de parcelas"
    //             name="num_parcelas"
    //             value={noteData.num_parcelas}
    //             onChange={(event) =>
    //                 handleFormChange(event, noteData, setNoteData)
    //             }
    //             required
    //         />
    //         <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
    //             <InputLabel id="cod-produto-label">Produto</InputLabel>
    //             <List dense component="div" role="list">
    //                 {product.map((item: any) => (
    //                     <ListItem role="listitem" value={item[0]} key={item[0]}>
    //                         <ListItemIcon>
    //                             <input
    //                                 type="checkbox"
    //                                 value={item[0]}
    //                                 onChange={handleNoteFormChange}
    //                             />
    //                         </ListItemIcon>
    //                         <ListItemText primary={item[1]} />
    //                         <TextField
    //                             label="Quantidade do produto"
    //                             type="number"
    //                             name="quantidade"
    //                             value={noteData.produto.quantidade}
    //                             onChange={(event) =>
    //                                 handleFormChange(
    //                                     event,
    //                                     noteData,
    //                                     setNoteData
    //                                 )
    //                             }
    //                             required
    //                         />
    //                     </ListItem>
    //                 ))}
    //             </List>
    //         </FormControl>
    //         <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
    //             <InputLabel id="cod-metodo-label">
    //                 Método de pagamento
    //             </InputLabel>
    //             <Select
    //                 labelId="cod-filial-label"
    //                 name="cod_metodo"
    //                 value={noteData.cod_metodo}
    //                 onChange={(event) =>
    //                     handleFormChange(event, noteData, setNoteData)
    //                 }
    //                 onClick={getPaymentMethod}
    //             >
    //                 {paymentMethod.map((item: any) => (
    //                     <MenuItem value={item[0]} key={item[0]}>
    //                         {item[1]}
    //                     </MenuItem>
    //                 ))}
    //             </Select>
    //         </FormControl>
    //         <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
    //             <InputLabel id="cod-funcionario-label">Funcionário</InputLabel>
    //             <Select
    //                 labelId="cod-funcionario-label"
    //                 name="cod_funcionario"
    //                 value={noteData.cod_funcionario}
    //                 onChange={(event) =>
    //                     handleFormChange(event, noteData, setNoteData)
    //                 }
    //                 onClick={getEmployee}
    //             >
    //                 {employee.map((item: any) => (
    //                     <MenuItem value={item[0]} key={item[0]}>
    //                         {item[1]}
    //                     </MenuItem>
    //                 ))}
    //             </Select>
    //         </FormControl>
    //         <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
    //             <InputLabel id="cod-cliente-label">Cliente</InputLabel>
    //             <Select
    //                 labelId="cod-cliente-label"
    //                 name="cod_cliente"
    //                 value={noteData.cod_cliente}
    //                 onChange={(event) =>
    //                     handleFormChange(event, noteData, setNoteData)
    //                 }
    //                 onClick={getClient}
    //             >
    //                 {client.map((item: any) => (
    //                     <MenuItem value={item[0]} key={item[0]}>
    //                         {item[2]}
    //                     </MenuItem>
    //                 ))}
    //             </Select>
    //         </FormControl>

    //         <Button
    //             variant="contained"
    //             // onClick={() =>
    //             //     createNote(
    //             //         noteData.num_parcelas,
    //             //         noteData.produto.cod_produto,
    //             //         noteData.produto.quantidade,
    //             //         noteData.cod_funcionario,
    //             //         noteData.cod_cliente,
    //             //         noteData.cod_metodo
    //             //     )
    //             // }
    //         >
    //             Cadastrar Nota
    //         </Button>
    //     </div>
    // );

    const productCategoryForm = () => (
        <div className={styles.form}>
            <TextField
                label="Descrição da categoria"
                name="description"
                value={productCategoryData.description}
                onChange={(event) =>
                    handleFormChange(
                        event,
                        productCategoryData,
                        setProductCategoryData
                    )
                }
                required
            />
            <Button
                variant="contained"
                onClick={() =>
                    createProductCategory(productCategoryData.description)
                }
            >
                Criar categoria
            </Button>
        </div>
    );

    const paymentMethodForm = () => (
        <div className={styles.form}>
            <TextField
                name="description"
                value={paymentMethodData.description}
                onChange={(event) =>
                    handleFormChange(
                        event,
                        paymentMethodData,
                        setPaymentMethodData
                    )
                }
                label="Descrição"
                required
            />
            <Button
                variant="contained"
                onClick={() =>
                    createPaymentMethod(paymentMethodData.description)
                }
            >
                Criar Método de pagamento
            </Button>
        </div>
    );

    const selectedForm = () => {
        switch (selected) {
            case "client":
                return clientForm();
            case "employee":
                return employeeForm();
            case "role":
                return roleForm();
            case "product":
                return productForm();
            case "maker":
                return makerForm();
            case "branch":
                return branchForm();
            // case "note":
            //     return noteForm();
            case "product-category":
                return productCategoryForm();
            case "payment-method":
                return paymentMethodForm();
            default:
                return <></>;
        }
    };

    return selectedForm();
}

export default RegistratioForm;
