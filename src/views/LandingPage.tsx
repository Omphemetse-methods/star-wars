import React from "react";

interface props {
  className: string;
  text: string;
}

const BlockNav = (props: props) => {
  return (
    <p
      className={`${props.className} border-r-2 border-white uppercase text-white text-clip font-medium text-md flex flex-col items-center justify-center py-4`}
    >
      {props.text}
    </p>
  );
};

const SlideA = () => {
  const background =
    "https://lumiere-a.akamaihd.net/v1/images/cad-bane-episodes-new-swcom-slide-desktop_2_b5ebb5e5.jpeg?region=0,0,2048,870&width=1920";

  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="absolute bottom-0 left-0 pb-40 pl-40">
        <p className="text-5xl w-9/12 pb-6">
          9 essentials cad bane episodes to watch on Disney+
        </p>

        <p className="text-2xl pb-4">
          He'll take on any job at the right price
        </p>

        <button className="btn-primary px-20 py-3 bg-red-500 hover:bg-red-600 font-bold text-2xl">
          Read more
        </button>
      </section>
    </div>
  );
};

const LandingPage = (props: any) => {
  return (
    <main className="min-h-screen max-w-screen bg-gray-900 text-white">
      <header className="flex justify-center py-4 h-[10vh]">
        <div className="w-8/12 flex justify-between items-center">
          <section>Facebook</section>

          <section>Logo</section>

          <section className="flex items-center space-x-2">Log in</section>
        </div>
      </header>

      <section className="h-[7vh] flex flex-col justify-center">
        <nav className="border-t-2 border-b-2 w-full flex justify-center ">
          <section className="w-11/12 md:w-10/12 grid grid-cols-8">
            <BlockNav className="border-l-2" text="News + Blog" />
            <BlockNav className="" text="Video" />
            <BlockNav className="" text="Series" />
            <BlockNav className="" text="Interactive" />
            <BlockNav className="" text="Community" />
            <BlockNav className="" text="Databank" />
            <BlockNav className="" text="Disney+" />
          </section>
        </nav>
        <p className="text-center py-4 uppercase text-md font-medium">
          Stream star wars on Disney+
        </p>
      </section>

      <section className="flex w-full h-[83vh]">
        <SlideA />
      </section>
    </main>
  );
};

export default LandingPage;
