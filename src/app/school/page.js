import Image from "next/image";
import Navbar from "../componets/Navbar";
import PageTitle from "../componets/PageTitle";
import PageContent from "../componets/PageContent";
export default function Products() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="products" />
        <PageContent content="Our products are the best" />
      </div>
    </div>
  );
}
