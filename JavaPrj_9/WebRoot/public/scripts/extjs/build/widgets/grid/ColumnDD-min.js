/*
 * Ext JS Library 2.1
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.grid.HeaderDragZone=function(A,C,B){this.grid=A;this.view=A.getView();this.ddGroup="gridHeader"+this.grid.getGridEl().id;Ext.grid.HeaderDragZone.superclass.constructor.call(this,C);if(B){this.setHandleElId(Ext.id(C));this.setOuterHandleElId(Ext.id(B))}this.scroll=false};Ext.extend(Ext.grid.HeaderDragZone,Ext.dd.DragZone,{maxDragWidth:120,getDragData:function(C){var A=Ext.lib.Event.getTarget(C);var B=this.view.findHeaderCell(A);if(B){return{ddel:B.firstChild,header:B}}return false},onInitDrag:function(A){this.view.headersDisabled=true;var B=this.dragData.ddel.cloneNode(true);B.id=Ext.id();B.style.width=Math.min(this.dragData.header.offsetWidth,this.maxDragWidth)+"px";this.proxy.update(B);return true},afterValidDrop:function(){var A=this.view;setTimeout(function(){A.headersDisabled=false},50)},afterInvalidDrop:function(){var A=this.view;setTimeout(function(){A.headersDisabled=false},50)}});Ext.grid.HeaderDropZone=function(A,C,B){this.grid=A;this.view=A.getView();this.proxyTop=Ext.DomHelper.append(document.body,{cls:"col-move-top",html:"&#160;"},true);this.proxyBottom=Ext.DomHelper.append(document.body,{cls:"col-move-bottom",html:"&#160;"},true);this.proxyTop.hide=this.proxyBottom.hide=function(){this.setLeftTop(-100,-100);this.setStyle("visibility","hidden")};this.ddGroup="gridHeader"+this.grid.getGridEl().id;Ext.grid.HeaderDropZone.superclass.constructor.call(this,A.getGridEl().dom)};Ext.extend(Ext.grid.HeaderDropZone,Ext.dd.DropZone,{proxyOffsets:[-4,-9],fly:Ext.Element.fly,getTargetFromEvent:function(C){var A=Ext.lib.Event.getTarget(C);var B=this.view.findCellIndex(A);if(B!==false){return this.view.getHeaderCell(B)}},nextVisible:function(C){var B=this.view,A=this.grid.colModel;C=C.nextSibling;while(C){if(!A.isHidden(B.getCellIndex(C))){return C}C=C.nextSibling}return null},prevVisible:function(C){var B=this.view,A=this.grid.colModel;C=C.prevSibling;while(C){if(!A.isHidden(B.getCellIndex(C))){return C}C=C.prevSibling}return null},positionIndicator:function(D,B,E){var H=Ext.lib.Event.getPageX(E);var A=Ext.lib.Dom.getRegion(B.firstChild);var I,K,G=A.top+this.proxyOffsets[1];if((A.right-H)<=(A.right-A.left)/2){I=A.right+this.view.borderWidth;K="after"}else{I=A.left;K="before"}var F=this.view.getCellIndex(D);var J=this.view.getCellIndex(B);if(this.grid.colModel.isFixed(J)){return false}var C=this.grid.colModel.isLocked(J);if(K=="after"){J++}if(F<J){J--}if(F==J&&(C==this.grid.colModel.isLocked(F))){return false}I+=this.proxyOffsets[0];this.proxyTop.setLeftTop(I,G);this.proxyTop.show();if(!this.bottomOffset){this.bottomOffset=this.view.mainHd.getHeight()}this.proxyBottom.setLeftTop(I,G+this.proxyTop.dom.offsetHeight+this.bottomOffset);this.proxyBottom.show();return K},onNodeEnter:function(D,A,C,B){if(B.header!=D){this.positionIndicator(B.header,D,C)}},onNodeOver:function(E,B,D,C){var A=false;if(C.header!=E){A=this.positionIndicator(C.header,E,D)}if(!A){this.proxyTop.hide();this.proxyBottom.hide()}return A?this.dropAllowed:this.dropNotAllowed},onNodeOut:function(D,A,C,B){this.proxyTop.hide();this.proxyBottom.hide()},onNodeDrop:function(B,K,F,D){var E=D.header;if(E!=B){var I=this.grid.colModel;var H=Ext.lib.Event.getPageX(F);var A=Ext.lib.Dom.getRegion(B.firstChild);var L=(A.right-H)<=((A.right-A.left)/2)?"after":"before";var G=this.view.getCellIndex(E);var J=this.view.getCellIndex(B);var C=I.isLocked(J);if(L=="after"){J++}if(G<J){J--}if(G==J&&(C==I.isLocked(G))){return false}I.setLocked(G,C,true);I.moveColumn(G,J);this.grid.fireEvent("columnmove",G,J);return true}return false}});Ext.grid.GridView.ColumnDragZone=function(A,B){Ext.grid.GridView.ColumnDragZone.superclass.constructor.call(this,A,B,null);this.proxy.el.addClass("x-grid3-col-dd")};Ext.extend(Ext.grid.GridView.ColumnDragZone,Ext.grid.HeaderDragZone,{handleMouseDown:function(A){},callHandleMouseDown:function(A){Ext.grid.GridView.ColumnDragZone.superclass.handleMouseDown.call(this,A)}});