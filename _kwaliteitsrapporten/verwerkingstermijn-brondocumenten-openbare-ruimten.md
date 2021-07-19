---
layout: kwaliteitsrapporten
objecttypen: openbare ruimte
trefwoorden:
title: "Verwerkingstermijn brondocumenten openbare ruimten (VBO)"
description: Brondocumenten dienen binnen vijf werkdagen verwerkt te zijn. Deze rapportage toont openbare ruimten waarbij de verwerkingstermijn van het brondocument is overschreden.
kwaliteitsthemas: Actualiteit
gebeurtenissen:
date: 2018-06-08
---

# Verwerkingstermijn brondocumenten openbare ruimten (VBO)

## Wat wordt er gerapporteerd?

Gerapporteerd worden openbare ruimten waarbij de verwerkingstermijn van het brondocument is overschreden. Omdat het brondocument binnen vijf werkdagen verwerkt moet zijn, telt de brondocumentdatum zelf ook als dag. Een object met brondocumentdatum woensdag 13 januari 2016 dient uiterlijk dinsdag 19 januari te zijn verwerkt in de BAG. Bij het bepalen van de termijn wordt rekening gehouden met weekenden en officiële feestdagen.

{% comment %}
{Deze vijf coderegels voegen het bestand feestdagen.md uit de map _snippets in. Hier niet aanpassen!}
{% endcomment %}
{% assign feestdagen = site.snippets | where:"title", "feestdagen" | first %}
{{ feestdagen.content | strip }}

Daarnaast wordt ook rekening gehouden met dagen waarop storingen plaatsvinden in de LV BAG. In die gevallen waarin de dag van het registreren van een mutatie en het verwerken hiervan afwijkt, wordt dit gecompenseerd door de dag als storingsdag in het overzicht op te nemen. Een gemeente zal daarmee dus niet onterecht aangerekend worden voor het overschrijden van de termijn.

## Hoe kan het resultaat gecorrigeerd worden?

Omdat deze rapportage resultaten geeft van mutaties die zijn verwerkt, kunnen de gegevens in deze rapportage niet gecorrigeerd worden.

## Hoe kan het resultaat worden voorkomen?

U kunt de resultaten voorkomen door mutaties tijdig naar de LV BAG te sturen. Het is mogelijk dat het hiervoor noodzakelijk is dat binnengemeentelijke processen die zich buiten de BAG afspelen (bijv. een vergunningsproces) geoptimaliseerd moeten worden. De rapportages zijn per objecttype opgesteld, zodat u kunt vaststellen of er specifieke objecttypen zijn die extra aandacht vereisen.
