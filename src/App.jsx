import Login from "./Login/Login";
import Register from "./Register/Register";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Login /> */}
      <Register />
    </>
  );
};

export default App;
