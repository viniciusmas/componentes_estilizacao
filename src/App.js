import "./App.css";
import { useState } from "react";
import { ProfileCard } from "./components/ProfileCard";

function App() {
  const data = {
    name: "Vinicius M A Souza",
    age: "45",
    bio: "Sou DEV",
    avatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocKdlnv7gu3voaRanaCsmhuqJAkQs8a-P6QPkWXxs2Y7SA5ErY0=s96-c",
    skills: ["ReactJs", "PHP", "React Native", "Angular", "Laravel"],
  };

  const [login, setLogin] = useState(false);

  if (!login) {
    return (
      <div>
        <button
          onClick={() => {
            setLogin(true);
          }}
        >
          Fazer login
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          setLogin(false);
        }}
      >
        Fazer logout
      </button>
      <ProfileCard
        name={data.name}
        age={data.age}
        bio={data.bio}
        avatarUrl={data.avatarUrl}
        skills={data.skills}
      />

      <ProfileCard {...data} age={40} />
    </div>
  );
}

export default App;
