import { Button, Typography, Container, Dialog, DialogContent } from "@material-ui/core";
import React from "react";
import { Redirect } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default class MyLady extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            siso: "",
            open: true
        }
    }
    componentDidMount() {
        AOS.init({
            duration: 10000
        })
    }
    render() {
        if (this.state.siso === "siso") {
            return (
                <Redirect to="/siso" />
            )
        }
        return (
            <div>
                <Dialog open={this.state.open}>
                    <DialogContent>
                        <Container style={{ backgroundColor: "lightblue", textAlign: "center" }}>
                            <div data-aos="zoom-in">
                                <Typography variant="h6" style={{ fontFamily: "serif", textAlign: "center" }}>
                                    <b>
                                        <i>
                                            You Know What Today Is Someone Special's Birthday.
                                            The One With Whom I Can Share Every Little Thing Without Any Fear.
                                            The One Who Always Make Me Feel That I Am Also A Special One.
                                            The One Who Hold My Hand In Every Moment Of My LIfe And Stand By My Side As My Support System.
                                            The One About Whom If I Will Start Describing Then This Life Will Falls Short.<br />
                                            Do You Want To See Her
                                        </i>
                                    </b><br />
                                    <Button variant="contained" size="large" style={{ fontFamily: "serif", width: 200, height: 50, color: "white", backgroundColor: "#0f1924", borderRadius: 20, borderBlockColor: "skyblue" }} onClick={() => { this.setState({ siso: "siso" }) }}>
                                        <i>
                                            Please Click Here
                                        </i>
                                    </Button>
                                </Typography>
                                <br />
                            </div>
                        </Container>
                        <br />
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}