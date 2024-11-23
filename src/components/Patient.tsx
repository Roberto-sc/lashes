import type { Patient } from "../types"


type PatientProps = {
  patient : Patient
}

export default function Patient({patient} : PatientProps) {
  return (

    
    <div className=" max-w-4xl mx-auto mt-2 mb-10 flex justify-between shadow-lg">
        <div className="text-pink-800 p-3">
          <p className="text-xl">Nombre : <span className="font-black">{patient.name}</span></p>

          <p className="text-xl">Día : <span className="font-black">{patient.date}</span></p>


          <p className="text-xl">Efecto : <span className="font-black">{patient.effect}</span></p>


          <p className="text-xl">Diseño : <span className="font-black">{patient.design}</span></p>


          <p className="text-xl">Técnica : <span className="font-black">{patient.tecnic}</span></p>

        </div>

        <div className="p-10 ">
            <button className="border-none rounded-3xl p-3 bg-pink-50">
              Editar
            </button>

        </div>
    </div>
  )
}
