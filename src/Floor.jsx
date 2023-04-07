export default function Floor() {
    return (
        <mesh receiveShadow position-y={ - 2.5 } rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[18, 18]} />
            <meshStandardMaterial color="purple" />
        </mesh>
    )
}