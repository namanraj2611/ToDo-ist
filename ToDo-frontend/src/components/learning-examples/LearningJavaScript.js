const person = {
  name: "Naman",
  address: {
    line1: "60, ugf, Aram Park",
    city: "Delhi",
    country: "India",
  },
  profiles: ["Twitter", "Facebook", "Youtube"],
  // we can create functions in the object itself, example below
  printProfiles: () => {
    person.profiles.map((profile) => console.log(profile));
  },
};

export default function LearningComponent() {
  return (
    <>
      <div>{person.name}</div>
      <div>{person.address.country}</div>
      <div>{person.profiles[0]}</div>
      <div>{person.printProfiles()}</div>
    </>
  );
}
