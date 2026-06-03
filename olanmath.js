class olanmath {
  getInfo() {
    return {
      id: 'olanmath',
      name: 'Olan Math',
      color1: '#FF0000',
      color2: '#480000',
      blocks: [
        {
          opcode: 'add',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] + [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: "sub",
          blockType: Scratch.BlockType.REPORTER,
          text: "[ONE] - [TWO]",
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: "abs",
          blockType: Scratch.BlockType.REPORTER,
          text: "abs value of [NUM]",
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: -10
            }
          }
        },
        {
          opcode: "pi",
          blockType: Scratch.BlockType.REPORTER,
          text: "PI"
        },
        {
          opcode: "power",
          blockType: Scratch.BlockType.REPORTER,
          text: "[ONE] to the power of [TWO]",
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            }
          }
        },
        {
          opcode: "modulo",
          blockType: Scratch.BlockType.REPORTER,
          text: "[ONE] % [TWO]",
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 4
            }
          }
        }
      ]
    };
  }

  add(args) {
    return Number(args.ONE) + Number(args.TWO)
  }
  sub(args) {
    return Number(args.ONE) - Number(args.TWO)
  }
  abs(args) {
    return Math.abs(Number(args.NUM))
  }
  pi() {
    return Math.PI
  }
  power(args) {
    return Number(args.ONE) ** Number(args.TWO)
  }
  modulo(args) {
    return Number(args.ONE) % Number(args.TWO)
  }
}

Scratch.extensions.register(new olanmath());
