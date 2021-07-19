---
layout: faq
title: Wat wordt verwacht van een gemeente bij het signaleren van een gegeven?
date: 2019-07-08
description: Toelichting inclusief stroomschema van de te volgen werkwijze bij het signaleren van een gegeven.
attributen:
trefwoorden: constateren, in onderzoek
artikelen: Wanneer worden "indicatie geconstateerd" en "in onderzoek" gebruikt in de BAG?
gebeurtenissen: heropname legitiem gegeven
mermaid: true
---

# Wat wordt verwacht van een gemeente bij het signaleren van een gegeven?

Wanneer er een constatering wordt gedaan op een gedeelte van een object (en niet op het gehele object), is er sprake van signaleren.
Een voorbeeld hiervan is het signaleren van een aangebouwde erker. In dit geval wordt het gemuteerde gegeven opgenomen in de BAG.
Vervolgens dient de legaliteit van het gegeven beoordeeld te worden. Mogelijk is er sprake van een legale situatie (bijvoorbeeld omdat het gegeven vergunningsvrij blijkt te zijn), in dit geval wordt enkel het gegeven gemuteerd.

Wanneer er sprake is van een illegaal gegeven zijn er twee mogelijkheden:
- Overgaan tot handhaving, oftewel: de oude situatie herstellen.
- Overgaan tot legalisering door de voorgeschreven vergunningsprocedures alsnog te doorlopen, oftewel: de nieuwe situatie formaliseren.

Hieronder worden de processen weergegeven in een diagram:

{% highlight mermaid %}
graph TB
  A((Onderzoek i.v.m.<br/>twijfel over<br/>legaal/illegaal))-->B
  B(Illegaal?)
  B-->|nee|C
  B-->|ja|D
  C((Klaar))
  D(Gaat de gemeente over tot handhaving?)
  D-->|nee|E
  D-->|ja|F
  E(Legaliseren nieuwe situatie door formalisering)-->H
  H((Klaar))
  F(Herstellen oude situatie door handhaving)
  F-->G
  G((Heropname<br/>legitiem<br/>gegeven))
  click G {% include doclink.liquid itemtitle="Heropname legitiem gegeven" itemcollection="gebeurtenissen" %}
{% endhighlight %}
