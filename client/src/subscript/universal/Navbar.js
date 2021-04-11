import React from "react";
import ReactDOM from "react-dom";
import ImageHover from "./ImageHover"
import DynamicLink from "./DynamicLink"
import defaultImg from './../../assets/logoGold.png'
import hoverImg from "./../../assets/logoWhite.png"

const Navbar = props => {
    return (
        <div>
            <div id="headerImageContainer">
                <a href="http://mtu.edu/">
                    <ImageHover 
                        height={60}
                        default={defaultImg} 
                        hover={hoverImg}
                        className={"headerImage"}
                        altText={"Michigan Technological University"}
                    />
                </a>
            </div>
            <div id="top-banner">
                <DynamicLink pageID={props.pageID} />
            </div>
        </div>
    )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Navbar />, rootElement); 
export default Navbar;