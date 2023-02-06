import React, { createContext, useState } from "react";
import dataSongs from "../data/song.json";
export const Context = createContext();
const ContextApi = ({ children }) => {
  const [song, setSong] = useState(dataSongs[0]);
  const handleChangeSong=(songID)=>{
    console.log(songID)
    const currentSong=dataSongs.find(x=>x.id===songID)
    setSong(currentSong)
  }

  return (
    <Context.Provider value={{ dataSongs, song, setSong ,handleChangeSong}}>
      {children}
    </Context.Provider>
  );
};

export default ContextApi;
