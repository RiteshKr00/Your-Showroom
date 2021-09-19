import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";

const state = proxy({
  current: null,
  items: {
    Base: "#ffffff",
    BadgeA: "#ffffff",
    GlassDarkMtl: "#ffffff",
    GlassMtl: "#ffffff",
    Grille1A: "#ffffff",
    Grille2A: "#ffffff",
    Grille3A: "#ffffff",
    Grille4A: "#ffffff",
    Grille5A: "#ffffff",
    GlassRedMtl: "#ffffff",
    Lights: "#ffffff",
    Paint: "#ffffff",
    TexturedA: "#ffffff",
    InteriorTillingColourZoneA: "#ffffff",
    wire_141007058: "#ffffff",
    interior: "#ffffff",
    engine_o: "#ffffff",
    interior_o: "#ffffff",
    color1_o: "#ffffff",
    color2_o: "#ffffff",
    engine: "#ffffff",
    CalliperBadgeBMtl: "#ffffff",
    mesh_22: "#ffffff",
    mesh_23: "#ffffff",
    ColouredMtl: "#ffffff",
    paint1Mtl: "#ffffff",
    mesh_26: "#ffffff",
    mesh_27: "#ffffff",
    mesh_28: "#ffffff",
    mesh_29: "#ffffff",
  },
});

function Model() {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF(
    "/ford_mustang_roush_2019_-_stage_3/scene.gltf"
  );

  const [hovered, set] = useState(null);

  return (
    <group
      ref={ref}
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={materials.Base}
        material-color={snap.items.Base}
      />
      <mesh
        geometry={nodes.mesh_1.geometry}
        material={materials.BadgeA}
        material-color={snap.items.BadgeA}
      />
      <mesh
        geometry={nodes.mesh_2.geometry}
        material={materials.GlassDarkMtl}
        material-color={snap.items.GlassDarkMtl}
      />
      <mesh
        geometry={nodes.mesh_3.geometry}
        material={materials.GlassMtl}
        material-color={snap.items.GlassMtl}
      />
      <mesh
        geometry={nodes.mesh_4.geometry}
        material={materials.Grille1A}
        material-color={snap.items.Grille1A}
      />
      <mesh
        geometry={nodes.mesh_5.geometry}
        material={materials.Grille2A}
        material-color={snap.items.Grille2A}
      />
      <mesh
        geometry={nodes.mesh_6.geometry}
        material={materials.Grille3A}
        material-color={snap.items.Grille3A}
      />
      <mesh
        geometry={nodes.mesh_7.geometry}
        material={materials.Grille4A}
        material-color={snap.items.Grille4A}
      />
      <mesh
        geometry={nodes.mesh_8.geometry}
        material={materials.Grille5A}
        material-color={snap.items.Grille5A}
      />
      <mesh
        geometry={nodes.mesh_9.geometry}
        material={materials.GlassRedMtl}
        material-color={snap.items.GlassRedMtl}
      />
      <mesh
        geometry={nodes.mesh_10.geometry}
        material={materials.Lights}
        material-color={snap.items.Lights}
      />
      <mesh
        geometry={nodes.mesh_11.geometry}
        material={materials.Paint}
        material-color={snap.items.Paint}
      />
      <mesh
        geometry={nodes.mesh_12.geometry}
        material={materials.TexturedA}
        material-color={snap.items.TexturedA}
      />
      <mesh
        geometry={nodes.mesh_13.geometry}
        material={materials.InteriorTillingColourZoneA}
        material-color={snap.items.InteriorTillingColourZoneA}
      />
      <mesh
        geometry={nodes.mesh_14.geometry}
        material={materials.wire_141007058}
        material-color={snap.items.wire_141007058}
      />
      <mesh
        geometry={nodes.mesh_15.geometry}
        material={materials.interior}
        material-color={snap.items.interior}
      />
      <mesh
        geometry={nodes.mesh_16.geometry}
        material={materials.engine_o}
        material-color={snap.items.engine_o}
      />
      <mesh
        geometry={nodes.mesh_17.geometry}
        material={materials.interior_o}
        material-color={snap.items.interior_o}
      />
      <mesh
        geometry={nodes.mesh_18.geometry}
        material={materials.color1_o}
        material-color={snap.items.color1_o}
      />
      <mesh
        geometry={nodes.mesh_19.geometry}
        material={materials.color2_o}
        material-color={snap.items.color2_o}
      />
      <mesh
        geometry={nodes.mesh_20.geometry}
        material={materials.engine}
        material-color={snap.items.engine}
      />
      <mesh
        geometry={nodes.mesh_21.geometry}
        material={materials.CalliperBadgeBMtl}
        material-color={snap.items.CalliperBadgeBMtl}
      />
      <mesh
        geometry={nodes.mesh_22.geometry}
        material={nodes.mesh_22.material}
        material-color={snap.items.mesh_22}
      />
      <mesh
        geometry={nodes.mesh_23.geometry}
        material={nodes.mesh_23.material}
        material-color={snap.items.mesh_23}
      />
      <mesh
        geometry={nodes.mesh_24.geometry}
        material={materials.ColouredMtl}
        material-color={snap.items.ColouredMtl}
      />
      <mesh
        geometry={nodes.mesh_25.geometry}
        material={materials.paint1Mtl}
        material-color={snap.items.paint1Mtl}
      />
      <mesh
        geometry={nodes.mesh_26.geometry}
        material={nodes.mesh_26.material}
        material-color={snap.items.mesh_26}
      />
      <mesh
        geometry={nodes.mesh_27.geometry}
        material={nodes.mesh_27.material}
        material-color={snap.items.mesh_27}
      />
      <mesh
        geometry={nodes.mesh_28.geometry}
        material={nodes.mesh_28.material}
        material-color={snap.items.mesh_28}
      />
      <mesh
        geometry={nodes.mesh_29.geometry}
        material={nodes.mesh_29.material}
        material-color={snap.items.mesh_29}
      />
    </group>
  );
}

function Picker() {
  const snap = useSnapshot(state);
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
    </div>
  );
}

export default function FordColor() {
  return (
    <div className="w-full h-screen cursor-pointer ">
      {/* <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 4, 4], fov: 50 }}>
                <ambientLight intensity={0.9} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
                    <Model scale={0.005} />
                    <Environment preset="city" />
                    <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                </Suspense>
                <OrbitControls />
            </Canvas> */}
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, -80, 10], fov: 20 }}>
        {/* <ambientLight intensity={0.9} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        /> */}
        <Suspense fallback={null}>
          <Model scale={-10} />
          <Environment preset="city" />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.8, 0]}
            opacity={0.25}
            width={10}
            height={10}
            blur={1.5}
            far={0.8}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Picker />
    </div>
  );
}
