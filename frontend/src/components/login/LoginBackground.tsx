import { Canvas } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import styles from "../../css/utils/background.module.css";
import { Model } from "../utils/Tea_1";

const LoginBackground = () => {
  return (
    <div className={styles.container}>
      <Canvas
        camera={{ position: [0, 0, 2], fov: 70 }}
        shadows={true}
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(23, 28, 86, 1), rgba(95, 135, 250, 1))",
        }}
      >
        <Float
          speed={6} // 回転速度。デフォルトでは1
          rotationIntensity={0} // 回転強度。デフォルトでは1
          floatIntensity={1} // 上下の Float の強度。デフォルトでは1
          floatingRange={[-0.1, 0.1]} // オブジェクトが浮動する Y 軸値の範囲。デフォルトは [-0.1,0.1]
        >
          <Model position={[0, 0, -5]} rotation={[0, Math.PI / 2, 0]} />
        </Float>
        <Environment preset="sunset" background={false} />
        <Stars
          radius={10}
          depth={100}
          count={2000}
          factor={10}
          saturation={-1}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
};

export default LoginBackground;
