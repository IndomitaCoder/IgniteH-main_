import Introduction from "components/Introduction";
import Subscription from "components/Subscription";
import Features from "components/Features";
import s from "./LandingPage.module.css";
import Faqs from "components/Faqs";
import Footer from "components/Layout/Footer";

function LandingPage() {
  return (
    <div className={s.root}>
      <Introduction />
      <Subscription />
      <Features />
      <Faqs />
      <Footer />
    </div>
  );
}

export default LandingPage;
 