import React, { useEffect, useState } from "react"
import Form from "./assets/form"
import Table from "./table"
import { deteleData, getData } from "./api"

function App() {
  const [openForm, setOpenForm] = useState(false)
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
  }, []
  )

  let getProducts = async () => {
    let res = await getData();
    setProducts(res.data)
  }
  let deleteProducts = async (id) => {
    await deteleData(id);
    getProducts()
  }
  let showForm = () => {
    setOpenForm(true)
  }

  let closeForm = () => {
    setOpenForm(false)
  }
  return (
    <>
      <div className="container justify-items-center items-center text-center py-10">
        <h2>CRUD operations</h2>
        <button className="btn btn-accent" onClick={() => { showForm() }}>Add Products</button>
        <div className="hero bg-base-200 m-5">
          <Table products={products} delete={deleteProducts} />
          {
            openForm && <Form close={closeForm}></Form>
          }
        </div>
      </div>
    </>
  )
}
export default App
