// Interest.js
import Navbar from "../componets/Navbar";
import PageTitle from "../componets/PageTitle";
import PageContent from "../componets/PageContent";
import Card from "../componets/Card";

const Interest = () => {
  const cardData = [
    {
      image:
        "https://i.guim.co.uk/img/media/0371efe2e762da19b0efdc81e0e9aaf73261ceba/0_157_4928_2957/master/4928.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2ae61a141ef350cfd13bca91827b7aa3",
      description:
        "Griffith Observatory Trail in Los Angeles takes you to the top of the Holly Wood sign. ",
    },
    {
      image:
        "https://bloximages.newyork1.vip.townnews.com/appeal-democrat.com/content/tncms/assets/v3/editorial/9/91/9914dad8-e401-11e4-8e95-07374b1eb896/552f569f75416.image.jpg?resize=770%2C500",
      description:
        "Bike ride in Sutter,ca. Lets you explore the smallest mountain range on earth",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13tCrgKVdvlKMCoHmDfojfEp-qvfcbDxheA&usqp=CAU",
      description: "NS fit. The gym i go to. ",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="m-12 mt-6">
        <PageTitle title="Interest" />
        <PageContent content="Some of my interest include hiking, biking, and working out. " />

        <div className="card-container">
          {/* Mapping through data to display cards */}
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interest;
