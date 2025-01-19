'use client';



import React, {useState, useRef, Suspense} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {Points, PointMaterial, Preload} from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { Group } from 'three';

const StarBackground = (props: any) => {
    const ref:  any = useRef();
    const [sphere] = useState(() => 
    random.inSphere(new Float32Array(5000), {radius: 1.2})
);

useFrame((state, delta) => {
    ref.current.rotation.y -= delta / 10;
    ref.current.rotation.x -= delta / 15;
})
  return (
    <Points positions={sphere} stride={3} ref={ref}>
        <PointMaterial transparent color="#ffffff" size={0.005} sizeAttenuation={true} depthWrite={false} />
    </Points>
  )
}

export default StarBackground