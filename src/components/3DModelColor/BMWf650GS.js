import React, { Suspense, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
    items: {
        mesh_0: "blue",
        mesh_1: "blue",
        mesh_2: "blue",
        mesh_3: "blue",
        mesh_4: "blue",
        mesh_5: "blue",
        mesh_6: "blue",
        // material_0: "#ff0000",
        // material_1: "#ff0000",
        // material_2: "#ff0000",
        // material_3: "#ff0000",
        // material_4: "#ff0000",
    },
})


function Model() {
    const snap = useSnapshot(state)
    const ref = useRef()
    const { nodes, mesh } = useGLTF('/bmw_rr_1000/scene.gltf')
    
    // const { nodes, materials } = useGLTF("/bmw_f_650_gs_motorbike/scene.gltf")

    const [hovered, set] = useState(null)

    return (
        <group
            ref={ref}
            dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} material-color={snap.items.mesh_0} />
                <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} material-color={snap.items.mesh_1} />
                <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} material-color={snap.items.mesh_2} />
                <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} material-color={snap.items.mesh_3} />
                <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} material-color={snap.items.mesh_4} />
                <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} material-color={snap.items.mesh_5} />
                <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} material-color={snap.items.mesh_6} />
            </group>
            {/* <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-0.41, -0.84, -13.29]} rotation={[-0.41, -0.67, -0.09]}>
                    <mesh geometry={nodes.mesh_0.geometry} material={materials.material_0} material-color={snap.items.material_0} />
                    <mesh geometry={nodes.mesh_1.geometry} material={materials.material_1} material-color={snap.items.material_1} />
                    <mesh geometry={nodes.mesh_2.geometry} material={materials.material_2} material-color={snap.items.material_2} />
                    <mesh geometry={nodes.mesh_3.geometry} material={materials.material_3} material-color={snap.items.material_3} />
                    <mesh geometry={nodes.mesh_4.geometry} material={materials.material_4} material-color={snap.items.material_4} />
                </group>
            </group> */}
        </group>
    )
}

function Picker() {
    const snap = useSnapshot(state)
    return (
        <div style={{ display: snap.current ? "block" : "none" }}>
            <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
        </div>
    )
}

export default function FordColor() {
    return (
        <div className="w-full h-screen my-12 px-4 pt-16 outline-none cursor-pointer lg:block">
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
            <Picker />
        </div>

    )
}
