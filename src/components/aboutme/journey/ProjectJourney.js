import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import CodeIcon from '@mui/icons-material/Code';
import Flip from "react-reveal/Flip";

function ProjectJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Project Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Swasthya Samrat
          </h3>
          
          <p>In today's healthcare landscape, challenges like fragmented care and limited accessibility are prevalent. Swasthya Samrat addresses
these issues by harnessing AI technology to offer personalized virtual doctor services. Our platform streamlines care delivery,
ensuring accurate diagnoses and personalized treatment plans. Through features like appointment scheduling and medication
reminders, we empower users to take control of their health journey conveniently. With Swasthya Samrat, we're revolutionizing
healthcare, making it accessible, efficient, and user-centric. Join us in shaping the future of healthcare with technology and
compassion at its core.
</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad", textDecoration: "None" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Food Yatri
          </h3>
          
          <p>"FOOD YATRI" is a platform designed for food enthusiasts to explore and discover street food gems as well as renowned restaurants.
The website serves as a hub for culinary adventures, providing users with profiles of famous food vloggers from Instagram. These
profiles include a curated list of places these vloggers have visited, making it convenient for followers to find specific food destinations
for their next outing.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bite Buzz
          </h3>
          
          <p>Discover culinary delights from the comfort of your home with our food delivery app. Browse a wide selection of local restaurants, order your favorite dishes, and track your delivery in real-time. With seamless payment options and exclusive deals, satisfying your cravings has never been easier. Enjoy fast, reliable service and delicious meals delivered right to your doorstep.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Spam Alert System
          </h3>
          <p>The "Spam Alert System" detects and filters unsolicited, irrelevant, or malicious messages across various communication platforms. It
employs advanced algorithms to analyze URL, Gmail content , SMS content and user feedback to accurately identify spam. The
system continuously evolves through machine learning, adapting to new spamming techniques and patterns. Users can also
manually flag messages as spam to enhance system accuracy.
</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Personal Portfolio
          </h3>
          
        </VerticalTimelineElement> 
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ProjectJourney;
