import Animation from "@/src/components/animation"
import ContactForm from "@/src/components/contactform/contactfrom"
import styles from "@/styles/home/contact.module.scss"
import { Col, Container, Row } from "react-bootstrap"


const Contact = ({ page }) => {
    return (
        <section className={`${styles.contactSec} p-100 ${page === "contact" ? styles.contactStyle : ""}`}>
            <Container className="h-100">
                <Row>
                    <Col xxl={12} lg={12} md={12} className="my-auto">
                        <div className={styles.contactBg}>
                            <h3 className="spacing">Contact Us</h3>
                            <h2>Book a meeting with a member of our team to learn more and get a quote today!</h2>
                            <Row className="h-100">
                                <Col xxl={6} lg={6} md={6} className="my-auto">
                                    <Animation />
                                </Col>
                                <Col xxl={6} lg={6} md={6} className="my-auto">
                                    <h2>Get Quote</h2>
                                    <ContactForm />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Contact