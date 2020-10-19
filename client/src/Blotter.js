// generated code: source - ../backend/Blotter.pybx
import * as libpybx from 'libpybx-js';
    
export class DataFrame extends libpybx.dataclass {
  constructor(columns, dataframeJSON) {
  super();
    this.columns = columns;
    this.dataframeJSON = dataframeJSON;
  }
};
export class DFWUPC extends libpybx.dataclass {
  constructor(df, update_c) {
  super();
    this.df = df === undefined ? new DataFrame() : df;
    this.update_c = update_c;
  }
};
export class DFTest_rop extends libpybx.Object_rop {
  get_type_name() { return 'Blotter.DFTest'; }
  constructor(comm, ws, object_id) {
     super(comm, ws, object_id);
  this.get_df = this.get_df.bind(this);
  this.subscribe = this.subscribe.bind(this);
  }
   to_json() { return {'object_id': this.object_id}; }
   get_df() {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'DFTest__get_df',
          'args': {
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("get_df:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, new DFWUPC());
 return ret; });
 }
   subscribe(rop) {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'DFTest__subscribe',
          'args': {
                 rop: rop,
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("subscribe:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, null);
 return ret; });
 }
};
export class Observer_rop extends libpybx.Object_rop {
  get_type_name() { return 'Blotter.Observer'; }
  constructor(comm, ws, object_id) {
     super(comm, ws, object_id);
  this.show = this.show.bind(this);
  }
   to_json() { return {'object_id': this.object_id}; }
   show(df) {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'Observer__show',
          'args': {
                 df: df,
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("show:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, null);
 return ret; });
 }
};
export class DFTest
{
  get_rop_type() { return DFTest_rop; }
   __call_method(method, args) {
      method = method.split("__")[1];
   if (method == 'get_df') {
    return this.get_df();
  }
   if (method == 'subscribe') {
    let arg_0 = libpybx.from_json(args.rop, new Observer_rop());
    return this.subscribe(arg_0);
  }
  throw new Error("unknown method " + method)
}
get_df() {throw new Error("not implemented");}
subscribe(rop) {throw new Error("not implemented");}
};
export class Observer
{
  get_rop_type() { return Observer_rop; }
   __call_method(method, args) {
      method = method.split("__")[1];
   if (method == 'show') {
    let arg_0 = libpybx.from_json(args.df, new DFWUPC());
    return this.show(arg_0);
  }
  throw new Error("unknown method " + method)
}
show(df) {throw new Error("not implemented");}
};
