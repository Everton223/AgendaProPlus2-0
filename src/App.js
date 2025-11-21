import React, { useState } from "react";
import Header from "./components/Header";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
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
