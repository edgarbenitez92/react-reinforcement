interface Person {
  name: string;
  age: number;
  address: Address
}

interface Address {
  country: string;
  street: string;
}

export const ObjetosLiterales = () => {

  const person: Person = {
    name: 'Edgar',
    age: 29,
    address: {
      country: 'Chile',
      street: 'Porvenir'
    }
  }

  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>
          {JSON.stringify(person, null, 2)}
        </pre>
      </code>
    </>
  )
}
