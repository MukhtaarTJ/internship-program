import React from 'react'
import styles from "./Intro.module.css"
import { Container, Row , Col} from 'react-bootstrap'
import PieImage from "../../../Assets/PieImage.png"
import PiePercentage from "../../../Assets/PiePercentage.png"
const Intro = () => {
  return (
    <Container className={styles.container} fluid>
     <Row className={styles.intro_container}>
        <Col>
        <img src={PiePercentage} alt="" className={styles.pie_percent}/>
        <img src={PieImage} alt=""  className={`img-fluid ${styles.pie_image}`}/>
        </Col>
        <Col>2</Col>
       
     </Row>
    </Container>
  )
}

export default Intro
