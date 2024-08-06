
import UseEffect from "../UseState Rules/UseEffect";
import EventHandling from "./DestructuringChallenge";
import { CoditionOperator } from "./TernaryOperatorUsage";
import Testcomp from "./Testcomp";
import '../App.css'; 


const Home = () => {
  return (
    <div>
      <main className="bg-fuchsia-100 flex justify-around">
        <div className="main py-40 pl-9">
          <div className="text-6xl">The Best Phones in The Town</div>
          <p className="py-3 w-1/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta
            totam voluptatum maxime porro hic nemo commodi laudantium in cumque,
            facilis similique sunt?
          </p>
          <div className="button my-4">
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white  hover:bg-pink-700 mx-2 hover:border-2 hover:border-black">
              Buy Now
            </button>
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white  hover:bg-black mx-2 hover:border-2 hover:border-purple-900">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img src="src\bg.png" className="h-80" alt="A display of the latest phones" />
        </div>
      </main>
      <div className="-mx-100 relative bg-pink-800 text-white p-2 overflow-hidden">
        <div className="marquee">
          <div className="marquee-text">
            Discover this year's top smartphones with the best features, specs, and prices, including cutting-edge tech and great cameras.
          </div>
        </div>
      </div>
      <CoditionOperator/>
        <Testcomp/>
        <body>
        <h1 className="font-bold mx-2 my-4 text-3xl">This Is practice sheet</h1>
        <div className="mx-5 font-sans">I am using mx-5</div>
        <div className="mx-5 font-serif">I am using mx-5</div>
        <div className="mx-5 font-semibold">I am using mx-5</div>
      </body>
        <UseEffect/>
        <EventHandling/>         
    </div>
  );
}

export default Home;
