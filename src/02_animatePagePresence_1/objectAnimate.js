export const parent = {
   hidden : {
      opacity : 0
   }, 
   visible : {
      opacity : 1,
      transition : {
         staggerChildren : .1
      }
   }
}

export const child = {
   hidden : index => ({
      x : index * 20 ,
      opacity : 0
   }),
   visible  : {
      x : 0,
      opacity : 1,
      transition : {
         type : 'spring',
         stiffness : 90
      }
   }
}