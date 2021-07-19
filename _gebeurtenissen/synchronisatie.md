---
layout: gebeurtenissen
title: "Synchronisatie"
sortkey: 05-030
date: 2018-07-01
description: "De gemeente synchroniseert de gegevens in de LV BAG na constatering van een verschil tussen de gegevens in de lokale BAG en de gegevens in de LV BAG. De gemeente stuurt de gehele levenscyclus van het object naar de LV BAG."
objecttypen: woonplaats, openbare ruimte, nummeraanduiding, standplaats, ligplaats, pand, verblijfsobject
attributen: status
---

# Synchronisatie

Naam gebeurtenis
: Synchronisatie

Code gebeurtenis
: BAG-SYN

Beschrijving gebeurtenis
: De gemeente synchroniseert de gegevens in de LV BAG na constatering van een verschil tussen de gegevens in de lokale BAG en de gegevens in de LV BAG. De gemeente stuurt de gehele levenscyclus van het object(en) naar de LV BAG

Betrokken objecttype
: PAND en VERBLIJFSOBJECT en NUMMERAANDUIDING en OPENBARE RUIMTE en WOONPLAATS en STANDPLAATS en LIGPLAATS

Brondocument
: Ambtelijke verklaring

Resultaat
: De geldige levenscyclus in de LV BAG komt weer overeen met de levenscyclus in de gemeentelijke BAG. De afwijkende voorkomens hebben een tijdstip niet-BAG gekregen.

Opmerkingen
: Synchronisatie is alleen bedoeld voor situaties die niet via reguliere mutaties zijn te herstellen. Synchronisatie heeft namelijk grote gevolgen voor de formele historie in de levenscyclus van het object.

Voorbeeld
: Als gevolg van een technische fout in het berichtenverkeer is een woning aan Het Steegje 98 in de LV BAG opgevoerd met begindatum en brondocumentdatum 01-03-1917 in plaats van 01-03-2017. Zowel het pand als het verblijfsobject als de nummeraanduiding zijn met de foutieve begindatum in de LV BAG terecht gekomen. In de gemeentelijke BAG staan de objecten wel met begindatum 01-03-2017 opgenomen. De gemeente komt hier achter op het moment dat op 1 juli 2017 gemeld wordt (document 2017GHF45B) dat de bouw is gestart en dit als mutatie naar de LV BAG wordt gestuurd. Vanwege het verschil in de was-situatie wordt deze mutatie afgekeurd met foutcode VAL001 _Voorkomen niet aanwezig in de LV. Omdat de gemeente geen mogelijkheid heeft het voorkomen met ingangsdatum 01-03-1917 te muteren stuurt de gemeente een synchronisatiebericht waarin zowel de oorspronkelijke opvoer als de melding dat de bouw is gestart. Dit betekent dat er twee voorkomens van het pand in de LV BAG worden opgenomen als de geldige levenscyclus. Het oorspronkelijke voorkomen krijgt een tijdstip niet-BAG en maakt vanaf dat moment geen onderdeel meer uit van de geldige levenscyclus. Het verblijfsobject en de nummeraanduiding krijgen in dit geval alleen een vervangend voorkomen voor het inactieve voorkomen omdat de melding Bouw gestart geen mutatie van het verblijfsobject oplevert.
