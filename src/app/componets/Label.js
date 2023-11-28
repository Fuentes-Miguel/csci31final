export default function Label({ htmlFor, label }) {
  return (
    <label className="text-gray-200 text-lg" htmlFor={htmlFor}>
      {label}
    </label>
  );
}
