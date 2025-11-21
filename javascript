import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
function Header() {
  return (
    <header className="header">
      <h1>Agendador Profissional</h1>
      <p>Organize seus horários, serviços e pagamentos</p>
    </header>
  );
}

export default Header;
