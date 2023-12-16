import Image from "next/image";
import Navbar from "../componets/Navbar";
import PageTitle from "../componets/PageTitle";
import PageContent from "../componets/PageContent";
export default function School() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Education Journey" />

        {/* Butte College Section */}
        <div className="mb-8 hover:scale-105 transition-transform cursor-pointer grow">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Associate Degree in Kinesiology
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mr-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/9/9c/Butte_College.png"
                alt="Butte College "
                width={300}
                height={200}
              />
            </div>
            <div className="md:w-1/2">
              <PageContent content="Beginning my educational journey at Butte College, I'm laying the groundwork for my academic pursuits. It's where I'm taking the initial steps towards my goal." />
            </div>
          </div>
        </div>

        {/* Chico State Section */}
        <div className="mb-8 hover:scale-105 transition-transform cursor-pointer grow">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Bachelor of Science in Exercise Physiology
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mr-4">
              <img
                src="https://www.csuchico.edu/style-guide/visual/_images/institutional-wildcat.jpg"
                alt="Chico State "
                width={300}
                height={200}
              />
            </div>
            <div className="md:w-1/2">
              <PageContent content="I'm excited about my plans for 2025, moving to Chico State to focus on Exercise Physiology." />
            </div>
          </div>
        </div>

        {/* Masters Program Section */}
        <div className="mb-8 hover:scale-105 transition-transform cursor-pointer grow">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Master of Science in Athletic Training
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mr-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/University_of_the_Pacific_seal.svg/1200px-University_of_the_Pacific_seal.svg.png"
                alt="Masters Program "
                width={300}
                height={200}
              />
            </div>
            <div className="md:w-1/2">
              <PageContent content="Planning to enroll in an excellent Athletic Training Program for my Masters to improve sports performance and overall well-being by enhancing my skills." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
