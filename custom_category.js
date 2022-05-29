Blockly.Blocks['EX_DELAY'] = {
  init: function() {
    this.jsonInit({
      "message0": "대기 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES",
          "check": "Number"
        }
      ],
      "previousStatement": null, // 블록이 위에 연결할 수 있는가
      "nextStatement": null, // 블록이 아래로 연결될 수 있게 하는가
      "colour": Blockly.Blocks.texts.HUE, // 블록 색상
      "tooltip": Blockly.Msg.TEXT_PRINT_TOOLTIP,
      "helpUrl": Blockly.Msg.TEXT_PRINT_HELPURL
    });
  }
};

Blockly.JavaScript['EX_DELAY'] = function(block) {
  var data = Blockly.JavaScript.valueToCode(block, 'TIMES',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  return 'sleep(' + data + ');\n';
}