import Image from "next/image";
import Navbar from "../componets/Navbar";
import PageTitle from "../componets/PageTitle";
import PageContent from "../componets/PageContent";
import CardForm from "../componets/CardForm";
import MyTable from "../componets/MyTable";
import { Table } from "@radix-ui/themes";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="about" />
        <PageContent
          content="My interest in computer science sparked early, but I wasn't allowed much exposure. Growing up, my parents restricted our screen time, pushing us to spend more hours outdoors than in front of TVs or computers. While I initially disliked it, I now appreciate the healthy lifestyle they instilled in me, and because of that i developed a love for the outdoors.
 My fascination with fitness began when I lost 83 lbs. After spine and knee surgery, I delved into rehabilitation during physical therapy. The various recovery tools like sensory deprivation tanks, cryotherapy, cupping, acupuncture caught my attention.
Upon enrolling at Butte College, I aimed to pursue both majors, but during this semester's computer classes it made me realize that, although I find programming interesting, it doesn't bring me the same joy as being immersed in the fitness industry. Now, I'm determined to follow my passion for kinesiology and its diverse aspects of rehabilitation.
"
        />
        <CardForm />
        <MyTable />
      </div>
    </div>
  );
}
