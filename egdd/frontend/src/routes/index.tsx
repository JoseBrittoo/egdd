import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import ContextoEducacionalPage from "../pages/ContextoEducacional";
import PersonaPage from "../pages/PersonaPage";
import NarrativaPage from "../pages/NarrativaPage";
import MecanicaPage from "../pages/MecanicaPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contexto-educacional" element={<ContextoEducacionalPage />} />
      <Route path="/persona" element={<PersonaPage />} />
      <Route path="/narrativa" element={<NarrativaPage />} />
      <Route path="/mecanica" element={<MecanicaPage />} />
    </Routes>
  );
}
