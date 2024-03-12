import { Sidebar } from "./side-bar";
import CardsPage from "./cards-page";

function App() {
  return (
    <div className="w-full lg:h-screen lg:flex lg:flex-cols text-center">
      <Sidebar />
      <CardsPage />
    </div>
  );
}

export default App;
