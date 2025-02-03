import { useDispatch } from "react-redux";
import { playSong } from "../redux/playerSlice";

const songs = [
  { id: 1, title: "Song One", artist: "Artist A", url: "/song1.mp3" },
  { id: 2, title: "Song Two", artist: "Artist B", url: "/song2.mp3" },
];

const SongList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {songs.map((song) => (
        <div
          key={song.id}
          className="flex justify-between items-center p-3 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
          onClick={() => dispatch(playSong(song))}
        >
          <div>
            <h3 className="text-lg font-semibold">{song.title}</h3>
            <p className="text-sm text-gray-400">{song.artist}</p>
          </div>
          <button className="bg-green-500 px-4 py-2 rounded text-white">Play</button>
        </div>
      ))}
    </div>
  );
};

export default SongList;
