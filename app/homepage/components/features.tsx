const Feature = ({
  text,
  image,
  link,
}: {
  text: string;
  image: string;
  link: string;
}) => {
  return (
    <div
      className="
        w-full
        h-[calc(994/1512*100vw)]
        bg-[#D9D9D9]
        bg-cover bg-center
        flex flex-col justify-end items-center
      "
      style={{ backgroundImage: `url(${image})` }}
    >
      <a
        href={link}
        className="
          flex flex-col items-center
          pb-[calc(88/1512*100vw)]
        "
      >
        <p className="text-center text-[calc(35/1512*100vw)]">
          {text}
        </p>

        <button
          className="
            flex items-center justify-center text-[#F5F5F5] text-[calc(16/1512*100vw)]
            bg-[#2C2C2C]
            w-[calc(185/1512*100vw)]
            h-[calc(58/1512*100vw)]
            rounded-[calc(8/1512*100vw)]
            mt-[calc(23/1512*100vw)]
            border border-[#2C2C2C]
          "
        >
          Learn More
        </button>
      </a>
    </div>
  );
};

export default Feature;
