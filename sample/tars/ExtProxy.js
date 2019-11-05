﻿// **********************************************************************
// This file was generated by a TARS parser!
// TARS version 1.0.1.
// **********************************************************************

var TarsStream = require('@tars/stream');
var TarsError  = require('@tars/rpc').error;

var Ext = Ext || {};
module.exports.Ext = Ext;


Ext.ExtInfo = function() {
    this.sUserName = "";
    this.data = new TarsStream.Map(TarsStream.String, TarsStream.BinBuffer);
    this.cons = new TarsStream.Map(TarsStream.String, TarsStream.Map(TarsStream.String, TarsStream.BinBuffer));
    this._classname = "Ext.ExtInfo";
};
Ext.ExtInfo._classname = "Ext.ExtInfo";

Ext.ExtInfo._write = function (os, tag, value) { os.writeStruct(tag, value); }
Ext.ExtInfo._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
Ext.ExtInfo._readFrom = function (is) {
    var tmp = new Ext.ExtInfo();
    tmp.sUserName = is.readString(0, false, "");
    tmp.data = is.readMap(1, false, TarsStream.Map(TarsStream.String, TarsStream.BinBuffer));
    tmp.cons = is.readMap(2, false, TarsStream.Map(TarsStream.String, TarsStream.Map(TarsStream.String, TarsStream.BinBuffer)));
    return tmp;
};
Ext.ExtInfo.prototype._writeTo = function (os) {
    os.writeString(0, this.sUserName);
    os.writeMap(1, this.data);
    os.writeMap(2, this.cons);
};
Ext.ExtInfo.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
Ext.ExtInfo.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
Ext.ExtInfo.prototype.toObject = function() { 
    var tmp = {};

    tmp.sUserName = this.sUserName;
    tmp.data = this.data.toObject();
    tmp.cons = this.cons.toObject();
    
    return tmp;
}
Ext.ExtInfo.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("sUserName") || (this.sUserName = json.sUserName);
    !json.hasOwnProperty("data") || (this.data.readFromObject(json.data));
    !json.hasOwnProperty("cons") || (this.cons.readFromObject(json.cons));
}
Ext.ExtInfo.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
Ext.ExtInfo.new = function () {
    return new Ext.ExtInfo();
}
Ext.ExtInfo.create = function (is) {
    return Ext.ExtInfo._readFrom(is);
}


