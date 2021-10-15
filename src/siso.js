import React from "react";
import "./App.css";
import { Button, Typography, Container, Grid } from "@material-ui/core";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Redirect } from "react-router-dom";
import siso1 from './Images/1.jpg';
import siso2 from './Images/2.jpg';
import siso3 from './Images/3.jpg';

export default class Siso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first:"",
            next:""
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
                <Redirect to="/" />
            )
        }
        if (this.state.next === "next") {
            return (
                <Redirect to="/sisoo" />
            )
        }
        return (
            <div>
                <Container style={{ backgroundColor: "lightblue" }}>
                    <div data-aos="zoom-in">
                        <img src={siso1} className="img" /><br />
                        <Typography variant="h3" style={{ fontFamily: "serif", textAlign: "center", color: "brown" }}><b><i>Happy Birthday Motiiiii :)</i></b></Typography><br />
                        <Typography style={{ fontFamily: "serif", marginLeft: 50, fontSize: 29, textAlign: "center", color: "brown" }}><i><b>
                            Happy Birthday to the best sister in the world.
                            My dear Sister, on your special day I had like to wish you an
                            exciting life, full of great discoveries and joyful surprises.
                        </b></i></Typography>
                        <br />
                    </div>
                </Container>
                <div data-aos="zoom-in">
                    <Container style={{ backgroundColor: "teal" }}>
                        <h1 style={{ fontFamily: "serif", textAlign: "center" }}><i>Happy Birthday Sikha Baitharu!</i></h1>
                    </Container>
                </div>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={12} className="forImage">
                            <div data-aos="zoom-in">
                                <img src={siso2} className="proimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <div data-aos="zoom-in">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "lightblue", borderRadius: "100px" }}><b><i>I wish you plenty of love, happiness, health, laughter, joy and wonders.</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 25, textAlign: "center" }}><i>
                                    Dear Sister I am not a good writer like you but still writting this for you so please don't
                                    laught after reading this just give me a reply by saying it was
                                    awesome ok ;)
                                    <br />
                                    Koi hai jo sabse khaas hai... Kyun ki bo sabse nayab hai...<br />
                                    Pyaar v hai Dost v hai Dilka tukda v hai.... Koi aur nahi meri pyaari behena hi hai....<br />
                                    Chhoti behen ki tarah roothti hai... Dost ki tarah samajhti hai..... <br />
                                    Aur waqt aane pe maa ki tarah sambhal bhi leti hai.... <br />
                                    Maana badi hai mujhse par bachho jaisi harkatein hai teri....<br />
                                    Par sach bataun isilie tu sabse hai pyaari....<br />
                                    Bohot kimti hai tu... Itni ki tujhe khud v nahi pata aur na hi mujhe....<br />
                                    Aur nayaab bhi hai.... Kyun ki tere jaisa koi duuja nahi..... <br />
                                    Likh rahi hun uss insaan ke liye jo khud sabdon ki jahan hai....<br />
                                    Tere jaisa umda nahi likh paungi par likha toh khas tere liye hi hai...<br />
                                </i></Typography><br />
                            </div>
                        </Grid>
                    </Grid><br />
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
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Happy Birthday Beautiful Girl!</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 35, textAlign: "center" }}><i>
                                If I use a single compliment for you that would be very little and
                                 if I use all the compliments for you then still that will not be enough to describe you, my loving sister. 
                                </i></Typography><br />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <Container fixed style={{ background: "teal", marginTop: 10 }} onClick={()=>{this.setState({first:"first"})}}>
                    <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center", color: "black" }}><i><b>Previous</b></i></Typography>
                </Container>
                <Container fixed style={{ background: "teal", marginTop: 10 }} onClick={()=>{this.setState({next:"next"})}}>
                    <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center", color: "black" }}><i><b>Next</b></i></Typography>
                </Container><br />
            </div>
        )
    }
}