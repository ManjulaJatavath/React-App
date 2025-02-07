
import UseEffect from "../UseState Rules/UseEffect";
import { CoditionOperator } from "./TernaryOperatorUsage";
import Testcomp from "./Testcomp";
import '../App.css'; 
import ProductList from "./ProductList";
import MessageList from "./MessageList";



const products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Smartphone', price: 17800 },
  { id: 3, name: 'Tablet', price: 8000 },
];

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
      <ProductList products={products} />
      <MessageList messages={[
          { id: 1, sender: 'Manju',  product: 'Laptop', text: 'Nice Product!', starred: false },
          { id: 2, sender: 'Aruna',  product: 'Mobile', text: 'Average?', starred: true },
          { id: 3, sender: 'Greethika', product: 'Tab', text: 'Excellent!', starred: false },
      ]}/>
            <UseEffect/>
      <CoditionOperator />
        <Testcomp/>
        <body>
      </body>
        {/* <EventHandling/>          */}
    </div>
  );
}

export default Home;
