import { GetStaticProps } from "next";
import DateComparisonForm from "./components/DateComparisonForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold text-center">Date Comparator</h1>

      <DateComparisonForm />
    </main>
  )
}
