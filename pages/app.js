import ImgProxy from "../components/app/ImgProxy";
import { AppProvider } from "../components/context/AppContext";
import Navbar from "../components/template/Navbar";

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <div className="text-white bg-[#0F1721] w-full h-full flex flex-col gap-5 p-10 pt-44 justify-center items-center min-h-screen">
        <ImgProxy />
      </div>
    </AppProvider>
  );
};

export default App;
