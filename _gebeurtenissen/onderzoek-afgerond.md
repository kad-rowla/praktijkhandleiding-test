---
layout: gebeurtenissen
title: "Onderzoek afgerond"
sortkey: 04-020
date: 2018-07-01
description: "Na afronding van een onderzoek wordt de aanduiding 'In onderzoek' bij de onderzochte attributen verwijderd."
objecttypen: woonplaats, openbare ruimte, nummeraanduiding, standplaats, ligplaats, pand, verblijfsobject
attributen: gebruiksdoel, geometrie, huisletter, huisnummer, huisnummertoevoeging, oorspronkelijk bouwjaar, oppervlakte, postcode, type, type adresseerbaar object
---

# Onderzoek afgerond

Naam gebeurtenis
: Onderzoek afgerond

Code gebeurtenis
: BAG-OA

Beschrijving gebeurtenis
: Na afronding van een onderzoek wordt de aanduiding 'In onderzoek' bij de onderzochte attributen verwijderd.

Betrokken objecttype
: PAND en VERBLIJFSOBJECT en NUMMERAANDUIDING en OPENBARE RUIMTE en WOONPLAATS en STANDPLAATS en LIGPLAATS

Brondocument
: Een ambtelijke verklaring

Resultaat
: De betreffende attribu(u)t(en) heeft/hebben hebben de waarde `N` bij 'In onderzoek' gekregen.

Opmerkingen
: Het afronden van het onderzoek leidt uitsluitend tot een beëindiging van het onderzoek in de registratie. Als blijkt dat een attribuut van het object aangepast moet worden, vindt er een aparte mutatie van het BAG object plaats op basis van de gebeurtenis 'Correctie of mutatie naar aanleiding van signalering'.

Voorbeeld
: Uit een onderzoek is op 4 augustus 2017 duidelijk geworden dat het bouwjaar van een schuurtje inderdaad 2000 moet zijn in plaats van 1980. Op basis van een ambtelijke verklaring (documentnummer 66220) wordt op 04-08-2017 het onderzoek naar de juistheid van het bouwjaar van het pand beëindigd. Het bouwjaar van het pand wordt via een aparte mutatie aangepast in de BAG registratie op basis van de gebeurtenis 'Correctie naar aanleiding van signalering'.
