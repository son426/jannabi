import { BrowserRouter, Routes, Route } from "react-router-dom";
import WritingPage from "./pages/writing/writing";
import Main from "./pages/main/main";
import Test from "./pages/test/test";
import Intro from "./pages/intro/intro";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
