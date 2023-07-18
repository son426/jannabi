import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/intro/introPage";
import MainPage from "./pages/main/mainPage";
import IrregularDetailPage from "./pages/irregularDetail/irregularDetailPage";
import RegularDetailPage1 from "./pages/regular1/regularDetailPage1";
import RegularDetailPage2 from "./pages/regular2/regularDetailPage2";
import RegularDetailPage3 from "./pages/regular3/regularDetailPage3";
import Practice from "./pages/practice/practice";
import Firebase from "./pages/practice/firebase/firebase";
import ShoutoutPage from "./pages/shoutout/shoutoutPage";
import { ScrollTop } from "./hooks/tools";

function Router() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/regularDetail/1" element={<RegularDetailPage1 />} />
        <Route path="/regularDetail/2" element={<RegularDetailPage2 />} />
        <Route path="/regularDetail/3" element={<RegularDetailPage3 />} />
        <Route path="/irregularDetail/:id" element={<IrregularDetailPage />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/shoutout" element={<ShoutoutPage />} />
        <Route path="/firebase" element={<Firebase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
