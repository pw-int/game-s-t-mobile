$(document).ready(function(){$(".search-form #q").autocomplete({serviceUrl:SEARCH_AUTOCOMPLETE_URL,type:"POST",deferRequestBy:300,onSearchStart:function(a){if(2>$.trim(a.query).length)return!1},onSelect:function(a){window.location.href=a.data},transformResult:function(a){a=$.parseJSON(a);return{suggestions:$.map(a.games,function(a){return{value:a.title,data:a.link}})}},minChars:2,showNoSuggestionNotice:!0,noSuggestionNotice:SEARCH_NO_RESULT});$(".search-form").on("submit",function(a){a.preventDefault();
return!1})});