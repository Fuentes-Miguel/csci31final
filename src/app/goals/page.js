import Image from "next/image";
import Navbar from "../componets/Navbar";
import PageTitle from "../componets/PageTitle";
import PageContent from "../componets/PageContent";

export default function Goals() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="goals" />
        <PageContent content="My ultimate aspiration is to ascend to the role of an elite-level athletic trainer, specializing in working alongside professional athletes or those competing at the collegiate level. " />
      </div>
    </div>
  );
}
