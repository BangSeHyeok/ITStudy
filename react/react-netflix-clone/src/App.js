import requests from './api/requests';
import './App.css';
import Banner from './components/Banner';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Row } from './components/Row';
import {Routes,Route} from 'react-router-dom';
import {MainPage,DetailPage,SearchPage} from './pages/**';

const Layout = () =>{
  return(
    <div>
      <Nav />
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage />}/>
          <Route path=':movieId' element={<DetailPage />}/>
          <Route path='search' element={<SearchPage />}/>
        </Route>
      </Routes>
      {/* <Nav/>
      <Banner/>

      <Row 
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow
     />
     <Row
      title="Trending Now"
      id="TN"
      fetchUrl = {requests.fetchTrending}
     />
     <Row
      title="Top Rated"
      id="TR"
      fetchUrl = {requests.fetchTopRated}
     />
      <Row
      title="Action Movies"
      id="AM"
      fetchUrl = {requests.fetchActionMovies}
     />

    <Row
      title="Comedy Movies"
      id="CM"
      fetchUrl = {requests.fetchComedyMovies}
     />
     <Footer/> */}
    </div>
  );
}

export default App;
