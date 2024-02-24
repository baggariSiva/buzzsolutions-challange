import { useState } from "react";

import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <ImageContainer searchQuery={searchQuery} />
    </>
  );
}

export default App;
