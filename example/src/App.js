import useFetch from "./Hooks/useFetch";

function App() {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=f5604f45a67acfff1cd1e7f5065da619"
  );
  console.log(data);
  return (
    <div>
      {data.results.map((e) => (
        <div>
          {e.id}
          <img src="themoviedb.org/t/p/original/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg" />
        </div>
      ))}
    </div>
  );
}

export default App;
