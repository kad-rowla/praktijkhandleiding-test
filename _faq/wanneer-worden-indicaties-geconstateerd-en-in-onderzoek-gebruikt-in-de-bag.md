---
layout: faq
title: Wanneer worden indicaties "geconstateerd" en "in onderzoek" gebruikt in de BAG?
date: 2019-07-05
description: Toelichting op het gebruik van 'in onderzoek' en 'geconstateerd' inclusief een stroomschema met betrekking tot het opnemen van deze indicaties in de BAG.
attributen: geconstateerd
trefwoorden: gerede twijfel, constateren, in onderzoek
artikelen: Hoe kan ik een stand- of ligplaats 'constateren'?, Wat wordt verwacht van een gemeente bij een geconstateerd object?
gebeurtenissen: attribuut in onderzoek plaatsen, constatering nieuw object
mermaid: true
---

# Wanneer worden indicaties "geconstateerd" en "in onderzoek" gebruikt in de BAG?

## In onderzoek

Een object staat in de BAG 'in onderzoek' (waarde: `J`) als er gerede twijfel bestaat over de juistheid van de waarde van dit attribuut.

Indien een melding een volledig object betreft, dat niet is opgenomen in de BAG, moet een bevoegd ambtenaar constateren of het betreffende object inderdaad bestaat. Zodra het bestaan van het object is vastgesteld wordt het object opgenomen in de BAG met een zo goed mogelijke schatting voor de waarden van de verschillende attributen.

Formele terugmeldingen en correctieverzoeken die niet binnen twee werkdagen zijn afgehandeld, leiden na deze twee dagen in elk geval tot het 'in onderzoek' plaatsen van het betreffende object.

## Geconstateerd

Een object staat in de BAG op 'geconstateerd' (waarde: `J`) als er mogelijk sprake is van een niet-legale situatie:

- een situatie waarin mogelijk een vergunning (of besluit) verplicht is, maar de gemeente niet beschikt over zo'n vergunning of besluit en als (nog) niet door een ambtenaar van de gemeente is vastgesteld of het een vergunningvrije situatie betreft
- het betreffende object is strijdig met het bestemmingsplan.

'Geconstateerd' slaat op het object als geheel; als voor het object een vergunning aanwezig is, maar voor een deel van het object (een uitbouw) is twijfelachtig of deze legaal is, dan wordt het object niet op 'geconstateerd' gezet.

Een geconstateerd object krijgt (normaal gesproken) de status `In gebruik`. Als de geometrie van een geconstateerd object niet bekend is, is het niet de bedoeling dat het object wordt geconstateerd met de status `In gebruik (niet ingemeten)`. Je kunt in dit geval bij het constateren van het object de geometrie ‘in onderzoek’ zetten.

Een stroomschema m.b.t. het opnemen van de indicaties ‘geconstateerd’ en ‘in onderzoek’ is hieronder weergegeven:

{% highlight mermaid %}
graph TB
    A((Feitelijke situatie<br/>wijkt af van<br/>geregistreerde situatie))-->B
    subgraph Constateren
        B(Is er sprake van een volledig ontbrekend object?)-->|ja|E
        B-->|nee|F
        E(Komt het in de plaats van een<br/>wel opgenomen object?)-->|ja|G
        E-->|nee|H
        H(Opname nieuw object o.b.v.<br/>een document van constatering)-->J
        G(Archivering object o.b.v.<br/>een ambtelijke verklaring)-->H
        J(Is er twijfel over legaal/illegaal?)-->|ja|K
        K(Object 'geconstateerd' op 'J')
    end
    subgraph Geen onderdeel van de BAG
        K-.->L
        L(Formaliseren of handhaven object)
    end
    subgraph In Onderzoek
        F(Mutatie van het gegeven)-->M
        J-->|nee|M
        K-->M
        M(Is nader onderzoek nodig?)-->|ja|N
        M-->|nee|Y
        Y((Klaar))
        N(Attribuut/attributen 'in onderzoek' op 'J')-->X
        X((Verdere afhandeling<br/>binnen zes maanden))
    end
    subgraph Geen onderdeel van de BAG
        F-.->|bij twijfel over legaliteit|O
        O(Formaliseren of handhaven gegeven)
    end
    click G {% include doclink.liquid itemtitle="Ambtelijke verklaring" itemcollection="trefwoorden" %}
    click H {% include doclink.liquid itemtitle="Document van constatering" itemcollection="trefwoorden" %}
    click N {% include doclink.liquid itemtitle="In onderzoek" itemcollection="trefwoorden" %}
    click K {% include doclink.liquid itemtitle="Geconstateerd" itemcollection="attributen" %}
    click L {% include doclink.liquid itemtitle="Wat wordt verwacht van een gemeente bij een geconstateerd object?" itemcollection="artikelen" %}
    click O {% include doclink.liquid itemtitle="Wat wordt verwacht van een gemeente bij het signaleren van een gegeven?" itemcollection="artikelen" %}
{% endhighlight %}

## Illegaal

In de BAG wordt niet geregistreerd of een object al dan niet legaal is.

In het geval er sprake zou zijn van een illegale situatie, dan schrijft de BAG ook niet voor dat de gemeente hierop actie moet ondernemen (door te handhaven dan wel te legaliseren).

Illegaal is niet hetzelfde als 'geconstateerd'. Een object dat in de BAG staat kan legaal zijn en toch op 'geconstateerd' staan (bijvoorbeeld als het object later vergunningvrij blijkt te zijn).

Een illegaal object dat in de BAG staat, moet wel altijd op 'geconstateerd' staan.
