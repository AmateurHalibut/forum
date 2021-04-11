import React from "react"
import CreateAccount from '../subscript/profile/CreateAccount'
import {Navbar, Footer} from '../subscript/universal'

const SignUp = () => {
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    // Checks if user has resized window and updates width as necessary
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const [width, setWidth] = React.useState(window.innerWidth);

    // Changes based on window width
    let loginClass = "login-container-main";
    if (width < 500) {
        loginClass = "login-container-mini";
    }

    return (  
        <div>
             <div id="page-container">
                <div id="content-wrap">
                    <Navbar /> {/* No page ID because there's no link that needs to adapt */}
                    <div id={loginClass}>
                        <div className="login-header-container">
                            <div className="login-header"> Sign Up </div>
                            <div className="signup-link"> Already have an account? <a href="/login"> Log in instead.</a> </div>
                        </div>
                    
                    
                        {/* Inputs start */}
                        <CreateAccount />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default SignUp;