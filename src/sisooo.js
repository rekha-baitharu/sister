import React from "react";
import "./App.css";
import { Button, Typography, Container, Grid } from "@material-ui/core";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Redirect } from "react-router-dom";
import siso1 from './sb/3.jpg';
import siso2 from './sb/4.jpg';
import siso3 from './sb/5.jpg';

export default class Sisooo extends React.Component {
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
                <Redirect to="/sisoo" />
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
                                    I want to wish a very Happy Birthday to the most happening and smart sister in this entire universe.
                                </i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 25, textAlign: "center" }}><i>
                                    I wonder that if everyone in this world could have a great sister
                                    like you think it would have been the greatest thing ever happened!
                                    And Yes Why do you worry about growing older, when you are like wine just getting better and better with age? ;)
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
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Happy Birthday Love!</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 35, textAlign: "center" }}><i>
                                    People believe that the heroes are one in many thousands, but I want to
                                    say that a sister like you is always one in a lifetime. So Just Be the way you are. Understand!
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
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Happy Birthday Badiiii!</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 35, textAlign: "center" }}><i>
                                    In the kaleidoscope of my life, you form the most beautiful patterns with the most vibrant colors.
                                    So, My crazy, loving, caring and fun sister,
                                    life without you would have been a nasty twister.
                                    So stay by my side as you always do.

                                </i></Typography><br />
                            </div>
                        </Grid>
                    </Grid>
                </Container>

                <Container fixed style={{ background: "teal", marginTop: 10 }} onClick={() => { this.setState({ first: "first" }) }}>
                    <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center", color: "black" }}><i><b>Previous</b></i></Typography>
                </Container>
                <Container fixed style={{ background: "teal", marginTop: 10 }}>
                    <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center", color: "black" }}><i><b>Happy Birthday My Jaan :) Live Long..... Love You A Lots..... Miss You More...<br />
                        Sending Loads of love with this :)<br />
                        Stay Happy And Miss Me ;)</b></i></Typography>
                </Container><br />
            </div>
        )
    }
}