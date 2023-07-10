import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/intro/introPage";
import MainPage from "./pages/main/mainPage";
import RegularDetailPage from "./pages/regular1/regularDetailPage1";
import IrregularDetailPage from "./pages/irregularDetail/irregularDetailPage";
import RegularDetailPage1 from "./pages/regular1/regularDetailPage1";
import RegularDetailPage2 from "./pages/regular2/regularDetailPage2";
import RegularDetailPage3 from "./pages/regular3/regularDetailPage3";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/regularDetail/1" element={<RegularDetailPage1 />} />
        <Route path="/regularDetail/2" element={<RegularDetailPage2 />} />
        <Route path="/regularDetail/3" element={<RegularDetailPage3 />} />
        <Route path="/irregularDetail/:id" element={<IrregularDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
