YUI.add("moodle-atto_orderedlisthebrew-button",function(e,t){e.namespace("M.atto_orderedlisthebrew").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){this.addButton({icon:"e/heb_numbered_list_rtl",buttonName:"orderedlisthebrew",callback:this.orderedlisthebrew,tags:"ol"})},orderedlisthebrew:function(){var e=rangy.getSelection(),t=e.rangeCount?e.getRangeAt(0):null;if(t){document.execCommand("insertorderedlist");var n=t.commonAncestorContainer.querySelectorAll("ol");n.forEach(function(e){e.setAttribute("style","list-style-type:hebrew;")})}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});