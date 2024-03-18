import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice.js"
import { useSelector } from "react-redux";
import {selectDisplay} from './redux/slices/displayCountrySlice.js'

function App() {
    let potentials = useSelector(selectPotentials);
    console.log(potentials);

    const currentDisplay = useSelector(selectDisplay);
    console.log("Display:",currentDisplay )

    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay/>}
        </div>
    );
}

export default App;
