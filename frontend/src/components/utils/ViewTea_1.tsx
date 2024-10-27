import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./Tea_1";
import { ContactShadows, Environment, Float, Stars } from "@react-three/drei";
import styles from "../../css/utils/background.module.css";

// Propsの型定義
interface ViewProps {
  enviroment:
    | "apartment"
    | "city"
    | "dawn"
    | "forest"
    | "lobby"
    | "night"
    | "park"
    | "studio"
    | "sunset"
    | "warehouse"
    | undefined;
  colors?: string[];
}

const ViewTea_1: React.FC<ViewProps> = ({ enviroment, colors }) => {
  return (
    <div className={styles.container}>
      {enviroment == undefined ? (
        <>
          <Canvas
            camera={{ position: [0, 0, 2], fov: 70 }}
            shadows={true}
            style={{
              backgroundImage: "linear-gradient(180deg, #DC5DCB, #748DED)",
            }}
          >
            <Float
              speed={6} // 回転速度。デフォルトでは1
              rotationIntensity={0} // 回転強度。デフォルトでは1
              floatIntensity={1} // 上下の Float の強度。デフォルトでは1
              floatingRange={[-0.1, 0.1]} // オブジェクトが浮動する Y 軸値の範囲。デフォルトは [-0.1,0.1]
            >
              <Model
                position={[0, 0, -3]}
                rotation={[0, Math.PI / 2, 0]}
                colors={colors}
              />
              <Environment preset="sunset" background={false} />
              <ContactShadows
                position={[0, -1.5, 0]}
                opacity={0.5}
                scale={10}
                blur={2.5}
                far={4.5}
              />
              <Stars
                radius={10}
                depth={100}
                count={2000}
                factor={10}
                saturation={-1}
                fade
                speed={1}
              />
            </Float>
          </Canvas>
        </>
      ) : (
        <Canvas camera={{ position: [0, 0, 2], fov: 70 }} shadows={true}>
          <Float
            speed={6} // 回転速度。デフォルトでは1
            rotationIntensity={0} // 回転強度。デフォルトでは1
            floatIntensity={1} // 上下の Float の強度。デフォルトでは1
            floatingRange={[-0.1, 0.1]} // オブジェクトが浮動する Y 軸値の範囲。デフォルトは [-0.1,0.1]
          >
            <Model
              position={[0, 0, -3]}
              rotation={[0, Math.PI / 2, 0]}
              colors={colors}
            />
            <Environment
              preset={enviroment}
              background
              backgroundRotation={[0, Math.PI / -0.9, 0]}
            />
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.5}
              scale={10}
              blur={2.5}
              far={4.5}
            />
          </Float>
        </Canvas>
      )}
    </div>
  );
};

export default ViewTea_1;
