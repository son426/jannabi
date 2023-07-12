import { useParams } from "react-router-dom";
import MainPage from "../main/mainPage";

function IrregularDetailPage() {
  const { id } = useParams();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        {id}번 비정규앨범 상세
      </div>
    </>
  );
}

export default IrregularDetailPage;
