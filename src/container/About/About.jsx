import React from 'react'
import {motion} from 'framer-motion'
import './About.scss';
import {images} from '../../constants/Index'
import {AppWrap} from '../../wrapper/Index'
const abouts = [
  {title:'Web Developer',description:'I am a backend developer with passion for building beautiful and functional websites ',imgUrl:images.about01},
  {title:'Web Design',description:'I am a web designer with a passion for creating beautiful and functional web applications',imgUrl:images.about02},
  {title:'UI/UX',description:'I am a React Native developer wtih passion for building beautiful and functional applications',imgUrl:images.about03},
  {title:'Backend Developer',description:'I am a good frontend developer with a passion for building beautiful and functional applications',imgUrl:images.about04}
]
const About = () => {
  return (
      <>
        <h2 className='head-text'>
          I know that
          <span> Good Design </span>
          <br />
           means
          <span> Good Business</span>
        </h2>

        <div className='app__profiles'>
          {abouts.map((about,index)=>(
            <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5,type:'tween'}}
            className='app__profile-item'
            key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop:10}}>{about.description}</p>

            </motion.div>
          ))}
        </div>
      </>
  )
}

export default AppWrap(About,'about') 




