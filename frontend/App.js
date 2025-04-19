import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotesList from "./src/components/NotesList";
import AddNotes from "./src/components/AddNotes";
import EditNotes from "./src/components/EditNotes";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import GlobalStyles from "./src/styles/GlobalStyles";

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
