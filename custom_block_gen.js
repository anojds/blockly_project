Blockly.JavaScript['print_block'] = function(block) {
    var value_print = Blockly.JavaScript.valueToCode(block, 'print', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'console.log('+value_print+');';
    return code;
  };