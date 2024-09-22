import "./assets/CSS/something.css";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import AllSortsOfThingsPage from "./Pages/AllSortsOfThingsPage";
import AllCategoriesPage from "./Pages/AllCategoriesPage";
import CatTypesPage from "./Pages/CatTypesPage";
import CatDescriptionPage from "./Pages/CatDescriptionPage";

function App() { 
  return (
  <>
    <Header/>

    <main>
     <Routes>
      <Route path="/" element={<AllSortsOfThingsPage />}/>
      <Route path="/main" element={<AllCategoriesPage />}/>
      <Route path="/cats/:id" element={<CatTypesPage />}/>
      <Route path="/cat/info/:id" element={<CatDescriptionPage />}/>
     </Routes>
    </main>
  </>
  );
}

export default App;
