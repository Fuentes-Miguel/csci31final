import Image from "next/image";
import Navbar from "../componets/Navbar";
import PageTitle from "../componets/PageTitle";
import PageContent from "../componets/PageContent";

export default function Goals() {
  return (
    <div>
      <Navbar />
      <div className="m-12 mt-4">
        <PageTitle title="Goals" />
        <PageContent content="My ultimate aspiration is to ascend to the role of an elite-level athletic trainer, specializing in working alongside professional athletes or those competing at the collegiate level." />

        <div className="flex">
          {/* Professional Athletes Section */}
          <div className="flex-1 mr-4 mt-4 hover:scale-105 transition-transform cursor-pointer grow">
            <Image
              src="https://www.8newsnow.com/wp-content/uploads/sites/59/2023/01/eiCIFLhW.jpeg"
              alt="Professional Athletes Image"
              width={600}
              height={400}
            />
            <h2 className="text-2xl font-bold text-white mb-2 mt-4">
              Professional Athletes
            </h2>
            <p className="text-white">
              I aspire to be an athletic trainer in the NFL. While I don't have
              a specific team preference, the opportunity to work in the NFL
              would be amazing.
            </p>
          </div>

          {/* College Athletes Section */}
          <div className="flex-1 ml-4 mt-4 hover:scale-105 transition-transform cursor-pointer grow">
            <Image
              src="https://i.ytimg.com/vi/-SQhmzxvUTo/maxresdefault.jpg"
              alt="College Athletes Image"
              width={600}
              height={400}
            />
            <h2 className="text-2xl font-bold text-white mb-2 mt-4">
              College Athletes
            </h2>
            <p className="text-white">
              While securing a role in the NFL would be fantastic, I'm also open
              to contributing my skills to renowned Division 1 schools like the
              Michigan Wolverines and other prominent football programs, such as
              Alabama, Ohio State, etc..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
