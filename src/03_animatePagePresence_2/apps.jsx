import React, { Fragment } from 'react';
import style from './style.module.css';
import {BrowserRouter,Switch,Route,useHistory,useLocation,NavLink} from 'react-router-dom';
import {AnimatePresence,motion} from 'framer-motion';

function AppsAnimatePage_2() {
   return(
      <BrowserRouter>
         <RootApp/>
      </BrowserRouter>
   )
}

function RootApp() {
   const myLocationRoute = useLocation();

   return(
      <AnimatePresence exitBeforeEnter>
         <Switch location={myLocationRoute} key={myLocationRoute.key}>
            <Route path='/' exact component={Home} />
            <Route path='/detailpage1' exact component={DetailPageDemo1} />
            <Route path='/detailpage2' exact component={DetailPageDemo2} />
         </Switch>
      </AnimatePresence>
   )
}

function Home() {
   const history = useHistory();

   return(
      <Fragment>
         <motion.main 
            className={`${style.main} ${style.mainStyleHome}`} 
            initial={{height:'150vh'}}
            animate={{height:'auto'}}
            exit={{height:'150vh',transition:{duration:.5}}}
         >
            <h1 className={style.h1}>Page Jank Demo</h1>
            <span className={style.span}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nisi repellat maxime, autem tenetur in. Eligendi neque tenetur cumque voluptatibus tempore magnam dolores possimus adipisci quibusdam. Ipsum est assumenda molestias, commodi, dolor hic nostrum quos sed iste similique quia eius! Voluptates, beatae? Ea quisquam veniam nostrum voluptatibus, quas repudiandae harum.</span>
         </motion.main>
         <section className={style.section}>
            <div className={style.article}>
               <a onClick={() => history.push('/detailpage1')}  className={style.linkArticle}>Detail Page Demo 1</a>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius voluptatem reprehenderit nesciunt repellat, placeat labore est id eos sunt sit aut dolorum, odio, eligendi architecto? Omnis, quo! Beatae saepe, tempore fugit sunt vel atque necessitatibus quae. Hic quo aliquam molestiae et, iste sint similique ducimus id recusandae itaque atque?</p>
            </div>
            <div className={style.article}>
               <a onClick={() => history.push('/detailpage2')} className={style.linkArticle}>Detail Page Demo 2</a>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla necessitatibus natus dolore nesciunt earum eveniet iure aliquam, mollitia, officia iste non consequuntur. Ea et quibusdam perferendis nesciunt deserunt officiis numquam mollitia neque sed natus, voluptates nulla aperiam ipsa eum repellendus asperiores harum, aspernatur assumenda, repudiandae omnis doloribus odit. Nobis provident et, ab a fugit quas aspernatur eveniet, assumenda officiis dolor tenetur placeat alias facilis illum mollitia ratione expedita deleniti.</p>
            </div>
         </section>
      </Fragment>
   )
}

function DetailPageDemo1(){
   const history = useHistory();

   return(
      <Fragment>
         <motion.div 
            className={style.container} 
            initial={{gridTemplateColumns:'20% 80%'}} 
            animate={{gridTemplateColumns:'10% 90%'}}
            exit={{gridTemplateColumns:'100% 0%', opacity:0, transition:{duration:.4, opacity:{delay:.3}}}}
         >
            <div className={style.sidebarLeft}>
               <h3 className={style.textSidebarLeft} onClick={() => history.push('/')}>Home</h3>
            </div>
            <div className={style.sidebarRight}>
               <main className={`${style.main} ${style.mainStyleDetail1}`}>
                  <p onClick={() => history.goBack()} style={{color:'white', cursor:'pointer'}}>Back </p>
                  <h1 className={style.h1}>React JS is Good :)</h1>
                  <span className={style.span} style={{opacity:1}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nisi repellat maxime, autem tenetur in. Eligendi neque tenetur cumque voluptatibus tempore magnam dolores possimus adipisci quibusdam. Ipsum est assumenda molestias, commodi, dolor hic nostrum quos sed iste similique quia eius! Voluptates, beatae? Ea quisquam veniam nostrum voluptatibus, quas repudiandae harum.</span>
               </main>
               <section className={style.sectionDetail}>
                  <h2>How to learn React js?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vero molestiae magni ipsum doloribus cumque vitae quibusdam iste, sit totam aperiam quisquam velit, id necessitatibus ducimus deleniti ab ipsa impedit facilis nulla in recusandae veniam quae. Eveniet ullam pariatur, id cumque, veritatis sint repellendus rem qui iste exercitationem saepe iusto reiciendis repellat totam numquam libero nemo vero? Nostrum deserunt explicabo dolorem natus aspernatur dignissimos, dolorum cupiditate libero, officia fugit iure minus. Quisquam optio beatae unde neque quidem ducimus, quos obcaecati veritatis esse ipsa voluptatibus ipsum totam eligendi temporibus. Eos magnam repudiandae voluptatum error voluptates! Ea reprehenderit omnis odit iste pariatur, aliquid quisquam magnam enim optio hic! Voluptas, eum asperiores. Libero aliquam delectus laborum minima nihil mollitia, necessitatibus, ad omnis nulla corrupti quidem. Accusantium inventore nobis obcaecati deserunt illum iste rerum. Adipisci optio blanditiis alias totam ut iure pariatur doloremque, modi molestiae ex. Neque laborum veniam earum non. Hic, itaque tempora.</p>
                  <ul>
                     <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                     <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum?</li>
                     <li>Lorem ipsum dolor sit amet.</li>
                     <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                  </ul>
               </section>
            </div>
         </motion.div>
      </Fragment>
   )
}

function DetailPageDemo2(){
   const history = useHistory();

   return(
      <Fragment>
         <motion.div 
            className={style.container} 
            initial={{gridTemplateColumns:'20% 80%'}} 
            animate={{gridTemplateColumns:'10% 90%'}}
            exit={{gridTemplateColumns:'100% 0%', opacity:0, transition:{duration:.4, opacity:{delay:.3}}}}
         >
            <div className={style.sidebarLeft}>
               <h3 className={style.textSidebarLeft} onClick={() => history.push('/')}>Home</h3>
            </div>
            <div className={style.sidebarRight}>
               <main className={`${style.main} ${style.mainStyleDetail2}`}>
                  <p onClick={() => history.goBack()} style={{color:'white', cursor:'pointer'}}>Back </p>
                  <h1 className={style.h1}>Express JS is Good :)</h1>
                  <span className={style.span} style={{opacity:1}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nisi repellat maxime, autem tenetur in. Eligendi neque tenetur cumque voluptatibus tempore magnam dolores possimus adipisci quibusdam. Ipsum est assumenda molestias, commodi, dolor hic nostrum quos sed iste similique quia eius! Voluptates, beatae? Ea quisquam veniam nostrum voluptatibus, quas repudiandae harum.</span>
               </main>
               <section className={style.sectionDetail}>
                  <h2>How to learn Express js?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vero molestiae magni ipsum doloribus cumque vitae quibusdam iste, sit totam aperiam quisquam velit, id necessitatibus ducimus deleniti ab ipsa impedit facilis nulla in recusandae veniam quae. Eveniet ullam pariatur, id cumque, veritatis sint repellendus rem qui iste exercitationem saepe iusto reiciendis repellat totam numquam libero nemo vero? Nostrum deserunt explicabo dolorem natus aspernatur dignissimos, dolorum cupiditate libero, officia fugit iure minus. Quisquam optio beatae unde neque quidem ducimus, quos obcaecati veritatis esse ipsa voluptatibus ipsum totam eligendi temporibus. Eos magnam repudiandae voluptatum error voluptates! Ea reprehenderit omnis odit iste pariatur, aliquid quisquam magnam enim optio hic! Voluptas, eum asperiores. Libero aliquam delectus laborum minima nihil mollitia, necessitatibus, ad omnis nulla corrupti quidem. Accusantium inventore nobis obcaecati deserunt illum iste rerum. Adipisci optio blanditiis alias totam ut iure pariatur doloremque, modi molestiae ex. Neque laborum veniam earum non. Hic, itaque tempora.</p>
                  <ul>
                     <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                     <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum?</li>
                     <li>Lorem ipsum dolor sit amet.</li>
                     <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                  </ul>
               </section>
            </div>
         </motion.div>

      </Fragment>
   )
}

export default AppsAnimatePage_2;