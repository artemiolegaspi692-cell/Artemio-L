function showPage(n){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page'+n).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(n===4){
    const b=document.getElementById('noBtn');
    b.style.position='relative';
    b.style.left='auto';
    b.style.top='auto';
    b.dataset.moved='';
  }
}

function placeNo(){
  const b=document.getElementById('noBtn');
  if(!b.dataset.moved){b.dataset.moved='true'}
  b.style.position='fixed';
  const pad=18;
  const maxX=Math.max(pad,window.innerWidth-b.offsetWidth-pad);
  const maxY=Math.max(80,window.innerHeight-b.offsetHeight-pad);
  b.style.left=(pad+Math.random()*Math.max(1,maxX-pad))+'px';
  b.style.top=(80+Math.random()*Math.max(1,maxY-80))+'px';
}

function escapeNo(e){
  if(e){e.preventDefault();e.stopPropagation()}
  placeNo();
  return false;
}

function yesClicked(){
  document.getElementById('answer').style.display='block';
  document.querySelector('.actions').style.display='none';

  for(let i=0;i<18;i++){
    const h=document.createElement('div');
    h.textContent=Math.random()>.5?'💛':'🐱';
    h.style.position='fixed';
    h.style.left=(10+Math.random()*80)+'%';
    h.style.top=(55+Math.random()*25)+'%';
    h.style.fontSize=(18+Math.random()*22)+'px';
    h.style.zIndex=100;
    h.style.pointerEvents='none';
    h.style.animation='floatUp 3s linear forwards';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3000);
  }
}

window.addEventListener('resize',()=>{
  const b=document.getElementById('noBtn');
  if(document.getElementById('page4').classList.contains('active') && b.dataset.moved) placeNo();
});

document.addEventListener('keydown',e=>{
  const b=document.getElementById('noBtn');
  if(document.activeElement===b && (e.key==='Enter'||e.key===' ')){
    e.preventDefault();
    placeNo();
  }
});
