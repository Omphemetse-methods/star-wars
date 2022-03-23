import React from "react";
import { useNavigate } from "react-router-dom";

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
        <p className="text-3xl font-medium w-9/12 pb-6 uppercase">
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

const SlideB = () => {
  const background =
    "https://lumiere-a.akamaihd.net/v1/images/pykes-new-swcom-slide-desktop-_2_b682933d.jpeg?region=0,0,2048,870&width=1920";

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
      <section className="h-full flex justify-end">
        <div className="w-4/12 flex flex-col items-start justify-center">
          <p className="text-5xl font-bold w-9/12 pb-6 uppercase">
            Who are the pykes
          </p>

          <p className="pb-4 text-2xl font-medium w-6/12">
            Explore the inner workings of one of the galaxy's most notorious
            crime syndicates
          </p>

          <button className="btn-primary px-20 py-3 bg-green-500 hover:bg-green-600 font-bold text-2xl">
            Read more
          </button>
        </div>
      </section>
    </div>
  );
};

const SlideC = () => {
  const background =
    "https://lumiere-a.akamaihd.net/v1/images/santo-hero-desktop_e1f3909b.jpeg?region=0,0,2048,870&width=1920";

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
      <section className="h-full flex flex-col justify-center items-center">
        <div className="w-6/12 flex flex-col items-center justify-center">
          <p className="text-5xl font-bold text-center  pb-6 uppercase">
            Krrsantan attacks in han solo & chewbacca
          </p>

          <p className="pb-4 text-2xl font-medium text-center">
            Its not wise to upset a Wookiee. Especially if his name is Krrsantan
          </p>

          <button className="btn-primary px-20 py-3 bg-orange-500 hover:bg-orange-600 font-bold text-2xl">
            Read more
          </button>
        </div>
      </section>
    </div>
  );
};

const LandingPage = (props: any) => {
  let navigate = useNavigate();

  return (
    <main className="min-h-screen max-w-screen bg-gray-900 text-white">
      <header className="flex justify-center py-4 h-[10vh]">
        <div className="w-8/12 flex justify-between items-center">
          <section className="flex space-x-2 items-center">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
            <p className="border-r-2 border-white" />
            <p>Kids</p>
          </section>

          <section>Logo</section>

          <section className="flex items-center space-x-2">
            <button
              className="btn-primary px-12"
              onClick={() => navigate("sign_in")}
            >
              Log In
            </button>
            <button className="btn-primary">Sign Up</button>
          </section>
        </div>
      </header>

      <section className="h-[7vh] flex flex-col justify-center">
        <nav className="border-t-2 w-full flex justify-center ">
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
        <SlideC />
      </section>
    </main>
  );
};

export default LandingPage;
