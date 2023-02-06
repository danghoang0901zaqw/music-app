import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Context } from "../../utils/ContextApi";

const Playing = () => {
  const { dataSongs, song, handleChangeSong } = useContext(Context);
  console.log(song);
  const songLength = dataSongs.length - 1;
  console.log(songLength);
  const handleClickNext = () => {
    handleChangeSong(song.id >= songLength ? 0 : +song.id + 1);
  };
  const handleClickPrevious = () => {
    handleChangeSong(song.id <= 0 ? songLength : song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="playing-song"
        src={song.url}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
};

export default Playing;
