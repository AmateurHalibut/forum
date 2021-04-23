import {Navbar, Footer} from '../subscript/universal'

const Rules = () => {
    return (  
        <div id="hc-fp">
             <div id="page-container">
                <div id="content-wrap">
                    <Navbar pageID={3}/>
                    <div className="hc-title">Help Center</div>
                    
                    <a href="/credits">
                        <button className="dm-button">
                            Site Credits
                        </button>
                    </a>
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default Rules;