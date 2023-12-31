import Image from "next/image";
import Navbar from "./componets/Navbar";
import PageTitle from "./componets/PageTitle";
import PageContent from "./componets/PageContent";
import Card from "./componets/Card";
import { createClient } from "@supabase/supabase-js";
import { findCards } from "./utils/supabase-client";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://cdkvactqpjevnsgsotmo.supabase.co",
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const revalidate = 0;

export default async function Home() {
  const cards = await findCards();

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent />
        <div className="flex gap-6 w-full my-6 flex-wrap">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
            />
          ))}
        </div>
        <PageContent />
      </div>
    </div>
  );
}
