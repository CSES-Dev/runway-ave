const PreviewSection = () => {
  return (
    <section
      className="
        relative
        w-full
        h-[calc(1140/1512*100vw)]
        bg-white
        border-t border-black
      "
    >
      <img
        src="/iphone.png"
        alt="App preview phone"
        className="
          absolute
          left-[calc(87/1512*100vw)]
          top-[calc(137/1512*100vw)]
          w-[calc(453/1512*100vw)]
          h-[calc(912/1512*100vw)]
          object-contain
        "
      />

      <h2
        className="
          absolute
          left-[calc(700/1512*100vw)]
          top-[calc(69/1512*100vw)]
          text-[calc(70/1512*100vw)]
          text-black
        "
      >
        Preview Our App!
      </h2>

      <div
        className="
          absolute
          left-[calc(610/1512*100vw)]
          top-[calc(271/1512*100vw)]
          w-[calc(761/1512*100vw)]
          h-[calc(116/1512*100vw)]
          flex
          flex-col
        "
      >
        <p className="text-[calc(25/1512*100vw)] text-black">
          Enter Your Email to Sign Up!
        </p>
        <div
          className="
            mt-[calc(50/1512*100vw)]
            flex
            items-center
            gap-[calc(20/1512*100vw)]
          "
        >
          <input
            type="email"
            placeholder="youremail@email.com"
            className="
              w-[calc(488/1512*100vw)]
              h-[calc(56/1512*100vw)] 
              rounded-full
              bg-[#D9D9D9]
              px-[calc(20/1512*100vw)]
              text-[calc(20/1512*100vw)] 
              outline-none
              placeholder:text-black
              placeholder:opacity-100

            "
          />

          <button
            className="
              h-[calc(56/1512*100vw)]
              w-[calc(257/1512*100vw)]
              px-[calc(40/1512*100vw)]
              rounded-full
              bg-[#444444]
              text-white
              text-[calc(20/1512*100vw)]
              flex items-center justify-center
            "
          >
            Subscribe
          </button>
        </div>
      </div>

      <div
        className="
          absolute
          left-[calc(590/1512*100vw)]
          top-[calc(906/1512*100vw)]
          flex
          gap-[calc(23/1512*100vw)]
        "
      >
        <img
          src="/insta.png"
          alt="Instagram"
          className="w-[calc(100/1512*100vw)] h-[calc(100/1512*100vw)]"
        />
        <img
          src="/linkedin.png"
          alt="LinkedIn"
          className="w-[calc(100/1512*100vw)] h-[calc(100/1512*100vw)]"
        />
        <img
          src="/tiktok.png"
          alt="TikTok"
          className="w-[calc(100/1512*100vw)] h-[calc(100/1512*100vw)]"
        />
      </div>
    </section>
  );
};

export default PreviewSection;
