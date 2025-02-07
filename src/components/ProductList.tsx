import { Component } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
};

type Props = {
  products: Product[];
};

export class ProductList extends Component<Props> {
  render() {
    const productsWithDiscount = this.props.products.map((product) => ({
      ...product,
      discountedPrice: product.price * 0.9,
    }));
    const totalPrice = productsWithDiscount.reduce(
      (total, product) => total + product.discountedPrice,
      0
    );

    return (
        <div className="p-4 bg-gray-50 rounded-lg shadow-md mx-auto">
            <h1 className='p-4 mb-2 bg-white rounded-lg shadow-sm text-center'>
                Products Cost
            </h1>
          <ul className="list-none p-0">
            {productsWithDiscount.map((product) => (
              <li
                key={product.id}
                className="p-4 mb-2 bg-white rounded-lg shadow-sm flex justify-between items-center"
              >
                <span className="text-lg font-medium text-gray-800">{product.name}</span>
                <span className="text-sm text-gray-600 mx-10">
                  Original: <span className="font-bold text-yellow-900 mx-8">₹{product.price.toFixed(2)}</span>, 
                  Discounted: <span className="font-bold text-pink-500 mx-8">₹{product.discountedPrice.toFixed(2)}</span>
                </span>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold text-gray-900 mt-4">
            Total Price: <span className="font-bold text-green-600">₹{totalPrice.toFixed(2)}</span>
          </h2>
        </div>
      );
    }
  }

export default ProductList;




