// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Dbdpacket = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Dbdpacket = (function() {
  function Dbdpacket(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Dbdpacket.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
  }

  var Header = Dbdpacket.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.first = this._io.readU1();
      this.second = this._io.readU1();
      this.third = this._io.readU1();
      this.fourth = this._io.readU1();
    }

    return Header;
  })();

  return Dbdpacket;
})();
return Dbdpacket;
}));
