const values = [
  "Innovative",
  "Inclusive",
  "Accessible",
  "Authentic",
  "Timeless",
  "Efficient",
  "Curated",
];

export default function ValueBarItem() {
  return (
    <div className="w-full bg-gray-200 py-6 mt-12 overflow-hidden">
      {/* <div className="flex overflow-x-auto whitespace-nowrap px-6 md:px-10 gap-8 md:justify-between items-center max-w-screen-2xl mx-auto no-scrollbar"> */}
      <div className="flex w-max animate-infinite-scroll">
        <div className="flex items-center gap-16 px-8">
          {values.map((value, index) => (
            <span
              key={`val1-${index}`}
              className="text-xl lg:text-2xl font-normal text-black whitespace-nowrap"
            >
              {value}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-16 px-8" aria-hidden="true">
          {values.map((value, index) => (
            <span
              key={`val2-${index}`}
              className="text-xl lg:text-2xl font-normal text-black whitespace-nowrap"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
