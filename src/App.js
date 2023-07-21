import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you?', likes: 30},
        {id: 2, message: 'It is my first props', likes: 20},
        {id: 3, message: 'Hello world', likes: 18},
        {id: 4, message: 'Hello 1111 world', likes: 10},
    ]

    let dialogsData = [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Basya'},
        {id: 3, name: 'Dasya'},
        {id: 4, name: 'Masya'},
        {id: 5, name: 'Fasya'},
        {id: 6, name: 'Gasya'},
        {id: 7, name: 'Dasya'},
        {id: 8, name: 'Sasya'},
        {id: 9, name: 'Pasya'},
    ];

    let messagesData = [
        {id: 1, message: 'I'},
        {id: 2, message: 'am'},
        {id: 3, message: 'dummy'},
        {id: 4, message: 'and'},
        {id: 5, message: 'your'},
        {id: 6, message: 'mother'},
        {id: 7, message: 'is'},
        {id: 8, message: 'my'},
        {id: 9, message: 'mother'},
        {id: 10, message: '!!!!'},
    ];

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile postsData={postsData}/>}/>
                        <Route path="/dialog"
                               element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
