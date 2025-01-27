import styles from "@/styles/home/services.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ServicesSlider from "@/src/components/servicesslider"
import Service09 from "media/home/services/Logo-Animation.webp"
import Service08 from "media/home/services/Video-Editing.webp"
import Service07 from "media/home/services/Whiteboard.webp"
import Service06 from "media/home/services/Motion-Animation.webp"
import Service05 from "media/home/services/2D-Animation.webp"
import Service04 from "media/home/services/Real-Time-Rendering.webp"
import Service03 from "media/home/services/Hybrid-Animation.webp"
import Service02 from "media/home/services/Architectural-Visualization.webp"
import Service01 from "media/home/services/Cel-Animation.webp"
import Service10 from "media/home/services/3D-Animation.webp"
import Service11 from "media/home/services/Infographics.webp"
import Service12 from "media/home/services/Commercials.webp"
import Service13 from "media/home/services/Music-Video-Animation.webp"


const OPTIONS = { align: 'start', loop: true }
const SLIDES = [
    {
        name: "2D Animation",
        txt: "We excel in 2D video animation services, utilizing advanced software and techniques.",
        img: Service05.src,
        link: "#",
    },
    {
        name: "3D Animation",
        txt: "We excel in 3D video animation services, utilizing advanced software and techniques.",
        img: Service10.src,
        link: "#",
    },
    {
        name: "Cel Animation",
        txt: "We leverage traditional cel animation techniques with modern efficiency. Our animation video service process involves hand-drawing keyframes.",
        img: Service01.src,
        link: "#",
    },
    {
        name: "Architectural Visualization",
        txt: "Our video animation company employs advanced 3D modeling software and physically-based rendering engines to create hyper-realistic architectural visualizations.",
        img: Service02.src,
        link: "#",
    },
    {
        name: "Hybrid Animation",
        txt: "Our video animation agency has pioneered our hybrid animation techniques, combining vector-based 2D animation with procedural 3D systems.",
        img: Service03.src,
        link: "#",
    }, {
        name: "Real-Time Rendering",
        txt: "Our rendering experts harness the power of real-time rendering using cutting-edge GPUs and optimized shading languages.",
        img: Service04.src,
        link: "#",
    },

    {
        name: "Motion Animation",
        txt: "Our motion graphics video animation service combines graphic design principles with animation techniques to create visually compelling content.",
        img: Service06.src,
        link: "#",
    },
    {
        name: "Whiteboard",
        txt: "We specialize in whiteboard animation video services, crafting engaging, hand-drawn visuals that simplify complex ideas.",
        img: Service07.src,
        link: "#",
    },
    {
        name: "Video Editing & Compositing",
        txt: "Our video editing and compositing services enhance and refine your footage with precision. We use state-of-the-art editing softwares.",
        img: Service08.src,
        link: "#",
    },
    {
        name: "Logo Animations",
        txt: "We bring logos to life with dynamic animations that enhance brand identity. Using advanced motion design software.",
        img: Service09.src,
        link: "#",
    },
    {
        name: "Infographics",
        txt: "Our animated service for infographics turns data into engaging visual stories using a blend of graphic design software.",
        img: Service11.src,
        link: "#",
    },
    {
        name: "Commercials",
        txt: "Our commercial animated video services are designed to captivate and convert. We utilize high-end animation for brands.",
        img: Service12.src,
        link: "#",
    },
    {
        name: "Music Video Animation",
        txt: "Our video animation services cover concept development, animation, and final editing, delivering a unique visual experience.",
        img: Service13.src,
        link: "#",
    }
]

const Services = () => {
    return (
        <section className={`${styles.servicesSec} p-100`}>
            <Container>
                <Row>
                    <Col xl={12} lg={12}>
                        <div className={styles.servicesBg} >
                            <h2 className="text-center">From Vision to Animation: Premier Video Animation Services</h2>
                            <ServicesSlider slides={SLIDES} options={OPTIONS} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services