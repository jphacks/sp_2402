import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Stars } from "@react-three/drei";
import styles from "../../css/utils/background.module.css";

const LabelBackground = () => {
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
      </Canvas>
    </div>
  );
};

export default LabelBackground;
