import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { SpotifyContext } from "../context/SpotifyContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const { trendingArtist } = useContext(SpotifyContext);
  const trendingData = trendingArtist.find((track) => track.id === id);
  const { playWithId } = useContext(SpotifyContext);


  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={trendingData?.album?.images[0]?.url}
          alt=""
        />
        <div className="flex flex-col">
          <p>Trending</p>
          <h4 className="text text-2xl font-bold mb-4 md:text-5xl">
            {trendingData?.name}
          </h4>
          <h4>{trendingData?.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5 mr-2"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>. 1,323,154 likes . <b>10 songs </b>
            about 2 hr 30 mins
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p className="col-span-1 sm:col-span-2">
          <b className="mr-4">#</b> Title
        </p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>

      <hr />

      {trendingArtist.map((item, index) => {
        const formatDuration = (ms) => {
          const minutes = Math.floor(ms / 60000);
          const seconds = ((ms % 60000) / 1000).toFixed(0);
          return `${minutes}:${seconds.padStart(2, "0")}`;
        };

        return (
          <div
            key={index}
            onClick={() => playWithId(item?.id)}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <p className="text-white col-span-1 sm:col-span-2 flex items-center">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img
                className="inline w-10 mr-5"
                src={item?.album?.images[0]?.url}
                alt=""
              />
              {item.name}
            </p>
            <p className="text-[15px] hidden sm:block">
              {item?.album?.release_date}
            </p>
            <p className="text-[15px] text-center">
              {formatDuration(item?.duration_ms)}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default DisplayAlbum;
