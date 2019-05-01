// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Gif = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Gif = (function() {
  function Gif(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Gif.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.logicalScreen = new LogicalScreen(this._io, this, this._root);
  }

  var Header = Gif.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.magic = this._io.ensureFixedContents([71, 73, 70]);
      this.version = this._io.readBytes(3);
    }

    return Header;
  })();

  var LogicalScreen = Gif.LogicalScreen = (function() {
    function LogicalScreen(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    LogicalScreen.prototype._read = function() {
      this.imageWidth = this._io.readU2le();
      this.imageHeight = this._io.readU2le();
      this.flags = this._io.readU1();
      this.bgColorIndex = this._io.readU1();
      this.pixelAspectRatio = this._io.readU1();
    }

    return LogicalScreen;
  })();

  return Gif;
})();
return Gif;
}));
