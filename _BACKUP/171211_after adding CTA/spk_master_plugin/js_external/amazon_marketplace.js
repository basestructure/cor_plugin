var amazon_assoc_ir_f_call_associates_ads=function(d){var b="",c,a;if(typeof JSON!=="undefined"){a=JSON.stringify(d);}else{if(typeof amzn_assoc_utils!=="undefined"){a=amzn_assoc_utils.stringify(d);}else{return;}}if(typeof d.logType!=="undefined"){b="&logType="+d.logType;}c="//fls-na.amazon-adsystem.com/1/associates-ads/1/OP/r/json";c=c+"?cb="+(new Date()).getTime()+b+"&p="+encodeURIComponent(a);(new Image()).src=c;};var amazon_assoc_ir_f_call=amazon_assoc_ir_f_call_associates_ads;var amazon_assoc_ir_call=function(c,b,a){new Image().src="//ir-na.amazon-adsystem.com/e/ir?o="+a+"&t="+c+"&l="+b+"&cb="+(new Date()).getTime();};window.cmManager=function(h,g,i){var j={},l={},k={};j.startScope=function(b,a){k[b+a]=new Date().getTime();};j.endScope=function(d,c,a){var b;if(typeof k[d+c]!=="undefined"){b=new Date().getTime()-k[d+c];}else{if(typeof a!=="undefined"){b=new Date().getTime()-a;}else{return;}}j.queue(d,[{name:c,value:b}]);delete k[d+c];};j.addCounter=function(c,b,a){j.queue(c,[{name:b,value:a}]);};j.queue=function(b,a){if(typeof l[b]!=="undefined"){l[b]=l[b].concat(a);}else{l[b]=a;}};j.trigger=function(b,w,f){var v="//"+h+"action-impressions/1/OE/associates-adsystems/action/",a,e,c="",u="",s,d=0;for(a in l){if(l.hasOwnProperty(a)){d=d+1;v=v+u+a+":";c="";for(e=0;e<l[a].length;e++){var t=l[a][e];v=v+c+t.name;if(typeof t.value!=="undefined"){v=v+"@v="+t.value;}c=",";}u="/";}}l={};if(d>0){s=new Image();s.src=v+"?marketplace="+g+"&service=AmazonWidgets&method="+i+"&marketplaceId="+b+"&requestId="+w+"&session="+f;return s.src;}else{return"";}};return j;};window.amzn_assoc_cm=cmManager("fls-na.amazon-adsystem.com/1/","US","Widgets_Render_Time");amzn_assoc_enable_abs=true;window.amzn_assoc_placement="adunit0";window.amzn_assoc_tracking_id="understand0d4-20";window.amzn_assoc_ad_mode="auto";window.amzn_assoc_ad_type="smart";window.amzn_assoc_marketplace="amazon";window.amzn_assoc_region="US";window.amzn_assoc_default_category="All";window.amzn_assoc_linkid="294e744f689247c16a46e978f65f72b6";window.amzn_assoc_fallback_mode=JSON.parse('{"type":"search","value":"self help"}');window.amzn_assoc_enable_interest_ads="true";if(document.getElementById("amzn-assoc-ad-9f2cb097-ecee-468c-b007-0b4fcd5a22c9")!==null){window.amzn_assoc_div_name="amzn-assoc-ad-9f2cb097-ecee-468c-b007-0b4fcd5a22c9";}(function(){if(typeof window.performance!=="undefined"&&typeof window.performance.timing!=="undefined"){amzn_assoc_cm.endScope("cm_","onejs_load_evt",window.performance.timing.navigationStart);if(window.performance.timing.loadEventEnd>0){amzn_assoc_cm.endScope("cm_","onejs_load_evt_doc_load",window.performance.timing.loadEventEnd);}}amzn_assoc_cm.startScope("cm_","onejs_exec_time");amzn_assoc_cm.startScope("cm_","wdgt_load_time_invoke");}());window.amzn_assoc_internal_params={viewerCountry:"",exp_details:"",destinationTrackingId:"",ad_id:"",ead:"",URL:"",div_name:"",override:"",sourceTrackingId:"",sign_links:"",aax_src_id:"",textlinks:"",subtag:"",slotNum:"",ac_website:"",enable_geo_redirection:"",force_win_bid:"",enable_auto_tagging:"",preview:"",axf_treatment:"",aax_test_punt:"",debug:"",axf_exp_name:""};window.assocUtilsMaker=function(e,y,A){var B=window,t={},v,u={},s={},w={},p={CA:"330"},q=function(f,b,g,c,j,d){var i={},a,h,k;if(typeof f[b]!=="undefined"&&f[b]!==""){f[g]=f[g]||[];h=f[b].split(",");for(k=0;k<h.length;k++){i={};i[c]=h[k].trim();i.emphasis=j;for(a in d){if(d.hasOwnProperty(a)){i[a]=d[a];}}f[g].push(i);}}},x=function(d,a,g,b){var f,c;if(typeof d[a]!=="undefined"&&d[a]!==""){d[g]=d[g]||[];f=d[a].split(",");for(c=0;c<f.length;c++){d[g].push(b(f[c]));}}},z=function(a){q(a,"emphasize_categories","acap_categoryConstraints","category","Strong",{type:"AmazonBrowse"});q(a,"ignore_categories","acap_categoryConstraints","category","Ignore",{type:"AmazonBrowse"});q(a,"restrict_categories","acap_categoryConstraints","category","Restrict",{type:"AmazonBrowse"});q(a,"emphasize_keywords","acap_keywordConstraints","keyword","Strong",{});q(a,"ignore_keywords","acap_keywordConstraints","keyword","Ignore",{});x(a,"ignore_keywords","acap_skipTitleList",function(b){return"(.*)"+b.trim()+"(.*)";});x(a,"fallback_products","acap_pubPickList",function(b){return b.trim();});};try{v=parseInt(y);}catch(r){v=6;}t.createDiv=function(c,a,b){if(b){document.write('<span id="'+c+"_"+a+'"></span>');}else{document.write('<div id="'+c+"_"+a+'"></div>');}return c+"_"+a;};t.registerAdCountComputer=function(b,a){u[b]=a;};t.getExpectedAdCount=function(b,a){if(typeof u[b.ad_type]==="undefined"){return 0;}else{return u[b.ad_type](b,a);}};t.generateGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var c=Math.random()*16|0,b=a=="x"?c:(c&3|8);return b.toString(16);});};t.loadRemoteScript=function(c,a,b){(function(d,i){var g=d.createElement("script"),f,h=false;g.type="text/javascript";g.async=true;g.src=c;g.setAttribute("charset","UTF-8");f=document.getElementsByTagName("head")[0]||document.documentElement;g.onload=g.onreadystatechange=function(){if(!h&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){h=true;if(typeof i==="function"){i();}g.onload=g.onreadystatechange=null;if(f&&g.parentNode){f.removeChild(g);}}};g.onerror=function(){var k=s[b.slotNum]?"ssp_load_error":"aax_load_error";var j=s[b.slotNum]?"ssp_load_time":"aax_load_time";if(w[b.slotNum]){amzn_assoc_cm.addCounter("cm_"+k,1);amzn_assoc_cm.endScope("cm_",j);amzn_assoc_cm.endScope("cm_",j+"_"+b.adOptions.ad_type);}else{amzn_assoc_cm.addCounter("cm_adhtml_load_error",1);}amzn_assoc_cm.trigger(e,t.generateGuid(),t.generateGuid());};f.insertBefore(g,f.firstChild);}(document,a));};t.fetchHtml=function(i,b){var a=i.url,d,g,f=t.generateGuid(),c=t.generateGuid(),h=s[i.slotNum]?"ssp_load_time":"aax_load_time";if(typeof b==="undefined"){b=0;}i.slotNum=i.slotNum||0;w[i.slotNum]=i.aaxMediated;if(!i.dontInject){if(typeof i.elemName==="undefined"&&!i.explicitAsync){i.elemName=t.createDiv(i.prefix,i.slotNum,i.inline);}}if(i.renderInIframe&&!i.aaxMediated){g=i.iframeStyle;if((!g||g==="")&&i.adOptions.width&&i.adOptions.height){g="width:"+i.adOptions.width+"px;height:"+i.adOptions.height+"px;";}(function(){var j=document.getElementById(i.elemName);if(!i.dontInject){j.innerHTML='<iframe id="amzn_assoc_ad_'+i.slotNum+'" style="'+g+'" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="'+i.url+'"></iframe>';t.execBodyScripts(j,i.slotNum);}}());return;}d="amzn_assoc_jsonp_callback_"+i.placement+"_"+i.slotNum;if(i.aaxMediated){a=a+"&jscb="+d;}else{a=a+"&jsonp="+d;}(function(j){B[d]=function(l){var o,n;if(i.aaxMediated){amzn_assoc_cm.endScope("cm_",h);amzn_assoc_cm.endScope("cm_",h+"_"+i.adOptions.ad_type);if(l&&l.html){try{o=JSON.parse(l.html);o.pj=i.adOptions;o.originUrl=i.adOptions.URL||document.location.href;i.url="https://ws-na.amazon-adsystem.com:443/widgets/safl";i.url=i.url+"?q="+encodeURIComponent(JSON.stringify(o));if(o.customPixels){for(n=0;n<o.customPixels.length;n++){new Image().src=o.customPixels[n];}}t.fetchHtml(i);return;}catch(k){l=l.html;}}else{if(i.adOptions.preview==="true"&&b<v){setTimeout(function(){t.fetchHtml(i,b+1);},A);}else{i.url=i.aaxPuntFallback+"&aaxPunt=true";i.aaxMediated=false;amzn_assoc_cm.addCounter("cm_","aax_punt",1);amzn_assoc_cm.addCounter("cm_","aax_punt_"+i.adOptions.ad_type,1);t.fetchHtml(i);B["amzn_assoc_client_cb_"+i.slotNum]({type:"onfail",data:{reason:"No response from server"}});}return;}}else{amzn_assoc_cm.endScope("cm_","adhtml_load_time");amzn_assoc_cm.endScope("cm_","adhtml_load_time_"+i.adOptions.ad_type);}var m=document.getElementById(j);if(!i.dontInject){if(!m){m=document.createElement("div");if(typeof j!=="undefined"){m.setAttribute("id",j);}document.body.appendChild(m);}m.innerHTML=l;t.execBodyScripts(m,i.slotNum);}if(typeof i.cb==="function"){i.cb(l);}};B["amzn_assoc_client_cb_"+i.slotNum]=function(k){if(typeof k.widget!=="undefined"){k.widget.adOptions=i.adOptions;if(typeof window.amzn_assoc_utils.getSynchronousAdCodeGenerator==="function"){k.widget.getSynchronousAdCode=window.amzn_assoc_utils.getSynchronousAdCodeGenerator();k.widget.getSynchronousAdCodeJson=window.amzn_assoc_utils.getSynchronousAdCodeJsonGenerator();k.widget.getSynchronousAdCodeForAdInstance=window.amzn_assoc_utils.getSynchronousAdCodeGeneratorForAdInstance();k.widget.getSynchronousAdCodeWithAdInstance=window.amzn_assoc_utils.getSynchronousAdCodeGeneratorWithAdInstance();k.widget.getAsynchronousAdCodeWithAdInstance=window.amzn_assoc_utils.getAsynchronousAdCodeGeneratorWithAdInstance();}k.widget.reload=function(n,l){var m;for(m in n){if(n.hasOwnProperty(m)){i.adOptions[m]=n[m];}}if(typeof l!=="undefined"){for(m in l){if(l.hasOwnProperty(m)){delete i.adOptions[m];}}}i.adOptions.div_name=j;amzn_assoc_ad.render(i.adOptions);};}if(k.type==="onload"){if(typeof window.performance!=="undefined"&&typeof window.performance.timing!=="undefined"){amzn_assoc_cm.endScope("cm_","wdgt_load_time",window.performance.timing.navigationStart);amzn_assoc_cm.endScope("cm_","wdgt_load_time_"+i.adOptions.viewerCountry,window.performance.timing.navigationStart);amzn_assoc_cm.endScope("cm_","wdgt_load_time_"+i.adOptions.ad_type,window.performance.timing.navigationStart);if(window.performance.timing.loadEventEnd>0){amzn_assoc_cm.endScope("cm_","wdgt_load_time_doc_load",window.performance.timing.loadEventEnd);amzn_assoc_cm.endScope("cm_","wdgt_load_time_doc_load_"+i.adOptions.ad_type,window.performance.timing.loadEventEnd);}}amzn_assoc_cm.endScope("cm_","wdgt_load_time_invoke");amzn_assoc_cm.endScope("cm_","wdgt_load_time_invoke_"+i.adOptions.ad_type);amzn_assoc_cm.endScope("cm_","wdgt_load_time_invoke_"+i.adOptions.ad_type+"_"+i.adOptions.viewerCountry);}if(typeof i.clientCbs==="object"&&typeof i.clientCbs[k.type]==="function"){k.data.slotNum=i.slotNum;k.data.container=i.elemName;i.clientCbs[k.type](k.data,k.widget);}amzn_assoc_cm.trigger(e,f,c);};}(i.elemName));amzn_assoc_cm.endScope("cm_","onejs_exec_time");if(i.aaxMediated){amzn_assoc_cm.startScope("cm_",h);amzn_assoc_cm.startScope("cm_",h+"_"+i.adOptions.ad_type);}else{amzn_assoc_cm.startScope("cm_","adhtml_load_time");amzn_assoc_cm.startScope("cm_","adhtml_load_time_"+i.adOptions.ad_type);}t.loadRemoteScript(a,function(){},i);};t.serialize=function(d,f,a,i){var b=[],h;for(var g in d){if(d.hasOwnProperty(g)&&typeof d[g]!="function"){var c=((i)?encodeURIComponent(g):g)+"=";if(a){c+="'";}if(d[g] instanceof Array){h=d[g][0];}else{h=d[g];}c+=(i)?encodeURIComponent(h):h;if(a){c+="'";}b.push(c);}}return b.join(f);};t.nodeName=function(b,a){return b.nodeName&&b.nodeName.toUpperCase()===a.toUpperCase();};t.execBodyScripts=function(f,b){var c=function(n,k){var l=" //# sourceURL=dynscript-"+n+(b?"-"+b:"")+".js";var D=(k.text||k.textContent||k.innerHTML||"")+l,o=document.getElementsByTagName("head")[0]||document.documentElement,j=document.createElement("script");j.type="text/javascript";if(k.src){j.src=(k.src||"");}try{j.appendChild(document.createTextNode(D));}catch(m){j.text=D;}o.insertBefore(j,o.firstChild);},i=[],g,h=f.childNodes,a,d;for(d=0;h[d];d++){a=h[d];if(t.nodeName(a,"script")&&(!a.type||a.type.toLowerCase()==="text/javascript")){i.push(a);}else{t.execBodyScripts(a);}}for(d=0;i[d];d++){g=i[d];if(g.parentNode){g.parentNode.removeChild(g);}c(d,i[d]);}};t.fetchAmazonLinks=function(){var f=document.getElementsByTagName("a"),i=function(n){var m=document.createElement("a");m.href=n;return m;},a=new RegExp("https://www.amazon.com".replace(/(http:\/\/|https:\/\/)/ig,"")),k=new RegExp("(?:[/=])([A-Z0-9]{10})(?:[/?&]|$)","i"),g=new RegExp("(linkcode|lc|link_code)=","igm"),j=new RegExp("(linkcode|lc|link_code)=(am1|am2|am3|as1|as2|as3|as4|asm|df0|df1|df2|df4|asn|at1|btl|ptl|ktl|em1|pat|xm2|qcb|qs|tre|ur2|ure|sl1|sl2|ll1|w50|w61|w62|w63|g11|g12|g13|g14)","igm"),b="";for(var l=0;l<f.length;l++){if(f[l].href){var d=i(f[l].href);if(d.hostname.match(a)){var c=(d.pathname.match(k)||d.search.match(k));var h=(d.search.search(j)!=-1||d.search.search(g)==-1);if(c&&h){b+=c[1].toUpperCase()+",";}if(c){f[l].setAttribute("data-amzn-asin",c[1]);}}}}return b.substring(0,b.length-1);};t.checkAvailableSpace=function(c,b){var a=document.getElementById(b);return c!=="smart"||(a&&a.getBoundingClientRect().width>0);};t.getAAXUrl=function(d,i,o,h,g,k,a,j,m,l){var n={},c=(d.width&&d.width!=="auto")?d.width:"1",f=(d.height&&d.height!=="auto")?d.height:"1",b=document.getElementById(h);d.debug=k.toString();d.acap_publisherId=d.tracking_id;z(d);if(typeof d.aax_src_id!=="undefined"&&d.aax_src_id!==""){n.src=d.aax_src_id;}else{if(p[d.viewerCountry]){n.src=p[d.viewerCountry];}else{n.src=(typeof d.ad_type!=="undefined"&&typeof d.ad_mode!=="undefined"&&typeof j[d.ad_type+"-"+d.ad_mode]!=="undefined"&&m.isDedicatedSourceForRecoAdsEnabled())?j[d.ad_type+"-"+d.ad_mode]:j["default"];}}n.c=i[o].aaxChannel;if(d.preview==="true"){n.c=i[o].aaxPreviewChannel;}n.sz=c+"x"+f;n.apiVersion=i[o].aaxApiVersion;d.slotNum=o;if(typeof u[d.ad_type]!=="undefined"){d.ead=u[d.ad_type](d,b.getBoundingClientRect().width);}if(typeof l!=="undefined"){d.viewerCountry=l;}n.pj=JSON.stringify(d);if((typeof k!=="undefined"&&k)||(typeof a!=="undefined"&&a)){n.testToken=i[o].aaxTestToken;n.n1apiVersion=i[o].aaxApiVersion;n.n1url=i[o].aaxBidRequestURL;n.n1id=i[o].n1id;}n.u=d.URL||document.location.href;s[o]=i[o].isSSPSelected;if(s[o]){amzn_assoc_cm.addCounter("cm_","ssp_selected",1);amzn_assoc_cm.addCounter("cm_","ssp_selected_"+g[d.ad_type],1);}return(s[o]?(i[o].sspServerURL+"/widgets/getad?"):(i[o].aaxURL+"/x/getad?"))+t.serialize(n,"&",false,true);};t.shouldSSPBeEnabledByAdCodeOptions=function(a){return typeof a.exclude_brands==="string"&&a.exlude_brands!=="";};t.shouldSSPBeUsed=function(b,a,f,d,c){return(b||c||(a.isSSPEnabled()&&f[d.ad_type])||t.shouldSSPBeEnabledByAdCodeOptions(d));};t.createAdUnitDeliveryNetworkPerSlot=function(b,a,d,c){return{aaxChannel:"100",aaxPreviewChannel:"88",aaxApiVersion:"2.0",aaxTestToken:"7snvCunWohswq2jh",aaxBidRequestURL:"http://ws-na-prod.amazon.com/widgets/bid",n1id:"500",aaxURL:"//aax-us-east.amazon-adsystem.com",sspServerURL:"//ws-na.amazon-adsystem.com",isSSPSelected:t.shouldSSPBeUsed(b,a,d,c,false)};};return t;};window.amzn_assoc_utils=window.assocUtilsMaker("ATVPDKIKX0DER","6",1000);window.nativeAdLayoutComputer=(function(){var f={},d=3,e={rows:5,columns:5};f.computeLayout=function(y,C,v,B,b,s){var c,A,z,a,t,u,w,x,D={grid:{marginWidth:10,defaultMinItemWidth:128,maxItemWidth:250,maxColumnCount:4,partialCardSpacePercent:{min:25,max:75,defaultPercent:50,fallbackPercent:50}},inContent:{marginWidth:10,defaultMinItemWidth:240,maxColumnCount:3,partialCardSpacePercent:{min:15,max:40,defaultPercent:25,fallbackPercent:10}},concept:{marginWidth:10,defaultMinItemWidth:170,maxColumnCount:4,partialCardSpacePercent:{min:15,max:40,defaultPercent:25,fallbackPercent:10}}};B=(typeof B==="undefined")?"grid":B;if(B==="grid"){if(b){D[B].maxColumnCount=parseInt(b);}}else{if(B==="inContent"){D[B].maxColumnCount=(typeof b==="undefined")?D[B].maxColumnCount:Math.max(b,D[B].maxColumnCount);}}C=(typeof C==="undefined")?D[B].defaultMinItemWidth:C;t=parseInt(y/C);if(t===0){return{columnCount:0,columnWidth:0,columnWidthPercentage:0,marginLeftPercentage:0};}if(t>D[B].maxColumnCount){t=D[B].maxColumnCount;}c=(t-1)*D[B].marginWidth;A=(y-c)/t;if(A<C){t=t-1;c=(t-1)*D[B].marginWidth;A=(y-c)/t;}if(v){u=y-c-(t*A);w=(u/A)*100;if(w<D[B].partialCardSpacePercent.min||w>D[B].partialCardSpacePercent.max){c=(t*D[B].marginWidth);x=s?(D[B].partialCardSpacePercent.fallbackPercent/100):(D[B].partialCardSpacePercent.defaultPercent/100);A=(y-c)/(t+x);while(A<C){t=t-1;c=(t*D[B].marginWidth);A=(y-c)/(t+x);}}}z=(A*100)/y;a=(100-(z*t))/(t-1);if(B==="grid"&&A>D[B].maxItemWidth){A=D[B].maxItemWidth;z=(A*100)/y;a=(D[B].marginWidth*100)/y;}return{columnCount:t,columnWidth:A,columnWidthPercentage:z,marginLeftPercentage:a};};f.getExpectedAdCount=function(m,b,k){var a=(typeof m.rows!=="undefined")?parseInt(m.rows):2,n=(typeof m.rows!=="undefined")?parseInt(m.rows):4,c,l;a=((a>e.rows)?e.rows:a);if(m.max_ads_in_a_row){l=((m.max_ads_in_a_row>e.columns)?e.columns:m.max_ads_in_a_row);}if(typeof m.design!=="undefined"&&m.design!==""){if(m.design==="text_links"){return n;}else{if(m.design==="enhanced_links"){return 1;}else{if(m.design==="in_content"){return 5;}else{if(m.design!=="standard_grid"){return 0;}}}}}else{if(m.carousel===true){c=f.computeLayout(b,k);return c.columnCount*d;}}c=f.computeLayout(b,k,false,"grid",l);return a*c.columnCount;};if(typeof amzn_assoc_utils.registerAdCountComputer!=="undefined"){amzn_assoc_utils.registerAdCountComputer("smart",f.getExpectedAdCount);}return f;})();var amzn_assoc_ad_spec_type=function(c){var b={},e="amzn_assoc",d={callbacks:true,link_id:true,show_image:true,viewerCountry:true,link_color:true,campaigns:true,random_permute:true,overwrite:true,replace_items:true,height:true,exp_details:true,adult_content:true,prime:true,deal_category:true,destinationTrackingId:true,emphasize_keywords:true,tag_images:true,header_text_color:true,border_color:true,max_title_height:true,auto_complete:true,ad_id:true,size:true,banner_type:true,show_prices_for_new_items_only:true,placement:true,text_color:true,deal_types:true,show_prices:true,deals_enable:true,columns:true,show_border:true,ead:true,enable_interest_ads:true,service_version:true,carousel:true,URL:true,corners:true,div_name:true,widget_id:true,search_bar:true,browse_node:true,theme:true,override:true,categories:true,tracking_id:true,search_bar_position:true,fallback_products:true,sourceTrackingId:true,sign_links:true,default_state:true,show_price:true,list_price:true,aax_src_id:true,price_color:true,btn_corners:true,fallback_mode:false,transition:true,url:true,btn_custom_size:true,ad_mode:true,show_rating:true,p:true,bg_color:true,search_index:true,shuffle_tracks:true,textlinks:true,width:true,attributes:true,deal_access_types:true,feedback_enable:true,disable_borders:true,pharos_list_id:true,isresponsive:true,ad_type:true,ignore_keywords:true,subtag:true,header_style:true,original_ad_mode:true,deal_fallback_enable:true,rating:true,exclude_brands:true,emphasize_categories:true,show_on_hover:true,exclude_items:true,default_browse_node:true,link_style:true,brand_position:true,slotNum:true,marketplace:true,ac_website:true,enable_geo_redirection:true,restrict_categories:true,search_type:true,widget_type:true,btn_size:true,force_win_bid:true,rounded_corners:true,enable_auto_tagging:true,position:true,btn_design:true,region:true,preview:true,treatment_choice:true,ignore_categories:true,max_ads_in_a_row:true,title:true,axf_treatment:true,text_style:true,prb_enable:true,linkid:true,default_search_phrase:true,default_category:true,design:true,department:true,default_search_category:true,aax_test_punt:true,debug:true,search_key:true,exclude_phrases:true,banner_id:true,axf_exp_name:true,title_color:true,default_search_key:true,rows:true,asins:true,link_opens_in_new_window:true,custom_button_id:true,pharos_type:true,link_hover_style:true,enable_swipe_on_mobile:true},f=function(){var h,g;for(h in d){if(d.hasOwnProperty(h)){g="amzn_assoc_"+h;if((g in c)&&typeof c[g]!=="undefined"){b[h]=c[g];}}}},a=function(){};b.getAllParamDefs=function(){return d;};b.getPrefix=function(){return e;};b.reset=function(){var i,g;for(i in d){if(d.hasOwnProperty(i)){g="amzn_assoc_"+i;if((g in c)&&typeof c[g]!=="undefined"){c[g]=undefined;try{delete c[g];}catch(h){}}}}};f();a();b.reset();return b;};var amzn_assoc_ad_spec=amzn_assoc_ad_spec_type(window);var amzn_assoc_ad_async_spec=(function(){var c={},b=window,d="amzn_assoc",a=function(){var f=0,e=[];if(("amzn_assoc_widgets" in b)&&Object.prototype.toString.call(b.amzn_assoc_widgets)==="[object Array]"){for(f=0;f<b.amzn_assoc_widgets.length;f++){if("amzn_assoc_div_name" in b.amzn_assoc_widgets[f]){e[f]=amzn_assoc_ad_spec_type(b.amzn_assoc_widgets[f]);}}}return e;};c.widgets=a();c.numberOfWidgets=c.widgets.length;return c;}());if(typeof amzn_assoc_ad==="undefined"){var adUnitDeliveryNetwork={};var slotCounter=(function(){var a=0;return{getNextSlot:function(){var b=a;a=a+1;return b;}};}());amzn_assoc_ad=(function(){var c=window,h={mp3clips:{},smart:{aaxMediatedMarketPlaces:["US","GB","CA"]},pharos_v2:{},imageads:{aaxMediatedMarketPlaces:["US"]},auto_part_finder:{},omakase:{},search_box:{},search:{},astore:{},visualsearch_automation:{},carousel:{},deals:{},recommended_product_links:{},shopnshare:{iframeStyle:"width: 0px; height: 0px;",aaxMediatedMarketPlaces:["US"],inline:true},dynamo:{},banners:{iframeStyle:"width: 0px; height: 0px;",aaxMediatedMarketPlaces:["US"],inline:true},link_enhancement_widget:{aaxMediatedMarketPlaces:["GB","US"]},responsive_search_widget:{aaxMediatedMarketPlaces:["US"]},product_cloud:{},myfavourites:{},pharos_v1:{},slideshow:{},contextual:{iframeStyle:"",aaxMediatedMarketPlaces:["US"]},wish_list:{},one_tag:{aaxMediatedMarketPlaces:["US"]},fallback:{},banner:{},product_link:{iframeStyle:"width:120px;height:240px;"},search_acap:{aaxMediatedMarketPlaces:["US"]},pharos_v3:{}},e={mp3clips:{},smart:{},pharos_v2:{},imageads:{},auto_part_finder:{},omakase:{},search_box:{},search:{},astore:{},visualsearch_automation:{},carousel:{},deals:{},recommended_product_links:{},shopnshare:{},dynamo:{},banners:{},link_enhancement_widget:{},responsive_search_widget:{},product_cloud:{},myfavourites:{},pharos_v1:{},slideshow:{},contextual:{},wish_list:{},one_tag:{},fallback:{},banner:{},product_link:{},search_acap:{},pharos_v3:{}},g=c.console||{log:function(){}},j={AMAZON:"",AMAZONSUPPLY:"",SMALLPARTS:"",AMAZONLOCAL:""},b={smart:true},k={"smart-auto":308,"default":330},f=(function(){var l=Math.floor(Math.random()*100);return{isSSPEnabled:function(){return l<=-1;},isDedicatedSourceForRecoAdsEnabled:function(){return l<=90;}};}()),a=false,i=false,d=false;return{render:function(o){if(typeof o.ad_type==="undefined"||!o.ad_type){g.error("Error : adType is not defined");return;}var q,t,v,m=window,s={},u={marketPlace:o.region},n=false,w="iframeStyle" in h[o.ad_type],p=slotCounter.getNextSlot(),l={},r=true;adUnitDeliveryNetwork[p]=amzn_assoc_utils.createAdUnitDeliveryNetworkPerSlot(a,f,b,o);o.region=o.region||"US";o.placement=o.placement||"adunit";o.marketplace=o.marketplace||"amazon";if(amzn_assoc_enable_abs&&o.ad_type=="banner"&&(o.banner_type==="setandforget"||o.banner_type==="rotating"||o.banner_type==="category"||o.banner_type==="ez")){o.ad_type="banners";}o.viewerCountry="US";amzn_assoc_cm.startScope("cm_","wdgt_load_time_invoke_"+o.ad_type+"_US");amzn_assoc_cm.startScope("cm_","wdgt_load_time_invoke_"+o.ad_type);if(typeof o.callbacks==="object"){l=o.callbacks;delete o.callbacks;}h[o.ad_type].adContentUrl=(h[o.ad_type].cacheable)?"//z-na.amazon-adsystem.com":"https://ws-na.amazon-adsystem.com:443";h[o.ad_type].adContentUrl=h[o.ad_type].adContentUrl+"/widgets/q?ServiceVersion=20070822&MarketPlace="+o.region+"&Operation=GetAdHtml&OneJS=1";h[o.ad_type].adContentUrl=h[o.ad_type].adContentUrl+"&slotNum="+p+"&"+amzn_assoc_utils.serialize(o,"&",false,true);v=o.div_name;if(!v&&!w&&!n){v=amzn_assoc_utils.createDiv("amzn_assoc_ad_div_"+o.placement,p,h[o.ad_type].inline);}if((typeof h[o.ad_type].aaxMediatedMarketPlaces!=="undefined")&&(h[o.ad_type].aaxMediatedMarketPlaces.indexOf(o.region)>-1)){o.textlinks=amzn_assoc_utils.fetchAmazonLinks();h[o.ad_type].fallbackUrl=h[o.ad_type].adContentUrl;h[o.ad_type].adContentUrl=amzn_assoc_utils.getAAXUrl(o,adUnitDeliveryNetwork,p,v,b,i,d,k,f,o.viewerCountry);}if(typeof v!=="undefined"&&o.ac_website!=="true"&&!h[o.ad_type].inline){r=amzn_assoc_utils.checkAvailableSpace(o.ad_type,v);}if(r&&h[o.ad_type].adContentUrl!=""){amzn_assoc_utils.fetchHtml({url:h[o.ad_type].adContentUrl,aaxPuntFallback:h[o.ad_type].fallbackUrl,prefix:"amzn_assoc_ad_div_"+o.placement,elemName:v,explicitAsync:n,slotNum:p,clientCbs:l,renderInIframe:w,adOptions:o,aaxMediated:((typeof h[o.ad_type].aaxMediatedMarketPlaces!=="undefined")&&(h[o.ad_type].aaxMediatedMarketPlaces.indexOf(o.region)>-1))?true:false,placement:o.placement,iframeStyle:h[o.ad_type].iframeStyle,inline:h[o.ad_type].inline});}if(!r){amzn_assoc_cm.addCounter("cm_","onejs_abort_evt",1);amzn_assoc_cm.addCounter("cm_","onejs_abort_evt_"+o.ad_type,1);amzn_assoc_cm.endScope("cm_","onejs_exec_time");}}};}());}if(amzn_assoc_ad_async_spec.numberOfWidgets>0){(function(){var a=0;for(a=0;a<amzn_assoc_ad_async_spec.numberOfWidgets;a++){amzn_assoc_ad.render(amzn_assoc_ad_async_spec.widgets[a]);}}());}else{amzn_assoc_ad.render(amzn_assoc_ad_spec);}