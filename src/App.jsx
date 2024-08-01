import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { About, Blogs, BlogsDetails, Home, Layout, NoPage, PlacesRoute } from "./pages";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* A child route with no path that renders in the parent's outlet at the parent's URL, so
        the home route will render the child routes of the layout */}
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<BlogsDetails/>}/>
        <Route path="/places" element={<PlacesRoute/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
