import React, { Fragment } from 'react';
import style from './style2.module.css';
import {AnimatePresence,motion, useMotionValue} from 'framer-motion';
import {BrowserRouter,Switch,Route,useLocation,useHistory} from 'react-router-dom';
import {parent,child} from './objectAnimate';

function AppsAnimatePage_1(){
   return(
      <BrowserRouter>
         <Root/>
      </BrowserRouter>
   )
}

function Root() {
   const myRouteLocation = useLocation();

   return(
      <AnimatePresence exitBeforeEnter initial={false} custom={myRouteLocation}>
            <Switch location={myRouteLocation} key={myRouteLocation.key}>
               <Route path='/' component={Home} exact />
               <Route path='/detail' component={DetailPage}  />
            </Switch>
      </AnimatePresence>
   )
}

function Home() {
   const history = useHistory();

   return(
      <Fragment>
         <motion.section className={`${style.section} ${style.homeStyle}`} initial={{x : '100vw'}} animate={{x : '0vw', transition:{type:'tween'}}} exit={{zIndex:0, x:'-100vw'}}>
            <div className={style.box}>
               <motion.h1 
                  initial={{x:50, opacity:0}} 
                  animate={{opacity:1,x:0, transition:{duration:.5, delay:.1}}}
                  className={style.h1}
               >Page Transition Demo</motion.h1>
               <motion.div className={style.button} whileHover={{color:'#F1B011'}} onClick={() => history.push('/detail')}>
                  <h3>Start!</h3>
               </motion.div>
            </div>
         </motion.section>
      </Fragment>
   )
}

function DetailPage() {
   const history = useHistory();

   return(
      <Fragment>
         <motion.section className={`${style.section} ${style.detailStyle}`} initial={{x : '100vw'}} animate={{x : '0vw', transition:{type:'tween'}}} exit={{zIndex:0, x:'-100vw'}}>
            <motion.div className={style.box} variants={parent} initial='hidden' animate='visible'>
               <motion.h1 variants={child} custom={1}>You may want to use...</motion.h1>
               <ul className={style.ul}> 
                  <motion.li variants={child} custom={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, praesentium?</motion.li>
                  <motion.li variants={child} custom={3}>Lorem ipsum dolor sit amet consectetur.</motion.li>
                  <motion.li variants={child} custom={4}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</motion.li>
                  <motion.li variants={child} custom={5}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque.</motion.li>
               </ul>
               <motion.div className={style.button} whileHover={{color:'#C598AF'}} variants={child} custom={1} onClick={() => history.goBack()}>
                  <h3>Back!</h3>
               </motion.div>
            </motion.div>
         </motion.section>
      </Fragment>
   )
}

export default AppsAnimatePage_1;