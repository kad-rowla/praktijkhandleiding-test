---
layout: faq
title: Hoe ontstaan niet BAG en inactieve voorkomens?
date: 2020-04-14
description: Voorkomens met een tijdstip 'niet BAG' zijn voorkomens die in zijn geheel niet meer aanwezig zijn bij de bronhouder. Inactieve voorkomens zijn voorkomens die nog wel bij de bronhouder aanwezig zijn, maar die inmiddels zijn ingetrokken.
objecten: pand, verblijfsobject, ligplaats, standplaats, woonplaats, openbare ruimte, nummeraanduiding
trefwoorden: historie
attributen: gebruiksdoel, geometrie, huisletter, huisnummer, huisnummertoevoeging, naam, oorspronkelijk bouwjaar, oppervlakte, postcode, status, type, type adresseerbaar object
---

# Hoe ontstaan niet BAG en inactieve voorkomens?

De levenscyclus van een object is in de BAG zichtbaar in de verschillende voorkomens van dat object. Voorkomens kunnen actief of niet actief zijn. Niet actieve voorkomens zijn ‘niet BAG’ of ‘inactief’. Deze voorkomens maken geen onderdeel uit van de geldige levenscyclus van het object.

Voorkomens die ‘niet BAG’ of ‘inactief’ zijn, ontstaan op verschillende manieren.
Inactieve voorkomens zijn voorkomens die nog wel bij de bronhouder aanwezig zijn, maar die inmiddels zijn ingetrokken. Inactieve voorkomens ontstaan als een voorkomen met een begindatum in de toekomst ingetrokken wordt om een wijziging met een eerdere begindatum in de BAG te kunnen registreren. Dit wordt toegelicht in de gebeurtenis [‘Inactief maken toekomstmutatie’]({{-site.baseurl-}}/gebeurtenissen/inactief-maken-toekomstmutatie).

Voorkomens met een tijdstip ‘niet BAG’ zijn voorkomens die in zijn geheel niet meer aanwezig zijn bij de bronhouder. Deze voorkomens ontstaan door [synchronisatie]({{-site.baseurl-}}/gebeurtenissen/synchronisatie). Synchronisatie is alleen bedoeld voor situaties die niet via reguliere mutaties zijn te herstellen. Bij synchronisatie wordt de gehele levenscyclus van het object naar de LV BAG gestuurd, zodat de geldige levenscyclus in de LV BAG weer overeenkomt met de levenscyclus in de gemeentelijke BAG. De voorkomens die door de synchronisatie geen onderdeel meer uitmaken van de geldige levenscyclus, hebben een tijdstip niet BAG gekregen.
