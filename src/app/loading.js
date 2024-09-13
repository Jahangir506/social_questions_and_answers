import PuffLoader from "react-spinners/ClipLoader";

const loading = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
        <PuffLoader/>
      </div>
    </>
  );
};
export default loading;
