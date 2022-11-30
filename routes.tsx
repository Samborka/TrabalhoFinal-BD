import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/TrabalhoFinal-BD" element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;
