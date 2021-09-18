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
    const { nodes, materials } = useGLTF('/mercedes_benz_amg_sl_-_65/scene.gltf')
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                        geometry={nodes.Object_5.geometry}
                        material={materials.mat_0}
                        skeleton={nodes.Object_5.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_6.geometry}
                        material={materials.mat_1}
                        skeleton={nodes.Object_6.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_7.geometry}
                        material={materials.mat_2}
                        skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_8.geometry}
                        material={materials.mat_3}
                        skeleton={nodes.Object_8.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_9.geometry}
                        material={materials.mat_4}
                        skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_10.geometry}
                        material={materials.mat_5}
                        skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_11.geometry}
                        material={materials.mat_6}
                        skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_12.geometry}
                        material={materials.mat_7}
                        skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_13.geometry}
                        material={materials.mat_8}
                        skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_14.geometry}
                        material={materials.mat_9}
                        skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_15.geometry}
                        material={materials.mat_10}
                        skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_16.geometry}
                        material={materials.mat_11}
                        skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_17.geometry}
                        material={materials.mat_12}
                        skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_18.geometry}
                        material={materials.mat_13}
                        skeleton={nodes.Object_18.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_19.geometry}
                        material={materials.mat_14}
                        skeleton={nodes.Object_19.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_20.geometry}
                        material={materials.mat_15}
                        skeleton={nodes.Object_20.skeleton}
                    />
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "mat_14") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Tyre</h1>
                <p className="text-xl text-justify">265/35R19 front tyres with 19×9.5 inch AMG light-alloy wheels and AMG 20×11.5-inch light-alloy wheels with 325/30R20 tyres (Dunlop Sport Maxx GT tyres), 6-piston front calipers with 390×36mm discs and 4-piston calipers with 360×26mm discs.</p>
            </div>
        )
    }
    else if (snap.current === "mat_9") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Headlamp</h1>
                <p className="text-xl text-justify">A headlamp is a lamp attached to the front of a vehicle to illuminate the road ahead. Headlamps are also often called headlights, but in the most precise usage, headlamp is the term for the device itself and headlight is the term for the beam of light produced and distributed by the device.</p>
            </div>
        )
    }
    else if (snap.current === "mat_0") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Body</h1>
                <p className="text-xl text-justify">Body style include 2-doors and retractable hardtop. ABC (Active Body Control) was improved to reduce body movements in dynamic driving by up to 60%, standard on all models except the SL 350.</p>
            </div>
        )
    }
    else if (snap.current === "mat_15") {
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
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={1.5} />
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
