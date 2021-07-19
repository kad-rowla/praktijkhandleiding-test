---
layout: gebeurtenissen
title: "Melding gebruiksgereed"
sortkey: 01-070
date: 2018-07-01
description: "Door de aanvrager van een verleende omgevingsvergunning wordt aangegeven dat een bouwwerk dat als object al is geregistreerd binnen de BAG gebruiksgereed is. Bij het ontbreken van een dergelijke melding kan deze gebeurtenis ook voortvloeien uit een waarneming door een daartoe bevoegde ambtenaar."
objecttypen: pand, verblijfsobject
attributen: status, bouwjaar, geometrie
---

# Melding gebruiksgereed

Naam gebeurtenis
: Melding gebruiksgereed

Code gebeurtenis
: BGR-MGB

Beschrijving gebeurtenis
: - Door de aanvrager van een verleende omgevingsvergunning wordt aangegeven dat een bouwwerk dat als object(en) al is geregistreerd binnen de BAG gebruiksgereed is.
: - Bij het ontbreken van een dergelijke melding kan deze gebeurtenis ook voortvloeien uit een waarneming door een daartoe bevoegde ambtenaar.

Betrokken objecttype
: PAND en VERBLIJFSOBJECT

Brondocument
: De ambtelijke verklaring van de waarneming door de bevoegd ambtenaar of de schriftelijke melding.

Resultaat
: Het pand(en) krijgt de status `Pand in gebruik (niet ingemeten)` of `Pand in gebruik`. Indien van toepassing wordt het bouwjaar aangepast.
: Indien van toepassing krijgt het verblijfsobject(en) de status `Verblijfsobject in gebruik (niet ingemeten)` of `Verblijfsobject in gebruik`.

Opmerkingen
: Bij omvangrijke panden zoals grote flatgebouwen kan het gebeuren dat sommige verblijfsobjecten eerder gereed zijn dan andere verblijfsobjecten. De verschillende verblijfsobjecten binnen het pand worden in dat geval met een verschillende datum begin geldigheid op `Verblijfsobject in gebruik (niet ingemeten)` gezet.
: Het betreffende pand krijgt in dit geval de status `Pand in gebruik (niet ingemeten)` zodra het eerste verblijfsobject op `Verblijfsobject in gebruik (niet ingemeten)` wordt gezet.
: Soms wordt de geometrie al ingemeten voordat de bouw gereed is en is de definitieve geometrie al ingevoerd. In dat geval wordt de pandstatus bij de gebeurtenis 'Melding gebruiksgereed' gezet op `Pand in gebruik` en wordt de verblijfsobjectstatus gezet op `Verblijfsobject in gebruik`.
: De status `in gebruik (niet ingemeten)` wordt in dat geval overgeslagen.

Voorbeeld 1
: Op de Crocussenlaan in Het Dorp is een omgevingsvergunning verleend (met dossiernummer 62146) voor het bouwen van een pand met een verblijfsobject, waaraan het huisnummer 10 is toegekend. Op 15 augustus 2015 is er een melding (geregistreerd onder nummer 14380) gekomen dat de bouw gestart is. Op 31 maart 2017 meldt de aanvrager van de omgevingsvergunning dat het bouwwerk gebruiksgereed is. De geometrie is nog niet bekend. Deze melding wordt geregistreerd met nummer 64241.

Voorbeeld 2
: Op de Crocussenlaan in Het Dorp is een omgevingsvergunning verleend (met dossiernummer 62146) voor het bouwen van een pand met een verblijfsobject, waaraan het huisnummer 10a is toegekend. Op 15 augustus 2015 is er een melding (geregistreerd onder nummer 143801) gekomen dat de bouw gestart is. Op 31 maart 2017 meldt de aanvrager van de omgevingsvergunning dat het bouwwerk gebruiksgereed is. De geometrie is bekend. Deze melding wordt geregistreerd met nummer 642411.
