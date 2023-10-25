import React from 'react'
import Section from './Section'

const VideoText = () => {
  return (
    <> 
    
    <div className="video-container">
      <video autoPlay loop muted>
        <source src="https://player.vimeo.com/external/495603819.sd.mp4?s=88c041c8e360596b8137da91bbcedec3631c07eb&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        Tu navegador no admite la etiqueta de video.
      </video>
      <div className="text-overlay">
        <h1>Encontra los mejores<br />libros, ebooks y<br />audiolibros</h1>
        
      </div>
    </div>
    
    <style jsx> {`
    .video-container {
         position: relative;
        width: 100vw;
        height: 100vh; 
         overflow-x: hidden;
         overflow-y: hidden;
  }
  
     video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        overflow-x: hidden;
  }
  
  

  .text-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    text-align: right;
    color: #fff; 
    text-align:right;
    
  }
  
  .text-overlay h1 {
    font-size: 55px;
    margin-right: 60px;
  }
  
  .text-overlay p {
    font-size: 16px;
  }

`}

</style>

    
    </>
  )
}

export default VideoText