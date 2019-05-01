meta:
  id: dbdpacket
  endian: le
seq:
  - id: header
    type: header
  - id: body_main
    type: body_main
    if: (header.first == 0) and (header.second == 1) and (header.third == 97) and (header.fourth == 30)
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
  body_main:
    seq:
      - id: zero_offset
        type: u2
      - id: timing_first
        type: u2
