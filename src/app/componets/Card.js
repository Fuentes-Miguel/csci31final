export default function Card({
  title = "",
  subtitle = "",
  description = "",
  image = "https://source.unsplash.com/350x200/?gym",
}) {
  return (
    <div className="border-solid border-2 border-gray-600 p-6 bg-gray-100 rounded-lg shadow-md text-gray-900 hover:scale-105 transition-transform cursor-pointer grow">
      <h1 className="text-3xl font-bold underline cursor-pointer">{title}</h1>
      <h2 className="py-4">{subtitle}</h2>
      <img src={image} style={{ width: "270px", height: "200px" }} />
      <p className="py-4">{description}</p>
    </div>
  );
}
