import Patient from "../components/Patient";
import { patients } from "../data/db";

export default function DashbordView() {
  return (
    <section className="bg-white p-10">
        {patients.map((patient) => (
          <Patient key={patient.id} patient={patient} />
        ))}
      </section>
  )
}
