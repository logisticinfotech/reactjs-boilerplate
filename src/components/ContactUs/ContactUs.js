import React, { Component } from "react";
import AppLayout from "../AppLayout";
import "./ContactUs.scss";
import { ContactUs_TITLE } from "../../services/titleConst";

class ContactUs extends Component {
    constructor(props) {
        super(props);
        document.title = ContactUs_TITLE;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            // <AppLayout routeActive={this.props.location.pathname}>
            //     <section className="bg-grey">
            //         <div className="container">
            //             <h3 className="varela mb-3">ContactUs</h3>
            //         </div>
            //     </section>
            // </AppLayout>
            <AppLayout>
                <section className="banner text-center">
                    <div className="container">
                        <h1>ContactUs</h1>
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

export default ContactUs;
