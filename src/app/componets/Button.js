export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      className="px-4 py-2 bg-gray-900 rounded-md shadow-md text-gray-200 hover:bg-gray-900 active:bg-gray-900 transition-all"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
