import Image from "next/image";
import Navbar from "../componets/Navbar";
import PageTitle from "../componets/PageTitle";
import PageContent from "../componets/PageContent";
export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="contact" />
        <PageContent content="We look foward to hearing from you soon" />
      </div>
    </div>
  );
}
