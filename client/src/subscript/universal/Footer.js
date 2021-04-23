import React from "react";
import ReactDOM from "react-dom";
import foot from './../../assets/HuskyIcon_TwoColor.png';

const Footer = props => {
    return (
        <div>
        <div id="container"/>
            <footer id="footer">
                <div className="footer">
                    <table>
                        <tbody>
                            <tr>
                                <td />
                                    <td>
                                        <img className="footerImg" src={foot} alt="M" />
                                    </td>
                                <td />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </footer>
         </div>
         
    )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Footer />, rootElement); 
export default Footer;