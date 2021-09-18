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
    const { nodes, materials } = useGLTF('/rolls_royce_ghost/scene.gltf')
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
                    <mesh geometry={nodes.defaultMaterial.geometry} material={nodes.defaultMaterial.material} />
                    <mesh geometry={nodes.defaultMaterial_1.geometry} material={nodes.defaultMaterial_1.material} />
                    <mesh geometry={nodes.defaultMaterial_2.geometry} material={nodes.defaultMaterial_2.material} />
                    <mesh geometry={nodes.defaultMaterial_3.geometry} material={nodes.defaultMaterial_3.material} />
                    <mesh geometry={nodes.defaultMaterial_4.geometry} material={nodes.defaultMaterial_4.material} />
                    <mesh geometry={nodes.defaultMaterial_5.geometry} material={nodes.defaultMaterial_5.material} />
                    <mesh geometry={nodes.defaultMaterial_6.geometry} material={nodes.defaultMaterial_6.material} />
                    <mesh geometry={nodes.defaultMaterial_7.geometry} material={nodes.defaultMaterial_7.material} />
                    <mesh geometry={nodes.defaultMaterial_8.geometry} material={nodes.defaultMaterial_8.material} />
                    <mesh geometry={nodes.defaultMaterial_9.geometry} material={nodes.defaultMaterial_9.material} />
                    <mesh geometry={nodes.defaultMaterial_10.geometry} material={nodes.defaultMaterial_10.material} />
                    <mesh geometry={nodes.defaultMaterial_11.geometry} material={nodes.defaultMaterial_11.material} />
                    <mesh geometry={nodes.defaultMaterial_12.geometry} material={nodes.defaultMaterial_12.material} />
                    <mesh geometry={nodes.defaultMaterial_13.geometry} material={nodes.defaultMaterial_13.material} />
                    <mesh geometry={nodes.defaultMaterial_14.geometry} material={nodes.defaultMaterial_14.material} />
                    <mesh geometry={nodes.defaultMaterial_15.geometry} material={nodes.defaultMaterial_15.material} />
                    <mesh geometry={nodes.defaultMaterial_16.geometry} material={nodes.defaultMaterial_16.material} />
                    <mesh geometry={nodes.defaultMaterial_17.geometry} material={nodes.defaultMaterial_17.material} />
                    <mesh geometry={nodes.defaultMaterial_18.geometry} material={nodes.defaultMaterial_18.material} />
                    <mesh geometry={nodes.defaultMaterial_19.geometry} material={materials.tailight_int_chrome_shad} />
                    <mesh geometry={nodes.defaultMaterial_20.geometry} material={materials.tailight_red_strip_shad} />
                    <mesh geometry={nodes.defaultMaterial_21.geometry} material={materials.tailinght_inner_glass_shad} />
                    <mesh geometry={nodes.defaultMaterial_22.geometry} material={materials.brake_light_glass_shad} />
                    <mesh geometry={nodes.defaultMaterial_23.geometry} material={nodes.defaultMaterial_23.material} />
                    <mesh geometry={nodes.defaultMaterial_24.geometry} material={materials.ext_light_shad} />
                    <mesh geometry={nodes.defaultMaterial_25.geometry} material={nodes.defaultMaterial_25.material} />
                    <mesh geometry={nodes.defaultMaterial_26.geometry} material={materials.light_glass_shad} />
                    <mesh geometry={nodes.defaultMaterial_27.geometry} material={nodes.defaultMaterial_27.material} />
                    <mesh geometry={nodes.defaultMaterial_28.geometry} material={nodes.defaultMaterial_28.material} />
                    <mesh geometry={nodes.defaultMaterial_29.geometry} material={nodes.defaultMaterial_29.material} />
                    <mesh geometry={nodes.defaultMaterial_30.geometry} material={nodes.defaultMaterial_30.material} />
                    <mesh geometry={nodes.defaultMaterial_31.geometry} material={materials.hdlight_inner_glass_shad} />
                    <mesh geometry={nodes.defaultMaterial_32.geometry} material={nodes.defaultMaterial_32.material} />
                    <mesh geometry={nodes.defaultMaterial_33.geometry} material={nodes.defaultMaterial_33.material} />
                    <mesh geometry={nodes.defaultMaterial_34.geometry} material={nodes.defaultMaterial_34.material} />
                    <mesh geometry={nodes.defaultMaterial_35.geometry} material={nodes.defaultMaterial_35.material} />
                    <mesh geometry={nodes.defaultMaterial_36.geometry} material={nodes.defaultMaterial_36.material} />
                    <mesh geometry={nodes.defaultMaterial_37.geometry} material={nodes.defaultMaterial_37.material} />
                    <mesh geometry={nodes.defaultMaterial_38.geometry} material={nodes.defaultMaterial_38.material} />
                    <mesh geometry={nodes.defaultMaterial_39.geometry} material={nodes.defaultMaterial_39.material} />
                    <mesh geometry={nodes.defaultMaterial_40.geometry} material={nodes.defaultMaterial_40.material} />
                    <mesh geometry={nodes.defaultMaterial_41.geometry} material={nodes.defaultMaterial_41.material} />
                    <mesh geometry={nodes.defaultMaterial_42.geometry} material={nodes.defaultMaterial_42.material} />
                    <mesh geometry={nodes.defaultMaterial_43.geometry} material={nodes.defaultMaterial_43.material} />
                    <mesh geometry={nodes.defaultMaterial_44.geometry} material={nodes.defaultMaterial_44.material} />
                    <mesh geometry={nodes.defaultMaterial_45.geometry} material={nodes.defaultMaterial_45.material} />
                    <mesh geometry={nodes.defaultMaterial_46.geometry} material={nodes.defaultMaterial_46.material} />
                    <mesh geometry={nodes.defaultMaterial_47.geometry} material={nodes.defaultMaterial_47.material} />
                    <mesh geometry={nodes.defaultMaterial_48.geometry} material={nodes.defaultMaterial_48.material} />
                    <mesh geometry={nodes.defaultMaterial_49.geometry} material={nodes.defaultMaterial_49.material} />
                    <mesh geometry={nodes.defaultMaterial_50.geometry} material={nodes.defaultMaterial_50.material} />
                    <mesh geometry={nodes.defaultMaterial_51.geometry} material={nodes.defaultMaterial_51.material} />
                    <mesh geometry={nodes.defaultMaterial_52.geometry} material={nodes.defaultMaterial_52.material} />
                    <mesh geometry={nodes.defaultMaterial_53.geometry} material={nodes.defaultMaterial_53.material} />
                    <mesh geometry={nodes.defaultMaterial_54.geometry} material={nodes.defaultMaterial_54.material} />
                    <mesh geometry={nodes.defaultMaterial_55.geometry} material={nodes.defaultMaterial_55.material} />
                    <mesh geometry={nodes.defaultMaterial_56.geometry} material={nodes.defaultMaterial_56.material} />
                    <mesh geometry={nodes.defaultMaterial_57.geometry} material={nodes.defaultMaterial_57.material} />
                    <mesh geometry={nodes.defaultMaterial_58.geometry} material={nodes.defaultMaterial_58.material} />
                    <mesh geometry={nodes.defaultMaterial_59.geometry} material={nodes.defaultMaterial_59.material} />
                    <mesh geometry={nodes.defaultMaterial_60.geometry} material={nodes.defaultMaterial_60.material} />
                    <mesh geometry={nodes.defaultMaterial_61.geometry} material={nodes.defaultMaterial_61.material} />
                    <mesh geometry={nodes.defaultMaterial_62.geometry} material={nodes.defaultMaterial_62.material} />
                    <mesh geometry={nodes.defaultMaterial_63.geometry} material={nodes.defaultMaterial_63.material} />
                    <mesh geometry={nodes.defaultMaterial_64.geometry} material={nodes.defaultMaterial_64.material} />
                    <mesh geometry={nodes.defaultMaterial_65.geometry} material={nodes.defaultMaterial_65.material} />
                    <mesh geometry={nodes.defaultMaterial_66.geometry} material={nodes.defaultMaterial_66.material} />
                    <mesh geometry={nodes.defaultMaterial_67.geometry} material={nodes.defaultMaterial_67.material} />
                    <mesh geometry={nodes.defaultMaterial_68.geometry} material={nodes.defaultMaterial_68.material} />
                    <mesh geometry={nodes.defaultMaterial_69.geometry} material={nodes.defaultMaterial_69.material} />
                    <mesh geometry={nodes.defaultMaterial_70.geometry} material={nodes.defaultMaterial_70.material} />
                    <mesh geometry={nodes.defaultMaterial_71.geometry} material={nodes.defaultMaterial_71.material} />
                    <mesh geometry={nodes.defaultMaterial_72.geometry} material={nodes.defaultMaterial_72.material} />
                    <mesh geometry={nodes.defaultMaterial_73.geometry} material={nodes.defaultMaterial_73.material} />
                    <mesh geometry={nodes.defaultMaterial_74.geometry} material={nodes.defaultMaterial_74.material} />
                    <mesh geometry={nodes.defaultMaterial_75.geometry} material={nodes.defaultMaterial_75.material} />
                    <mesh geometry={nodes.defaultMaterial_76.geometry} material={nodes.defaultMaterial_76.material} />
                    <mesh geometry={nodes.defaultMaterial_77.geometry} material={nodes.defaultMaterial_77.material} />
                    <mesh geometry={nodes.defaultMaterial_78.geometry} material={nodes.defaultMaterial_78.material} />
                    <mesh geometry={nodes.defaultMaterial_79.geometry} material={nodes.defaultMaterial_79.material} />
                    <mesh geometry={nodes.defaultMaterial_80.geometry} material={nodes.defaultMaterial_80.material} />
                    <mesh geometry={nodes.defaultMaterial_81.geometry} material={nodes.defaultMaterial_81.material} />
                    <mesh geometry={nodes.defaultMaterial_82.geometry} material={nodes.defaultMaterial_82.material} />
                    <mesh geometry={nodes.defaultMaterial_83.geometry} material={nodes.defaultMaterial_83.material} />
                    <mesh geometry={nodes.defaultMaterial_84.geometry} material={nodes.defaultMaterial_84.material} />
                    <mesh geometry={nodes.defaultMaterial_85.geometry} material={nodes.defaultMaterial_85.material} />
                    <mesh geometry={nodes.defaultMaterial_86.geometry} material={nodes.defaultMaterial_86.material} />
                    <mesh geometry={nodes.defaultMaterial_87.geometry} material={nodes.defaultMaterial_87.material} />
                    <mesh geometry={nodes.defaultMaterial_88.geometry} material={nodes.defaultMaterial_88.material} />
                    <mesh geometry={nodes.defaultMaterial_89.geometry} material={nodes.defaultMaterial_89.material} />
                    <mesh geometry={nodes.defaultMaterial_90.geometry} material={nodes.defaultMaterial_90.material} />
                    <mesh geometry={nodes.defaultMaterial_91.geometry} material={nodes.defaultMaterial_91.material} />
                    <mesh geometry={nodes.defaultMaterial_92.geometry} material={nodes.defaultMaterial_92.material} />
                    <mesh geometry={nodes.defaultMaterial_93.geometry} material={nodes.defaultMaterial_93.material} />
                    <mesh geometry={nodes.defaultMaterial_94.geometry} material={nodes.defaultMaterial_94.material} />
                    <mesh geometry={nodes.defaultMaterial_95.geometry} material={nodes.defaultMaterial_95.material} />
                    <mesh geometry={nodes.defaultMaterial_96.geometry} material={nodes.defaultMaterial_96.material} />
                    <mesh geometry={nodes.defaultMaterial_97.geometry} material={nodes.defaultMaterial_97.material} />
                    <mesh geometry={nodes.defaultMaterial_98.geometry} material={nodes.defaultMaterial_98.material} />
                    <mesh geometry={nodes.defaultMaterial_99.geometry} material={nodes.defaultMaterial_99.material} />
                    <mesh geometry={nodes.defaultMaterial_100.geometry} material={nodes.defaultMaterial_100.material} />
                    <mesh geometry={nodes.defaultMaterial_101.geometry} material={nodes.defaultMaterial_101.material} />
                    <mesh geometry={nodes.defaultMaterial_102.geometry} material={nodes.defaultMaterial_102.material} />
                    <mesh geometry={nodes.defaultMaterial_103.geometry} material={nodes.defaultMaterial_103.material} />
                    <mesh geometry={nodes.defaultMaterial_104.geometry} material={nodes.defaultMaterial_104.material} />
                    <mesh geometry={nodes.defaultMaterial_105.geometry} material={nodes.defaultMaterial_105.material} />
                    <mesh geometry={nodes.defaultMaterial_106.geometry} material={materials.small_light_shad} />
                    <mesh geometry={nodes.defaultMaterial_107.geometry} material={nodes.defaultMaterial_107.material} />
                    <mesh geometry={nodes.defaultMaterial_108.geometry} material={nodes.defaultMaterial_108.material} />
                    <mesh geometry={nodes.defaultMaterial_109.geometry} material={nodes.defaultMaterial_109.material} />
                    <mesh geometry={nodes.defaultMaterial_110.geometry} material={nodes.defaultMaterial_110.material} />
                    <mesh geometry={nodes.defaultMaterial_111.geometry} material={nodes.defaultMaterial_111.material} />
                    <mesh geometry={nodes.defaultMaterial_112.geometry} material={nodes.defaultMaterial_112.material} />
                    <mesh geometry={nodes.defaultMaterial_113.geometry} material={nodes.defaultMaterial_113.material} />
                    <mesh geometry={nodes.defaultMaterial_114.geometry} material={nodes.defaultMaterial_114.material} />
                    <mesh geometry={nodes.defaultMaterial_115.geometry} material={nodes.defaultMaterial_115.material} />
                    <mesh geometry={nodes.defaultMaterial_116.geometry} material={nodes.defaultMaterial_116.material} />
                    <mesh geometry={nodes.defaultMaterial_117.geometry} material={nodes.defaultMaterial_117.material} />
                    <mesh geometry={nodes.defaultMaterial_118.geometry} material={nodes.defaultMaterial_118.material} />
                    <mesh geometry={nodes.defaultMaterial_119.geometry} material={nodes.defaultMaterial_119.material} />
                    <mesh geometry={nodes.defaultMaterial_120.geometry} material={nodes.defaultMaterial_120.material} />
                    <mesh geometry={nodes.defaultMaterial_121.geometry} material={nodes.defaultMaterial_121.material} />
                    <mesh geometry={nodes.defaultMaterial_122.geometry} material={nodes.defaultMaterial_122.material} />
                    <mesh geometry={nodes.defaultMaterial_123.geometry} material={nodes.defaultMaterial_123.material} />
                    <mesh geometry={nodes.defaultMaterial_124.geometry} material={nodes.defaultMaterial_124.material} />
                    <mesh geometry={nodes.defaultMaterial_125.geometry} material={nodes.defaultMaterial_125.material} />
                    <mesh geometry={nodes.defaultMaterial_126.geometry} material={nodes.defaultMaterial_126.material} />
                    <mesh geometry={nodes.defaultMaterial_127.geometry} material={nodes.defaultMaterial_127.material} />
                    <mesh geometry={nodes.defaultMaterial_128.geometry} material={nodes.defaultMaterial_128.material} />
                    <mesh geometry={nodes.defaultMaterial_129.geometry} material={nodes.defaultMaterial_129.material} />
                    <mesh geometry={nodes.defaultMaterial_130.geometry} material={nodes.defaultMaterial_130.material} />
                    <mesh geometry={nodes.defaultMaterial_131.geometry} material={nodes.defaultMaterial_131.material} />
                    <mesh geometry={nodes.defaultMaterial_132.geometry} material={nodes.defaultMaterial_132.material} />
                    <mesh geometry={nodes.defaultMaterial_133.geometry} material={nodes.defaultMaterial_133.material} />
                    <mesh geometry={nodes.defaultMaterial_134.geometry} material={nodes.defaultMaterial_134.material} />
                    <mesh geometry={nodes.defaultMaterial_135.geometry} material={nodes.defaultMaterial_135.material} />
                    <mesh geometry={nodes.defaultMaterial_136.geometry} material={nodes.defaultMaterial_136.material} />
                    <mesh geometry={nodes.defaultMaterial_137.geometry} material={nodes.defaultMaterial_137.material} />
                    <mesh geometry={nodes.defaultMaterial_138.geometry} material={nodes.defaultMaterial_138.material} />
                    <mesh geometry={nodes.defaultMaterial_139.geometry} material={nodes.defaultMaterial_139.material} />
                    <mesh geometry={nodes.defaultMaterial_140.geometry} material={nodes.defaultMaterial_140.material} />
                    <mesh geometry={nodes.defaultMaterial_141.geometry} material={nodes.defaultMaterial_141.material} />
                    <mesh geometry={nodes.defaultMaterial_142.geometry} material={nodes.defaultMaterial_142.material} />
                    <mesh geometry={nodes.defaultMaterial_143.geometry} material={nodes.defaultMaterial_143.material} />
                    <mesh geometry={nodes.defaultMaterial_144.geometry} material={nodes.defaultMaterial_144.material} />
                    <mesh geometry={nodes.defaultMaterial_145.geometry} material={nodes.defaultMaterial_145.material} />
                    <mesh geometry={nodes.defaultMaterial_146.geometry} material={nodes.defaultMaterial_146.material} />
                    <mesh geometry={nodes.defaultMaterial_147.geometry} material={nodes.defaultMaterial_147.material} />
                    <mesh geometry={nodes.defaultMaterial_148.geometry} material={nodes.defaultMaterial_148.material} />
                    <mesh geometry={nodes.defaultMaterial_149.geometry} material={nodes.defaultMaterial_149.material} />
                    <mesh geometry={nodes.defaultMaterial_150.geometry} material={nodes.defaultMaterial_150.material} />
                    <mesh geometry={nodes.defaultMaterial_151.geometry} material={nodes.defaultMaterial_151.material} />
                    <mesh geometry={nodes.defaultMaterial_152.geometry} material={nodes.defaultMaterial_152.material} />
                    <mesh geometry={nodes.defaultMaterial_153.geometry} material={nodes.defaultMaterial_153.material} />
                    <mesh geometry={nodes.defaultMaterial_154.geometry} material={nodes.defaultMaterial_154.material} />
                    <mesh geometry={nodes.defaultMaterial_155.geometry} material={nodes.defaultMaterial_155.material} />
                    <mesh geometry={nodes.defaultMaterial_156.geometry} material={nodes.defaultMaterial_156.material} />
                    <mesh geometry={nodes.defaultMaterial_157.geometry} material={nodes.defaultMaterial_157.material} />
                    <mesh geometry={nodes.defaultMaterial_158.geometry} material={nodes.defaultMaterial_158.material} />
                    <mesh geometry={nodes.defaultMaterial_159.geometry} material={nodes.defaultMaterial_159.material} />
                    <mesh geometry={nodes.defaultMaterial_160.geometry} material={nodes.defaultMaterial_160.material} />
                    <mesh geometry={nodes.defaultMaterial_161.geometry} material={nodes.defaultMaterial_161.material} />
                    <mesh geometry={nodes.defaultMaterial_162.geometry} material={nodes.defaultMaterial_162.material} />
                    <mesh geometry={nodes.defaultMaterial_163.geometry} material={nodes.defaultMaterial_163.material} />
                    <mesh geometry={nodes.defaultMaterial_164.geometry} material={nodes.defaultMaterial_164.material} />
                    <mesh geometry={nodes.defaultMaterial_165.geometry} material={nodes.defaultMaterial_165.material} />
                    <mesh geometry={nodes.defaultMaterial_166.geometry} material={nodes.defaultMaterial_166.material} />
                    <mesh geometry={nodes.defaultMaterial_167.geometry} material={nodes.defaultMaterial_167.material} />
                    <mesh geometry={nodes.defaultMaterial_168.geometry} material={nodes.defaultMaterial_168.material} />
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    // if (snap.current === "mat_14") {
    //     return (
    //         <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
    //             <h1 className="text-3xl uppercase">Tyre</h1>
    //             <p className="text-xl text-justify">265/35R19 front tyres with 19×9.5 inch AMG light-alloy wheels and AMG 20×11.5-inch light-alloy wheels with 325/30R20 tyres (Dunlop Sport Maxx GT tyres), 6-piston front calipers with 390×36mm discs and 4-piston calipers with 360×26mm discs.</p>
    //         </div>
    //     )
    // }
    // else if (snap.current === "mat_9") {
    //     return (
    //         <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
    //             <h1 className="text-3xl uppercase">Headlamp</h1>
    //             <p className="text-xl text-justify">A headlamp is a lamp attached to the front of a vehicle to illuminate the road ahead. Headlamps are also often called headlights, but in the most precise usage, headlamp is the term for the device itself and headlight is the term for the beam of light produced and distributed by the device.</p>
    //         </div>
    //     )
    // }
    // else if (snap.current === "mat_0") {
    //     return (
    //         <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
    //             <h1 className="text-3xl uppercase">Body</h1>
    //             <p className="text-xl text-justify">Body style include 2-doors and retractable hardtop. ABC (Active Body Control) was improved to reduce body movements in dynamic driving by up to 60%, standard on all models except the SL 350.</p>
    //         </div>
    //     )
    // }
    // else if (snap.current === "mat_15") {
    //     return (
    //         <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
    //             <h1 className="text-3xl uppercase">Front Glass</h1>
    //             <p className="text-xl text-justify">The first piece of glass that you encounter on most vehicles is its windshield. Also known as a windscreen on European cars. The windshield plays a critical role in supporting the structure of the car and protecting the driver and passengers.</p>
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
    //             <h1 className="text-2xl tracking-wider">Click on the different parts of car to know more</h1>
    //         </div>
    //     )
    // }
    return (
        <div>
            {snap.current}
        </div>
    )
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
