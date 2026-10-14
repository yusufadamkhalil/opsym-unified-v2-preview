/* Op-Sym Unified U1 Shared Core
   UI-free shared API/state/model layer.
   Used by both the existing desktop presentation and the mobile presentation.
*/
(function(global){
  "use strict";

  const VERSION="2.0-u1-shared-core-dev";
  const state={
    config:{endpoint:"",key:""},
    home:null,
    tasks:{summary:{},tasks:[]},
    taskDetail:null,
    today:null,
    inbox:{summary:{},items:[]},
    commitments:{summary:{},items:[]},
    bridgeVersion:"",
    lastError:null,
    lastSync:{}
  };

  const listeners=new Set();
  function emit(domain){
    for(const fn of listeners){
      try{fn(domain,state);}catch(_){}
    }
  }
  function subscribe(fn){
    if(typeof fn!=="function")return ()=>{};
    listeners.add(fn);
    return ()=>listeners.delete(fn);
  }

  function configure({endpoint="",key=""}={}){
    state.config.endpoint=String(endpoint||"").trim();
    state.config.key=String(key||"").trim();
    return getConfig();
  }
  function getConfig(){return {...state.config};}

  function jsonp(url,params={},timeoutMs=12000,label="Op-Sym"){
    return new Promise((resolve,reject)=>{
      if(!url)return reject(new Error("Op-Sym API endpoint is not configured."));
      const cb="__opsym_core_cb_"+Date.now()+"_"+Math.random().toString(36).slice(2);
      const script=document.createElement("script");
      let finished=false;
      const timer=setTimeout(()=>finish(new Error(`${label} request timed out after ${Math.round(timeoutMs/1000)} seconds.`)),timeoutMs);
      function finish(err,value){
        if(finished)return;
        finished=true;
        clearTimeout(timer);
        try{delete global[cb]}catch(_){global[cb]=undefined}
        script.remove();
        err?reject(err):resolve(value);
      }
      global[cb]=payload=>finish(null,payload);
      const q=new URLSearchParams({...params,callback:cb,_:Date.now().toString()});
      script.src=url+"?"+q.toString();
      script.async=true;
      script.referrerPolicy="no-referrer";
      script.onerror=()=>finish(new Error(`${label} could not reach the Op-Sym API.`));
      document.head.appendChild(script);
    });
  }

  function normalizeEnvelope(payload,label){
    if(!payload || payload.ok!==true){
      throw new Error(payload?.error||`Invalid ${label} response.`);
    }
    return payload.data ?? null;
  }
  function normalizeTask(t={}){
    return {
      ...t,
      taskId:String(t.taskId||t.id||"").trim(),
      title:String(t.title||"").trim(),
      status:String(t.status||"Open").trim()||"Open",
      scheduledDate:String(t.scheduledDate||"").trim(),
      scheduledTime:String(t.scheduledTime||t.time||"").trim(),
      sourceInboxId:String(t.sourceInboxId||"").trim(),
      signalId:String(t.signalId||"").trim()
    };
  }
  function normalizeTasks(data){
    const src=data&&typeof data==="object"?data:{};
    const tasks=Array.isArray(src.tasks)?src.tasks.map(normalizeTask):[];
    return {...src,tasks,summary:src.summary&&typeof src.summary==="object"?src.summary:{}};
  }
  function normalizeHome(data){
    return data&&typeof data==="object"?{...data}:null;
  }

  async function request(action,params={},opts={}){
    const cfg=state.config;
    const q={action,...params};
    if(cfg.key)q.key=cfg.key;
    try{
      const payload=await jsonp(cfg.endpoint,q,opts.timeoutMs||12000,opts.label||action);
      state.lastError=null;
      return payload;
    }catch(err){
      state.lastError=err;
      throw err;
    }
  }

  async function loadHome(){
    const data=normalizeHome(normalizeEnvelope(await request("home",{}, {label:"Home data"}),"Home"));
    state.home=data;
    state.lastSync.home=Date.now();
    emit("home");
    return data;
  }
  async function loadTasks(){
    const data=normalizeTasks(normalizeEnvelope(await request("tasks",{}, {label:"Tasks data"}),"Tasks"));
    state.tasks=data;
    state.lastSync.tasks=Date.now();
    emit("tasks");
    return data;
  }
  async function loadTaskDetail(taskId){
    const data=normalizeEnvelope(await request("task-detail",{taskId},{label:"Task detail"}),"Task Detail");
    state.taskDetail=data;
    state.lastSync.taskDetail=Date.now();
    emit("taskDetail");
    return data;
  }
  async function loadToday(){
    const data=normalizeEnvelope(await request("today",{}, {label:"Today data"}),"Today");
    state.today=data;
    state.lastSync.today=Date.now();
    emit("today");
    return data;
  }
  async function loadInbox(){
    const data=normalizeEnvelope(await request("inbox",{}, {label:"Inbox data"}),"Inbox")||{summary:{},items:[]};
    state.inbox=data;
    state.lastSync.inbox=Date.now();
    emit("inbox");
    return data;
  }
  async function loadCommitments(){
    const data=normalizeEnvelope(await request("commitments",{}, {label:"Commitments data"}),"Commitments")||{summary:{},items:[]};
    state.commitments=data;
    state.lastSync.commitments=Date.now();
    emit("commitments");
    return data;
  }
  async function loadVersion(){
    const payload=await request("version",{_ts:String(Date.now())},{timeoutMs:8000,label:"Bridge version"});
    const version=payload?.version||payload?.data?.version||payload?.data||"Unknown";
    state.bridgeVersion=String(version);
    state.lastSync.version=Date.now();
    emit("version");
    return state.bridgeVersion;
  }

  async function mutation(action,params={}){
    return normalizeEnvelope(await request(action,params,{label:action}),action);
  }

  global.OpsymCore={
    VERSION,
    state,
    subscribe,
    configure,
    getConfig,
    transport:{jsonp},
    models:{normalizeTask,normalizeTasks,normalizeHome},
    api:{
      request,
      home:loadHome,
      tasks:loadTasks,
      taskDetail:loadTaskDetail,
      today:loadToday,
      inbox:loadInbox,
      commitments:loadCommitments,
      version:loadVersion,
      mutation
    }
  };
})(window);
