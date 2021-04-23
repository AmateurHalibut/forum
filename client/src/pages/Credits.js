import {Navbar, Footer} from '../subscript/universal'

const Credits = () => {
    return (  
        <div id="hc-fp">
             <div id="page-container">
                <div id="content-wrap">
                    <Navbar pageID={3}/>

                    <div id="hc-credits">
                        <div className="hc-credits-title">
                            Credits
                        </div>
                        
                        <div className="hc-credits-text">
                            <div id="hc-blockt">
                                Code, design, and implementation by CS3141 Spring 2021's <a href="/">Team I</a> <br/>
                            </div>
                        <div id="hc-block">
                            <span className="hc-credits-subt">— General </span><br />
                            <span className="hc-credits-text-e">Michigan Technological University Icon and Logos</span>, © 2021 <a href="https://www.mtu.edu/umc/resources/download/">Michigan Technological University</a> <br/>
                            <span className="hc-credits-text-e">Tic Tac Toe background</span>, free for noncommercial use from <a href="https://www.toptal.com/designers/subtlepatterns/tic-tac-toe/">Toptal (Subtle Patterns)</a> <br/>
                            <span className="hc-credits-text-e">Icons (Caution, Git, Mobile)</span>, free to use from <a href="https://fontawesome.com/">FontAwesome</a>
                            <hr></hr>
                        </div>

                        <div id="hc-block">
                            <span className="hc-credits-subt">— Fonts </span> <br />
                            All fonts courtesy of <a href="https://fonts.google.com/">Google Fonts</a>, free for noncommercial use: <a href="https://fonts.google.com/specimen/Poppins?query=poppin">Poppins</a>, <a href="https://fonts.google.com/specimen/Open+Sans?query=Open">Open Sans</a>
                            <hr></hr>
                        </div>

                        <div id="hc-block">
                            <span className="hc-credits-subt">— About </span> <br />
                            <span className="hc-credits-text-e">"People sitting down near table with assorted laptop computers"</span>, free to use from <a href="https://unsplash.com/photos/SYTO3xs06fU">Unsplash</a> <br/>
                            <span className="hc-credits-text-e">"Macbook pro photo"</span>, free to use from <a href="https://unsplash.com/photos/bXqOMf5tvDk">Unsplash</a> <br/>
                            <span className="hc-credits-text-e">"Shadow of 2 person on white sand"</span>, free to use from <a href="https://unsplash.com/photos/Otc8-IGrx8U">Unsplash</a> <br/>
                            <span className="hc-credits-text-e">"Man walking on bridge during daytime"</span>, free to use from <a href="https://unsplash.com/photos/ZqCp4ovfQM8">Unsplash</a> <br/>
                            <span className="hc-credits-text-e">"Man standing on snow covered land while facing body of water"</span>, free to use from <a href="https://unsplash.com/photos/1xi32sApt0I">Unsplash</a> <br/>
                            <span className="hc-credits-text-e">"iPhone 6 Floating Mockup",</span> free to use from <a href="https://www.freemockupworld.com/free-iphone-6-floating-mockups-psd/">Free Mockup World</a>
                            <hr></hr>
                        </div>

                        <div id="hc-block">
                            <span className="hc-credits-subt">— 404 </span> <br />
                            <span className="hc-credits-text-e">"Siberian Husky Dog sled",</span> free for noncommercial use from <a href="https://www.pngegg.com/en/png-nzkfn">PngEgg</a>
                            <hr></hr>
                        </div>
                        
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default Credits;