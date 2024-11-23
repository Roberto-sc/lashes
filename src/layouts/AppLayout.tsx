import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <header className="bg-gray-100 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div>
            <img src="" alt="Logo" />
          </div>

          <div>
            <h2 className=" text-2xl text-pink-800"> Lashes Nan</h2>
          </div>

          <div className="bg-pink-100 ">
            <button className="mx-3">Citas Anteriores</button>

            <button className="mx-3">Citas Agendadas</button>

            <button className="mx-3">Monto Diario</button>
          </div>
        </div>
      </header>

      <section className="max-w-screen-2xl mx-auto mt-10 p-5">
        <Outlet />
      </section>

      <footer className="py-5 ">
        <p className="text-center">
          {" "}
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
