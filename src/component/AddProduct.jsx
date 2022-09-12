import React, { useState } from 'react'


const AddProduct = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");


  async function addFormData(e) {
    e.preventDefault();
    let url = `https://agent-store.herokuapp.com/product`
    let data = {
      title: title,
      image: img,
      price: price,
      description: description,
      category: category
    }
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    let addedProduct = await response.json();
    console.log(addedProduct);

  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form onSubmit={addFormData}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Title : </label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Image : </label>
          <input onChange={(e) => setImg(e.target.value)} type="file" class="form-control" id="file" placeholder="Imag" />
        </div>
        <div class="form-group ">
          <label for="exampleFormControlInput1">Price : </label>
          <input onChange={(e) => setPrice(e.target.value)} type="text" class="form-control" id="text" placeholder="Price" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Category :</label>
          <select onChange={(event) => {
            setCategory(event.target.value);
          }} class="form-control btn btn-dark" id="exampleFormControlSelect1">
            <option value='none'>Select an Option</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Eewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description : </label>
          <textarea onChange={(e) => setDescription(e.target.value)} class="form-control" id="description" rows="3"></textarea>
        </div>
        <div class="col-md-12 text-center">
          <button className='btn btn-outline-dark ms-5 px-5 py-2 '>Creat A Product</button>
        </div>
      </form>
    </div>
  )
}


export default AddProduct;