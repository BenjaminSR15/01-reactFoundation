interface Person {
  fullName: string;
  age: number;
  lastName: string;
  adress: Adress;
  isAlive?: boolean;
}

interface Adress {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 24,
    fullName: "Benjamin",
    lastName: "Blas",
    isAlive: true,
    adress: {
      country: "mexico",
      houseNo: 615,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>;<pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
