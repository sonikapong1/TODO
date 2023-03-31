import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddDetail from "./component/AddDetail"
import Homepage from "./component/Homepage"

function App(){
    return(
        <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/add" element={<AddDetail/>}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App