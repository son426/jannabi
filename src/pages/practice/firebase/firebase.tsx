import Auth from "./auth";
import Crud from "./crud";
import Image from "./image";

function Firebase() {
  return (
    <>
      <Auth />
      <Crud />
      <Image />
    </>
  );
}

export default Firebase;
