import React, { Suspense, useRef, useState } from "react"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
})

function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/ford_mustang_roush_2019_-_stage_3/scene.gltf')
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group scale={0.09}>
                    <mesh geometry={nodes.mesh_0.geometry} material={materials.Base} />
                    <mesh geometry={nodes.mesh_1.geometry} material={materials.BadgeA} />
                    <mesh geometry={nodes.mesh_2.geometry} material={materials.GlassDarkMtl} />
                    <mesh geometry={nodes.mesh_3.geometry} material={materials.GlassMtl} />
                    <mesh geometry={nodes.mesh_4.geometry} material={materials.Grille1A} />
                    <mesh geometry={nodes.mesh_5.geometry} material={materials.Grille2A} />
                    <mesh geometry={nodes.mesh_6.geometry} material={materials.Grille3A} />
                    <mesh geometry={nodes.mesh_7.geometry} material={materials.Grille4A} />
                    <mesh geometry={nodes.mesh_8.geometry} material={materials.Grille5A} />
                    <mesh geometry={nodes.mesh_9.geometry} material={materials.GlassRedMtl} />
                    <mesh geometry={nodes.mesh_10.geometry} material={materials.Lights} />
                    <mesh geometry={nodes.mesh_11.geometry} material={materials.Paint} />
                    <mesh geometry={nodes.mesh_12.geometry} material={materials.TexturedA} />
                    <mesh geometry={nodes.mesh_13.geometry} material={materials.InteriorTillingColourZoneA} />
                    <mesh geometry={nodes.mesh_14.geometry} material={materials.wire_141007058} />
                    <mesh geometry={nodes.mesh_15.geometry} material={materials.interior} />
                    <mesh geometry={nodes.mesh_16.geometry} material={materials.engine_o} />
                    <mesh geometry={nodes.mesh_17.geometry} material={materials.interior_o} />
                    <mesh geometry={nodes.mesh_18.geometry} material={materials.color1_o} />
                    <mesh geometry={nodes.mesh_19.geometry} material={materials.color2_o} />
                    <mesh geometry={nodes.mesh_20.geometry} material={materials.engine} />
                    <mesh geometry={nodes.mesh_21.geometry} material={materials.CalliperBadgeBMtl} />
                    <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
                    <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
                    <mesh geometry={nodes.mesh_24.geometry} material={materials.ColouredMtl} />
                    <mesh geometry={nodes.mesh_25.geometry} material={materials.paint1Mtl} />
                    <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
                    <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} />
                    <mesh geometry={nodes.mesh_28.geometry} material={nodes.mesh_28.material} />
                    <mesh geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} />
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "Wheel1A" && "Wheel2A") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Tyre</h1>
                <p className="text-xl text-justify">The super-sports tire with superior handling for maximum fun. Perfect steering precision and sporty handling. Outstanding grip and stability during cornering. Optimised to meet the specific requirements of front and rear axle positions.</p>
            </div>
        )
    }
    else if (snap.current === "wire_141007058") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Door</h1>
                <p className="text-xl text-justify">The doors seem to be lacking handles at all. A closer look though reveals illuminated buttons on the B and C pillars. The front doors also have a small, protruding handle located just under the button to grab onto.</p>
            </div>
        )
    }
    else if (snap.current === "Paint") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Body</h1>
                <p className="text-xl text-justify">The larger body with an increased wheelbase yielded more interior space for four passengers, especially in the back seat, as well as a larger capacity trunk and a bigger engine bay.</p>
            </div>
        )
    }
    else if (snap.current === "GlassMtl") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Front Glass</h1>
                <p className="text-xl text-justify">The first piece of glass that you encounter on most vehicles is its windshield. Also known as a windscreen on European cars. The windshield plays a critical role in supporting the structure of the car and protecting the driver and passengers.</p>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">Click on the different parts of car to know more</h1>
            </div>
        )
    }
}

export default function Perseverance() {
    return (
        <>
            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-screen px-4 pt-16 outline-none cursor-pointer md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 4, 4], fov: 50 }}>
                        <ambientLight intensity={0.9} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={1} />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>

                <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                    <Details />
                </div>

            </div>

        </>
    )
}
