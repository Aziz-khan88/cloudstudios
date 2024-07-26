import BannerLogos from "@/src/components/bannerlogos";
import Services from "@/src/app/home/services";
import AboutSec from "@/src/app/home/aboutsec";
import ExperienceSec from "@/src/app/home/experience";
import CaseStudy from "@/src/app/home/casestudy";
import WorkSec from "@/src/app/home/work";
import Achievement from "@/src/app/home/achievement";
import Testimonial from "@/src/app/home/testimonial";
import Contact from "@/src/app/home/contact";
import MainBanner from "@/src/components/mainbanner";
import BannerBg from "media/home/banner/BannerBg1.webp"


const banner = {
  rating: "The New Frontier in Animation",
  title: "Revolutionize Your Digital Content with Cloud Studios Inc.",
  txt: (
    <>
      <p>Engage Your Audiences & Boost Your Reach Today! We engineer dynamic video content, lead advancements in cutting-edge animation technology, and create immersive digital worlds to push your brand into new virtual frontiers</p>
    </>
  ),
  img: BannerBg.src,
  link: "#"

}

export default function Home() {
  return (
    <>
      <MainBanner data={banner} />
      <BannerLogos />
      <Services />
      <AboutSec />
      <ExperienceSec />
      <CaseStudy />
      <WorkSec />
      <Achievement />
      <Testimonial />
      <Contact />
    </>
  );
}
