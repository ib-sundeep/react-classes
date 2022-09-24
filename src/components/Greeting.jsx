function Greeting({ firstName, lastName }) {
  console.log('Greeting', { firstName });
  return (
    <div>
      Hello {firstName} {lastName}
    </div>
  )
}

export default Greeting;
