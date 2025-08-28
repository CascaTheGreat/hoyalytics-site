import React from "react";

import Projects from "../Projects";
import ConsultingLanding from "../ConsultingLanding";
import ConsultingServices from "../ConsultingServices";
import ConsultingContact from "../ConsultingContact";
import Clients from "../Clients";
import Footer from "../shared/Footer";

const Services = () => {
  return (
    <div>
      <ConsultingLanding />
      <Clients />
      <Projects />
      <ConsultingServices />
      <ConsultingContact />
      <Footer />
    </div>
  );
};

export default Services;
