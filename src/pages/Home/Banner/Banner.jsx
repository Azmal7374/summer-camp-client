import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

 

const Banner = () => {
  return (
    <Carousel className="p-4 text-center" >
      <div>
        <img src="https://img.freepik.com/free-photo/young-basketball-player-shoot_53876-30148.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/various-sport-tools-grass_93675-42307.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
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
    </Carousel>
  );
};

export default Banner;
