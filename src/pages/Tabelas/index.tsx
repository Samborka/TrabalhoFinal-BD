import { useState } from "react";
import Navbar from "../../components/Navbar";
import RegistratioForm from "../../components/RegistrationForm";

import {
    Select,
    InputLabel,
    MenuItem,
    FormControl,
    SelectChangeEvent,
} from "@mui/material";

import styles from "./styles.module.scss";
import Tabela from "../../components/Tabela";

function Cadastro() {
    const [select, setSelect] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value);
    };

    return (
        <>
            <Navbar />
            <main className={styles.content}>
                <h2>Tabelas</h2>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="select-label">
                        Selecione uma tabela
                    </InputLabel>
                    <Select
                        labelId="select-label"
                        placeholder="Selecione"
                        value={select}
                        onChange={handleChange}
                    >
                        <MenuItem value="cargo">Cargo</MenuItem>
                        <MenuItem value="categoriaproduto">
                            Categoria Produto
                        </MenuItem>
                        <MenuItem value="cliente">Cliente</MenuItem>
                        <MenuItem value="estoque">Estoque</MenuItem>
                        <MenuItem value="fabricante">Fabricante</MenuItem>
                        <MenuItem value="filial">Filial</MenuItem>
                        <MenuItem value="funcionario">Funcionario</MenuItem>
                        <MenuItem value="nota">Nota</MenuItem>
                        <MenuItem value="metodo_pag">
                            Método de Pagamento
                        </MenuItem>
                        <MenuItem value="produto">Produto</MenuItem>
                        <MenuItem value="produtonota">Produto Nota</MenuItem>
                        <MenuItem value="venda">Venda</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <Tabela selected={select} />
            </main>
        </>
    );
}

export default Cadastro;
