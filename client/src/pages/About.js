import {Navbar, Footer} from '../subscript/universal'
import React from 'react';
import { Animator, ScrollContainer, ScrollPage, Fade, FadeIn, MoveIn, MoveOut} from "react-scroll-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Image assets
import a2 from "./../assets/about/a3.png"
import a3 from "./../assets/about/a5.png"
import p1 from "./../assets/about/p1.png"
import c1 from "./../assets/about/c1.png"
import c2 from "./../assets/about/c2.png"
import c3 from "./../assets/about/c3.png"

// Class for profile circles
class Profile extends React.Component {
  container = React.createRef();
  state = {
      hovered: false,
  };

  // Keep track of whether or not profile circle is currently hovered
  handleHover = () => {
      this.setState(state => {
          return {
              hovered: !state.hovered,
          };
      });
  };

  render() {
    // Pull profile picture from github
    let pfp = this.props.github + ".png";

    // Default sizes when window width > 1100
    let ap_img_wrap = "ap-img-wrap";
    let ap_pfp_img = "ap-pfp-img";
    let ap_img_text = "ap-img-text";
    let ap_img_text_name = "ap-img-text-name";
    let focus = "ap-img-text-focus";
    let ap_img_text_with = "ap-img-text-with";
    let ap_img_links = "ap-img-links"
    
    // Scaled down sizes when window width < 1100
    if(this.props.w < 1100) {
      ap_img_wrap = "ap-img-wrap-mini";
      ap_pfp_img = "ap-pfp-img-mini";
      ap_img_text = "ap-img-text-mini";
      ap_img_text_name = "ap-img-text-name-mini";
      focus = "ap-img-text-focus-mini";
      ap_img_text_with = "ap-img-text-with-mini";
      ap_img_links = "ap-img-links-mini"
    }

      return (
        <div>
            {/* Profile circle container */}
            <div className={ap_img_wrap} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
                
                {/* Render text when profile circle is hovered */}
                {this.state.hovered && 
                    <div id={ap_img_text}>
                    <span className={ap_img_text_name}>
                        {this.props.name}
                    </span>
                    <hr/>
                    <span className={focus}>
                        {this.props.focus}
                    </span>
                    <div className={ap_img_text_with}>
                      {this.props.with}
                    </div>
                    <a href={this.props.github}>
                    <div className={ap_img_links}>
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </div>
                    </a>
                </div>
                }
                
                {/* Render image when profile circle is NOT hovered */}
                {!this.state.hovered && (<img src={pfp} className={ap_pfp_img} alt={this.props.name}/>)}
                
            </div>
        </div>
      )
  }
}

const Presenter = () => {
  // Responsive UI
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  // Checks if user has resized window and updates width as necessary
  React.useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
  });
  const [width, setWidth] = React.useState(window.innerWidth);

  // Default sizes
  let ap_header = "ap-header";
  let p2_imgW = "480px";
  let p2_quote = "ap-p2-quote";
  let p2_main = "ap-p2-main-cont";
  let p4_main_tc2 = "ap-p4-main-tc2";
  let ap_p4_img = "ap-p4-img";
  let ap_p3_ip_img = "ap-p3-ip-img";
  let p3_main_cont = "ap-p3-main-cont";
  let p3_main = "ap-p3-main";
  let ap_img_cont = "ap-img-cont";

  // Very specifically tailored for smaller sizes
  if(width < 1600) {
    p2_imgW = "430px";
  }
  if(width < 1450) {
    p2_imgW = "350px";
    p4_main_tc2 = "ap-p4-main-tc2-mini";
    ap_p3_ip_img = "ap-p3-ip-img2";
    p3_main_cont = "ap-p3-main-cont2";
    p3_main = "ap-p3-main2";
  }
  if(width < 1250) {
    p2_imgW = "480px";
    p2_quote = "ap-p2-quote-mini";
    p2_main = "ap-p2-main-cont-mini";
    ap_p4_img = "ap-p4-img2";
  }
  if(width < 1100) {
    ap_header = "ap-header-mini";
    ap_img_cont = "ap-img-cont2";
  }
  if(width < 1050) {
    p2_imgW = "400px";
    p2_main = "ap-p2-main-cont-mini2";
    ap_p3_ip_img = "ap-p3-ip-img3";
    p3_main_cont = "ap-p3-main-cont3";
    p3_main ="ap-p3-main3";
  }
  if(width < 900)
    p2_imgW = "300px";
  if(width < 800) {
    p2_imgW = "250px";
    ap_p4_img = "ap-p4-img3";
    ap_p3_ip_img = "ap-p3-ip-img4";
    p3_main_cont = "ap-p3-main-cont4";
    p3_main = "ap-p3-main4";
  }
  if(width < 600)
    p2_imgW = "200px";
  if(width < 480)
    p2_imgW = "170px";

  return (
  <div id="ap-gpc">

    <Navbar pageID={2} zindex="999999" />
    <ScrollContainer>

      {/* First page */}
      <ScrollPage page={0}>
        <div id="ap-p1-cont">
          <div id={"ap-header-container"}>
            <span className={ap_header}>
            Hi, 
            <br/> <br/>
            We're Team I
          </span>
        </div>
          
          <Animator animation={Fade(0)}> 
            {/* First row of profile circles */}
            <div id={ap_img_cont}>
              <Profile 
                  name={"Alex Hromada"}
                  focus={"Specialty & Focus"}
                  with={"Programming Language"}
                  github={"https://github.com/amateurhalibut"}
                  w={width} />
              <Profile 
                  name={"Ben Kacynski"}
                  focus={"Specialty & Focus"}
                  with={"Programming Language"}
                  github={"https://github.com/bjkacyns"}
                  w={width} />
              <Profile 
                  name={"Berj Vartanian"}
                  focus={"Specialty & Focus"}
                  with={"Programming Language"}
                  github={"https://github.com/bavartan"}
                  w={width} />
            </div>

            {/* Second row of profile circles */}
            <div id="ap-img-cont">
              <Profile 
                  name={"Kirk Thelen"}
                  focus={"Website Development"}
                  with={"HTML, CSS, JavaScript with React"}
                  github={"https://github.com/klthelen"}
                  w={width} />
              <Profile 
                  name={"Parker Kirwin"}
                  focus={"Specialty & Focus"}
                  with={"Programming Language"}
                  github={"https://github.com/parkerkirwin"}
                  w={width} />
            </div>  
          </Animator>

        </div>
      </ScrollPage>
    
      {/* Second page */}
      <ScrollPage page={1}>
        <Animator animation={MoveOut(-1000, 0)}>
          <div id="ap-p2-img-cont-1">
            <img src={a2} width={p2_imgW} alt="img 1" />
          </div>
        </Animator>
          
        <Animator animation={MoveOut(1000, 0)}>
          <div id="ap-p2-img-cont-2">
            <img src={a3} width={p2_imgW} alt="img 2" />
          </div>
        </Animator>

        <br/> {/* Spacing */}

        <div id="ap-p2-cont">
          <Animator animation={FadeIn(-0.6)}>
            <div className={p2_quote}>
              Keeping the 906 together, even in times like these.
            </div>
          </Animator>

          <Animator animation={Fade(-0.4)}>
            <div className={p2_main}>
              CREATE CONNECT DISCOVER
            </div>

            <div className="ap-p2-bh"></div>
          </Animator>
        
        </div>
      </ScrollPage>

      {/* Third page */}
      <ScrollPage page={2}>
          <div id="ap-p4-main-cont">

            <div className="ap-p4-main-t">
              <div className="ap-p4-main-tc">
                Share your <span>thoughts</span>, <br/>
                make new <span>friends</span>, <br/>
                or ask a <span>question</span>! <br/>
              </div>

              <div className={p4_main_tc2}>
                You can do anything
              </div>
            </div>

            {/* BG images */}
            <img className={ap_p4_img} src={c1} alt="c1" />
            {(width > 800) && <img className={ap_p4_img} src={c2} alt="c2" />}
            {(width > 1250) && <img className={ap_p4_img} src={c3} alt="c3" />}
          </div>
      </ScrollPage>

      <ScrollPage page={3}>
          <Animator animation={MoveIn(-1000, 0)}>
            <img className={ap_p3_ip_img} src={p1} alt="iPhone" /> 
          </Animator>

          <Animator animation={FadeIn(-0.6)}>
            <div id={p3_main_cont}>
              <div className={p3_main}>
                And yeah, we're <span className="p3-sp">mobile friendly <FontAwesomeIcon className="p3-sp" color={"#ffcd00"} icon={["fa", "mobile"]} /> </span>
              </div>
            </div>
          </Animator>

          <div id="ap-p3-end">
            What are you waiting for? 
            {(width < 700) && <br />}
            <a href="/threads"> View threads now.</a>
          </div>
      </ScrollPage>      
    </ScrollContainer>

    </div>
  );
};

const About = () => {
    return (  
      <div className="About">
        <div id="page-container">
          <Presenter />
          <Footer />
        </div>
      </div>
    );
}
 
export default About;