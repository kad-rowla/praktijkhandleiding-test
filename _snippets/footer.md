---
title: footer
---
{%- assign license = site.pages | where:"title", "Licentie" | first -%}

Deze website met de {% unless site.baseurl == site.production_baseurl %}{{ site.data.testing.prepend }}{% endunless %}{{ site.title }} is een uitgave van het [{{ site.publisher.name -}}]({{- site.publisher.url -}}){:target="_blank" rel="noreferrer"} in opdracht van het ministerie van Binnenlandse Zaken en Koninkrijksrelaties, directoraat-generaal Bestuur, Ruimte en Wonen, directie Ruimtelijke Ordening. De informatie op deze website is informatief en geheel ondersteunend en ondergeschikt aan de systeembeschrijving van de Basisregistratie Adressen en Gebouwen die de minister heeft gepubliceerd in de [{{ site.catalogus_bag_label -}}]({{- site.url -}}{{- site.baseurl -}}{{- site.catalogus_bag_url -}}){:target="_blank" rel="noreferrer"}. Aan de informatie op deze website kunnen geen rechten worden ontleend. Voor de informatie op deze website geldt de licentie [{{- site.data.license.title.localized | strip_html | normalize_whitespace | strip -}}]({{- site.baseurl -}}{{- license.url -}}). Websiteversie:
