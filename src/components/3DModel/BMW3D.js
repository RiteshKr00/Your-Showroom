import React, { Suspense, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
})

function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/bmw_m3_sedan_topaz_blue_car/scene.gltf')
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.mesh_0.geometry} material={materials.etriers} />
                <mesh geometry={nodes.mesh_1.geometry} material={materials.interior1} />
                <mesh geometry={nodes.mesh_2.geometry} material={materials.interior2} />
                <mesh geometry={nodes.mesh_3.geometry} material={materials.interior3} />
                <mesh geometry={nodes.mesh_4.geometry} material={materials.miroir} />
                <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
                <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
                <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
                <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
                <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
                <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
                <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
                <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
                <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
                <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
                <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
                <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
                <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
                <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
                <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material} />
                <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
                <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
                <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
                <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} />
                <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
                <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
                <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} />
                <mesh geometry={nodes.mesh_28.geometry} material={nodes.mesh_28.material} />
                <mesh geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} />
                <mesh geometry={nodes.mesh_30.geometry} material={nodes.mesh_30.material} />
                <mesh geometry={nodes.mesh_31.geometry} material={nodes.mesh_31.material} />
                <mesh geometry={nodes.mesh_32.geometry} material={nodes.mesh_32.material} />
                <mesh geometry={nodes.mesh_33.geometry} material={nodes.mesh_33.material} />
                <mesh geometry={nodes.mesh_34.geometry} material={nodes.mesh_34.material} />
                <mesh geometry={nodes.mesh_35.geometry} material={nodes.mesh_35.material} />
                <mesh geometry={nodes.mesh_36.geometry} material={nodes.mesh_36.material} />
                <mesh geometry={nodes.mesh_37.geometry} material={nodes.mesh_37.material} />
                <mesh geometry={nodes.mesh_38.geometry} material={nodes.mesh_38.material} />
                <mesh geometry={nodes.mesh_39.geometry} material={nodes.mesh_39.material} />
                <mesh geometry={nodes.mesh_40.geometry} material={nodes.mesh_40.material} />
                <mesh geometry={nodes.mesh_41.geometry} material={nodes.mesh_41.material} />
                <mesh geometry={nodes.mesh_42.geometry} material={nodes.mesh_42.material} />
                <mesh geometry={nodes.mesh_43.geometry} material={nodes.mesh_43.material} />
                <mesh geometry={nodes.mesh_44.geometry} material={nodes.mesh_44.material} />
                <mesh geometry={nodes.mesh_45.geometry} material={nodes.mesh_45.material} />
                <mesh geometry={nodes.mesh_46.geometry} material={nodes.mesh_46.material} />
                <mesh geometry={nodes.mesh_47.geometry} material={nodes.mesh_47.material} />
                <mesh geometry={nodes.mesh_48.geometry} material={nodes.mesh_48.material} />
                <mesh geometry={nodes.mesh_49.geometry} material={nodes.mesh_49.material} />
                <mesh geometry={nodes.mesh_50.geometry} material={nodes.mesh_50.material} />
                <mesh geometry={nodes.mesh_51.geometry} material={nodes.mesh_51.material} />
                <mesh geometry={nodes.mesh_52.geometry} material={nodes.mesh_52.material} />
                <mesh geometry={nodes.mesh_53.geometry} material={nodes.mesh_53.material} />
                <mesh geometry={nodes.mesh_54.geometry} material={nodes.mesh_54.material} />
                <mesh geometry={nodes.mesh_55.geometry} material={nodes.mesh_55.material} />
                <mesh geometry={nodes.mesh_56.geometry} material={nodes.mesh_56.material} />
                <mesh geometry={nodes.mesh_57.geometry} material={nodes.mesh_57.material} />
                <mesh geometry={nodes.mesh_58.geometry} material={nodes.mesh_58.material} />
                <mesh geometry={nodes.mesh_59.geometry} material={nodes.mesh_59.material} />
                <mesh geometry={nodes.mesh_60.geometry} material={nodes.mesh_60.material} />
                <mesh geometry={nodes.mesh_61.geometry} material={nodes.mesh_61.material} />
                <mesh geometry={nodes.mesh_62.geometry} material={nodes.mesh_62.material} />
                <mesh geometry={nodes.mesh_63.geometry} material={nodes.mesh_63.material} />
                <mesh geometry={nodes.mesh_64.geometry} material={nodes.mesh_64.material} />
                <mesh geometry={nodes.mesh_65.geometry} material={nodes.mesh_65.material} />
                <mesh geometry={nodes.mesh_66.geometry} material={nodes.mesh_66.material} />
                <mesh geometry={nodes.mesh_67.geometry} material={nodes.mesh_67.material} />
                <mesh geometry={nodes.mesh_68.geometry} material={nodes.mesh_68.material} />
                <mesh geometry={nodes.mesh_69.geometry} material={nodes.mesh_69.material} />
                <mesh geometry={nodes.mesh_70.geometry} material={nodes.mesh_70.material} />
                <mesh geometry={nodes.mesh_71.geometry} material={nodes.mesh_71.material} />
                <mesh geometry={nodes.mesh_72.geometry} material={nodes.mesh_72.material} />
                <mesh geometry={nodes.mesh_73.geometry} material={nodes.mesh_73.material} />
                <mesh geometry={nodes.mesh_74.geometry} material={nodes.mesh_74.material} />
                <mesh geometry={nodes.mesh_75.geometry} material={nodes.mesh_75.material} />
                <mesh geometry={nodes.mesh_76.geometry} material={nodes.mesh_76.material} />
                <mesh geometry={nodes.mesh_77.geometry} material={nodes.mesh_77.material} />
                <mesh geometry={nodes.mesh_78.geometry} material={nodes.mesh_78.material} />
                <mesh geometry={nodes.mesh_79.geometry} material={nodes.mesh_79.material} />
                <mesh geometry={nodes.mesh_80.geometry} material={nodes.mesh_80.material} />
                <mesh geometry={nodes.mesh_81.geometry} material={nodes.mesh_81.material} />
                <mesh geometry={nodes.mesh_82.geometry} material={nodes.mesh_82.material} />
                <mesh geometry={nodes.mesh_83.geometry} material={nodes.mesh_83.material} />
                <mesh geometry={nodes.mesh_84.geometry} material={nodes.mesh_84.material} />
                <mesh geometry={nodes.mesh_85.geometry} material={nodes.mesh_85.material} />
                <mesh geometry={nodes.mesh_86.geometry} material={materials.material} />
                <mesh geometry={nodes.mesh_87.geometry} material={materials.plate} />
                <mesh geometry={nodes.mesh_88.geometry} material={nodes.mesh_88.material} />
                <mesh geometry={nodes.mesh_89.geometry} material={nodes.mesh_89.material} />
                <mesh geometry={nodes.mesh_90.geometry} material={nodes.mesh_90.material} />
                <mesh geometry={nodes.mesh_91.geometry} material={nodes.mesh_91.material} />
                <mesh geometry={nodes.mesh_92.geometry} material={nodes.mesh_92.material} />
                <mesh geometry={nodes.mesh_93.geometry} material={nodes.mesh_93.material} />
                <mesh geometry={nodes.mesh_94.geometry} material={nodes.mesh_94.material} />
                <mesh geometry={nodes.mesh_95.geometry} material={nodes.mesh_95.material} />
                <mesh geometry={nodes.mesh_96.geometry} material={nodes.mesh_96.material} />
                <mesh geometry={nodes.mesh_97.geometry} material={nodes.mesh_97.material} />
                <mesh geometry={nodes.mesh_98.geometry} material={nodes.mesh_98.material} />
                <mesh geometry={nodes.mesh_99.geometry} material={nodes.mesh_99.material} />
                <mesh geometry={nodes.mesh_100.geometry} material={nodes.mesh_100.material} />
                <mesh geometry={nodes.mesh_101.geometry} material={nodes.mesh_101.material} />
                <mesh geometry={nodes.mesh_102.geometry} material={nodes.mesh_102.material} />
                <mesh geometry={nodes.mesh_103.geometry} material={nodes.mesh_103.material} />
                <mesh geometry={nodes.mesh_104.geometry} material={nodes.mesh_104.material} />
                <mesh geometry={nodes.mesh_105.geometry} material={nodes.mesh_105.material} />
                <mesh geometry={nodes.mesh_106.geometry} material={nodes.mesh_106.material} />
                <mesh geometry={nodes.mesh_107.geometry} material={nodes.mesh_107.material} />
                <mesh geometry={nodes.mesh_108.geometry} material={nodes.mesh_108.material} />
                <mesh geometry={nodes.mesh_109.geometry} material={nodes.mesh_109.material} />
                <mesh geometry={nodes.mesh_110.geometry} material={nodes.mesh_110.material} />
                <mesh geometry={nodes.mesh_111.geometry} material={nodes.mesh_111.material} />
                <mesh geometry={nodes.mesh_112.geometry} material={nodes.mesh_112.material} />
                <mesh geometry={nodes.mesh_113.geometry} material={nodes.mesh_113.material} />
                <mesh geometry={nodes.mesh_114.geometry} material={nodes.mesh_114.material} />
                <mesh geometry={nodes.mesh_115.geometry} material={nodes.mesh_115.material} />
                <mesh geometry={nodes.mesh_116.geometry} material={nodes.mesh_116.material} />
                <mesh geometry={nodes.mesh_117.geometry} material={materials.wire_135110008} />
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "body") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Car body</h1>
                <p className="text-xl text-justify">The body uses a power retractable hardtop. The leather seats in the convertible version are treated with a coating to reflect sunlight, in order to reduce their tendency to become uncomfortably hot with the top down.</p>
            </div>
        )
    }
    else if (snap.current === "tire") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Car tyre</h1>
                <p className="text-xl text-justify">Pirelli Cinturato P7 is the first ever Green Performance tyre from Pirelli. It has been designed and manufactured to meet the needs of modern vehicles, especially the high-end premium cars and SUVs.</p>
            </div>
        )
    }
    else if (snap.current === "glass") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Windshield</h1>
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
                            <Model scale={0.02} />
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
