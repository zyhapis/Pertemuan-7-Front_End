import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import DataMovie from "../utils/constants/DataMovie";
import Addmovie from "../components/AddMovie/AddMovie";

const Main = () => {
  const [data, setData] = useState(DataMovie);

  return (
    <main>
      <Hero />
      <Movies data={data} setData={setData} />
      <Addmovie movie={data} setMovie={setData}/>
    </main>
  );
};

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
export default Home;
