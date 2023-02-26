import './App.css';
import React from 'react';

const App = () => {
    return (
        <div className="AppWrap">
            <header className='header'>
                <img src="https://avatars.mds.yandex.net/i?id=0efdf3fdecbfb91aacd73a55dcd92eb005daddc2-7755770-images-thumbs&n=13" alt="bird"/>
            </header>
            <nav className='nav'>
                <ul>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Js</li>
                </ul>
            </nav>
            <div className='container'>
                <img src="https://avatars.mds.yandex.net/i?id=e13ea30af0fcf6bd906a81b472817952961f9e6e-7947495-images-thumbs&n=13" alt="It-Kamasutra"/>
            </div>
        </div>
    );
}

export default App;
