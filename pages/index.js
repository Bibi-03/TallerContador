
import Contador from "../components/contador";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col ">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 py-8">Método contador </h1>
      <Contador />
    </div>
  )
}

