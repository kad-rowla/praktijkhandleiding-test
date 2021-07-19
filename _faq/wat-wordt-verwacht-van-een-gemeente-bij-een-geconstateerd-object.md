---
layout: faq
title: Wat wordt verwacht van een gemeente bij een geconstateerd object?
date: 2019-07-05
description: Toelichting inclusief stroomschema van de te volgen werkwijze bij een geconstateerd object.
attributen: geconstateerd
trefwoorden: constateren, in onderzoek
artikelen: Wanneer worden indicaties "geconstateerd" en "in onderzoek" gebruikt in de BAG?
gebeurtenissen: formalisering geconstateerd object, heropname legitiem gegeven, archivering bestaand object na constatering, archivering geconstateerd object
mermaid: true
---

# Wat wordt verwacht van een gemeente bij een geconstateerd object?

Geconstateerd is niet hetzelfde als illegaal. Een object dat in de BAG staat, kan op 'geconstateerd' staan en achteraf toch legaal blijken te zijn (bijvoorbeeld als het object later vergunningvrij blijkt te zijn). Als nog niet bekend is of een object illegaal is of niet, moet dit eerst worden uitgezocht. Wanneer er sprake is van een legaal object wordt 'geconstateerd' op `N` gezet.

Wanneer er sprake is van een illegaal object zijn er twee mogelijkheden:
- Overgaan tot handhaving, oftewel: de oude situatie herstellen.
- Overgaan tot legalisering door de voorgeschreven vergunningsprocedures alsnog te doorlopen, oftewel: de nieuwe situatie formaliseren.

Bij handhaving wordt de oorspronkelijke situatie hersteld. Als het handhavingsproces is afgerond, wordt het geconstateerde object gearchiveerd. Wanneer het geconstateerde object in de plaats kwam van een ander object, wordt het oorspronkelijke object heropgenomen.
Het ligt voor de hand hierbij te kiezen voor het laten herleven van het oorspronkelijke object, zodat duidelijk wordt dat de oude situatie hersteld is en er geen sprake is van een nieuw object. Doe dit zoals beschreven in de gebeurtenis [Herleven ten onrechte afgevoerd object]({{-site.baseurl-}}/gebeurtenissen/herleven-ten-onrechte-afgevoerd-object).
Echter, afhankelijk van de situatie kan er ook voor gekozen worden om een nieuw object op te voeren. Dit doe je als het legitieme gegeven echt kan worden gezien als een nieuw object, bv. door verbouwing. In dit geval volg je de werkwijze zoals beschreven in de gebeurtenis [Verblijfsobject toevoegen aan pand]({{-site.baseurl-}}/gebeurtenissen/verblijfsobject-toevoegen-aan-pand).

Bij legalisering wordt het geconstateerde object geformaliseerd en wordt 'geconstateerd' op `N` gezet als het formaliseringsproces is afgerond.

Hieronder worden de processen weergegeven in een diagram:

{% highlight mermaid %}
graph TB
  subgraph Geen onderdeel van de BAG
    A((Onderzoek i.v.m. twijfel<br/>over legaal/illegaal))-->B
    B(Illegaal?)
    B-->|ja|E
    E(Gaat de gemeente over tot handhaving?)
    E-->|nee|N
    N(Legaliseren nieuwe situatie door formalisering)
    E-->|ja|G
    G(Herstellen oude situatie door handhaving)
   end
   subgraph Onderdeel van de BAG
    B-->|nee|C
    C((Geconstateerd<br/>op 'N'))
    N-->F
    F(Formaliseren geconstateerd object)-->H
    H((Geconstateerd<br/>op 'N'))
    G-->J
    J(Archiveren geconstateerd object)-->K
    K(Kwam het object in de plaats van een ander object?)
    K-->|nee|L
    K-->|ja|M
    L((Klaar))
    M((Heropname<br/>oorspronkelijk object))
    click F {% include doclink.liquid itemtitle="Formalisering geconstateerd object" itemcollection="gebeurtenissen" %}
    click J {% include doclink.liquid itemtitle="Archivering geconstateerd object" itemcollection="gebeurtenissen" %}
  end
{% endhighlight %}
