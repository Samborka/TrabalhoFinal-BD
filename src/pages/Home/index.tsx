import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";

import {
    TextField,
    Button,
    Select,
    InputLabel,
    MenuItem,
    FormControl,
    SelectChangeEvent,
} from "@mui/material";
import RegistratioForm from "../../components/RegistrationForm";
import { useState } from "react";

function Home() {
    const [select, setSelect] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value);
    };

    return (
        <>
            <Navbar />
            <main className={styles.content}>
                <h2>Cadastro</h2>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="select-label">
                        Selecione o que deseja cadastrar
                    </InputLabel>
                    <Select
                        labelId="select-label"
                        placeholder="Selecione"
                        value={select}
                        onChange={handleChange}
                    >
                        <MenuItem value="client">Cliente</MenuItem>
                        <MenuItem value="employee">Funcionário</MenuItem>
                        <MenuItem value="role">Cargo</MenuItem>
                        <MenuItem value="product">Produto</MenuItem>
                        <MenuItem value="maker">Fabricante</MenuItem>
                    </Select>

                    <RegistratioForm selected={select} />
                    <br />
                    <Button variant="contained">Enviar cadastro</Button>
                </FormControl>
            </main>
        </>
    );
}

export default Home;
