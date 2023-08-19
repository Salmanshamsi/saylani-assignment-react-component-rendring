import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostCard from './components/PostCard'
import image1 from "./assets/images/prf1.png"
import image2 from "./assets/images/prf2.jpg"
import image3 from "./assets/images/prf3.png"
import image4 from "./assets/images/prf4.png"
import post1 from "./assets/images/post1.png"
import post3 from "./assets/images/post3.avif"
import post4 from "./assets/images/post4.jpg"

function App() {

  return (
    <>
      <PostCard img={image1}  post={post1} name={"Abdullah"} isImage={true} />
      <PostCard img={image2}  post={"hello i am salman shamsi a website developer"} name={"salman shamsi"} isImage={false} />
      <PostCard img={image3}  post={post3} name={"waqar"} isImage={true} />
      <PostCard img={image4}  post={post4} name={"Ahmed raza"} isImage={true} />
      <PostCard img={image2}  post={"lorem ipsum dolor set amet !"} name={"salman shamsi"} isImage={false} />
    </>
  )
}

export default App
