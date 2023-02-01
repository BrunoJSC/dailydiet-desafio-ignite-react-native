export function formatDate(dateInMiliseconds: number, type: "date" | "time") {
  switch (type) {
    case "date":
      const formattedDate = new Date(dateInMiliseconds);
      const day = formattedDate.getDate().toString().padStart(2, "0");
      const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
      const year = formattedDate.getFullYear().toString().slice(2);

      const date = `${day}/${month}/${year}`;
      return date;

    case "time":
      return new Date(dateInMiliseconds).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    default:
      return new Date().toLocaleDateString();
  }
}
