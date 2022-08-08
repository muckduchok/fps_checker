import React, {useState} from 'react';
import Header from "../header/header";
import Game from "../game/game";
import Leaderboard from "../leaderboard/leaderboard";
import About from "../about/about";
import StartScreen from "../start-screen/start-screen";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './app.sass';

const App = () => {
    const [start, setStart] = useState(false);

    function updateData(value) {
        console.log('calling', value)
        setStart(value)
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Header updateData={updateData} start={start} ></Header>
                <Routes>
                    <Route exact path="/" element={<StartScreen />} />
                    <Route exact path="/game" element={<Game />} />
                    <Route exact path="/leaderboard" element={<Leaderboard />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
