---

---
{%- assign nodate = site.data.dates.none | strip_html | normalize_whitespace | strip | downcase -%}
elasticlunr.clearStopWords();
{%- if site.data.stopwords.size > 0 -%}
{%- assign stopWordsRegEx = site.data.stopwords | join: "\b|\b" | prepend: "\b" | append: "\b" -%}
{%- assign stopWordsList = site.data.stopwords | join: "', '" | prepend: "'" | append: "'" -%}
{%- else -%}
{%- assign stopWordsRegEx = "" -%}
{%- assign stopWordsList = "''" -%}
{%- endif -%}
var customized_stop_words = [{{- stopWordsList -}}];
elasticlunr.addStopWords(customized_stop_words);
var index = elasticlunr(function () {this.addField('title');this.addField('content');this.addField('description');this.setRef('id')});
index.pipeline.remove(elasticlunr.stemmer);
{%- assign defaultMermaidMarkerLeft = '<code class="language-mermaid" data-lang="mermaid">' -%}
{%- assign defaultMermaidMarkerRight = '</code>' -%}
{%- assign count = 0 -%}
{%- for text in site.documents -%}
{%- if text.url -%}
{%- assign collectie = site.collections | where: "label", text.collection | first -%}
{%- if collectie.zoeken -%}
index.addDoc({
{%- include normalizechars.liquid string=text.title -%}
"title": {{- string | jsonify -}},
{%- assign textContent = text.content -%}
{%- if textContent contains defaultMermaidMarkerLeft -%}
{%- assign searchOffset = 0 -%}
{%- assign iteratorRange = textContent.size -%}
{%- for iterator in (1..iteratorRange) -%}
{%- assign searchRange = textContent.size | minus: searchOffset -%}
{%- assign searchString = textContent | slice: searchOffset, searchRange -%}
{%- include findsnippet.liquid searchBeginning=defaultMermaidMarkerLeft searchEnding=defaultMermaidMarkerRight string=searchString -%}
{%- if snippetFound -%}
{%- assign mermaidDiagram = textContent | slice: snippetPosition, snippetSize -%}
{%- assign textContent = textContent | remove: mermaidDiagram -%}
{%- assign searchOffset = searchOffset | plus: snippetPosition -%}
{%- else -%}
{%- break -%}
{%- endif -%}
{%- endfor -%}
{%- endif -%}
{%- include normalizechars.liquid string=textContent -%}
"content": {{- string | jsonify -}},
{%- include normalizechars.liquid string=text.description -%}
"description": {{- string | jsonify -}},
"id": {{- count -}}
});
{%- assign count = count | plus: 1 -%}
{%- endif -%}
{%- endif -%}
{%- endfor -%}
{%- assign separator = ',' -%}
{%- assign skipSeparator = true -%}
var store = [
{%- for text in site.documents -%}
{%- if text.url -%}
{%- assign collectie = site.collections | where: "label", text.collection | first -%}
{%- if collectie.zoeken -%}
{%- unless skipSeparator -%}
{{- separator -}}
{%- else -%}
{%- assign skipSeparator = false -%}
{%- endunless -%}
{
"title": {{- text.title | replace: "&comma;", "," | replace: "`", " " | normalize_whitespace | strip | jsonify -}},
"link": {{- text.url | jsonify -}},
{%- include cleansentences.liquid sentences=text.description -%}
"description": {{- sentences | replace: "`", " " | normalize_whitespace | strip | jsonify -}},
"date": {{- text.date | date: "%Y-%m-%d" | jsonify -}},
"prescriptiveness": {{- collectie.prescriptiveness | jsonify -}}
}
{%- endif -%}
{%- endif -%}
{%- endfor -%}
];
var qd = {};
location.search.substr(1).split("&").forEach(function(item) {
var s = item.split("="),
k = s[0],
v = s[1] && decodeURIComponent(s[1]);
(k in qd) ? qd[k].push(v) : qd[k] = [v]
});
function doSearch() {
var resultdiv = $('#results');
var query = $('input#search').val().normalize('NFKD').replace(/[^\w\s.\-\/]/g, '').replace(/[\/]/g, ' ');
var result = index.search(query, {
fields: {
title: {boost:99},
content: {boost:10},
description: {boost: 25}
},
bool: "AND",
expand: true
});
resultdiv.empty();
if (result.length == 0) {
resultdiv.append('<p class="">{{- site.data.search.zero | strip_html | normalize_whitespace | strip -}}</p>');
} else if (result.length == 1) {
resultdiv.append('<p class="">'+result.length+' {{ site.data.search.one | strip_html | normalize_whitespace | strip -}}</p>');
} else {
resultdiv.append('<p class="">'+result.length+' {{ site.data.search.multiple | strip_html | normalize_whitespace | strip -}}</p>');
}
resultdiv.append('<dl>');
{%- assign missing = site.data.lists.no_description | strip_html | normalize_whitespace | strip -%}
{%- include cleansentences.liquid sentences=missing -%}
{%- assign missing = sentences | replace: "\n", " " | replace: "`", "'" -%}
for (var item in result) {
var ref = result[item].ref;
if (store[ref].description) {
var missingclass = '';
var desctext = store[ref].description;
} else {
var missingclass = ' missing';
var desctext = '{{- missing -}}';
}
var queryMarker;
if ({%- if site.data.stopwords.size > 0 -%}{{- true -}}{%- else -%}{{- false -}}{%- endif -%}) {
queryMarker = query.replace(/({{- stopWordsRegEx -}})(?!-\w)/gi,'');
} else {
queryMarker = query;
}
queryMarker = encodeURIComponent(queryMarker.replace(/\&/g,'&amp;').replace(/\+/g,'&plus;').replace(/\s+/g,' ').replace(/^\s+/,'').replace(/\s+$/,'')).replace(/%20/g,'+').replace(/[\-\/]/g, '+');
if (queryMarker) {
queryMarker = '?q='+queryMarker;
}
var prescriptiveness = '';
{%- if site.data.prescriptiveness.appendToSearchResults -%}
{%- for prescriptiveness in site.data.prescriptiveness.declaration -%}
if (store[ref].prescriptiveness == '{{- prescriptiveness[0] -}}') {
prescriptiveness = ', {{ prescriptiveness[1] -}}';
}
{%- endfor -%}
{%- endif -%}
var searchitem = '<dt class="lijstsectie '+store[ref].prescriptiveness+'"><a href="{{- site.url -}}{{- site.baseurl -}}'+store[ref].link+queryMarker+'">'+store[ref].title+'</a><span class="itemdetails">('+(store[ref].date || "{{- nodate -}}")+prescriptiveness+')</span></dt><dd class="lijstitem-omschrijving'+missingclass+'">'+(desctext || "")+'</dd>';
resultdiv.append(searchitem);
}
resultdiv.append('</dl>');
}
$(document).ready(function() {
if (qd.q) {
$('input#search').val(qd.q[0]);
doSearch();
}
$('input#search').on('keyup', doSearch);
});
