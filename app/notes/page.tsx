import { redirect } from "next/navigation";

export default function NotesPage() {
  // Базовый маршрут /notes перенаправляем на фильтр "all".
  redirect("/notes/filter/all");
}
