
import './Cone3D.scss'

import * as THREE from 'three'
import {useLocation} from "react-router-dom";
import {useEffect, useRef} from "react";


export const Cone3D = () => {

  const location = useLocation();
  const triangles = location.state
  const vertices = new Float32Array(triangles)
  // console.log(vertices)


  const refContainer = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth-25, window.innerHeight-25);
    refContainer.current && !refContainer.current.children.length && refContainer.current.appendChild( renderer.domElement );
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    const material = new THREE.MeshBasicMaterial({ color: 0x98999A });
    const lineMaterial = new THREE.LineBasicMaterial( { color: 0x000000 } );
    const cone = new THREE.Mesh(geometry, material);
    const lines = new THREE.LineSegments( lineGeometry, lineMaterial );
    scene.add(cone);
    scene.add(lines)
    const height = vertices[8]
    camera.position.z = height + 5;
    function animate() {
      cone.rotation.x += 0.01;
      cone.rotation.y += 0.01;
      lines.rotation.x += 0.01;
      lines.rotation.y += 0.01;
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    }
    animate();
  }, [])


  return (
    <div ref={refContainer} className='cone3D'></div>
  )
}