function SCdivShow(){jQuery("#sc_div").is(":hidden")&&jQuery("#sc_div").removeClass("hideme")}function SCdivHide(){jQuery("#sc_div").is(":visible")&&jQuery("#sc_div").addClass("hideme")}function inputFocus(e){e.value==e.defaultValue&&(e.value="",jQuery(e).removeClass("blurredDefaultText"))}function inputBlur(e){""!=e.value&&e.value!=e.defaultValue||(e.value=e.defaultValue,jQuery(e).addClass("blurredDefaultText"))}function PreventDefaultKeys(e){(e.which<48||e.which>57&&e.which<97||e.which>122)&&95!=e.which&&e.preventDefault()}function FilterString(e){return e.replace(/[^a-z0-9\s]/gi,"").replace(/[-\s]/g,"_").toLowerCase()}function ShowThisSC(e,t){var s,o;if(t)for(a=1;a<=t;a++)jQuery("#att_name_"+a).val().length>0&&(null===s||void 0===s?(s=jQuery("#att_name_"+a).val()+'="'+jQuery("#att_val_"+a).val()+'"',t>1&&(s+=" ")):(s+=jQuery("#att_name_"+a).val()+'="'+jQuery("#att_val_"+a).val()+'"',a<t&&(s+=" ")));if(jQuery("#gpost_opt").is(":checked")?(o=' id="" slug="" title=""',jQuery("#sc_div_gpost_opt").hasClass("hideme")&&e&&jQuery("#sc_div_gpost_opt").removeClass("hideme")):(o="",jQuery("#sc_div_gpost_opt").hasClass("hideme")||jQuery("#sc_div_gpost_opt").addClass("hideme")),s)r=" "+s;else var r="";jQuery("#this_shortcode").html("Your shortcode is:<br />"),jQuery("#this_shortcode_box").val("["+e+r+o+"]{@content}[/"+e+"]")}function copyToClipboardMsg(e,t){var s;s=copyToClipboard(e)?"Shortcode copied.":"Copy not supported or blocked. Press Ctrl+c to copy.","string"==typeof t&&(t=document.getElementById(t)),t.innerHTML=s,setTimeout(function(){t.innerHTML=""},2e3)}function copyToClipboard(e){var t,s,o="INPUT"===e.tagName||"TEXTAREA"===e.tagName;if(o)r=e,t=e.selectionStart,s=e.selectionEnd;else{if(!(r=document.getElementById("_hiddenCopyText_"))){var r=document.createElement("textarea");r.style.position="absolute",r.style.left="-9999px",r.style.top="0",r.id="_hiddenCopyText_",document.body.appendChild(r)}r.textContent=e.textContent}var a=document.activeElement;r.focus(),r.setSelectionRange(0,r.value.length);var i;try{i=document.execCommand("copy")}catch(e){i=!1}return a&&"function"==typeof a.focus&&a.focus(),o?e.setSelectionRange(t,s):r.textContent="",i}function ListAttributesDisplayed(){var e,t,s=jQuery("#att_counter").val();for(a=1;a<=s;a++)if(jQuery("#att_name_"+a).val().length>0){var o='<a class="onmouseover" id="lattname_'+a+'">{@'+jQuery("#att_name_"+a).val()+"}</a>";null===e||void 0===e?e=o:e+=o,a<s&&(e+=", ")}t=e?"Attribute(s): "+e+'<br />Optional attribute: <a class="onmouseover" id="sc_main_content">{@content}</a>':'Optional attribute: <a class="onmouseover" id="sc_main_content">{@content}</a>',jQuery("#spk_att_list").html(t)}function getSelectedText(){var e="";return void 0!==window.getSelection?e=window.getSelection().toString():void 0!==document.selection&&"Text"==document.selection.type&&(e=document.selection.createRange().text),e}function insertAtCaret(e,t){var s=document.getElementById(e);if(s){var o=s.scrollTop,r=0,a=s.selectionStart||"0"==s.selectionStart?"ff":!!document.selection&&"ie";if("ie"==a){s.focus();var i=document.selection.createRange();i.moveStart("character",-s.value.length),r=i.text.length}else"ff"==a&&(r=s.selectionStart);var u=s.value.substring(0,r),n=s.value.substring(r,s.value.length);if(s.value=u+t+n,r+=t.length,"ie"==a){s.focus();var c=document.selection.createRange();c.moveStart("character",-s.value.length),c.moveStart("character",r),c.moveEnd("character",0),c.select()}else"ff"==a&&(s.selectionStart=r,s.selectionEnd=r,s.focus());s.scrollTop=o}}function EnableDisableDropDowns(e){jQuery("[id^=dt_]").each(function(){"disable"==e?jQuery(this).attr("disabled",!0):jQuery(this).removeAttr("disabled")})}function ShowHideBtnCPTClear(e){jQuery("#cpt_clear").hasClass("hideme")?"show"==e&&jQuery("#cpt_clear").removeClass("hideme"):"hide"==e&&jQuery("#cpt_clear").addClass("hideme")}function HideOthersBut(e){var t=0;jQuery("[id^=dt_]").each(function(){jQuery(this).is(":visible")&&jQuery(this).attr("id")!=e&&(jQuery(this).fadeOut(FadeSpeed,function(){jQuery(e).length&&jQuery(e).fadeIn(FadeSpeed),ListCustomFields(jQuery(e).val()),ListTaxonomies(jQuery(e).val())}),t++)}),0==t&&(jQuery(e).length&&jQuery(e).fadeIn(FadeSpeed),ListCustomFields(jQuery(e).val()),ListTaxonomies(jQuery(e).val()))}function ListCustomFields(e){jQuery.ajax({type:"POST",url:FileLoc+"get_custom_fields.php",data:"pid="+e,datatype:"html",success:function(e){jQuery("#putcustomfieldshere").html(e)}})}function ListTaxonomies(e){jQuery.ajax({type:"POST",url:FileLoc+"get_my_taxonomies.php",data:"pid="+e,datatype:"html",success:function(e){jQuery("#puttaxeshere").html(e)}})}function CheckForVisibleSelect(){jQuery("[id^=dt_]").each(function(){jQuery(this).hasClass("hideme")||(ListCustomFields(jQuery(this).val()),ListTaxonomies(jQuery(this).val()))})}var FadeSpeed="fast",FileLoc=spk_scj.spk_scj_ajax,MaxAtts=20;jQuery(document).ready(function(){for(jQuery('label[for="slugdiv-hide"]').hide(),jQuery("#spk_shortcoders_box_4-hide").is(":checked")||jQuery("#spk_shortcoders_box_4-hide").prop("checked",!0),a=1;a<=MaxAtts;a++)0==jQuery("#att_name_"+a).val().length&&inputBlur(jQuery("#att_name_"+a)),0==jQuery("#att_val_"+a).val().length&&inputBlur(jQuery("#att_val_"+a)),jQuery("#att_name_"+a,"#att_val_"+a).blur(function(){inputBlur(this)}),jQuery("#att_name_"+a,"#att_val_"+a).focus(function(){inputFocus(this)});jQuery("#_spk_shortcoders_slug").val().length>0?(ShowThisSC(jQuery("#_spk_shortcoders_slug").val(),jQuery("#att_counter").val()),SCdivShow()):SCdivHide(),ListAttributesDisplayed(),(jQuery("#ppc_opt").is(":checked")||jQuery("#gpost_opt").is(":checked"))&&(jQuery("#spk_shortcoders_box_4").hasClass("hideme")&&jQuery("#spk_shortcoders_box_4").removeClass("hideme"),CheckForVisibleSelect()),jQuery("#gpost_opt").is(":checked")&&EnableDisableDropDowns("disable"),jQuery("#spk_shortcoders_box_4").hasClass("hide-if-js")&&jQuery("#spk_shortcoders_box_4").removeClass("hide-if-js")}),jQuery("#title").focusin(function(){jQuery("#title, #title-prompt-text").removeAttr("style")}),jQuery("#title").focusout(function(){if(0==jQuery(this).val().length)jQuery(this).css("background-color","#FF6347"),jQuery("#title-prompt-text").css("color","#fff"),jQuery("#this_shortcode").html("Please enter a shortcode name"),0==jQuery("#_spk_shortcoders_slug").val().length&&(SCdivHide(),jQuery("#this_shortcode_box").val(""));else if(0==jQuery("#_spk_shortcoders_slug").val().length){var e=FilterString(jQuery(this).val());jQuery("#_spk_shortcoders_slug").val(e),ShowThisSC(e,jQuery("#att_counter").val()),SCdivShow()}}),jQuery("#_spk_shortcoders_slug").on("keyup change",function(){ShowThisSC(jQuery(this).val().replace(/[-\s]/g,"_"),jQuery("#att_counter").val()),jQuery(this).val().length>0?SCdivShow():SCdivHide()}),jQuery("#_spk_shortcoders_slug").bind("keypress",function(e){PreventDefaultKeys(e)}),jQuery("#btn_copy_sc").click(function(){copyToClipboardMsg(document.getElementById("this_shortcode_box"),"msg")}),jQuery("#add_att").on("click",function(){if(jQuery("#att_counter").val().length>0)e=parseInt(jQuery("#att_counter").val())+1;else var e=1;jQuery("#att_div_"+e).fadeIn(FadeSpeed),jQuery("#att_counter").val(e)}),jQuery("a").click(function(e){var t=e.target.id.split("_");if("rem"==t[0]){jQuery("#att_div_"+t[2]).fadeOut(FadeSpeed,function(){jQuery("#att_name_"+t[2]).val(""),jQuery("#att_val_"+t[2]).val("")});var s=parseInt(jQuery("#att_counter").val())-1;jQuery("#att_counter").val(s),ListAttributesDisplayed()}}),jQuery("[id^=att_name]").each(function(){jQuery(this).bind("keypress",function(e){PreventDefaultKeys(e)}),jQuery(this).on("keyup change",function(){ShowThisSC(jQuery("#_spk_shortcoders_slug").val(),jQuery("#att_counter").val()),ListAttributesDisplayed()})}),jQuery("[id^=att_val]").each(function(){jQuery(this).bind("keypress",function(e){PreventDefaultKeys(e)}),jQuery(this).on("keyup change",function(){ShowThisSC(jQuery("#_spk_shortcoders_slug").val(),jQuery("#att_counter").val())})}),jQuery("#spk_att_list").on("click","a",function(){if("sc_main_content"==jQuery(this).attr("id"))e="{@content}";else var e=jQuery(this).text();insertAtCaret("_spk_shortcoders_code",e)}),jQuery("[id^=db_fields_]").each(function(){jQuery(this).on("click",function(){insertAtCaret("_spk_shortcoders_code",jQuery(this).text())})}),jQuery("#puttaxeshere").on("click","a",function(){insertAtCaret("_spk_shortcoders_code",jQuery(this).text())}),jQuery("#putcustomfieldshere").on("click","a",function(){insertAtCaret("_spk_shortcoders_code",jQuery(this).text())}),jQuery("#ppc_opt").click(function(){jQuery("#ppc_opt").is(":checked")&&jQuery("#spk_shortcoders_box_4").removeClass("hideme"),ShowHideBtnCPTClear("show"),EnableDisableDropDowns("enable"),ShowThisSC(jQuery("#_spk_shortcoders_slug").val(),jQuery("#att_counter").val())}),jQuery("#ppc_opt_text").click(function(){jQuery("#ppc_opt").is(":checked")||(jQuery("#ppc_opt").prop("checked",!0),jQuery("#spk_shortcoders_box_4").removeClass("hideme")),ShowHideBtnCPTClear("show"),EnableDisableDropDowns("enable"),ShowThisSC(jQuery("#_spk_shortcoders_slug").val(),jQuery("#att_counter").val())}),jQuery("#gpost_opt").on("click",function(){jQuery(this).is(":checked")&&jQuery("#spk_shortcoders_box_4").removeClass("hideme"),ShowHideBtnCPTClear("show"),EnableDisableDropDowns("disable"),ShowThisSC(jQuery("#_spk_shortcoders_slug").val(),jQuery("#att_counter").val())}),jQuery("#gpost_opt_text").on("click",function(){jQuery("#gpost_opt").is(":checked")||(jQuery("#gpost_opt").prop("checked",!0),jQuery("#spk_shortcoders_box_4").removeClass("hideme")),ShowHideBtnCPTClear("show"),EnableDisableDropDowns("disable"),ShowThisSC(jQuery("#_spk_shortcoders_slug").val(),jQuery("#att_counter").val())}),jQuery("#cpt_clear").on("click",function(){ShowHideBtnCPTClear("hide"),jQuery('input[name="cb_ppc_opt"]').each(function(){jQuery(this).prop("checked",!1)}),jQuery("#spk_shortcoders_box_4").hasClass("hideme")||jQuery("#spk_shortcoders_box_4").addClass("hideme"),ShowThisSC(jQuery("#_spk_shortcoders_slug").val(),jQuery("#att_counter").val())}),jQuery("#dtm_post_type").on("change",function(){"default_value"!=jQuery("#dtm_post_type").val()?(HideOthersBut("#dt_"+jQuery("#dtm_post_type").val().split("#dt_")[0]),jQuery("#db_colnames").hasClass("hideme")&&jQuery("#db_colnames").removeClass("hideme")):(HideOthersBut(),jQuery("#db_colnames").hasClass("hideme")||jQuery("#db_colnames").addClass("hideme"))}),jQuery("[id^=dt_]").each(function(){jQuery(this).on("change",function(){ListCustomFields(jQuery(this).val()),ListTaxonomies(jQuery(this).val())})});