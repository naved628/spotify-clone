
import { FaSearch, FaHome, FaPlus } from "react-icons/fa";
import Button from "../components/Button";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const artists = [
  { name: "Pritam", image: "/images/pritam.jpg" },
  { name: "Arijit Singh", image: "/images/arijit.jpg" },
  { name: "A.R. Rahman", image: "/images/arrahman.jpg" },
  { name: "Sachin-Jigar", image: "/images/sachin-jigar.jpg" },
  { name: "Vishal-Shekhar", image: "/images/vishal-shekhar.jpg" },
  { name: "Atif Aslam", image: "/images/atif.jpg" },
];

const albums = [
  { name: "Glory", artist: "Yo Yo Honey Singh", image: "/images/glory.jpg" },
  { name: "Aashiqui 2", artist: "Mithoon, Ankit Tiwari", image: "/images/aashiqui2.jpg" },
  { name: "Yeh Jawaani Hai Deewani", artist: "Pritam", image: "/images/yjhd.jpg" },
  { name: "Who (Remixes)", artist: "Jimin", image: "/images/who.jpg" },
  { name: "Making Memories", artist: "Karan Aujla, Ikky", image: "/images/memories.jpg" },
  { name: "Mismatched: Season 3", artist: "Mismatched Cast", image: "/images/mismatched.jpg" },
];

const fetchFromSpotify = async (test) => {
  const res = await fetch(`https://api.spotify.com/v1/${test}`, {
    headers: {
      Authorization: `Bearer YOUR_SPOTIFY_ACCESS_TOKEN`,
    },
  });
  return res.json();
};

const Home = () => {

  const [newReleases, setNewReleases] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchFromSpotify("browse/new-releases").then(data => setNewReleases(data.albums.items));
    fetchFromSpotify("browse/featured-playlists").then(data => setFeaturedPlaylists(data.playlists.items));
    fetchFromSpotify("browse/categories").then(data => setGenres(data.categories.items));
    fetchFromSpotify("artists").then(data => setArtists(data.artists.items));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-full flex">
      {/* Sidebar */}
      
      {/* Main Content */}
      <div className="w-4/5 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Header />
        </div>

        <div className="bg-black text-white min-h-screen w-full flex flex-col md:flex-row">
      {/* Sidebar - Your Library */}
      <div className="w-full md:w-3/5 bg-gray-900 p-4 h-auto md:h-screen">
        <div className="flex items-center gap-2 mb-6">
          <FaHome size={24} />
          <h1 className="text-lg font-bold">Your Library</h1>
        </div>
        <Button className="w-full mb-4 flex items-center gap-2">
          <FaPlus /> Create Playlist
        </Button>
        <Button className="w-full">Browse Podcasts</Button>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-4/5 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full md:w-1/3">
            <input type="text" placeholder="What do you want to play?" className="w-full p-2 pl-8 rounded bg-gray-800 text-white" />
            <FaSearch className="absolute left-2 top-2 text-gray-400" />
          </div>
          <div>
            <Button className="mr-4 hidden md:inline">Sign up</Button>
            <Button className="bg-white text-black">Log in</Button>
          </div>
        </div>

        {/* Popular Artists Section */}
        <h2 className="text-xl font-bold mb-4">Popular Artists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {artists.map((artist, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={artist.images[0]?.url} alt={artist.name} className="w-20 h-20 rounded-full" />
              <p className="mt-2 text-sm">{artist.name}</p>
            </div>
          ))}
        </div>

        {/* Popular Albums and Singles */}
        <h2 className="text-xl font-bold mt-6 mb-4">Popular Albums and Singles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {newReleases.map((album, index) => (
            <div key={index} className="flex flex-col">
              <img src={album.images[0].url} alt={album.name} className="w-full h-40 rounded-lg" />
              <p className="mt-2 font-semibold">{album.name}</p>
              <p className="text-sm text-gray-400">{album.artists[0].name}</p>
            </div>
          ))}
        </div>

        {/* Featured Playlists */}
        <h2 className="text-xl font-bold mt-6 mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuredPlaylists.map((playlist, index) => (
            <div key={index} className="flex flex-col">
              <img src={playlist.images[0].url} alt={playlist.name} className="w-full h-40 rounded-lg" />
              <p className="mt-2 font-semibold">{playlist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Home;
