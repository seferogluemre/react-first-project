import "./App.css";
import Header from "./header";
import { movies } from "./data";
import Movie from "./movie";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="movies-container">
        {movies?.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
