/* Public trial: sample-only, ephemeral JavaScript memory. No browser storage, no backend, no accounts. */
window.CM_DEMO=true;
window.CM_DEMO_BACKEND=(()=>{
const schemas=window.CM_SCHEMA;
const fmt=d=>{const n=new Date(d),parts=new Intl.DateTimeFormat('en-GB',{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(n),v=Object.fromEntries(parts.filter(p=>p.type!=='literal').map(p=>[p.type,p.value]));return `${v.year}-${v.month}-${v.day}`;};
const shift=(days)=>{const n=new Date();n.setDate(n.getDate()+days);return fmt(n);};
let seq=0;const records=[];
let prefs={displayName:'Sophie',journeyStart:shift(-23),temperatureUnit:'°C'};
function add(type,values){const date=String(values[schemas[type].dateKey]||shift(0));const title=type==='DAILY'?`Daily check-in · ${date}`:type==='MEAL'?`${values.meal_slot} · ${values.meal_name}`:String(values[schemas[type].summaryKey]||schemas[type].label);const now=new Date().toISOString();const row={id:'demo-'+(++seq),type,date,title,values,status:'ACTIVE',createdAt:now,updatedAt:now,revision:1};records.push(row);return {...row};}
function seed(){
 records.length=0;seq=0;prefs={displayName:'Sophie',journeyStart:shift(-23),temperatureUnit:'°C'};
 for(let i=0;i<14;i++)if(i%4!==2){const d=shift(-13+i);add('DAILY',{date:d,bleeding:i===7?'Spotting':'None',discomfort:Math.max(1,Math.min(9,Math.round(4+3*Math.sin(i*1.1)))),energy:Math.max(1,Math.min(9,Math.round(6+2*Math.cos(i*.8)))),mood:['Good','Neutral','Calm','Low'][i%4],sleep_hours:6+(i%3),symptoms:i%3?'Mild tiredness':'',notes:'Fictional sample observation only.'});}
 for(let i=0;i<4;i++)add('CYCLE',{start_date:shift(-82+i*27),end_date:shift(-78+i*27),flow:'Moderate',notes:'Fictional cycle sample'});
 for(let i=0;i<6;i++)add('SYMPTOM',{date:shift(-i*2),name:['Bloating','Cramping','Fatigue'][i%3],intensity:i%5+2,context:'Sample only'});
 for(let i=0;i<8;i++)add('MEAL',{date:shift(i-1),meal_slot:['Breakfast','Lunch','Dinner','Snack'][i%4],meal_name:['Overnight oats with berries','Grilled chicken salad','Salmon with lemon & greens','Greek yogurt parfait'][i%4],ingredients:'Simple groceries',favourite:'Yes',notes:'Only a sample meal; not a specific PCOS diet.'});
 for(let i=0;i<6;i++)add('ROUTINE',{date:shift(-i),activity:['Comfortable walk','Quiet reflection','Gentle stretching'][i%3],category:'Movement',minutes:20,status:i%3?'Completed':'Planned',notes:'Optional and illustrative.'});
 for(let i=0;i<5;i++)add('BBT',{date:shift(-i),temperature:36.4+i*.1,unit:'°C',opk:'Not recorded',notes:'Fictional sample reading.'});
 add('DOCTOR',{visit_date:shift(10),provider:'Sample follow-up consultation',status:'Planned',questions:'What follow-up is appropriate for me? What do I need to ask about these symptoms?',notes:''});
 add('GOAL',{start_date:shift(-10),title:'Make room for more rest',review_date:shift(15),status:'Active',reason:'Fictional personal goal.'});
 add('REVIEW',{week_date:shift(-7),wins:'Consistent journaling',challenges:'Busy days',next_steps:'Smaller optional goals',doctor_questions:''});
 for(let i=0;i<5;i++)add('CARE',{date:shift(-i),task_key:['journal','nourishment','movement','rest','questions'][i],task_title:['Notice how today feels','Plan something nourishing','Make room for comfortable movement','Leave room for rest and kindness','Keep one question for your clinician'][i],status:'Done',notes:'Fictional example.'});
 const med=add('MED',{start_date:shift(-28),end_date:shift(60),medicine_name:'Sample medicine (fictional)',strength:'Use your actual prescription in the paid app',schedule:'Twice daily',scheduled_times:'08:00,20:00',instructions:'Fictional example. No medical instruction or dose provided.',prescribed_by:'Example clinician',notes:'Never use demo records as a treatment recommendation.'});
 for(let i=1;i<=3;i++)add('DOSE',{date:shift(-i),medicine_id:med.id,medicine_name:med.values.medicine_name,scheduled_time:'08:00',status:'Taken',actual_time:'08:03',notes:'Fictional check-in.'});
}
seed();
const snapshot=()=>({activated:true,email:'demo@calmvora.example',version:'3.0.0-demo',schemas,preferences:{...prefs},records:records.map(x=>({...x,values:{...x.values}})),sheetUrl:'',serverTime:new Date().toISOString(),truncated:false});
return {getBootstrap:snapshot,activateLicense:()=>snapshot(),savePreferences:p=>(prefs={...p}),resetDemo:()=>{seed();return snapshot();},
 saveRecord:input=>{if(!schemas[input.type])throw Error('Invalid type');if(!input.values||!input.values[schemas[input.type].dateKey])throw Error('Date is required');
 if(input.id){const row=records.find(x=>x.id===input.id);if(!row||row.revision!==input.expectedRevision)throw Error('Record changed elsewhere');row.values={...input.values};row.date=String(input.values[schemas[input.type].dateKey]);row.title=String(input.values[schemas[input.type].summaryKey]||schemas[input.type].label);row.revision++;row.updatedAt=new Date().toISOString();return {...row};}
 return add(input.type,input.values);},
 archiveRecord:(id,rev)=>update(id,rev,'ARCHIVED'),restoreRecord:(id,rev)=>update(id,rev,'ACTIVE'),
 deleteRecordPermanently:(id,rev,confirmation)=>{const i=records.findIndex(x=>x.id===id);if(confirmation!=='PERMANENT_DELETE'||i<0||records[i].revision!==rev||records[i].status!=='ARCHIVED')throw Error('Deletion not permitted.');records.splice(i,1);return {deleted:true,id};},
 exportBackup:()=>{throw Error('Export is available only in the purchased version. Do not enter real health information into this demo.');},
 importBackup:()=>{throw Error('Import is disabled in the public demo to protect personal information.');}
 };
function update(id,rev,status){const row=records.find(x=>x.id===id);if(!row||row.revision!==rev)throw Error('Record changed elsewhere');row.status=status;row.revision++;row.updatedAt=new Date().toISOString();return {...row};}
})();

