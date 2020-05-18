import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Link } from '@material-ui/core';
import { Col, Card, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import image from '../../build/assets/images/'

const Home = () => {
    const styles = {
        image: {
            height: '16em',
            // borderRadius: 25,
            // marginLeft: 25
        }
    };

    return (
        <LazyHero 
            imageSrc="https://unsplash.it/2000/1000"
            minHeight='100vh'
        >
        <Container >
            <Row>
                <Col xs={6} md={4}>
                    <Image style={styles.image} src="./assets/images/DSC_0131.jpg" rounded />
                </Col>
            </Row>
            
            <Card style= {{background: '#ffffff'}}>
                <Card.Body>
                {/* /<Card.Img style={styles.image} variant="bottom" src='./assets/images/DSC_0131.jpg' />  */}
                    <Card.Title>About Me</Card.Title>
                    
                    {/* variant="top" */}
                    <Card.Text>
                        You may not guess by this dapper picture of me in a button down shirt, but this sweet "young" man
                        went to school for underwater construction. Yes, I was once a guy who got my hands dirty, dipped tobacco, 
                        and cursed like a sailor. It turns out that my mother's prayers worked and I am now persuing a career as a 
                        software developer; and loving it!
                    </Card.Text>
                    <Card.Text>
                        If you are ever looking for me outside of office hours, I can promise that you will not find me inside any
                        building. I love to camp, hike, play sports and fully enjoy this beautiful planet. When I think of the perfect day,
                        I'm reminded of a beautiful (but dangerous) hike I took last year called 
                        <Link target="_blank" href="https://utah.com/zion-national-park/angels-landing"> Angel's Landing</Link>.
                    </Card.Text>
                    <Card.Text>
                        Back in real life I work at a small tech company in Frisco, Texas. We develop software that sends out automated
                        calls and text messages as part of an emergency notification system. I support the platform that sends out the 
                        messages. I am lucky to work for a company that lets me experiment with my skills and morph into an engineer as time
                        goes on.
                    </Card.Text>
                    <Card.Text>
                        All in all, I'm a lucky guy who lives a life I love every day!
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        </LazyHero>
    );
};

export default Home;
