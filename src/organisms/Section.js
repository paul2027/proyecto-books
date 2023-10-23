const Section = () => {
  return (
    <section>
      <div class="video-wrapper">
        <video width="750" height="500" autoplay controls loop>
          <source
            src="https://player.vimeo.com/external/495603819.sd.mp4?s=88c041c8e360596b8137da91bbcedec3631c07eb&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div class="header">
          <h1>Encontrá los mejores libros, ebooks y audiolibros </h1>
          <button>Comprar</button>
        </div>
      </div>

      <style jsx>
        {`
          video {
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            position:relative;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
          }

          .video-wrapper {
            position: relative;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .header{
            position: absolute;
            color: white;
            text-shadow: 1px 1px 8px rgba(0,0,0,0.6);
          }

          section{
            overflow-x: hidden;
          }


        `}
      </style>
    </section>
  );
};

export default Section;
