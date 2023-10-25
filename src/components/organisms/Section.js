import Buttons from "@/components/atoms/Buttons";

const Section = () => {
  return (
    <section>
      <div class="video-wrapper">
        <div class="video-background">
          <video
            autoplay="autoplay"
            loop="loop"
            muted
            defaultMuted
            playsinline
            oncontextmenu="return false;"
            preload="auto"
            id="miVideo"
          >
            <source
              src="https://player.vimeo.com/external/495603819.sd.mp4?s=88c041c8e360596b8137da91bbcedec3631c07eb&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="header">
          <h1>Encontrá los mejores libros, ebooks y audiolibros</h1>
          <button>Comprar</button>
        </div>
      </div>

      <style jsx>
        {`
          .video-wrapper {
            position: relative;
            width: 750px; /* Adjust the width as needed */
            height: 500px; /* Adjust the height as needed */
          }

          .video-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          video {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }

          .header {
            position: relative;
            z-index: 1; /* Ensure the header is on top of the video */
            text-align: center; /* Center the content */
            color: #fff; /* Text color */
            background: rgba(
              0,
              0,
              0,
              0.5
            ); /* Background color with some transparency */
            padding: 20px;
            box-sizing: border-box;
          }
        `}
      </style>
    </section>
  );
};

export default Section;
