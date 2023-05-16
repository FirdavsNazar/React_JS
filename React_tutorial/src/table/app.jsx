import './App.css';


const data = [
{ name: "Firdavs", age: 22, gender: "Male", status: 'Developer' },
{ name: "Murodjon", age: 26, gender: "Male", status: 'Developer' },
{ name: "Sirojiddin", age: 25, gender: "Male", status: 'Developer'},
]

function App() {
return (
	<div className="App">
	<table>
		<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Gender</th>
		<th>Status</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.age}</td>
			<td>{val.gender}</td>
			<td>{val.status}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default App;


