// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_orderedlist
 * @copyright  2013 Damyon Wiese  <damyon@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_orderedlisthebrew-button
 */

/**
 * Atto text editor orderedlisthebrew plugin.
 *
 * @namespace M.atto_orderedlisthebrew
 * @class button
 * @extends M.editor_atto.EditorPlugin
 * @author Shimon Nagar Open University Israel
 */

Y.namespace('M.atto_orderedlisthebrew').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function() {
        this.addButton({
            //icon: 'icon',// NOT WORKING insted i get the icon from template
            icon: 'e/heb_numbered_list_rtl',
            buttonName: 'orderedlisthebrew',
            callback: this.orderedlisthebrew,
            tags: 'ol'
        });
    },
    orderedlisthebrew: function(){
        var sel = window.rangy.getSelection();
        var range = sel.rangeCount ? sel.getRangeAt(0) : null;
        if (range) {
        	document.execCommand("insertorderedlist");
        	var matches = range.commonAncestorContainer.querySelectorAll('ol');
        	matches.forEach(function(item){
                    item.setAttribute("style", "list-style-type:hebrew;");
            });	
        }
    }
});