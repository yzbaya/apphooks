import React,{ useEffect, useState } from 'react';
import Post from './post';

//boutton illi trahja3 lel 0

const App = ({initialCount}) => {
  const [state, setState] = useState({
    count: initialCount,
    user:"Francis"
  });


 //fct mta3 les information illi 9a3dine yetzedou

  let [posts,setPosts] = useState([
    { 
      name:'Super awesome post',
      body:'The content of the post'
    },
    { 
      name:'JS is great',
      body:'something else'
    },
  ])


//fct mta3 l boutton illi 9a3da tna9es
  const restOne = () => {
    setState({
      ...state,
      count:state.count-1
    })
  }

//l ma3loumet illi bech yetzedou fi le5er ki nenzel 3al boutton mta3 add on more
  const addOnePost = () => {
    let newPost = {
      name:'PHP is still awesome',
      body:'something about php'
    }

    setPosts([
      ...posts,
      newPost
    ]);

  }
//boutton illi tna7i les paragraphes
const removePosts=()=>{
setPosts([])
}

 useEffect(()=>{
 //console.log('change on state') 
 },[state])

 useEffect(()=>{
//console.log('change on posts') 
 },[posts])

 useEffect(()=>{
//console.log('mounted')
 },[])

  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>


      <button onClick={ ()=> setState({
        //ki n7otou state ya3ni idha na9sou wala nzidou 1 "francis" tab9a mawjouda
        ...state,count:state.count+1 }) }> Add one +1 </button>
       
      <button onClick={ restOne }> Rest one -1 </button>
       <button onClick={ removePosts}> remove posts </button> 

      <hr/>

      { posts.map((item,i)=>(
        <Post key={i} item={item} />
      ))}

      <button onClick={addOnePost}>
        
        Add on more 
        
      </button>

    </>
  );
}

export default App;

//array because you get the value and the function witch change the value