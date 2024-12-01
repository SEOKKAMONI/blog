interface SpacerProps {
  height?: string | number;
  width?: string | number;
}

const Spacer = ({ height, width }: SpacerProps) => {
  return (
    <div
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    />
  );
};

export default Spacer;
