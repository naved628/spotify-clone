import { useSelector, useDispatch } from "react-redux";
import { pauseSong } from "../redux/playerSlice";
import { FaPause, FaPlay } from "react-icons/fa";

const Player = () => {
  const { currentSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  if (!currentSong) return null;

  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg">{currentSong.title}</h3>
        <p className="text-sm text-gray-400">{currentSong.artist}</p>
      </div>
      <button
        onClick={() => dispatch(pauseSong())}
        className="text-white bg-green-500 p-3 rounded-full"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default Player;
