function AddPersonForm(props){
    const [person, setPerson] = React.useState('');

    function inputChange(e){
        setPerson(e.target.value);
    }

    function inputSubmit(e){
        e.preventDefault();
        if(person!==''){
        props.submit(person);
        setPerson('');
        }
    }

    return (
        <form onSubmit={inputSubmit}>
        <input type="text" onChange={inputChange} value={person}/>
        <button type="submit">Add</button>
        </form>
    );
}
function Person(props){
    function remove(e){
        e.target.parentNode.remove();
    }
    return (
    <li>
        <span>{props.value}</span>
        <button onClick={remove}>X</button>
    </li>
    );
}
function PeopleList(props){
    const data = props.data;
    const arr = data.map((el, id)=> <Person key={id} index={id} value={el}/>);
    return <ul>{arr}</ul>;
}
function ManageForm(props){
    const [peoples, setData] = React.useState(props.data);

    function addNewPerson(person){
        setData([...peoples, person]);
    }

    return (
        <div>
            <AddPersonForm submit={addNewPerson}/>
            <PeopleList data={peoples}/>
        </div>
    );
}
const example = ['nam', 'thu'];
ReactDOM.render(<ManageForm data={example}/>, document.getElementById('root'));
