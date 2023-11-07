import Image from "next/image";
import Navbar from "../componets/Navbar";
import PageTitle from "../componets/PageTitle";
import PageContent from "../componets/PageContent";

export default function Services() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="services" />
        <PageContent />
      </div>
    </div>
  );
}
