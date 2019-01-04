import React from 'react';

class VideoPlayer extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            show: false,
        }

   }
   hidden = () => {
       this.setState({
           show: !this.state.show
       })
   };

   render(){
       if (!this.props.video) {
           return <div>Loading video...</div>;
       }
       const videoId = this.props.video.id.videoId;
       const url = `https://youtube.com/embed/${videoId}`;

       return (

           <div>
               <div className="embed-responsive embed-responsive-16by9">
                   <iframe className="video-player embed-responsive-item" src={url} />
               </div>
               <div className="details">
                   <h2 className={'title-YT'}>{this.props.video.snippet.title}</h2>
                   <div className={'btnHidden'}>
                    <button className={'btn__show'} onClick={this.hidden}>
                        ...
                    </button>
                    {
                        this.state.show
                            ? <div style={{textAlign:'left', transform:'rotate(-180deg)'}} className={'txt-YT'}>{this.props.video.snippet.description}</div>
                            : null
                    }
                   </div>
               </div>
           </div>
       );
   }
}

export default VideoPlayer;
