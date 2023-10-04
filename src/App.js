import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Row from "./Components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />

      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Adventure" fetchURL={requests.fetchAdventure} />
      <Row title="Random Movies" fetchURL={requests.fetchMovie} />
      <Row title="SCI-FI" fetchURL={requests.fetchSciFi} />
      <Row title="Western Movies" fetchURL={requests.fetchWestern} />
      <Footer />
    </div>
  );
}

export default App;
