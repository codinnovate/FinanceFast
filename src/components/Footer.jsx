import iphone13 from '../assets/images/iphone13.png';
import iphone13pro1 from '../assets/images/iphone13pro1.png';
import iphone13pro2 from '../assets/images/iphone13pro2.png';
import iphone13pro3 from '../assets/images/iphone13pro.png';
import hbr from '../assets/images/brands/hbr.png';
import bloomberg from '../assets/images/brands/bloomberg.png';
import huffpost from '../assets/images/brands/hp.png';
import tc from '../assets/images/brands/techcrunch.png';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
      <div className='mt-[148px] w-full relative'>
      <div className=' md:mx-[150px] flex gap-[28px] items-end justify-center'>
           
        <motion.div
        initial={{
            x:57, y:40
          }}
          transition={{
            delay:.2
          }}
          whileInView={{
            x:0, y:0
          }}
          className='hidden md:block'>
          <img
          src={iphone13pro1}
          alt='iphone 13'
          className='w-[257px] h-full'
              />
        </motion.div>
        <motion.div
          initial={{
            x:23, y:40
          }}
          transition={{
            delay:.2
          }}
          whileInView={{
            x:0, y:0
          }}
          className=''>
          <img
          src={iphone13pro2}
          alt='iphone 13'
          className='w-[257px] h-full'
              />
        </motion.div>
        <motion.div
        initial={{
            x:37, y:40
          }}
          transition={{
            delay:.5
          }}
          whileInView={{
            x:0, y:0
          }}
          className='hidden md:block'>
          <img
          src={iphone13pro3}
          alt='iphone 13'
          className='w-[257px] h-full'
              />
        </motion.div>
        <motion.div
         initial={{
            x:237, y:20
          }}
          transition={{
            delay:.5
          }}
          whileInView={{
            x:0, y:0
          }}
          className='hidden md:block'>
          <img
          src={iphone13}
          alt='iphone 13'
          className='w-[257px] h-full'
              />
        </motion.div>
      </div>
      
      <div className='absolute w-full top-[70%]  h-[155px] py-[154px] px-[88px] bg-[#E5DBFB] flex items-center'>
        {/* <h2>We&apos;re have been recognized by Leading <br></br> Finance Publications and Organizations.</h2> */}
        <div className='w-full flex items-center  justify-center   md:gap-[90px]'>
          <span><img src={hbr} alt='havard business review' /></span>
          <span><img src={bloomberg} alt='bloomerg' /></span>
          <span><img src={huffpost} alt='huffpost'/></span>
          <span><img src={tc}  alt='techcrunch logo'/></span>
        </div>
      </div>
          
    </div>
  )
}

