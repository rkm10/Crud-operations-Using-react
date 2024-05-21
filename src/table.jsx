function Table(props) {
      return (
            <div className="overflow-x-auto flex justify-center items-center w-screen">
                  <table className="table w-2/4" >
                        <thead>
                              <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Categrory</th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    props.products && props.products.map(
                                          (data) =>
                                          (<tr key={data.id}>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.price}</td>
                                                <td>{data.catagory}</td>
                                                <td> <button className="btn btn-primary">Edit</button> <button className="btn btn-secondary" onClick={() => {
                                                      props.delete(data.id)
                                                }}>Delete</button></td>
                                          </tr>
                                          )
                                    )
                              }
                        </tbody>
                  </table >
            </div >
      )
}
export default Table