/**
Gamepad Extension By: Gvbvdxx
(C) Gvbvdxx 2022
*/
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const Runtime = require('../../../src/engine/runtime');
const Sprite = require('../../../src/sprites/sprite.js');
const Motion = require('../../../src/blocks/scratch3_motion');
//the icon of the block
var blockIconURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAGYktHRAD/AP8A/6C9p5MAAAu6SURBVHhe7d17bFZnHQfwpxQ6aQoIDBLCrTPidG1jTcDJLgTSdJKNdRawQJd6yRiMUCkZMiEgVkccKFYWzRyIWQtYnIJjDejkJpdlZOuqS6iNGEK5X8qAlSLtSgF9yq9A2/dyznOe23ne7ych+/36x/q+53zf3/u85z09J2nq2Wm3GIAjetB/AZyAQINTEGhwCgINTkGgwSkINDgFh+3AKpuHvElVfP/PLlV3YUKDNebUzaJKHAIN1li0aBFV4hBosEZ1dTVV4hBocAoCDU5BoMEKj//xEaq8SU5OpqozBBqsUFJSQpU3+aemUtUZAg3G+Tn2HA8CDU5BoMGo337mdarkQKDBKQg0GNW/f3+qvGtqaqKqOwQajBH9MPjdqzOp6g6BBu3qJx0RDnOkM+zuhUCDdjU1NVTJh0CDVjKPOUeCE/xBKVkBjrfU6IAJDdKdnXqqPciywnz9+nWq4sOEDpGW5//Ltm3bRl3i8DqdOQQ6BFSvO23mJ8wclhwWk/m2nSgwoS2C8N7ldzJ3wIS2BMJ8l2iYOQTaMCwrOgsSZg6BNmR0xVcQ5C6ChplDoA2RcQ0Kl1y+fJmqYBBoA/Zk7KQKOD6Zn295gbpgcJRDo6qRb7HW1lbqEltSUhKbcqaAOnkwoTVCmG/jE1lFmDlMaE0S+QOgjA97XmFCa5CoYW5sbNQaZg4TWgOZgeZ/g5dT9wR10BUCrdCv2Go2ZMgQ6sTl5uayfusHUAexYMmhkIww87dshNk7BNpiutefLsCSQxHRdfOwYcPY16ofpQ78woS2DMIcDAINTkGgFTg0/iOqQDcEWoHDhw9T5R3/AIgPgcEh0OAUBFoykaMbmMzyINASpSyIfCObWNra2qgCGRBoiSorK6nybvqFZ6kCGRBog7DUkA+BBqcg0OAUBFqSZ3ZNogpMQqAlWbZsGVVgEgItSX19PVXerFu3jiqQCYE25J2ncG0OFRBocApO8Jdkdm30e+dFsiYTSw4VEGhwSmgCPX7L46y4uJg6UCkjI4Pt27ePvXB9Lv0kPKwNdPovhrNVq1ZRB6aF5Wt6qwK94bPlbPDgwTFvTg5m1dbWstKBL1NnH6OBTuTrvbnGlglu5LDd0zueRJgdY8v+1D6hEWT3zZs3j51ZfJ46vbQE+pOii2zXrl3UQaIwsQxRGuil5xez7Oxs6iBR6Qy2sjV088yrCDO0y3j9i1SpJ31C735oh7Q7GoF7VE9rnJwETpEeaExniEX1US4pS471/d5gqamp1AF4o2L5IWVCI8wg4t+5/6JKnsATWucXJQUFBayiooIVffId+gnINqduFsvJyaFOvYkTJ7K0N/pRF1ygQOs4pfPAgQPs1c//mjrQbdWnK1l6ejp1ashceggHWsVkVrGmAjVs3f9CgZb9ZBDk8LItC74/FMp6AvwEFv7gEeZwk70Ph60Mdis8I1+sJCcnGzsbC9SQFerVq1dTJcZXoGVN5/xTU6kCl9jwbut5DR00zCtWrGAffvuf1IHrguZF9MWhbcmBMCeWoF+2vf/V96jyx9OEDvJqmzBhAhtYOZg6SDS6J3XcCR30ASHMie3cuXNU6aFsyVFWVmbFhwQwq/hWCRszZgx1/vkdqDED/aOPl1Ll33sz3qcKEt3Iqs+x48ePU6dWzEBnZWVR5Q8mM3S1IOUl4Vz4mdJRAy26dkaYIZbMzEyq1Ih6lEMk0KrC7OextLa2ssKLRdRBNLG2qeqhpHJYKvtQaEpKSgpVIEo0cF4NHz6cKvkiBvrwE3VUhVPbnE+pgkhUBzaehz94hCp/vDzuiIE+dOgQVd6pepva/+W/U+Xd1q1bqYKuvIZZdehV5aVboEWeiMo1V0NDA1Wgm+lJLsK5NTREl7IgmSrvqka+RZV8IoMw3ousU6Btm84gV2VlJVXe8aNGYYIJnUB69LBvd8seiAg0OCVQoBsbG6mCMJh8+ptUeWfjkjLW0vhOoI/nHaXKu+euzaIKXKQrzDJ/z51AV1dXUwUuc/1DPNbQEJHu4C9cuJCqYIQD7for3WV8361bF/1e4yb2bf2LJ6jyZsm5RVR1hgmdoN55amd7cMeOHUs/uR3ksAyqwsJCqjq7c/qony9VSkpK2OlFYn8rZuvXqWvWrGE78/ZQFx7bHnibtbS0UNcdv3DLu9MOUhdMvH0X9MXgNxuRfp/QhHYtzNzs2bOpCo/6SUdihpmbP38+W3vfb6gT52Xf2bB/seQIsZqaGqpiGzBgAFVi/JzPYTrUCHRI7cnYSZV6fs/nmLL3G1Tph0CH1KVLl6jy6Hs3qFBvxowZVOmHQIdQ2uLeVHm3efNmqtyGQIdQeXk5VW7p27cvVeIQ6BCaNcvNc2iuXLlClTgEOoQu/RhnOUaDQCcInd8A5ubmUqUfAh1Szc3NVNmn3/pgx72DQKBDSufNR/1M9xEjRlBlhtC5HJzoW5itX3/rfEuWLdY2lf28ov2uoqIi1vyzYH9QKyOD2gPtl+gLIMwB1e0fj1azcePGsauvmF3G+NnXffr0YV//z5PU3YUlRwLjAeL/jh492n5su6MPg2iXZBAO9I4H/0oVhE284JoIdcGBKVR5UzF6I1WdCQdaxkFwsJfoXahEFRQUUBXMnUBjzZkYvE7fkydPapvUMn8P1tDgFAQanBIo0CY+PIC4hmlnqfLOxn28adMmqrrDhE4g+/fvpyrctoyPfkF7BBqM+vPQP1ElR6dAixzpwLIjPET2r8qjX5vu38hu3rxJnRxSJnRdjv97soD9amtrqVKjV69eVHkX7wXWLdDLly+nyru6unDfNQsiKx34MlXh0S3QHz0nNm0/eFjO1Xm6WrJkCVUgw549dlwdqvCgmqVMxCWHyLrmxAl/F9vz6nDxEaq8w7ee0b32pTVUxaZyG/5h0O/Z5MmTqfNu7dq1VEUXMdAF581dVyGo0tJSqiCaeGG9du0aVWr07NmTKn92PL2bquii3uubEz2C4dqENHkkB9vyNq/bIeZRjuLiYqr8celQnunngm3p70UdM9DnllygKjG5FCbTdG3LmIEOIvRh0HgtuHjCvi2DPP5BgwZR5U3MNXSHoBv02LFj7Pv3/YA6ux0c/S47ffo0dfYJ05o6aG5EnqunCR10I6anp7PmmVepsxffATaHmQvLtDYRZs7zkuPGjWBvwdu3b7d6Zzz25t17jdiOb8dXrvr/RleX3i+lUKWf50BPa4h8kxYX8IDwWzeEyahRo6iyC9+WGzZsoE5MUlISVf55WkPfS9aUtWUtaPO7hhd85085I+cPTIOyIRvKjnLEc7GwgSpzwh5m7tatW2zQT8xdS66DrG25ZcsWqsT4ntDc0vOLWXZ2NnVy8Gseq75MrAsB9uLChQtsTpvYl2JeqdiWMt61hQLdQWVAZC1JwvAYOdsfZ3mf37G0tDTq5MrKymIP7niIumACLTl69/Z/rw+v+A5eeOJF6vzbm7U7NGFWjW+Hldd+Sp1/f/vCX5SFmZMVZi7QhOZUhuZeOTk5rP/G+6nrTuUEiURFoHVty7lz57LzSz+mrrvSiz9kmZmZ1Kknc1sGDjSna0fYQuV0xrYMRspRDv6gmpqaqHNXSkqK0jBz/P9v8pYOulRVVSnZllIm9L1cnDCqQxwNtqV/xo5DA6ggPdCmppmLsC39k77k6ODC26UtgQr7tuSfPfKO51OnlrIlBw/D0KFDqQsfm6Zj2Ce1rjBzStfQYz98jKWmplIXHjbe6D2sodb9uJUtOSIZ8fOhrKysjDr7hCk0ti9DTG1LrYG+1+zamcaPt4YpwLF8q/pZlpeXR50ZtmxLY4HukLa4d/stxXRyJchdbXvgbdbS0kKdHrZtS+PHofnNHvfu3Uudeq6GmZtU/0z7eRq62LgtjU/oaGSsEadPn87afmnl09NKxrbMz89nya+Z+1tBr6wNNIAIfPUNTkGgwSkINDgFgQanINDgFAQanIJAg1MQaHAKAg1OQaDBKQg0OAWBBqcg0OAUBBqcgkCDUxBocAoCDQ5h7H/ylszeU8Ms4wAAAABJRU5ErkJggg==";
//start gamepad scripts
let gamepadsConnected = [];
window.addEventListener("gamepadconnected", function(e) {
	gamepadsConnected[e.gamepad.index] = true;
});
window.addEventListener("gamepaddisconnected", function(e) {
	gamepadsConnected[e.gamepad.index] = false;
});
/*gamepad.vibrationActuator.playEffect("dual-rumble", {
  startDelay: 0,
  duration: 1000,
  weakMagnitude: 1.0,
  strongMagnitude: 1.0
});*/
//end gamepad scripts

//start block scripts
class gamepad {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'gamepad',
            name: 'Gamepad',
			blockIconURI: blockIconURI,
            blocks: [
                {
                    opcode: 'getgamepadX',
					name: 'Gamepad X',
                    blockType: BlockType.REPORTER,
                    text: 'Get [player] gamepad axis X',
                    arguments: {
						player: {
							acceptReporters: false,
							menu: 'gamepadnum'
						}
                    }
                },
                {
                    opcode: 'getgamepadY',
					name: 'Gamepad Y',
                    blockType: BlockType.REPORTER,
                    text: 'Get [player] gamepad axis Y',
                    arguments: {
						player: {
							acceptReporters: false,
							menu: 'gamepadnum'
						}
                    }
                },
                {
                    opcode: 'getgamepadButton',
					name: 'Gamepad Button Down',
                    blockType: BlockType.BOOLEAN,
                    text: 'Get [player] gamepad button down [btn]',
                    arguments: {
						player: {
							acceptReporters: false,
							menu: 'gamepadnum'
						},
						btn: {
							acceptReporters: false,
							menu: 'gamepadbtn'
						}
                    }
                },
                {
                    opcode: 'getgamepadConnected',
					name: 'Gamepad Button Down',
                    blockType: BlockType.BOOLEAN,
                    text: 'Is [player] gamepad connected?',
                    arguments: {
						player: {
							acceptReporters: false,
							menu: 'gamepadnum'
						}
                    }
                },
                {
                    opcode: 'vibratecontroler',
					name: 'Vibrate Controler For Seconds',
                    blockType: BlockType.COMMAND,
                    text: 'Vibrate [player] gamepad for [seconds]',
                    arguments: {
						player: {
							acceptReporters: false,
							menu: 'gamepadnum'
						},
						seconds: {
							type: ArgumentType.NUMBER,
							defaultValue: 0.2
						}
                    }
                },
                {
                    opcode: 'vibratecontrolerpower',
					name: 'Vibrate Controler For Seconds',
                    blockType: BlockType.COMMAND,
                    text: 'Vibrate [player] gamepad for [seconds] with power [power] and weakness [weakness]',
                    arguments: {
						player: {
							acceptReporters: false,
							menu: 'gamepadnum'
						},
						seconds: {
							type: ArgumentType.NUMBER,
							defaultValue: 0.2
						},
						power: {
							type: ArgumentType.NUMBER,
							defaultValue: 100
						},
						weakness: {
							type: ArgumentType.NUMBER,
							defaultValue: 100
						}
                    }
                },
                {
                    opcode: 'getlastest',
					name: 'Get Lastest Gamepad',
                    blockType: BlockType.REPORTER,
                    text: 'Get Gamepad Connected',
                    arguments: {
						
                    }
                }
            ],
            menus: {
				gamepadnum:{
					acceptReporters: true,
					items: [
						{
							text:"Player 1",
							value:"1"
						},
						{
							text:"Player 2",
							value:"2"
						},
						{
							text:"Player 3",
							value:"3"
						},
						{
							text:"Player 4",
							value:"4"
						}
					]
				},
				gamepadbtn: {
					acceptReporters: true,
					items:[
						{
							text:"Button B",
							value:"1"
						},
						{
							text:"Button A",
							value:"2"
						},
						{
							text:"Button Y",
							value:"3"
						},
						{
							text:"Button X",
							value:"4"
						},
						{
							text:"Trigger R",
							value:"6"
						},
						{
							text:"Trigger ZR",
							value:"8"
						},
						{
							text:"Trigger ZL",
							value:"7"
						},
						{
							text:"Trigger L",
							value:"5"
						},
						{
							text:"Button +",
							value:"10"
						},
						{
							text:"Button -",
							value:"9"
						}
					]
				}
            }
        };
    }
	getgamepadX (args) {
		var num = 0;
		try{num = (navigator.getGamepads()[Number(args.player)-1].axes[0]*10);}catch(e){}
		return num;
	}
	getgamepadY (args) {
		var num = 0;
		try{num = (navigator.getGamepads()[Number(args.player)-1].axes[1]*-10);}catch(e){}
		return num;
	}
	getgamepadButton (args) {
		var num = false;
		try{num = navigator.getGamepads()[Number(args.player)-1].buttons[Number(args.btn)-1].pressed;}catch(e){}
		return num;
	}
	getgamepadConnected (args) {
		var num = false;
		try{num = navigator.getGamepads()[Number(args.player)-1].connected;}catch(e){}
		return num;
	}
	vibratecontroler (args) {
		try{
			navigator.getGamepads()[Number(args.player)-1].vibrationActuator.playEffect("dual-rumble", {
				startDelay: 0,
				duration: (1000*(Number(args.seconds))),
				weakMagnitude: 1.0,
				strongMagnitude: 1.0
			});
		}catch(e){}
	}
	vibratecontrolerpower (args) {
		try{
			navigator.getGamepads()[Number(args.player)-1].vibrationActuator.playEffect("dual-rumble", {
				startDelay: 0,
				duration: (1000*(Number(args.seconds))),
				weakMagnitude: Number(args.weakness)/100,
				strongMagnitude: Number(args.power)/100
			});
		}catch(e){}
	}
	getlastest () {
		var gps = navigator.getGamepads();
		if (gps[0]) {
			return 1;
		}
		if (gps[1]) {
			return 2;
		}
		if (gps[2]) {
			return 3;
		}
		if (gps[3]) {
			return 4;
		}
		return 0;
	}
}
module.exports = gamepad;