---
title: objecttypen-top
---

Dit overzicht laat zien welke artikelen relevant zijn voor elk van de verschillende objecttypen van de Basisregistratie Adressen en Gebouwen.

{% highlight mermaid %}
graph TB
    LP-->NA
    SP-->NA
    VBO-->NA
    VBO-->P
    subgraph Gebouwen
        P(Pand)
    end
    subgraph Adresseerbare objecten
        LP(Ligplaats)
        SP(Standplaats)
        VBO(Verblijfsobject)
    end
    subgraph Adressen
        NA(Nummeraanduiding)-->WPL(Woonplaats)
        NA-->OR
        OR(Openbare ruimte)-->WPL
    end
    click LP {% include doclink.liquid itemtitle="Ligplaats" itemcollection="objecttypen" %}
    click SP {% include doclink.liquid itemtitle="Standplaats" itemcollection="objecttypen" %}
    click VBO {% include doclink.liquid itemtitle="Verblijfsobject" itemcollection="objecttypen" %}
    click P {% include doclink.liquid itemtitle="Pand" itemcollection="objecttypen" %}
    click NA {% include doclink.liquid itemtitle="Nummeraanduiding" itemcollection="objecttypen" %}
    click OR {% include doclink.liquid itemtitle="Openbare ruimte" itemcollection="objecttypen" %}
    click WPL {% include doclink.liquid itemtitle="Woonplaats" itemcollection="objecttypen" %}
{% endhighlight %}
