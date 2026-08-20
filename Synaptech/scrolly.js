// ══════════════════════════════════════════
// SYNAPTECH — Scrollytelling Landing Page
// scrolly.js
// ══════════════════════════════════════════

// ══════════════════════════════════
// TRANSLATIONS
// ══════════════════════════════════
const T = {
  pt: {
    active:"Sistemas Ativos",
    e1:"Você acabou de entrar",e2:"na mente da Synaptech.",
    e3:"Aqui, trabalho repetitivo não existe.",scroll:"↓ role para descobrir",
    ptitle:"Quanto tempo sua equipe perde por dia?",
    p1:"15 minutos por venda digitada manualmente",
    p2:"30 ligações para confirmar visitas técnicas",
    p3:"Pacientes sem resposta fora do horário",
    pend:"E se tudo isso desaparecesse amanhã?",
    tt1:"Sua operação,",tt2:"reorganizada.",
    s1:"−15min",s1l:"eliminados por venda",
    s2:"24/7",  s2l:"atendimento sem parar",
    s3:"3min",  s3l:"do pedido ao calendário",
    prods:"Três sistemas. Prontos para entrar em produção.",
    hint:"💡 Passe o mouse para ver detalhes",
    ct:"Veja ao vivo.",
    cs:"Uma conversa real com o ClinicBot. O paciente agenda, confirma e recebe lembrete — sem ninguém da sua equipe tocar em nada.",
    cv:["Atendimento 24h, 7 dias","Confirmação automática","Lembrete 24h antes","Transfere para humano"],
    chdr:"ClinicBot · Online",
    cm1:"Oi! Quero marcar consulta com o Dr. Silva.",
    cr1:"Dr. Silva tem disponibilidade quinta às 14h ou sexta às 10h. Qual prefere? 😊",
    cm2:"Quinta às 14h!",
    cr2:"✅ Confirmado! Quinta às 14h com Dr. Silva. Lembrete 24h antes. Até lá!",
    ctat:"Você chegou até aqui.",
    ctas:"Sua empresa já poderia estar automatizada. Dá o primeiro passo.",
    fn:"Nome *",fw:"WhatsApp *",fq:"O que você precisa?",fsel:"Selecione",
    opts:["🤖 Agente de WhatsApp","⚙️ Automação de processo","🔗 Integração de sistemas","📊 Inteligência de dados","💡 Quero conversar"],
    fbtn:"Quero uma Proposta Gratuita",fdis:"Sem spam. Resposta em até 1 dia útil.",
    ot:"Recebido.",os:"Retornamos com uma proposta em até 1 dia útil.",
    foot:"© "+new Date().getFullYear()+" Synaptech | AI Automation & Business Intelligence | Matheus O. Malaquias",
    pl:[
      {icon:"📊",name:"SalesSync",  color:"#C4B5FD",glow:"rgba(124,58,237,.4)", bg:"rgba(124,58,237,.12)",border:"rgba(124,58,237,.35)",dot:"#9F67FF",short:"Notas de venda automáticas",  desc:"A cada venda fechada, registra automaticamente no seu sistema. Sua equipe para de digitar e começa a vender mais.",result:"−15min por venda",       tech:"n8n · CRM · API"},
      {icon:"🏥",name:"ClinicBot",  color:"#67E8F9",glow:"rgba(6,182,212,.38)",bg:"rgba(6,182,212,.1)",  border:"rgba(6,182,212,.3)", dot:"#06B6D4",short:"Agente WhatsApp 24/7",       desc:"Atende pacientes no WhatsApp a qualquer hora — agenda, confirma e envia lembrete automático.",              result:"24/7 sem recepcionista",tech:"WhatsApp API · Claude AI · n8n"},
      {icon:"🔧",name:"FieldBot",   color:"#86efac",glow:"rgba(34,197,94,.32)", bg:"rgba(34,197,94,.08)",border:"rgba(34,197,94,.25)",  dot:"#22c55e",short:"Agendamento de visitas",    desc:"Recebe pedido, qualifica o serviço, verifica disponibilidade e confirma. Tudo automaticamente.",             result:"3min do pedido ao calendário",tech:"WhatsApp API · n8n · Calendar"},
      {icon:"💡",name:"Seu Projeto",color:"#fde68a",glow:"rgba(251,191,36,.25)",bg:"rgba(251,191,36,.08)",border:"rgba(251,191,36,.22)",dot:"#fbbf24",short:"Solução sob medida",       desc:"Tem outro problema? A gente projeta uma solução do zero para o seu processo específico.",                    result:"Diagnóstico gratuito",    tech:"Stack personalizado"},
    ],
  },
  en: {
    active:"Active Systems",
    e1:"You just entered",e2:"the mind of Synaptech.",
    e3:"Here, repetitive work doesn't exist.",scroll:"↓ scroll to discover",
    ptitle:"How much time does your team lose every day?",
    p1:"15 minutes per sale entered manually",
    p2:"30 calls to confirm technical visits",
    p3:"Patients without response after hours",
    pend:"What if all of this disappeared tomorrow?",
    tt1:"Your operation,",tt2:"reorganized.",
    s1:"−15min",s1l:"eliminated per sale",
    s2:"24/7",  s2l:"non-stop support",
    s3:"3min",  s3l:"from request to calendar",
    prods:"Three systems. Ready to go live.",
    hint:"💡 Hover to see details",
    ct:"See it live.",
    cs:"A real conversation with ClinicBot. The patient books, confirms, gets a reminder — without anyone on your team lifting a finger.",
    cv:["24h service, 7 days","Automatic confirmation","Reminder 24h before","Transfers to human"],
    chdr:"ClinicBot · Online",
    cm1:"Hi! I'd like to schedule with Dr. Silva.",
    cr1:"Dr. Silva has availability Thursday at 2PM or Friday at 10AM. Which works? 😊",
    cm2:"Thursday at 2PM!",
    cr2:"✅ Confirmed! Thursday 2PM with Dr. Silva. Reminder 24h before. See you then!",
    ctat:"You made it here.",
    ctas:"Your business could already be automated. Take the first step.",
    fn:"Name *",fw:"WhatsApp *",fq:"What do you need?",fsel:"Select",
    opts:["🤖 WhatsApp Agent","⚙️ Process Automation","🔗 System Integration","📊 Data Intelligence","💡 I want to talk"],
    fbtn:"Get a Free Proposal",fdis:"No spam. Response within 1 business day.",
    ot:"Received.",os:"We'll come back with a proposal within 1 business day.",
    foot:"© "+new Date().getFullYear()+" Synaptech | AI Automation & Business Intelligence | Matheus O. Malaquias",
    pl:[
      {icon:"📊",name:"SalesSync",    color:"#C4B5FD",glow:"rgba(124,58,237,.4)", bg:"rgba(124,58,237,.12)",border:"rgba(124,58,237,.35)",dot:"#9F67FF",short:"Automatic sales notes",   desc:"Every time a sale closes, it automatically registers in your system. Your team stops typing and sells more.",result:"−15min per sale",        tech:"n8n · CRM · API"},
      {icon:"🏥",name:"ClinicBot",    color:"#67E8F9",glow:"rgba(6,182,212,.38)",bg:"rgba(6,182,212,.1)",  border:"rgba(6,182,212,.3)", dot:"#06B6D4",short:"24/7 WhatsApp Agent",     desc:"Handles patients on WhatsApp around the clock — books, confirms and sends reminders automatically.",      result:"24/7 no receptionist",  tech:"WhatsApp API · Claude AI · n8n"},
      {icon:"🔧",name:"FieldBot",     color:"#86efac",glow:"rgba(34,197,94,.32)", bg:"rgba(34,197,94,.08)",border:"rgba(34,197,94,.25)",  dot:"#22c55e",short:"Visit scheduling",     desc:"Receives request, qualifies service, checks availability and confirms appointment. All automatic.",         result:"3min from request to calendar",tech:"WhatsApp API · n8n · Calendar"},
      {icon:"💡",name:"Your Project", color:"#fde68a",glow:"rgba(251,191,36,.25)",bg:"rgba(251,191,36,.08)",border:"rgba(251,191,36,.22)",dot:"#fbbf24",short:"Custom solution",       desc:"Have a different problem? We design a solution from scratch tailored to your specific process.",            result:"Free diagnosis",         tech:"Custom stack"},
    ],
  }
};

let lang = 'pt';
let t = T[lang];

function setLang(l) {
  lang = l; t = T[l];
  document.getElementById('btn-pt').classList.toggle('active', l==='pt');
  document.getElementById('btn-en').classList.toggle('active', l==='en');
  applyTranslations();
  rebuildProducts();
  rebuildChat();
}

function applyTranslations() {
  const el = id => document.getElementById(id);
  el('active-label').textContent = t.active;
  el('prob-title').textContent = t.ptitle;
  el('trans-line1').textContent = t.tt1;
  el('trans-line2').textContent = t.tt2;
  el('s1l').textContent = t.s1l;
  el('s2l').textContent = t.s2l;
  el('s3l').textContent = t.s3l;
  el('prod-title').textContent = t.prods;
  el('prod-hint').textContent = t.hint;
  el('chat-title').textContent = t.ct;
  el('chat-desc').textContent = t.cs;
  el('chat-hdr-text').textContent = t.chdr;
  el('cta-title').textContent = t.ctat;
  el('cta-sub').textContent = t.ctas;
  el('lbl-name').textContent = t.fn;
  el('lbl-wpp').textContent = t.fw;
  el('lbl-need').textContent = t.fq;
  el('inp-name').placeholder = lang==='pt'?'Seu nome':'Your name';
  el('submit-btn').textContent = t.fbtn;
  el('form-disc').textContent = t.fdis;
  el('suc-title').textContent = t.ot;
  el('suc-sub').textContent = t.os;
  el('footer-txt').textContent = t.foot;
  // select
  const sel = el('inp-need');
  sel.innerHTML = `<option value="">${t.fsel}</option>` + t.opts.map(o=>`<option value="${o}">${o}</option>`).join('');
  // prob items
  const pi = el('prob-items');
  pi.innerHTML = [t.p1,t.p2,t.p3].map((p,i)=>`<div class="prob-item" data-idx="${i}"><span class="prob-icon">⚠️</span><span class="prob-text">${p}</span></div>`).join('');
  el('prob-end').textContent = t.pend;
  // checks
  const cc = el('chat-checks');
  cc.innerHTML = t.cv.map((c,i)=>`<div class="check-item" data-idx="${i}"><span class="check-icon">✓</span>${c}</div>`).join('');
}

function rebuildProducts() {
  const grid = document.getElementById('prod-grid');
  grid.innerHTML = t.pl.map((p,i)=>`
    <div class="prod-card" data-delay="${i*180}" style="transition-delay:${i*180}ms">
      <div class="prod-icon" style="background:${p.bg};border-color:${p.border}" data-glow="${p.glow}">${p.icon}</div>
      <div class="prod-name" style="color:${p.color}">${p.name}</div>
      <div class="prod-short">${p.short}</div>
      <div class="prod-panel" style="border-color:${p.border}">
        <h4 style="color:${p.color}">${p.name}</h4>
        <p>${p.desc}</p>
        <div class="prod-result" style="color:${p.color}"><span class="prod-result-dot" style="background:${p.dot}"></span>${p.result}</div>
        <div class="prod-tech">${p.tech}</div>
      </div>
    </div>
  `).join('');

  // Hover logic
  grid.querySelectorAll('.prod-card').forEach((card,i) => {
    const icon = card.querySelector('.prod-icon');
    const glow = t.pl[i].glow;
    card.addEventListener('mouseenter', () => {
      icon.style.boxShadow = `0 0 28px ${glow}`;
    });
    card.addEventListener('mouseleave', () => {
      icon.style.boxShadow = 'none';
    });
  });
}

let chatStep = 0, chatTimer = null;
function rebuildChat() {
  const body = document.getElementById('chat-body');
  body.innerHTML = '';
  chatStep = 0;
  if(chatTimer) clearTimeout(chatTimer);
}
function advanceChat() {
  const body = document.getElementById('chat-body');
  const msgs = [{u:true,text:t.cm1},{u:false,text:t.cr1},{u:true,text:t.cm2},{u:false,text:t.cr2}];
  const typing = body.querySelector('.typing');
  if (typing) typing.remove();
  if (chatStep < msgs.length) {
    const m = msgs[chatStep];
    const el = document.createElement('div');
    el.className = 'msg ' + (m.u?'user':'ai');
    el.textContent = m.text;
    body.appendChild(el);
    chatStep++;
    if (chatStep < msgs.length) {
      const t2 = document.createElement('div');
      t2.className = 'typing';
      t2.innerHTML = '<span></span><span></span><span></span>';
      body.appendChild(t2);
      chatTimer = setTimeout(advanceChat, 1800);
    }
  }
}

// ══════════════════════════════════
// GRAPH CANVAS
// ══════════════════════════════════
(function initGraph(){
  const canvas = document.getElementById('graph-canvas');
  const ctx = canvas.getContext('2d');
  const rnd = (a,b) => a+Math.random()*(b-a);
  let W,H,nodes=[],pulses=[];

  function init(){
    W=canvas.width=window.innerWidth;
    H=canvas.height=window.innerHeight;
    const A={r:159,g:103,b:255},Cy={r:6,g:182,b:212},G={r:80,g:100,b:140};
    nodes=Array.from({length:55},(_,i)=>({
      x:Math.random()*W,y:Math.random()*H,
      vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,
      r:rnd(2,i<8?13:4.5),pulse:Math.random()*Math.PI*2,ps:rnd(.015,.032),
      col:i%3===0?Cy:i%5===0?G:A,hub:i<8
    }));
    pulses=[];
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    const hubs=nodes.filter(n=>n.hub),sats=nodes.filter(n=>!n.hub);
    const hd=Math.min(W,H)*.6,sd=Math.min(W,H)*.28;
    for(let i=0;i<hubs.length;i++)for(let j=i+1;j<hubs.length;j++){
      const dx=hubs[i].x-hubs[j].x,dy=hubs[i].y-hubs[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<hd){
        const c=hubs[i].col;
        ctx.beginPath();ctx.strokeStyle=`rgba(${c.r},${c.g},${c.b},${(1-d/hd)*.6})`;ctx.lineWidth=1.2;
        ctx.moveTo(hubs[i].x,hubs[i].y);ctx.lineTo(hubs[j].x,hubs[j].y);ctx.stroke();
        if(Math.random()<.003)pulses.push({from:hubs[i],to:hubs[j],t:0,sp:rnd(.006,.013)});
      }
    }
    for(const p of sats)for(const h of hubs){
      const dx=p.x-h.x,dy=p.y-h.y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<sd){const c=h.col;ctx.beginPath();ctx.strokeStyle=`rgba(${c.r},${c.g},${c.b},${(1-d/sd)*.22})`;ctx.lineWidth=.5;ctx.moveTo(p.x,p.y);ctx.lineTo(h.x,h.y);ctx.stroke();}
    }
    const alive=[];
    for(const pu of pulses){
      pu.t+=pu.sp;if(pu.t>=1)continue;alive.push(pu);
      const px=pu.from.x+(pu.to.x-pu.from.x)*pu.t,py=pu.from.y+(pu.to.y-pu.from.y)*pu.t,c=pu.from.col;
      const g=ctx.createRadialGradient(px,py,0,px,py,6);g.addColorStop(0,`rgba(${c.r},${c.g},${c.b},.9)`);g.addColorStop(1,`rgba(${c.r},${c.g},${c.b},0)`);
      ctx.beginPath();ctx.arc(px,py,6,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
    }
    pulses=alive;
    for(const n of nodes){
      n.pulse+=n.ps;const gw=(Math.sin(n.pulse)+1)/2,c=n.col;
      if(n.hub){
        const oR=n.r*(1.7+gw*.5);
        const g=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,oR*2);g.addColorStop(0,`rgba(${c.r},${c.g},${c.b},.18)`);g.addColorStop(1,`rgba(${c.r},${c.g},${c.b},0)`);
        ctx.beginPath();ctx.arc(n.x,n.y,oR*2,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
        const core=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r);core.addColorStop(0,'rgba(255,255,255,.95)');core.addColorStop(.45,`rgba(${c.r},${c.g},${c.b},.9)`);core.addColorStop(1,`rgba(${c.r},${c.g},${c.b},.55)`);
        ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle=core;ctx.fill();
      }else{
        const g2=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r*3.5);g2.addColorStop(0,`rgba(${c.r},${c.g},${c.b},${.45+gw*.3})`);g2.addColorStop(1,`rgba(${c.r},${c.g},${c.b},0)`);
        ctx.beginPath();ctx.arc(n.x,n.y,n.r*3.5,0,Math.PI*2);ctx.fillStyle=g2;ctx.fill();
        ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle=`rgba(${c.r},${c.g},${c.b},${.65+gw*.3})`;ctx.fill();
      }
      n.x+=n.vx;n.y+=n.vy;const pad=n.r*2;if(n.x<pad||n.x>W-pad)n.vx*=-1;if(n.y<pad||n.y>H-pad)n.vy*=-1;
    }
    requestAnimationFrame(draw);
  }
  init();draw();
  window.addEventListener('resize',init);
})();

// ══════════════════════════════════
// MOUSE PARTICLE
// ══════════════════════════════════
(function initMouse(){
  if(window.innerWidth<768)return;
  const canvas=document.getElementById('mouse-canvas');
  const ctx=canvas.getContext('2d');
  let mpos={x:-200,y:-200},cur={x:-200,y:-200},trail=[];
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
  window.addEventListener('mousemove',e=>{mpos={x:e.clientX,y:e.clientY};});
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cur.x+=(mpos.x-cur.x)*.1;cur.y+=(mpos.y-cur.y)*.1;
    trail.push({...cur,age:0});if(trail.length>22)trail.shift();trail.forEach(p=>p.age++);
    trail.forEach(p=>{
      const a=(1-p.age/22)*.28,r=(1-p.age/22)*3;
      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,r*5);g.addColorStop(0,`rgba(159,103,255,${a})`);g.addColorStop(1,'rgba(159,103,255,0)');
      ctx.beginPath();ctx.arc(p.x,p.y,r*5,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
    });
    const {x,y}=cur,tn=Date.now()*.003;
    const glow=ctx.createRadialGradient(x,y,0,x,y,20);glow.addColorStop(0,'rgba(159,103,255,.28)');glow.addColorStop(1,'rgba(159,103,255,0)');
    ctx.beginPath();ctx.arc(x,y,20,0,Math.PI*2);ctx.fillStyle=glow;ctx.fill();
    ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fillStyle='rgba(196,181,253,.9)';ctx.fill();
    const rr=10+Math.sin(tn)*4;ctx.beginPath();ctx.arc(x,y,rr,0,Math.PI*2);ctx.strokeStyle=`rgba(124,58,237,${.3+Math.sin(tn)*.15})`;ctx.lineWidth=1;ctx.stroke();
    requestAnimationFrame(draw);
  }
  draw();
})();

// ══════════════════════════════════
// SCROLL ENGINE
// ══════════════════════════════════
const root = document.getElementById('scroll-root');
const vh = () => window.innerHeight;

// Typewriter
function typewrite(el, text, speed, cb) {
  el.innerHTML='';let i=0,cursor=document.createElement('span');cursor.className='cursor';cursor.innerHTML='&nbsp;';el.appendChild(cursor);
  const id=setInterval(()=>{
    el.insertBefore(document.createTextNode(text[i++]),cursor);
    if(i>=text.length){clearInterval(id);cursor.remove();cb&&cb();}
  },speed);
  return id;
}

// Stat counters
let countersDone=false, countersStarted=false;
function startCounters(){
  if(countersStarted)return;countersStarted=true;
  const targets=[t.s1,t.s2,t.s3];
  const ids=['s1','s2','s3'];
  ids.forEach((id,i)=>{
    const el=document.getElementById(id);
    const raw=targets[i];
    const isNum=raw.replace(/[^0-9]/g,'');
    if(!isNum){el.textContent=raw;return;}
    const num=parseInt(isNum);const prefix=raw.includes('−')?'−':'';const suffix=raw.replace(/[0-9−]/g,'');
    let v=0;const step=num/35;
    const iv=setInterval(()=>{v+=step;if(v>=num){el.textContent=prefix+num+suffix;clearInterval(iv);}else el.textContent=prefix+Math.floor(v)+suffix;},28);
  });
}

// Typewriter state
let twState={l1done:false,l2done:false,l1id:null,l2id:null};
function resetTypewriters(){
  clearInterval(twState.l1id);clearInterval(twState.l2id);
  document.getElementById('line1').innerHTML='';document.getElementById('line2').innerHTML='';
  twState={l1done:false,l2done:false,l1id:null,l2id:null};
}

// Chat state
let chatStarted=false;
function startChat(){
  if(chatStarted)return;chatStarted=true;
  rebuildChat();
  chatTimer=setTimeout(advanceChat,500);
}

let lastSY=-1;
root.addEventListener('scroll',onScroll,{passive:true});
function onScroll(){
  const sy=root.scrollTop;
  if(sy===lastSY)return;lastSY=sy;
  const total=root.scrollHeight-root.clientHeight;
  const prog=total>0?sy/total:0;
  document.getElementById('progress-bar').style.width=prog*100+'%';

  const VH=vh();
  const sL=(a,b)=>Math.min(1,Math.max(0,(sy-a*VH)/((b-a)*VH)));

  const eP=sL(0,2.5);
  const prP=sL(2.5,4.5);
  const trP=sL(4.5,6.5);
  const prD=sL(6.5,8.5);
  const chP=sL(8.5,10.5);
  const ctP=sL(10.5,12.5);

  // Header
  const hdrVis=sy<50||ctP>.05;
  document.getElementById('header').style.transform=hdrVis?'translateY(0)':'translateY(-100%)';

  // ── SCENE 1: ENTRY ──
  const nameScale=1+eP*2.8;
  const nameOp=Math.max(0,1-eP*2.2);
  const graphOp=Math.max(0.06,1-eP*1.6);
  document.getElementById('graph-canvas').style.opacity=graphOp;
  const nb=document.getElementById('name-block');
  nb.style.transform=`scale(${nameScale})`;nb.style.opacity=nameOp;
  document.getElementById('entry-overlay').style.background=`radial-gradient(ellipse 60% 55% at 50% 50%,rgba(2,4,8,.05) 0%,rgba(2,4,8,${.1+eP*.78}) 100%)`;

  const narr=document.getElementById('narrative');
  const narrOp=Math.min(1,Math.max(0,(eP-.28)*4));
  narr.style.opacity=narrOp;

  if(eP>.3&&!twState.l1done&&!twState.l1id){
    twState.l1id=typewrite(document.getElementById('line1'),t.e1,42,()=>{twState.l1done=true;});
  }
  if(eP>.55&&twState.l1done&&!twState.l2done&&!twState.l2id){
    twState.l2id=typewrite(document.getElementById('line2'),t.e2,40,()=>{twState.l2done=true;});
  }
  if(eP<=.25&&twState.l1id){resetTypewriters();}
  document.getElementById('line3').style.opacity=eP>.78?1:0;
  if(!document.getElementById('line3').dataset.set){document.getElementById('line3').textContent=t.e3;document.getElementById('line3').dataset.set='1';}
  document.getElementById('scroll-hint').style.opacity=eP>.9?1:0;
  if(!document.getElementById('scroll-hint').dataset.set){document.getElementById('scroll-hint').textContent=t.scroll;document.getElementById('scroll-hint').dataset.set='1';}

  // ── SCENE 2: PROBLEMS ──
  const pi=document.getElementById('prob-inner');
  if(prP>.05){pi.classList.add('show','from-bottom');}else{pi.classList.remove('show');}
  document.querySelectorAll('.prob-item').forEach((el,i)=>{
    el.classList.toggle('show',prP>(i+1)*.22);
    el.style.transitionDelay=i*.1+'s';
  });
  document.getElementById('prob-end').classList.toggle('show',prP>.88);

  // ── SCENE 3: TRANSFORMATION ──
  const ti=document.getElementById('trans-inner');
  if(trP>.05){ti.classList.add('show','from-scale');}else{ti.classList.remove('show');countersStarted=false;}
  if(trP>.3)startCounters();
  document.getElementById('tools-row').style.display=trP>.65?'flex':'none';

  // ── SCENE 4: PRODUCTS ──
  const pdi=document.getElementById('prod-inner');
  if(prD>.05)pdi.classList.add('show');else pdi.classList.remove('show');
  document.querySelectorAll('.prod-card').forEach((card,i)=>{
    if(prD>.2){setTimeout(()=>card.classList.add('show'),i*180);}else card.classList.remove('show');
  });
  document.getElementById('prod-hint').style.opacity=prD>.6?1:0;

  // ── SCENE 5: CHAT ──
  const chi=document.getElementById('chat-inner');
  if(chP>.05){chi.classList.add('show','from-bottom');}else{chi.classList.remove('show');chatStarted=false;rebuildChat();}
  document.querySelectorAll('.check-item').forEach((el,i)=>{
    el.classList.toggle('show',chP>i*.15);
    el.style.transitionDelay=i*.1+'s';
  });
  if(chP>.25)startChat();

  // ── SCENE 6: CTA ──
  const cti=document.getElementById('cta-inner');
  if(ctP>.05)cti.classList.add('show','from-bottom');else cti.classList.remove('show');
}

// ══════════════════════════════════
// FORM
// ══════════════════════════════════
function submitForm(){
  const name=document.getElementById('inp-name').value.trim();
  const wpp=document.getElementById('inp-wpp').value.trim();
  const need=document.getElementById('inp-need').value;
  if(!name||!wpp||!need)return;

  const btn=document.getElementById('submit-btn');
  btn.disabled=true;
  btn.textContent='⏳ Enviando...';

  fetch('https://n8n-yvdu.srv1552695.hstgr.cloud/webhook/synaptech',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      nome:name,
      whatsapp:wpp,
      solucao:need,
      origem:'landing_scrollytelling',
      pagina:window.location.href,
      data:new Date().toISOString(),
    }),
  })
  .catch(()=>{
    setTimeout(()=>{
      fetch('https://n8n-yvdu.srv1552695.hstgr.cloud/webhook/synaptech',{
        method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({nome:name,whatsapp:wpp,solucao:need,origem:'landing_scrollytelling',retry:true}),
      }).catch(()=>{});
    },3000);
  })
  .finally(()=>{
    if(typeof fbq!=='undefined')fbq('track','Lead',{content_name:need});
    document.getElementById('form-box').style.display='none';
    document.getElementById('success-box').style.display='flex';
    // Abre WhatsApp do cliente com mensagem pré-preenchida
    const msg = encodeURIComponent(
      'Olá! Me chamo ' + name + ' e tenho interesse em: ' + need + '. Pode me ajudar?'
    );
    setTimeout(()=>{
      window.open('https://wa.me/5532987167907?text=' + msg, '_blank');
    }, 1500);
  });
}

// Update button state
['inp-name','inp-wpp','inp-need'].forEach(id=>{
  document.getElementById(id).addEventListener('input',updateBtn);
  document.getElementById(id).addEventListener('change',updateBtn);
});
function updateBtn(){
  const ok=document.getElementById('inp-name').value.trim()&&document.getElementById('inp-wpp').value.trim()&&document.getElementById('inp-need').value;
  document.getElementById('submit-btn').classList.toggle('ready',!!ok);
}

// ══════════════════════════════════
// INIT
// ══════════════════════════════════
applyTranslations();
rebuildProducts();
rebuildChat();
// Trigger once on load
setTimeout(()=>root.dispatchEvent(new Event('scroll')),50);