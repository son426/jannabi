import { useParams } from "react-router-dom";

function IrregularDetailPage() {
  const { id } = useParams();

  return <>{id}번 비정규앨범 상세</>;
}

export default IrregularDetailPage;
