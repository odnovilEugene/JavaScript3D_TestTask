
import './Form.scss'
import {useState} from "react";
import {computeTriangulation} from "../../api/computeTriangulation.ts";
import {useNavigate} from "react-router-dom";

export const Form = () => {

  const [height, setHeight] = useState<number>(1)
  const [radius, setRadius] = useState<number>(1)
  const [n, setN] = useState<number>(3)

  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (isNaN(height) || isNaN(radius) || isNaN(n)) {
      setHeight(0)
      setRadius(0)
      setN(0)
    } else {
      let response = await computeTriangulation(height, radius, n)
      if (response.triangles.length) {
        navigate('/cone', {state: response.triangles})
      }
    }
  }

  return (
    <div className='form'>
      <div className='inputs'>
        <input
          value={height}
          placeholder='Enter height of the cone'
          onChange={(e) => setHeight(+e.target.value)}
          aria-label='Height'
        />
        <input
          value={radius}
          placeholder='Enter radius of the base'
          onChange={(e) => setRadius(+e.target.value)}
          aria-label='Radius'
        />
        <input
          value={n}
          placeholder='Enter number of triangles'
          onChange={(e) => setN(+e.target.value)}
          aria-label='NumberOfTriangles'
        />
      </div>
      <button onClick={handleSubmit} className="submitButton" role="button">Submit</button>
    </div>
  )
}