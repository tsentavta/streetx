import './App.css';
import MyNavBar from "./Componets/MyNavBar/MyNavBar";
import imgDroneFPV from "./img/droneFPV.jpg"
import {Tab, Tabs} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div className="App">
            <header>
                <MyNavBar/>
            </header>
            <main>

                <div className={"divLeft divItem"}>
                    <h1 className={"divLeftHeader"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
                        unde.</h1>
                    <img src={imgDroneFPV} className={"descriptionCardImg"}/>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3 Tabs"
                    >
                        <Tab eventKey="home" title="Home">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ea eius explicabo ipsum molestias placeat quasi recusandae voluptatem. Autem id laborum nisi non, odit officiis perspiciatis recusandae rerum vitae voluptas.
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae dolore magnam. A accusantium, autem excepturi facere minus nam pariatur perspiciatis placeat voluptates!
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam animi assumenda culpa dignissimos earum error fugiat illo laboriosam laborum laudantium magni maiores, minima neque, nostrum numquam odit perferendis possimus quae, quas quisquam ratione repellat repudiandae sapiente suscipit veritatis. Accusamus deleniti dolores est numquam odit optio perferendis quam vero.
                        </Tab>
                    </Tabs>
                </div>

                <div className={"divRight divItem"}>
                    <h2 className={"divRightHeader"}>Lorem ipsum.</h2><div className={"divRightBr"}/>
                    <ul className={"divRightUl"}>
                        {['hgtyjt', 'tjrg', 'tyumkyu'].map((value, index) =>
                            (
                                <li key={index} className={"divRightUlItem"}>{value}</li>
                            )
                        )}
                    </ul>
                </div>


                {/*<div className="descriptionCardFlex">*/}
                {/*    <div className={"descriptionCard"}>*/}
                {/*        /!*<img src={imgDroneFPV} className={"descriptionCardImg"}/>*!/*/}
                {/*        */}
                {/*    </div>*/}
                {/*    <div className={"descriptionCard"}>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </main>

        </div>
    );
}

export default App;
