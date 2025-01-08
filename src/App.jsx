import JobsList from "./components/JobsList";
import TopFilters from "./components/TopFilters";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { appliedFilters } = useGlobalContext();
  return (
    <main className="min-h-screen bg-Light-Grayish-Cyan-(Background)">
      <div className="h-[155px] bg-Desaturated-Dark-Cyan bg-[url('images/bg-header-mobile.svg')] bg-cover bg-center md:bg-[url('images/bg-header-desktop.svg')] relative"></div>
      {appliedFilters.length > 0 && <TopFilters />}

      <JobsList />
    </main>
  );
}

export default App;
