import './App.css';

function AppJSX() {
  const name = 'jjeong';
  const list = ['우유','딸기','바나나','배'];
  return <>
    <h1 className='orange'>{`Hello!! ${name}`}</h1>
    <h2>Hello!</h2>
    <p>{name}</p>
    <ul>
      {
        list.map(item => (
        <li>{item}</li>
        ))}
    </ul>
    <img style={{width:'200px',height:'200px'}} src="https://images.unsplash.com/photo-1667942206042-be3be04de8b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="nature"></img>
  </>
  
}

export default AppJSX;
