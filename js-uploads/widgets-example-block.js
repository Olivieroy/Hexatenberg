(0,wp.blocks.registerBlockType)("custom/example-block",{title:"Example Block",icon:"smiley",category:"widgets",edit:function(){return React.createElement("p",null,"Hello from the editor! (Example Block)")},save:function(){return React.createElement("p",null,"Hello from the frontend! (Example Block)")}});