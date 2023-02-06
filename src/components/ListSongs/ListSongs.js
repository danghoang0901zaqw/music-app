import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/ContextApi";

const ListSongs = ({ dataSongs }) => {
  const {handleChangeSong,song}=useContext(Context)
  const [idSong, setIdSong] = useState(0);

  const handlePlayingSong = (id) => {
    handleChangeSong(id)
  };
  useEffect(()=>{
    setIdSong(song.id)
  },[song])
  return (
    <div className="col-span-2 overflow-auto">
      <table className="table-auto w-full">
        <thead className="h-12 ">
          <tr className="text-white">
            <th className="w-[10%]">No.</th>
            <th className="text-left">Name Song</th>
            <th className="w-[40%]">Singer</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSongs?.map((song) => (
            <tr
              onClick={() => handlePlayingSong(song.id)}
              className={`${
                idSong === song.id ? "text-teal-400 bg-slate-600 " : ""
              } bg-slate-800 h-12 cursor-pointer text-gray-500 hover:text-gray-400 hover:bg-slate-600 transition-all`}
              key={song.id}
            >
              <td className="text-center">{+song.id + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url} target="_blank">
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSongs;
