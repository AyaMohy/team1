
import { Route, Routes } from "react-router-dom";
import {Home} from './pages/home';
import {AuthorDetails} from "./pages/authorDetailsPage";
import {PostDetailsPage} from "./pages/postDetailsPage";


function App() {
  
  return (

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/authors/:authorid" element={<AuthorDetails/>}/>
      <Route path="/posts/:postid" element={<PostDetailsPage/>}/>
    </Routes>
    
  );
}

export default App;
