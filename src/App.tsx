import Main from "./pages/Main/Main";
//import {Route, useLocation} from "wouter";
import Cars from "./pages/Cars/Cars";
import Car from "./pages/Car/Car";
import {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import {useAppDispatch} from "./hooks/redux";
import {fetchCars} from "./store/reducers/ActionCreators";
import {AppSlice} from "./store/reducers/AppSlice/AppSlice";
import {Route, Routes, useLocation} from "react-router-dom";


function App() {

    const dispatch = useAppDispatch()
    const {setMode} = AppSlice.actions

    useEffect(()=>{dispatch(fetchCars())},[])
  /*useEffect(() => {
    cars.fetchCars();
    app.setMode()
  }, [])
 */
    const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);





  window.onresize = () => {
    dispatch(setMode())
  }


  return (
      <>
        <Navbar/>

              <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/cars" element={<Cars/>}/>
                  <Route path="/cars/:brand" element={<Cars/>}/>
                  <Route path="/car/:id" element={<Car />}/>
                  <Route path="/error" element={<Error />}/>
              </Routes>

         

        <Footer/>
      </>

  );
}

export default App;
