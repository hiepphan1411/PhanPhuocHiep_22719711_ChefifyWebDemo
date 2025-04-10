import "./App.css";
import { BrowserRouter, NavLink, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";
import ModalAdd from "./components/ModalAdd";
import OverviewLoad from "./components/OverviewLoad";
import TableDataLoad from "./components/TableDataLoad";
import Sidebar from "./components/Sidebar";
import Layout from "./layout/Layout";
import Folder from "./pages/Folder";

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="projects" element={<Folder />} />
            <Route path="teams" element={<Teams />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="messages" element={<Messages />} />
            <Route path="integrations" element={<Integrations />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
