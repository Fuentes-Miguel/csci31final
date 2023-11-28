import Image from "next/image";
import Navbar from "../componets/Navbar";
import PageTitle from "../componets/PageTitle";
import PageContent from "../componets/PageContent";
import CardForm from "../componets/cardform";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="about" />
        <PageContent content="" />
        <CardForm />
      </div>
    </div>
  );
}
