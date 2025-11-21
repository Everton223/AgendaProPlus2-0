import React, { useState } from "react";
import Header from "./components/Header";
import AppointmentForm from "./components/AppointmentForm";
function AppointmentList({ appointments, deleteAppointment }) {
  return (
    <div className="list">
      <h2>Agendamentos do Dia</h2>

      {appointments.length === 0 && <p>Nenhum agendamento ainda.</p>}

      <ul>
        {appointments.map((a, index) => (
          <li key={index} className="appointment-item">

            <div>
              <strong>{a.horario}</strong> — {a.cliente} ({a.servico})
            </div>

            <div className="item-actions">
              <span className="price">R${a.valor}</span>

              <button 
                className="delete-btn"
                onClick={() => deleteAppointment(index)}
              >
                Excluir
              </button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;

import DailyTotal from "./components/DailyTotal";
import PaymentTabs from "./components/PaymentTabs";

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div className="container">
      <Header />
      <PaymentTabs />
      <AppointmentList 
  appointments={appointments} 
  deleteAppointment={deleteAppointment}
/>

    const deleteAppointment = (indexToDelete) => {
  const newList = appointments.filter((_, index) => index !== indexToDelete);
  setAppointments(newList);
}
      <AppointmentList appointments={appointments} />
      <DailyTotal appointments={appointments} />
    </div>
  );
}

export default App;
