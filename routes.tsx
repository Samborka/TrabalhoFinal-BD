import React from "react";

import { Routes, Route } from "react-router-dom";
import Cadastro from "./src/pages/Cadastro";
import Tabelas from "./src/pages/Tabelas";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/TrabalhoFinal-BD/" element={<Cadastro />} />
            <Route path="/TrabalhoFinal-BD/tabelas" element={<Tabelas />} />
        </Routes>
    );
}

export default AppRoutes;
