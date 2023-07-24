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
import state from "./redux/state";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebarData={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile pageData={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path="/dialog"
                           element={<Dialogs pageData={props.state.messagesPage}/>}/>
                    <Route path="/dialog/:id" element={<Dialogs pageData={props.state.messagesPage2}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
