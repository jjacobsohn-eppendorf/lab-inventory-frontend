import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MainNav from '../components/MainNav';
import { useNavigation } from 'react-router-dom';


export default function App() {
  const navigation = useNavigation();
  return (
    <div id="app">
      {navigation.state === "loading" && <div>loading</div>}
      <Header />
      <main className="row flex-column flex-md-row g-0 overflow-hidden">
        <div className="col-md-3 text-bg-dark">
          <MainNav />
        </div>
        <div className="col-md-9 h-100">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
