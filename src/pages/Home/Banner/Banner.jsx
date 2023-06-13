import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
  return (
      <div className="mt-10 ">
      <AwesomeSlider className="" animation="cubeAnimation ">
      <div>
       
        <img className="" src="https://img.freepik.com/free-photo/young-basketball-player-shoot_53876-30148.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/top-view-classic-chess-board-still-life_23-2150314908.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais"
          alt=""
        />
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/front-view-trainer-talking-players_23-2149742084.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/football-trainer-teaching-kids-side-view_23-2149742034.jpg?size=626&ext=jpg&ga=GA1.2.220873417.1673880723&semt=ais" />
      </div>

      <div>
        <img src="https://img.freepik.com/free-photo/close-up-kids-putting-hands-together_23-2149271057.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
      </div>

      <div>
        <img src="https://img.freepik.com/free-photo/full-shot-kids-playing-kickball_23-2149457247.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
      </div>
      <div>
      <img src="https://img.freepik.com/premium-photo/little-girl-learning-swim-pool_98296-1166.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=sph" />
    </div>
    <div>
    <img src="https://img.freepik.com/free-photo/badminton-concept-with-shuttlecock-racket_23-2149940871.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=sph" />
  </div>
    </AwesomeSlider>
      </div>
  );
};

export default Banner;
