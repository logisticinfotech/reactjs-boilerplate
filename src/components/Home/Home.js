import React, { Component } from "react";
import AppLayout from "../AppLayout";
import "./Home.scss";
import { Home_TITLE } from "../../services/titleConst";

class Home extends Component {
    constructor(props) {
        super(props);
        document.title = Home_TITLE;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            // <AppLayout routeActive={this.props.location.pathname}>
            // <div className="container">
            //     <section className="bg-grey">
            //         <div className="container">
            //             <h3 className="varela mb-3">Home</h3>
            //         </div>
            //     </section>
            //     </div>
            // </AppLayout>
            <AppLayout>
                <section className="banner text-center">
                    <div className="container">
                        <h1>Home</h1>
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

export default Home;
