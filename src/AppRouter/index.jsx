import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "../Components/Home"

export const AppRouter = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}