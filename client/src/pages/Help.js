import {Navbar, Footer} from '../subscript/universal'

const Help = () => {
    return (  
        <div className="Rules">
             <div id="page-container">
                <div id="content-wrap">
                    <Navbar pageID={3}/>
                    <h2>This is the Help Center</h2>
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default Help;