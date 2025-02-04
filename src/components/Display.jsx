import { Route, Routes, useLocation } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
import { useEffect, useRef } from "react";
import ExploreSection from "./ExploreSection";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location?.pathname.includes("album");
  const bgColor =
    albumsData?.find((album) => album.id === location.pathname.split("/").pop())
      ?.bgColor || "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg: w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<ExploreSection />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
