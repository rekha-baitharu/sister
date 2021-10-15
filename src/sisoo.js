import React from "react";
import "./App.css";
import { Button, Typography, Container, Grid } from "@material-ui/core";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Redirect } from "react-router-dom";
import siso1 from './Images/4.jpg';
import siso2 from './sb/1.jpg';
import siso3 from './sb/2.jpg';

export default class Sisoo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            next: ""
        }
    }
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }
    render() {
        if (this.state.first === "first") {
            return (
                <Redirect to="/siso" />
            )
        }
        if (this.state.next === "next") {
            return (
                <Redirect to="/sisooo" />
            )
        }
        return (
            <div>
                <div data-aos="zoom-in">
                    <Container style={{ backgroundColor: "teal" }}>
                        <h1 style={{ fontFamily: "serif", textAlign: "center" }}><i>Happy Birthday Sikha Baitharu!</i></h1>
                    </Container>
                </div>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={12} className="forImage">
                            <div data-aos="zoom-in">
                                <img src={siso1} className="proimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <div data-aos="zoom-in">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "lightblue", borderRadius: "100px" }}><b><i>
                                    Wishing a Happy Birthday to my amazing sister. I hope all your dreams will come true.
                                </i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 25, textAlign: "center" }}><i>
                                    Thanks for understanding me so much,
                                    I cannot imagine my life without your magical touch.
                                    I have always loved you and will continue to do so.
                                    You are the most amazing, beautiful and strongest person I’ve ever met.
                                    I’m really proud of you dear.
                                </i></Typography><br />
                            </div>
                        </Grid>
                    </Grid><br />
                </Container>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={6} className="forImage">
                            <div data-aos="zoom-out-right">
                                <img src={siso2} className="projectimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <div data-aos="zoom-out-left">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Happy Birthday Bestii!</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 35, textAlign: "center" }}><i>
                                Growing up, no one drove me crazier than you.
                                 Now, you’re the person I talk to when other people
                                  are driving me crazy (even you!) ;)
                                </i></Typography><br />
                            </div>
                        </Grid>
                    </Grid>
                </Container>

                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={6} className="forImage">
                            <div data-aos="zoom-out-right">
                                <img src={siso3} className="projectimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <div data-aos="zoom-out-left">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Happy Birthday Buddy!</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 35, textAlign: "center" }}><i>
                                    There might be thousands of sisters in this world, but to me,
                                    you are the best sister without any doubt.You are the reason
                                    for whom my childhood days were so colorful and I had so much fun.
                                    Thank you for all those wonderful memories.
                                </i></Typography><br />
                            </div>
                        </Grid>
                    </Grid>
                </Container>

                <Container fixed style={{ background: "teal", marginTop: 10 }} onClick={() => { this.setState({ first: "first" }) }}>
                    <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center", color: "black" }}><i><b>Previous</b></i></Typography>
                </Container>
                <Container fixed style={{ background: "teal", marginTop: 10 }} onClick={() => { this.setState({ next: "next" }) }}>
                    <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center", color: "black" }}><i><b>Next</b></i></Typography>
                </Container><br />
            </div>
        )
    }
}