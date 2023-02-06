import { useContext } from "react";
import "./App.css";
import DetailSong from "./components/DetailSong/DetailSong";
import ListSongs from "./components/ListSongs/ListSongs";
import Navbar from "./components/Navbar/Navbar";
import Playing from "./components/Playing/Playing";
import { Context } from "./utils/ContextApi";

function App() {
  const ContextSongs=useContext(Context)
  const {dataSongs}=ContextSongs
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player "> 
        <DetailSong />
        <ListSongs dataSongs={dataSongs}/>
      </div>
      <Playing />
    </div>
  );
}

export default App;
