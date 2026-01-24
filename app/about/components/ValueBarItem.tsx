const values = [
    "Innovative", "Inclusive", "Accessible", "Authentic", "Timeless", "Efficient", "Curated"
];

export default function ValueBarItem() {
    return (
        <div className="w-full bg-gray-200 py-6 mt-12">
            <div className="flex overflow-x-auto whitespace-nowrap px-6 md:px-10 gap-8 md:justify-between items-center max-w-screen-2xl mx-auto no-scrollbar">
                {values.map((value) => (
                    <span key={value} className="text-xl lg:text-2xl font-normal text-black">
                        {value}
                    </span>
                ))}
            </div>
        </div>
    );
}