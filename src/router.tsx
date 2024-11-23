import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashbordView from "./views/DashbordView";




export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" element={<DashbordView/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
