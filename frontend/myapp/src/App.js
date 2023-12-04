import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Diaries from "./diaries/Diaries";
import Auth from "./auth/Auth";
import { useSelector } from "react-redux";
import Add from "./diaries/Add";
import Profile from "./profile/Profile";

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
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
          <Route path="/add" element={<Add />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
