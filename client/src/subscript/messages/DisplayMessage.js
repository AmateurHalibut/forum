import {Footer} from '../universal'

const DisplayMessage = ({info}) => {
     const t = window.location.pathname;
    if (t === "/") { //home - display all messages
        return ( 
            <div id="disp-msg-cont">
                <div className="dm-title">Recent messages</div>
                {info.sort((a,b) => b.id - a.id).map(MU => (
                    
                   <div id="previewMessage" key={MU.id}>         
                            <div class="messageContent"> "{MU.message}"</div>
                            <div className="userInfo"> - {MU.user}</div>
                            <div className="idContent"> (ID: {MU.id})</div>
                   </div>
               ))}
                <Footer/>  
            </div>
         );
    } else { //display messages only for that thread
        const newt = t.substring(9, t.length);

        return ( 
            <div id="disp-msg-cont">
                <div className="dm-title">Thread {newt} </div>
                {info.filter(MU => MU.threadID === newt).sort((a,b) => b.id - a.id).map(MU => (
                    
                <div id="previewMessage" key={MU.id}>
                    <div className="messageContent"> "{MU.message}"</div>
                    <div className="userInfo"> - {MU.user}</div>
                    <div className="idContent"> (ID: {MU.id})</div>     
                </div>  
               ))}
            </div>
         );
    }  
}

export default DisplayMessage;