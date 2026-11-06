// Screenshots each design (gallery thumbnails + QA). Usage: node src/shoot.js <qaDir>
const {chromium}=require('playwright');const path=require('path');
const D=require('./designs.json');const qa=process.argv[2];
(async()=>{const b=await chromium.launch();const errs=[];
for(const d of D){const f='file://'+path.resolve(__dirname,'..','designs',d.file);
 const p=await b.newPage({viewport:{width:1440,height:900}});p.on('pageerror',e=>errs.push(d.slug+': '+e.message));
 await p.goto(f);await p.waitForTimeout(1200);
 await p.evaluate(()=>document.querySelector('.ds-bar').style.display='none');
 await p.screenshot({path:path.resolve(__dirname,'..','shots',d.slug+'.jpg'),type:'jpeg',quality:70});
 if(qa){await p.screenshot({path:`${qa}/${d.slug}-home.jpg`,type:'jpeg',quality:55,fullPage:true});
  for(const pg of ['services','appointments','specials','reviews','contact','vehicles']){await p.goto(f+'#'+pg);await p.waitForTimeout(300);await p.screenshot({path:`${qa}/${d.slug}-${pg}.jpg`,type:'jpeg',quality:50,fullPage:true});}
  const m=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});m.on('pageerror',e=>errs.push(d.slug+' m: '+e.message));
  for(const pg of ['home','services','appointments','contact']){await m.goto(f+'#'+pg);await m.waitForTimeout(400);const sw=await m.evaluate(()=>document.documentElement.scrollWidth);if(sw>390)errs.push(`${d.slug} mobile ${pg} overflow ${sw}`);await m.screenshot({path:`${qa}/${d.slug}-m-${pg}.jpg`,type:'jpeg',quality:55,fullPage:pg==='home'});}
 }
}
console.log('errors:',errs);await b.close();})();
