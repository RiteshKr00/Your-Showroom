import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
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

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    ref.current.rotation.x = Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  // Cursor showing current color
  const [hovered, set] = useState(null);
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      hovered ? cursor : auto
    )}'), auto`;
  }, [hovered]);

  // Using the GLTFJSX output here to wire in app-state and hook up events
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
        receiveShadow
        castShadow
        geometry={nodes.mesh_0.geometry}
        material={materials.Base}
        material-color={snap.items.Base}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_1.geometry}
        material={materials.BadgeA}
        material-color={snap.items.BadgeA}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_2.geometry}
        material={materials.GlassDarkMtl}
        material-color={snap.items.GlassDarkMtl}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_3.geometry}
        material={materials.GlassMtl}
        material-color={snap.items.GlassMtl}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_4.geometry}
        material={materials.Grille1A}
        material-color={snap.items.Grille1A}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_5.geometry}
        material={materials.Grille2A}
        material-color={snap.items.Grille2A}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_6.geometry}
        material={materials.Grille3A}
        material-color={snap.items.Grille3A}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_7.geometry}
        material={materials.Grille4A}
        material-color={snap.items.Grille4A}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_8.geometry}
        material={materials.Grille5A}
        material-color={snap.items.Grille5A}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_9.geometry}
        material={materials.GlassRedMtl}
        material-color={snap.items.GlassRedMtl}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_10.geometry}
        material={materials.Lights}
        material-color={snap.items.Lights}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_11.geometry}
        material={materials.Paint}
        material-color={snap.items.Paint}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_12.geometry}
        material={materials.TexturedA}
        material-color={snap.items.TexturedA}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_13.geometry}
        material={materials.InteriorTillingColourZoneA}
        material-color={snap.items.InteriorTillingColourZoneA}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_14.geometry}
        material={materials.wire_141007058}
        material-color={snap.items.wire_141007058}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_15.geometry}
        material={materials.interior}
        material-color={snap.items.interior}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_16.geometry}
        material={materials.engine_o}
        material-color={snap.items.engine_o}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_17.geometry}
        material={materials.interior_o}
        material-color={snap.items.interior_o}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_18.geometry}
        material={materials.color1_o}
        material-color={snap.items.color1_o}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_19.geometry}
        material={materials.color2_o}
        material-color={snap.items.color2_o}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_20.geometry}
        material={materials.engine}
        material-color={snap.items.engine}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_21.geometry}
        material={materials.CalliperBadgeBMtl}
        material-color={snap.items.CalliperBadgeBMtl}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_22.geometry}
        material={nodes.mesh_22.material}
        material-color={snap.items.mesh_22}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_23.geometry}
        material={nodes.mesh_23.material}
        material-color={snap.items.mesh_23}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_24.geometry}
        material={materials.ColouredMtl}
        material-color={snap.items.ColouredMtl}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_25.geometry}
        material={materials.paint1Mtl}
        material-color={snap.items.paint1Mtl}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_26.geometry}
        material={nodes.mesh_26.material}
        material-color={snap.items.mesh_26}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_27.geometry}
        material={nodes.mesh_27.material}
        material-color={snap.items.mesh_27}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.mesh_28.geometry}
        material={nodes.mesh_28.material}
        material-color={snap.items.mesh_28}
      />
      <mesh
        receiveShadow
        castShadow
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
    <div className="w-full h-screen cursor-pointer">
            <Link to="/" className="m-4">Return home</Link>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, -80, 10], fov: 20 }}>
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
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
