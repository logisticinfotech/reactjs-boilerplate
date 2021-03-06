import React, { Component } from "react";
import AppLayout from "../AppLayout";
import "./AboutUs.scss";
import { AboutUs_TITLE } from "../../services/titleConst";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        document.title = AboutUs_TITLE;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            // <AppLayout routeActive={this.props.location.pathname}>
            //     <section className="bg-grey">
            //         <div className="container">
            //             <h3 className="varela mb-3">4 Hire Dj's</h3>
            //         </div>
            //     </section>
            // </AppLayout>

            <AppLayout>
                <section className="banner text-center">
                    <div className="container">
                        <h1>About Us</h1>
                        <p>
                            We didn't spend time on a pretty parking page because we would rather spend time developing
                            our technology!
                        </p>
                    </div>
                </section>
            </AppLayout>
        );
    }
}

export default AboutUs;
