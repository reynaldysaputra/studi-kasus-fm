import React, { Fragment } from 'react';
import style from './style.module.css';
import {useMotionValue, motion, useTransform, useViewportScroll} from 'framer-motion';

function AppsEffect_1() {
   const {scrollYProgress} = useViewportScroll();
   const scaleBox = useTransform(scrollYProgress, [0,1], [0.5,1.8]);
   const marginTopStyle = useTransform(scrollYProgress, [0,1], ['100px','0px']);

   return(
      <Fragment>
         <section className={style.section}>
            <motion.div 
               className={style.box} 
               style={{scale:scaleBox, transition:.5}}
            >
               <motion.div 
                  className={style.childBox}
                  style={{marginTop:marginTopStyle}}
               ></motion.div>
            </motion.div>
         </section>
      </Fragment>
   )
}

export default AppsEffect_1;