import { Route, Routes } from "react-router";

import Header from "./components/Header";
import AddExpense from "./components/AddExpense";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TrackExpense from "./components/TrackExpense";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/addExpense" Component={AddExpense} />
        <Route path="/trackExpense" Component={TrackExpense} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
