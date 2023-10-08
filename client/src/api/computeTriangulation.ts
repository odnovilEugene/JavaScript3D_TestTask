import axios from "axios";

export const computeTriangulation = async (height: number, radius: number, n: number)  => {
  return await axios.get(`http://localhost:9000/triangulation/${height}/${radius}/${n}`)
    .then(res => res.data)
    .then(res => {
      return res
    })
}