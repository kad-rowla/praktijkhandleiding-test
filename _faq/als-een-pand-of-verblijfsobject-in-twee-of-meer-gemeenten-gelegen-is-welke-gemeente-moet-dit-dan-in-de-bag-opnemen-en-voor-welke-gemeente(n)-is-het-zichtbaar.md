---
layout: faq
title: Als een pand of verblijfsobject in twee (of meer) gemeenten gelegen is&comma; welke gemeente moet dit dan in de BAG opnemen en voor welke gemeente(n) is het zichtbaar?
date: 2019-07-12
description: Objecten die op de gemeentegrens liggen, worden geleverd aan alle gemeenten waarin het object deels ligt.
objecttypen: pand, verblijfsobject
relaties: ligt in
attributen: geometrie
trefwoorden: bronhouder
---

# Als een pand of verblijfsobject in twee (of meer) gemeenten gelegen is, welke gemeente moet dit dan in de BAG opnemen en voor welke gemeente(n) is het zichtbaar?

Het grondgebied van de gemeente waarop een object is gelegen, is bepalend voor de vraag binnen welke gemeente een object wordt geregistreerd. In die gevallen dat een pand of verblijfsobject is gelegen op de grens van twee of meer gemeenten, wordt het betreffende pand of verblijfsobject geregistreerd in die gemeente op wier grondgebied het grootste gedeelte van het pand is gelegen. Dit staat beschreven in de [memorie van toelichting op de Wet bag, artikel 6](https://zoek.officielebekendmakingen.nl/kst-30968-3.html#IDASUDFB){:target="_blank" rel="noreferrer"}.

Echter, in de praktijk is deze regel niet altijd sluitend. Denk hierbij aan situaties waarbij de verdeling 50%-50% is of aan situaties waarin het om praktische redenen handiger is toch de andere gemeente te hanteren.
<br>Daarnaast is het vanuit de BAG niet geautomatiseerd te bepalen bij welke gemeente een object hoort. Ook de gemeentecode is hierin niet leidend: een object kan tussentijds gewijzigd zijn, maar de gemeentecode wordt dan niet aangepast (zie hiervoor ook het artikel ['Ik wil graag alle gegevens selecteren van een gemeente. Kan ik daarvoor gebruik maken van de gemeentecode die deel uitmaakt van de BAG-ID's van de verschillende objecten?']({{-site.baseurl-}}/artikelen/ik-wil-graag-alle-gegevens-selecteren-van-een-gemeente-kan-ik-daarvoor-gebruik-maken-van-de-gemeentecode-die-deel-uitmaakt-van-de-bag-ids-van-de-verschillende-objecten)).

Dit betekent dat objecten die op de gemeentegrens liggen, worden geleverd aan alle gemeenten waarin het object deels ligt.
Dit heeft de volgende gevolgen:
-	In BAG extracten wordt het object aangeleverd aan alle gemeenten waarin het object gelegen is.
-	In het Kwaliteitsdashboard is het object zichtbaar voor alle gemeenten waarin het object gelegen is.
-	Bij terugmeldingen zijn alle gemeenten waarin het object gelegen is, aangewezen als bronhouder.
