var amazon_assoc_ir_f_call_associates_ads=function(d){var b="",c,a;if(typeof JSON!=="undefined"){a=JSON.stringify(d);}else{if(typeof amzn_assoc_utils!=="undefined"){a=amzn_assoc_utils.stringify(d);}else{return;}}if(typeof d.logType!=="undefined"){b="&logType="+d.logType;}c="//fls-na.amazon-adsystem.com/1/associates-ads/1/OP/r/json";c=c+"?cb="+(new Date()).getTime()+b+"&p="+encodeURIComponent(a);(new Image()).src=c;};var amazon_assoc_ir_f_call=amazon_assoc_ir_f_call_associates_ads;var amazon_assoc_ir_call=function(c,b,a){new Image().src="//ir-na.amazon-adsystem.com/e/ir?o="+a+"&t="+c+"&l="+b+"&cb="+(new Date()).getTime();};window.cmManager=function(h,g,i){var j={},l={},k={};j.startScope=function(b,a){k[b+a]=new Date().getTime();};j.endScope=function(d,c,a){var b;if(typeof k[d+c]!=="undefined"){b=new Date().getTime()-k[d+c];}else{if(typeof a!=="undefined"){b=new Date().getTime()-a;}else{return;}}j.queue(d,[{name:c,value:b}]);delete k[d+c];};j.addCounter=function(c,b,a){j.queue(c,[{name:b,value:a}]);};j.queue=function(b,a){if(typeof l[b]!=="undefined"){l[b]=l[b].concat(a);}else{l[b]=a;}};j.trigger=function(b,w,f){var v="//"+h+"action-impressions/1/OE/associates-adsystems/action/",a,e,c="",u="",s,d=0;for(a in l){if(l.hasOwnProperty(a)){d=d+1;v=v+u+a+":";c="";for(e=0;e<l[a].length;e++){var t=l[a][e];v=v+c+t.name;if(typeof t.value!=="undefined"){v=v+"@v="+t.value;}c=",";}u="/";}}l={};if(d>0){s=new Image();s.src=v+"?marketplace="+g+"&service=AmazonWidgets&method="+i+"&marketplaceId="+b+"&requestId="+w+"&session="+f;return s.src;}else{return"";}};return j;};window.amzn_assoc_cm=cmManager("fls-na.amazon-adsystem.com/1/","US","Widgets_Render_Time");window.amzn_assoc_placement="adunit0";window.amzn_assoc_tracking_id="understand0d4-20";window.amzn_assoc_ad_mode="auto";window.amzn_assoc_ad_type="smart";window.amzn_assoc_marketplace="amazon";window.amzn_assoc_region="US";window.amzn_assoc_default_category="All";window.amzn_assoc_linkid="294e744f689247c16a46e978f65f72b6";window.amzn_assoc_fallback_mode=JSON.parse('{"type":"search","value":"self help"}');window.amzn_assoc_enable_interest_ads="true";(function(){if(typeof window.performance!=="undefined"&&typeof window.performance.timing!=="undefined"){amzn_assoc_cm.endScope("cm_","onejs_load_evt",window.performance.timing.navigationStart);if(window.performance.timing.loadEventEnd>0){amzn_assoc_cm.endScope("cm_","onejs_load_evt_doc_load",window.performance.timing.loadEventEnd);}}amzn_assoc_cm.startScope("cm_","onejs_exec_time");}());window.amzn_assoc_internal_params={viewerCountry:"",exp_details:"",destinationTrackingId:"",ad_id:"",ead:"",URL:"",div_name:"",override:"",sourceTrackingId:"",sign_links:"",textlinks:"",slotNum:"",ac_website:"",enable_geo_redirection:"",force_win_bid:"",enable_auto_tagging:"",preview:"",axf_treatment:"",aax_test_punt:"",debug:"",axf_exp_name:""};window.assocUtilsMaker=function(e,w,y){var z=window,r={},t,s={},q={},u={},o=function(g,c,h,d,k,f){var j={},b,i,a;if(typeof g[c]!=="undefined"&&g[c]!==""){g[h]=g[h]||[];i=g[c].split(",");for(a=0;a<i.length;a++){j={};j[d]=i[a].trim();j.emphasis=k;for(b in f){if(f.hasOwnProperty(b)){j[b]=f[b];}}g[h].push(j);}}},v=function(f,a,g,b){var d,c;if(typeof f[a]!=="undefined"&&f[a]!==""){f[g]=f[g]||[];d=f[a].split(",");for(c=0;c<d.length;c++){f[g].push(b(d[c]));}}},x=function(a){o(a,"emphasize_categories","acap_categoryConstraints","category","Strong",{type:"AmazonBrowse"});o(a,"ignore_categories","acap_categoryConstraints","category","Ignore",{type:"AmazonBrowse"});o(a,"restrict_categories","acap_categoryConstraints","category","Restrict",{type:"AmazonBrowse"});o(a,"emphasize_keywords","acap_keywordConstraints","keyword","Strong",{});o(a,"ignore_keywords","acap_keywordConstraints","keyword","Ignore",{});v(a,"ignore_keywords","acap_skipTitleList",function(b){return"(.*)"+b.trim()+"(.*)";});v(a,"fallback_products","acap_pubPickList",function(b){return b.trim();});};try{t=parseInt(w);}catch(p){t=6;}r.createDiv=function(b,a,c){if(c){document.write('<span id="'+b+"_"+a+'"></span>');}else{document.write('<div id="'+b+"_"+a+'"></div>');}return b+"_"+a;};r.registerAdCountComputer=function(a,b){s[a]=b;};r.getExpectedAdCount=function(b,a){if(typeof s[b.ad_type]==="undefined"){return 0;}else{return s[b.ad_type](b,a);}};r.generateGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=Math.random()*16|0,a=b=="x"?c:(c&3|8);return a.toString(16);});};r.reduce=function(d,a,c){var b=a,f;for(f=0;f<d.length;f++){b=c(b,d[f]);}return b;};r.loadRemoteScript=function(c,b,a){(function(d,i){var g=d.createElement("script"),f,h=false;g.type="text/javascript";g.async=true;g.src=c;g.setAttribute("charset","UTF-8");f=document.getElementsByTagName("head")[0]||document.documentElement;g.onload=g.onreadystatechange=function(){if(!h&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){h=true;if(typeof i==="function"){i();}g.onload=g.onreadystatechange=null;if(f&&g.parentNode){f.removeChild(g);}}};g.onerror=function(){var k=q[a.slotNum]?"ssp_load_error":"aax_load_error";var j=q[a.slotNum]?"ssp_load_time":"aax_load_time";if(u[a.slotNum]){amzn_assoc_cm.addCounter("cm_"+k);amzn_assoc_cm.endScope("cm_",j);amzn_assoc_cm.endScope("cm_",j+"_"+a.adOptions.ad_type);}else{amzn_assoc_cm.addCounter("cm_adhtml_load_error");}amzn_assoc_cm.trigger(e,r.generateGuid(),r.generateGuid());};f.insertBefore(g,f.firstChild);}(document,b));};r.fetchHtml=function(h,b){var a=h.url,d,g,f=r.generateGuid(),c=r.generateGuid(),i=q[h.slotNum]?"ssp_load_time":"aax_load_time";if(typeof b==="undefined"){b=0;}h.slotNum=h.slotNum||0;u[h.slotNum]=h.aaxMediated;if(!h.dontInject){if(typeof h.elemName==="undefined"){h.elemName=r.createDiv(h.prefix,h.slotNum,h.inline);}}if(h.renderInIframe&&!h.aaxMediated){g=h.iframeStyle;if((!g||g==="")&&h.adOptions.width&&h.adOptions.height){g="width:"+h.adOptions.width+"px;height:"+h.adOptions.height+"px;";}(function(){var j=document.getElementById(h.elemName);if(!h.dontInject){j.innerHTML='<iframe id="amzn_assoc_ad_'+h.slotNum+'" style="'+g+'" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="'+h.url+'"></iframe>';r.execBodyScripts(j,h.slotNum);}}());return;}d="amzn_assoc_jsonp_callback_"+h.placement+"_"+h.slotNum;if(h.aaxMediated){a=a+"&jscb="+d;}else{a=a+"&jsonp="+d;}(function(j){z[d]=function(m){var l,k;if(h.aaxMediated){amzn_assoc_cm.endScope("cm_",i);amzn_assoc_cm.endScope("cm_",i+"_"+h.adOptions.ad_type);if(m&&m.html){try{l=JSON.parse(m.html);l.pj=h.adOptions;l.originUrl=h.adOptions.URL||document.location.href;h.url="https://ws-na.amazon-adsystem.com:443/widgets/safl";h.url=h.url+"?q="+encodeURIComponent(JSON.stringify(l));if(l.customPixels){for(k=0;k<l.customPixels.length;k++){new Image().src=l.customPixels[k];}}r.fetchHtml(h);return;}catch(n){m=m.html;}}else{if(h.adOptions.preview==="true"&&b<t){setTimeout(function(){r.fetchHtml(h,b+1);},y);}else{h.url=h.aaxPuntFallback+"&aaxPunt=true";h.aaxMediated=false;amzn_assoc_cm.addCounter("cm_","aax_punt",1);amzn_assoc_cm.addCounter("cm_","aax_punt_"+h.adOptions.ad_type,1);r.fetchHtml(h);z["amzn_assoc_client_cb_"+h.slotNum]({type:"onfail",data:{reason:"No response from server"}});}return;}}else{amzn_assoc_cm.endScope("cm_","adhtml_load_time");amzn_assoc_cm.endScope("cm_","adhtml_load_time_"+h.adOptions.ad_type);}amzn_assoc_cm.trigger(e,f,c);var B=document.getElementById(j);if(!h.dontInject){if(!B){B=document.createElement("div");B.setAttribute("id",j);document.body.appendChild(B);}B.innerHTML=m;r.execBodyScripts(B,h.slotNum);}if(typeof h.cb==="function"){h.cb(m);}};z["amzn_assoc_client_cb_"+h.slotNum]=function(k){if(typeof k.widget!=="undefined"){k.widget.adOptions=h.adOptions;if(typeof window.amzn_assoc_utils.getSynchronousAdCodeGenerator==="function"){k.widget.getSynchronousAdCode=window.amzn_assoc_utils.getSynchronousAdCodeGenerator();k.widget.getSynchronousAdCodeJson=window.amzn_assoc_utils.getSynchronousAdCodeJsonGenerator();k.widget.getSynchronousAdCodeForAdInstance=window.amzn_assoc_utils.getSynchronousAdCodeGeneratorForAdInstance();k.widget.getSynchronousAdCodeWithAdInstance=window.amzn_assoc_utils.getSynchronousAdCodeGeneratorWithAdInstance();}k.widget.reload=function(l,m){var n;for(n in l){if(l.hasOwnProperty(n)){h.adOptions[n]=l[n];}}if(typeof m!=="undefined"){for(n in m){if(m.hasOwnProperty(n)){delete h.adOptions[n];}}}h.adOptions.div_name=j;amzn_assoc_ad.render(h.adOptions);};}if(k.type==="onload"&&typeof window.performance!=="undefined"&&typeof window.performance.timing!=="undefined"){amzn_assoc_cm.endScope("cm_","wdgt_load_time",window.performance.timing.navigationStart);amzn_assoc_cm.endScope("cm_","wdgt_load_time_"+h.adOptions.ad_type,window.performance.timing.navigationStart);if(window.performance.timing.loadEventEnd>0){amzn_assoc_cm.endScope("cm_","wdgt_load_time_doc_load",window.performance.timing.loadEventEnd);amzn_assoc_cm.endScope("cm_","wdgt_load_time_doc_load_"+h.adOptions.ad_type,window.performance.timing.loadEventEnd);}}if(typeof h.clientCbs==="object"&&typeof h.clientCbs[k.type]==="function"){k.data.slotNum=h.slotNum;k.data.container=h.elemName;h.clientCbs[k.type](k.data,k.widget);}amzn_assoc_cm.trigger(e,f,c);};}(h.elemName));amzn_assoc_cm.endScope("cm_","onejs_exec_time");amzn_assoc_cm.trigger(e,f,c);if(h.aaxMediated){amzn_assoc_cm.startScope("cm_",i);amzn_assoc_cm.startScope("cm_",i+"_"+h.adOptions.ad_type);}else{amzn_assoc_cm.startScope("cm_","adhtml_load_time");amzn_assoc_cm.startScope("cm_","adhtml_load_time_"+h.adOptions.ad_type);}r.loadRemoteScript(a,function(){},h);};r.serialize=function(d,f,a,h){var b=[],i;for(var g in d){if(d.hasOwnProperty(g)&&typeof d[g]!="function"){var c=((h)?encodeURIComponent(g):g)+"=";if(a){c+="'";}if(d[g] instanceof Array){i=d[g][0];}else{i=d[g];}c+=(h)?encodeURIComponent(i):i;if(a){c+="'";}b.push(c);}}return b.join(f);};r.stringify=function(a){var g,f="{",d="",b="",c=0,h=this;if(typeof a==="boolean"||typeof a==="number"||typeof a==="string"){return'"'+a+'"';}for(g in a){if(a.hasOwnProperty(g)){if(typeof a[g]==="boolean"||typeof a[g]==="number"||typeof a[g]==="string"){if(typeof a[g]==="string"){a[g]=a[g].replace(/"/g,'\\"').replace(/\\\\\\"/g,'\\"');}f=f+d+'"'+g+'":"'+a[g]+'"';}else{if(a[g] instanceof Array){f=f+d+'"'+g+'": [';b="";for(c=0;c<a[g].length;c++){f=f+b+h.stringify(a[g][c]);b=",";}f=f+"]";}else{if(typeof a[g]==="object"){f=f+d+'"'+g+'":'+h.stringify(a[g]);}else{continue;}}}d=",";}}f=f+"}";return f;};r.nodeName=function(b,a){return b.nodeName&&b.nodeName.toUpperCase()===a.toUpperCase();};r.execBodyScripts=function(f,b){var c=function(D,n){var m=" //# sourceURL=dynscript-"+D+(b?"-"+b:"")+".js";var k=(n.text||n.textContent||n.innerHTML||"")+m,j=document.getElementsByTagName("head")[0]||document.documentElement,l=document.createElement("script");l.type="text/javascript";if(n.src){l.src=(n.src||"");}try{l.appendChild(document.createTextNode(k));}catch(C){l.text=k;}j.insertBefore(l,j.firstChild);},i=[],h,g=f.childNodes,a,d;for(d=0;g[d];d++){a=g[d];if(r.nodeName(a,"script")&&(!a.type||a.type.toLowerCase()==="text/javascript")){i.push(a);}else{r.execBodyScripts(a);}}for(d=0;i[d];d++){h=i[d];if(h.parentNode){h.parentNode.removeChild(h);}c(d,i[d]);}};r.getAdTagsAsStr=function(){var a;if(typeof amzn_assoc_ad_tags!=="undefined"){a=amzn_assoc_ad_tags.toString();}return a;};r.fetchAmazonLinks=function(){var g=document.getElementsByTagName("a"),j=function(n){var m=document.createElement("a");m.href=n;return m;},b=new RegExp("https://www.amazon.com".replace(/(http:\/\/|https:\/\/)/ig,"")),l=new RegExp("(?:[/=])([A-Z0-9]{10})(?:[/?&]|$)","i"),h=new RegExp("(linkcode|lc|link_code)=","igm"),k=new RegExp("(linkcode|lc|link_code)=(am1|am2|am3|as1|as2|as3|as4|asm|df0|df1|df2|df4|asn|at1|btl|ptl|ktl|em1|pat|xm2|qcb|qs|tre|ur2|ure|sl1|sl2|ll1|w50|w61|w62|w63|g11|g12|g13|g14)","igm"),c="";for(var a=0;a<g.length;a++){if(g[a].href){var f=j(g[a].href);if(f.hostname.match(b)){var d=(f.pathname.match(l)||f.search.match(l));var i=(f.search.search(k)!=-1||f.search.search(h)==-1);if(d&&i){c+=d[1].toUpperCase()+",";}if(d){g[a].setAttribute("data-amzn-asin",d[1]);}}}}return c.substring(0,c.length-1);};r.checkAvailableSpace=function(c,b){var a=document.getElementById(b);return c!=="smart"||(a&&a.getBoundingClientRect().width>0);};r.getAAXUrl=function(P,N,S,c,n,d,k,f,l,L,T,j,m,b,R,i,O,K,M){var h={},Q=(P.width&&P.width!=="auto")?P.width:"1",a=(P.height&&P.height!=="auto")?P.height:"1",g=document.getElementById(S);P.debug=d.toString();P.acap_publisherId=P.tracking_id;x(P);h.src=(typeof P.ad_type!=="undefined"&&typeof P.ad_mode!=="undefined"&&typeof f[P.ad_type+"-"+P.ad_mode]!=="undefined"&&K.isDedicatedSourceForRecoAdsEnabled())?f[P.ad_type+"-"+P.ad_mode]:f["default"];h.c=l;if(P.preview==="true"){h.c=L;}h.sz=Q+"x"+a;h.apiVersion=T;P.slotNum=N;if(typeof s[P.ad_type]!=="undefined"){P.ead=s[P.ad_type](P,g.getBoundingClientRect().width);}if(typeof j!=="undefined"){P.viewerCountry=j;}h.pj=r.stringify(P);if((typeof d!=="undefined"&&d)||(typeof k!=="undefined"&&k)){h.testToken=m;h.n1apiVersion=T;h.n1url=b;h.n1id=R;}h.u=P.URL||document.location.href;q[N]=(n||M||(K.isSSPEnabled()&&c[P.ad_type]));if(q[N]){amzn_assoc_cm.addCounter("cm_","ssp_selected",1);amzn_assoc_cm.addCounter("cm_","ssp_selected_"+c[P.ad_type],1);}amzn_assoc_cm.trigger(e,r.generateGuid(),r.generateGuid());return(q[N]?(O+"/widgets/getad?"):(i+"/x/getad?"))+r.serialize(h,"&",false,true);};r.create_ad_unit_delivery_network_per_slot=function(){return{aaxChannel:"100",aaxPreviewChannel:"88",aaxApiVersion:"2.0",aaxTestToken:"7snvCunWohswq2jh",aaxBidRequestURL:"http://ws-na-prod.amazon.com/widgets/bid",n1id:"500",aaxURL:"//aax-us-east.amazon-adsystem.com",sspServerURL:"//ws-na.amazon-adsystem.com",sspEnabledForMonetisation:false};};return r;};window.amzn_assoc_utils=window.assocUtilsMaker("ATVPDKIKX0DER","6",1000);window.nativeAdLayoutComputer=(function(){var j={},h=10,g=128,i=4,f=3;j.computeLayout=function(q,t,e){var b,s,r,a,c,d,p;t=(typeof t==="undefined")?g:t;c=parseInt(q/t);if(c==0){return{columnCount:0,columnWidth:0,columnWidthPercentage:0,marginLeftPercentage:0};}if(c>i){c=i;}b=(c-1)*h;s=(q-b)/c;if(s<t){c=c-1;b=(c-1)*h;s=(q-b)/c;}if(e){d=q-b-(c*s);p=(d/s)*100;if(p<25||p>75){b=(c*h);s=(q-b)/(c+0.5);while(s<t){c=c-1;b=(c*h);s=(q-b)/(c+0.5);}}}r=(s*100)/q;a=(100-(r*c))/(c-1);return{columnCount:c,columnWidth:s,columnWidthPercentage:r,marginLeftPercentage:a};};j.getExpectedAdCount=function(e,b,d){var a=(typeof e.rows!=="undefined")?parseInt(e.rows):2,l=(typeof e.rows!=="undefined")?parseInt(e.rows):4,c;if(typeof e.design!=="undefined"){if(e.design==="text_links"){return l;}else{if(e.design==="enhanced_links"){return 1;}else{return 0;}}}else{if(e.carousel==="true"){c=j.computeLayout(b,d);return c.columnCount*f;}else{c=j.computeLayout(b,d);return a*c.columnCount;}}};if(typeof amzn_assoc_utils.registerAdCountComputer!=="undefined"){amzn_assoc_utils.registerAdCountComputer("smart",j.getExpectedAdCount);}return j;})();var amzn_assoc_ad_spec_type=function(c){var b={},e="amzn_assoc",d={callbacks:true,link_id:true,show_image:true,viewerCountry:true,link_color:true,campaigns:true,random_permute:true,overwrite:true,replace_items:true,height:true,exp_details:true,adult_content:true,prime:true,destinationTrackingId:true,emphasize_keywords:true,tag_images:true,header_text_color:true,border_color:true,max_title_height:true,auto_complete:true,ad_id:true,size:true,banner_type:true,show_prices_for_new_items_only:true,placement:true,text_color:true,show_prices:true,deals_enable:true,columns:true,show_border:true,ead:true,enable_interest_ads:true,service_version:true,carousel:true,URL:true,corners:true,div_name:true,widget_id:true,search_bar:true,browse_node:true,theme:true,override:true,categories:true,tracking_id:true,search_bar_position:true,fallback_products:true,sourceTrackingId:true,sign_links:true,default_state:true,show_price:true,list_price:true,price_color:true,btn_corners:true,fallback_mode:false,transition:true,url:true,btn_custom_size:true,ad_mode:true,show_rating:true,p:true,bg_color:true,search_index:true,shuffle_tracks:true,textlinks:true,width:true,attributes:true,feedback_enable:true,isresponsive:true,pharos_list_id:true,disable_borders:true,ad_type:true,ignore_keywords:true,header_style:true,original_ad_mode:true,rating:true,emphasize_categories:true,show_on_hover:true,exclude_items:true,default_browse_node:true,link_style:true,brand_position:true,slotNum:true,marketplace:true,ac_website:true,enable_geo_redirection:true,restrict_categories:true,search_type:true,widget_type:true,btn_size:true,force_win_bid:true,rounded_corners:true,enable_auto_tagging:true,position:true,btn_design:true,region:true,preview:true,treatment_choice:true,exp_override:true,ignore_categories:true,axf_treatment:true,title:true,text_style:true,prb_enable:true,linkid:true,default_search_phrase:true,default_category:true,design:true,department:true,default_search_category:true,aax_test_punt:true,debug:true,search_key:true,treatment_override:true,banner_id:true,exclude_phrases:true,axf_exp_name:true,title_color:true,default_search_key:true,rows:true,asins:true,link_opens_in_new_window:true,custom_button_id:true,pharos_type:true,link_hover_style:true},f=function(){var h,g;for(h in d){if(d.hasOwnProperty(h)){g="amzn_assoc_"+h;if((g in c)&&typeof c[g]!=="undefined"){b[h]=c[g];}}}},a=function(){};b.getAllParamDefs=function(){return d;};b.getPrefix=function(){return e;};b.reset=function(){var i,g;for(i in d){if(d.hasOwnProperty(i)){g="amzn_assoc_"+i;if((g in c)&&typeof c[g]!=="undefined"){c[g]=undefined;try{delete c[g];}catch(h){}}}}};f();a();b.reset();return b;};var amzn_assoc_ad_spec=amzn_assoc_ad_spec_type(window);var amzn_assoc_ad_async_spec=(function(){var c={},b=window,d="amzn_assoc",a=function(){var f=0,e=[];if(("amzn_assoc_widgets" in b)&&Object.prototype.toString.call(b.amzn_assoc_widgets)==="[object Array]"){for(f=0;f<b.amzn_assoc_widgets.length;f++){if("amzn_assoc_div_name" in b.amzn_assoc_widgets[f]){e[f]=amzn_assoc_ad_spec_type(b.amzn_assoc_widgets[f]);}}}return e;};c.widgets=a();c.numberOfWidgets=c.widgets.length;return c;}());if(typeof amzn_assoc_ad==="undefined"){var ad_unit_delivery_network={};var slotCounter=(function(){var a=0;return{getNextSlot:function(){var b=a;a=a+1;return b;}};}());amzn_assoc_ad=(function(){var c=window,h={contextual:{iframeStyle:"",aaxMediatedMarketPlaces:["US"]},mp3clips:{},recommended_product_links:{},product_link:{iframeStyle:"width:120px;height:240px;"},one_tag:{aaxMediatedMarketPlaces:["US"]},search_box:{},deals:{},responsive_search_widget:{aaxMediatedMarketPlaces:["US"]},myfavourites:{},fallback:{},search_hb:{},product_cloud:{},banner:{},wish_list:{},pharos_v1:{},visualsearch_automation:{},smart:{aaxMediatedMarketPlaces:["US","GB"]},pharos_v3:{},search:{},banners:{iframeStyle:"width: 0px; height: 0px;",aaxMediatedMarketPlaces:["US","GB"],inline:true},omakase:{},imageads:{aaxMediatedMarketPlaces:["US"]},slideshow:{},search_acap:{aaxMediatedMarketPlaces:["US"]},pharos_v2:{},dynamo:{},auto_part_finder:{},astore:{},link_enhancement_widget:{aaxMediatedMarketPlaces:["GB","US"]},shopnshare:{iframeStyle:"width: 0px; height: 0px;",aaxMediatedMarketPlaces:["US"],inline:true},carousel:{}},e={contextual:{},mp3clips:{},recommended_product_links:{},product_link:{},one_tag:{},search_box:{},deals:{},responsive_search_widget:{},myfavourites:{},fallback:{},search_hb:{},product_cloud:{},banner:{},wish_list:{},pharos_v1:{},visualsearch_automation:{},smart:{},pharos_v3:{},search:{},banners:{},omakase:{},imageads:{},slideshow:{},search_acap:{},pharos_v2:{},dynamo:{},auto_part_finder:{},astore:{},link_enhancement_widget:{},shopnshare:{},carousel:{}},g=c.console||{log:function(){}},j={AMAZON:"",AMAZONSUPPLY:"",SMALLPARTS:"",AMAZONLOCAL:""},b={smart:true},k={"smart-auto":308,"default":330},f=(function(){var l=Math.floor(Math.random()*100);return{isSSPEnabled:function(){return l<=-1;},isDedicatedSourceForRecoAdsEnabled:function(){return l<=30;}};}()),a=false,i=false,d=false;return{render:function(n){if(typeof n.ad_type==="undefined"||!n.ad_type){g.error("Error : adType is not defined");return;}var p,s,u,m=window,r={},t={marketPlace:n.region},v="iframeStyle" in h[n.ad_type],o=slotCounter.getNextSlot(),l={},q=true;ad_unit_delivery_network[o]=amzn_assoc_utils.create_ad_unit_delivery_network_per_slot();n.region=n.region||"US";n.placement=n.placement||"adunit";n.marketplace=n.marketplace||"amazon";n.viewerCountry="US";if(typeof n.callbacks==="object"){l=n.callbacks;delete n.callbacks;}h[n.ad_type].adContentUrl=(h[n.ad_type].cacheable)?"//z-na.amazon-adsystem.com":"https://ws-na.amazon-adsystem.com:443";h[n.ad_type].adContentUrl=h[n.ad_type].adContentUrl+"/widgets/q?ServiceVersion=20070822&MarketPlace="+n.region+"&Operation=GetAdHtml&OneJS=1";h[n.ad_type].adContentUrl=h[n.ad_type].adContentUrl+"&slotNum="+o+"&"+amzn_assoc_utils.serialize(n,"&",false,true);u=n.div_name;if(!u&&!v){u=amzn_assoc_utils.createDiv("amzn_assoc_ad_div_"+n.placement,o,h[n.ad_type].inline);}if((typeof h[n.ad_type].aaxMediatedMarketPlaces!=="undefined")&&(h[n.ad_type].aaxMediatedMarketPlaces.indexOf(n.region)>-1)){n.textlinks=amzn_assoc_utils.fetchAmazonLinks();h[n.ad_type].fallbackUrl=h[n.ad_type].adContentUrl;h[n.ad_type].adContentUrl=amzn_assoc_utils.getAAXUrl(n,o,u,b,a,i,d,k,ad_unit_delivery_network[o].aaxChannel,ad_unit_delivery_network[o].aaxPreviewChannel,ad_unit_delivery_network[o].aaxApiVersion,n.viewerCountry,ad_unit_delivery_network[o].aaxTestToken,ad_unit_delivery_network[o].aaxBidRequestURL,ad_unit_delivery_network[o].n1id,ad_unit_delivery_network[o].aaxURL,ad_unit_delivery_network[o].sspServerURL,f,ad_unit_delivery_network[o].sspEnabledForMonetisation);}if(typeof u!=="undefined"&&n.ac_website!=="true"&&!h[n.ad_type].inline){q=amzn_assoc_utils.checkAvailableSpace(n.ad_type,u);}if(q&&h[n.ad_type].adContentUrl!=""){amzn_assoc_utils.fetchHtml({url:h[n.ad_type].adContentUrl,aaxPuntFallback:h[n.ad_type].fallbackUrl,prefix:"amzn_assoc_ad_div_"+n.placement,elemName:u,slotNum:o,clientCbs:l,renderInIframe:v,adOptions:n,aaxMediated:((typeof h[n.ad_type].aaxMediatedMarketPlaces!=="undefined")&&(h[n.ad_type].aaxMediatedMarketPlaces.indexOf(n.region)>-1))?true:false,placement:n.placement,iframeStyle:h[n.ad_type].iframeStyle,inline:h[n.ad_type].inline});}if(!q){amzn_assoc_cm.addCounter("cm_","onejs_abort_evt",1);amzn_assoc_cm.addCounter("cm_","onejs_abort_evt_"+n.ad_type,1);amzn_assoc_cm.endScope("cm_","onejs_exec_time");}}};}());}if(amzn_assoc_ad_async_spec.numberOfWidgets>0){(function(){var a=0;for(a=0;a<amzn_assoc_ad_async_spec.numberOfWidgets;a++){amzn_assoc_ad.render(amzn_assoc_ad_async_spec.widgets[a]);}}());}else{amzn_assoc_ad.render(amzn_assoc_ad_spec);}