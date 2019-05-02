meta:
  id: dbdpacket
  endian: le
seq:
  - id: header
    type: header
  - id: body_main
    type: body_main
    if: (header.first == 0) and (header.second == 1) and (header.third == 97) and (header.fourth == 30)
  - id: body_main_one
    type: body_main_one
    if: (header.first == 0) and (header.second == 1) and (header.third == 0) and (header.fourth == 36)
  - id: body_main_two
    type: body_main_two
    if: (header.first == 1) and (header.second == 1) and (header.third == 0) and (header.fourth == 48)
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
      - id: counter_first
        type: u2
  body_main_one:
    seq:
      - id: not_const
        type: str
        size: 16
        encoding: ASCII
      - id: const
        type: str
        size: 36
        encoding: ASCII
  body_main_two:
    seq:
      - id: not_const
        type: str
        size: 16
        encoding: ASCII
      - id: const
        type: str
        size: 48
        encoding: ASCII
