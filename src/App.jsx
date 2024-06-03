import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Proposal from "./screens/Proposals/Proposals";
import Issued from "./screens/Issued/Issued";
import DashBoard from "./screens/Dashboard/Dashboard";
import InwardForm from "./Components/Forms/InwardForm";
import SearchInward from "./screens/Search/SearchInward";
import InwardForm2 from "./Components/Forms/InwardForm2";
import InwardList from "./screens/InwardList/InwardList";
import InwardList2 from "./screens/inwardList2/InwardList2";
import DirectSearch from "./screens/DirectSearch/DirectSearch";

function App() {

  return (
    <>
      <Header />
      <div className="main_body">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path="/proposal/issued" element={<Issued />} />
            <Route path="/issued" element={<Issued />} />
            <Route path="/inwardForm" element={<InwardForm/>}></Route>
            <Route path="/searchInward" element={<SearchInward/>}></Route>
            <Route path="/inwardForm2" element={<InwardForm2/>}></Route>
            <Route path="/inwardList" element={<InwardList/>}></Route>
            <Route path="/inwardList2" element={<InwardList2></InwardList2>}></Route>
            <Route path="/directSearch" element={<DirectSearch></DirectSearch>}></Route>
            
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

