import styled from "styled-components";
import Videos from "./components/Videos";
import { useGlobalContext } from "./context/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
function App() {
  const g = useGlobalContext();
  console.log(g);
  return (
    <BrowserRouter>
      <AppStyled className="App">
        <h1>Video Uploader</h1>
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="/videos/:id" element={<VideoPlayer />} />
        </Routes>
        <Videos />
      </AppStyled>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  padding: 3rem 18rem;
  h1 {
    color: #fff;
    background: linear-gradient(to right, #00b894 40%, #705df2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .upload {
    display: flex;
    justify-content: flex-start;
  }
`;

export default App;
