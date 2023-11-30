import map from '../assets/images/map.svg'
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <div
            className='mt-[154px] flex flex-col max-w-[58rem] mx-auto justify-center w-full bg-[#F9F9F9] px-[1em]'>
            <div className='flex flex-col'>
                <motion.h1
                initial={{
                x: 0, y: 50, opacity: 0.4}}
                transition={{ delay: .5 }}
                animate={{x:0, y:0, opacity:1}}
                    className='text-[#1A1A1A] text-center  text-3xl md:text-5xl text-grifter  font-[700] '>Simplify Your International Transactions with
                    <span className='text-gradient'> One Platform</span>
                </motion.h1>
                <motion.h2
                initial={{
                x: -38, y: 0, opacity: 0}}
                transition={{ delay: 1 }}
                animate={{x:0, y:0, opacity:1}}
                    className='mt-[0.75em] text-[#3A3A3A] text-center '>
                    Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast allows you effortlessly transfer money anywhere in the world with confidence and ease.
                </motion.h2>
            </div>
            <div className='w-full flex items-center justify-center mt-[2.5em] '>
                <motion.div
                initial={{
                x: 38, y: 0, opacity: 0}}
                transition={{ delay: 1 }}
                animate={{x:0, y:0, opacity:1}}

                    className='w-full p-[1em] md:p-[1.5em] max-w-[498px] border-[1px] h-[3.75em] border-gray-300 rounded-full flex items-center'>
                <span className='flex items-center'>
                    <img
                        src={map}
                            alt='Nigeria Map'
                            className='w-[1em] h-[1em] md:w-[2em] md:h-[2em]'
                        />
                        <svg className="ml-[.25em] md:ml-[0.5em]"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                            <option className='ml-[.5em] md:ml-[1em]'>
                                +234
                            </option>
                    </span>

                    <input
                        className='ml-[.25em] 
                        md:ml-[0.5em]
                         outline-none border-none bg-transparent'
                        type='text'
                        
                    />
                    <div className='w-full  flex justify-end'>

                    <button className='bg-[#563ACC] h-[3em] -ml-[2em] rounded-full py-[0.75em] px-[1.5em]'>
                        <h2 className='text-white text-center'>Download</h2>
                    </button>
                         </div>

                        </motion.div>
            </div>
        </div>
    )
}

export default Hero
