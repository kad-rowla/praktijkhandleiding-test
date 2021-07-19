---
layout: objecttypen
subarticleCollection: beslisboomvragen
mermaid: true
title: Verblijfsobject
date: 2018-07-01
description: "kleinste binnen één of meer panden gelegen en voor woon-, bedrijfsmatige, of recreatieve doeleinden geschikte eenheid van gebruik die ontsloten wordt via een eigen afsluitbare toegang vanaf de openbare weg, een erf of een gedeelde verkeersruimte, onderwerp kan zijn van goederenrechtelijke rechtshandelingen en in functioneel opzicht zelfstandig is"
objecttypen:
attributen: identificatie, geometrie, gebruiksdoel, oppervlakte, status, geconstateerd, documentdatum, documentnummer
catalogus: 6.8 Verblijfsobject, 7.9.2 puntOfVlak, 7.8.9 Relatie&colon; maakt deel uit van gerelateerd pand, 7.5.1 Relatie&colon; heeft als hoofdadres, 7.5.2 Relatie&colon; heeft als nevenadres, 10.8 Afbakening van verblijfsobjecten
---

# {{ page.title }}

In de [Catalogus BAG 2018]({{-site.baseurl-}}/beleidskaders/catalogus-bag-2018 "Catalogus BAG 2018") is voor een verblijfsobject de volgende definitie opgenomen:
>{{ page.description | capitalize }}

Een veelgebruikte afkorting voor de naam van dit objecttype is _vbo_.

Voor de afbakening van verblijfsobjecten wordt gebruik gemaakt van onderstaande beslisboom conform de [Catalogus BAG 2018](https://www.geobasisregistraties.nl/documenten/publicatie/2018/03/12/catalogus-2018).

{% highlight mermaid %}
graph TB
    A((START))-->B
    B(1. Betreft de ruimte een of meer binnen-<br/>ruimten binnen een of meer panden?)-->|ja|C
    C(2. Is er binnen de ruimte sprake van aan-<br/>eengesloten samenhangend gebruik?)-->|ja|D
    D(3. Is de ruimte ontsloten via een eigen<br/>toegang vanaf de openbare weg, een<br/>eigen erf en/of een gedeelde verkeers-<br/>ruimte of geldt er een specifieke regel?)-->|ja|E
    E(4. Is de ruimte dermate groot dat een<br/>persoon er duurzaam kan verblijven?)-->|ja|F
    F(5. Heeft de ruimte een afsluitbare toegang?)-->|ja|G
    G(6. Kan de ruimte onderwerp zijn van<br/>goederenrechtelijke rechtshandelingen?)-->|ja|H
    H(7. Is de ruimte ondersteunend aan een nabij-<br/>gelegen verblijfsobject, standplaats of ligplaats?)-->|nee|I
    I(8. Is de ruimte de kleinste eenheid die aan<br/>alle criteria voldoet?)-->|ja|J
    J(9. Betreft de ruimte een uitzondering?)-->|nee|X
    X[10. Baken de ruimte af<br/>als verblijfsobject]-->Z((KLAAR))
    Y[ANDERS: De ruimte is geen<br/>verblijfsobject]-->Z
    click A {% include doclink.liquid itemtitle="START verblijfsobject" itemcollection="beslisboomvragen" %}
    click B {% include doclink.liquid itemtitle="Betreft de ruimte een of meer binnenruimten binnen een of meer panden?" itemcollection="beslisboomvragen" %}
    click C {% include doclink.liquid itemtitle="Is er binnen de ruimte sprake van aaneengesloten samenhangend gebruik?" itemcollection="beslisboomvragen" %}
    click D {% include doclink.liquid itemtitle="Is de ruimte ontsloten via een eigen toegang vanaf de openbare weg, een eigen erf en/of een gedeelde verkeersruimte of geldt er een specifieke regel?" itemcollection="beslisboomvragen" %}
    click E {% include doclink.liquid itemtitle="Is de ruimte dermate groot dat een persoon er duurzaam kan verblijven?" itemcollection="beslisboomvragen" %}
    click F {% include doclink.liquid itemtitle="Heeft de ruimte een afsluitbare toegang?" itemcollection="beslisboomvragen" %}
    click G {% include doclink.liquid itemtitle="Kan de ruimte onderwerp zijn van goederenrechtelijke rechtshandelingen?" itemcollection="beslisboomvragen" %}
    click H {% include doclink.liquid itemtitle="Is de ruimte ondersteunend aan een nabijgelegen verblijfsobject, standplaats of ligplaats?" itemcollection="beslisboomvragen" %}
    click I {% include doclink.liquid itemtitle="Is de ruimte de kleinste eenheid die aan alle criteria voldoet?" itemcollection="beslisboomvragen" %}
    click J {% include doclink.liquid itemtitle="Betreft de ruimte een uitzondering?" itemcollection="beslisboomvragen" %}
    click X {% include doclink.liquid itemtitle="Baken de ruimte af als verblijfsobject" itemcollection="beslisboomvragen" %}
    click Y {% include doclink.liquid itemtitle="De ruimte is geen verblijfsobject" itemcollection="beslisboomvragen" %}
    click Z {% include doclink.liquid itemtitle="KLAAR verblijfsobject" itemcollection="beslisboomvragen" %}
{% endhighlight %}
