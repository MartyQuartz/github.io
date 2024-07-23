var wms_layers = [];


        var lyr_OSMStandardcopy_0 = new ol.layer.Tile({
            'title': 'OSM Standard copy',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DZ2021P_1 = new ol.format.GeoJSON();
var features_DZ2021P_1 = format_DZ2021P_1.readFeatures(json_DZ2021P_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DZ2021P_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DZ2021P_1.addFeatures(features_DZ2021P_1);
var lyr_DZ2021P_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DZ2021P_1, 
                style: style_DZ2021P_1,
                popuplayertitle: "DZ2021 P",
                interactive: true,
    title: 'DZ2021 P<br />\
    <img src="styles/legend/DZ2021P_1_0.png" /> 0%<br />\
    <img src="styles/legend/DZ2021P_1_1.png" /> 1%<br />\
    <img src="styles/legend/DZ2021P_1_2.png" /> 2%<br />\
    <img src="styles/legend/DZ2021P_1_3.png" /> 3%<br />\
    <img src="styles/legend/DZ2021P_1_4.png" /> 4%<br />\
    <img src="styles/legend/DZ2021P_1_5.png" /> 5%<br />\
    <img src="styles/legend/DZ2021P_1_6.png" /> 6%<br />\
    <img src="styles/legend/DZ2021P_1_7.png" /> 7%<br />\
    <img src="styles/legend/DZ2021P_1_8.png" /> 8%<br />\
    <img src="styles/legend/DZ2021P_1_9.png" /> 9%<br />\
    <img src="styles/legend/DZ2021P_1_10.png" /> <br />'
        });
var format_ControlledPrimarySchools_2 = new ol.format.GeoJSON();
var features_ControlledPrimarySchools_2 = format_ControlledPrimarySchools_2.readFeatures(json_ControlledPrimarySchools_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ControlledPrimarySchools_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ControlledPrimarySchools_2.addFeatures(features_ControlledPrimarySchools_2);
var lyr_ControlledPrimarySchools_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ControlledPrimarySchools_2, 
                style: style_ControlledPrimarySchools_2,
                popuplayertitle: "Controlled Primary Schools",
                interactive: true,
                title: '<img src="styles/legend/ControlledPrimarySchools_2.png" /> Controlled Primary Schools'
            });

        var lyr_OSMStandardcopy_3 = new ol.layer.Tile({
            'title': 'OSM Standard copy',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DZ2021C_4 = new ol.format.GeoJSON();
var features_DZ2021C_4 = format_DZ2021C_4.readFeatures(json_DZ2021C_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DZ2021C_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DZ2021C_4.addFeatures(features_DZ2021C_4);
var lyr_DZ2021C_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DZ2021C_4, 
                style: style_DZ2021C_4,
                popuplayertitle: "DZ2021 C",
                interactive: true,
    title: 'DZ2021 C<br />\
    <img src="styles/legend/DZ2021C_4_0.png" /> 0%<br />\
    <img src="styles/legend/DZ2021C_4_1.png" /> 1%<br />\
    <img src="styles/legend/DZ2021C_4_2.png" /> 2%<br />\
    <img src="styles/legend/DZ2021C_4_3.png" /> 3%<br />\
    <img src="styles/legend/DZ2021C_4_4.png" /> 4%<br />\
    <img src="styles/legend/DZ2021C_4_5.png" /> 5%<br />\
    <img src="styles/legend/DZ2021C_4_6.png" /> 6%<br />\
    <img src="styles/legend/DZ2021C_4_7.png" /> 7%<br />\
    <img src="styles/legend/DZ2021C_4_8.png" /> 8%<br />\
    <img src="styles/legend/DZ2021C_4_9.png" /> 9%<br />\
    <img src="styles/legend/DZ2021C_4_10.png" /> <br />'
        });
var format_ControlledPrimarySchoolscopy_5 = new ol.format.GeoJSON();
var features_ControlledPrimarySchoolscopy_5 = format_ControlledPrimarySchoolscopy_5.readFeatures(json_ControlledPrimarySchoolscopy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ControlledPrimarySchoolscopy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ControlledPrimarySchoolscopy_5.addFeatures(features_ControlledPrimarySchoolscopy_5);
var lyr_ControlledPrimarySchoolscopy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ControlledPrimarySchoolscopy_5, 
                style: style_ControlledPrimarySchoolscopy_5,
                popuplayertitle: "Controlled Primary Schools copy",
                interactive: true,
                title: '<img src="styles/legend/ControlledPrimarySchoolscopy_5.png" /> Controlled Primary Schools copy'
            });

        var lyr_OSMStandardcopy_6 = new ol.layer.Tile({
            'title': 'OSM Standard copy',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SDZ2021P_7 = new ol.format.GeoJSON();
var features_SDZ2021P_7 = format_SDZ2021P_7.readFeatures(json_SDZ2021P_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDZ2021P_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDZ2021P_7.addFeatures(features_SDZ2021P_7);
var lyr_SDZ2021P_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDZ2021P_7, 
                style: style_SDZ2021P_7,
                popuplayertitle: "SDZ2021 P",
                interactive: true,
    title: 'SDZ2021 P<br />\
    <img src="styles/legend/SDZ2021P_7_0.png" /> 3%<br />\
    <img src="styles/legend/SDZ2021P_7_1.png" /> 4%<br />\
    <img src="styles/legend/SDZ2021P_7_2.png" /> 5%<br />\
    <img src="styles/legend/SDZ2021P_7_3.png" /> 6%<br />\
    <img src="styles/legend/SDZ2021P_7_4.png" /> 7%<br />\
    <img src="styles/legend/SDZ2021P_7_5.png" /> 8%<br />\
    <img src="styles/legend/SDZ2021P_7_6.png" /> 9%<br />\
    <img src="styles/legend/SDZ2021P_7_7.png" /> <br />'
        });
var format_ControlledPostPrimarySchoolscopy_8 = new ol.format.GeoJSON();
var features_ControlledPostPrimarySchoolscopy_8 = format_ControlledPostPrimarySchoolscopy_8.readFeatures(json_ControlledPostPrimarySchoolscopy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ControlledPostPrimarySchoolscopy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ControlledPostPrimarySchoolscopy_8.addFeatures(features_ControlledPostPrimarySchoolscopy_8);
var lyr_ControlledPostPrimarySchoolscopy_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ControlledPostPrimarySchoolscopy_8, 
                style: style_ControlledPostPrimarySchoolscopy_8,
                popuplayertitle: "Controlled Post-Primary Schools copy",
                interactive: true,
                title: '<img src="styles/legend/ControlledPostPrimarySchoolscopy_8.png" /> Controlled Post-Primary Schools copy'
            });

        var lyr_OSMStandard_9 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SDZ2021C_10 = new ol.format.GeoJSON();
var features_SDZ2021C_10 = format_SDZ2021C_10.readFeatures(json_SDZ2021C_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDZ2021C_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDZ2021C_10.addFeatures(features_SDZ2021C_10);
var lyr_SDZ2021C_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDZ2021C_10, 
                style: style_SDZ2021C_10,
                popuplayertitle: "SDZ2021 C",
                interactive: true,
    title: 'SDZ2021 C<br />\
    <img src="styles/legend/SDZ2021C_10_0.png" /> 3%<br />\
    <img src="styles/legend/SDZ2021C_10_1.png" /> 4%<br />\
    <img src="styles/legend/SDZ2021C_10_2.png" /> 5%<br />\
    <img src="styles/legend/SDZ2021C_10_3.png" /> 6%<br />\
    <img src="styles/legend/SDZ2021C_10_4.png" /> 7%<br />\
    <img src="styles/legend/SDZ2021C_10_5.png" /> 8%<br />\
    <img src="styles/legend/SDZ2021C_10_6.png" /> 9%<br />\
    <img src="styles/legend/SDZ2021C_10_7.png" /> <br />'
        });
var format_ControlledPostPrimarySchools_11 = new ol.format.GeoJSON();
var features_ControlledPostPrimarySchools_11 = format_ControlledPostPrimarySchools_11.readFeatures(json_ControlledPostPrimarySchools_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ControlledPostPrimarySchools_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ControlledPostPrimarySchools_11.addFeatures(features_ControlledPostPrimarySchools_11);
var lyr_ControlledPostPrimarySchools_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ControlledPostPrimarySchools_11, 
                style: style_ControlledPostPrimarySchools_11,
                popuplayertitle: "Controlled Post-Primary Schools",
                interactive: true,
                title: '<img src="styles/legend/ControlledPostPrimarySchools_11.png" /> Controlled Post-Primary Schools'
            });
var group_SDZ10Catholic = new ol.layer.Group({
                                layers: [lyr_OSMStandard_9,lyr_SDZ2021C_10,lyr_ControlledPostPrimarySchools_11,],
                                fold: "open",
                                title: "SDZ <10% Catholic"});
var group_SDZ10Protestant = new ol.layer.Group({
                                layers: [lyr_OSMStandardcopy_6,lyr_SDZ2021P_7,lyr_ControlledPostPrimarySchoolscopy_8,],
                                fold: "open",
                                title: "SDZ <10% Protestant"});
var group_DZ10Catholic = new ol.layer.Group({
                                layers: [lyr_OSMStandardcopy_3,lyr_DZ2021C_4,lyr_ControlledPrimarySchoolscopy_5,],
                                fold: "open",
                                title: "DZ <10% Catholic"});
var group_DZ10Protestant = new ol.layer.Group({
                                layers: [lyr_OSMStandardcopy_0,lyr_DZ2021P_1,lyr_ControlledPrimarySchools_2,],
                                fold: "open",
                                title: "DZ <10% Protestant"});

lyr_OSMStandardcopy_0.setVisible(true);lyr_DZ2021P_1.setVisible(true);lyr_ControlledPrimarySchools_2.setVisible(true);lyr_OSMStandardcopy_3.setVisible(true);lyr_DZ2021C_4.setVisible(true);lyr_ControlledPrimarySchoolscopy_5.setVisible(true);lyr_OSMStandardcopy_6.setVisible(true);lyr_SDZ2021P_7.setVisible(true);lyr_ControlledPostPrimarySchoolscopy_8.setVisible(true);lyr_OSMStandard_9.setVisible(true);lyr_SDZ2021C_10.setVisible(true);lyr_ControlledPostPrimarySchools_11.setVisible(true);
var layersList = [group_DZ10Protestant,group_DZ10Catholic,group_SDZ10Protestant,group_SDZ10Catholic];
lyr_DZ2021P_1.set('fieldAliases', {'DZ2021_cd': 'DZ2021_cd', 'DZ2021_nm': 'DZ2021_nm', 'SDZ2021_cd': 'SDZ2021_cd', 'SDZ2021_nm': 'SDZ2021_nm', 'DEA2014_cd': 'DEA2014_cd', 'DEA2014_nm': 'DEA2014_nm', 'LGD2014_cd': 'LGD2014_cd', 'LGD2014_nm': 'LGD2014_nm', 'Area_ha': 'Area_ha', 'Perim_km': 'Perim_km', 'ni-census21-people-DZ_21_<10% Protestant_Data Zone': 'ni-census21-people-DZ_21_<10% Protestant_Data Zone', 'ni-census21-people-DZ_21_<10% Protestant_Protestant and Other Christian (including Christian related)': 'ni-census21-people-DZ_21_<10% Protestant_Protestant and Other Christian (including Christian related)', });
lyr_ControlledPrimarySchools_2.set('fieldAliases', {'Institution Name': 'Institution Name', 'Address Line 1': 'Address Line 1', 'Address Line 2': 'Address Line 2', 'Address Line 3': 'Address Line 3', 'Town': 'Town', 'County': 'County', 'Postcode': 'Postcode', 'X': 'X', 'Y': 'Y', 'Management': 'Management', 'Type': 'Type', });
lyr_DZ2021C_4.set('fieldAliases', {'DZ2021_cd': 'DZ2021_cd', 'DZ2021_nm': 'DZ2021_nm', 'SDZ2021_cd': 'SDZ2021_cd', 'SDZ2021_nm': 'SDZ2021_nm', 'DEA2014_cd': 'DEA2014_cd', 'DEA2014_nm': 'DEA2014_nm', 'LGD2014_cd': 'LGD2014_cd', 'LGD2014_nm': 'LGD2014_nm', 'Area_ha': 'Area_ha', 'Perim_km': 'Perim_km', 'ni-census21-people-DZ_21_<10%_Catholic_Data Zone': 'ni-census21-people-DZ_21_<10%_Catholic_Data Zone', 'ni-census21-people-DZ_21_<10%_Catholic_Catholic': 'ni-census21-people-DZ_21_<10%_Catholic_Catholic', });
lyr_ControlledPrimarySchoolscopy_5.set('fieldAliases', {'Institution Name': 'Institution Name', 'Address Line 1': 'Address Line 1', 'Address Line 2': 'Address Line 2', 'Address Line 3': 'Address Line 3', 'Town': 'Town', 'County': 'County', 'Postcode': 'Postcode', 'X': 'X', 'Y': 'Y', 'Management': 'Management', 'Type': 'Type', });
lyr_SDZ2021P_7.set('fieldAliases', {'SDZ2021_cd': 'SDZ2021_cd', 'SDZ2021_nm': 'SDZ2021_nm', 'DEA2014_cd': 'DEA2014_cd', 'DEA2014_nm': 'DEA2014_nm', 'LGD2014_cd': 'LGD2014_cd', 'LGD2014_nm': 'LGD2014_nm', 'Area_ha': 'Area_ha', 'Perim_km': 'Perim_km', 'ni-census21-people-SDz21_<10%_Protestant_SD Zone': 'ni-census21-people-SDz21_<10%_Protestant_SD Zone', 'ni-census21-people-SDz21_<10%_Protestant_Protestant and Other Christian (including Christian related)': 'ni-census21-people-SDz21_<10%_Protestant_Protestant and Other Christian (including Christian related)', });
lyr_ControlledPostPrimarySchoolscopy_8.set('fieldAliases', {'Institution Name': 'Institution Name', 'Address Line 1': 'Address Line 1', 'Address Line 2': 'Address Line 2', 'Address Line 3': 'Address Line 3', 'Town': 'Town', 'County': 'County', 'Postcode': 'Postcode', 'X': 'X', 'Y': 'Y', 'Management': 'Management', 'Type': 'Type', });
lyr_SDZ2021C_10.set('fieldAliases', {'SDZ2021_cd': 'SDZ2021_cd', 'SDZ2021_nm': 'SDZ2021_nm', 'DEA2014_cd': 'DEA2014_cd', 'DEA2014_nm': 'DEA2014_nm', 'LGD2014_cd': 'LGD2014_cd', 'LGD2014_nm': 'LGD2014_nm', 'Area_ha': 'Area_ha', 'Perim_km': 'Perim_km', 'ni-census21-people-SDz21_10%_Catholic_SDZ': 'ni-census21-people-SDz21_10%_Catholic_SDZ', 'ni-census21-people-SDz21_10%_Catholic_Catholic': 'ni-census21-people-SDz21_10%_Catholic_Catholic', });
lyr_ControlledPostPrimarySchools_11.set('fieldAliases', {'Institution Name': 'Institution Name', 'Address Line 1': 'Address Line 1', 'Address Line 2': 'Address Line 2', 'Address Line 3': 'Address Line 3', 'Town': 'Town', 'County': 'County', 'Postcode': 'Postcode', 'X': 'X', 'Y': 'Y', 'Management': 'Management', 'Type': 'Type', });
lyr_DZ2021P_1.set('fieldImages', {'DZ2021_cd': 'TextEdit', 'DZ2021_nm': 'TextEdit', 'SDZ2021_cd': 'TextEdit', 'SDZ2021_nm': 'TextEdit', 'DEA2014_cd': 'TextEdit', 'DEA2014_nm': 'TextEdit', 'LGD2014_cd': 'TextEdit', 'LGD2014_nm': 'TextEdit', 'Area_ha': 'TextEdit', 'Perim_km': 'TextEdit', 'ni-census21-people-DZ_21_<10% Protestant_Data Zone': 'TextEdit', 'ni-census21-people-DZ_21_<10% Protestant_Protestant and Other Christian (including Christian related)': 'TextEdit', });
lyr_ControlledPrimarySchools_2.set('fieldImages', {'Institution Name': 'TextEdit', 'Address Line 1': 'TextEdit', 'Address Line 2': 'TextEdit', 'Address Line 3': 'TextEdit', 'Town': 'TextEdit', 'County': 'TextEdit', 'Postcode': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Management': 'TextEdit', 'Type': 'TextEdit', });
lyr_DZ2021C_4.set('fieldImages', {'DZ2021_cd': 'TextEdit', 'DZ2021_nm': 'TextEdit', 'SDZ2021_cd': 'TextEdit', 'SDZ2021_nm': 'TextEdit', 'DEA2014_cd': 'TextEdit', 'DEA2014_nm': 'TextEdit', 'LGD2014_cd': 'TextEdit', 'LGD2014_nm': 'TextEdit', 'Area_ha': 'TextEdit', 'Perim_km': 'TextEdit', 'ni-census21-people-DZ_21_<10%_Catholic_Data Zone': 'TextEdit', 'ni-census21-people-DZ_21_<10%_Catholic_Catholic': 'TextEdit', });
lyr_ControlledPrimarySchoolscopy_5.set('fieldImages', {'Institution Name': 'TextEdit', 'Address Line 1': 'TextEdit', 'Address Line 2': 'TextEdit', 'Address Line 3': 'TextEdit', 'Town': 'TextEdit', 'County': 'TextEdit', 'Postcode': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Management': 'TextEdit', 'Type': 'TextEdit', });
lyr_SDZ2021P_7.set('fieldImages', {'SDZ2021_cd': 'TextEdit', 'SDZ2021_nm': 'TextEdit', 'DEA2014_cd': 'TextEdit', 'DEA2014_nm': 'TextEdit', 'LGD2014_cd': 'TextEdit', 'LGD2014_nm': 'TextEdit', 'Area_ha': 'TextEdit', 'Perim_km': 'TextEdit', 'ni-census21-people-SDz21_<10%_Protestant_SD Zone': 'TextEdit', 'ni-census21-people-SDz21_<10%_Protestant_Protestant and Other Christian (including Christian related)': 'TextEdit', });
lyr_ControlledPostPrimarySchoolscopy_8.set('fieldImages', {'Institution Name': 'TextEdit', 'Address Line 1': 'TextEdit', 'Address Line 2': 'TextEdit', 'Address Line 3': 'TextEdit', 'Town': 'TextEdit', 'County': 'TextEdit', 'Postcode': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Management': 'TextEdit', 'Type': 'TextEdit', });
lyr_SDZ2021C_10.set('fieldImages', {'SDZ2021_cd': 'TextEdit', 'SDZ2021_nm': 'TextEdit', 'DEA2014_cd': 'TextEdit', 'DEA2014_nm': 'TextEdit', 'LGD2014_cd': 'TextEdit', 'LGD2014_nm': 'TextEdit', 'Area_ha': 'TextEdit', 'Perim_km': 'TextEdit', 'ni-census21-people-SDz21_10%_Catholic_SDZ': 'TextEdit', 'ni-census21-people-SDz21_10%_Catholic_Catholic': 'TextEdit', });
lyr_ControlledPostPrimarySchools_11.set('fieldImages', {'Institution Name': 'TextEdit', 'Address Line 1': 'TextEdit', 'Address Line 2': 'TextEdit', 'Address Line 3': 'TextEdit', 'Town': 'TextEdit', 'County': 'TextEdit', 'Postcode': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Management': 'TextEdit', 'Type': 'TextEdit', });
lyr_DZ2021P_1.set('fieldLabels', {'DZ2021_cd': 'no label', 'DZ2021_nm': 'no label', 'SDZ2021_cd': 'no label', 'SDZ2021_nm': 'no label', 'DEA2014_cd': 'no label', 'DEA2014_nm': 'no label', 'LGD2014_cd': 'no label', 'LGD2014_nm': 'no label', 'Area_ha': 'no label', 'Perim_km': 'no label', 'ni-census21-people-DZ_21_<10% Protestant_Data Zone': 'no label', 'ni-census21-people-DZ_21_<10% Protestant_Protestant and Other Christian (including Christian related)': 'no label', });
lyr_ControlledPrimarySchools_2.set('fieldLabels', {'Institution Name': 'no label', 'Address Line 1': 'no label', 'Address Line 2': 'no label', 'Address Line 3': 'no label', 'Town': 'no label', 'County': 'no label', 'Postcode': 'no label', 'X': 'no label', 'Y': 'no label', 'Management': 'no label', 'Type': 'no label', });
lyr_DZ2021C_4.set('fieldLabels', {'DZ2021_cd': 'no label', 'DZ2021_nm': 'no label', 'SDZ2021_cd': 'no label', 'SDZ2021_nm': 'no label', 'DEA2014_cd': 'no label', 'DEA2014_nm': 'no label', 'LGD2014_cd': 'no label', 'LGD2014_nm': 'no label', 'Area_ha': 'no label', 'Perim_km': 'no label', 'ni-census21-people-DZ_21_<10%_Catholic_Data Zone': 'no label', 'ni-census21-people-DZ_21_<10%_Catholic_Catholic': 'no label', });
lyr_ControlledPrimarySchoolscopy_5.set('fieldLabels', {'Institution Name': 'no label', 'Address Line 1': 'no label', 'Address Line 2': 'no label', 'Address Line 3': 'no label', 'Town': 'no label', 'County': 'no label', 'Postcode': 'no label', 'X': 'no label', 'Y': 'no label', 'Management': 'no label', 'Type': 'no label', });
lyr_SDZ2021P_7.set('fieldLabels', {'SDZ2021_cd': 'no label', 'SDZ2021_nm': 'no label', 'DEA2014_cd': 'no label', 'DEA2014_nm': 'no label', 'LGD2014_cd': 'no label', 'LGD2014_nm': 'no label', 'Area_ha': 'no label', 'Perim_km': 'no label', 'ni-census21-people-SDz21_<10%_Protestant_SD Zone': 'no label', 'ni-census21-people-SDz21_<10%_Protestant_Protestant and Other Christian (including Christian related)': 'no label', });
lyr_ControlledPostPrimarySchoolscopy_8.set('fieldLabels', {'Institution Name': 'no label', 'Address Line 1': 'no label', 'Address Line 2': 'no label', 'Address Line 3': 'no label', 'Town': 'no label', 'County': 'no label', 'Postcode': 'no label', 'X': 'no label', 'Y': 'no label', 'Management': 'no label', 'Type': 'no label', });
lyr_SDZ2021C_10.set('fieldLabels', {'SDZ2021_cd': 'no label', 'SDZ2021_nm': 'no label', 'DEA2014_cd': 'no label', 'DEA2014_nm': 'no label', 'LGD2014_cd': 'no label', 'LGD2014_nm': 'no label', 'Area_ha': 'no label', 'Perim_km': 'no label', 'ni-census21-people-SDz21_10%_Catholic_SDZ': 'no label', 'ni-census21-people-SDz21_10%_Catholic_Catholic': 'no label', });
lyr_ControlledPostPrimarySchools_11.set('fieldLabels', {'Institution Name': 'no label', 'Address Line 1': 'no label', 'Address Line 2': 'no label', 'Address Line 3': 'no label', 'Town': 'no label', 'County': 'no label', 'Postcode': 'no label', 'X': 'no label', 'Y': 'no label', 'Management': 'no label', 'Type': 'no label', });
lyr_ControlledPostPrimarySchools_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});