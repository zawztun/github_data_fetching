
const DisplayTable = ({data, repos}) => {
return (
<div>
<table className="ui fixed single line celled table">
  <thead>
    <tr>
   <th>Name</th>
    <th>Avator</th>
    <th>Location</th>
    <th>Bio</th>
    <th>Respositories</th>
   </tr>
</thead>
  <tbody>
    <tr>
      <td>{data.name}</td>
      <td>{!data.avatar_url ? (" ") : (
         <img className = 'ui small circular image'
         src = {data.avatar_url} 
         alt = {data.avator_url}/>
      )}</td>
         <td>{data.location}</td>
         <td>{data.bio}</td>
         <td>{
      repos.map((repo)=>(
        <li key = {repo.name}>{repo.name}</li>
            ))
         }</td>

    </tr>
  </tbody>
</table>
</div>
)
}
export default DisplayTable