import React from "react";
import Footer from "../shared/Footer";
import ConsultingLanding from "../ConsultingLanding";
import ConsultingServices from "../ConsultingServices";
import ConsultingContact from "../ConsultingContact";
const Consulting = () => {
  return (
    <div>
      <ConsultingLanding />
      <ConsultingServices />
      <ConsultingContact />
      <Footer />
    </div>
  );
};

export default Consulting;
