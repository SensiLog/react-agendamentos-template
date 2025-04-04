import { gapi } from "gapi-script";

// Configurações do Google API
const CLIENT_ID = "795716820304-e42op9lhm5kq8l7sgc1dg73andaftjpe.apps.googleusercontent.com";
const API_KEY = "AIzaSyDCFjWVR6GHOhvENR9pT2jGYByHwFFtj9s";
const SCOPES = "https://www.googleapis.com/auth/calendar.events";
const CALENDAR_ID = "caiiochaves82@gmail.com"; // ID fixo do calendário

// Inicializa o Google API
const initializeGapi = async () => {
  return new Promise((resolve, reject) => {
    gapi.load("client:auth2", async () => {
      try {
        await gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
          scope: SCOPES,
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
};

// Função para buscar horários disponíveis no Google Calendar
export const fetchAvailableSlots = async (selectedDate) => {
  const timeMin = new Date(`${selectedDate}T00:00:00`).toISOString();
  const timeMax = new Date(`${selectedDate}T23:59:59`).toISOString();

  try {
    await initializeGapi();

    const response = await gapi.client.calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin,
      timeMax,
      singleEvents: true,
      orderBy: "startTime",
    });

    const events = response.result.items || [];
    return calculateAvailableSlots(events, selectedDate);
  } catch (error) {
    console.error("Erro ao buscar horários disponíveis:", error);
    return [];
  }
};

// Função para calcular horários disponíveis
const calculateAvailableSlots = (events, selectedDate) => {
  const workingHours = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
  const slots = [];

  // Normaliza o horário atual uma vez
  const now = new Date();
  const normalizedNow = normalizeDate(now);

  // Função auxiliar para verificar se o horário está ocupado
  const isSlotOccupied = (slotDateTime) => {
    return events.some((event) => {
      const eventStart = event.start?.dateTime ? new Date(event.start.dateTime) : null;
      const eventEnd = event.end?.dateTime ? new Date(event.end.dateTime) : null;

      return eventStart && eventEnd && slotDateTime >= eventStart && slotDateTime < eventEnd;
    });
  };

  workingHours.forEach((hour) => {
    const slotDateTime = new Date(`${selectedDate}T${hour}:00`);

    // Verifica se o horário já passou
    if (slotDateTime < normalizedNow) {
      return;
    }

    // Verifica se o horário está ocupado
    if (!isSlotOccupied(slotDateTime)) {
      slots.push({ date: selectedDate, time: hour });
    }
  });

  return slots;
};

// Função auxiliar para normalizar uma data (removendo segundos e milissegundos)
const normalizeDate = (date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    0,
    0
  );
};