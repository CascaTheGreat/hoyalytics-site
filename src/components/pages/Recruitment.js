import React from "react";
import ApplicationProcess from "../ApplicationProcess";
import RecruitmentLanding from "../RecruitmentLanding";
import RecruitmentTraining from "../RecruitmentTraining";
import Footer from "../shared/Footer";
import MainInfo from "../shared/MainInfo";
import Teams from "../shared/Teams";

const Recruitment = (props) => {
  const applicationItems = [
    {
      title: "Applications Open",
      day: "17",
      month: "JAN",
      time: "8:00 PM",
      text: "Applications open for the Fall 2022 semester. The application link is now posted on our homepage.",
    },
    {
      title: "Joint Consulting Info Session",
      day: "18",
      month: "JAN",
      time: "8:00 PM - 9:00 PM",
      text: "Hear from us and other consulting organizations to share our thoughts on the future of consulting.",
    },
    {
      title: "CAB Fair",
      day: "20",
      month: "JAN",
      time: "11:00 AM - 2:00 PM | Red Square",
      text: "Come to the annual Georgetown CAB Fair to learn more about our organization and what we do.",
    },
    {
      title: "Info Session",
      day: "22",
      month: "JAN",
      time: "8:00 PM - 9:00 PM | MSB 130",
      text: "Come learn more about our organization and what we do from our current board members.",
    },
    {
      title: "Coffee Chats",
      day: "23",
      month: "JAN",
      time: "6:00 PM - 8:00 PM | MSB 260",
      text: "Chat with our board members and other interested students to gain a better understanding of our club's mission and culture.",
    },
    {
      title: "Coffee Chats",
      day: "24",
      month: "JAN",
      time: "6:00 PM - 8:00 PM | MSB 260",
      text: "Chat with our board members and other interested students to gain a better understanding of our club's mission and culture.",
    },
    {
      title: "Applications Close",
      day: "24",
      month: "JAN",
      time: "11:59 PM",
      text: "All applications for the Spring 2023 semester are due by 11:59 PM on January 24th.",
    },
  ];
  const applicationItems2 = [
    {
      title: "Applications Reviewed",
      day: "25",
      month: "JAN",
      time: "All Day",
      text: "Our board members will carefully review all applications and will notify you via email.",
    },
    {
      title: "First Round Interviews",
      day: "26",
      month: "JAN",
      time: "All Day",
      text: "Our Board Members will conduct first round interviews with selected applicants to get to know them better outside of the written application.  Sign-ups will be sent out in the days preceding to schedule your timeslot.",
    },
    {
      title: "Second Round Interviews",
      day: "27",
      month: "JAN",
      time: "All Day",
      text: "Our Board Members will conduct second round interviews with selected applicants to better understand how applicants think about data and their ability to pull insights.  Sign-ups will be sent out the night before to schedule your timeslot.",
    },
    {
      title: "Decisions Released",
      day: "28",
      month: "JAN",
      time: "2:00 PM",
      text: "Applicants selected to be Spring 2023 Analysts will be notified via phone call.",
    },
  ];
  return (
    <div className="recruitment">
      <RecruitmentLanding />
      <ApplicationProcess
        text="Recruitment opens at the beginning of each semester. We seek
            motivated students interested in data analytics and the practical
            applications of consulting."
        title="The Application Process"
        items={applicationItems}
        bg="#ECF5FF"
        mainColor="#11417A"
        titleColor="#2C67AC"
      />
      <ApplicationProcess
        text="Our board conducts a thorough review of every application."
        title="The Selection Process"
        items={applicationItems2}
        bg="#CADDF3"
        mainColor="#5297E8"
        titleColor="#2C67AC"
      />
      <RecruitmentTraining />
      <Teams title="Mark your path. Leave your footprint." />
      <MainInfo
        title="What we look for"
        text="As much as it would be appreciated, we do not require Analyst candidates to have a technical background. All we ask is that you bring your true authentic self and an interest in data analytics to the application process."
        image="/image-section/recruitment-info.png"
      />
      <Footer />
    </div>
  );
};

export default Recruitment;
