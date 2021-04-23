const DisplayThreads = ({info}) => {
    return ( 
        <div id="disp-msg-cont">
            <div className="dm-title">Threads</div>
            {info.map(N => (
               <div id="previewMessage" key={N.id}>
                        <a href = {"/Threads/" + N.id}> {N.id + ": " + N.name}</a>
               </div>
           ))}
        </div>
     );
}

export default DisplayThreads;