/* Op-Sym Shared Task Actions — U2 Mobile
   UI-free shared task mutation contract for GitHub/mobile.
*/
(function(global){
  "use strict";

  const VERSION="2.0-u2-task-actions-dev";
  let provider=null;

  function requireProvider_(){
    if(!provider) throw new Error("Op-Sym Task Actions provider is not configured.");
    return provider;
  }
  function requireFn_(name){
    const p=requireProvider_();
    if(typeof p[name]!=="function") throw new Error("Task Actions provider does not implement: "+name);
    return p[name].bind(p);
  }
  function setProvider(next){
    if(!next || typeof next!=="object") throw new Error("A valid Task Actions provider is required.");
    provider=next;
    return true;
  }
  function getProviderName(){
    return provider && provider.name ? String(provider.name) : "unconfigured";
  }
  function normalizeId_(taskId){
    const id=String(taskId||"").trim();
    if(!id) throw new Error("Task ID is required.");
    return id;
  }
  function normalizePayload_(payload){
    return payload && typeof payload==="object" ? {...payload} : {};
  }

  async function create(payload){
    return requireFn_("create")(normalizePayload_(payload));
  }
  async function complete(taskId){
    return requireFn_("complete")(normalizeId_(taskId));
  }
  async function reschedule(taskId,date,time,reason){
    return requireFn_("reschedule")(normalizeId_(taskId),String(date||""),String(time||""),String(reason||""));
  }
  async function reschedulePreset(taskId,preset){
    return requireFn_("reschedulePreset")(normalizeId_(taskId),String(preset||""));
  }
  async function perform(taskId,action,params){
    const a=String(action||"").trim();
    if(!a) throw new Error("Task action is required.");
    return requireFn_("perform")(normalizeId_(taskId),a,normalizePayload_(params));
  }

  global.OpsymTaskActions={
    VERSION,
    setProvider,
    getProviderName,
    create,
    complete,
    reschedule,
    reschedulePreset,
    perform
  };
})(window);
