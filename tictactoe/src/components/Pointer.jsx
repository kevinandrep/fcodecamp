export function Pointer({ isActive, position }) {
  if (!isActive) return;
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(41, 199, 178, 0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      ></div>
    </>
  );
}
