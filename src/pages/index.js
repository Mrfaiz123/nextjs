import Accessories from "../../components/Accessories";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import PreNav from "../../components/prenav";
import Selling2 from "../../components/sellin2";
import Selling3 from "../../components/selling3";
import Slider from "../../components/slider";
import TopSelling from "../../components/topselling";


export default function Home() {
  return (
    <>
      <PreNav/>
      <Hero/>
      <Slider/>
      <TopSelling/>
      <Selling2/>
      <Accessories/>
      <Selling3/>
      <Footer/>
    </>
  )
}
