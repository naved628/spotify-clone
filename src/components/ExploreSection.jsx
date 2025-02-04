import { useContext } from "react";
import { SpotifyContext } from "../context/SpotifyContext";
import GenresItem from "./GenresItem";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import Navbar from "./Navbar";

const ExploreSection = () => {
  const { genres, trendingArtist, newReleases } = useContext(SpotifyContext);
  return (
    <>
      <Navbar />
      <div>
        {/* Explore Genres */}
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Explore your genres</h1>
          {genres && genres.length > 0 ? (
            <div className="flex overflow-auto">
              {genres.map((item) => (
                <GenresItem
                  key={item.id}
                  name={item.name}
                  desc={item.name}
                  id={item.id}
                  image={item.icons[0]?.url}
                />
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Trending Artist */}
        <div>
          <h1 className="my-5 font-bold text-2xl">Trending Artist Tracks</h1>
          {trendingArtist && trendingArtist.length > 0 ? (
            <div className="flex overflow-auto">
              {trendingArtist.map((item) => (
                <AlbumItem
                  key={item?.id}
                  name={item?.name}
                  desc={item?.description}
                  id={item?.id}
                  image={item?.album?.images[0]?.url}
                />
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* New Releases */}
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Release this week songs</h1>
          {newReleases && newReleases.length > 0 ? (
            <div className="flex overflow-auto">
              {newReleases.map((item) => (
                <SongItem
                  key={item.id}
                  name={item.name}
                  desc={item.artists[0]?.name}
                  id={item.id}
                  image={item.images[0]?.url}
                />
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
