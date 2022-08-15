import React from "react";
import DevCard from "./DevCard";

const TeamContent = () => {
  return (
    <div className="flex">
      <div className="center flex-wrap">
        <DevCard
          description={"Sr. Full Stack Developer"}
          title={"Wade Dave"}
          url={
            "https://media.istockphoto.com/photos/focused-developer-coding-on-computer-monitors-working-late-in-office-picture-id1147195672?k=20&m=1147195672&s=612x612&w=0&h=DGtScmoHKlILWv1ZrykJFWRjkAvI0EET9lHGinZp-sk="
          }
        />
        <DevCard
          description={"Front End Developer"}
          title={"Seth Ivan"}
          url={
            "https://st3.depositphotos.com/5392356/13703/i/600/depositphotos_137037020-stock-photo-professional-software-developer-working-in.jpg"
          }
        />
        <DevCard
          description={"Sr. Back End Developer"}
          title={"Riley Gilbert"}
          url={
            "https://media.istockphoto.com/photos/profile-side-photo-of-concentrated-skilled-web-expert-afro-american-picture-id1218017051?k=20&m=1218017051&s=612x612&w=0&h=5jAlNN4zwt2JDE4eLRPRKYpjXitrEyoG0uT_a4h0RV8="
          }
        />
        <DevCard
          description={"Business Analyst"}
          title={"George Dan"}
          url={
            "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg"
          }
        />

        <DevCard
          description={"Web Developer"}
          title={"Ricardo Paul"}
          url={
            "https://media.istockphoto.com/photos/programmer-controlling-the-statistics-of-the-site-picture-id1139938843?k=20&m=1139938843&s=612x612&w=0&h=nJSMJEvTGin4vsBZpTAmpFgE_-y5J-mPTzRAZ03lCjk="
          }
        />
        <DevCard
          description={"UI/UX Designer"}
          title={"Aaron Shane"}
          url={
            "https://media.istockphoto.com/photos/professional-development-programmer-working-in-programming-website-a-picture-id1071652068?b=1&k=20&m=1071652068&s=170667a&w=0&h=LrP-vyBRY2C9wqdaj5UA8ER7IzzzQkqV6hTzX6WDU-c="
          }
        />
        <DevCard
          description={"Network Engineer"}
          title={"Martin Christin"}
          url={"https://miro.medium.com/max/1400/1*434wVaW0a9bu5Fmo-9l7Hw.jpeg"}
        />
        <DevCard
          description={"Network & System Engineer"}
          title={"Robert Patricia"}
          url={
            "https://t3.ftcdn.net/jpg/02/94/17/56/360_F_294175626_s6tR9mYJdWQnSREprje0yXTsp6Pasrcb.jpg"
          }
        />
      </div>
    </div>
  );
};

export default TeamContent;
