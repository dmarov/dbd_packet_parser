meta:
  id: dbdpacket
  endian: le
seq:
  - id: header
    type: header
types:
  header:
    seq:
      - id: first
        type: u1
      - id: second
        type: u1
      - id: third
        type: u1
      - id: fourth
        type: u1
