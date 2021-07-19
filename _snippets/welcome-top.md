---
title: welcome-top
---

{% unless site.baseurl == site.production_baseurl %}{{ site.data.testing.warning | normalize_whitespace | markdownify }}{% endunless %}

Deze website geeft een systeembeschrijving en praktijkgerichte handleiding bij de [{{ site.catalogus_bag_label -}}]({{- site.url -}}{{- site.baseurl -}}{{- site.catalogus_bag_url -}}){:target="_blank" rel="noreferrer"}.

# Inhoudsopgave
{:.toc}
