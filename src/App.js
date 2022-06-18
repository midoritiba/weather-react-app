

function App() {
  return (
    <div className="container">

      <div className="title">
        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M43.9,-19.1C50,4.3,43,27,27.3,38.8C11.5,50.5,-13.2,51.4,-34.9,38C-56.6,24.6,-75.3,-3,-69,-26.7C-62.7,-50.4,-31.3,-70.3,-6.2,-68.3C19,-66.3,37.9,-42.4,43.9,-19.1Z" transform="translate(100 100)" />
        </svg>
        <h1>Weather App</h1>
      </div>

      <form>
          <label for="city">Enter a location for weather information ⛅</label>
          <input type="text" name="city" className="form-control" />
      </form>
     
    </div>
  );
}

export default App;
