export default function button({ value, classname }) {
  return (
    <div>
      <button
        className={`bg-black button-background rounded-lg w-full text-white font-medium uppercase ${
          classname || ""
        }`}
      >
        {value}
      </button>
    </div>
  );
}
