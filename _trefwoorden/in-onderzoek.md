---
layout: trefwoorden
title: In onderzoek
date: 2019-06-19
description: "een gegeven in de BAG kan ´in onderzoek´ worden geplaatst als er gerede twijfel bestaat over de juistheid van het gegeven"
objecttypen: pand, verblijfsobject, standplaats, ligplaats, woonplaats, openbare ruimte, nummeraanduiding
attributen: gebruiksdoel, geometrie, huisletter, huisnummer, huisnummertoevoeging, naam, oorspronkelijk bouwjaar, oppervlakte, postcode, status, type, type adresseerbaar object
---

# {{ page.title }}

Op het moment dat een gebruiker gerede twijfel heeft over de juistheid van een authentiek gegeven van een BAG-object of over het ontbreken van een authentiek gegeven, dient een terugmelding op dit gegeven te worden gedaan. Op dat moment vervalt voor deze gebruiker de gebruiksplicht voor dat specifieke gegeven (bijv. het bouwjaar van een pand staat in onderzoek, dan geldt de gebruiksplicht nog wel voor de geometrie en de status van het pand). 

Wanneer de bronhouder van het betreffende BAG-object de terugmelding niet binnen **twee werkdagen** kan afhandelen, wordt het gegeven 'in onderzoek' geplaatst en mogen alle gebruikers een ander gegeven gebruiken. De bronhouder dient het onderzoek binnen **zes maanden** af te ronden en het gegeven weer 'uit onderzoek' te halen, waarna de gebruiksplicht voor dit gegeven weer geldt.

Zie ook [Aanwijzingen van mogelijke onjuistheden in de registratie](https://imbag.github.io/catalogus/hoofdstukken/gegevenskwaliteit#48-aanwijzingen-van-mogelijke-onjuistheden-in-de-registratie){:target="_blank" rel="noreferrer"} in de Catalogus BAG 2018.

De tabel hieronder geeft weer welke gegevens per object in onderzoek kunnen worden geplaatst:

|BAG-Object |Gegevens in onderzoek te plaatsen | 
|:--- |:--- |
| Woonplaats | [naam]({{-site.baseurl-}}/attributen/naam); [geometrie]({{-site.baseurl-}}/attributen/geometrie); [status]({{-site.baseurl-}}/attributen/status) | 
| Openbare ruimte| [naam]({{-site.baseurl-}}/attributen/naam); [type]({{-site.baseurl-}}/attributen/type); [status]({{-site.baseurl-}}/attributen/status); [ligt in gerelateerde woonplaats]({{-site.baseurl-}}/relaties/ligt-in) | 
| Nummeraanduiding| [huisnummer]({{-site.baseurl-}}/attributen/huisnummer); [huisletter]({{-site.baseurl-}}/attributen/huisletter); [huisnummertoevoeging]({{-site.baseurl-}}/attributen/huisnummertoevoeging); [postcode]({{-site.baseurl-}}/attributen/postcode); [type adresseerbaar object]({{-site.baseurl-}}/attributen/type-adresseerbaar-object); [status]({{-site.baseurl-}}/attributen/status); [ligt in gerelateerde woonplaats]({{-site.baseurl-}}/relaties/ligt-in); [ligt aan gerelateerde openbare ruimte]({{-site.baseurl-}}/relaties/ligt-aan) | 
| Pand| [geometrie]({{-site.baseurl-}}/attributen/geometrie); [bouwjaar]({{-site.baseurl-}}/attributen/oorspronkelijk-bouwjaar); [status]({{-site.baseurl-}}/attributen/status) | 
| Verblijfsobject| [geometrie]({{-site.baseurl-}}/attributen/geometrie); [gebruiksdoel]({{-site.baseurl-}}/attributen/gebruiksdoel); [oppervlakte]({{-site.baseurl-}}/attributen/oppervlakte); [status]({{-site.baseurl-}}/attributen/status); [maakt onderdeel uit van gerelateerd pand]({{-site.baseurl-}}/relaties/maakt-deel-uit-van); [heeft als hoofdadres]({{-site.baseurl-}}/relaties/heeft-als-hoofdadres); [heeft als nevenadres]({{-site.baseurl-}}/relaties/heeft-als-nevenadres) | 
| Standplaats| [geometrie]({{-site.baseurl-}}/attributen/geometrie); [status]({{-site.baseurl-}}/attributen/status); [heeft als hoofdadres]({{-site.baseurl-}}/relaties/heeft-als-hoofdadres); [heeft als nevenadres]({{-site.baseurl-}}/relaties/heeft-als-nevenadres) | 
| Ligplaats| [geometrie]({{-site.baseurl-}}/attributen/geometrie); [status]({{-site.baseurl-}}/attributen/status); [heeft als hoofdadres]({{-site.baseurl-}}/relaties/heeft-als-hoofdadres); [heeft als nevenadres]({{-site.baseurl-}}/relaties/heeft-als-nevenadres) | 
