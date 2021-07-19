---
layout: faq
title: Als ik alle actuele gegevens opvraag in de BAG&comma; krijg ik ook alle ingetrokken verblijfsobjecten&comma; straten en adressen te zien. Hoe kan dit?
date: 2018-07-01
description: In de BAG wordt de historie van alle objecten bijgehouden door middel van op elkaar aansluitende voorkomens. Dit betekent dat bij het opvragen van de gegevens van 'vandaag' ook objecten worden getoond die inmiddels niet meer bestaan of die inactief zijn, tenzij hier expliciet rekening mee wordt gehouden.
trefwoorden:
attributen: status
gebeurtenissen: Opvoeren toekomstmutatie
---

# Als ik alle actuele gegevens opvraag in de BAG, krijg ik ook alle ingetrokken verblijfsobjecten, straten en adressen te zien. Hoe kan dit?

In de BAG wordt de historie van alle objecten bijgehouden. Telkens als (attribuut van) een object wijzigt, wordt bij de laatste gegevens van dat object een datum einde geldigheid opgenomen.

Gelijktijdig wordt een nieuw voorkomen van hetzelfde object in de BAG opgenomen (met een datum begin geldigheid die identiek is aan de datum einde geldigheid van het vorige voorkomen).

Zo ontstaat historie die precies op elkaar aansluit.

Datzelfde gebeurt ook als een object, bijvoorbeeld een adres/nummeraanduiding, wordt ingetrokken: het oude voorkomen van de nummeraanduiding krijgt een einddatum en een nieuw voorkomen wordt opgenomen. Dat nieuwe voorkomen heeft de status `Ingetrokken`.

Dit nieuwe voorkomen blijft in principe voor 'eeuwig' op `Ingetrokken` staan.

(Uitzondering hierop is als verkeerd opgevoerde gegevens gecorrigeerd worden of intrekkingsbesluiten herzien worden).

Dat betekent dat als een afnemer alle gegevens van 'vandaag' opvraagt, hij of zij ook objecten te zien zal krijgen die inmiddels niet meer bestaan (of die op `Inactief` staan), tenzij hij of zij daar expliciet rekening mee houdt.

Dit geldt voor:

- woonplaatsen met status `Woonplaats ingetrokken`
- openbare ruimten met status `Naamgeving ingetrokken`
- nummeraanduidingen met status `Naamgeving ingetrokken`
- stand- en ligplaatsen met status `Plaats ingetrokken`
- verblijfsobjecten met status `Niet gerealiseerd verblijfsobject` of `Verblijfsobject ingetrokken`
- panden met status `Niet gerealiseerd pand` of `Pand gesloopt`

Van alle objecten zullen bovendien alle inactieve voorkomens getoond worden, tenzij de afnemer daar expliciet rekening mee houdt. Inactieve voorkomens ontstaan ten gevolge van mutaties op toekomstige gegevens (bijvoorbeeld een wijziging op een straatnaambesluit dat volgende maand ingaat, zie de gebeurtenis _Opvoeren toekomstmutatie_).


Er ontstaan dan twee 'tijdslijnen' naast elkaar: het oude, herziene voorkomen (dat op `Inactief` wordt gezet) en het nieuwe voorkomen.
