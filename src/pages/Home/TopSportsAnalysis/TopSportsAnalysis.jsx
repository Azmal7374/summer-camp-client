import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faHeartBroken,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { MagnifyingGlass } from "react-loader-spinner";
const TopSportsAnalysis = () => {
  const [fold, setFold] = useState(true);

  const describe = {
    first:
      "The Youth Football Camp is effective for young men who are just learning the fundamental skills of football. Our camp focuses on instruction for all positions and proper technique. Each camper will have equal offensive and defensive practice sessions to give them equal exposure to both sides.  This camp is available to players entering grades 5-8 in the fall.First & last name, country, address, city, state, postal code, county, email, age at time of event, birth date, phone, gender identity, race, ethnicity, school, group/team, current grade, how did you hear about this event, years of experience, health insurance carrier, insurance policy number, will the registrant be taking any medication while attending, I understand if taking meds I will complete the medication request using the link provided in the camp information packet, does the registrant have any conditions, other health issues/additional information, medication allergies (list), non-medication, dietary or other allergies (list), do any of the registrants allergies require an inhaler or EPIPEN injection, describe any limitations or restrictions, I agree to the terms and conditions, I understand the refund/cancelation policy, I understand the deposit is non-refundable, minor arriving to campus via, I have review the event Code of Conduct with my camper, I agree to the code of conduct, accommodations/comments, Roommate request, and residence hall gender preference, and dietary preferences",
      second:'We are thrilled to be partnering with The Rajasthan Royals Academy to offer specialist cricket camps during the holidays at Hoe Bridge. The Rajasthan Royals Academy have been developing young cricketers for over 15 years and also work with Hoe Bridge School in their after school clubs programme. Our Cricket Camps are based around technical skills work and matches to help bring out players decision making and improve their overall match play. From batting, bowling and fielding drills to net sessions we have you covered to help take your childs game to the next level. With a ratio of 1:8 children, camps are set up to progress their skills in smaller groups whether starting out in cricket or an accomplished player.Utilising the extensive sports facilities at Hoe Bridge, we also offer children a daily fun swim in our outdoor heated pool.'
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Top Articles</h2>
      <div className=" gap-10">
        <div className="">
          <img
            className="w-96 md:w-full lg:w- p-4 mx-auto"
            style={{ borderRadius: "20px" }}
            src="https://img.freepik.com/premium-photo/junior-football-player-practice_236854-72.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais"
            alt=""
          />
        </div>

        <div className="">
          <div className="date text-gray-600 flex justify-between">
            <div className="">
              <p>Tuesday, June 20, 2023 </p>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-600 hover:text-orange-500">
                <FontAwesomeIcon
                  className=" mx-2"
                  icon={faHeartBroken}
                ></FontAwesomeIcon>
              5</p>
              <p className="text-gray-600 hover:text-orange-500">
                <FontAwesomeIcon
                  className="mx-2"
                  icon={faShare}
                ></FontAwesomeIcon>6
              </p>
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-semibold">Child Football Camp, Summer 2023 </h1>
          <p className="font-semibold  mt-3">
           
            <span className="text-gray-600">In</span> Football Camp
          </p>

          {fold ? (
            <>
              <p className=" text-gray-500">
                {describe.first.substring(0, 100)}.....
              </p>
              <span
                className="cursor-pointer text-blue-600 mb-5"
                onClick={() => setFold(!fold)}
              >
                Read More
              </span>
            </>
          ) : (
            <>
              <p className=" text-gray-900">{describe.first}....</p>
              <span
                className="cursor-pointer text-blue-600 mb-5"
                onClick={() => setFold(!fold)}
              >
                Read Less
              </span>
            </>
          )}
        </div>
      </div>



      <div className=" gap-10">
      <div className="">
        <img
          className="w-96 md:w-full lg:w- p-4 mx-auto"
          style={{ borderRadius: "20px" }}
          src="https://img.freepik.com/premium-photo/group-young-cricketers-doing-high-five_53876-69771.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais"
          alt=""
        />
      </div>

      <div className="">
        <div className="date text-gray-600 flex justify-between">
          <div className="">
            <p>Thursday, December 05, 2022 </p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-600 hover:text-orange-500">
              <FontAwesomeIcon
                className=" mx-2"
                icon={faHeartBroken}
              ></FontAwesomeIcon>
            8</p>
            <p className="text-gray-600 hover:text-orange-500">
              <FontAwesomeIcon
                className="mx-2"
                icon={faShare}
              ></FontAwesomeIcon>15
            </p>
          </div>
        </div>
        <h1 className="mt-3 text-3xl font-semibold">Under15 Cricket Camp, Summer 2022 </h1>
        <p className="font-semibold  mt-3">
         
          <span className="text-gray-600">In</span> Cricket Camp
        </p>

        {fold ? (
          <>
            <p className=" text-gray-500">
              {describe.second.substring(0, 100)}.....
            </p>
            <span
              className="cursor-pointer text-blue-600 mb-5"
              onClick={() => setFold(!fold)}
            >
              Read More
            </span>
          </>
        ) : (
          <>
            <p className=" text-gray-900">{describe.second}....</p>
            <span
              className="cursor-pointer text-blue-600 mb-5"
              onClick={() => setFold(!fold)}
            >
              Read Less
            </span>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default TopSportsAnalysis;
