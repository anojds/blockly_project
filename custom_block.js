Blockly.Blocks['print_block'] = {
    init: function() {
      this.appendValueInput("print")
          .setCheck(["String", "Number"])
          .appendField("출력");
      this.setColour(230);
   this.setTooltip("출력하는 블럭입니다.");
   this.setHelpUrl("");
    }
  };