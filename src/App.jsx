import React, { useEffect, useState } from "react";
import Form from "./assets/form";
import Table from "./table";
import { deleteData, getData, postData, putData } from "./api";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(false);
  const [initialForm, setForm] = useState({ name: "", price: "", category: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  let getProducts = async () => {
    setLoading(true);
    try {
      let res = await getData();
      setProducts(res.data);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  let deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteData(id);
      getProducts();
    } catch (err) {
      setError("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  let addOrUpdateProduct = async (product) => {
    setLoading(true);
    try {
      if (edit) {
        await putData(product.id, product);
      } else {
        await postData(product);
      }
      getProducts();
    } catch (err) {
      setError("Failed to save product");
    } finally {
      setLoading(false);
      setOpenForm(false);
    }
  };

  let editProduct = (product) => {
    setForm(product);
    setOpenForm(true);
    setEdit(true);
  };

  let showForm = () => {
    setOpenForm(true);
    setForm({ name: "", price: "", category: "" });
  };

  let closeForm = () => {
    setOpenForm(false);
  };

  return (
    <>
      <div className="container justify-items-center items-center text-center py-10">
        <h2>CRUD operations</h2>
        <button className="btn btn-accent" onClick={showForm}>Add Products</button>
        <div className="hero bg-base-200 m-5">
          <Table products={products} delete={deleteProduct} edit={editProduct} />
          {openForm && (
            <Form
              close={closeForm}
              data={initialForm}
              add={addOrUpdateProduct}
            />
          )}
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
