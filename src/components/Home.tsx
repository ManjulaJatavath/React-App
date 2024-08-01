import TextForm from "./TextForm";


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
      <TextForm heading ="Enter The text to analyze below"/>
    </div>
  );
}

export default Home;
