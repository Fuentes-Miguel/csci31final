import Image from "next/image";
import Navbar from "../componets/Navbar";
import PageTitle from "../componets/PageTitle";
import PageContent from "../componets/PageContent";
export default function School() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="" />
        <PageContent content="Studying at Butte College, I'm diving into my education journey. Looking ahead to 2025, I'm excited about moving to Chico State to focus on Exercise Physiology. That's the first step toward my big dream: joining a top Athletic Training Program for my Masters, honing my skills in improving sports performance and overall wellness." />
      </div>
    </div>
  );
}
