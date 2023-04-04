import React, { useEffect, useState } from 'react'
import './App.css';
import Videos from './pages/Videos'
import db from '../src/pages/config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'


function App() {
 
  const [video, setVideos] = useState([])

  async function getVideos (){
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(() =>{
    getVideos();
  }, [])


  return (
    <div className="App">
      <div className='app__videos'>

        { video.map((item) => {
          return(
            <Videos 
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={ item.url}
            />
          )
        })}

        {/* <Videos 
          likes={431}
          messages={126}
          shares={124}
          name="Pedro"
          description="Fisico"
          music="Artic Monkeys"
          url="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"
          
        /> */}

      </div>
    </div>
  );
}

export default App;
