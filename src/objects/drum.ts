import * as THREE from "three";

/*
    const kaRing = new THREE.RingGeometry(
      0.62,
      1,
      30,
      1,
      0,
      6.283185307179586
    );
    const ka = new THREE.ExtrudeGeometry(kaCircle, { depth: 10 });
    */

export const createDrum = () => {
  const donGeometry = new THREE.CylinderBufferGeometry(
    1,
    1,
    3,
    20,
    1,
    false,
    0,
    6
  );

  const domMaterial = new THREE.MeshBasicMaterial();

  const domObject3d = new THREE.Mesh(donGeometry, domMaterial);
  domObject3d.translateX(5);

  return new THREE.Group().add(domObject3d);
};
