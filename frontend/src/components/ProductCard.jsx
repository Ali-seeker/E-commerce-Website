import {useCart} from "../context/CartContext.jsx";

const { addToCart } = useCart();
function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={product.image} className="card-img-top p-3" style={{ height: '300px', objectFit: 'contain' }} alt={product.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">${product.price}</p>
        <button onClick={() => addToCart(product)} className="btn btn-primary">
         Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
