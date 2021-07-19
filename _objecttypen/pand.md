---
layout: objecttypen
subarticleCollection: beslisboomvragen
mermaid: true
title: Pand
date: 2018-07-01
description: "kleinste bij de totstandkoming functioneel en bouwkundig-constructief zelfstandige eenheid die direct en duurzaam met de aarde is verbonden en betreedbaar en afsluitbaar is"
objecttypen:
attributen: identificatie, geometrie, oorspronkelijk bouwjaar, status, geconstateerd, documentdatum, documentnummer
catalogus: 6.4 Pand, 10.6 Afbakening van panden
---

# {{ page.title }}

In de [Catalogus BAG 2018]({{-site.baseurl-}}/beleidskaders/catalogus-bag-2018 "Catalogus BAG 2018") is voor een pand de volgende definitie opgenomen:
>{{ page.description | capitalize }}

Voor de afbakening van panden wordt gebruik gemaakt van onderstaande beslisboom conform de [Catalogus BAG 2018](https://www.geobasisregistraties.nl/documenten/publicatie/2018/03/12/catalogus-2018).

{% highlight mermaid %}
graph TB
    A((START))-->B
    B(1. Was het bouwwerk bij de<br/>totstandkoming een bouwkundig-<br/>constructief zelfstandige eenheid?)-->|ja|C
    C(2. Was het bouwwerk bij de<br/>totstandkoming een functioneel<br/>zelfstandige eenheid?)-->|ja|D
    D(3. Is het bouwwerk direct met de<br/>aarde verbonden?)-->|ja|E
    E(4. Is het bouwwerk duurzaam met<br/>de aarde verbonden?)-->|ja|F
    F(5. Is het bouwwerk volledig door<br/>wanden omsloten en heeft het<br/>een dichte dakconstructie?)-->|ja|G
    G(6. Is het bouwwerk betreedbaar?)-->|ja|H
    H(7. Is het bouwwerk de kleinste eenheid<br/>die aan alle criteria voldoet?)-->|ja|I
    I(8. Betreft het bouwwerk een<br/>uitzondering?)-->|nee|X
    X[9. Baken het bouwwerk<br/>af als pand]-->Z((KLAAR))
    Y[ANDERS: Het bouwwerk<br/>is geen pand]-->Z
    click A {% include doclink.liquid itemtitle="START pand" itemcollection="beslisboomvragen" %}
    click B {% include doclink.liquid itemtitle="Was het bouwwerk bij de totstandkoming een bouwkundig-constructief zelfstandige eenheid?" itemcollection="beslisboomvragen" %}
    click C {% include doclink.liquid itemtitle="Was het bouwwerk bij de totstandkoming een functioneel zelfstandige eenheid?" itemcollection="beslisboomvragen" %}
    click D {% include doclink.liquid itemtitle="Is het bouwwerk direct met de aarde verbonden?" itemcollection="beslisboomvragen" %}
    click E {% include doclink.liquid itemtitle="Is het bouwwerk duurzaam met de aarde verbonden?" itemcollection="beslisboomvragen" %}
    click F {% include doclink.liquid itemtitle="Is het bouwwerk volledig door wanden omsloten en heeft het een dichte dakconstructie?" itemcollection="beslisboomvragen" %}
    click G {% include doclink.liquid itemtitle="Is het bouwwerk betreedbaar?" itemcollection="beslisboomvragen" %}
    click H {% include doclink.liquid itemtitle="Is het bouwwerk de kleinste eenheid die aan alle criteria voldoet?" itemcollection="beslisboomvragen" %}
    click I {% include doclink.liquid itemtitle="Betreft het bouwwerk een uitzondering?" itemcollection="beslisboomvragen" %}
    click X {% include doclink.liquid itemtitle="Baken het bouwwerk af als pand" itemcollection="beslisboomvragen" %}
    click Y {% include doclink.liquid itemtitle="Het bouwwerk is geen pand" itemcollection="beslisboomvragen" %}
    click Z {% include doclink.liquid itemtitle="KLAAR pand" itemcollection="beslisboomvragen" %}
{% endhighlight %}
