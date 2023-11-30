/* eslint-disable react/prop-types */
import { MdOutlineDelete } from "react-icons/md";

export default function ProductTable({cloths}) {
  const { products, setProducts } = cloths;

  // remove a product
  const removeProductHandelar = (idNum) => {
    const filteredproducts = products.filter((cloth) => cloth.id !== idNum);
    setProducts(filteredproducts);
  };


  return (
    <>
      <div className="table_wrapper">
        { products.length > 0 ?
        <div>
        <table className="table_data">
          
          <thead className="table_head">
            <tr>
              <th>SN.</th>
              <th>Name</th>
              <th>Id</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Color</th>
              <th>Description</th>
              <th>Date:</th>
              <th>Size:</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className="table_body">
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.id}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.clothColor}</td>
              <td>{product.description}</td>
              <td>{product.date}</td>
              <td>{product.size}</td>
              <td className="delete_icon">
                <MdOutlineDelete 
                onClick={() => {
                localStorage.clear()
                removeProductHandelar(product.id)
                }}/>
              </td>
            </tr>
          ))}
          </tbody>

        </table>
        <p style={{textAlign: 'center', marginTop: '15px'}}>
          <button className="removeAll_btn" onClick={()=>setProducts([])}>Remove All</button>
        </p>
      </div> 
      : <h2 style={{color: 'gray', textAlign: 'center'}}>No Product have added yet!</h2> 
        }
      </div>
    </>
  );
}
