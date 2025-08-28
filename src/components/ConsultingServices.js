import React from "react";
import NavbarAlt from "./shared/NavbarAlt";

const ConsultingServices = () => {
  const servicesTitle = "We help your business to achieve more.";
  const servicesSubtitle =
    "Take a look at our expansive portfolio of services we provide to clients.";
  const services = [
    {
      title: "Technical",
      items: [
        "Data Cleaning",
        "Regression Analysis",
        "Predictive Modeling",
        "AI/ML Development",
      ],
      image: "/svgs/consulting/technical.svg",
      color: "#58CCED",
    },
    {
      title: "Visual",
      items: [
        "Dashboarding",
        "Map Generation",
        "Graph Building",
        "Website Services",
      ],
      image: "/svgs/consulting/visual.svg",
      color: "#3895D3",
    },
    {
      title: "Marketing",
      items: [
        "Competitor Research",
        "Business Branding",
        "SEO Optimization",
        "Social Media Engagement",
      ],
      image: "/svgs/consulting/marketing.svg",
      color: "#1261A0",
    },
    {
      title: "Financial",
      items: [
        "Strategy Planning",
        "Budget Analysis",
        "Profit Forecasting",
        "SWOT Analysis",
      ],
      image: "/svgs/consulting/financial.svg",
      color: "#072F5F",
    },
  ];
  return (
    <div className="consulting-services">
      <h1 className="consulting-services-title">{servicesTitle}</h1>
      <h4 className="consulting-services-subtitle">{servicesSubtitle}</h4>
      <div className="consulting-services-grid">
        {services.map((service) => {
          return (
            <div
              className="consulting-services-card"
              key={service.title}
              style={{
                borderBottom: `10px solid ${service.color}`,
              }}>
              <img src={service.image} alt={service.title} />
              <h3 className="consulting-services-card-title">
                {service.title}
              </h3>
              <ul className="consulting-services-card-list">
                {service.items.map((item) => {
                  return (
                    <li
                      className="consulting-services-card-list-item"
                      key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConsultingServices;
