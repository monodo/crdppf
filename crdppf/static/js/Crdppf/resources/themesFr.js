﻿//definition of layers associated to themes

Ext.namespace('Crdppf');

Crdppf.layerListFr = {
    "type": "ThemesCollection",
        'themes' :[     {'id':'0','image':'osm.png','name':'Itinéraires pédestres', 'layers':{'at39_itineraires_pedestres':'Itinéraires pédestres'}},
                        {'id':'73','image':'amenagement.png','name':'Zones Affectation', 'layers':{'at14_zones_communales':'Zones communales','at08_zones_cantonales':'Zones cantonales'}},
                        {'id':'108','image':'trafic.png','name':'Carte et liste des obstacles à la navigation', 'layers':{'clo_couloirs':'Couloirs d\'obstacles aériens','clo_cotes_altitude_surfaces':'Cotes d\'altitude des surfaces'}},
                        {'id':'116','image':'sitespollues.png','name':'Cadastre des sites pollués','layers':{'en07_canepo_accidents':'Sites polluées : accidents','en07_canepo_decharges':'Sites pollués : décharges','en07_canepo_decharges_points':'Sites pollués : décharges (points)','en07_canepo_decharges_polygones':'Sites pollués : décharges (polygones)', 'en07_canepo_entreprises':'Sites pollués : entreprises', 'en07_canepo_entreprises_points':'Sites pollués : entreprises (points)', 'en07_canepo_entreprises_polygones':'Sites pollués : entreprises (polygones)'}},
        ]
    }
Crdppf.layerListDe = {
    "type": "ThemesCollection",
        'themes' :[     {'id':'0','image':'osm.png','name':'Fusswege', 'layers':{'at39_itineraires_pedestres':'Fusswege'}},
                        {'id':'73','image':'amenagement.png','name':'Zones Affectation', 'layers':{'at14_zones_communales':'Zones communales','at08_zones_cantonales':'Zones cantonales'}},
                        {'id':'108','image':'trafic.png','name':'Carte et liste des obstacles à la navigation', 'layers':{'clo_couloirs':'Couloirs d\'obstacles aériens','clo_cotes_altitude_surfaces':'Cotes d\'altitude des surfaces'}},
                        {'id':'116','image':'sitespollues.png','name':'Cadastre des sites pollués','layers':{'en07_canepo_accidents':'Sites polluées : accidents','en07_canepo_decharges':'Sites pollués : décharges','en07_canepo_decharges_points':'Sites pollués : décharges (points)','en07_canepo_decharges_polygones':'Sites pollués : décharges (polygones)', 'en07_canepo_entreprises':'Sites pollués : entreprises', 'en07_canepo_entreprises_points':'Sites pollués : entreprises (points)', 'en07_canepo_entreprises_polygones':'Sites pollués : entreprises (polygones)'}},
        ]
    }

Crdppf.labelsFr  ={
    'navPanelLabel':'Navigation',
    'searchBoxTxt':'Rechercher...',
    'themeSelectorLabel':'Sélection des thèmes',
    'mapContainerTab':'Carte',
    'legalBasisTab':'Bases légales',
    'layerTreeTitle':'Arbre des couches',
    'selectAllLayerLabel':'Sélectionner toutes les couches',
    'lawTabLabel':'Règlements',
    'additionnalInfoTab':'Informations et renvois supplémentaires',
    'infoTabLabel':'Informations',
    'legendPanelTitle':'Légende',
    'searchBoxEmptyTxt':'Rechercher...',
    'olCoordinates':'Coordonnées',
    'restrictionPanelTitle':'Restrictions',
    'restrictionPanelTxt':'Restrictions affectant la parcelle n° ',
    'noActiveLayertxt':'Aucune couche active',
    'restrictionFoundTxt':'Restriction n° ',
    'disclaimerTxt':'Mise en garde : Le canton de Neuchâtel n\'engage pas sa responsabilité sur l\'exactitude ou la fiabilité des documents législatifs dans leur version électronique. Ces documents ne créent aucun autre droit ou obligation que ceux qui découlent des textes légalement adoptés et publiés, qui font seuls foi.',
    'mapBottomTxt':'<b>Informations dépourvues de foi publique, <a style="color:#660000;" href="http://sitn.ne.ch/web/conditions_utilisation/contrat_SITN_MO.htm" target="_new">&copy; SITN</a>, <a style="color:#660000;" href="http://sitn.ne.ch/web/conditions_utilisation/contratdv5741.htm" target="_new">swisstopo DV 571.4</a>, <a style="color:#660000;" href="http://www.openstreetmap.org/copyright" target="_new">OpenStreetMap</a></b>',
}
Crdppf.labelsDe  ={
    'navPanelLabel':'Ruriraschli',
    'searchBoxTxt':'Suchen...',
    'themeSelectorLabel':'Grrrrrrr',
    'mapContainerTab':'Karte',
    'legalBasisTab':'dsfsdfsdafsd',
    'layerTreeTitle':'Schalenbaum',
    'selectAllLayerLabel':'aiusdgfakjghsd',
    'lawTabLabel':'Burp',
    'additionnalInfoTab':'Uppis Mehhhhhr',
    'infoTabLabel':'Groaaaa',
    'legendPanelTitle':'Boum',
    'searchBoxEmptyTxt':'Suchen...',
    'olCoordinates':'Koordinaten',
    'restrictionPanelTitle':'Uhre Gueil !',
    'restrictionPanelTxt':'Glarsp n° ',
    'noActiveLayertxt':'Aucune couche active',
    'restrictionFoundTxt':'Yepee n° ',
    'disclaimerTxt':'Aille !',
    'mapBottomTxt':'<b>VIVE LE SOLEIL, <a style="color:#660000;" href="http://sitn.ne.ch/web/conditions_utilisation/contrat_SITN_MO.htm" target="_new">&copy; SITN</a>, <a style="color:#660000;" href="http://sitn.ne.ch/web/conditions_utilisation/contratdv5741.htm" target="_new">swisstopo DV 571.4</a>, <a style="color:#660000;" href="http://www.openstreetmap.org/copyright" target="_new">OpenStreetMap</a></b>',


}

