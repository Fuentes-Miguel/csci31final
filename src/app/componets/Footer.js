const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-1">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-xs font-bold">CSCI 31 Final</h2>
          <p className="text-[9px]">© {new Date().getFullYear()} </p>
        </div>
        <div className="flex space-x-4">{/* additional content */}</div>
      </div>
    </footer>
  );
};

export default Footer;
