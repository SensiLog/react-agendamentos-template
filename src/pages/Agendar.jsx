import React, { useEffect, useState } from "react";
import { fetchAvailableSlots } from "../components/agendar/utils/Utils";
import { FaCut, FaRegSmile } from "react-icons/fa";
import { GiBeard } from "react-icons/gi";
import { motion } from "framer-motion";

function Agendar() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [dates, setDates] = useState([]);

  const services = [
    { id: 1, name: "Corte de Cabelo", price: "R$ 50", icon: <FaCut size={30} className="text-primary" /> },
    { id: 2, name: "Barba", price: "R$ 30", icon: <GiBeard size={30} className="text-primary" /> },
    { id: 3, name: "Corte + Barba", price: "R$ 70", icon: <FaRegSmile size={30} className="text-primary" /> },
  ];

  useEffect(() => {
    const generateNext30Days = () => {
      const days = [];
      const today = new Date();
      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);
        days.push(date.toISOString().split("T")[0]);
      }
      setDates(days);
    };
    generateNext30Days();
  }, []);

  const handleDateSelection = async (date) => {
    setSelectedDate(date);
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      alert("Data inválida. Por favor, selecione uma data válida.");
      return;
    }
    try {
      const slots = await fetchAvailableSlots(date);
      setAvailableSlots(slots);
      setStep(3);
    } catch (error) {
      alert("Erro ao buscar horários disponíveis. Tente novamente.");
    }
  };

  const handleConfirm = async () => {
    if (!selectedService || !selectedSlot) {
      alert("Por favor, selecione um serviço e um horário.");
      return;
    }
    try {
      await fetch("http://localhost:3000/create-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          summary: selectedService.name,
          startTime: `${selectedSlot.date}T${selectedSlot.time}:00`,
          endTime: `${selectedSlot.date}T${parseInt(selectedSlot.time.split(":")[0]) + 1}:00:00`,
        }),
      });
      alert("Agendamento confirmado!");
      setStep(1);
    } catch (error) {
      alert("Erro ao criar evento. Tente novamente.");
    }
  };

  return (
    <div className="container py-5 mt-5">
      {step === 1 && (
        <div>
          <h2 className="text-center mb-4 text-primary">Escolha um Serviço</h2>
          <div className="row justify-content-center">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="col-6 col-sm-4 col-md-3 mb-4"
                onClick={() => { setSelectedService(service); setStep(2); }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card text-center shadow-sm p-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                  <div className="card-body">
                    {service.icon}
                    <h6 className="mt-2 text-dark">{service.name}</h6>
                    <p className="text-muted small">{service.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-center mb-4 text-secondary">Escolha uma Data</h2>
          <select className="form-select w-50 mx-auto" onChange={(e) => handleDateSelection(e.target.value)}>
            <option value="">Selecione um dia</option>
            {dates.map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </select>
          <button className="btn btn-secondary mt-3" onClick={() => setStep(1)}>Voltar</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-center mb-4 text-success">Horários disponíveis</h2>
          <div className="row justify-content-center">
            {availableSlots.length ? (
              availableSlots.map((slot, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 mb-4" onClick={() => { setSelectedSlot(slot); setStep(4); }}>
                  <div className="card text-center shadow-sm p-3 border-success">
                    <p className="mb-0">{slot.date} - {slot.time}</p>
                  </div>
                </div>
              ))
            ) : (<p className="text-center text-danger">Nenhum horário disponível.</p>)}
          </div>
          <button className="btn btn-secondary mt-3" onClick={() => setStep(2)}>Voltar</button>
        </div>
      )}
      {step === 4 && (
        <div className="text-center">
          <h2 className="mb-4 text-black">Resumo do Agendamento</h2>
          <p><strong>Serviço:</strong> {selectedService.name}</p>
          <p><strong>Data:</strong> {selectedSlot.date}</p>
          <p><strong>Horário:</strong> {selectedSlot.time}</p>
          <button className="btn btn-success" onClick={handleConfirm}>Confirmar</button>
          <button className="btn btn-secondary ms-3" onClick={() => setStep(3)}>Voltar</button>
        </div>
      )}
    </div>
  );
}

export default Agendar;