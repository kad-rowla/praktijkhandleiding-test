---
layout: faq
title: Achtergrondinformatie verwerking BAG mutatieproducten
date: 2019-10-23
description: Dit artikel geeft een toelichting op de verwerking van de BAG mutatieproducten.
objecten: pand, verblijfsobject, ligplaats, standplaats, woonplaats, openbare ruimte, nummeraanduiding
trefwoorden: datum begin geldigheid, in onderzoek, brondocument
attributen: 
toc:
- Achtergrondinformatie
- Gevolgen voor afnemers
- Oplossing
- Toelichting synchronisatie en in onderzoek
---

# Achtergrondinformatie verwerking BAG mutatieproducten

## Achtergrondinformatie

Op 3 mei 2019 is de eerste bronhouder aangesloten op BAG 2.0. Sindsdien vertaalt het Kadaster de BAG 2.0 gegevens naar BAG 1.0 gegevens. Zo wordt ervoor gezorgd dat afnemers, zonder dat zij zelf iets hoeven te doen, de BAG 2.0 gegevens in BAG 1.0 formaat ontvangen. Het vertalen van de gegevens wordt gedaan aan de hand van door het BAG BAO vastgestelde [transformatieregels](https://zakelijk.kadaster.nl/transformatieregels){:target="_blank" rel="noreferrer"}. Afnemers ontvangen dus, vaak zonder het te weten, gegevens die uit BAG 2.0 zijn afgeleid. Het transformeren van de gegevens is complex. Sommige gegevens worden in BAG 2.0 anders vastgelegd dan in BAG 1.0. De grootste verschillen zijn de manier waarop in onderzoek wordt geregistreerd en de registratie van de begingeldigheid.

- In onderzoek: In onderzoek is in BAG 2.0 geen kenmerk meer van een object, maar een metagegeven over een attribuut van een object. Hiermee kan je zien over welk gegeven van een object twijfel bestaat. Bij het in onderzoek zetten van een gegeven wordt in BAG 2.0 geen nieuw objectvoorkomen aangemaakt, terwijl dit in BAG 1.0 wel het geval is. In BAG 2.0 wordt in onderzoek in een aparte tijdlijn bijgehouden. In de vertaling van de gegevens naar BAG 1.0 worden deze tijdlijn en de tijdlijn van het object samengevoegd tot één tijdlijn. Om ervoor te zorgen dat dit goed kan worden gedaan, is er een [werkafspraak](https://zakelijk.kadaster.nl/wat-verandert-er#Werkafspraak){:target="_blank" rel="noreferrer"} gemaakt. 
- BegindatumTijdvakGeldigheid: In BAG 1.0 wordt de BegindatumTijdvakGeldigheid vastgelegd als datum met exact 8 numerieke posities aangevuld met 8 numerieke posities om een nader tijdstip op die betreffende datum te kunnen aangeven. Dit tijdstip is in BAG 1.0 nodig om op één datum meer versies van de gegevens over het object te kunnen vastleggen. De betekenis van de tijdstippen moet dan ook niet als precies tijdstip op de dag geïnterpreteerd worden, maar als een ordenende waarde om de volgorde van mutaties inzichtelijk te maken. In BAG 2.0 wordt de volgorde van de voorkomens van een object bijgehouden met een voorkomenID. Het tijdstip is daarmee niet meer nodig om de volgorde te bepalen. In BAG 2.0 wordt de Begindatum als datum (zonder tijdstip) vastgelegd. In de vertaling van BAG 2.0 naar BAG 1.0 wordt een datum vertaald naar een datum + een tijdstip. 

De hierboven beschreven veranderingen zijn op zichzelf een duidelijke verbetering in de BAG. Het vertalen van deze gegevens van BAG 2.0 naar BAG 1.0 is echter complex. Het overgrote deel van de mutaties is goed getransformeerd. In uitzonderlijke situaties gaat dit niet helemaal goed. Dit is het geval bij mutaties n.a.v. synchronisatie of in onderzoek. Dit wordt onderaan dit artikel verder toegelicht.

## Gevolgen voor afnemers

Een gevolg van de storing is dat de BegindatumTijdvakGeldigheid in sommige gevallen verkeerd is opgebouwd. Het tijdstipgedeelte van dit veld is in sommige gevallen niet goed gevuld. Dit wordt hersteld zodra de situatie zich voordoet, maar dit heeft als gevolg dat sommige afnemers problemen ondervinden bij het verwerken van vervolgmutaties, omdat de was-situatie in het bericht niet overeenkwam met de was-situatie in de database van de afnemer.

Daarnaast loopt een beperkt aantal afnemers met de verwerking van de mutatieproducten tegen de gewijzigde tekenset aan.
Brondocumentnummers, openbare ruimten en plaatsnamen worden in BAG 1.0 conform de tekenset UTF-8 opgenomen. In BAG 2.0 is er gekozen voor een andere tekenset, namelijk MES-1. Aan bronhouders is gevraagd de gegevens in de LV BAG na te lopen op de UTF-8 tekens en deze indien nodig om te zetten naar MES-1 tekens. Zodra een bronhouder deze aanpassing heeft gedaan, wordt dit als een mutatie doorgestuurd naar de afnemers. Afnemers kunnen deze aanpassing verwerken in hun software. Als een bronhouder de UTF-8 tekens (die niet in de MES-1 tekenset voorkomen) niet aanpast voor de overstap naar BAG 2.0, dan worden deze tekens automatisch getransformeerd in de LV BAG.
Het gevolg is dat afnemers ineens geconfronteerd worden met andere tekens in brondocumentnummers, openbare ruimten of plaatsnamen. Er zijn afnemers die op deze velden controleren en hierdoor mutaties niet kunnen verwerken.
Het advies aan deze afnemers is om niet te controleren op brondocumentnummers, openbare ruimten of plaatsnamen.
Bronhouders adviseren wij om de UTF-8 tekens die niet in de MES-1 tekenset voorkomen vóór de overstap naar BAG 2.0 te wijzigen zodat afnemers deze aanpassingen ontvangen en kunnen verwerken.

## Oplossing
De vertaling van BAG 2.0 naar BAG 1.0 is verbeterd, zodat ook de eerder in dit artikel genoemde gevallen goed opgebouwd en geleverd worden. Daarbij is o.a. een controlemechanisme gebouwd waarmee voorkomen wordt dat onjuiste gegevens worden geleverd. Een deel van de oplossing is dat dagmutaties in het vervolg in de loop van de middag worden geleverd in plaats van iets na middernacht. Door deze aanpassing kan worden gegarandeerd dat de juiste gegevens worden gestuurd.

### Heeft u problemen ervaren bij het verwerken van mutaties?

Indien u problemen heeft ervaren met het verwerken van de mutaties en u heeft al een nieuw volledig BAG extract ingeladen (met standtechnische datum 17 oktober 2019 of 28 oktober 2019) en u wenst nogmaals een nieuwe nulstand in te laden, dan kunt u dit aangeven via [{{- site.publisher.email -}}](mailto:{{- site.publisher.email -}}). U ontvangt dan kosteloos het BAG Extract. 

### Heeft u geen problemen ervaren bij het verwerken van mutaties?

Op [Github](https://github.com/kadaster/bag-leveranciers/blob/master/BAG%20mutatie%20perikelen/Overzicht%20met%20objecten%20die%20fouten%20opleveren.md){:target="_blank" rel="noreferrer"} treft u een overzicht aan van de BAGID’s van de objecten waarvan bekend is dat dit bij één of meer afnemers tot problemen heeft geleid. Dit overzicht kunt u gebruiken om te controleren of de verwerking goed is gegaan als u geen merkbare problemen heeft ondervonden. 

## Toelichting synchronisatie en in onderzoek

- Synchronisatie: Bij sommige complexe synchronisaties zijn de mutaties die via BAG 2.0 aangeboden zijn, vertaald naar BAG 1.0 voorkomens met onjuist tijdstip (in BegindatumTijdvakGeldigheid). Er zijn situaties die niet via gewone mutaties aangepast kunnen worden, omdat er een verschil is ontstaan tussen de gemeentelijke BAG registratie en de LV BAG. Synchronisatie zet de voorkomens in de LVBAG die afwijken van de gemeentelijke registratie buiten de actieve levenscyclus. De LVBAG wordt hiermee gelijk getrokken aan de gemeentelijke registratie. Bij de verwerking van deze synchronisatieberichten wordt (een deel van) de levenscyclus van een object opnieuw opgebouwd. Bij sommige complexe synchronisatieberichten werd de levenscyclus in BAG 1.0 niet helemaal juist opgebouwd. Synchronisatie blijkt in de praktijk vaker te worden toegepast dan functioneel bedoeld is. Hierdoor ontstaan lastige situaties waarbij de transformatie extra complex is.

- In onderzoek: Bepaalde combinaties van mutaties bij in onderzoek zijn niet goed gegaan. Een voorbeeldsituatie is een gegeven dat in onderzoek wordt gezet, dezelfde dag weer uit onderzoek wordt gehaald en waarbij ook op diezelfde dag het object zelf wordt gemuteerd.
