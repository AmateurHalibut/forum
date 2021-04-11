import {Navbar, Footer} from '../subscript/universal'
/* v Some of these are unused but don't delete them yet because idk if I need them later v */
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, FadeOut } from "react-scroll-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Class for our profiles at the top of the page
class Profile extends React.Component {
  container = React.createRef();
  state = {
      hovered: false,
  };

  // Change state when PFP is hovered
  handleHover = () => {
      this.setState(state => {
          return {
              hovered: !state.hovered,
          };
      });
  };

render() {
  let pfp = this.props.github + ".png";
    return (
      <div>
          <div className="ap-img-wrap" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
              {this.state.hovered && 
                  <div id="ap-img-text">
                  <span className="ap-img-text-name">
                      {this.props.name}
                  </span>
                  <hr/>
                  <span className="ap-img-text-focus">
                      {this.props.focus}
                  </span>
                  <div className="ap-img-text-with">
                    {this.props.with}
                  </div>
                  <a href={this.props.github}>
                  <div className="ap-img-links">
                          <FontAwesomeIcon icon={["fab", "github"]} />
                      </div>
                  </a>
              </div>
              }
              
              {!this.state.hovered &&
              (<img src={pfp} className="ap-pfp-img" alt={this.props.name}/>)
              }
              
          </div>
      </div>
    )
}
}

const Presenter = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
  
    return (
    <div style={{backgroundColor: "green"}}> {/* <-- Remove later */}
      <Navbar pageID={2} zindex="999999" />
      <ScrollContainer>
        <ScrollPage page={0} style={{backgroundColor: "red"}}>
                <div id="ap-p1-cont">
                    <div id="ap-header-container" >
                            <span className="ap-header"> 
                                Hi, 
                                <br/> <br />
                                We're Team I
                            </span>
      
                    </div>
                    <Animator animation={Fade(0)}> 
                      <div id="ap-img-cont">
                        <div id="ap-img-cont-wrap">
                        <Profile 
                            name={"Alex Hromada"}
                            focus={"Specialty & Focus"}
                            with={"Programming Language"}
                            github={"https://github.com/amateurhalibut"}
                        />
                        <Profile 
                            name={"Ben Kacynski"}
                            focus={"Specialty & Focus"}
                            with={"Programming Language"}
                            github={"https://github.com/bjkacyns"}
                        />
                        <Profile 
                            name={"Berj Vartanian"}
                            focus={"Specialty & Focus"}
                            with={"Programming Language"}
                            github={"https://github.com/bavartan"}
                        />
                        <Profile 
                            name={"Kirk Thelen"}
                            focus={"Website Development"}
                            with={"HTML, CSS, JavaScript with React"}
                            github={"https://github.com/klthelen"}
                        />
                        <Profile 
                            name={"Parker Kirwin"}
                            focus={"Specialty & Focus"}
                            with={"Programming Language"}
                            github={"https://github.com/parkerkirwin"}
                        />
                        </div>
                      </div>
                    </Animator>
                </div>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            </Animator>
        </ScrollPage>
        {/* Problem page
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
          <div id="ap-main-content-container" >
                        <span className="ap-main-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam, urna sit amet interdum dignissim, ex metus tincidunt orci, vitae ultricies dui mauris facilisis dolor. Nam lacinia nunc ultrices libero convallis cursus. Quisque dignissim ante lorem, et pulvinar augue condimentum eget. Vestibulum aliquet convallis arcu a porttitor. Quisque ut tempor leo. Suspendisse dui lorem, viverra sit amet enim sed, tincidunt ultricies enim. Aenean imperdiet ipsum id felis cursus facilisis. Donec nibh risus, laoreet vitae ligula vel, blandit efficitur ante. Proin feugiat vel erat quis faucibus. Duis elit risus, vulputate commodo maximus et, lacinia et nibh. Sed tellus dui, vulputate ac elementum eu, pharetra tempus augue. Maecenas vitae gravida dui. Ut non arcu nec eros interdum vulputate et at risus. Cras varius a metus ac fringilla. 
                        </span>
                    </div>
            <span style={{ fontSize: "3em" }}>I'm FadeUpScrollOut ✨</span>
          </Animator>
        </ScrollPage>
        */}
        <ScrollPage page={1}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "3em" }}>FadeUp</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <div >
            <span style={{ fontSize: "3em" }}>
              <Animator animation={MoveIn(-1000, 0)}>MoveIn1</Animator>
              <Animator animation={MoveIn(1000, 0)}>MovIn2</Animator>-  -
              <Animator animation={MoveOut(1000, 0)}>MoveOut1</Animator>
              <Animator animation={MoveOut(-1000, 0)}>MoveOut2</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "3em" }}>
              Done
            </span>
            <br/>
            <span style={{ fontSize: "3em" }}>
              Test
            </span>
          </Animator>
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