import { BrowserRouter, Route, Routes } from "react-router-dom"
import { About, Blogs, BlogsDetails, Home, Layout, NoPage, PlacesRoute } from "./pages"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
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
