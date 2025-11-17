import { useState } from "react";

export default function BillingPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 2, stock: 10 },
    { id: 2, name: "Banana", price: 1, stock: 15 },
    { id: 3, name: "Mango", price: 3, stock: 8 },
  ]);

  const [quantities, setQuantities] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Number(value) });
  };

  const calculateTotal = () => {
    let total = 0;
    const updatedProducts = products.map((product) => {
      const qty = quantities[product.id] || 0;
      if (qty <= product.stock) {
        total += product.price * qty;
        return { ...product, stock: product.stock - qty };
      } else {
        alert(`${product.name} — Not enough stock!`);
        return product;
      }
    });
    setProducts(updatedProducts);
    setTotalAmount(total);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🧾 Customer Billing Page</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price ($)</th>
            <th>Stock Left</th>
            <th>Quantity to Buy</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max={p.stock}
                  value={quantities[p.id] || ""}
                  onChange={(e) => handleQuantityChange(p.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={calculateTotal} style={{ marginTop: "20px" }}>
        Calculate Total
      </button>

      <h3 style={{ marginTop: "20px" }}>💰 Total Amount: ${totalAmount}</h3>
    </div>
  );
}
