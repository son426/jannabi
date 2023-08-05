import Spinner from "@/data/images/common/spinner.gif";

function Loading() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={Spinner} alt="" />
      </div>
    </>
  );
}
export default Loading;
