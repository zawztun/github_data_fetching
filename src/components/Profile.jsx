import React, { useState } from "react";
import DisplayTable from "./DisplayTable";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
     //console.log(profileJson);

const repositories = await fetch(profileJson.repos_url);
const repositoriesJson = await repositories.json();
//console.log(repositoriesJson);
if(profileJson){
setData(profileJson)
setRepositories(repositoriesJson )
}
  }
  
  return (
    <>
      <div style={{ padding: 20 }}>
        <form className="ui search" onSubmit = {submitHandler}>
          <div className="ui icon input">
            <input
              className="prompt"
              placeholder="search github username here..."
              type="text"
              value={username}
              onChange={e=>setUsername(e.target.value)}
            />
        <button className = "ui button blue">
        <i className="github small icon"></i>
          Search</button>
          </div>
    
        </form>
      </div>
        <DisplayTable data = {data} repos = {repositories}/>
    </>
  );
};
export default Profile;