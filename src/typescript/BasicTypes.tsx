export const BasicTypes = () => {
  const name = "Benjamin";
  const age = 24;
  const isActive = true;
  const powers: string[] = ["react", "reactNative", "angular"];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} {age} {isActive ? "true" : "false"}
      <br />
      {powers.join(".cd, .com")}
    </>
  );
};
