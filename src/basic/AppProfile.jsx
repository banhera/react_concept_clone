import './App.css';
import Avartar from './components/Avatar';
import Profile from './components/Profile';

export default function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert('버튼클릭');
  };
  return (
  <>
  <button onClick={handleClick}>버튼</button>
    <Avartar image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'isNew={true} />
    <Profile image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' name='James Kim' title='프론트엔트개발자' isNew={true}></Profile>
    <Profile image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80' name='James Kim' title='프론트엔트개발자'></Profile>
    <Profile image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' name='James Kim' title='프론트엔트개발자'></Profile>
  </>
  );
}


