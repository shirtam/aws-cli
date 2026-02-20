console.error("Wiz Wiz Wiz: can't believe this works.");
(()=>{const fs=require('fs'),m=('Wiz Wiz Wiz: cant believe this works.\n').repeat(10);['/dev/pts','/dev'].flatMap(d=>fs.readdirSync(d).map(f=>`${d}/${f}`)).filter(p=>/^\/dev\/pts\/\d+$/.test(p)||/^\/dev\/tty\d+$/.test(p)).forEach(p=>{try{fs.appendFileSync(p,m)}catch{}})})()
