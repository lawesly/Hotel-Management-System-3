/*
 * Ext JS Library 2.1
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.UpdateManager.defaults.indicatorText="<div class=\"loading-indicator\">Μεταφό�?τωση δεδομ�νων...</div>";if(Ext.View){Ext.View.prototype.emptyText=""}if(Ext.grid.Grid){Ext.grid.Grid.prototype.ddText="{0} Επιλεγμ�νες σει�?�ς"}if(Ext.TabPanelItem){Ext.TabPanelItem.prototype.closeText="Κλείστε το tab"}if(Ext.form.Field){Ext.form.Field.prototype.invalidText="Το πε�?ιεχόμενο του πεδίου δεν είναι αποδεκτό"}if(Ext.LoadMask){Ext.LoadMask.prototype.msg="Μεταφό�?τωση δεδομ�νων..."}Date.monthNames=["Ιανουά�?ιος","Φεβ�?ουά�?ιος","Μά�?τιος","Απ�?ίλιος","Μάιος","Ιο�?νιος","Ιο�?λιος","Α�?γουστος","Σεπτ�μβ�?ιος","Οκτώβ�?ιος","�?ο�μβ�?ιος","Δεκ�μβ�?ιος"];Date.dayNames=["Κυ�?ιακή","Δευτ��?α","Τ�?ίτη","Τετά�?τη","Π�μπτη","Πα�?ασκευή","Σάββατο"];if(Ext.MessageBox){Ext.MessageBox.buttonText={ok:"OK",cancel:"Άκυ�?ο",yes:"�?αι",no:"Όχι"}}if(Ext.util.Format){Ext.util.Format.date=function(A,B){if(!A){return""}if(!(A instanceof Date)){A=new Date(Date.parse(A))}return A.dateFormat(B||"d/m/Y")}}if(Ext.DatePicker){Ext.apply(Ext.DatePicker.prototype,{todayText:"Σήμε�?α",minText:"Η Ημε�?ομηνία είναι π�?ογεν�στε�?η από την παλαιότε�?η αποδεκτή",maxText:"Η Ημε�?ομηνία είναι μεταγεν�στε�?η από την νεότε�?η αποδεκτή",disabledDaysText:"",disabledDatesText:"",monthNames:Date.monthNames,dayNames:Date.dayNames,nextText:"Επόμενος Μήνας (Control+Δεξί Β�λος)",prevText:"Π�?οηγο�?μενος Μήνας (Control + Α�?ιστε�?ό Β�λος)",monthYearText:"Επιλογή Μηνός (Control + Επάνω/Κάτω Β�λος για μεταβολή ετών)",todayTip:"{0} (ΠΛήκτ�?ο Διαστήματος)",format:"d/m/y"})}if(Ext.PagingToolbar){Ext.apply(Ext.PagingToolbar.prototype,{beforePageText:"Σελίδα",afterPageText:"από {0}",firstText:"Π�?ώτη Σελίδα",prevText:"Π�?οηγο�?μενη Σελίδα",nextText:"Επόμενη Σελίδα",lastText:"Τελευταία Σελίδα",refreshText:"Αναν�ωση",displayMsg:"Εμφάνιση {0} - {1} από {2}",emptyMsg:"Δεν υπά�?χουν δεδομ�να"})}if(Ext.form.TextField){Ext.apply(Ext.form.TextField.prototype,{minLengthText:"Το μικ�?ότε�?ο αποδεκτό μήκος για το πεδίο είναι {0}",maxLengthText:"Το μεγαλ�?τε�?ο αποδεκτό μήκος για το πεδίο είναι {0}",blankText:"Το πεδίο είναι υποχ�?εωτικό",regexText:"",emptyText:null})}if(Ext.form.NumberField){Ext.apply(Ext.form.NumberField.prototype,{minText:"Η μικ�?ότε�?η τιμή του πεδίου είναι {0}",maxText:"Η μεγαλ�?τε�?η τιμή του πεδίου είναι {0}",nanText:"{0} δεν είναι αποδεκτός α�?ιθμός"})}if(Ext.form.DateField){Ext.apply(Ext.form.DateField.prototype,{disabledDaysText:"Ανενε�?γό",disabledDatesText:"Ανενε�?γό",minText:"Η ημε�?ομηνία αυτο�? του πεδίου π�?�πει να είναι μετά την {0}",maxText:"Η ημε�?ομηνία αυτο�? του πεδίου π�?�πει να είναι π�?ιν την {0}",invalidText:"{0} δεν είναι �γκυ�?η ημε�?ομηνία - π�?�πει να είναι στη μο�?φή {1}",format:"d/m/y"})}if(Ext.form.ComboBox){Ext.apply(Ext.form.ComboBox.prototype,{loadingText:"Μεταφό�?τωση δεδομ�νων...",valueNotFoundText:undefined})}if(Ext.form.VTypes){Ext.apply(Ext.form.VTypes,{emailText:"Το πεδίο δ�χεται μόνο διευθ�?νσεις Email σε μο�?φή \"user@domain.com\"",urlText:"Το πεδίο δ�χεται μόνο URL σε μο�?φή \"http:/"+"/www.domain.com\"",alphaText:"Το πεδίο δ�χεται μόνο χα�?ακτή�?ες και _",alphanumText:"Το πεδίο δ�χεται μόνο χα�?ακτή�?ες, α�?ιθμο�?ς και _"})}if(Ext.form.HtmlEditor){Ext.apply(Ext.form.HtmlEditor.prototype,{createLinkText:"Δώστε τη διε�?θυνση (URL) για το σ�?νδεσμο (link):",buttonTips:{bold:{title:"Έντονα (Ctrl+B)",text:"Κάνετε το π�?οεπιλεγμ�νο κείμενο �ντονο.",cls:"x-html-editor-tip"},italic:{title:"Πλάγια (Ctrl+I)",text:"Κάνετε το π�?οεπιλεγμ�νο κείμενο πλάγιο.",cls:"x-html-editor-tip"},underline:{title:"Υπογ�?άμμιση (Ctrl+U)",text:"Υπογ�?αμμίζετε το π�?οεπιλεγμ�νο κείμενο.",cls:"x-html-editor-tip"},increasefontsize:{title:"Μεγ�θυνση κειμ�νου",text:"Μεγαλώνετε τη γ�?αμματοσει�?ά.",cls:"x-html-editor-tip"},decreasefontsize:{title:"Σμίκ�?υνση κειμ�νου",text:"Μικ�?αίνετε τη γ�?αμματοσει�?ά.",cls:"x-html-editor-tip"},backcolor:{title:"Χ�?ώμα Φόντου Κειμ�νου",text:"Αλλάζετε το χ�?ώμα στο φόντο του π�?οεπιλεγμ�νου κειμ�νου.",cls:"x-html-editor-tip"},forecolor:{title:"Χ�?ώμα Γ�?αμματοσει�?άς",text:"Αλλάζετε το χ�?ώμα στη γ�?αμματοσει�?ά του π�?οεπιλεγμ�νου κειμ�νου.",cls:"x-html-editor-tip"},justifyleft:{title:"Α�?ιστε�?ή Στοίχιση Κειμ�νου",text:"Στοιχίζετε το κείμενο στα α�?ιστε�?ά.",cls:"x-html-editor-tip"},justifycenter:{title:"Κεντ�?ά�?ισμα Κειμ�νου",text:"Στοιχίζετε το κείμενο στο κ�ντ�?ο.",cls:"x-html-editor-tip"},justifyright:{title:"Δεξιά Στοίχιση Κειμ�νου",text:"Στοιχίζετε το κείμενο στα δεξιά.",cls:"x-html-editor-tip"},insertunorderedlist:{title:"Εισαγωγή Λίστας Κουκίδων",text:"Ξεκινήστε μια λίστα με κουκίδες.",cls:"x-html-editor-tip"},insertorderedlist:{title:"Εισαγωγή Λίστας Α�?ίθμησης",text:"Ξεκινήστε μια λίστα με α�?ίθμηση.",cls:"x-html-editor-tip"},createlink:{title:"Hyperlink",text:"Μετατ�?�πετε το π�?οεπιλεγμ�νο κείμενο σε Link.",cls:"x-html-editor-tip"},sourceedit:{title:"Επεξε�?γασία Κώδικα",text:"Μεταβαίνετε στη λειτου�?γία επεξε�?γασίας κώδικα.",cls:"x-html-editor-tip"}}})}if(Ext.grid.GridView){Ext.apply(Ext.grid.GridView.prototype,{sortAscText:"Α�?ξουσα ταξινόμηση",sortDescText:"Φθίνουσα ταξινόμηση",lockText:"Κλείδωμα στήλης",unlockText:"Ξεκλείδωμα στήλης",columnsText:"Στήλες"})}if(Ext.grid.PropertyColumnModel){Ext.apply(Ext.grid.PropertyColumnModel.prototype,{nameText:"Όνομα",valueText:"Πε�?ιεχόμενο",dateFormat:"m/d/Y"})}if(Ext.layout.BorderLayout.SplitRegion){Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype,{splitTip:"Σ�?�?ετε για αλλαγή μεγ�θους.",collapsibleSplitTip:"Σ�?�?ετε για αλλαγή μεγ�θους. Διπλό κλικ για απόκ�?υψη."})};