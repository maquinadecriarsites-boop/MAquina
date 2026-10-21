const form = document.querySelector("#booking-form");
const dateInput = document.querySelector("#date");
const result = document.querySelector("#booking-result");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString().split("T")[0];
  dateInput.min = localToday;
}

const phoneInput = document.querySelector("#phone");
if (phoneInput) {
  phoneInput.addEventListener("input", () => {
    const digits = phoneInput.value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) phoneInput.value = digits;
    else if (digits.length <= 7) phoneInput.value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    else phoneInput.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  });
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const appointment = {
    name: String(data.get("name")).trim(),
    phone: String(data.get("phone")).trim(),
    service: String(data.get("service")),
    date: String(data.get("date")),
    time: String(data.get("time")),
    notes: String(data.get("notes") || "").trim()
  };

  const [year, month, day] = appointment.date.split("-");
  const readableDate = new Date(Number(year), Number(month) - 1, Number(day))
    .toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });

  const message = [
    "Olá! Gostaria de solicitar um agendamento no Ateliê Bela. ✨",
    "",
    `Nome: ${appointment.name}`,
    `WhatsApp: ${appointment.phone}`,
    `Serviço: ${appointment.service}`,
    `Data: ${readableDate}`,
    `Horário desejado: ${appointment.time}`,
    appointment.notes ? `Observações: ${appointment.notes}` : "",
    "",
    "Poderiam confirmar a disponibilidade, por favor?"
  ].filter(Boolean).join("\n");

  result.textContent = "Seus dados estão prontos. Vamos abrir o WhatsApp para você enviar a solicitação.";
  const whatsappNumber = ""; // Configure o número do studio com DDI e DDD, somente números.
  if (!whatsappNumber) {
    result.textContent = "Demonstração: formulário validado! Para enviar a solicitação, configure o número de WhatsApp do studio no arquivo script.js.";
    const preview = document.createElement("p");
    preview.className = "message-preview";
    preview.textContent = message;
    result.replaceChildren(document.createTextNode("Demonstração: formulário validado. Configure o WhatsApp do studio para receber pedidos reais."), preview);
    return;
  }
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});