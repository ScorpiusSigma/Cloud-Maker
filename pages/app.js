import ImgProxy from "../components/app/ImgProxy";
import Navbar from "../components/template/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="text-white bg-[#0F1721] w-full h-full flex justify-center items-center min-h-screen">
        <ImgProxy />
      </div>
    </>
  );
};

export default App;
