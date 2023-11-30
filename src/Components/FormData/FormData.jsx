import { useEffect, useState } from "react";
import ProductTable from "../ProductTable/ProductTable";
import { getData } from "../GetData";
import "./FormData.css";

export default function FormData() {
  const [products, setProducts] = useState(getData('products'));
  const [input, setInput] = useState("")
  const [price, setPrice] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();

    // dinamically access form data
    const inputProducts = {};
    const elements = [...e.target.elements];
    elements.forEach((element) => {
      inputProducts[element.name] = element.value;
      inputProducts["size"] = input;
      setProducts([...products, inputProducts])
      element.value = ''
    });
    if(price < 1){alert('Price should be a positive number')}

  };

  // create object to send as props
  const cloths = { products, setProducts };

  //  set data to local storage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <>
      <h2 className="main_heading"> Cloths Data</h2>
      <div className="main_container">
        <div className="form_wrapper">
          <form className="input_form" action="" onSubmit={submitHandler}>

            <label htmlFor="">Cloth Name *</label> <br />
            <input
              name="name"
              required
              type="text"
              placeholder="Cloth Name"
            />
            <br />
             
            {/* Cloth id input */}
            <label htmlFor="">Product Id *</label>
            <br />
            <input 
            name="id"
            required 
            type="text" 
            placeholder="Cloth Id" 
            />
            <br />

            {/* Price input */}
            <label htmlFor="">Price *</label> <br />
            <input 
            name="price" 
            required type="number" 
            placeholder="Price"
            onChange={(e)=>{setPrice(e.target.value)}}
            />
            <br />

            {/* Quantity input */}
            <label htmlFor="">Quantity *</label> <br />
            <input
              max={15}
              min={1}
              name="quantity"
              required
              type="number"
              placeholder="Quantity"
            />
            <br />

            {/* Description box */}
            <label htmlFor="">Description</label> <br />
            <textarea
              name="description"
              type="text"
              placeholder="Description of the cloth"
              className="description_box"
              rows={5}
            />
            <br />

            {/* Color input */}
            <select name="clothColor" required id="" className="color_box">
              <option value="">Select color *</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
            <br />

            {/* Data input  */}
            <label htmlFor="">Date:</label> <br />
            <input name="date" type="date"/> <br />

            {/* Choose size */}
            <h3>Choose size:</h3> <br />
          
              <label>M<input 
              name="size" 
              onClick={()=> setInput("M")}
              value='M'
              type="radio" 
              style={{cursor:'pointer'}}
              />
              </label>
              <br />

              <label>L<input 
              name="size"
              onClick={()=> setInput("L")}
              value={'L'} 
              type="radio" 
              style={{cursor:'pointer'}}
              />
              </label>
              <br />

              <label>XL<input 
              onClick={()=> setInput("XL")}
              name="size"
              type="radio" 
              style={{cursor:'pointer'}}
              />
              </label>
              <br /> <br />

            {/* Terms and condition */}
            <span><input id="terms" type="checkbox" required /></span>
            <label style={{cursor:'pointer'}} htmlFor="terms"> I agree terms & condition</label>
            <br /> <br />


            <button className="addCard_btn">Add Product</button>
          </form>
        </div>

        {/* send products as to ProductTable component */}
          <ProductTable cloths={cloths} />

      </div>
    </>
  );
}
