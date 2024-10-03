import React,  { useState  , useRef , useEffect} from 'react'
import './productShowcase.css'
import mobileimageleft from '../../assets/neopop-left-1.png'
import mobileimageleft2 from '../../assets/neopop-left-2.png'
import mobileimagecenter from '../../assets/neopop-center.png'
import mobileimageright from '../../assets/neopop-right-1.png'
import mobileimageright2 from '../../assets/neopop-right-2.png'


const ProductShowCase = () => {
    const[showAnimation , setShowAnimation] = useState(false);

    const ref = useRef(null);

    const IntersectionCallback =(e)=>{

        if(e[0].isIntersecting){
            setShowAnimation(true)
        }
       
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };


      useEffect(()=>{
        const observer = new IntersectionObserver(IntersectionCallback, options);

        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current)
            }
        }

        return ()=>{
            if(ref.current){
                observer.unobserve(ref.current)
            }
        }
      })
    

  return (
    <div  ref={ref} className={`product-showcase ${ showAnimation ?  'scale-up-bottom': ''}`}>
        {showAnimation && <div className='showcase-wrapper'>
            <img src={mobileimageleft} alt='img1' className='showcase-ui showcase-mockup-1'/>
            <img src={mobileimageleft2} alt='img2' className='showcase-ui showcase-mockup-2'/>
            <img src={mobileimagecenter} alt='img3' className='showcase-ui showcase-mockup-3'/>
            <img src={mobileimageright} alt='img4' className='showcase-ui showcase-mockup-4'/>
            <img src={mobileimageright2} alt='img5' className='showcase-ui showcase-mockup-5'/>

        </div>}

    </div>
  )
}

export default ProductShowCase