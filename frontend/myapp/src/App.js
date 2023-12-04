import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Diaries from "./diaries/Diaries";
import Auth from "./auth/Auth";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
