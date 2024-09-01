import Download from "./components/MainPage/Download";
import Information from "./components/MainPage/Information";
import Intro from "./components/MainPage/Intro";
import JoinUs from "./components/MainPage/JoinUs";
import FeaturePage from "./pages/FeaturePage";


function App() {
 

  return (
    <>
      <Intro />
      <FeaturePage />
      <Information/>
      <JoinUs/>
      <Download/>
    </>
  );
}

export default App;
