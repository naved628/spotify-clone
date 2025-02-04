/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useRef } from "react";

export const SpotifyContext = createContext();
const SpotifyContextProvider = ({ children }) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [token, setToken] = useState(null);
  const [genres, setGenres] = useState([]);
  const [trendingArtist, setTrendingArtist] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [track, setTrack] = useState();
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // Fetch Spotify Access Token
  const getSpotifyToken = async () => {
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

    const authString = btoa(`${clientId}:${clientSecret}`);

    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authString}`,
        },
        body: "grant_type=client_credentials",
      });

      const data = await response.json();

      if (data.access_token) {
        setToken(data.access_token);
      }
    } catch (error) {
      console.error("Error fetching Spotify token:", error);
    }
  };

  // Fetch Genres (Categories)
  const fetchGenres = async (token) => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/browse/categories?country=IN",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      setGenres(data.categories.items);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const getTrendingArtistTracks = async (token, artistId) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=IN`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      setTrendingArtist(data?.tracks);
      return data.tracks;
    } catch (error) {
      console.error("Error fetching artist top tracks:", error);
      return [];
    }
  };

  // Fetch New Releases (Released This Week)
  const fetchNewReleases = async (token) => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/browse/new-releases?country=IN",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      setNewReleases(data.albums.items);
    } catch (error) {
      console.error("Error fetching new releases:", error);
    }
  };

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const playWithId = async (id) => {
    await setTrack(id);
    await audioRef.current.play();
    setPlayStatus(true);
  };



  // Fetch all Spotify token
  useEffect(() => {
    getSpotifyToken();
  }, []);

  useEffect(() => {
    if (token) {
      fetchGenres(token);
      getTrendingArtistTracks(token, "4YRxDV8wJFPHPTeXepOstw"); // trending artist getting from spotify web api
      fetchNewReleases(token);
    }
  }, [token]);


  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    genres,
    trendingArtist,
    newReleases,
    playWithId,
    track,
    setTrack,
    play,
    playStatus,
    setPlayStatus,
    time,
    setTime,
  };

  return (
    <SpotifyContext.Provider value={contextValue}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContextProvider;
