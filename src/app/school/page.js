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

        {/* Chico State Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Bachelor of Science in Exercise Physiology
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mr-4">
              <img
                src="https://www.csuchico.edu/style-guide/visual/_images/institutional-wildcat.jpg"
                alt="Chico State Placeholder"
                width={300}
                height={200}
              />
            </div>
            <div className="md:w-1/2">
              <PageContent content="Starting my studies at Butte College marks the beginning of my educational path. I'm excited about my plans for 2025, moving to Chico State to focus on Exercise Physiology. It's the first step toward my dream." />
            </div>
          </div>
        </div>

        {/* Masters Program Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Master of Science in Athletic Training
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mr-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/University_of_the_Pacific_seal.svg/1200px-University_of_the_Pacific_seal.svg.png"
                alt="Masters Program Placeholder"
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
