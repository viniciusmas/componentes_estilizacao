import Style from "./style.module.css";
import { useState, useEffect } from "react";

export function ProfileCard({ name, age, bio, avatarUrl, skills }) {
  const [newAge, setNewAge] = useState(parseInt(age.toString()));
  const [selected, setSelected] = useState(false);
  const [isValid, setValid] = useState(false);
  const [data, setData] = useState({ bio });

  function handleClick() {
    console.log("antes", newAge);
    setNewAge((prv) => prv + 1);
    console.log("depois", newAge);
  }

  function handleSelect() {
    setSelected((prv) => !prv);
  }

  function handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    setData({ ...data, [name]: value });
    checkIsValid();
  }

  function checkIsValid() {
    if (data.bio.includes("Java")) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  useEffect(() => {
    console.log("Mudou data", data);
    checkIsValid();
  }, [data]);

  return (
    <div
      className={`${Style.card} ${selected ? Style.selected : ""}`}
      onClick={handleSelect}
    >
      <img src={avatarUrl} alt="Avatar" />
      <div className={Style.data}>
        <div className={Style.title}>
          {name} - {newAge} <button onClick={handleClick}>+</button>
        </div>
        <div>{data.bio}</div>
        <div className={Style.skills}>
          {skills.map((skill) => (
            <SkillItem key={skill} name={skill} />
          ))}
        </div>
        <input
          name="bio"
          defaultValue={data.bio}
          onChange={handleChange}
        ></input>
        {!isValid && (
          <div style={{ color: "red" }}>
            Não é válido. Coloque "Java" na sua bio
          </div>
        )}
        <pre>{JSON.stringify({ data })}</pre>
      </div>
    </div>
  );
}

function SkillItem({ name }) {
  return <div className={Style.item}>{name}</div>;
}
