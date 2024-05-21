function Form(props) {
      return (
            <div className="form-overlay">
                  <form>
                        <div className="form-control">
                              <label htmlFor="">Name:</label>
                              <input class="input input-bordered w-full m-2" type="text" name="name" placeholder="Product Name" />

                        </div>
                        <div className="form-control">
                              <label htmlFor="">Price:</label>
                              <input class="input input-bordered w-full m-2" type="number" name="price" placeholder="Enter Price" />

                        </div>
                        <div className="form-control">
                              <label htmlFor="">Category</label>
                              <select class="input input-bordered w-full m-2" name="category" placeholder="Select category">
                                    <option disabled selected>Pick category</option>
                                    <option value={'mobiles'}>mobile's</option>
                                    <option value={'tv'}>Tv's</option>
                                    <option value={'laptops'}>laptop's</option>
                              </select>

                        </div>

                        <button className="btn btn-primary float-end" onClick={(e) => {
                              e.preventDefault()
                        }}>send</button>
                        <button className="btn btn-secondary float-end" onClick={(e) => {
                              e.preventDefault()
                              props.close()
                        }}>cancel</button>
                  </form>
            </div>
      )
}

export default Form