export const bounce = (page,animate,myclass) => {
  const bounce = document.querySelector('.main-content');
    if(document.location.href.includes(page)) {
      bounce.className= `${myclass} ${animate}`;
    } else {
      bounce.className=`${myclass}`;
    }
}
