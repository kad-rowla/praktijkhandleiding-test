---
layout: faq
title: Welke tekens mogen in de BAG worden gebruikt?
date: 2018-10-04
description: Voor de toegestane tekens wordt gebruikt gemaakt van de tekenset MES-1.
trefwoorden: adres
attributen: documentnummer, identificatie, huisletter, huisnummertoevoeging, naam, postcode
objecttypen: woonplaats, openbare ruimte, nummeraanduiding, pand, standplaats, ligplaats, verblijfsobject
---

# Welke tekens mogen in de BAG worden gebruikt?

In de catalogus staat een aantal malen het domeintype _AN_. Wat wordt precies bedoeld met _AN_?

Voor de toegestane tekens wordt gebruikt gemaakt van de tekenset MES-1. Net als het veel bekendere ASCII is dit een deelverzameling van Unicode.

ASCII bevat de volgende 95 tekens (waaronder de spatie):

{% comment %}
Deze tekenverzameling is overgenomen van https://gist.github.com/schierlm/aa37036335528b9b12bb
{% endcomment %}

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789
 !"#$%&'()*+,-./
:;<=>?@[\]^_`{|}~
```

Omdat ASCII geen trema's, umlauten, accenttekens en cedille bevat, staat de BAG de eerstgrotere standaard deelverzameling van Unicode toe, namelijk MES-1.

MES-1 bevat 335 tekens, te weten alle tekens uit ASCII plus:

{% comment %}
Deze tekenverzameling is overgenomen van https://gist.github.com/schierlm/aa37036335528b9b12bb
{% endcomment %}

```
 ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿
ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß
àáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ
ĀāĂăĄąĆćĈĉĊċČčĎďĐđĒē
ĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪī
ĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌō
ŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧ
ŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽž
ˇ˘˙˚˛˝―‘’“”€™Ω⅛⅜⅝⅞←↑→↓♪
```

MES-1 bevat allerlei tekens die niet zinvol lijken voor de BAG, zoals de harde spatie en `©®¶™←↑→↓♪`. Om problemen bij de vindbaarheid van adressen te voorkomen, bijvoorbeeld in de meldkamer van hulpdiensten, hebben ASCII-tekens die op een toetsenbord staan en die iedereen in het Nederlands gewoon kan uitspreken, altijd de voorkeur.

Bij sommige attributen perkt de [{{ site.catalogus_bag_label -}}]({{- site.baseurl -}}{{- site.catalogus_bag_url -}}){:target="blank"} de geldige  tekenset verder in, zoals bij de huisletter en de huisnummertoevoeging.
