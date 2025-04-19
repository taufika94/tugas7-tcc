import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotesList from "./components/NotesList";
import AddNotes from "./components/AddNotes";
import EditNotes from "./components/EditNotes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/"element={<NotesList/>}/>
          <Route path="add"element={<AddNotes/>}/>
          <Route path="edit/:id"element={<EditNotes/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
