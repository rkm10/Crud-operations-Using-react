import axios from "axios";

const url = "http://localhost:3000/Products"
export async function getData() {

      return await axios.get(url)
}
export async function deteleData(id) {

      return await axios.delete(`${url}/${id}`)
}
export async function postData(data) {

      return await axios.post(url, data, {
            headers: {
                  "Content-Type": 'application/json'
            }
      })
}