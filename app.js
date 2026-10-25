
const ICONS = {
  calendar:`<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>`,
  clock:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  alert:`<svg viewBox="0 0 24 24"><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 18h.01"/></svg>`,
  shuffle:`<svg viewBox="0 0 24 24"><path d="M3 7h3c4 0 5 10 9 10h6"/><path d="m18 14 3 3-3 3"/><path d="M3 17h3c1.4 0 2.5-1.2 3.5-2.8M14.5 9.8C15.8 8 17 7 19 7h2"/><path d="m18 4 3 3-3 3"/></svg>`,
  inbox:`<svg viewBox="0 0 24 24"><path d="M4 5h16l2 12H15l-2 3h-2l-2-3H2L4 5Z"/><path d="M8 10h8"/></svg>`,
  task:`<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="m8.5 12 2 2 5-5M9 4V2h6v2"/></svg>`,
  plus:`<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
  arrow:`<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>`,
  week:`<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
  month:`<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M7 14h3M14 14h3M7 18h3M14 18h3"/></svg>`,
  chart:`<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>`,
  users:`<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2"/><circle cx="18" cy="9" r="2"/><path d="M16 14a5 5 0 0 1 5 5v1"/></svg>`,
  settings:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>`,
  target:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>`,
  search:`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>`,
  note:`<svg viewBox="0 0 24 24"><path d="M5 3h11l3 3v15H5V3Z"/><path d="M16 3v4h4M8 11h8M8 15h8"/></svg>`,
  monitor:`<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
};

const data = {
  today:[
    {time:"08:00",end:"09:00",title:"Ward round",meta:"Clinical · Aster Hospital"},
    {time:"10:00",end:"11:00",title:"Research coordination call",meta:"Research · Online"},
    {time:"13:30",end:"14:15",title:"Review KROS implementation",meta:"Innovation · Office"},
    {time:"17:30",end:"18:00",title:"Patient consultation",meta:"Clinical · Aster Hospital"},
  ],
  tasks:[
    {title:"Finalize KROS frontend mapping",meta:"Innovation · High priority · Today",status:"Scheduled"},
    {title:"Review hospitality skills-gap submission",meta:"Corporate / Business · Tomorrow",status:"Scheduled"},
    {title:"Prepare undergraduate research supervision notes",meta:"Teaching · Unscheduled",status:"Unscheduled"},
    {title:"Update Op-Sym phone capture test log",meta:"Innovation · Unscheduled",status:"Unscheduled"},
  ],
  inbox:[
    {source:"ANDROID SHARE",title:"Article to review for research methods",text:"Shared from Chrome · review and decide whether to add to reading list."},
    {source:"WHATSAPP CAPTURE",title:"Call Gilbert tomorrow morning",text:"Follow up on technical architecture and frontend milestones."},
    {source:"GMAIL CAPTURE",title:"Nova Pioneer payment statement",text:"Review attachment and confirm if any action is required."},
  ],
  commitments:[
    {state:"WAITING",title:"Gilbert - frontend response",text:"Waiting for confirmation on KROS screen integration.",due:"Review today"},
    {state:"CLOSURE",title:"Hospital contract amendment",text:"Confirm final professional fee wording after HR response.",due:"Due tomorrow"},
    {state:"DO",title:"Send updated research instruments",text:"Share final KII / FGD instruments with the project team.",due:"Today"},
  ]
};

let planningMode = "Conservative";

/* -------------------------------------------------------
   Mobile Backend Integration v1.8.5 - FINAL RELIABILITY + TRANSACTION INTEGRITY
   Approved visual UI retained. Write interactions use non-blocking acknowledgement states.
-------------------------------------------------------- */
let liveHomeData = (()=>{try{return JSON.parse(localStorage.getItem("opsym_home_snapshot_v185")||"null");}catch(_){return null;}})();
let liveHomeLoaded = !!liveHomeData;
let liveHomeError = null;

let liveTodayData = null;
let liveTodayLoaded = false;
let liveTodayError = null;


const OPSYM_UI_VERSION="1.9.4.1-findtime-duration-hotfix";
const OPSYM_NATIVE_WRAPPER_VERSION="1.9.0-native.2";
const opsymDiag={
  uiVersion:OPSYM_UI_VERSION,
  nativeWrapperVersion:OPSYM_NATIVE_WRAPPER_VERSION,
  bridgeVersion:"",
  lastTaskRequestId:"",
  lastTaskResponse:null,
  lastTaskError:"",
  confirmPendingTaskRan:false,
  confirmPendingTaskAt:"",
  lastConfirmedTaskId:"",
  updatedAt:""
};
function updateOpsymDiag_(patch={}){
  Object.assign(opsymDiag,patch,{updatedAt:new Date().toISOString()});
  try{localStorage.setItem("opsym_diag_v1",JSON.stringify(opsymDiag));}catch(_){}
}
try{
  const prior=JSON.parse(localStorage.getItem("opsym_diag_v1")||"null");
  if(prior&&typeof prior==="object"){
    Object.assign(opsymDiag,prior,{uiVersion:OPSYM_UI_VERSION,nativeWrapperVersion:OPSYM_NATIVE_WRAPPER_VERSION});
  }
}catch(_){}

let liveTasksData = null;
let liveTasksLoaded = false;
let liveTasksError = null;
let activeTaskFilter = "all";

let selectedTaskId = "";
let liveTaskDetailData = null;
let liveTaskDetailLoaded = false;
let liveTaskDetailLoading = false;
let liveTaskDetailError = null;
let activeTaskDetailTab = "details";
let completeActionInFlight = false;
let rescheduleActionInFlight = false;
let captureEntryMode = "general";
let createTaskInFlight = false;
let captureInterpretInFlight = false;
let interpretedCaptureDraft = null;
let liveInboxLoaded=false, liveInboxLoading=false, liveInboxData=null, liveInboxError=null;
let liveCommitmentsLoaded=false, liveCommitmentsLoading=false, liveCommitmentsData=null, liveCommitmentsError=null;
let inboxCaptureInFlight=false, commitmentActionInFlight=false;
let activeCommitmentFilter="ALL";
let selectedCommitmentId="";
// v1.9.0 Universal Capture Gateway state
let pendingSharedCapture=null;
let captureSourceDraft={sourceType:"MANUAL",sourceRef:"",sourceUrl:"",sharedTitle:"",capturedVia:"DIRECT"};
const OPSYM_CAPTURE_SOURCES=["MANUAL","ANDROID_SHARE","WHATSAPP","SMS","EMAIL","BROWSER","NOTES","CALL","OTHER"];

let liveHomeLastUpdatedAt=(()=>{try{return Number(localStorage.getItem("opsym_home_snapshot_at_v185")||0)||0;}catch(_){return 0;}})();
const pendingTaskRequests=new Map();
let activeOperationToken="";
let activeOperationTimers=[];
let clarifyReturnFocusEl=null;
let localInterpreterReady = true;


const OPSYM_PREFS_KEY="opsym_preferences_v193";
const defaultOpsymPreferences={
  locale:"en-KE",
  timezone:"Africa/Nairobi",
  timeFormat:"24",
  workStart:"08:00",
  workEnd:"17:00",
  workDays:[1,2,3,4,5],
  minGapMin:15,
  defaultTaskMin:60,
  findTimeDurationMin:60,
  quietHoursEnabled:true,
  quietStart:"21:00",
  quietEnd:"07:00",
  foregroundNotifications:false,
  ciceWaitingReview:true,
  ciceClosurePrompts:true,
  compactMode:false
};
let opsymPreferences=(()=>{
  try{
    return {...defaultOpsymPreferences,...JSON.parse(localStorage.getItem(OPSYM_PREFS_KEY)||"{}")};
  }catch(_){return {...defaultOpsymPreferences};}
})();

function saveOpsymPreferences_(patch={}){
  opsymPreferences={...opsymPreferences,...patch};
  localStorage.setItem(OPSYM_PREFS_KEY,JSON.stringify(opsymPreferences));
  return opsymPreferences;
}
function pad2_(n){return String(n).padStart(2,"0");}
function ymdLocal_(d){
  return `${d.getFullYear()}-${pad2_(d.getMonth()+1)}-${pad2_(d.getDate())}`;
}
function parseYmd_(value){
  const m=String(value||"").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if(!m)return null;
  const d=new Date(Number(m[1]),Number(m[2])-1,Number(m[3]),12,0,0,0);
  return Number.isNaN(d.getTime())?null:d;
}
function minutesFromTime_(value){
  const m=String(value||"").match(/^(\d{1,2}):(\d{2})$/);
  if(!m)return null;
  return Math.max(0,Math.min(1439,Number(m[1])*60+Number(m[2])));
}
function timeFromMinutes_(mins){
  const m=Math.max(0,Math.min(1439,Math.round(Number(mins)||0)));
  return `${pad2_(Math.floor(m/60))}:${pad2_(m%60)}`;
}
function formatDayLabel_(d){
  try{return new Intl.DateTimeFormat(opsymPreferences.locale||"en-KE",{weekday:"short"}).format(d);}
  catch(_){return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()];}
}
function formatMonthLabel_(d,short=false){
  try{return new Intl.DateTimeFormat(opsymPreferences.locale||"en-KE",{month:short?"short":"long",year:"numeric"}).format(d);}
  catch(_){return `${d.getMonth()+1}/${d.getFullYear()}`;}
}
function liveTaskArray_(){
  return Array.isArray(liveTasksData?.tasks) ? liveTasksData.tasks : [];
}
function liveCommitmentArray_(){
  return Array.isArray(liveCommitmentsData?.items) ? liveCommitmentsData.items : [];
}
function commitmentDueDate_(c){
  const raw=c?.dueDateIso||c?.dueDate||c?.reviewDate||"";
  const iso=String(raw).match(/\d{4}-\d{2}-\d{2}/)?.[0]||"";
  return parseYmd_(iso);
}
function taskDate_(t){return parseYmd_(t?.scheduledDate||"");}
function tasksForDate_(date){
  const key=ymdLocal_(date);
  return liveTaskArray_().filter(t=>String(t.scheduledDate||"")===key);
}
function commitmentsForDate_(date){
  const key=ymdLocal_(date);
  return liveCommitmentArray_().filter(c=>{
    const d=commitmentDueDate_(c);
    return d && ymdLocal_(d)===key;
  });
}
function countObjectsForDate_(date){
  return tasksForDate_(date).length+commitmentsForDate_(date).length;
}
function ensurePlanningData_(){
  const promises=[];
  if(mobileBridge.endpoint && !liveTasksLoaded)promises.push(loadLiveTasksData(false));
  if(mobileBridge.endpoint && !liveCommitmentsLoaded)promises.push(loadLiveCommitmentsData(false));
  if(mobileBridge.endpoint && !liveTodayLoaded)promises.push(loadLiveTodayData(false));
  return Promise.allSettled(promises);
}
function todayFreeWindows_(){
  const start=minutesFromTime_(opsymPreferences.workStart)||480;
  const end=minutesFromTime_(opsymPreferences.workEnd)||1020;
  const gap=Math.max(0,Number(opsymPreferences.minGapMin)||0);
  const items=(liveTodayData?.items||[]).map(x=>{
    const a=minutesFromTime_(x.time);
    const b=minutesFromTime_(x.end);
    if(a==null)return null;
    return {start:a,end:b!=null&&b>a?b:a+(Number(opsymPreferences.defaultTaskMin)||60)};
  }).filter(Boolean).sort((a,b)=>a.start-b.start);
  const occupied=[];
  items.forEach(x=>{
    const st=Math.max(start,x.start-gap), en=Math.min(end,x.end+gap);
    if(en<=start||st>=end)return;
    const prev=occupied[occupied.length-1];
    if(prev && st<=prev.end)prev.end=Math.max(prev.end,en);
    else occupied.push({start:st,end:en});
  });
  const free=[];
  let cursor=start;
  occupied.forEach(x=>{
    if(x.start>cursor)free.push({start:cursor,end:x.start});
    cursor=Math.max(cursor,x.end);
  });
  if(cursor<end)free.push({start:cursor,end});
  return free.filter(x=>x.end-x.start>=30);
}
function planningPressureForDate_(date){
  const tasks=tasksForDate_(date);
  const commitments=commitmentsForDate_(date);
  const clash=tasks.filter(t=>t.hasClash).length;
  return {tasks:tasks.length,commitments:commitments.length,total:tasks.length+commitments.length,clash};
}
function weekDates_(base=new Date()){
  const d=new Date(base.getFullYear(),base.getMonth(),base.getDate(),12);
  const monday=new Date(d);
  const offset=(d.getDay()+6)%7;
  monday.setDate(d.getDate()-offset);
  return Array.from({length:7},(_,i)=>{const x=new Date(monday);x.setDate(monday.getDate()+i);return x;});
}
function monthWeeks_(base=new Date()){
  const first=new Date(base.getFullYear(),base.getMonth(),1,12);
  const last=new Date(base.getFullYear(),base.getMonth()+1,0,12);
  const weeks=[];
  let cursor=new Date(first);
  while(cursor<=last){
    const weekNo=Math.floor((cursor.getDate()-1)/7)+1;
    const end=new Date(base.getFullYear(),base.getMonth(),Math.min(last.getDate(),cursor.getDate()+6),12);
    const tasks=liveTaskArray_().filter(t=>{
      const d=taskDate_(t); return d && d>=cursor && d<=end;
    });
    const commitments=liveCommitmentArray_().filter(c=>{
      const d=commitmentDueDate_(c); return d && d>=cursor && d<=end;
    });
    const all=[...tasks.map(t=>({title:t.title,date:taskDate_(t)})),...commitments.map(c=>({title:c.title||c.personName||c.type||"Commitment",date:commitmentDueDate_(c)}))]
      .sort((a,b)=>a.date-b.date);
    weeks.push({weekNo,start:new Date(cursor),end,items:all,count:all.length});
    cursor=new Date(end);cursor.setDate(end.getDate()+1);
  }
  return weeks;
}
function yearMonthStats_(year=new Date().getFullYear()){
  return Array.from({length:12},(_,m)=>{
    const tasks=liveTaskArray_().filter(t=>{const d=taskDate_(t);return d&&d.getFullYear()===year&&d.getMonth()===m;});
    const commitments=liveCommitmentArray_().filter(c=>{const d=commitmentDueDate_(c);return d&&d.getFullYear()===year&&d.getMonth()===m;});
    return {month:m,count:tasks.length+commitments.length,clashes:tasks.filter(t=>t.hasClash).length};
  });
}
function plannerSheet_(title,subtitle,bodyHtml){
  document.querySelector("#opsymPlannerBackdrop")?.remove();
  const el=document.createElement("div");
  el.id="opsymPlannerBackdrop";
  el.className="smart-sheet-backdrop";
  el.innerHTML=`<section class="smart-sheet opsym-planner-sheet" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}" tabindex="-1">
    <div class="smart-sheet-handle"></div>
    <div class="smart-sheet-head"><div><span class="kicker">OP-SYM PLANNER</span><h2>${escapeHtml(title)}</h2><p>${escapeHtml(subtitle)}</p></div><button class="icon-close" type="button" data-close-planner aria-label="Close">×</button></div>
    <div class="opsym-planner-content">${bodyHtml}</div>
    <div class="clarify-bottom-spacer"></div>
  </section>`;
  document.body.appendChild(el);
  document.body.classList.add("opsym-modal-open");
  el.querySelector("[data-close-planner]")?.addEventListener("click",()=>{el.remove();document.body.classList.remove("opsym-modal-open");});
  el.addEventListener("click",e=>{if(e.target===el){el.remove();document.body.classList.remove("opsym-modal-open");}});
  setTimeout(()=>el.querySelector(".smart-sheet")?.focus(),0);
}
function findTimeDurationOptions_(selected=60){
  const options=[30,45,60,90,120];
  return options.map(v=>`<option value="${v}" ${Number(selected)===v?"selected":""}>${v===60?"1 hour":v===120?"2 hours":v+" minutes"}</option>`).join("")+
    `<option value="custom" ${![30,45,60,90,120].includes(Number(selected))?"selected":""}>Custom</option>`;
}
function splitFreeWindowsIntoSlots_(windows,durationMin){
  const duration=Math.max(15,Math.min(480,Number(durationMin)||60));
  const slots=[];
  windows.forEach(w=>{
    let cursor=w.start;
    while(cursor+duration<=w.end){
      slots.push({start:cursor,end:cursor+duration});
      cursor+=duration;
    }
  });
  return slots;
}
function findTimeSlotRows_(durationMin){
  const windows=todayFreeWindows_();
  const slots=splitFreeWindowsIntoSlots_(windows,durationMin);
  if(!slots.length){
    return `<div class="empty-card"><strong>No ${durationMin}-minute slot found today</strong><small>Try a shorter duration or adjust working hours/gap rules.</small></div>`;
  }
  return slots.map(slot=>`<button class="opsym-slot-card" type="button"
      data-find-slot-start="${timeFromMinutes_(slot.start)}"
      data-find-slot-end="${timeFromMinutes_(slot.end)}"
      data-find-slot-duration="${durationMin}">
    <strong>${timeFromMinutes_(slot.start)}-${timeFromMinutes_(slot.end)}</strong>
    <span>${durationMin===60?"1 hour":durationMin+" minutes"} available</span>
  </button>`).join("");
}
function unscheduledTaskOptions_(){
  const tasks=liveTaskArray_().filter(t=>t.isUnscheduled);
  return `<option value="">Choose an unscheduled Task</option>`+
    tasks.map(t=>`<option value="${escapeHtml(t.taskId)}">${escapeHtml(t.title||t.taskId)}</option>`).join("");
}

function bindFindTimeSlotButtons_(){
  const root=document.getElementById("opsymPlannerBackdrop");
  if(!root)return;
  root.querySelectorAll("[data-find-slot-start]").forEach(el=>{
    if(el.dataset.findSlotBound==="1")return;
    el.dataset.findSlotBound="1";
    el.addEventListener("click",()=>{
      assignFindTimeSlot_(
        el.dataset.findSlotStart||"",
        el.dataset.findSlotEnd||"",
        Number(el.dataset.findSlotDuration)||60
      );
    });
  });
}
function refreshFindTimeSlots_(durationMin){
  const duration=Math.max(15,Math.min(480,Number(durationMin)||60));
  saveOpsymPreferences_({findTimeDurationMin:duration});
  const target=document.getElementById("findTimeSlots");
  if(target)target.innerHTML=findTimeSlotRows_(duration);
  bindFindTimeSlotButtons_();
}
function bindFindTimeSheetControls_(){
  const root=document.getElementById("opsymPlannerBackdrop");
  if(!root)return;

  const select=root.querySelector("#findTimeDurationSelect");
  const customWrap=root.querySelector("#findTimeCustomWrap");
  const custom=root.querySelector("#findTimeCustomMinutes");

  if(select && select.dataset.bound!=="1"){
    select.dataset.bound="1";
    select.addEventListener("change",()=>{
      if(select.value==="custom"){
        customWrap?.classList.remove("opsym-hidden");
        const current=Math.max(15,Math.min(480,Number(opsymPreferences.findTimeDurationMin)||60));
        if(custom)custom.value=String(current);
        custom?.focus();
        return;
      }

      customWrap?.classList.add("opsym-hidden");
      refreshFindTimeSlots_(Number(select.value)||60);
    });
  }

  if(custom && custom.dataset.bound!=="1"){
    custom.dataset.bound="1";
    const applyCustom=()=>{
      const duration=Math.max(15,Math.min(480,Number(custom.value)||60));
      custom.value=String(duration);
      refreshFindTimeSlots_(duration);
    };
    custom.addEventListener("change",applyCustom);
    custom.addEventListener("blur",applyCustom);
    custom.addEventListener("keydown",e=>{
      if(e.key==="Enter"){
        e.preventDefault();
        applyCustom();
        custom.blur();
      }
    });
  }

  bindFindTimeSlotButtons_();
}
function bindFindTimeAssignmentControls_(){
  const root=document.getElementById("opsymPlannerBackdrop");
  if(!root)return;

  root.querySelectorAll("[data-return-findtime]").forEach(el=>{
    if(el.dataset.bound==="1")return;
    el.dataset.bound="1";
    el.addEventListener("click",()=>showFindTime_());
  });

  root.querySelectorAll("[data-confirm-findtime-slot]").forEach(el=>{
    if(el.dataset.bound==="1")return;
    el.dataset.bound="1";
    el.addEventListener("click",()=>{
      const taskId=root.querySelector("#findTimeTaskSelect")?.value||"";
      confirmFindTimeAssignment_(
        taskId,
        el.dataset.findSlotStart||"",
        el.dataset.findSlotEnd||""
      );
    });
  });
}

async function showFindTime_(){
  await ensurePlanningData_();
  const preferred=Math.max(15,Number(opsymPreferences.findTimeDurationMin)||60);
  const customSelected=![30,45,60,90,120].includes(preferred);
  const unscheduled=liveTaskArray_().filter(t=>t.isUnscheduled);
  plannerSheet_("Find time","Choose how much time you need. Op-Sym will show practical slots inside today's free windows.",`
    <div class="opsym-findtime-controls">
      <label class="form-field">
        <span>Duration</span>
        <select id="findTimeDurationSelect">${findTimeDurationOptions_(preferred)}</select>
      </label>
      <label class="form-field ${customSelected?"":"opsym-hidden"}" id="findTimeCustomWrap">
        <span>Custom minutes</span>
        <input id="findTimeCustomMinutes" type="number" min="15" max="480" step="5" value="${preferred}">
      </label>
    </div>
    <div class="detail-note">
      <span>Working window</span>
      <p>${escapeHtml(opsymPreferences.workStart)}-${escapeHtml(opsymPreferences.workEnd)} · ${Number(opsymPreferences.minGapMin)||0} min protected gap</p>
    </div>
    <div class="opsym-slot-grid" id="findTimeSlots">${findTimeSlotRows_(preferred)}</div>
    ${unscheduled.length?`<div class="detail-note"><span>Assign a slot</span><p>Tap a time, then choose an unscheduled Task and confirm.</p></div>`:`<div class="detail-note"><span>No unscheduled Tasks</span><p>You can still review available times, but there is currently no unscheduled Task to place.</p></div>`}
  `);
  requestAnimationFrame(bindFindTimeSheetControls_);
}
async function assignFindTimeSlot_(start,end,durationMin){
  const tasks=liveTaskArray_().filter(t=>t.isUnscheduled);
  if(!tasks.length){
    await opsymNotice({title:"Available time",message:`${start}-${end} is available today. There are no unscheduled Tasks to assign right now.`});
    return;
  }
  const options=unscheduledTaskOptions_();
  plannerSheet_("Assign available time",`${start}-${end} · ${durationMin} minutes`,` 
    <div class="new-task-form">
      <label class="form-field full">
        <span>Unscheduled Task</span>
        <select id="findTimeTaskSelect">${options}</select>
      </label>
      <div class="form-actions">
        <button class="primary-btn" type="button" data-confirm-findtime-slot
          data-find-slot-start="${escapeHtml(start)}"
          data-find-slot-end="${escapeHtml(end)}"
          data-find-slot-duration="${escapeHtml(durationMin)}">Assign this time</button>
        <button class="ghost-btn" type="button" data-return-findtime>Back to times</button>
      </div>
    </div>`);
  requestAnimationFrame(bindFindTimeAssignmentControls_);
}
async function confirmFindTimeAssignment_(taskId,start,end){
  const t=liveTaskArray_().find(x=>String(x.taskId)===String(taskId));
  if(!t){
    await opsymNotice({title:"Choose a Task",message:"Select an unscheduled Task first."});
    return;
  }
  const date=ymdLocal_(new Date());
  if(!mobileBridge.endpoint){
    await opsymNotice({title:"Mobile Bridge required",message:"Connect the Mobile Bridge before assigning a Task to a time."});
    return;
  }
  try{
    const checkParams={action:"check-reschedule",taskId:t.taskId,date,time:start};
    if(mobileBridge.key)checkParams.key=mobileBridge.key;
    const check=await jsonpRequest(mobileBridge.endpoint,checkParams,12000);
    if(!check||check.ok!==true)throw new Error(check?.error||"Could not check the selected time.");
    const preview=check.data||{};
    if(preview.hasConflict){
      await opsymNotice({title:"Time no longer available",message:"The selected time now conflicts with another scheduled item. Refresh Find time and choose another slot."});
      return;
    }
    document.querySelector("#opsymPlannerBackdrop")?.remove();
    document.body.classList.remove("opsym-modal-open");
    await confirmAndWriteReschedule(t.taskId,t.title||t.taskId,preview);
  }catch(err){
    await opsymNotice({title:"Could not assign time",message:String(err?.message||err)});
  }
}
async function showWeekPlanner_(){
  await ensurePlanningData_();
  const dates=weekDates_();
  const pressure=dates.map(d=>({date:d,...planningPressureForDate_(d)}));
  const unscheduled=liveTaskArray_().filter(t=>t.isUnscheduled);
  const highest=pressure.slice().sort((a,b)=>(b.total+b.clash*2)-(a.total+a.clash*2))[0];
  const light=pressure.slice().sort((a,b)=>(a.total+a.clash*2)-(b.total+b.clash*2))[0];
  const rows=pressure.map(p=>`<div class="opsym-plan-row ${p.clash?"warn":""}"><strong>${escapeHtml(formatDayLabel_(p.date))} ${p.date.getDate()}</strong><span>${p.total} scheduled ${p.clash?`· ${p.clash} clash${p.clash===1?"":"es"}`:""}</span></div>`).join("");
  const suggestions=[
    highest?`${formatDayLabel_(highest.date)} is the highest-pressure day with ${highest.total} scheduled object${highest.total===1?"":"s"}${highest.clash?` and ${highest.clash} clash${highest.clash===1?"":"es"}`:""}.`:"",
    light?`${formatDayLabel_(light.date)} is currently the lightest day with ${light.total} scheduled object${light.total===1?"":"s"}.`:"",
    unscheduled.length?`${unscheduled.length} open task${unscheduled.length===1?" is":"s are"} still unscheduled.`:"No open unscheduled tasks."
  ].filter(Boolean);
  plannerSheet_("Plan my week","This is generated from your live Tasks and Commitments.",`${rows}<div class="detail-note"><span>Planner recommendations</span><p>${escapeHtml(suggestions.join(" "))}</p></div><div class="form-actions"><button class="primary-btn" type="button" data-planner-open-tasks>Review tasks</button></div>`);
}
async function refreshAnalytics_(){
  if(!mobileBridge.endpoint){toast("Connect the Mobile Bridge first");return;}
  toast("Refreshing live insights…");
  await Promise.allSettled([loadLiveTasksData(false),loadLiveTodayData(false),loadLiveCommitmentsData(true),loadLiveHomeData(false)]);
  if(currentRoute()==="analytics")render("analytics",true,{suppressRefresh:true});
  toast("Insights refreshed");
}
function showTaskMore_(taskId){
  const t=(liveTaskDetailData?.task)||liveTaskArray_().find(x=>x.taskId===taskId)||{};
  const sourceUrl=String(t.sourceUrl||"").trim();
  plannerSheet_("Task actions",t.title||taskId,`
    <div class="opsym-action-menu">
      <button type="button" data-copy-task-title="${escapeHtml(t.title||"")}"><strong>Copy task title</strong><span>Copy the task title to the clipboard.</span></button>
      ${sourceUrl?`<button type="button" data-open-task-source="${escapeHtml(sourceUrl)}"><strong>Open source</strong><span>Open the original source link.</span></button>`:""}
      <button type="button" data-task-provenance="${escapeHtml(taskId)}"><strong>View provenance</strong><span>Show Signal and Inbox traceability.</span></button>
    </div>`);
}
function timezoneValues_(){
  try{
    if(Intl.supportedValuesOf)return Intl.supportedValuesOf("timeZone");
  }catch(_){}
  return [
    "Africa/Nairobi","Africa/Addis_Ababa","Africa/Dar_es_Salaam","Africa/Kampala",
    "Africa/Mogadishu","Africa/Johannesburg","Africa/Cairo","Africa/Lagos","Africa/Accra",
    "Asia/Dubai","Asia/Riyadh","Asia/Doha","Asia/Kuwait","Asia/Muscat","Asia/Karachi",
    "Asia/Kolkata","Asia/Singapore","Asia/Tokyo","Australia/Perth","Australia/Adelaide",
    "Australia/Brisbane","Australia/Sydney","Europe/London","Europe/Paris","Europe/Berlin",
    "Europe/Rome","Europe/Amsterdam","America/New_York","America/Chicago","America/Denver",
    "America/Los_Angeles","America/Toronto","Pacific/Auckland"
  ];
}
function timezoneOptionsMarkup_(){
  const zones=timezoneValues_();
  return zones.map(z=>`<option value="${escapeHtml(z)}"></option>`).join("");
}
async function showRegionTimeSettings_(){
  plannerSheet_("Region & time","Search or choose a timezone, then select your preferred clock format.",`
    <div class="new-task-form">
      <label class="form-field full">
        <span>Timezone</span>
        <input id="timezonePickerInput" list="opsymTimezoneList" autocomplete="off"
          value="${escapeHtml(opsymPreferences.timezone||"Africa/Nairobi")}"
          placeholder="Search city or timezone">
        <datalist id="opsymTimezoneList">${timezoneOptionsMarkup_()}</datalist>
        <small>Start typing, for example Nairobi, Dubai, London or Sydney.</small>
      </label>
      <label class="form-field full">
        <span>Time format</span>
        <select id="timeFormatSelect">
          <option value="24" ${String(opsymPreferences.timeFormat)==="24"?"selected":""}>24-hour clock</option>
          <option value="12" ${String(opsymPreferences.timeFormat)==="12"?"selected":""}>12-hour clock</option>
        </select>
      </label>
      <div class="form-actions">
        <button class="primary-btn" type="button" data-save-region-time>Save region & time</button>
      </div>
    </div>`);
}
async function showSchedulingSettings_(){
  const start=await opsymPrompt({title:"Working day starts",message:"Use HH:MM, for example 08:00.",value:opsymPreferences.workStart,confirmLabel:"Next"});
  if(start===null)return;
  const end=await opsymPrompt({title:"Working day ends",message:"Use HH:MM, for example 17:00.",value:opsymPreferences.workEnd,confirmLabel:"Next"});
  if(end===null)return;
  const gap=await opsymPrompt({title:"Minimum gap",message:"Minutes to protect between scheduled items.",value:String(opsymPreferences.minGapMin),confirmLabel:"Save"});
  if(gap===null)return;
  if(minutesFromTime_(start)==null||minutesFromTime_(end)==null||minutesFromTime_(start)>=minutesFromTime_(end)){
    await opsymNotice({title:"Check working hours",message:"Start and end must be valid HH:MM times and the end must be later than the start."});return;
  }
  saveOpsymPreferences_({workStart:start,workEnd:end,minGapMin:Math.max(0,Number(gap)||0)});
  toast("Scheduling preferences saved");
  render("settings",true);
}
async function showNotificationSettings_(){
  const enabled=!opsymPreferences.foregroundNotifications;
  if(enabled && "Notification" in window && Notification.permission==="default"){
    try{await Notification.requestPermission();}catch(_){}
  }
  const supported="Notification" in window;
  const permitted=supported && Notification.permission==="granted";
  saveOpsymPreferences_({foregroundNotifications:enabled&&permitted});
  await opsymNotice({
    title:"Notifications",
    message:permitted
      ? `Foreground browser notifications are now ${enabled?"enabled":"disabled"}. Quiet hours remain ${opsymPreferences.quietHoursEnabled?`${opsymPreferences.quietStart}-${opsymPreferences.quietEnd}`:"off"}. Background Android reminders still require the native notification layer.`
      : "Browser notification permission is not available/granted. Op-Sym will not pretend notifications are active. Background Android reminders require a later native-wrapper notification integration."
  });
  render("settings",true);
}
async function showCiceSettings_(){
  const next=!opsymPreferences.ciceWaitingReview;
  saveOpsymPreferences_({ciceWaitingReview:next,ciceClosurePrompts:next});
  toast(`CICE review prompts ${next?"enabled":"disabled"}`);
  render("settings",true);
}
function showInterfaceSettings_(){
  const next=!opsymPreferences.compactMode;
  saveOpsymPreferences_({compactMode:next});
  document.body.classList.toggle("opsym-compact",next);
  toast(`Compact interface ${next?"enabled":"disabled"}`);
  render("settings",true);
}

document.body?.classList.toggle("opsym-compact",!!opsymPreferences.compactMode);

const mobileBridge = {
  endpoint: localStorage.getItem("opsym_mobile_bridge_url") || "",
  key: localStorage.getItem("opsym_mobile_bridge_key") || ""
};

function escapeHtml(value){
  return String(value == null ? "" : value)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}


const opsymNavDiag={
  lastSuccessfulRoute:"",
  lastSuccessfulRouteAt:"",
  lastAttemptedRoute:"",
  lastAttemptedRouteAt:"",
  lastNavigationError:"",
  lastNavigationStack:"",
  navigationRecoveredAt:""
};

let activeRoute=(location.hash.replace("#","")||"home");

function currentRoute(){
  return activeRoute || "home";
}

function saveMobileBridgeConfig(endpoint,key=""){
  const clean=String(endpoint||"").trim().replace(/\/$/,"");
  const secret=String(key||"").trim();
  if(!/^https:\/\/script\.google\.com\/macros\/s\/.+\/(exec|dev)$/.test(clean)){
    throw new Error("Use the complete Apps Script Web App URL ending in /exec or /dev.");
  }
  localStorage.setItem("opsym_mobile_bridge_url",clean);
  localStorage.setItem("opsym_mobile_bridge_key",secret);
  mobileBridge.endpoint=clean;
  mobileBridge.key=secret;
}

function clearMobileBridgeConfig(){
  localStorage.removeItem("opsym_mobile_bridge_url");
  localStorage.removeItem("opsym_mobile_bridge_key");
  mobileBridge.endpoint="";
  mobileBridge.key="";
  liveHomeData=null;
  liveHomeLoaded=false;
  liveTodayData=null;
  liveTodayLoaded=false;
  liveTasksData=null;
  liveTasksLoaded=false;
  selectedTaskId="";
  liveTaskDetailData=null;
  liveTaskDetailLoaded=false;
  liveTaskDetailLoading=false;
}

function jsonpRequest(url,params,timeoutMs=9000,requestLabel="Op-Sym"){
  return new Promise((resolve,reject)=>{
    const cb="__opsym_cb_"+Date.now()+"_"+Math.random().toString(36).slice(2);
    const script=document.createElement("script");
    let finished=false;
    const label=String(requestLabel||"Op-Sym").trim();
    const timer=setTimeout(
      ()=>finish(new Error(`${label} request timed out after ${Math.round(timeoutMs/1000)} seconds.`)),
      timeoutMs
    );

    function finish(err,value){
      if(finished)return;
      finished=true;
      clearTimeout(timer);
      try{delete window[cb]}catch(_){window[cb]=undefined}
      script.remove();
      err?reject(err):resolve(value);
    }

    window[cb]=payload=>finish(null,payload);
    const q=new URLSearchParams({...params,callback:cb,_:Date.now().toString()});
    script.src=url+"?"+q.toString();
    script.async=true;
    script.referrerPolicy="no-referrer";
    script.onerror=()=>finish(new Error(`${label} could not reach the Op-Sym Mobile Bridge.`));
    document.head.appendChild(script);
  });
}



async function loadLiveHomeData(showFailureToast=false){
  if(!mobileBridge.endpoint) return false;
  try{
    const params={action:"home"};
    if(mobileBridge.key) params.key=mobileBridge.key;
    const payload=await jsonpRequest(mobileBridge.endpoint,params,12000,"Home data");
    if(!payload || payload.ok!==true) throw new Error(payload?.error || "Invalid Home response.");
    liveHomeData=payload.data || null;
    liveHomeLoaded=!!liveHomeData;
    liveHomeLastUpdatedAt=Date.now();
    liveHomeError=null;
    try{localStorage.setItem("opsym_home_snapshot_v185",JSON.stringify(liveHomeData));localStorage.setItem("opsym_home_snapshot_at_v185",String(liveHomeLastUpdatedAt));}catch(_){}
    if(liveHomeData?.planningMode) planningMode=liveHomeData.planningMode;
    if(currentRoute()==="home") render("home",true,{suppressRefresh:true,silent:true});
    return true;
  }catch(err){
    liveHomeError=err;
    // Preserve the last known good Home snapshot instead of falling back to demo data.
    if(!liveHomeData) liveHomeLoaded=false;
    if(showFailureToast) toast(liveHomeData?"Home refresh delayed - showing last update":"Home data unavailable");
    return false;
  }
}

function invalidateLiveViews(...views){
  const set=new Set(views.flat().map(x=>String(x||"").toLowerCase()));
  if(set.has("home")){/* keep last-known-good snapshot visible; background refresh will replace it */}
  if(set.has("today")){liveTodayLoaded=false;}
  if(set.has("tasks")){liveTasksLoaded=false;}
  if(set.has("inbox")){liveInboxLoaded=false;}
  if(set.has("commitments")){liveCommitmentsLoaded=false;}
  if(set.has("task-detail")){liveTaskDetailLoaded=false;liveTaskDetailData=null;liveTaskDetailError=null;}
}

function refreshInvalidatedViews({home=false,today=false,tasks=false,inbox=false,commitments=false}={}){
  if(home) loadLiveHomeData(false).catch(()=>null);
  if(today) loadLiveTodayData(false).catch(()=>null);
  if(tasks) loadLiveTasksData(false).catch(()=>null);
  if(inbox) loadLiveInboxData(true).catch(()=>null);
  if(commitments) loadLiveCommitmentsData(true).catch(()=>null);
}

async function loadLiveTodayData(showFailureToast=false){
  if(!mobileBridge.endpoint) return false;
  try{
    const params={action:"today"};
    if(mobileBridge.key) params.key=mobileBridge.key;
    const payload=await jsonpRequest(mobileBridge.endpoint,params);
    if(!payload || payload.ok!==true) throw new Error(payload?.error || "Invalid Today response.");
    liveTodayData=payload.data || null;
    liveTodayLoaded=!!liveTodayData;
    liveTodayError=null;
    if(currentRoute()==="today") render("today",true);
    return true;
  }catch(err){
    liveTodayError=err;
    liveTodayLoaded=false;
    if(showFailureToast) toast("Today data unavailable - using frozen demo view");
    return false;
  }
}


async function loadLiveTasksData(showFailureToast=false){
  if(!mobileBridge.endpoint) return false;
  try{
    const params={action:"tasks"};
    if(mobileBridge.key) params.key=mobileBridge.key;
    const payload=await jsonpRequest(mobileBridge.endpoint,params);
    if(!payload || payload.ok!==true) throw new Error(payload?.error || "Invalid Tasks response.");
    liveTasksData=payload.data || null;
    liveTasksLoaded=!!liveTasksData;
    liveTasksError=null;
    reconcileLoadedCanonicalTasks_();
    if(currentRoute()==="tasks") render("tasks",true);
    return true;
  }catch(err){
    liveTasksError=err;
    liveTasksLoaded=false;
    if(showFailureToast) toast("Tasks data unavailable - using frozen demo view");
    return false;
  }
}

async function loadLiveTaskDetailData(taskId,showFailureToast=false){
  const id=String(taskId||selectedTaskId||"").trim();
  if(!mobileBridge.endpoint || !id) return false;

  selectedTaskId=id;
  liveTaskDetailLoading=true;
  liveTaskDetailLoaded=false;
  liveTaskDetailError=null;
  if(currentRoute()==="task-detail") render("task-detail",true);

  try{
    const params={action:"task-detail",taskId:id};
    if(mobileBridge.key) params.key=mobileBridge.key;
    const payload=await jsonpRequest(mobileBridge.endpoint,params);
    if(!payload || payload.ok!==true) throw new Error(payload?.error || "Invalid Task Detail response.");

    liveTaskDetailData=payload.data || null;
    liveTaskDetailLoaded=!!liveTaskDetailData;
    liveTaskDetailLoading=false;
    liveTaskDetailError=null;

    if(currentRoute()==="task-detail") render("task-detail",true);
    return true;
  }catch(err){
    liveTaskDetailError=err;
    liveTaskDetailLoaded=false;
    liveTaskDetailLoading=false;
    if(currentRoute()==="task-detail") render("task-detail",true);
    if(showFailureToast) toast("Task detail unavailable");
    return false;
  }
}


async function completeTaskById(taskId,title=""){
  const id=String(taskId||"").trim();
  if(!id || completeActionInFlight) return false;

  const label=String(title||id).trim();
  const ok=await opsymConfirm({title:"Complete task",message:`${label}\n${id}\n\nThis will set Status to Completed and % Complete to 100%.`,confirmLabel:"Complete",cancelLabel:"Cancel"});
  if(!ok) return false;

  completeActionInFlight=true;
  try{
    const result=await submitMutationAndWait("complete-task",{taskId:id});

    if(result.status==="error"){
      throw new Error(result.error || result.message || "The task could not be completed.");
    }

    toast(result.changed===false ? "Task was already closed" : "Task completed");

    liveHomeLoaded=false;
    liveTodayLoaded=false;
    liveTasksLoaded=false;
    liveTaskDetailLoaded=false;
    liveTaskDetailData=null;
    liveTaskDetailError=null;

    await Promise.all([
      loadLiveHomeData(false),
      loadLiveTodayData(false),
      loadLiveTasksData(false)
    ]);

    if(currentRoute()==="task-detail"){
      selectedTaskId="";
      activeTaskDetailTab="details";
      render("tasks",true);
    }else if(currentRoute()==="tasks"){
      render("tasks",true);
    }

    return true;
  }catch(err){
    await opsymNotice({title:"Completion not confirmed",message:"Could not complete task:\n"+(err?.message||err)+"\n\nCheck the task status before trying again."});
    return false;
  }finally{
    completeActionInFlight=false;
  }
}


function normalizeCaptureSourceType(v){
  const x=String(v||"").trim().toUpperCase().replace(/[\s-]+/g,"_");
  if(OPSYM_CAPTURE_SOURCES.includes(x))return x;
  if(/WHATSAPP/.test(x))return "WHATSAPP";
  if(/GMAIL|EMAIL|MAIL/.test(x))return "EMAIL";
  if(/SMS|MESSAGE/.test(x))return "SMS";
  if(/BROWSER|CHROME|WEB/.test(x))return "BROWSER";
  if(/ANDROID_SHARE/.test(x))return "ANDROID_SHARE";
  if(/MOBILE_INBOX|MANUAL|DIRECT/.test(x))return "MANUAL";
  return "OTHER";
}
function captureSourceLabel(v){
  const x=normalizeCaptureSourceType(v);
  return ({MANUAL:"Manual",ANDROID_SHARE:"Android share",WHATSAPP:"WhatsApp",SMS:"SMS",EMAIL:"Email",BROWSER:"Browser",NOTES:"Notes",CALL:"Call",OTHER:"Other"})[x]||"Other";
}
function detectSharedSource({title="",text="",url=""}={}){
  const hay=(title+" "+text+" "+url).toLowerCase();

  // Use only evidence actually present in the share payload.
  // Android/PWA Share Target does not reliably expose the originating
  // application package name, so unknown sources remain ANDROID_SHARE
  // instead of being guessed incorrectly.
  if(/\bwhatsapp\b|wa\.me|api\.whatsapp/.test(hay))return "WHATSAPP";
  if(/\bgmail\b|mail\.google|outlook|mailto:/.test(hay))return "EMAIL";
  if(/\bsms\b|sms:|\bmessages?\b/.test(hay))return "SMS";
  if(/\bchrome\b|\bfirefox\b|\bedge\b|\bsafari\b/.test(hay))return "BROWSER";
  if(/^https?:/i.test(String(url||"")))return "BROWSER";
  return "ANDROID_SHARE";
}

function captureSourceNeedsConfirmation_(sourceType){
  return normalizeCaptureSourceType(sourceType)==="ANDROID_SHARE";
}
function readShareTargetFromUrl(){
  try{
    const q=new URLSearchParams(location.search);
    if(q.get("share_target")!=="1" && !q.has("text") && !q.has("url") && !q.has("title"))return null;
    const title=String(q.get("title")||"").trim();
    const text=String(q.get("text")||"").trim();
    const url=String(q.get("url")||"").trim();
    const raw=[title,text].filter(Boolean).join(title&&text?"\n":"") || url;
    if(!raw)return null;
    return {rawText:raw,sharedTitle:title,sourceUrl:url,sourceRef:url||title,sourceType:detectSharedSource({title,text,url}),capturedVia:"WEB_SHARE_TARGET"};
  }catch(_){return null;}
}
function applyPendingSharedCapture(){
  if(!pendingSharedCapture)return;
  captureEntryMode="inbox";
  captureSourceDraft={
    sourceType:normalizeCaptureSourceType(pendingSharedCapture.sourceType||"ANDROID_SHARE"),
    sourceRef:String(pendingSharedCapture.sourceRef||""),
    sourceUrl:String(pendingSharedCapture.sourceUrl||""),
    sharedTitle:String(pendingSharedCapture.sharedTitle||""),
    capturedVia:String(pendingSharedCapture.capturedVia||"WEB_SHARE_TARGET")
  };
}
function readCaptureSourceForm(){
  return {
    sourceType:normalizeCaptureSourceType(document.getElementById("captureSourceType")?.value||captureSourceDraft.sourceType||"MANUAL"),
    sourceRef:String(document.getElementById("captureSourceRef")?.value||captureSourceDraft.sourceRef||"").trim(),
    sourceUrl:String(document.getElementById("captureSourceUrl")?.value||captureSourceDraft.sourceUrl||"").trim(),
    sharedTitle:String(captureSourceDraft.sharedTitle||"").trim(),
    capturedVia:String(captureSourceDraft.capturedVia||"DIRECT")
  };
}
function clearSharedCaptureQuery(){
  try{
    const u=new URL(location.href);["share_target","title","text","url"].forEach(k=>u.searchParams.delete(k));
    history.replaceState(history.state,"",u.pathname+(u.search?u.search:"")+location.hash);
  }catch(_){}
}

async function interpretCaptureText(){
  if(captureInterpretInFlight) return false;

  const box=document.getElementById("captureText");
  const textValue=box?.value.trim() || "";

  if(!localInterpreterReady){
    await opsymNotice({title:"Interpretation unavailable",message:"The local interpretation engine did not pass its self-test. Reload the latest Op-Sym build."});
    return false;
  }

  if(!textValue){
    await opsymNotice({title:"Nothing to interpret",message:"Type or paste something for Op-Sym to interpret."});
    box?.focus();
    return false;
  }

  captureInterpretInFlight=true;
  try{
    interpretedCaptureDraft=interpretCaptureLocally(textValue);
    showCaptureReviewSheet(interpretedCaptureDraft);
    return true;
  }catch(err){
    await opsymNotice({title:"Interpretation failed",message:"Could not interpret capture:\n"+(err?.message||err)});
    return false;
  }finally{
    captureInterpretInFlight=false;
  }
}



function collapseRepeatedWords(value){
  return String(value||"")
    .replace(/\b([A-Za-z][A-Za-z'-]*)\s+\1\b/gi,"$1")
    .replace(/\s+/g," ")
    .trim();
}

function semanticDateIso(dateObj){
  if(!dateObj) return "";
  return `${dateObj.getFullYear()}-${String(dateObj.getMonth()+1).padStart(2,"0")}-${String(dateObj.getDate()).padStart(2,"0")}`;
}

function startOfWeekMonday(dateObj){
  const d=new Date(dateObj.getFullYear(),dateObj.getMonth(),dateObj.getDate());
  const day=d.getDay(); // Sun 0
  const offset=day===0?-6:1-day;
  d.setDate(d.getDate()+offset);
  d.setHours(0,0,0,0);
  return d;
}

function dateForWeekdayInWeek(baseMonday,weekdayIndex){
  // weekdayIndex uses JS convention Sun=0; Monday-based offset:
  const offset=weekdayIndex===0?6:weekdayIndex-1;
  return new Date(
    baseMonday.getFullYear(),
    baseMonday.getMonth(),
    baseMonday.getDate()+offset
  );
}

function defaultDurationForIntent(intent){
  switch(intent){
    case "CALL": return .5;
    case "MEET": return 1;
    case "ATTEND": return 1;
    case "REVIEW": return 1;
    case "PREPARE": return 1;
    case "SEND": return .25;
    case "FOLLOW_UP": return .5;
    default: return 1;
  }
}

function detectSemanticIntent(source){
  if(/\bfollow[\s-]?up\b/i.test(source)) return "FOLLOW_UP";
  if(/\b(meet|meeting|see)\b/i.test(source)) return "MEET";
  if(/\b(call|phone|ring)\b/i.test(source)) return "CALL";
  if(/\b(review|check|assess)\b/i.test(source)) return "REVIEW";
  if(/\b(prepare|draft|write|develop)\b/i.test(source)) return "PREPARE";
  if(/\b(send|email|forward)\b/i.test(source)) return "SEND";
  if(/\b(attend|visit|go to)\b/i.test(source)) return "ATTEND";
  return "TASK";
}

function extractSemanticPerson(source,intent){
  let m=null;
  if(intent==="MEET")m=source.match(/\b(?:meet|see|meeting with)\s+(.+?)(?=\s+(?:at|in|via|on|next|this|today|tomorrow|for)\b|[,.;]|$)/i);
  else if(intent==="CALL")m=source.match(/\b(?:call|phone|ring)\s+(.+?)(?=\s+(?:at|in|via|on|next|this|today|tomorrow|for)\b|[,.;]|$)/i);

  if(!m)m=source.match(/\b(?:waiting for|awaiting|pending from)\s+(.+?)(?=\s+(?:to|until|on|next|this|today|tomorrow)\b|[,.;]|$)/i);
  if(!m)m=source.match(/\b(?:ask|tell)\s+(.+?)\s+to\b/i);

  // Common DO/communication pattern:
  // "Send Hassan the agreement", "Email Peter the report",
  // "Forward Mary the document", "Message Ali tomorrow".
  if(!m)m=source.match(/\b(?:send|email|e-mail|forward|share|message|text|give)\s+(?:to\s+)?([A-Z][A-Za-z.'’\-]+(?:\s+[A-Z][A-Za-z.'’\-]+){0,2})(?=\s+(?:the|a|an|my|our|his|her|their|this|that|revised|final|signed|updated|report|agreement|document|file|link|message|today|tomorrow|on|at|in|by|before|after|next|this|morning|afternoon|evening|tonight)\b|[,.;]|$)/);

  return m?collapseRepeatedWords(String(m[1]||"").trim()):"";
}

function extractSemanticLocation(source){
  // Explicit labels take precedence.
  let m=source.match(/\b(?:location|venue)\s*[:\-]\s*(.+?)(?=\s+(?:next week|this week|next\s+(?:mon|tue|wed|thu|fri|sat|sun)|on\s+(?:mon|tue|wed|thu|fri|sat|sun)|today|tomorrow|at\s+\d|for\s+\d|for\s+(?:an?|one|half)\s+hour)\b|[,.;]|$)/i);
  if(m) return collapseRepeatedWords(m[1]);

  // Virtual venues.
  m=source.match(/\bvia\s+(Zoom|Microsoft Teams|Teams|Google Meet|Meet)\b/i);
  if(m) return collapseRepeatedWords(m[1]);

  // Natural "at/in <venue>" but exclude temporal "at 9am".
  m=source.match(/\b(?:at|in)\s+([A-Za-z][A-Za-z0-9&.'’()\/ -]{1,100}?)(?=\s+(?:next week|this week|next\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|on\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|today|tomorrow|at\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)?|for\s+\d|for\s+(?:an?|one|half)\s+hour)\b|[,.;]|$)/i);
  if(m) return collapseRepeatedWords(m[1]);

  return "";
}

function resolveSemanticDate(source,now,warnings,detected){
  const weekdays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  const weekdayPattern="(sunday|monday|tuesday|wednesday|thursday|friday|saturday)";

  if(/\btoday\b/i.test(source)){
    detected.push("today");
    return new Date(now.getFullYear(),now.getMonth(),now.getDate());
  }

  if(/\btomorrow\b/i.test(source)){
    detected.push("tomorrow");
    return new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
  }

  let m=source.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/);
  if(m){
    const y=Number(m[1]),mo=Number(m[2]),d=Number(m[3]);
    const candidate=new Date(y,mo-1,d);
    if(candidate.getFullYear()===y && candidate.getMonth()===mo-1 && candidate.getDate()===d){
      detected.push("explicit date");
      return candidate;
    }
  }

  m=source.match(/\b(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](20\d{2}))?\b/);
  if(m){
    const d=Number(m[1]),mo=Number(m[2]);
    const y=m[3]?Number(m[3]):now.getFullYear();
    const candidate=new Date(y,mo-1,d);
    if(candidate.getFullYear()===y && candidate.getMonth()===mo-1 && candidate.getDate()===d){
      const todayStart=new Date(now.getFullYear(),now.getMonth(),now.getDate());
      if(!m[3] && candidate<todayStart) candidate.setFullYear(y+1);
      detected.push("calendar date");
      return candidate;
    }
  }

  // "next week on Tuesday", "Tuesday next week", "next week Tuesday"
  const nextWeekRe1=new RegExp("\\bnext\\s+week(?:\\s+on)?\\s+"+weekdayPattern+"\\b","i");
  const nextWeekRe2=new RegExp("\\b"+weekdayPattern+"\\s+next\\s+week\\b","i");
  m=source.match(nextWeekRe1) || source.match(nextWeekRe2);
  if(m){
    const wd=weekdays.indexOf(String(m[1]||"").toLowerCase());
    const monday=startOfWeekMonday(now);
    const nextMonday=new Date(monday.getFullYear(),monday.getMonth(),monday.getDate()+7);
    detected.push("next week "+weekdays[wd]);
    return dateForWeekdayInWeek(nextMonday,wd);
  }

  // "this week on Tuesday"
  const thisWeekRe=new RegExp("\\bthis\\s+week(?:\\s+on)?\\s+"+weekdayPattern+"\\b","i");
  m=source.match(thisWeekRe);
  if(m){
    const wd=weekdays.indexOf(String(m[1]||"").toLowerCase());
    const monday=startOfWeekMonday(now);
    let candidate=dateForWeekdayInWeek(monday,wd);
    const todayStart=new Date(now.getFullYear(),now.getMonth(),now.getDate());
    if(candidate<todayStart){
      candidate=new Date(candidate.getFullYear(),candidate.getMonth(),candidate.getDate()+7);
      warnings.push("The named day had already passed this week, so Op-Sym selected the next occurrence.");
    }
    detected.push("this week "+weekdays[wd]);
    return candidate;
  }

  // "next Tuesday" means the next occurrence of Tuesday.
  const nextDayRe=new RegExp("\\bnext\\s+"+weekdayPattern+"\\b","i");
  m=source.match(nextDayRe);
  if(m){
    const wd=weekdays.indexOf(String(m[1]||"").toLowerCase());
    let delta=(wd-now.getDay()+7)%7;
    if(delta===0) delta=7;
    detected.push("next "+weekdays[wd]);
    return new Date(now.getFullYear(),now.getMonth(),now.getDate()+delta);
  }

  // "on Tuesday" / bare Tuesday -> next occurrence, today allowed only if still future.
  const weekdayRe=new RegExp("\\b(?:on\\s+)?"+weekdayPattern+"\\b","i");
  m=source.match(weekdayRe);
  if(m){
    const wd=weekdays.indexOf(String(m[1]||"").toLowerCase());
    let delta=(wd-now.getDay()+7)%7;
    if(delta===0) delta=0;
    detected.push(weekdays[wd]);
    return new Date(now.getFullYear(),now.getMonth(),now.getDate()+delta);
  }

  // "in 3 days/weeks"
  m=source.match(/\bin\s+(\d+)\s+(day|days|week|weeks)\b/i);
  if(m){
    const n=Number(m[1]);
    const multiplier=/week/i.test(m[2])?7:1;
    detected.push("relative interval");
    return new Date(now.getFullYear(),now.getMonth(),now.getDate()+n*multiplier);
  }

  return null;
}

function resolveSemanticTime(source,warnings,detected){
  let m=source.match(/\b(?:at|@)?\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/i);
  if(m){
    let hh=Number(m[1]);
    const mm=Number(m[2]||0);
    const ap=m[3].toLowerCase();
    if(hh>=1 && hh<=12 && mm<=59){
      if(ap==="pm" && hh!==12) hh+=12;
      if(ap==="am" && hh===12) hh=0;
      detected.push("time");
      return String(hh).padStart(2,"0")+":"+String(mm).padStart(2,"0");
    }
  }

  m=source.match(/\b(?:at|@)\s*([01]?\d|2[0-3]):([0-5]\d)\b/i);
  if(m){
    detected.push("time");
    return String(Number(m[1])).padStart(2,"0")+":"+m[2];
  }

  m=source.match(/\b(?:at|@)\s*(\d{1,2})(?![:\d])\b/i);
  if(m){
    const hh=Number(m[1]);
    if(hh>=0 && hh<=23){
      warnings.push("Time was interpreted in 24-hour format because AM/PM was not stated.");
      detected.push("time");
      return String(hh).padStart(2,"0")+":00";
    }
  }

  // Deterministic daypart defaults. These are proposals and remain editable
  // in Review & Classify before creation.
  if(/\bmorning\b/i.test(source)){
    detected.push("morning");
    warnings.push("Morning was interpreted as 09:00. Review the time before creating.");
    return "09:00";
  }
  if(/\bafternoon\b/i.test(source)){
    detected.push("afternoon");
    warnings.push("Afternoon was interpreted as 14:00. Review the time before creating.");
    return "14:00";
  }
  if(/\bevening\b/i.test(source)){
    detected.push("evening");
    warnings.push("Evening was interpreted as 18:00. Review the time before creating.");
    return "18:00";
  }
  if(/\btonight\b/i.test(source)){
    detected.push("tonight");
    warnings.push("Tonight was interpreted as 19:00. Review the time before creating.");
    return "19:00";
  }

  return "";
}

function resolveSemanticDuration(source,intent,inferences,detected){
  let m=source.match(/\bfor\s+(\d+(?:\.\d+)?)\s*(?:hours?|hrs?|hr)\b/i);
  if(m){
    detected.push("duration");
    return Number(m[1]);
  }

  m=source.match(/\bfor\s+(\d+)\s*(?:minutes?|mins?|min)\b/i);
  if(m){
    detected.push("duration");
    return Math.round((Number(m[1])/60)*100)/100;
  }

  if(/\bfor\s+(?:an?|one)\s+hour\b/i.test(source)){
    detected.push("duration");
    return 1;
  }

  if(/\bfor\s+half\s+(?:an?\s+)?hour\b/i.test(source)){
    detected.push("duration");
    return .5;
  }

  const inferred=defaultDurationForIntent(intent);
  inferences.push(`Duration was not stated; Op-Sym proposed ${inferred} hour${inferred===1?"":"s"} based on the ${intent} intent.`);
  return inferred;
}

function buildSemanticTitle(source,intent,personName,location){
  if(personName){
    if(intent==="MEET") return `Meet ${personName}`;
    if(intent==="CALL") return `Call ${personName}`;
    if(intent==="ATTEND") return `Visit ${personName}`;
  }

  let title=source
    .replace(/\b(today|tomorrow)\b/ig," ")
    .replace(/\b(?:in\s+the\s+)?(morning|afternoon|evening|tonight)\b/ig," ")
    .replace(/\bnext\s+week(?:\s+on)?\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/ig," ")
    .replace(/\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\s+next\s+week\b/ig," ")
    .replace(/\bthis\s+week(?:\s+on)?\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/ig," ")
    .replace(/\bnext\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/ig," ")
    .replace(/\b(?:on\s+)?(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/ig," ")
    .replace(/\b20\d{2}-\d{2}-\d{2}\b/g," ")
    .replace(/\b\d{1,2}[\/\-]\d{1,2}(?:[\/\-]20\d{2})?\b/g," ")
    .replace(/\b(?:at|@)\s*\d{1,2}(?::\d{2})?\s*(?:am|pm)?\b/ig," ")
    .replace(/\b\d{1,2}(?::\d{2})?\s*(?:am|pm)\b/ig," ")
    .replace(/\bfor\s+(?:\d+(?:\.\d+)?|an?|one|half)\s*(?:hours?|hrs?|hr|minutes?|mins?|min|(?:an?\s+)?hour)\b/ig," ")
    .replace(/\b(?:urgent|asap|immediately|high priority|low priority)\b/ig," ")
    .replace(/\brole\s*[:\-]\s*[a-z][a-z \-&]{2,40}/ig," ")
    .replace(/\b(?:location|venue)\s*[:\-]\s*[^,.;]{2,80}/ig," ")
    .replace(/\s+/g," ")
    .replace(/^[,.;:\-\s]+|[,.;:\-\s]+$/g,"")
    .trim();

  if(location){
    const escaped=location.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    title=title.replace(new RegExp("\\b(?:at|in)\\s+"+escaped+"\\b","i"),"").replace(/\s+/g," ").trim();
  }

  return collapseRepeatedWords(title || source);
}

function classifyCommitmentLocally(sourceText,semanticDraft=null){const source=String(sourceText||"").trim();let type="DO",direction="ME",counterparty=semanticDraft?.personName||"";if(/\b(waiting for|awaiting|pending from|expecting .* from|when .* replies?|once .* sends?|after .* responds?)\b/i.test(source)){type="WAIT";direction="OTHER";const m=source.match(/\b(?:waiting for|awaiting|pending from)\s+(.+?)(?=\s+(?:to|until|on|next|this|today|tomorrow)\b|[,.;]|$)/i);if(m)counterparty=collapseRepeatedWords(m[1]);}else if(/\b(delegate|assign|ask\s+.+?\s+to|tell\s+.+?\s+to)\b/i.test(source)){type="DELEGATE";direction="OTHER";const m=source.match(/\b(?:ask|tell)\s+(.+?)\s+to\b/i);if(m)counterparty=collapseRepeatedWords(m[1]);}else if(/\b(decide|choose|select|approve|determine|consider whether)\b/i.test(source)){type="DECIDE";direction="ME";}else if(/\b(meet|meeting|appointment|attend|visit)\b/i.test(source)||semanticDraft?.intent==="MEET"){type="MEET";direction="SHARED";}const confidence=type==="WAIT"||type==="MEET"?.94:type==="DELEGATE"?.92:type==="DECIDE"?.90:.84;return{commitmentType:type,direction,counterparty,commitmentConfidence:confidence,commitmentParserVersion:"commitment-local-v1.1"};}

function interpretCaptureLocally(sourceText){
  const source=collapseRepeatedWords(String(sourceText||"").trim());
  if(!source) throw new Error("Enter something to interpret.");

  const now=new Date();
  const warnings=[];
  const inferences=[];
  const detected=[];

  const intent=detectSemanticIntent(source);
  const personName=extractSemanticPerson(source,intent);
  const location=extractSemanticLocation(source);
  const dateObj=resolveSemanticDate(source,now,warnings,detected);
  const time=resolveSemanticTime(source,warnings,detected);
  const plannedHours=resolveSemanticDuration(source,intent,inferences,detected);

  let priority="Medium";
  if(/\b(urgent|asap|immediately)\b/i.test(source)) priority="Urgent";
  else if(/\bhigh priority\b/i.test(source)) priority="High";
  else if(/\blow priority\b/i.test(source)) priority="Low";

  const roleMatch=source.match(/\brole\s*[:\-]\s*([a-z][a-z \-&]{2,40})/i);
  const role=roleMatch?collapseRepeatedWords(roleMatch[1]):"";

  if(time && !dateObj){
    warnings.push("A time was found but no date was resolved.");
  }
  if(dateObj && !time){
    inferences.push("No start time was stated; the item can remain an ANY-time task.");
  }

  const title=buildSemanticTitle(source,intent,personName,location);

  let confidence=.55;
  if(title) confidence+=.08;
  if(intent!=="TASK") confidence+=.07;
  if(personName) confidence+=.05;
  if(location) confidence+=.05;
  if(dateObj) confidence+=.08;
  if(time) confidence+=.07;
  if(plannedHours) confidence+=.03;
  if(warnings.length===0) confidence+=.02;
  confidence=Math.min(.98,Math.round(confidence*100)/100);

  return {
    sourceText:source,
    title,
    role,
    project:"",
    priority,
    plannedHours,
    date:semanticDateIso(dateObj),
    time,
    location,
    personName,
    intent,
    description:source,
    confidence,
    confidenceLabel:confidence>=.88?"High":(confidence>=.72?"Medium":"Needs review"),
    warnings,
    inferences,
    detected,
    requiresReview:true,
    parserVersion:"semantic-local-v2.0"
  };
}

function runLocalInterpreterSelfTest(){
  const sample=interpretCaptureLocally(
    "Meet Prof Parker at Aster Hospital Hospital next week on Tuesday at 9am"
  );

  return !!sample &&
    sample.title==="Meet Prof Parker" &&
    sample.personName==="Prof Parker" &&
    sample.location==="Aster Hospital" &&
    !!sample.date &&
    sample.time==="09:00" &&
    sample.intent==="MEET" &&
    Number(sample.plannedHours)===1;
}

function captureReviewRow(label,value){
  const v=String(value==null?"":value).trim();
  return `<div class="capture-review-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(v || "—")}</strong></div>`;
}

function showCaptureReviewSheet(draft){
  closeCaptureReviewSheet();
  if(!draft) return;

  const warnings=(draft.warnings || []);
  const overlay=document.createElement("div");
  overlay.id="captureReviewOverlay";
  overlay.className="capture-review-overlay";
  overlay.innerHTML=`
    <section class="capture-review-sheet" role="dialog" aria-modal="true" aria-label="Review interpreted capture">
      <div class="capture-sheet-handle"></div>
      <div class="capture-sheet-head">
        <div>
          <span class="kicker">INTERPRETED CAPTURE</span>
          <h2>Review before creating</h2>
          <p>Op-Sym has proposed a task. Nothing has been written yet.</p>
        </div>
        <button class="capture-review-close" data-capture-review-close aria-label="Close">×</button>
      </div>

      <div class="capture-confidence">
        <span>Interpretation confidence</span>
        <strong>${escapeHtml(draft.confidenceLabel || "Needs review")} · ${Math.round((Number(draft.confidence)||0)*100)}%</strong>
      </div>

      ${warnings.length ? `<div class="capture-warnings">
        ${warnings.map(w=>`<div>• ${escapeHtml(w)}</div>`).join("")}
      </div>` : ""}

      ${(draft.inferences||[]).length ? `<div class="capture-inferences">
        ${(draft.inferences||[]).map(w=>`<div>• ${escapeHtml(w)}</div>`).join("")}
      </div>` : ""}

      <div class="capture-review-list">
        ${captureReviewRow("Task",draft.title)}
        ${captureReviewRow("Intent",draft.intent)}
        ${captureReviewRow("Person",draft.personName)}
        ${captureReviewRow("Location",draft.location)}
        ${captureReviewRow("Date",draft.date)}
        ${captureReviewRow("Start time",draft.time)}
        ${captureReviewRow("Planned hours",draft.plannedHours)}
        ${captureReviewRow("Priority",draft.priority)}
        ${captureReviewRow("Role",draft.role)}
      </div>

      <div class="capture-review-actions">
        <button class="primary-btn" data-capture-use-draft>Review & create</button>
        <button data-capture-edit-text>Edit original text</button>
      </div>
    </section>`;

  document.body.appendChild(overlay);

  overlay.querySelector("[data-capture-review-close]")?.addEventListener("click",closeCaptureReviewSheet);
  overlay.querySelector("[data-capture-edit-text]")?.addEventListener("click",closeCaptureReviewSheet);
  overlay.addEventListener("click",e=>{
    if(e.target===overlay) closeCaptureReviewSheet();
  });

  overlay.querySelector("[data-capture-use-draft]")?.addEventListener("click",()=>{
    closeCaptureReviewSheet();
    captureEntryMode="interpreted";
    render("capture",true);
  });
}

function closeCaptureReviewSheet(){
  document.getElementById("captureReviewOverlay")?.remove();
}


function createClientRequestId(){
  try{
    if(globalThis.crypto?.randomUUID){
      return "create-"+crypto.randomUUID();
    }
  }catch(_){}

  return "create-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,14);
}

function isRequestTimeoutError(err){
  const msg=String(err?.message || err || "").toLowerCase();
  return msg.includes("timed out");
}



const opsymPostAckWaiters=new Map();

window.addEventListener("message",event=>{
  const msg=event?.data;
  if(!msg||msg.source!=="opsym-mobile-bridge") return;
  const requestId=String(msg.requestId||"");
  const waiter=opsymPostAckWaiters.get(requestId);
  if(!waiter) return;
  opsymPostAckWaiters.delete(requestId);
  clearTimeout(waiter.timer);
  waiter.resolve(msg.payload||{});
});

function waitForPostAck(requestId,timeoutMs=12000){
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{
      opsymPostAckWaiters.delete(requestId);
      reject(new Error("Direct acknowledgement not received."));
    },timeoutMs);
    opsymPostAckWaiters.set(requestId,{resolve,reject,timer});
  });
}

function submitBridgePostWithAck(params,timeoutMs=12000){
  const requestId=String(params?.requestId||"").trim();
  if(!requestId) throw new Error("A request ID is required.");
  const ack=waitForPostAck(requestId,timeoutMs);
  submitBridgePost(params);
  return ack;
}

function submitBridgePost(params){
  if(!mobileBridge.endpoint){
    throw new Error("Mobile Bridge is not configured.");
  }

  const iframeName="opsymWriteFrame_"+Date.now()+"_"+Math.random().toString(36).slice(2);
  const iframe=document.createElement("iframe");
  iframe.name=iframeName;
  iframe.title="Op-Sym write gateway";
  iframe.setAttribute("aria-hidden","true");
  iframe.tabIndex=-1;
  iframe.style.display="none";

  const form=document.createElement("form");
  form.method="POST";
  form.action=mobileBridge.endpoint;
  form.target=iframeName;
  form.acceptCharset="UTF-8";
  form.style.display="none";

  Object.entries(params || {}).forEach(([key,value])=>{
    if(value===undefined || value===null) return;
    const input=document.createElement("input");
    input.type="hidden";
    input.name=key;
    input.value=String(value);
    form.appendChild(input);
  });

  document.body.appendChild(iframe);
  document.body.appendChild(form);

  try{
    form.submit();
  }catch(err){
    form.remove();
    iframe.remove();
    throw err;
  }

  // The response is cross-origin and intentionally not read.
  // Cleanup after enough time for Apps Script to receive the form.
  setTimeout(()=>{
    form.remove();
    iframe.remove();
  },60000);
}

async function waitForCreateRequestStatus(requestId,{timeoutMs=30000}={}){
  const deadline=Date.now()+timeoutMs;
  const delays=[250,350,500,750,1000,1200];
  let attempt=0,lastError=null;
  while(Date.now()<deadline){
    await new Promise(r=>setTimeout(r,delays[Math.min(attempt++,delays.length-1)]));
    try{
      const s=await checkCreateRequestStatus(requestId,6000);
      if(s.created||s.blocked||s.status==="error") return s;
    }catch(e){lastError=e;}
  }
  throw new Error(`Task creation acknowledgement timed out.${lastError?` ${lastError.message||lastError}`:""}`);
}

async function checkMutationStatus(requestId,timeoutMs=8000){
  const params={action:"mutation-status",requestId,_ts:String(Date.now())};
  if(mobileBridge.key) params.key=mobileBridge.key;

  const payload=await jsonpRequest(
    mobileBridge.endpoint,
    params,
    timeoutMs,
    "Mutation status"
  );

  if(!payload || payload.ok!==true){
    throw new Error(payload?.error || "Could not confirm write status.");
  }

  return payload.data || {};
}

async function waitForMutationStatus(requestId,{timeoutMs=30000}={}){
  const deadline=Date.now()+timeoutMs;
  const delays=[250,350,500,750,1000,1200];
  let attempt=0,lastError=null;
  while(Date.now()<deadline){
    await new Promise(r=>setTimeout(r,delays[Math.min(attempt++,delays.length-1)]));
    try{
      const s=await checkMutationStatus(requestId,6000);
      if([
        "completed","rescheduled","blocked","captured","duplicate",
        "commitment_created","resolved","clarified",
        "promoted_task","promoted_commitment","error"
      ].includes(s.status)) return s;
    }catch(e){lastError=e;}
  }
  throw new Error(`Write acknowledgement timed out.${lastError?` ${lastError.message||lastError}`:""}`);
}

async function submitMutationAndWait(action,fields,options={}){
  if(!mobileBridge.endpoint) throw new Error("Mobile Bridge is not configured.");
  const requestId=String(options.requestId||createClientRequestId().replace(/^create-/,"mutation-")).trim();
  const params={action,requestId,...fields};
  if(mobileBridge.key) params.key=mobileBridge.key;

  try{
    const ack=await submitBridgePostWithAck(params,8000);
    if(ack?.ok===false) throw new Error(ack.error||"Write failed.");
    if(ack?.ok===true&&ack.data) return {...ack.data,requestId,directAck:true};
  }catch(e){
    if(!/acknowledgement not received/i.test(String(e?.message||e))) throw e;
  }

  try{
    const result=await waitForMutationStatus(requestId,{timeoutMs:Number(options.timeoutMs||70000)});
    return {...result,requestId,directAck:false};
  }catch(waitErr){
    // One final reconciliation check prevents a successful write from being reported as a failure
    // merely because the acknowledgement/polling path was slow.
    try{
      const finalStatus=await checkMutationStatus(requestId,10000);
      if(finalStatus&&finalStatus.status&&finalStatus.status!=="not_found") return {...finalStatus,requestId,directAck:false,reconciled:true};
    }catch(_){}
    throw waitErr;
  }
}

async function testWriteGateway(){
  const requestId="writeping-"+createClientRequestId().replace(/^create-/,"");

  const params={
    action:"write-ping",
    requestId
  };
  if(mobileBridge.key) params.key=mobileBridge.key;

  submitBridgePost(params);

  const deadline=Date.now()+20000;
  while(Date.now()<deadline){
    await new Promise(resolve=>setTimeout(resolve,1000));
    const q={action:"write-ping-status",requestId};
    if(mobileBridge.key) q.key=mobileBridge.key;

    try{
      const payload=await jsonpRequest(
        mobileBridge.endpoint,
        q,
        6000,
        "Write gateway diagnostic"
      );
      if(payload?.ok===true && payload?.data?.found===true){
        return true;
      }
    }catch(_){}
  }

  return false;
}

async function checkCreateRequestStatus(requestId,timeoutMs=8000){
  const params={action:"create-status",requestId,_ts:String(Date.now())};
  if(mobileBridge.key) params.key=mobileBridge.key;

  const payload=await jsonpRequest(
    mobileBridge.endpoint,
    params,
    timeoutMs,
    "Task creation status"
  );

  if(!payload || payload.ok!==true){
    throw new Error(payload?.error || "Could not confirm task creation status.");
  }

  return payload.data || {};
}

async function finishSuccessfulTaskCreation(result){
  toast(`Task saved · ${result.taskId||"confirmed"}`);
  const destination=captureEntryMode==="today"?"today":"tasks";
  const sourceInboxId=interpretedCaptureDraft?.sourceInboxId||"";

  if(sourceInboxId&&liveInboxData?.items){
    liveInboxData.items=liveInboxData.items.filter(x=>x.inboxId!==sourceInboxId);
    if(liveInboxData.summary) liveInboxData.summary.open=Math.max(0,Number(liveInboxData.summary.open||0)-1);
  }

  captureEntryMode="general";
  interpretedCaptureDraft=null;
  render(destination,true);

  loadLiveTasksData(true).then(()=>{if(currentRoute()==="tasks")render("tasks",true);}).catch(()=>null);

  liveTodayLoaded=false;
  if(destination==="today"){
    loadLiveTodayData(true).then(()=>{if(currentRoute()==="today")render("today",true);}).catch(()=>null);
  }

  liveHomeLoaded=false;
  loadLiveHomeData(true).catch(()=>null);

  if(sourceInboxId){
    liveInboxLoaded=false;
    loadLiveInboxData(true).catch(()=>null);
  }
}

function getInboxItem(id){return (liveInboxData?.items||[]).find(x=>x.inboxId===id)||null;}
function buildInboxDraft(text){const s=interpretCaptureLocally(text),c=classifyCommitmentLocally(text,s),personName=c.counterparty||s.personName||"",intent=["WAIT","DELEGATE","DECIDE"].includes(c.commitmentType)?c.commitmentType:(c.commitmentType==="MEET"?"MEET":s.intent);let plannedHours=s.plannedHours;if(c.commitmentType==="WAIT"||c.commitmentType==="DELEGATE")plannedHours="";return{...s,...c,personName,intent,plannedHours,combinedConfidence:Math.round(((Number(s.confidence||0)+Number(c.commitmentConfidence||0))/2)*100)/100};}

function opsymConfirm({title="Confirm",message="",confirmLabel="Continue",cancelLabel="Cancel"}={}){
  return new Promise(resolve=>{
    document.getElementById("opsymConfirmBackdrop")?.remove();

    const wrap=document.createElement("div");
    wrap.id="opsymConfirmBackdrop";
    wrap.className="opsym-confirm-backdrop";
    wrap.innerHTML=`
      <section class="opsym-confirm-card" role="dialog" aria-modal="true" aria-labelledby="opsymConfirmTitle">
        <div class="opsym-confirm-mark">✓</div>
        <h3 id="opsymConfirmTitle">${escapeHtml(title)}</h3>
        <div class="opsym-confirm-message">${escapeHtml(message).replace(/\n/g,"<br>")}</div>
        <div class="opsym-confirm-actions">
          <button type="button" class="ghost-btn" data-confirm-cancel>${escapeHtml(cancelLabel)}</button>
          <button type="button" class="primary-btn" data-confirm-ok>${escapeHtml(confirmLabel)}</button>
        </div>
      </section>`;

    const finish=value=>{
      wrap.remove();
      resolve(value);
    };

    wrap.querySelector("[data-confirm-cancel]")?.addEventListener("click",()=>finish(false));
    wrap.querySelector("[data-confirm-ok]")?.addEventListener("click",()=>finish(true));
    wrap.addEventListener("click",e=>{if(e.target===wrap)finish(false);});
    document.body.appendChild(wrap);
    requestAnimationFrame(()=>wrap.querySelector("[data-confirm-ok]")?.focus({preventScroll:true}));
  });
}

function opsymNotice({title="Op-Sym",message="",buttonLabel="OK"}={}){
  return new Promise(resolve=>{
    document.getElementById("opsymNoticeBackdrop")?.remove();
    const wrap=document.createElement("div");
    wrap.id="opsymNoticeBackdrop";
    wrap.className="opsym-confirm-backdrop";
    wrap.innerHTML=`<section class="opsym-confirm-card" role="dialog" aria-modal="true" aria-labelledby="opsymNoticeTitle"><div class="opsym-confirm-mark">✓</div><h3 id="opsymNoticeTitle">${escapeHtml(title)}</h3><div class="opsym-confirm-message">${escapeHtml(message).replace(/\n/g,"<br>")}</div><div class="opsym-confirm-actions single"><button type="button" class="primary-btn" data-notice-ok>${escapeHtml(buttonLabel)}</button></div></section>`;
    const finish=()=>{wrap.remove();resolve(true);};
    wrap.querySelector("[data-notice-ok]")?.addEventListener("click",finish);
    wrap.addEventListener("click",e=>{if(e.target===wrap)finish();});
    document.body.appendChild(wrap);
    requestAnimationFrame(()=>wrap.querySelector("[data-notice-ok]")?.focus({preventScroll:true}));
  });
}

function opsymPrompt({title="Enter value",message="",value="",placeholder="",confirmLabel="Continue",cancelLabel="Cancel"}={}){
  return new Promise(resolve=>{
    document.getElementById("opsymPromptBackdrop")?.remove();
    const wrap=document.createElement("div");
    wrap.id="opsymPromptBackdrop";
    wrap.className="opsym-confirm-backdrop";
    wrap.innerHTML=`<section class="opsym-confirm-card" role="dialog" aria-modal="true" aria-labelledby="opsymPromptTitle"><h3 id="opsymPromptTitle">${escapeHtml(title)}</h3><div class="opsym-confirm-message">${escapeHtml(message).replace(/\n/g,"<br>")}</div><input class="opsym-prompt-input" data-prompt-input value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}"><div class="opsym-confirm-actions"><button type="button" class="ghost-btn" data-prompt-cancel>${escapeHtml(cancelLabel)}</button><button type="button" class="primary-btn" data-prompt-ok>${escapeHtml(confirmLabel)}</button></div></section>`;
    const input=wrap.querySelector("[data-prompt-input]");
    const finish=v=>{wrap.remove();resolve(v);};
    wrap.querySelector("[data-prompt-cancel]")?.addEventListener("click",()=>finish(null));
    wrap.querySelector("[data-prompt-ok]")?.addEventListener("click",()=>finish(input?.value??""));
    input?.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();finish(input?.value??"");}if(e.key==="Escape"){e.preventDefault();finish(null);}});
    wrap.addEventListener("click",e=>{if(e.target===wrap)finish(null);});
    document.body.appendChild(wrap);
    requestAnimationFrame(()=>{input?.focus({preventScroll:true});input?.select();});
  });
}

function ensureOperationStatus(){
  let el=document.getElementById("opsymOperationStatus");
  if(el)return el;
  el=document.createElement("div");el.id="opsymOperationStatus";el.className="opsym-operation-status";el.setAttribute("role","status");el.setAttribute("aria-live","polite");
  el.innerHTML='<span class="opsym-operation-spinner" aria-hidden="true"></span><span data-operation-text></span>';
  document.body.appendChild(el);return el;
}
function beginOperation(label,{stillAfter=3500,longAfter=9000}={}){
  activeOperationTimers.forEach(clearTimeout);activeOperationTimers=[];
  const token="op-"+Date.now()+"-"+Math.random().toString(36).slice(2);activeOperationToken=token;const el=ensureOperationStatus();
  const set=msg=>{if(activeOperationToken!==token)return;const t=el.querySelector("[data-operation-text]");if(t)t.textContent=msg;el.classList.add("show");};
  set(label);activeOperationTimers.push(setTimeout(()=>set("Still working… your request is safe."),stillAfter));activeOperationTimers.push(setTimeout(()=>set("Taking longer than usual… Op-Sym is still confirming the result."),longAfter));return token;
}
function updateOperation(token,message){if(!token||activeOperationToken!==token)return;const el=ensureOperationStatus();const t=el.querySelector("[data-operation-text]");if(t)t.textContent=message;el.classList.add("show");}
function endOperation(token,message=""){if(token&&activeOperationToken!==token)return;activeOperationTimers.forEach(clearTimeout);activeOperationTimers=[];const el=ensureOperationStatus();if(message){const t=el.querySelector("[data-operation-text]");if(t)t.textContent=message;setTimeout(()=>el.classList.remove("show"),1000);}else el.classList.remove("show");activeOperationToken="";}
function recordOpsymPerf(eventName,data={}){
  try{
    const record={event:eventName,at:new Date().toISOString(),...data};
    console.info("[Op-Sym v1.8.5 perf]",record);
    const key="opsym_perf_v184";
    const current=JSON.parse(localStorage.getItem(key)||"[]");
    current.push(record);
    localStorage.setItem(key,JSON.stringify(current.slice(-30)));
  }catch(_){}
}
function removePendingInbox(requestId){if(!liveInboxData?.items)return;liveInboxData.items=liveInboxData.items.filter(x=>x.pendingRequestId!==requestId);}
function removePendingTask(requestId){if(!liveTasksData?.tasks)return;const before=liveTasksData.tasks.length;liveTasksData.tasks=liveTasksData.tasks.filter(x=>x.pendingRequestId!==requestId);if(liveTasksData.summary&&liveTasksData.tasks.length<before)liveTasksData.summary.open=Math.max(0,Number(liveTasksData.summary.open||0)-1);}

async function captureToInbox(text,sourceMeta=null){
  const clientT0=performance.now();
  if(inboxCaptureInFlight) return false;

  text=String(text||"").trim();
  if(!text){
    await opsymNotice({title:"Nothing to capture",message:"Type or paste something first."});
    document.getElementById("inboxCaptureText")?.focus();
    return false;
  }

  const d=buildInboxDraft(text);
  const provenance=sourceMeta||readCaptureSourceForm();
  const norm=v=>String(v||"").toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").replace(/\s+/g," ").trim();
  const sim=(x,y)=>{const A=new Set(norm(x).split(" ").filter(Boolean));const B=new Set(norm(y).split(" ").filter(Boolean));if(!A.size||!B.size)return 0;let n=0;A.forEach(t=>{if(B.has(t))n++;});return n/new Set([...A,...B]).size;};

  let dup=null,score=0;
  for(const x of(liveInboxData?.items||[])){const q=sim(text,x.rawText||"");if(q>score){score=q;dup=x;}}
  if(score>=.72){
    const keep=await opsymConfirm({title:"Possible duplicate",message:`This looks ${norm(dup.rawText)===norm(text)?"the same as":"very similar to"} ${dup.inboxId}.\n\nCreate another separate Inbox item?`,confirmLabel:"Capture anyway",cancelLabel:"Keep existing"});
    if(!keep){render("inbox",true);return false;}
  }

  // v1.8.5: Capture remains deliberately frictionless. The Capture button itself is the user's intent.
  // Show the object immediately while the server write is being confirmed.
  const requestId=createClientRequestId().replace(/^create-/,"mutation-");
  liveInboxData=liveInboxData||{summary:{open:0,total:0},items:[]};
  liveInboxData.items=liveInboxData.items||[];
  liveInboxData.items.unshift({
    inboxId:"Saving…",pending:true,pendingRequestId:requestId,captured:new Date().toISOString(),source:captureSourceLabel(provenance.sourceType),sourceType:provenance.sourceType,sourceRef:provenance.sourceRef,sourceUrl:provenance.sourceUrl,signalId:"Saving…",
    rawText:text,title:d.title,intent:d.intent,commitmentType:d.commitmentType,direction:d.direction,
    confidence:String(d.combinedConfidence),personName:d.personName||"",locationName:d.location||"",date:d.date||"",time:d.time||"",plannedHours:d.plannedHours||"",status:"Pending"
  });
  liveInboxData.summary=liveInboxData.summary||{};
  liveInboxData.summary.open=Number(liveInboxData.summary.open||0)+1;
  liveInboxData.summary.total=Number(liveInboxData.summary.total||0)+1;
  inboxCaptureInFlight=true;
  render("inbox",true);
  const op=beginOperation("Capturing to Inbox…");

  try{
    let r=await submitMutationAndWait("capture-inbox",{
      rawText:text,title:d.title,intent:d.intent,commitmentType:d.commitmentType,direction:d.direction,
      confidence:String(d.combinedConfidence),personName:d.personName||"",locationName:d.location||"",date:d.date||"",time:d.time||"",plannedHours:d.plannedHours||"",
      parserVersion:"semantic-local-v2.0+commitment-local-v1.1",forceDuplicate:String(score>=.72),source:"universal_capture_gateway",sourceType:provenance.sourceType,sourceRef:provenance.sourceRef,sourceUrl:provenance.sourceUrl,sharedTitle:provenance.sharedTitle,capturedVia:provenance.capturedVia
    },{requestId,timeoutMs:70000});

    if(r.status==="duplicate"){
      removePendingInbox(requestId);
      if(liveInboxData.summary){liveInboxData.summary.open=Math.max(0,Number(liveInboxData.summary.open||0)-1);liveInboxData.summary.total=Math.max(0,Number(liveInboxData.summary.total||0)-1);}
      render("inbox",true);
      endOperation(op,"Matching item found");
      const again=await opsymConfirm({title:"Matching Inbox item exists",message:`${r.existing?.inboxId||"An existing item"} already contains this capture.\n\nCreate another separate copy?`,confirmLabel:"Capture another",cancelLabel:"Keep existing"});
      if(!again)return false;

      const requestId2=createClientRequestId().replace(/^create-/,"mutation-");
      liveInboxData.items.unshift({inboxId:"Saving…",pending:true,pendingRequestId:requestId2,captured:new Date().toISOString(),source:captureSourceLabel(provenance.sourceType),sourceType:provenance.sourceType,sourceRef:provenance.sourceRef,sourceUrl:provenance.sourceUrl,signalId:"Saving…",rawText:text,title:d.title,intent:d.intent,commitmentType:d.commitmentType,direction:d.direction,confidence:String(d.combinedConfidence),personName:d.personName||"",locationName:d.location||"",date:d.date||"",time:d.time||"",plannedHours:d.plannedHours||"",status:"Pending"});
      liveInboxData.summary.open=Number(liveInboxData.summary.open||0)+1;liveInboxData.summary.total=Number(liveInboxData.summary.total||0)+1;
      render("inbox",true);
      const op2=beginOperation("Capturing separate Inbox item…");
      try{
        r=await submitMutationAndWait("capture-inbox",{rawText:text,title:d.title,intent:d.intent,commitmentType:d.commitmentType,direction:d.direction,confidence:String(d.combinedConfidence),personName:d.personName||"",locationName:d.location||"",date:d.date||"",time:d.time||"",plannedHours:d.plannedHours||"",parserVersion:"semantic-local-v2.0+commitment-local-v1.1",forceDuplicate:"true",source:"universal_capture_gateway",sourceType:provenance.sourceType,sourceRef:provenance.sourceRef,sourceUrl:provenance.sourceUrl,sharedTitle:provenance.sharedTitle,capturedVia:provenance.capturedVia},{requestId:requestId2,timeoutMs:70000});
        removePendingInbox(requestId2);
        endOperation(op2,"Captured");
      }catch(e){removePendingInbox(requestId2);if(liveInboxData.summary){liveInboxData.summary.open=Math.max(0,Number(liveInboxData.summary.open||0)-1);liveInboxData.summary.total=Math.max(0,Number(liveInboxData.summary.total||0)-1);}render("inbox",true);endOperation(op2);throw e;}
    }else{
      removePendingInbox(requestId);
      endOperation(op,"Captured");
    }

    if(r.status!=="captured")throw new Error(r.error||r.message||"Inbox capture was not confirmed.");

    liveInboxData.items.unshift({inboxId:r.inboxId,objectUuid:r.objectUuid||"",captured:new Date().toISOString(),source:captureSourceLabel(provenance.sourceType),sourceType:r.sourceType||provenance.sourceType,sourceRef:r.sourceRef||provenance.sourceRef,sourceUrl:r.sourceUrl||provenance.sourceUrl,signalId:r.signalId||"",rawText:text,title:r.title||d.title,intent:r.intent||d.intent,commitmentType:r.commitmentType||d.commitmentType,direction:r.direction||d.direction,confidence:r.confidence||String(d.combinedConfidence),personName:r.personName||d.personName||"",personUuid:r.personUuid||"",locationName:r.locationName||d.location||"",locationUuid:r.locationUuid||"",date:r.date||d.date||"",time:r.time||d.time||"",plannedHours:r.plannedHours||d.plannedHours||"",status:"Open"});
    toast(r.timings?.totalMs?`Captured ${r.inboxId} in ${(r.timings.totalMs/1000).toFixed(1)}s`:`Captured ${r.inboxId}`);
    render("inbox",true);
    recordOpsymPerf("capture-inbox",{clientMs:Math.round(performance.now()-clientT0),server:r.timings||null,directAck:!!r.directAck,reconciled:!!r.reconciled});

    liveInboxLoaded=false;
    loadLiveInboxData(true).then(()=>{if(currentRoute()==="inbox")render("inbox",true);}).catch(()=>null);
    return true;
  }catch(err){
    const hadPending=!!liveInboxData?.items?.some(x=>x.pendingRequestId===requestId);
    removePendingInbox(requestId);
    if(hadPending&&liveInboxData?.summary){liveInboxData.summary.open=Math.max(0,Number(liveInboxData.summary.open||0)-1);liveInboxData.summary.total=Math.max(0,Number(liveInboxData.summary.total||0)-1);}
    render("inbox",true);
    endOperation(op);
    await opsymNotice({title:"Capture not confirmed",message:`Op-Sym could not confirm this write.\n\n${err?.message||err}\n\nDo not capture it again until you have checked the Inbox; the server may still have completed the write.`});
    return false;
  }finally{
    inboxCaptureInFlight=false;
  }
}

function clarifySummaryText(x){
  const parts=[
    String(x.commitmentType||"DO").toUpperCase(),
    String(x.direction||"ME").toUpperCase(),
    x.personName||"",
    x.date||"",
    x.time||""
  ].filter(Boolean);
  return parts.join(" · ");
}

function openInboxClarifySheet(id){
  const x=getInboxItem(id);
  if(!x) return;

  clarifyReturnFocusEl=document.querySelector(`[data-inbox-clarify="${CSS.escape(String(id))}"]`) || document.activeElement;
  document.getElementById("inboxClarifyBackdrop")?.remove();

  const el=document.createElement("div");
  el.className="smart-sheet-backdrop";
  el.id="inboxClarifyBackdrop";

  const type=String(x.commitmentType||"DO").toUpperCase();
  const direction=String(x.direction||"ME").toUpperCase();
  const hours=(type==="WAIT"||type==="DELEGATE")?"":(x.plannedHours||"");

  el.innerHTML=`
    <section class="smart-sheet clarify-workspace" role="dialog" aria-modal="true" aria-label="Review and classify Inbox item" tabindex="-1">
      <div class="smart-sheet-handle"></div>

      <header class="clarify-sticky-header">
        <div class="smart-sheet-head">
          <div>
            <span class="eyebrow">REVIEW & CLASSIFY · ${escapeHtml(id)}</span>
            <h2>Confirm what this means.</h2>
            <p>Review Op-Sym's interpretation, correct anything necessary, then choose what this should become.</p>
          </div>
          <button class="icon-btn" type="button" data-close-inbox-clarify aria-label="Close">×</button>
        </div>
        <div class="clarify-summary" id="clarifySummary">${escapeHtml(clarifySummaryText(x))}</div>
      </header>

      <div class="clarify-scroll-body">
        <section class="clarify-step" aria-labelledby="clarifyStep1">
          <div class="clarify-step-head">
            <span class="clarify-step-number">1</span>
            <div><strong id="clarifyStep1">Classification</strong><small>What kind of open loop is this?</small></div>
          </div>

          <div class="choice-strip five" role="radiogroup" aria-label="Commitment classification">
            ${["DO","MEET","WAIT","DELEGATE","DECIDE"].map(c=>`
              <button type="button"
                class="choice-chip ${c===type?"selected":""}"
                data-clarify-type="${c}"
                aria-pressed="${c===type?"true":"false"}">${c}</button>
            `).join("")}
          </div>
        </section>

        <section class="clarify-step" aria-labelledby="clarifyStep2">
          <div class="clarify-step-head">
            <span class="clarify-step-number">2</span>
            <div><strong id="clarifyStep2">Responsibility</strong><small>Who owns the next move?</small></div>
          </div>

          <div class="choice-strip" role="radiogroup" aria-label="Responsibility">
            ${["ME","OTHER","SHARED"].map(c=>`
              <button type="button"
                class="choice-chip ${c===direction?"selected":""}"
                data-clarify-direction="${c}"
                aria-pressed="${c===direction?"true":"false"}">${c}</button>
            `).join("")}
          </div>

          <p id="clarifyOwnershipHelp" class="clarify-help"></p>
        </section>

        <section class="clarify-step" aria-labelledby="clarifyStep3">
          <div class="clarify-step-head">
            <span class="clarify-step-number">3</span>
            <div><strong id="clarifyStep3">Key details</strong><small>Check the information Op-Sym extracted.</small></div>
          </div>

          <div class="inbox-raw-box clarify-source-text">
            <span class="clarify-source-label">Original capture</span>
            ${escapeHtml(x.rawText||"")}
          </div>

          <label class="form-field full">
            <span>Title</span>
            <input id="clarifyTitle" value="${escapeHtml(x.title||x.rawText||"")}">
          </label>

          <div class="form-grid clarify-core-fields">
            <label class="form-field">
              <span>Person / counterparty</span>
              <input id="clarifyPerson" value="${escapeHtml(x.personName||"")}">
            </label>
            <label class="form-field">
              <span>Location</span>
              <input id="clarifyLocation" value="${escapeHtml(x.locationName||"")}">
            </label>
            <label class="form-field">
              <span>Date</span>
              <input id="clarifyDate" type="date" value="${escapeHtml(x.date||"")}">
            </label>
            <label class="form-field">
              <span>Time</span>
              <input id="clarifyTime" type="time" value="${escapeHtml(x.time||"")}">
            </label>
          </div>

          <details class="clarify-advanced">
            <summary>More details</summary>
            <div class="form-grid clarify-advanced-grid">
              <label class="form-field">
                <span>Planned hours</span>
                <input id="clarifyHours" type="number" min="0.25" step=".25" value="${escapeHtml(hours?String(hours):"")}">
              </label>
              <label class="form-field">
                <span>Intent</span>
                <input id="clarifyIntent" value="${escapeHtml(x.intent||type||"TASK")}">
              </label>
            </div>
          </details>
        </section>

        <footer class="clarify-scroll-actions" aria-label="Create from clarified item">
          <div class="clarify-action-caption">What should this become?</div>
          <div class="clarify-primary-actions">
            <button class="ghost-btn clarify-final-btn" type="button" data-clarify-task="${escapeHtml(id)}">Create Task</button>
            <button class="primary-btn clarify-final-btn" type="button" data-clarify-commitment="${escapeHtml(id)}">Create Commitment</button>
          </div>
          <button class="text-btn clarify-dismiss-btn" type="button" data-clarify-dismiss="${escapeHtml(id)}">Dismiss from Inbox</button>
        </footer>

        <div class="clarify-bottom-spacer" aria-hidden="true"></div>
      </div>
    </section>`;

  document.body.appendChild(el);
  document.body.classList.add("opsym-modal-open");

  const scrollBody=el.querySelector(".clarify-scroll-body");
  if(scrollBody) scrollBody.scrollTop=0;

  updateClarifyRules();
  updateClarifySummary();

  requestAnimationFrame(()=>{
    const workspace=el.querySelector(".clarify-workspace");
    workspace?.focus({preventScroll:true});
  });
}
function closeInboxClarifySheet(){
  document.getElementById("inboxClarifyBackdrop")?.remove();
  document.body.classList.remove("opsym-modal-open");
  const target=clarifyReturnFocusEl;
  clarifyReturnFocusEl=null;
  requestAnimationFrame(()=>target?.focus?.({preventScroll:true}));
}
function clarifyType(){return document.querySelector("[data-clarify-type].selected")?.dataset.clarifyType||"DO";}
function clarifyDirection(){return document.querySelector("[data-clarify-direction].selected")?.dataset.clarifyDirection||"ME";}
function updateClarifySummary(){
  const summary=document.getElementById("clarifySummary");
  if(!summary) return;

  const parts=[
    clarifyType(),
    clarifyDirection(),
    document.getElementById("clarifyPerson")?.value.trim()||"",
    document.getElementById("clarifyDate")?.value||"",
    document.getElementById("clarifyTime")?.value||""
  ].filter(Boolean);

  summary.textContent=parts.join(" · ");
}

function updateClarifyRules(){
  const t=clarifyType();
  const h=document.getElementById("clarifyHours");
  const p=document.getElementById("clarifyOwnershipHelp");
  if(!h||!p) return;

  if(t==="WAIT"){
    h.value="";
    h.disabled=true;
    p.textContent="WAIT: another person owns the next move. Op-Sym tracks the expected response, so your own work duration is not required.";
  }else if(t==="DELEGATE"){
    h.value="";
    h.disabled=true;
    p.textContent="DELEGATE: work has been assigned to someone else. Op-Sym tracks responsibility and follow-up rather than your personal work duration.";
  }else if(t==="MEET"){
    h.disabled=false;
    p.textContent="MEET is normally shared responsibility. Confirm the person, place and time below.";
  }else if(t==="DECIDE"){
    h.disabled=false;
    p.textContent="DECIDE means the next move is a decision you need to make.";
  }else{
    h.disabled=false;
    p.textContent="DO means an action you need to perform. Confirm the key details below.";
  }

  updateClarifySummary();
}
function collectClarify(id){const x=getInboxItem(id);return{inboxId:id,inboxUuid:x.objectUuid||"",rawText:x.rawText||"",title:document.getElementById("clarifyTitle")?.value.trim()||x.title||"",commitmentType:clarifyType(),direction:clarifyDirection(),personName:document.getElementById("clarifyPerson")?.value.trim()||"",locationName:document.getElementById("clarifyLocation")?.value.trim()||"",date:document.getElementById("clarifyDate")?.value||"",time:document.getElementById("clarifyTime")?.value||"",plannedHours:document.getElementById("clarifyHours")?.disabled?"":(document.getElementById("clarifyHours")?.value||""),intent:(document.getElementById("clarifyIntent")?.value.trim()||clarifyType()).toUpperCase(),signalId:x.signalId||"",sourceType:x.sourceType||"",sourceRef:x.sourceRef||"",sourceUrl:x.sourceUrl||"",capturedVia:x.capturedVia||""};}
async function saveClarify(d){const r=await submitMutationAndWait("clarify-inbox",d);if(r.status!=="clarified")throw new Error(r.error||r.message||"Clarification failed.");return r;}
async function clarifyToTask(id){
  const d=collectClarify(id);
  if(!d) return false;

  closeInboxClarifySheet();
  captureEntryMode="interpreted";
  const actionableTitle=d.commitmentType==="WAIT"
    ? (d.personName ? `Follow up with ${d.personName}` : `Follow up: ${d.title}`)
    : d.title;
  interpretedCaptureDraft={
    sourceText:d.rawText,title:actionableTitle,role:"",project:"",priority:"Medium",
    plannedHours:d.commitmentType==="WAIT"?"":d.plannedHours,date:d.date,time:d.time,location:d.locationName,
    personName:d.personName,intent:d.intent,commitmentType:d.commitmentType,
    direction:d.direction,description:d.commitmentType==="WAIT"?`Waiting-for source: ${d.rawText}`:d.rawText,confidence:.99,
    parserVersion:"clarified-v1.9.0",
    sourceInboxId:d.inboxId,sourceInboxUuid:d.inboxUuid,signalId:d.signalId||"",sourceType:d.sourceType||"",sourceRef:d.sourceRef||"",sourceUrl:d.sourceUrl||""
  };
  render("capture",true);
  return true;
}

async function clarifyToCommitment(id){
  const clientT0=performance.now();
  if(commitmentActionInFlight) return false;
  const d=collectClarify(id);
  if(!d) return false;

  // The clarification sheet is already the deliberate review step.
  // v1.8.5 retains the no-redundant-confirmation rule.
  commitmentActionInFlight=true;
  const btn=document.querySelector(`[data-clarify-commitment="${CSS.escape(String(id))}"]`);
  if(btn){btn.disabled=true;btn.textContent="Creating…";}
  const op=beginOperation("Creating commitment…");

  try{
    const r=await submitMutationAndWait("promote-inbox-commitment",{
      inboxId:d.inboxId,inboxUuid:d.inboxUuid,rawText:d.rawText,title:d.title,
      commitmentType:d.commitmentType,direction:d.direction,personName:d.personName,
      locationName:d.locationName,date:d.date,time:d.time,
      plannedHours:d.plannedHours,intent:d.intent,confidence:"1.0",
      signalId:d.signalId,sourceType:d.sourceType,sourceRef:d.sourceRef,sourceUrl:d.sourceUrl,capturedVia:d.capturedVia
    },{timeoutMs:70000});

    if(r.status!=="promoted_commitment") throw new Error(r.error||r.message||"Commitment promotion failed.");

    closeInboxClarifySheet();
    if(liveInboxData?.items){
      liveInboxData.items=liveInboxData.items.filter(x=>x.inboxId!==d.inboxId);
      if(liveInboxData.summary) liveInboxData.summary.open=Math.max(0,Number(liveInboxData.summary.open||0)-1);
    }
    liveCommitmentsData=liveCommitmentsData||{summary:{open:0,waiting:0,closure:0,overdue:0},items:[]};
    liveCommitmentsData.items=liveCommitmentsData.items||[];
    if(!liveCommitmentsData.items.some(x=>String(x.commitmentId||"")===String(r.commitmentId||""))){
      liveCommitmentsData.items.unshift({commitmentId:r.commitmentId,objectUuid:r.objectUuid||"",title:r.title||d.title,type:r.commitmentType||d.commitmentType,direction:r.direction||d.direction,personName:r.personName||d.personName,dueDate:r.dueDate||d.date,status:"Open",signalId:d.signalId||"",sourceType:d.sourceType||"",sourceRef:d.sourceRef||"",sourceUrl:d.sourceUrl||"",sourceInboxId:d.inboxId||"",rawText:d.rawText||""});
      if(liveCommitmentsData.summary) liveCommitmentsData.summary.open=Number(liveCommitmentsData.summary.open||0)+1;
    }

    endOperation(op,"Commitment created");
    recordOpsymPerf("promote-inbox-commitment",{clientMs:Math.round(performance.now()-clientT0),server:r.timings||null,directAck:!!r.directAck,reconciled:!!r.reconciled});
    toast(`Commitment saved · ${r.commitmentId||"confirmed"}`);
    render("commitments",true);

    liveInboxLoaded=false;liveCommitmentsLoaded=false;
    loadLiveInboxData(true).catch(()=>null);
    loadLiveCommitmentsData(true).then(()=>{if(currentRoute()==="commitments")render("commitments",true);}).catch(()=>null);
    return true;
  }catch(e){
    endOperation(op);
    await opsymNotice({title:"Commitment not confirmed",message:String(e?.message||e)});
    return false;
  }finally{
    commitmentActionInFlight=false;
    if(btn){btn.disabled=false;btn.textContent="Create Commitment";}
  }
}

async function createTaskFromForm(){
  const clientT0=performance.now();
  if(createTaskInFlight) return false;

  const title=document.getElementById("newTaskTitle")?.value.trim() || "";
  const role=document.getElementById("newTaskRole")?.value.trim() || "";
  const project=document.getElementById("newTaskProject")?.value.trim() || "";
  const priority=document.getElementById("newTaskPriority")?.value || "Medium";
  const plannedHours=document.getElementById("newTaskHours")?.value.trim() || "";
  const date=document.getElementById("newTaskDate")?.value || "";
  const time=document.getElementById("newTaskTime")?.value || "";
  const location=document.getElementById("newTaskLocation")?.value.trim() || "";
  const description=document.getElementById("newTaskDescription")?.value.trim() || "";

  if(!title){
    await opsymNotice({title:"Task title required",message:"Enter a task title before creating the task."});
    document.getElementById("newTaskTitle")?.focus();
    return false;
  }
  if(time && !date){
    await opsymNotice({title:"Date required",message:"Choose a scheduled date when entering a start time."});
    return false;
  }

  const semanticDraft=(captureEntryMode==="interpreted" && interpretedCaptureDraft) ? interpretedCaptureDraft : null;
  const fromInbox=!!semanticDraft?.sourceInboxId;
  const requestId=createClientRequestId();
  updateOpsymDiag_({
    lastTaskRequestId:requestId,
    lastTaskResponse:null,
    lastTaskError:"",
    confirmPendingTaskRan:false,
    confirmPendingTaskAt:"",
    lastConfirmedTaskId:""
  });
  const destination=captureEntryMode==="today"?"today":"tasks";
  const sourceInboxId=semanticDraft?.sourceInboxId||"";
  const isToday=!!date && date===new Date().toISOString().slice(0,10);
  const provisionalId=`PENDING-${requestId.slice(-8).toUpperCase()}`;
  const params={
    action:fromInbox?"promote-inbox-task":"create-task",
    requestId,title,role,project,priority,plannedHours,date,time,location,description,
    captureSource: semanticDraft ? "natural_language" : (captureEntryMode==="today" ? "add_to_today" : "manual"),
    rawCaptureText: semanticDraft?.sourceText || "",
    parserVersion: semanticDraft?.parserVersion || "",
    parsedIntent: semanticDraft?.intent || "",
    captureConfidence: semanticDraft ? String(semanticDraft.confidence ?? "") : "",
    personName: semanticDraft?.personName || "",
    sourceInboxId,sourceInboxUuid: semanticDraft?.sourceInboxUuid || "",
    inboxId:sourceInboxId,inboxUuid: semanticDraft?.sourceInboxUuid || "",
    commitmentType: semanticDraft?.commitmentType || "",direction: semanticDraft?.direction || "",
    intent: semanticDraft?.intent || "",locationName:location,rawText: semanticDraft?.sourceText || "",
    signalId: semanticDraft?.signalId || "",
    sourceType: semanticDraft?.sourceType || "",
    sourceRef: semanticDraft?.sourceRef || "",
    sourceUrl: semanticDraft?.sourceUrl || "",
    capturedVia: semanticDraft?.capturedVia || ""
  };
  if(mobileBridge.key) params.key=mobileBridge.key;

  // v1.8.5: optimistic task creation with bounded verification. The user leaves the form immediately.
  createTaskInFlight=true;
  liveTasksData=liveTasksData||{summary:{open:0,today:0,unscheduled:0,clashes:0},tasks:[]};
  liveTasksData.tasks=liveTasksData.tasks||[];
  const provisional={taskId:provisionalId,pending:true,pendingRequestId:requestId,pendingStartedAt:Date.now(),sourceInboxId,title,status:"Saving",priority,role,project,location,description,plannedHours,scheduledDate:date,startTime:time,isToday,isUnscheduled:!date,hasClash:false,meta:[role,priority?priority+" priority":"",date?(isToday?"Today":date):"Unscheduled"].filter(Boolean).join(" · ")};
  liveTasksData.tasks.unshift(provisional);
  liveTasksData.summary.open=Number(liveTasksData.summary.open||0)+1;
  if(isToday) liveTasksData.summary.today=Number(liveTasksData.summary.today||0)+1;
  if(!date) liveTasksData.summary.unscheduled=Number(liveTasksData.summary.unscheduled||0)+1;
  liveTasksLoaded=true;
  pendingTaskRequests.set(requestId,provisional);

  if(sourceInboxId&&liveInboxData?.items){
    liveInboxData.items=liveInboxData.items.filter(x=>x.inboxId!==sourceInboxId);
    if(liveInboxData.summary) liveInboxData.summary.open=Math.max(0,Number(liveInboxData.summary.open||0)-1);
  }

  captureEntryMode="general";
  interpretedCaptureDraft=null;
  invalidateLiveViews("home","today");
  render(destination,true);
  toast("Task added - saving in the background");
  createTaskInFlight=false;

  // v1.9.0.6: independently reconcile against the canonical Tasks endpoint.
  // This clears the optimistic Saving state as soon as the durable Task row exists,
  // even if mutation acknowledgement or enrichment is still delayed.
  // Authoritative reconciliation: the backend mutation record is the primary
  // truth for whether an Inbox promotion has durably created a Task.
  // Persist independently so the user leaves the form immediately.
  // v1.9.1 no longer launches acknowledgement polling here: the direct write
  // response below is itself authoritative.
  (async()=>{
    try{
      let result;

      // v1.9.1 Direct Save Acknowledgement:
      // the same request that performs the durable write returns the canonical
      // Task result. No normal-path polling/reconciliation is required.
      const directParams={...params,_ts:String(Date.now())};
      const payload=await jsonpRequest(
        mobileBridge.endpoint,
        directParams,
        45000,
        fromInbox?"Task promotion":"Task creation"
      );
      if(!payload || payload.ok!==true){
        throw new Error(payload?.error || "Task creation failed.");
      }
      result=payload.data || {};      
      updateOpsymDiag_({lastTaskResponse:result,lastTaskError:""});

      // The durable-write response is the authoritative Saved boundary.
      traceTaskAck_("direct-write-response",{
        requestId,
        taskId:result?.taskId||"",
        status:result?.status||"",
        created:!!result?.created
      });
      if(result?.status==="error") throw new Error(result.error||result.message||"Task creation failed.");
      if(result?.blocked){
        removePendingTask_(requestId);
        await opsymNotice({title:"Schedule conflict",message:`The task was not saved because the selected time conflicts with existing work.\n\n${formatConflictList(result.conflicts)}\n\nChoose another time and try again.`});
        return;
      }
      if(!(result?.created || result?.status==="promoted_task")) throw new Error(result?.message||"The task was not verified as created.");
      confirmPendingTask_(requestId,result,{title,role,project,priority,date,time,location,isToday});
      pendingTaskRequests.delete(requestId);

      // v1.9.1.2: direct acknowledgement is authoritative.
      // If the user is visually on Tasks, re-render immediately from the
      // in-memory confirmed object; do not wait for any later refresh.
      if(currentRoute()==="tasks"){
        render("tasks",true);
      }
      recordOpsymPerf(fromInbox?"promote-inbox-task":"create-task",{clientMs:Math.round(performance.now()-clientT0),server:result.timings||null,directAck:true,reconciled:false});
      toast(result.timings?.totalMs?`Saved ${result.taskId||"task"} in ${(result.timings.totalMs/1000).toFixed(1)}s`:`Saved ${result.taskId||"task"}`);
      invalidateLiveViews("home","today","tasks",...(sourceInboxId?["inbox"]:[]));
      refreshInvalidatedViews({home:true,today:destination==="today",tasks:true,inbox:!!sourceInboxId});
     }catch(err){
      updateOpsymDiag_({lastTaskError:String(err?.message||err)});
      // If canonical reconciliation already found the Task, the durable save succeeded.
      // Do not resurrect a false failure state because the acknowledgement path was slow.
      if(!hasPendingTaskRequest_(requestId)) return;
      markPendingTaskFailed_(requestId,err?.message||String(err));
      await opsymNotice({title:"Task still needs attention",message:`The task card has been marked as not confirmed.\n\nRequest ID: ${requestId}\n\n${err?.message||err}\n\nYou can retry after checking Tasks.`});
    }finally{
      pendingTaskRequests.delete(requestId);
      createTaskInFlight=false;
    }
  })();
  return true;
}



function reconcileLoadedCanonicalTasks_(){
  if(!liveTasksData?.tasks)return 0;
  const all=liveTasksData.tasks||[];
  const canonical=all.filter(t=>!t.pending);
  if(!canonical.length)return 0;
  let cleared=0;

  liveTasksData.tasks=all.filter(t=>{
    if(!t.pending)return true;
    const match=findCanonicalTaskForPending_(canonical,{
      sourceInboxId:t.sourceInboxId||"",
      title:t.title||"",
      date:t.scheduledDate||"",
      time:t.startTime||""
    });
    if(match){
      pendingTaskRequests.delete(t.pendingRequestId);
      cleared++;
      return false;
    }
    return true;
  });
  return cleared;
}

function hasPendingTaskRequest_(requestId){
  return !!(liveTasksData?.tasks||[]).some(t=>t.pendingRequestId===requestId);
}
function normalizedTaskMatchText_(v){
  return String(v||"").toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").replace(/\s+/g," ").trim();
}
function findCanonicalTaskForPending_(tasks,expected={}){
  const list=Array.isArray(tasks)?tasks:[];
  const sourceInboxId=String(expected.sourceInboxId||"").trim();
  if(sourceInboxId){
    const byInbox=list.find(t=>String(t.sourceInboxId||"").trim()===sourceInboxId);
    if(byInbox)return byInbox;
  }
  const title=normalizedTaskMatchText_(expected.title);
  const date=String(expected.date||"").trim();
  const time=String(expected.time||"").trim();
  return list.find(t=>{
    const sameTitle=title && normalizedTaskMatchText_(t.title)===title;
    const sameDate=!date || String(t.scheduledDate||"").trim()===date;
    const sameTime=!time || !String(t.startTime||"").trim() || String(t.startTime||"").trim()===time;
    return sameTitle&&sameDate&&sameTime;
  })||null;
}


function traceTaskAck_(event,data={}){
  try{
    window.__opsymTaskAckTrace=window.__opsymTaskAckTrace||[];
    window.__opsymTaskAckTrace.push({ts:new Date().toISOString(),event,...data});
    if(window.__opsymTaskAckTrace.length>100)window.__opsymTaskAckTrace.shift();
  }catch(_){}
}

async function reconcilePendingTaskExact_(requestId,fallback={}){
  if(!mobileBridge.endpoint)return false;
  const deadline=Date.now()+120000;
  let attempt=0;
  traceTaskAck_("watch-start",{requestId,sourceInboxId:fallback.sourceInboxId||"",title:fallback.title||""});

  while(Date.now()<deadline){
    if(!hasPendingTaskRequest_(requestId)){
      traceTaskAck_("already-cleared",{requestId});
      return true;
    }

    await new Promise(r=>setTimeout(r,attempt<4?600:1000));
    attempt++;

    // First check the exact durable Task create record.
    try{
      const created=await checkCreateRequestStatus(requestId,5000);
      traceTaskAck_("create-status",{requestId,status:created?.status||"",taskId:created?.taskId||""});
      if(created?.created===true || created?.status==="created"){
        confirmPendingTask_(requestId,created,fallback);
        pendingTaskRequests.delete(requestId);
        traceTaskAck_("confirmed-create-record",{requestId,taskId:created.taskId||""});
        toast(`Saved ${created.taskId||"task"}`);
        invalidateLiveViews("home","today","tasks","inbox");
        refreshInvalidatedViews({home:true,today:false,tasks:true,inbox:!!fallback.sourceInboxId});
        return true;
      }
      if(created?.blocked===true || created?.status==="blocked") return false;
    }catch(e){
      traceTaskAck_("create-status-error",{requestId,message:String(e?.message||e)});
    }

    // Then check the promotion-level mutation record.
    try{
      const mutation=await checkMutationStatus(requestId,5000);
      traceTaskAck_("mutation-status",{requestId,status:mutation?.status||"",taskId:mutation?.taskId||""});
      if(mutation?.status==="promoted_task" && mutation?.taskId){
        confirmPendingTask_(requestId,mutation,fallback);
        pendingTaskRequests.delete(requestId);
        traceTaskAck_("confirmed-mutation-record",{requestId,taskId:mutation.taskId||""});
        toast(`Saved ${mutation.taskId}`);
        invalidateLiveViews("home","today","tasks","inbox");
        refreshInvalidatedViews({home:true,today:false,tasks:true,inbox:!!fallback.sourceInboxId});
        return true;
      }
      if(mutation?.status==="blocked" || mutation?.status==="error") return false;
    }catch(e){
      traceTaskAck_("mutation-status-error",{requestId,message:String(e?.message||e)});
    }
  }

  traceTaskAck_("watch-timeout",{requestId});
  return false;
}

async function reconcilePendingTaskFromMutationStatus_(requestId,fallback={}){
  if(!mobileBridge.endpoint)return false;
  const deadline=Date.now()+120000;
  while(Date.now()<deadline){
    if(!hasPendingTaskRequest_(requestId))return true;
    await new Promise(r=>setTimeout(r,900));
    if(!hasPendingTaskRequest_(requestId))return true;
    try{
      const status=await checkMutationStatus(requestId,5000);
      if(status?.status==="promoted_task" && status?.taskId){
        confirmPendingTask_(requestId,status,fallback);
        toast(`Saved ${status.taskId}`);
        invalidateLiveViews("home","today","tasks","inbox");
        refreshInvalidatedViews({home:true,today:false,tasks:true,inbox:true});
        return true;
      }
      if(status?.status==="blocked" || status?.status==="error") return false;
    }catch(_){}
  }
  return false;
}

async function reconcilePendingTaskFromCanonical_(requestId,expected={},options={}){
  if(!mobileBridge.endpoint)return false;
  const deadline=Date.now()+Number(options.timeoutMs||180000);
  let attempt=0;
  while(Date.now()<deadline){
    if(!hasPendingTaskRequest_(requestId))return true;
    await new Promise(r=>setTimeout(r,attempt<2?900:1500));
    attempt++;
    if(!hasPendingTaskRequest_(requestId))return true;
    try{
      const params={action:"tasks",_ts:String(Date.now())};
      if(mobileBridge.key)params.key=mobileBridge.key;
      const payload=await jsonpRequest(mobileBridge.endpoint,params,8000);
      if(!payload||payload.ok!==true||!payload.data)continue;
      const canonical=findCanonicalTaskForPending_(payload.data.tasks,expected);
      if(!canonical)continue;

      liveTasksData=payload.data;
      liveTasksLoaded=true;
      liveTasksError=null;
      pendingTaskRequests.delete(requestId);
      reconcileLoadedCanonicalTasks_();
      if(currentRoute()==="tasks")render("tasks",true);
      toast(`Saved ${canonical.taskId||"task"}`);
      return true;
    }catch(_){}
  }
  return false;
}

function removePendingTask_(requestId){
  if(!liveTasksData?.tasks)return;
  const before=liveTasksData.tasks.length;
  const removed=liveTasksData.tasks.find(x=>x.pendingRequestId===requestId);
  liveTasksData.tasks=liveTasksData.tasks.filter(x=>x.pendingRequestId!==requestId);
  if(removed&&before!==liveTasksData.tasks.length&&liveTasksData.summary){
    liveTasksData.summary.open=Math.max(0,Number(liveTasksData.summary.open||0)-1);
    if(removed.isToday) liveTasksData.summary.today=Math.max(0,Number(liveTasksData.summary.today||0)-1);
    if(removed.isUnscheduled) liveTasksData.summary.unscheduled=Math.max(0,Number(liveTasksData.summary.unscheduled||0)-1);
  }
  if(currentRoute()==="tasks")render("tasks",true);
}
function confirmPendingTask_(requestId,result,fallback={}){
  updateOpsymDiag_({
    confirmPendingTaskRan:true,
    confirmPendingTaskAt:new Date().toISOString(),
    lastConfirmedTaskId:String(result?.taskId||"")
  });

  if(!liveTasksData) liveTasksData={tasks:[]};
  if(!Array.isArray(liveTasksData.tasks)) liveTasksData.tasks=[];

  const i=liveTasksData.tasks.findIndex(x=>x.pendingRequestId===requestId);
  const current=i>=0?liveTasksData.tasks[i]:null;
  const resolvedTaskId=String(result.taskId||current?.taskId||"").trim();

  // If canonical Task is already loaded, just remove the stale provisional card.
  const canonicalIndex=resolvedTaskId
    ? liveTasksData.tasks.findIndex(t=>!t.pending && String(t.taskId||"").trim()===resolvedTaskId)
    : -1;

  if(canonicalIndex>=0){
    if(i>=0 && i!==canonicalIndex) liveTasksData.tasks.splice(i,1);
    pendingTaskRequests.delete(requestId);
    if(currentRoute()==="tasks") render("tasks",true);
    return;
  }

  const technicalStatus=String(result.status||"").toLowerCase();
  const displayStatus=result.statusText || (
    ["created","promoted_task","pending"].includes(technicalStatus)
      ? ((result.scheduledDate||fallback.date)?"Scheduled":"Open")
      : (result.status||((fallback.date)?"Scheduled":"Open"))
  );

  const confirmed={
    ...(current||{}),
    pending:false,
    pendingRequestId:"",
    taskId:resolvedTaskId,
    objectUuid:result.objectUuid||current?.objectUuid||"",
    title:result.title||fallback.title||current?.title||"Task",
    status:displayStatus,
    scheduledDate:result.scheduledDate||fallback.date||current?.scheduledDate||"",
    startTime:result.startTime||fallback.time||current?.startTime||"",
    sourceInboxId:result.sourceInboxId||current?.sourceInboxId||fallback.sourceInboxId||""
  };

  if(i>=0) liveTasksData.tasks[i]=confirmed;
  else liveTasksData.tasks.unshift(confirmed);

  pendingTaskRequests.delete(requestId);

  if(currentRoute()==="tasks") render("tasks",true);
}
function markPendingTaskFailed_(requestId,message){
  if(!liveTasksData?.tasks)return;
  const x=liveTasksData.tasks.find(t=>t.pendingRequestId===requestId);
  if(x){x.pending=false;x.saveFailed=true;x.status="Not confirmed";x.meta=[x.meta,"Save not confirmed"].filter(Boolean).join(" · ");x.saveError=message||"";}
  if(currentRoute()==="tasks")render("tasks",true);
}
function retryFailedTask_(requestId){
  const x=(liveTasksData?.tasks||[]).find(t=>t.pendingRequestId===requestId);
  if(!x)return;
  interpretedCaptureDraft={title:x.title||"",sourceText:x.description||x.title||"",role:x.role||"",project:x.project||"",priority:x.priority||"Medium",plannedHours:x.plannedHours||"",date:x.scheduledDate||"",time:x.startTime||"",location:x.location||"",personName:"",intent:"DO",commitmentType:"DO",direction:"ME",parserVersion:"retry-v1.8.5",confidence:1};
  removePendingTask_(requestId);
  captureEntryMode="interpreted";
  render("capture");
}

function normalizeDateInput(value){
  const s=String(value||"").trim();
  if(/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  return "";
}

function normalizeTimeInput(value){
  const s=String(value||"").trim();
  if(/^\d{2}:\d{2}$/.test(s)) return s;
  return "";
}

function formatConflictList(conflicts){
  if(!conflicts?.length) return "";
  return conflicts.slice(0,5).map(c=>`• ${c.title} (${c.start}–${c.end})`).join("\n");
}

async function rescheduleTaskById(taskId,title="",currentDate="",currentTime=""){
  const id=String(taskId||"").trim();
  if(!id || rescheduleActionInFlight) return false;

  const proposedDate=await opsymPrompt({title:"Reschedule task",message:`${title||id}\n\nEnter new date as YYYY-MM-DD.`,value:normalizeDateInput(currentDate),placeholder:"YYYY-MM-DD",confirmLabel:"Next"});
  if(proposedDate===null) return false;

  const proposedTime=await opsymPrompt({title:"New start time",message:"Enter new start time in 24-hour format HH:MM.",value:normalizeTimeInput(currentTime),placeholder:"HH:MM",confirmLabel:"Check time"});
  if(proposedTime===null) return false;

  if(!/^\d{4}-\d{2}-\d{2}$/.test(proposedDate.trim())){
    await opsymNotice({title:"Invalid date",message:"Date must use YYYY-MM-DD."});
    return false;
  }
  if(!/^\d{2}:\d{2}$/.test(proposedTime.trim())){
    await opsymNotice({title:"Invalid time",message:"Time must use HH:MM in 24-hour format."});
    return false;
  }

  rescheduleActionInFlight=true;
  try{
    const checkParams={
      action:"check-reschedule",
      taskId:id,
      date:proposedDate.trim(),
      time:proposedTime.trim()
    };
    if(mobileBridge.key) checkParams.key=mobileBridge.key;

    const check=await jsonpRequest(mobileBridge.endpoint,checkParams,12000);
    if(!check || check.ok!==true){
      throw new Error(check?.error || "Could not check the proposed time.");
    }

    const preview=check.data || {};
    if(preview.hasConflict){
      const suggestions=await fetchSmartRescheduleSuggestions(id,preview.date);
      showSmartRescheduleSheet({
        taskId:id,
        title:title||id,
        conflictPreview:preview,
        suggestions
      });
      return false;
    }

    return await confirmAndWriteReschedule(id,title||id,preview);
  }catch(err){
    await opsymNotice({title:"Reschedule failed",message:"Could not reschedule task:\n"+(err?.message||err)});
    return false;
  }finally{
    rescheduleActionInFlight=false;
  }
}

async function fetchSmartRescheduleSuggestions(taskId,date){
  const params={action:"suggest-reschedule",taskId,date};
  if(mobileBridge.key) params.key=mobileBridge.key;
  const payload=await jsonpRequest(mobileBridge.endpoint,params,12000);
  if(!payload || payload.ok!==true){
    throw new Error(payload?.error || "Could not calculate available times.");
  }
  return payload.data || {};
}

async function confirmAndWriteReschedule(taskId,title,preview){
  const confirmed=await opsymConfirm({title:"Reschedule task",message:`${title}\n${taskId}\n\nNew slot: ${preview.date} at ${preview.time}\nEstimated end: ${preview.endTime}\n\nNo direct task overlap was found.`,confirmLabel:"Reschedule",cancelLabel:"Cancel"});
  if(!confirmed) return false;

  const result=await submitMutationAndWait("reschedule-task",{
    taskId,
    date:preview.date,
    time:preview.time
  });

  if(result.status==="error"){
    throw new Error(result.error || result.message || "The task could not be rescheduled.");
  }

  if(result.blocked || result.status==="blocked"){
    const suggestions=await fetchSmartRescheduleSuggestions(taskId,preview.date);
    showSmartRescheduleSheet({
      taskId,
      title,
      conflictPreview:{conflicts:result.conflicts||[],date:preview.date},
      suggestions
    });
    return false;
  }

  closeSmartRescheduleSheet();
  toast(result.recovered ? "Task reschedule confirmed" : "Task rescheduled");

  liveHomeLoaded=false;
  liveTodayLoaded=false;
  liveTasksLoaded=false;
  liveTaskDetailLoaded=false;
  liveTaskDetailData=null;
  liveTaskDetailError=null;

  await Promise.all([
    loadLiveHomeData(false),
    loadLiveTodayData(false),
    loadLiveTasksData(false)
  ]);

  if(currentRoute()==="task-detail"){
    await loadLiveTaskDetailData(taskId,false);
  }else if(currentRoute()==="tasks"){
    render("tasks",true);
  }

  return true;
}
function smartRescheduleSlotMarkup(slot){
  return `<button class="smart-slot"
    data-smart-slot-date="${escapeHtml(slot.date||"")}"
    data-smart-slot-start="${escapeHtml(slot.startTime||"")}"
    data-smart-slot-end="${escapeHtml(slot.endTime||"")}">
    <strong>${escapeHtml(slot.label||"Available")}</strong>
    <small>Available</small>
  </button>`;
}

function showSmartRescheduleSheet({taskId,title,conflictPreview,suggestions}){
  closeSmartRescheduleSheet();

  const conflicts=conflictPreview?.conflicts || [];
  const sameDay=suggestions?.slots || [];
  const first=sameDay.slice(0,5);
  const extra=sameDay.slice(5);
  const next=suggestions?.nextAvailableDay || null;

  const conflictHtml=conflicts.length
    ? `<div class="smart-conflicts">${conflicts.map(c=>`
        <div class="smart-conflict-row">
          <span>${escapeHtml(c.title||c.taskId||"Task")}</span>
          <strong>${escapeHtml((c.start||"")+"-"+(c.end||""))}</strong>
        </div>`).join("")}</div>`
    : "";

  let slotHtml="";
  if(first.length){
    slotHtml=`
      <div class="smart-section-label">Available times ${escapeHtml(suggestions.requestedDateLabel||"that day")}</div>
      <div class="smart-slots">${first.map(smartRescheduleSlotMarkup).join("")}</div>
      ${extra.length?`<button class="smart-more-times" data-smart-more-times>More times</button>
        <div class="smart-slots smart-extra-slots" hidden>${extra.map(smartRescheduleSlotMarkup).join("")}</div>`:""}`;
  }else if(next?.slots?.length){
    slotHtml=`
      <div class="smart-no-slots">No suitable slot remains on ${escapeHtml(suggestions.requestedDateLabel||"that day")}.</div>
      <button class="smart-next-day" data-smart-next-day>Show next available day</button>
      <div class="smart-next-day-slots" hidden>
        <div class="smart-section-label">${escapeHtml(next.dateLabel||next.date||"Next available day")}</div>
        <div class="smart-slots">${next.slots.map(smartRescheduleSlotMarkup).join("")}</div>
      </div>`;
  }else{
    slotHtml=`<div class="smart-no-slots">No suitable slot was found in the next 7 days within the current 06:00-23:00 development window.</div>`;
  }

  const overlay=document.createElement("div");
  overlay.id="smartRescheduleOverlay";
  overlay.className="smart-reschedule-overlay";
  overlay.innerHTML=`
    <section class="smart-reschedule-sheet" role="dialog" aria-modal="true" aria-label="Smart reschedule suggestions">
      <div class="smart-sheet-handle"></div>
      <div class="smart-sheet-head">
        <div>
          <span class="kicker">SMART RESCHEDULE</span>
          <h2>Choose an available time</h2>
          <p>Your first choice conflicts with existing work.</p>
        </div>
        <button class="smart-close" data-smart-close aria-label="Close">×</button>
      </div>
      ${conflictHtml}
      ${slotHtml}
      <button class="smart-manual" data-smart-manual>Enter another time manually</button>
    </section>`;

  document.body.appendChild(overlay);

  const chooseSlot=async btn=>{
    const date=btn.dataset.smartSlotDate;
    const time=btn.dataset.smartSlotStart;
    const end=btn.dataset.smartSlotEnd;
    const preview={date,time,endTime:end,hasConflict:false,conflicts:[]};

    rescheduleActionInFlight=true;
    try{
      await confirmAndWriteReschedule(taskId,title,preview);
    }catch(err){
      await opsymNotice({title:"Reschedule failed",message:"Could not reschedule task:\n"+(err?.message||err)});
    }finally{
      rescheduleActionInFlight=false;
    }
  };

  overlay.querySelectorAll("[data-smart-slot-date]").forEach(btn=>{
    btn.addEventListener("click",()=>chooseSlot(btn));
  });

  overlay.querySelector("[data-smart-close]")?.addEventListener("click",closeSmartRescheduleSheet);

  overlay.querySelector("[data-smart-more-times]")?.addEventListener("click",e=>{
    const extraBox=overlay.querySelector(".smart-extra-slots");
    if(extraBox){
      extraBox.hidden=false;
      e.currentTarget.hidden=true;
    }
  });

  overlay.querySelector("[data-smart-next-day]")?.addEventListener("click",e=>{
    const box=overlay.querySelector(".smart-next-day-slots");
    if(box){
      box.hidden=false;
      e.currentTarget.hidden=true;
    }
  });

  overlay.querySelector("[data-smart-manual]")?.addEventListener("click",()=>{
    closeSmartRescheduleSheet();
    setTimeout(()=>rescheduleTaskById(taskId,title,conflictPreview?.date||"", ""),50);
  });

  overlay.addEventListener("click",e=>{
    if(e.target===overlay) closeSmartRescheduleSheet();
  });
}

function closeSmartRescheduleSheet(){
  document.getElementById("smartRescheduleOverlay")?.remove();
}

function detailValue(value,fallback="—"){
  const s=String(value==null?"":value).trim();
  return escapeHtml(s || fallback);
}

function taskDetailTabButton(key,label){
  return `<button class="chip ${activeTaskDetailTab===key?"active":""}" data-task-detail-tab="${key}">${label}</button>`;
}

function taskInfoRow(label,value){
  return `<div class="detail-list-row"><span>${escapeHtml(label)}</span><strong>${detailValue(value)}</strong></div>`;
}

function taskNotesMarkup(notes){
  if(!notes?.length){
    return `<div class="empty-card"><strong>No task notes yet</strong><small>Notes will appear here when this task has entries in 34_TASK_NOTES.</small></div>`;
  }
  return `<div class="detail-stack">${notes.map(n=>`<article class="note detail-note">
    <div class="detail-note-head"><strong>${detailValue(n.updatedAt || n.createdAt,"Note")}</strong>${n.pinned?`<span class="pill">${detailValue(n.pinned)}</span>`:""}</div>
    <p>${detailValue(n.note,"")}</p>
    ${n.createdBy?`<small>${detailValue(n.createdBy)}</small>`:""}
  </article>`).join("")}</div>`;
}

function taskHistoryMarkup(history){
  if(!history?.length){
    return `<div class="empty-card"><strong>No task history yet</strong><small>Events from 36_TASK_EVENT_LOG will appear here.</small></div>`;
  }
  return `<div class="detail-stack">${history.map(e=>`<article class="history-card">
    <div class="history-head"><strong>${detailValue(e.eventType,"Task event")}</strong><span>${detailValue(e.timestamp,"")}</span></div>
    ${e.details?`<p>${detailValue(e.details,"")}</p>`:""}
    ${(e.oldValue||e.newValue)?`<div class="history-change"><span>${detailValue(e.oldValue,"—")}</span><b>→</b><span>${detailValue(e.newValue,"—")}</span></div>`:""}
    <small>${[e.source,e.actor].filter(Boolean).map(escapeHtml).join(" · ")}</small>
  </article>`).join("")}</div>`;
}


function filteredLiveTasks(){
  if(!liveTasksLoaded) return null;
  const items=liveTasksData?.tasks || [];
  if(activeTaskFilter==="today") return items.filter(x=>x.isToday);
  if(activeTaskFilter==="unscheduled") return items.filter(x=>x.isUnscheduled);
  if(activeTaskFilter==="clashes") return items.filter(x=>x.hasClash);
  return items;
}

function taskFilterLabel(key){
  return ({all:"All open",today:"Today",unscheduled:"Unscheduled",clashes:"Clashes"})[key] || "All open";
}

function homeActionIcon(kind){
  return ({
    clash:"shuffle",
    overdue:"alert",
    unscheduled:"clock",
    risk:"alert",
    inbox:"inbox",
    today:"calendar",
    clear:"target"
  })[kind] || "task";
}

function runBackendSetupFromQuery(){
  const p=new URLSearchParams(location.search);
  if(p.get("resetapi")==="1"){
    clearMobileBridgeConfig();
    history.replaceState({},"",location.pathname+location.hash);
    setTimeout(()=>opsymNotice({title:"Bridge settings removed",message:"Op-Sym Mobile Bridge settings were removed from this phone."}),50);
    return;
  }
  if(p.get("setup")!=="1") return;

  setTimeout(async()=>{
    const endpoint=await opsymPrompt({title:"Op-Sym Mobile Bridge setup",message:"Paste the Apps Script Web App URL ending in /exec or /dev.",value:mobileBridge.endpoint||"",placeholder:"https://script.google.com/macros/s/.../dev",confirmLabel:"Save"});
    if(endpoint===null)return;
    try{
      saveMobileBridgeConfig(endpoint,"");
      history.replaceState({},"",location.pathname+"#home");
      const homeOk=await loadLiveHomeData(false);
      const todayOk=homeOk ? await loadLiveTodayData(false) : false;
      const tasksOk=todayOk ? await loadLiveTasksData(false) : false;
      await opsymNotice({title:homeOk&&todayOk&&tasksOk?"Connected":"Connection needs attention",message:homeOk&&todayOk&&tasksOk?"Home, Today and Tasks are now reading live Op-Sym data.":"Settings were saved, but a live-data test failed. Check the bridge deployment and version."});
    }catch(err){
      await opsymNotice({title:"Setup not saved",message:"Setup was not saved:\n"+err.message});
    }
  },120);
}

function icon(name){return ICONS[name]||ICONS.note}
function isLandscape(){return matchMedia("(orientation: landscape) and (max-height: 720px)").matches}
function nowText(){return new Intl.DateTimeFormat(undefined,{hour:"numeric",minute:"2-digit"}).format(new Date())}
function greeting(){
  const h=new Date().getHours();
  if(h<11)return ["GOOD MORNING","Make it happen today.","A calmer mind. A clearer plan. A more productive you."];
  if(h<17)return ["GOOD AFTERNOON","Keep the day moving.","Know what is next, protect focus and adjust before pressure becomes a clash."];
  if(h<21)return ["GOOD EVENING","Close the day with clarity.","Close open loops, protect tomorrow and finish with a clear head."];
  return ["GOOD NIGHT","Clear the mind. Protect tomorrow.","Capture what matters now so tomorrow starts clean."];
}

function actionRow(iconName,title,sub,warn=false,route=""){
  return `<button class="action-row ${warn?"warn":""}" ${route?`data-route="${route}"`:""}>
    <span class="row-icon">${icon(iconName)}</span>
    <span class="row-copy"><strong>${title}</strong><small>${sub}</small></span>
    <span class="row-arrow">›</span>
  </button>`;
}

function timelineRows(){
  const items=(liveTodayLoaded ? (liveTodayData?.items || []) : data.today);
  if(!items.length){
    return `<div class="empty-card"><strong>No scheduled items today</strong><small>Your Today plan is currently clear.</small></div>`;
  }
  return items.map(x=>`<button class="timeline-row" data-route="task-detail" data-task-id="${escapeHtml(x.taskId || "")}">
    <span class="time">${escapeHtml(x.time || "ANY")}<br>${escapeHtml(x.end || "")}</span><span class="line"></span>
    <span><strong>${escapeHtml(x.title)}</strong><small>${escapeHtml(x.meta || "Op-Sym task")}</small></span><span class="row-arrow">›</span>
  </button>`).join("");
}
function pendingTaskState_(t){
  const age=Math.max(0,Date.now()-Number(t.pendingStartedAt||Date.now()));
  if(age<2500)return {pill:"Saving…",detail:"Writing the task securely…"};
  if(age<8000)return {pill:"Confirming…",detail:"Checking the backend confirmation…"};
  return {pill:"Verifying…",detail:"The request was sent. Op-Sym is verifying the backend record."};
}

function taskCards(){
  const liveItems=filteredLiveTasks();
  const items=liveItems===null ? data.tasks : liveItems;

  if(!items.length){
    const labels={
      all:"No open tasks",
      today:"No open tasks scheduled today",
      unscheduled:"No unscheduled tasks",
      clashes:"No tasks with active clashes"
    };
    return `<div class="empty-card"><strong>${labels[activeTaskFilter] || labels.all}</strong><small>This view is currently clear.</small></div>`;
  }

  return items.map(t=>{const ps=t.pending?pendingTaskState_(t):null;return `<article class="task-card ${t.pending?"is-pending":""}" data-pending-request="${escapeHtml(t.pendingRequestId||"")}">
    <div class="task-top"><div><h3>${escapeHtml(t.title)}</h3><div class="meta">${escapeHtml(t.meta || "")}</div></div><span class="pill">${escapeHtml(t.pending?ps.pill:(t.status || "Open"))}</span></div>
    ${t.pending?`<div class="pending-inline"><span class="opsym-operation-spinner" aria-hidden="true"></span><span>${escapeHtml(ps.detail)}</span></div>`:t.saveFailed?`<div class="task-actions"><button type="button" data-retry-failed-task="${escapeHtml(t.pendingRequestId||"")}">Retry</button><button type="button" data-dismiss-failed-task="${escapeHtml(t.pendingRequestId||"")}">Dismiss</button></div>`:`<div class="task-actions"><button class="done" data-complete-task="${escapeHtml(t.taskId || "")}" data-task-title="${escapeHtml(t.title || "")}">Complete</button><button data-route="task-detail" data-task-id="${escapeHtml(t.taskId || "")}">Details</button></div>`}
  </article>`}).join("");
}



function split(left,right,cls=""){return `<div class="landscape-split ${cls}"><div class="landscape-left">${left}</div><div class="landscape-right">${right}</div></div>`}

async function loadLiveInboxData(force=false){
  if(!mobileBridge.endpoint)return false;if(liveInboxLoading||(liveInboxLoaded&&!force))return liveInboxData;liveInboxLoading=true;liveInboxError=null;
  try{const p={action:'inbox'};if(mobileBridge.key)p.key=mobileBridge.key;const x=await jsonpRequest(mobileBridge.endpoint,p,12000,'Inbox data');if(!x||x.ok!==true)throw new Error(x?.error||'Could not load Inbox.');liveInboxData=x.data||{summary:{open:0,total:0},items:[]};liveInboxLoaded=true;return liveInboxData;}catch(err){liveInboxError=err;throw err;}finally{liveInboxLoading=false;}
}
async function loadLiveCommitmentsData(force=false){
  if(!mobileBridge.endpoint)return false;if(liveCommitmentsLoading||(liveCommitmentsLoaded&&!force))return liveCommitmentsData;liveCommitmentsLoading=true;liveCommitmentsError=null;
  try{const p={action:'commitments'};if(mobileBridge.key)p.key=mobileBridge.key;const x=await jsonpRequest(mobileBridge.endpoint,p,12000,'Commitments data');if(!x||x.ok!==true)throw new Error(x?.error||'Could not load Commitments.');liveCommitmentsData=x.data||{summary:{open:0,waiting:0,closure:0,overdue:0},items:[]};liveCommitmentsLoaded=true;return liveCommitmentsData;}catch(err){liveCommitmentsError=err;throw err;}finally{liveCommitmentsLoading=false;}
}
function inboxRows(){const items=liveInboxData?.items||[];if(!items.length)return `<div class="empty-card"><strong>Inbox clear</strong></div>`;return items.map(x=>`<article class="inbox-row ${x.pending?"is-pending":""}"><div class="inbox-topline"><span class="source">${escapeHtml(captureSourceLabel(x.sourceType||x.source||"OTHER"))}</span><span class="commitment-pill">${escapeHtml(x.commitmentType||"DO")}</span></div><h3>${escapeHtml(x.title||x.rawText)}</h3><p>${escapeHtml(x.rawText||"")}</p><div class="meta">${escapeHtml([x.personName,x.locationName,x.date,x.time].filter(Boolean).join(" · "))}</div>${x.pending?`<div class="pending-inline"><span class="opsym-operation-spinner" aria-hidden="true"></span><span>Saving securely…</span></div>`:`<div class="inbox-actions one-action"><button class="primary-btn compact inbox-clarify-btn" type="button" aria-label="Review and classify ${escapeHtml(x.inboxId)}" data-inbox-clarify="${escapeHtml(x.inboxId)}"><span>Review &amp; classify</span></button></div>`}</article>`).join("");}
function commitmentRows(){const items=liveCommitmentsData?.items||[],filtered=activeCommitmentFilter==="ALL"?items:items.filter(x=>String(x.type||"DO").toUpperCase()===activeCommitmentFilter);if(!filtered.length)return `<div class="empty-card"><strong>No ${escapeHtml(activeCommitmentFilter==="ALL"?"open":activeCommitmentFilter)} commitments</strong></div>`;return filtered.map(x=>`<button type="button" class="commitment-card" data-open-commitment="${escapeHtml(x.commitmentId||"")}" aria-label="Open commitment ${escapeHtml(x.title||x.commitmentId)}"><div class="commitment-card-main"><div class="state">${escapeHtml(x.type||"DO")}</div><h3>${escapeHtml(x.title||x.commitmentId)}</h3><p>${escapeHtml([x.direction?`Direction: ${x.direction}`:"",x.personName||"",x.dueDate?`Review ${x.dueDate}`:""].filter(Boolean).join(" · "))}</p></div><span class="row-arrow" aria-hidden="true">›</span></button>`).join("");}
function getCommitmentById(id){return (liveCommitmentsData?.items||[]).find(x=>String(x.commitmentId||"")===String(id||""))||null;}
function commitmentDetail(){
  const c=getCommitmentById(selectedCommitmentId);
  if(!c){return `<section class="page"><section class="intro champagne"><span class="eyebrow">COMMITMENT</span><h1 class="page-title">Commitment unavailable</h1><p class="page-subtitle">Refresh Commitments and try again.</p><button class="secondary-btn" data-route="commitments">Back to commitments</button></section></section>`;}
  const row=(label,value)=>value?`<div class="detail-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`:"";
  const sourceText=c.rawText||c.notes||"";
  const left=intro(String(c.type||"DO").toUpperCase(),c.title||c.commitmentId,`${c.direction?`Direction: ${c.direction}`:"Open commitment"}${c.personName?` · ${c.personName}`:""}`,`<button class="secondary-btn" type="button" data-route="commitments">Back to commitments</button>`,`champagne`);
  const right=`<section class="section white commitment-detail-panel"><div class="section-head"><div><span class="kicker">${escapeHtml(c.commitmentId||"")}</span><h2>Commitment detail</h2><p>Open the record directly from any CICE class.</p></div></div><div class="detail-stack">${row("Type",c.type)}${row("Direction",c.direction)}${row("Person",c.personName)}${row("Due / review date",c.dueDate)}${row("Status",c.status)}${row("Source",captureSourceLabel(c.sourceType||c.source||"OTHER"))}${row("Source reference",c.sourceRef)}${row("Source link",c.sourceUrl)}${row("Signal",c.signalId)}${row("Source Inbox",c.sourceInboxId)}${row("Object UUID",c.objectUuid)}</div>${sourceText?`<div class="detail-note"><span>Original context</span><p>${escapeHtml(sourceText)}</p></div>`:""}<div class="form-actions commitment-detail-actions"><button class="primary-btn" type="button" data-commitment-followup="${escapeHtml(c.commitmentId||"")}">${String(c.type||"").toUpperCase()==="WAIT"?"Create follow-up task":"Create related task"}</button></div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function home(){
  const [g,title,sub]=greeting();
  const hd=liveHomeData;

  const nextTime=escapeHtml(hd?.next?.time || "17:30");
  const nextTitle=escapeHtml(hd?.next?.title || "Patient consultation");
  const attentionPrimary=escapeHtml(hd?.attention?.primary || "2 clashes");
  const attentionSecondary=escapeHtml(hd?.attention?.secondary || "Schedule conflicts");

  const hero=`<section class="home-hero">
    <div class="hero-top">
      <div><span class="eyebrow">${g}</span><h1>${title}</h1><p>${sub}</p></div>
      <div class="hero-status-stack">
        <span class="now-chip">NOW · ${nowText()}</span>
        <span class="home-freshness" aria-live="polite">${liveHomeLastUpdatedAt?`Updated ${Math.max(0,Math.round((Date.now()-liveHomeLastUpdatedAt)/1000))<10?"just now":Math.round((Date.now()-liveHomeLastUpdatedAt)/60000)+" min ago"}`:"Refreshing…"}</span>
        <button class="hero-mode-chip" id="heroModeButton" type="button" aria-label="Planning mode">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.7 2.9 8.2 7 10 4.1-1.8 7-5.3 7-10V6l-7-3Z"/><path d="m9.2 12 1.8 1.8 3.8-4"/></svg>
          <span>${escapeHtml(planningMode)}</span>
          <b>⌄</b>
        </button>
      </div>
    </div>
    <div class="intel-grid">
      <button class="intel-card" data-route="today" aria-label="Next: ${nextTime} ${nextTitle}">
        <span class="intel-copy">
          <small>NEXT</small>
          <strong>${nextTime}</strong>
          <em>${nextTitle}</em>
        </span>
      </button>
      <button class="intel-card attention" data-route="tasks" aria-label="Attention: ${attentionPrimary}">
        <span class="intel-copy">
          <small>ATTENTION</small>
          <strong>${attentionPrimary}</strong>
          <em>${attentionSecondary}</em>
        </span>
      </button>
    </div>
  </section>`;

  const defaultMatters=[
    {kind:"clash",title:"Resolve 2 schedule clashes",subtitle:"Protect the next commitment before pressure becomes disruptive.",warn:true,route:"tasks"},
    {kind:"unscheduled",title:"3 unscheduled tasks",subtitle:"Place the most important open work into a realistic time.",warn:false,route:"tasks"},
    {kind:"inbox",title:"Review 3 Inbox items",subtitle:"Clarify captured work while the context is still fresh.",warn:false,route:"inbox"}
  ];
  const matters=(hd?.matters?.length ? hd.matters : defaultMatters).slice(0,3);

  const context=`<section class="section white"><div class="section-head"><div><span class="kicker">NOW</span><h2>What matters now</h2></div></div><div class="action-list">
    ${matters.map(item=>actionRow(
      homeActionIcon(item.kind),
      escapeHtml(item.title),
      escapeHtml(item.subtitle),
      !!item.warn,
      item.route || "tasks"
    )).join("")}
  </div></section>`;
  return `<section class="page">${isLandscape()?`<div class="home-landscape">${hero}${context}</div>`:hero+context}</section>`;
}

function intro(type,title,sub,button="",tone=""){
  return `<section class="intro ${tone}"><span class="eyebrow">${type}</span><h1 class="page-title">${title}</h1><p class="page-subtitle">${sub}</p>${button}</section>`;
}
function today(){
  const td=liveTodayData;
  const dayLabel=escapeHtml(td?.dayLabel || "WEDNESDAY");
  const scheduled=td?.summary?.scheduledItems ?? 4;
  const conflicts=td?.summary?.conflicts ?? 2;
  const summary=`${scheduled} scheduled ${scheduled===1?"item":"items"} · ${conflicts} planning ${conflicts===1?"conflict":"conflicts"}`;

  const left=intro(
    "TODAY",
    "Own your day.",
    "See what is next, what needs attention and what can move.",
    `<button class="primary-btn" data-route="capture" data-capture-mode="today">Add to today</button>`,
    "blue"
  );
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">${dayLabel}</span><h2>Today's plan</h2><p>${summary}</p></div><button class="ghost-btn" data-find-time>Find time</button></div><div class="timeline">${timelineRows()}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function tasks(){
  const summary=liveTasksData?.summary;
  const openCount=summary?.open ?? data.tasks.length;
  const left=intro(
    "TASKS",
    "Turn work into progress.",
    "Focus on the next useful action instead of carrying the whole list in your head.",
    `<button class="primary-btn" data-route="capture" data-capture-mode="task">New task</button>`
  );

  const filterButton=(key,label)=>`<button class="chip ${activeTaskFilter===key?"active":""}" data-task-filter="${key}">${label}</button>`;

  const right=`<section class="section">
    <div class="section-head"><div><span class="kicker">OPEN WORK</span><h2>Tasks</h2><p>${openCount} open ${openCount===1?"task":"tasks"}</p></div></div>
    <div class="chip-row">
      ${filterButton("all","All open")}
      ${filterButton("today","Today")}
      ${filterButton("unscheduled","Unscheduled")}
      ${filterButton("clashes","Clashes")}
    </div>
    <div class="list" style="margin-top:12px">${taskCards()}</div>
  </section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function inbox(){
  const count=liveInboxData?.summary?.open??0;
  const left=intro('INBOX','Capture first. Clarify next.','Everything captured here stays as an Inbox object until you decide what it becomes.',`<button class="primary-btn" data-route="capture" data-capture-mode="inbox">Capture something</button>`,'teal');
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">CAPTURED</span><h2>Inbox</h2><p>${count} ${count===1?'item':'items'} waiting for clarification</p></div></div><div class="list">${inboxRows()}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function week(){
  if(mobileBridge.endpoint && (!liveTasksLoaded || !liveCommitmentsLoaded)){
    setTimeout(()=>ensurePlanningData_().then(()=>{if(currentRoute()==="week")render("week",true)}),0);
  }
  const dates=weekDates_();
  const todayKey=ymdLocal_(new Date());
  const stats=dates.map(d=>({date:d,...planningPressureForDate_(d)}));
  const strip=stats.map(x=>`<button class="day ${ymdLocal_(x.date)===todayKey?"today":""}" type="button" data-week-day="${ymdLocal_(x.date)}"><b>${escapeHtml(formatDayLabel_(x.date))}</b><span>${x.date.getDate()} ${escapeHtml(formatMonthLabel_(x.date,true).split(" ")[0])}</span><em>${x.total} item${x.total===1?"":"s"}${x.clash?` · ${x.clash} clash`:""}</em></button>`).join("");
  const highest=stats.slice().sort((a,b)=>(b.total+b.clash*2)-(a.total+a.clash*2))[0];
  const light=stats.slice().sort((a,b)=>(a.total+a.clash*2)-(b.total+b.clash*2))[0];
  const summary=highest?`${formatDayLabel_(highest.date)} currently has the most planning pressure.`:"No scheduled work is loaded yet.";
  const left=intro("WEEK","Shape the week before it shapes you.","Protect important work and see pressure before it becomes a clash.",`<button class="primary-btn" data-plan-week>Plan my week</button>`);
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">THIS WEEK</span><h2>Weekly plan</h2><p>${escapeHtml(summary)}</p></div></div><div class="week-strip">${strip}</div><div class="list" style="margin-top:14px">
    ${highest?actionRow("alert",`${formatDayLabel_(highest.date)} needs the most attention`,`${highest.total} scheduled objects${highest.clash?` · ${highest.clash} active clash${highest.clash===1?"":"es"}`:""}.`,!!highest.clash,"tasks"):""}
    ${light?actionRow("calendar",`${formatDayLabel_(light.date)} is currently lightest`,`${light.total} scheduled object${light.total===1?"":"s"}.`,false,"tasks"):""}
  </div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function month(){
  if(mobileBridge.endpoint && (!liveTasksLoaded || !liveCommitmentsLoaded)){
    setTimeout(()=>ensurePlanningData_().then(()=>{if(currentRoute()==="month")render("month",true)}),0);
  }
  const now=new Date();
  const weeks=monthWeeks_(now);
  const left=intro("MONTH","Keep the month in perspective.","Major commitments, deadlines and workload generated from live Op-Sym records.");
  const cards=weeks.map(w=>`<article class="week-block"><div class="section-head"><div><h3>Week ${w.weekNo}</h3><p>${w.count} activit${w.count===1?"y":"ies"}</p></div></div>${w.items.slice(0,4).map(r=>`<div class="mini-row"><span>${escapeHtml(r.title)}</span><small>${r.date?`${r.date.getDate()} ${escapeHtml(formatMonthLabel_(r.date,true).split(" ")[0])}`:""}</small></div>`).join("") || `<div class="mini-row"><span>No scheduled items</span><small>Clear</small></div>`}</article>`).join("");
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">${escapeHtml(formatMonthLabel_(now).toUpperCase())}</span><h2>Weeks</h2></div></div><div class="card-grid">${cards}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function year(){
  if(mobileBridge.endpoint && (!liveTasksLoaded || !liveCommitmentsLoaded)){
    setTimeout(()=>ensurePlanningData_().then(()=>{if(currentRoute()==="year")render("year",true)}),0);
  }
  const now=new Date(), year=now.getFullYear(), stats=yearMonthStats_(year);
  const left=intro("YEAR","Keep direction visible.","See milestones and workload across the year from your live Op-Sym records.");
  const cards=stats.map(x=>{
    const d=new Date(year,x.month,1);
    const current=x.month===now.getMonth();
    return `<article class="month-card ${current?"current":""}"><small>${escapeHtml(formatMonthLabel_(d,true).split(" ")[0].toUpperCase())}</small><strong>${x.count} item${x.count===1?"":"s"}</strong><span>${x.clashes?`${x.clashes} clash${x.clashes===1?"":"es"}`:x.count?"Scheduled work":"No scheduled work"}</span></article>`;
  }).join("");
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">${year}</span><h2>Year at a glance</h2></div></div><div class="month-grid">${cards}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function commitments(){const classes=["ALL","DO","MEET","WAIT","DELEGATE","DECIDE"],left=intro("COMMITMENTS","Close the loops.","Review open loops by CICE class.",`<button class="primary-btn" data-route="capture" data-capture-mode="commitment">Capture commitment</button>`,"champagne"),right=`<section class="section"><div class="section-head"><div><span class="kicker">CICE CLASSES</span><h2>Commitments</h2><p>DO · MEET · WAIT · DELEGATE · DECIDE</p></div></div><div class="commitment-filter-strip">${classes.map(c=>`<button type="button" class="commitment-filter ${activeCommitmentFilter===c?"active":""}" data-commitment-filter="${c}">${c}</button>`).join("")}</div><div class="list">${commitmentRows()}</div></section>`;return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;}
function analytics(){
  if(mobileBridge.endpoint && (!liveTasksLoaded || !liveCommitmentsLoaded)){
    setTimeout(()=>ensurePlanningData_().then(()=>{if(currentRoute()==="analytics")render("analytics",true,{suppressRefresh:true})}),0);
  }
  const tasks=liveTaskArray_();
  const commitments=liveCommitmentArray_();
  const clashes=tasks.filter(t=>t.hasClash).length;
  const unscheduled=tasks.filter(t=>t.isUnscheduled).length;
  const today=tasks.filter(t=>t.isToday).length;
  const waiting=commitments.filter(c=>String(c.type||c.commitmentType||"").toUpperCase()==="WAIT").length;
  const next7=weekDates_().map(d=>planningPressureForDate_(d));
  const pressure=next7.slice().sort((a,b)=>(b.total+b.clash*2)-(a.total+a.clash*2))[0];
  const max=Math.max(1,tasks.length);
  const left=intro("ANALYTICS","See the pattern, not just the list.","Live planning signals calculated from current Op-Sym data.",`<button class="secondary-btn" data-refresh-insights>Refresh insights</button>`);
  const right=`<section class="section"><div class="card-grid">
    <article class="insight"><span class="kicker">SCHEDULE PRESSURE</span><div class="number-row"><strong>${clashes}</strong><span>active clash${clashes===1?"":"es"}</span></div><p>${pressure?`${escapeHtml(formatDayLabel_(pressure.date))} has the highest next-seven-day load (${pressure.total} scheduled).`:"No scheduled pressure detected."}</p><div class="bar"><span style="width:${Math.min(100,Math.round(clashes/max*100))}%"></span></div></article>
    <article class="insight"><span class="kicker">UNSCHEDULED WORK</span><div class="number-row"><strong>${unscheduled}</strong><span>task${unscheduled===1?"":"s"}</span></div><p>${today} open task${today===1?" is":"s are"} scheduled today.</p><div class="bar"><span style="width:${Math.min(100,Math.round(unscheduled/max*100))}%"></span></div></article>
    <article class="insight"><span class="kicker">WAITING-FOR</span><div class="number-row"><strong>${waiting}</strong><span>open WAIT commitment${waiting===1?"":"s"}</span></div><p>${commitments.length} open commitment${commitments.length===1?" is":"s are"} currently visible to CICE.</p></article>
  </div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function more(){
  const items=[
    ["week","week","Week","Plan the next seven days."],
    ["month","month","Month","See commitments grouped by week."],
    ["calendar","year","Year","Keep milestones visible."],
    ["inbox","inbox","Inbox","Clarify captured work."],
    ["target","commitments","Commitments","Close waiting and open loops."],
    ["chart","analytics","Analytics","See actionable planning patterns."],
    ["settings","settings","Settings","Preferences and interface."],
  ];
  return `<section class="page"><section class="intro"><span class="eyebrow">MORE</span><h1 class="page-title">Everything else.</h1><p class="page-subtitle">Less-used areas stay one tap away without crowding everyday navigation.</p></section><section class="section"><div class="more-grid">${items.map(i=>`<button class="more-card" data-route="${i[1]}">${icon(i[0])}<strong>${i[2]}</strong><small>${i[3]}</small></button>`).join("")}</div></section></section>`;
}
async function showPwaDiagnostics(){
  const standalone=!!(window.matchMedia?.("(display-mode: standalone)")?.matches || window.navigator.standalone===true);
  const manifestLink=document.querySelector('link[rel="manifest"]')?.href||"Not linked";
  const swSupported="serviceWorker" in navigator;
  let registration=null;
  try{ if(swSupported) registration=await navigator.serviceWorker.getRegistration("./"); }catch(_){ registration=null; }
  const controlled=!!navigator.serviceWorker?.controller;
  const q=new URLSearchParams(location.search);
  const shareLaunch=q.get("share_target")==="1" || q.has("text") || q.has("url") || q.has("title");
  let manifestShareTarget="UNKNOWN";
  try{const mr=await fetch("./manifest.webmanifest?v=1902",{cache:"no-store"});const mj=await mr.json();manifestShareTarget=mj?.share_target?.action?"DECLARED":"MISSING";}catch(_){manifestShareTarget="UNREADABLE";}
  const lines=[
    `Installed/standalone mode: ${standalone?"YES":"NO"}`,
    `Service worker supported: ${swSupported?"YES":"NO"}`,
    `Service worker registered: ${registration?"YES":"NO"}`,
    `Page controlled by worker: ${controlled?"YES":"NO"}`,
    `Manifest share target: ${manifestShareTarget}`,
    `Share payload detected on this launch: ${shareLaunch?"YES":"NO"}`,
    `Manifest: ${manifestLink}`
  ];
  await opsymNotice({title:"PWA & sharing diagnostics",message:lines.join("\n")});
}

async function refreshDiagnosticBridgeVersion_(){
  if(!mobileBridge.endpoint){
    updateOpsymDiag_({bridgeVersion:"Not configured"});
    return;
  }
  try{
    const p={action:"version",_ts:String(Date.now())};
    if(mobileBridge.key)p.key=mobileBridge.key;
    const payload=await jsonpRequest(mobileBridge.endpoint,p,8000,"Bridge version");
    updateOpsymDiag_({bridgeVersion:String(payload?.data?.version||payload?.version||"Unknown")});
  }catch(e){
    updateOpsymDiag_({bridgeVersion:"Error: "+String(e?.message||e)});
  }
}
function prettyDiagResponse_(){
  if(!opsymDiag.lastTaskResponse)return "No task response recorded yet.";
  try{return JSON.stringify(opsymDiag.lastTaskResponse,null,2);}catch(_){return String(opsymDiag.lastTaskResponse);}
}
function diagnosticsPanel_(){
  return `
  <details class="card opsym-diagnostic-card opsym-advanced-diagnostics">
    <summary><strong>Advanced diagnostics</strong><span>Technical troubleshooting information</span></summary>
    <div class="diag-grid" style="margin-top:12px">
      <div><span>Last request ID</span><strong>${escapeHtml(opsymDiag.lastTaskRequestId||"—")}</strong></div>
      <div><span>confirmPendingTask()</span><strong>${opsymDiag.confirmPendingTaskRan?"YES":"NO"}</strong></div>
      <div><span>Confirmed Task ID</span><strong>${escapeHtml(opsymDiag.lastConfirmedTaskId||"—")}</strong></div>
      <div><span>Last task error</span><strong>${escapeHtml(opsymDiag.lastTaskError||"None")}</strong></div>
      <div><span>Last attempted route</span><strong>${escapeHtml(opsymDiag.lastAttemptedRoute||"—")}</strong></div>
      <div><span>Last successful route</span><strong>${escapeHtml(opsymDiag.lastSuccessfulRoute||"—")}</strong></div>
      <div><span>Navigation error</span><strong>${escapeHtml(opsymDiag.lastNavigationError||"None")}</strong></div>
      <div><span>Navigation recovered at</span><strong>${escapeHtml(opsymDiag.navigationRecoveredAt||"—")}</strong></div>
    </div>
    <details class="diag-response">
      <summary>Last navigation error stack</summary>
      <pre>${escapeHtml(opsymDiag.lastNavigationStack||"No navigation stack recorded.")}</pre>
    </details>
    <details class="diag-response">
      <summary>Last backend task response</summary>
      <pre>${escapeHtml(prettyDiagResponse_())}</pre>
    </details>
    <div class="clarify-primary-actions">
      <button class="ghost-btn" type="button" id="diagCopyBtn">Copy diagnostics</button>
      <button class="ghost-btn" type="button" data-pwa-diagnostics>Run PWA/share diagnostics</button>
    </div>
  </details>`;
}

function bridgeSettingsMarkup_(){
  const configured=!!mobileBridge.endpoint;
  return `<section class="section white opsym-system-settings">
    <div class="section-head"><div><span class="kicker">SYSTEM</span><h2>Connection & version</h2><p>Manage the Op-Sym Mobile Bridge from Settings.</p></div></div>

    <div class="new-task-form">
      <label class="form-field full">
        <span>Mobile Bridge / Apps Script Web App URL</span>
        <input id="bridgeEndpointInput" type="url" autocomplete="off" spellcheck="false"
          placeholder="https://script.google.com/macros/s/.../exec"
          value="${escapeHtml(mobileBridge.endpoint||"")}">
      </label>
      <div class="form-actions opsym-bridge-actions">
        <button class="primary-btn" type="button" id="bridgeSaveTestBtn">Save & test</button>
        <button class="ghost-btn" type="button" id="bridgeClearBtn" ${configured?"":"disabled"}>Clear</button>
      </div>
    </div>

    <div class="diag-grid opsym-about-grid">
      <div><span>UI version</span><strong>${escapeHtml(OPSYM_UI_VERSION)}</strong></div>
      <div><span>Mobile Bridge</span><strong id="diagBridgeVersion">${escapeHtml(opsymDiag.bridgeVersion||"Checking...")}</strong></div>
      <div><span>Native wrapper</span><strong>${escapeHtml(OPSYM_NATIVE_WRAPPER_VERSION)}</strong></div>
      <div><span>Connection</span><strong>${configured?"Configured":"Not configured"}</strong></div>
    </div>
  </section>`;
}

function settings(){
  setTimeout(()=>refreshDiagnosticBridgeVersion_().then(()=>{
    const el=document.getElementById("diagBridgeVersion");
    if(el)el.textContent=opsymDiag.bridgeVersion||"Unknown";
  }).catch(()=>{}),0);

  const row=(ic,title,sub,end,action)=>`<button class="setting-row" type="button" ${action?`data-settings-action="${action}"`:""}><span class="row-icon">${icon(ic)}</span><span class="row-copy"><strong>${title}</strong><small>${sub}</small></span>${end}</button>`;
  const right=`<section class="section"><div class="settings-group">
    ${row("clock","Region & time",`${escapeHtml(opsymPreferences.timezone)} · ${escapeHtml(opsymPreferences.timeFormat)}-hour clock`, `<span class="setting-value">${escapeHtml(opsymPreferences.locale)}</span>`,"region-time")}
    ${row("calendar","Scheduling",`${escapeHtml(opsymPreferences.workStart)}-${escapeHtml(opsymPreferences.workEnd)} · ${opsymPreferences.minGapMin} min gap`, `<span class="setting-value">Edit</span>`,"scheduling")}
    ${row("alert","Notifications","Foreground alerts and notification readiness",`<span class="toggle ${opsymPreferences.foregroundNotifications?"on":""}"></span>`,"notifications")}
    ${row("target","CICE","Waiting-for review and closure prompts",`<span class="toggle ${opsymPreferences.ciceWaitingReview?"on":""}"></span>`,"cice")}
    ${row("monitor","Interface","Responsive mobile interface",`<span class="setting-value">${opsymPreferences.compactMode?"Compact":"Comfortable"}</span>`,"interface")}
  </div></section>`;
  const left=intro("SETTINGS","Make Op-Sym work your way.","Preferences should support your workflow without becoming another task.");
  return `<section class="page">${isLandscape()?split(left,right):left+right}${bridgeSettingsMarkup_()}${diagnosticsPanel_()}</section>`;
}

function capture(){
  const taskMode=captureEntryMode==="task" || captureEntryMode==="today" || captureEntryMode==="interpreted";

  if(taskMode){
    const addToday=captureEntryMode==="today";
    const interpreted=captureEntryMode==="interpreted" && interpretedCaptureDraft;
    const draft=interpretedCaptureDraft || {};
    const todayIso=new Date().toLocaleDateString("en-CA");

    const left=`<section class="capture-hero">
      <span class="eyebrow">${interpreted?"INTERPRETED CAPTURE":(addToday?"ADD TO TODAY":"NEW TASK")}</span>
      <h1 class="page-title">${interpreted?"Review the proposed task.":(addToday?"Add something to today.":"Create a clear next action.")}</h1>
      <p class="page-subtitle">${interpreted
        ?"Correct anything Op-Sym misunderstood, then create only when the proposal is right."
        :(addToday
          ?"Create a real task in Op-Sym and place it on today's plan."
          :"Create a real task in 02_MASTER_TASKS. Schedule it now or leave it open and unscheduled.")}</p>
    </section>`;

    const right=`<section class="section white">
      <form id="newTaskForm" class="new-task-form">
        <label class="form-field full">
          <span>Task title *</span>
          <input id="newTaskTitle" type="text" maxlength="180" placeholder="e.g. Review Op-Sym v1.7" value="${escapeHtml(interpreted?(draft.title||""):"")}" required>
        </label>

        <div class="form-grid">
          <label class="form-field">
            <span>Role</span>
            <input id="newTaskRole" type="text" maxlength="80" placeholder="Innovation" value="${escapeHtml(interpreted?(draft.role||""):"")}">
          </label>
          <label class="form-field">
            <span>Project</span>
            <input id="newTaskProject" type="text" maxlength="100" placeholder="Op-Sym" value="${escapeHtml(interpreted?(draft.project||""):"")}">
          </label>
          <label class="form-field">
            <span>Priority</span>
            <select id="newTaskPriority">
              <option ${(!interpreted || draft.priority==="Medium")?"selected":""}>Medium</option>
              <option ${interpreted && draft.priority==="High"?"selected":""}>High</option>
              <option ${interpreted && draft.priority==="Low"?"selected":""}>Low</option>
              <option ${interpreted && draft.priority==="Urgent"?"selected":""}>Urgent</option>
            </select>
          </label>
          <label class="form-field">
            <span>Planned hours</span>
            <input id="newTaskHours" type="number" min="0.25" step="0.25" placeholder="1" value="${escapeHtml(interpreted && draft.plannedHours ? String(draft.plannedHours) : "")}">
          </label>
          <label class="form-field">
            <span>Scheduled date</span>
            <input id="newTaskDate" type="date" value="${addToday?todayIso:(interpreted?(draft.date||""):"")}" ${addToday?"readonly":""}>
          </label>
          <label class="form-field">
            <span>Start time</span>
            <input id="newTaskTime" type="time" value="${escapeHtml(interpreted?(draft.time||""):"")}">
          </label>
          <label class="form-field full">
            <span>Location</span>
            <input id="newTaskLocation" type="text" maxlength="120" placeholder="Optional" value="${escapeHtml(interpreted?(draft.location||""):"")}">
          </label>
          <label class="form-field full">
            <span>Description</span>
            <textarea id="newTaskDescription" rows="4" maxlength="1200" placeholder="Optional notes about the task">${escapeHtml(interpreted?(draft.description||""):"")}</textarea>
          </label>
        </div>

        <div class="create-task-note">
          ${interpreted
            ?"This proposal came from natural-language interpretation. Review every field before creating it."
            :(addToday
              ?"Today is preselected. If you leave Start time blank, the item will appear in Today as an ANY-time task."
              :"Leave Scheduled date blank if you want this to remain an open unscheduled task.")}
        </div>

        <div class="capture-primary">
          <button type="submit" class="interpret">Create task</button>
          <button type="button" class="inbox" data-capture-cancel>Cancel</button>
        </div>
      </form>
    </section>`;

    return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
  }

  const isCommitment=captureEntryMode==="commitment";
  const left=`<section class="capture-hero"><span class="eyebrow">${isCommitment?"COMMITMENT CAPTURE":"INBOX CAPTURE"}</span><h1 class="page-title">${isCommitment?"Capture the open loop.":"Get it out of your head."}</h1><p class="page-subtitle">Capture first. Op-Sym will interpret and classify it, but nothing becomes a task until you decide.</p></section>`;
  const shared=pendingSharedCapture;
  if(shared) applyPendingSharedCapture();
  const sourceType=normalizeCaptureSourceType(captureSourceDraft.sourceType||"MANUAL");
  const prefill=shared?.rawText||"";
  const sourceOptions=OPSYM_CAPTURE_SOURCES.map(v=>`<option value="${v}" ${sourceType===v?"selected":""}>${escapeHtml(captureSourceLabel(v))}</option>`).join("");
  const sourceNeedsConfirmation=shared && captureSourceNeedsConfirmation_(sourceType);
  const sourceBanner=shared?`<div class="share-intake-banner"><strong>Shared into Op-Sym</strong><span>${sourceNeedsConfirmation
    ? "Android did not provide the originating app name. Please confirm the Source below before capturing."
    : `${escapeHtml(captureSourceLabel(sourceType))} content is ready for review.`} Nothing will be created until you press Capture to Inbox.</span></div>`:"";
  const right=`<section class="section white"><form id="inboxCaptureForm" class="new-task-form">${sourceBanner}<label class="form-field full"><span>What do you need to remember?</span><textarea id="inboxCaptureText" rows="6" placeholder="e.g. Waiting for Gilbert to send the revised architecture next Tuesday">${escapeHtml(prefill)}</textarea></label><div class="capture-source-grid"><label class="form-field"><span>Source</span><select id="captureSourceType">${sourceOptions}</select></label><label class="form-field"><span>Source reference</span><input id="captureSourceRef" type="text" maxlength="300" placeholder="Optional sender, thread or note" value="${escapeHtml(captureSourceDraft.sourceRef||"")}"></label><label class="form-field full"><span>Source link</span><input id="captureSourceUrl" type="url" maxlength="1000" placeholder="Optional link back to the source" value="${escapeHtml(captureSourceDraft.sourceUrl||"")}"></label></div><div class="capture-consent-note">Op-Sym records only what you explicitly share or capture here. It does not silently read WhatsApp, SMS, calls or other apps.</div><div class="form-actions"><button class="ghost-btn" type="button" data-route="${isCommitment?"commitments":"inbox"}">Cancel</button><button class="primary-btn" type="submit">Capture to Inbox</button></div></form></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function taskDetail(){
  if(!selectedTaskId){
    const left=`<section class="task-detail-hero"><span class="eyebrow">TASK</span><h1>Select a task</h1><p class="page-subtitle">Open a task from Today or Tasks to view its live record.</p></section>`;
    const right=`<section class="section"><div class="empty-card"><strong>No task selected</strong><small>Return to Tasks and choose Details.</small></div><div class="task-actions" style="margin-top:12px"><button data-route="tasks">Back to Tasks</button></div></section>`;
    return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
  }

  if(liveTaskDetailLoading && !liveTaskDetailLoaded){
    const left=`<section class="task-detail-hero"><span class="eyebrow">TASK · ${escapeHtml(selectedTaskId)}</span><h1>Loading task…</h1><p class="page-subtitle">Reading the live task record.</p></section>`;
    const right=`<section class="section"><div class="empty-card"><strong>Loading task detail</strong><small>Please wait a moment.</small></div></section>`;
    return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
  }

  if(liveTaskDetailError && !liveTaskDetailLoaded){
    const left=`<section class="task-detail-hero"><span class="eyebrow">TASK · ${escapeHtml(selectedTaskId)}</span><h1>Task detail unavailable</h1><p class="page-subtitle">The live task record could not be loaded.</p></section>`;
    const right=`<section class="section"><div class="empty-card"><strong>Could not load this task</strong><small>${escapeHtml(liveTaskDetailError.message || "Check the Mobile Bridge deployment.")}</small></div><div class="task-actions" style="margin-top:12px"><button data-retry-task-detail>Retry</button><button data-route="tasks">Back to Tasks</button></div></section>`;
    return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
  }

  const payload=liveTaskDetailData;
  const t=payload?.task;

  if(!t){
    const left=`<section class="task-detail-hero"><span class="eyebrow">TASK · ${escapeHtml(selectedTaskId)}</span><h1>Loading task…</h1><p class="page-subtitle">Reading the live task record.</p></section>`;
    const right=`<section class="section"><div class="empty-card"><strong>Loading task detail</strong><small>Please wait a moment.</small></div></section>`;
    return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
  }

  const pct=Math.max(0,Math.min(100,Number(t.percentComplete)||0));
  const description=t.description || t.notesField || "No description has been entered for this task.";

  const left=`<section class="task-detail-hero">
    <span class="eyebrow">TASK · ${escapeHtml(t.taskId)}</span>
    <h1>${escapeHtml(t.title)}</h1>
    <p class="page-subtitle">${escapeHtml(description)}</p>
    <div class="progress"><span style="width:${pct}%"></span></div>
    <div class="meta">${pct}% complete · ${escapeHtml(t.status || "Open")}</div>
  </section>`;

  let content="";
  if(activeTaskDetailTab==="notes"){
    content=`<div class="section-head"><div><span class="kicker">NOTES</span><h2>Task notes</h2><p>Read-only entries from 34_TASK_NOTES</p></div></div>${taskNotesMarkup(payload.notes || [])}`;
  }else if(activeTaskDetailTab==="history"){
    content=`<div class="section-head"><div><span class="kicker">HISTORY</span><h2>Task history</h2><p>Read-only events from 36_TASK_EVENT_LOG</p></div></div>${taskHistoryMarkup(payload.history || [])}`;
  }else{
    content=`<div class="detail-grid">
      <article class="detail-card"><small>PRIORITY</small><strong>${detailValue(t.priority)}</strong></article>
      <article class="detail-card"><small>DEADLINE</small><strong>${detailValue(t.deadline)}</strong></article>
      <article class="detail-card"><small>ROLE</small><strong>${detailValue(t.role)}</strong></article>
      <article class="detail-card"><small>LOCATION</small><strong>${detailValue(t.location)}</strong></article>
    </div>
    <div class="section-head" style="margin-top:20px"><div><span class="kicker">DETAILS</span><h2>Task information</h2></div></div>
    <div class="detail-list">
      ${taskInfoRow("Project",t.project)}
      ${taskInfoRow("Owner",t.owner)}
      ${taskInfoRow("Strategic importance",t.strategicImportance)}
      ${taskInfoRow("Scheduled date",t.scheduledDate)}
      ${taskInfoRow("Start time",t.startTime)}
      ${taskInfoRow("Planned hours",t.plannedHours)}
      ${taskInfoRow("Earliest start",t.earliestStart)}
      ${taskInfoRow("Flexibility",t.flexibility)}
      ${taskInfoRow("Travel / buffer",t.travelBufferMin ? t.travelBufferMin+" min" : "")}
      ${taskInfoRow("Energy",t.energy)}
      ${taskInfoRow("Splittable",t.splittable)}
      ${taskInfoRow("Dependency",t.dependencyTaskId)}
      ${taskInfoRow("Reminder",t.reminderRule)}
      ${taskInfoRow("Original scheduled date",t.originalScheduledDate)}
      ${taskInfoRow("Reschedule count",t.rescheduleCount)}
      ${taskInfoRow("Clash flag",t.clashFlag)}
      ${taskInfoRow("Deadline risk",t.deadlineRisk)}
      ${taskInfoRow("Source Inbox",t.sourceInboxId)}
      ${taskInfoRow("Signal",t.signalId)}
      ${taskInfoRow("Source type",captureSourceLabel(t.sourceType||""))}
      ${taskInfoRow("Source reference",t.sourceRef)}
      ${taskInfoRow("Source link",t.sourceUrl)}
      ${taskInfoRow("Created",t.created)}
    </div>`;
  }

  const right=`<section class="section">
    <div class="chip-row task-detail-tabs">
      ${taskDetailTabButton("details","Details")}
      ${taskDetailTabButton("notes","Notes")}
      ${taskDetailTabButton("history","History")}
    </div>
    <div class="task-detail-tab-content">${content}</div>
    <div class="task-actions" style="margin-top:14px">
      <button class="done" data-complete-task="${escapeHtml(t.taskId)}" data-task-title="${escapeHtml(t.title)}">Complete</button>
      <button data-reschedule-task="${escapeHtml(t.taskId)}" data-task-title="${escapeHtml(t.title)}" data-current-date="${escapeHtml(t.scheduledDateIso || "")}" data-current-time="${escapeHtml(t.startTime || "")}">Reschedule</button>
      <button data-task-more="${escapeHtml(t.taskId)}">More</button>
    </div>
  </section>`;

  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}


function clearTransientUiForNavigation_(){
  document.querySelectorAll(
    ".smart-sheet-backdrop,.opsym-confirm-backdrop,.smart-reschedule-overlay,#inboxClarifyBackdrop"
  ).forEach(el=>{try{el.remove();}catch(_){}});
  document.body.classList.remove("opsym-modal-open");
  document.body.style.overflow="";
  document.documentElement.style.overflow="";
}

function safeNavigate_(route,options={}){
  const r=routes[route]?route:"home";
  activeRoute=r;

  if(typeof updateOpsymDiag_==="function"){
    updateOpsymDiag_({
      lastAttemptedRoute:r,
      lastAttemptedRouteAt:new Date().toISOString(),
      lastNavigationError:"",
      lastNavigationStack:""
    });
  }

  clearTransientUiForNavigation_();

  try{
    const same=currentRoute()===r;
    render(r,!!options.replace || same);

    if(typeof updateOpsymDiag_==="function"){
      updateOpsymDiag_({
        lastSuccessfulRoute:r,
        lastSuccessfulRouteAt:new Date().toISOString()
      });
    }
  }catch(err){
    const message=String(err?.message||err||"Unknown navigation error");
    const stack=String(err?.stack||"");

    if(typeof updateOpsymDiag_==="function"){
      updateOpsymDiag_({
        lastNavigationError:message,
        lastNavigationStack:stack,
        navigationRecoveredAt:new Date().toISOString()
      });
    }

    try{
      activeRoute="home";
      const main=document.getElementById("appMain");
      if(main)main.innerHTML=home();
      setActiveNav("home");
      history.replaceState({route:"home"},"","#home");
      bindDynamic();

      if(typeof updateOpsymDiag_==="function"){
        updateOpsymDiag_({
          lastSuccessfulRoute:"home",
          lastSuccessfulRouteAt:new Date().toISOString()
        });
      }

      window.scrollTo(0,0);
      toast("Navigation recovered");
    }catch(recoveryErr){
      if(typeof updateOpsymDiag_==="function"){
        updateOpsymDiag_({
          lastNavigationError:message+" | Recovery error: "+String(recoveryErr?.message||recoveryErr),
          lastNavigationStack:stack+"\nRECOVERY:\n"+String(recoveryErr?.stack||"")
        });
      }
    }
  }
}

const routes={home,today,tasks,inbox,week,month,year,commitments,analytics,more,settings,capture,"task-detail":taskDetail,"commitment-detail":commitmentDetail};

function setActiveNav(route){
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.route===route));
  if(!["home","today","tasks"].includes(route) && route!=="capture"){
    document.querySelector('.nav-item[data-route="more"]')?.classList.add("active");
  }
}
function render(route,replaceHash=false,options={}){
  route=routes[route]?route:"home";
  activeRoute=route;

  // The visual screen, application route and browser history must always agree.
  if(replaceHash){
    history.replaceState({route},"","#"+route);
  }else if(location.hash!=="#"+route){
    history.pushState({route},"","#"+route);
  }else{
    history.replaceState({route},"","#"+route);
  }

  const fn=routes[route]||routes.home;
  const opts=options||{};
  const appMain=document.getElementById("appMain");
  if(opts.silent) appMain.classList.add("silent-render");
  appMain.innerHTML=fn();
  setActiveNav(route);
  bindDynamic();
  document.getElementById("appMain").focus({preventScroll:true});
  window.scrollTo(0,0);

  if(route==="home" && mobileBridge.endpoint && !opts.suppressRefresh){
    // Stale-while-revalidate: refresh once when Home is opened.
    // Background refresh re-renders Home with suppressRefresh=true so it cannot create a refresh loop.
    loadLiveHomeData(false).catch(()=>null);
  }
  if(opts.silent){
    requestAnimationFrame(()=>appMain.classList.remove("silent-render"));
  }
  if(route==="today" && mobileBridge.endpoint && !liveTodayLoaded){
    loadLiveTodayData(false);
  }
  if(route==="tasks" && mobileBridge.endpoint && !liveTasksLoaded){
    loadLiveTasksData(false);
  }
  if(route==="inbox" && mobileBridge.endpoint && !liveInboxLoaded && !liveInboxLoading){
    loadLiveInboxData(false).then(()=>render("inbox",true)).catch(()=>render("inbox",true));
  }
  if(route==="commitments" && mobileBridge.endpoint && !liveCommitmentsLoaded && !liveCommitmentsLoading){
    loadLiveCommitmentsData(false).then(()=>render("commitments",true)).catch(()=>render("commitments",true));
  }
  if(route==="task-detail" && mobileBridge.endpoint && selectedTaskId &&
     !liveTaskDetailLoaded && !liveTaskDetailLoading && !liveTaskDetailError){
    loadLiveTaskDetailData(selectedTaskId,false);
  }
}
document.addEventListener("click",e=>{
  const inboxClarify=e.target.closest?.("[data-inbox-clarify]");
  if(inboxClarify){
    e.preventDefault();
    e.stopPropagation();
    openInboxClarifySheet(inboxClarify.dataset.inboxClarify);
    return;
  }
const retryFailed=e.target.closest?.("[data-retry-failed-task]");if(retryFailed){e.preventDefault();retryFailedTask_(retryFailed.dataset.retryFailedTask||"");return;}const dismissFailed=e.target.closest?.("[data-dismiss-failed-task]");if(dismissFailed){e.preventDefault();removePendingTask_(dismissFailed.dataset.dismissFailedTask||"");return;}
const openCommitment=e.target.closest?.("[data-open-commitment]");if(openCommitment){e.preventDefault();selectedCommitmentId=openCommitment.dataset.openCommitment||"";render("commitment-detail");return;}
const followCommitment=e.target.closest?.("[data-commitment-followup]");if(followCommitment){e.preventDefault();const c=getCommitmentById(followCommitment.dataset.commitmentFollowup);if(c){const who=c.personName?` with ${c.personName}`:"";interpretedCaptureDraft={title:String(c.type||"").toUpperCase()==="WAIT"?`Follow up${who}`:`Follow up: ${c.title||"commitment"}`,sourceText:c.rawText||c.title||"",role:"",project:"",priority:"Medium",plannedHours:"",date:c.dueDate||"",time:"",location:"",personName:c.personName||"",intent:"DO",commitmentType:"DO",direction:"ME",parserVersion:"commitment-followup-v1.8.5",confidence:.99};captureEntryMode="interpreted";render("capture");}return;}
if(e.target.closest?.("[data-close-inbox-clarify]")){closeInboxClarifySheet();return;}const t=e.target.closest?.("[data-clarify-type]");if(t){document.querySelectorAll("[data-clarify-type]").forEach(x=>x.classList.toggle("selected",x===t));const rec=t.dataset.clarifyType==="WAIT"||t.dataset.clarifyType==="DELEGATE"?"OTHER":t.dataset.clarifyType==="MEET"?"SHARED":t.dataset.clarifyType==="DECIDE"?"ME":null;if(rec)document.querySelectorAll("[data-clarify-direction]").forEach(x=>x.classList.toggle("selected",x.dataset.clarifyDirection===rec));document.getElementById("clarifyIntent").value=t.dataset.clarifyType;updateClarifyRules();return;}const d=e.target.closest?.("[data-clarify-direction]");if(d){document.querySelectorAll("[data-clarify-direction]").forEach(x=>x.classList.toggle("selected",x===d));return;}const ct=e.target.closest?.("[data-clarify-task]");if(ct){clarifyToTask(ct.dataset.clarifyTask);return;}const cc=e.target.closest?.("[data-clarify-commitment]");if(cc){clarifyToCommitment(cc.dataset.clarifyCommitment);return;}const di=e.target.closest?.("[data-clarify-dismiss]");if(di){closeInboxClarifySheet();dismissInboxItem(di.dataset.clarifyDismiss);return;}});
document.addEventListener("input",e=>{
  if(
    e.target?.id==="clarifyPerson" ||
    e.target?.id==="clarifyDate" ||
    e.target?.id==="clarifyTime" ||
    e.target?.id==="clarifyLocation" ||
    e.target?.id==="clarifyTitle"
  ){
    updateClarifySummary();
  }
});
document.addEventListener("change",e=>{
  if(
    e.target?.id==="clarifyPerson" ||
    e.target?.id==="clarifyDate" ||
    e.target?.id==="clarifyTime"
  ){
    updateClarifySummary();
  }
});


document.addEventListener("keydown",e=>{
  if(e.key==="Escape" && document.getElementById("inboxClarifyBackdrop")){
    e.preventDefault();
    closeInboxClarifySheet();
  }
});

document.addEventListener("click",e=>{
  const backdrop=document.getElementById("inboxClarifyBackdrop");
  if(backdrop && e.target===backdrop){
    closeInboxClarifySheet();
  }
});

function bindDynamic(){
  const bridgeSave=document.getElementById("bridgeSaveTestBtn");
  if(bridgeSave && !bridgeSave.dataset.bound){
    bridgeSave.dataset.bound="1";
    bridgeSave.addEventListener("click",async()=>{
      const input=document.getElementById("bridgeEndpointInput");
      const endpoint=String(input?.value||"").trim();
      if(!endpoint){
        await opsymNotice({title:"Bridge URL required",message:"Paste the Google Apps Script Web App URL ending in /exec or /dev."});
        input?.focus();
        return;
      }
      if(!/^https:\/\/script\.google\.com\/macros\/s\/.+\/(?:exec|dev)(?:[?#].*)?$/i.test(endpoint)){
        await opsymNotice({title:"Check the URL",message:"Use the Google Apps Script Web App URL. It should begin with https://script.google.com/macros/s/ and end in /exec or /dev."});
        return;
      }

      bridgeSave.disabled=true;
      bridgeSave.textContent="Testing…";
      try{
        saveMobileBridgeConfig(endpoint.split(/[?#]/)[0],"");
        await refreshDiagnosticBridgeVersion_();
        const ok=opsymDiag.bridgeVersion && !String(opsymDiag.bridgeVersion).startsWith("Error") && opsymDiag.bridgeVersion!=="Not configured";
        if(ok){
          await Promise.allSettled([loadLiveHomeData(false),loadLiveTodayData(false),loadLiveTasksData(false)]);
          await opsymNotice({title:"Mobile Bridge connected",message:`Connected successfully.\nBridge version: ${opsymDiag.bridgeVersion}`});
        }else{
          await opsymNotice({title:"Connection needs attention",message:`The URL was saved, but Op-Sym could not confirm the bridge.\n\n${opsymDiag.bridgeVersion||"Unknown response"}`});
        }
      }catch(err){
        await opsymNotice({title:"Bridge setup failed",message:String(err?.message||err)});
      }finally{
        if(currentRoute()==="settings")safeNavigate_("settings",{replace:true});
      }
    });
  }

  const bridgeClear=document.getElementById("bridgeClearBtn");
  if(bridgeClear && !bridgeClear.dataset.bound){
    bridgeClear.dataset.bound="1";
    bridgeClear.addEventListener("click",async()=>{
      const ok=await opsymConfirm({title:"Clear Mobile Bridge?",message:"This removes the saved Apps Script URL from this device. Your spreadsheet data is not deleted.",confirmLabel:"Clear"});
      if(!ok)return;
      clearMobileBridgeConfig();
      updateOpsymDiag_({bridgeVersion:"Not configured"});
      toast("Mobile Bridge settings cleared");
      if(currentRoute()==="settings")safeNavigate_("settings",{replace:true});
    });
  }

  const diagRefresh=document.getElementById("diagRefreshBtn");
  if(diagRefresh && !diagRefresh.dataset.bound){
    diagRefresh.dataset.bound="1";
    diagRefresh.addEventListener("click",async()=>{
      diagRefresh.disabled=true;
      diagRefresh.textContent="Checking...";
      await refreshDiagnosticBridgeVersion_();
      if(currentRoute()==="settings") safeNavigate_("settings",{replace:true});
    });
  }
  const diagCopy=document.getElementById("diagCopyBtn");
  if(diagCopy && !diagCopy.dataset.bound){
    diagCopy.dataset.bound="1";
    diagCopy.addEventListener("click",async()=>{
      const txt=JSON.stringify(opsymDiag,null,2);
      try{await navigator.clipboard.writeText(txt);toast("Diagnostics copied");}
      catch(_){await opsymNotice({title:"Diagnostics",message:txt});}
    });
  }
  document.querySelectorAll("[data-find-time]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();showFindTime_();}));
  document.querySelectorAll("[data-plan-week]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();showWeekPlanner_();}));
  document.querySelectorAll("[data-refresh-insights]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();refreshAnalytics_();}));
  document.querySelectorAll("[data-task-more]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();showTaskMore_(el.dataset.taskMore||selectedTaskId);}));
  document.querySelectorAll("[data-settings-action]").forEach(el=>el.addEventListener("click",e=>{
    e.preventDefault();
    const action=el.dataset.settingsAction;
    if(action==="region-time")showRegionTimeSettings_();
    else if(action==="scheduling")showSchedulingSettings_();
    else if(action==="notifications")showNotificationSettings_();
    else if(action==="cice")showCiceSettings_();
    else if(action==="interface")showInterfaceSettings_();
  }));
  document.querySelectorAll(".chip").forEach(el=>el.addEventListener("click",()=>{
    el.parentElement.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
    el.classList.add("active");
  }));



  document.querySelectorAll("[data-save-region-time]").forEach(el=>{
    if(el.dataset.bound)return;
    el.dataset.bound="1";
    el.addEventListener("click",async()=>{
      const tz=String(document.getElementById("timezonePickerInput")?.value||"").trim();
      const fmt=String(document.getElementById("timeFormatSelect")?.value||"24");
      const zones=timezoneValues_();
      if(!tz){
        await opsymNotice({title:"Choose a timezone",message:"Select or type a timezone first."});
        return;
      }
      if(zones.length && !zones.includes(tz)){
        const proceed=await opsymConfirm({title:"Timezone not in list",message:`"${tz}" was not found in the browser's timezone list. Save it anyway?`,confirmLabel:"Save",cancelLabel:"Choose again"});
        if(!proceed)return;
      }
      saveOpsymPreferences_({timezone:tz,timeFormat:fmt==="12"?"12":"24"});
      document.querySelector("#opsymPlannerBackdrop")?.remove();
      document.body.classList.remove("opsym-modal-open");
      toast("Region & time saved");
      if(currentRoute()==="settings")render("settings",true);
    });
  });

  document.querySelectorAll("[data-planner-open-tasks]").forEach(el=>el.addEventListener("click",()=>{
    document.querySelector("#opsymPlannerBackdrop")?.remove();
    document.body.classList.remove("opsym-modal-open");
    activeTaskFilter="unscheduled";
    safeNavigate_("tasks");
  }));
  document.querySelectorAll("[data-copy-task-title]").forEach(el=>el.addEventListener("click",async()=>{
    const txt=el.dataset.copyTaskTitle||"";
    try{await navigator.clipboard.writeText(txt);toast("Task title copied");}
    catch(_){await opsymNotice({title:"Task title",message:txt});}
  }));
  document.querySelectorAll("[data-open-task-source]").forEach(el=>el.addEventListener("click",()=>{
    const url=el.dataset.openTaskSource||"";
    if(/^https?:\/\//i.test(url))window.open(url,"_blank","noopener");
  }));
  document.querySelectorAll("[data-task-provenance]").forEach(el=>el.addEventListener("click",async()=>{
    const t=(liveTaskDetailData?.task)||{};
    await opsymNotice({title:"Task provenance",message:[
      `Signal: ${t.signalId||"Not recorded"}`,
      `Source Inbox: ${t.sourceInboxId||"Not recorded"}`,
      `Source type: ${captureSourceLabel(t.sourceType||"")||"Not recorded"}`,
      `Source reference: ${t.sourceRef||"Not recorded"}`
    ].join("\n")});
  }));

  document.querySelectorAll("[data-task-filter]").forEach(btn=>btn.addEventListener("click",()=>{
    activeTaskFilter=btn.dataset.taskFilter || "all";
    if(currentRoute()==="tasks") render("tasks",true);
  }));

  document.querySelectorAll("[data-interpret-capture]").forEach(btn=>btn.addEventListener("click",e=>{
    e.preventDefault();
    interpretCaptureText();
  }));

  document.getElementById("newTaskForm")?.addEventListener("submit",e=>{
    e.preventDefault();
    createTaskFromForm();
  });

  document.getElementById("inboxCaptureForm")?.addEventListener("submit",e=>{e.preventDefault();const meta=readCaptureSourceForm();captureSourceDraft=meta;captureToInbox(document.getElementById("inboxCaptureText")?.value||"",meta).then(ok=>{if(ok){pendingSharedCapture=null;captureSourceDraft={sourceType:"MANUAL",sourceRef:"",sourceUrl:"",sharedTitle:"",capturedVia:"DIRECT"};clearSharedCaptureQuery();}});});
  document.querySelectorAll("[data-commitment-filter]").forEach(btn=>btn.addEventListener("click",()=>{activeCommitmentFilter=btn.dataset.commitmentFilter||"ALL";render("commitments",true);}));

  document.querySelectorAll("[data-capture-cancel]").forEach(btn=>btn.addEventListener("click",()=>{
    const destination=captureEntryMode==="today" ? "today" : "tasks";
    captureEntryMode="general";
    render(destination);
  }));

  document.querySelectorAll("[data-start-task-form]").forEach(btn=>btn.addEventListener("click",e=>{
    e.preventDefault();
    captureEntryMode="task";
    render("capture",true);
  }));

  document.querySelectorAll("[data-complete-task]").forEach(btn=>btn.addEventListener("click",e=>{
    e.preventDefault();
    e.stopPropagation();
    completeTaskById(btn.dataset.completeTask,btn.dataset.taskTitle || "");
  }));

  document.querySelectorAll("[data-reschedule-task]").forEach(btn=>btn.addEventListener("click",e=>{
    e.preventDefault();
    e.stopPropagation();
    rescheduleTaskById(
      btn.dataset.rescheduleTask,
      btn.dataset.taskTitle || "",
      btn.dataset.currentDate || "",
      btn.dataset.currentTime || ""
    );
  }));

  document.querySelectorAll("[data-task-detail-tab]").forEach(btn=>btn.addEventListener("click",()=>{
    activeTaskDetailTab=btn.dataset.taskDetailTab || "details";
    if(currentRoute()==="task-detail") render("task-detail",true);
  }));

  document.querySelectorAll("[data-retry-task-detail]").forEach(btn=>btn.addEventListener("click",()=>{
    loadLiveTaskDetailData(selectedTaskId,true);
  }));

  document.querySelectorAll("[data-pwa-diagnostics]").forEach(btn=>btn.addEventListener("click",e=>{e.preventDefault();showPwaDiagnostics();}));

  const heroModeButton=document.getElementById("heroModeButton");
  if(heroModeButton){
    heroModeButton.addEventListener("click",()=>{
      const modes=["Conservative","Assisted","Autonomous"];
      planningMode=modes[(modes.indexOf(planningMode)+1)%modes.length];
      const label=heroModeButton.querySelector("span");
      if(label)label.textContent=planningMode;
      toast("Planning mode: "+planningMode);
    });
  }
}
function toast(msg){
  const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");
  clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>t.classList.remove("show"),1700);
}

function traceNav_(event,data={}){
  try{
    window.__opsymNavTrace=window.__opsymNavTrace||[];
    window.__opsymNavTrace.push({ts:new Date().toISOString(),event,route:currentRoute(),...data});
    if(window.__opsymNavTrace.length>120)window.__opsymNavTrace.shift();
  }catch(_){}
}

document.addEventListener("click",e=>{
  const el=e.target.closest?.("[data-route],.brand");
  if(!el)return;
  const route=el.dataset?.route || (el.classList.contains("brand")?"home":"");
  if(!route)return;

  // One and only one route handler. No pointerdown + click double navigation.
  e.preventDefault();
  e.stopImmediatePropagation();

  if(route==="task-detail"){
    const id=String(el.dataset.taskId||"").trim();
    if(id){
      selectedTaskId=id;
      activeTaskDetailTab="details";
      liveTaskDetailData=null;
      liveTaskDetailLoaded=false;
      liveTaskDetailLoading=false;
      liveTaskDetailError=null;
    }
  }
  if(route==="capture"){
    captureEntryMode=el.dataset.captureMode || "general";
  }

  traceNav_("tap",{target:route,overlayCount:document.querySelectorAll(".smart-sheet-backdrop,.opsym-confirm-backdrop,.smart-reschedule-overlay,#inboxClarifyBackdrop").length});
  safeNavigate_(route);
  traceNav_("render-complete",{target:route,now:currentRoute()});
},true);

window.addEventListener("popstate",()=>{activeRoute=location.hash.replace("#","")||"home";safeNavigate_(activeRoute,{replace:true});});
matchMedia("(orientation: landscape)").addEventListener?.("change",()=>safeNavigate_(location.hash.replace("#","")||"home",{replace:true}));

if("serviceWorker" in navigator){window.addEventListener("load",async()=>{try{const reg=await navigator.serviceWorker.register("./service-worker.js?v=1941",{scope:"/opsym-mobile-visual-test/"});await reg.update();}catch(_){}});}
pendingSharedCapture=readShareTargetFromUrl();
if(pendingSharedCapture) applyPendingSharedCapture();

runBackendSetupFromQuery();

try{
  localInterpreterReady=runLocalInterpreterSelfTest();
}catch(_){
  localInterpreterReady=false;
}

// Fresh app/page launches always begin at Home for a predictable start.
// Share-target launches are the exception and go directly to Capture.
const initialRoute=pendingSharedCapture?"capture":"home";
activeRoute=initialRoute;
history.replaceState({route:initialRoute},"","#"+initialRoute);
render(initialRoute,true);
loadLiveTodayData(false);
loadLiveTasksData(false);

// Refresh live Home, Today and Tasks data when returning to the app after 60 seconds or more.
let __lastHomeRefresh=Date.now();
document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState==="visible" && Date.now()-__lastHomeRefresh>60000){
    __lastHomeRefresh=Date.now();
    loadLiveHomeData(false);
    loadLiveTodayData(false);
    loadLiveTasksData(false);
    loadLiveInboxData(false).catch(()=>null);
    loadLiveCommitmentsData(false).catch(()=>null);
  }
});


// v1.8.5 bounded pending-state clock: updates wording without generating server traffic.
setInterval(()=>{
  if(currentRoute()==="tasks" && (liveTasksData?.tasks||[]).some(t=>t.pending)) render("tasks",true);
},5000);
