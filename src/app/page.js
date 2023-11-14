import Image from "next/image";
import Navbar from "./componets/Navbar";
import PageTitle from "./componets/PageTitle";
import PageContent from "./componets/PageContent";
import Card from "./componets/Card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent />
        <div class="flex gap-6 w-full my-6 flex-wrap">
          <Card
            title="My first Card"
            subtitle="My first subtitle"
            description="My first description"
          />
          <Card
            title="My second Card"
            subtitle="My second subtitle"
            description="My second description"
          />
          <Card
            title="My third Card"
            subtitle="My third subtitle"
            description="My third description"
          />
        </div>
        <PageContent />
      </div>
    </div>
  );
}
