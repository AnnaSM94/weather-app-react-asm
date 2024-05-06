import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather defaultCity="Leeds" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/AnnaSM94"
              target="_blank"
              rel="noreferrer"
            >
              Anna Serra
            </a>
            , code is open-sourced on{" "}
            <a
              href="https://github.com/AnnaSM94/weather-app-react-asm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://weather-app-react-asm.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
