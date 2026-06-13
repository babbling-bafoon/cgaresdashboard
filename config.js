const disableSetup = false;
var topBarCenterText = `Cerro Gordo ARES`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
  var aURL = [
//  ["2196F3", "APRS.fi", "https://aprs.fi/#!lat=43.13467&lng=-93.20050", "1.7"],
//  [
//    "2196F3",
//    "Windy",
//    "https://www.windy.com/?42.892,-93.318,5,p:cities",
//    "1",
//  ],
//  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
//  [
//    "2196F3",
//    "Situation Monitor",
//    "https://hipcityreg-situation-monitor.vercel.app/",
//    "1",
//    "R",
//  ],
//  ["2196F3", "Packet node", "http://10.10.225.19:8080/node/ShowLog.html?input=Back", "1.2"],
//  [
//    "2196F3",
//    "RADAR",
//    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
//    "1",
//    "R"
//  ],
//  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
//  [
//    "2196F3",
//    "WEATHER",
//    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
//    "1",
//    "R",
//  ],
//  [
//    "2196F3",
//    "WINDS",
//    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
//    "1",
//    "R",
//  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  ["", "https://radar.weather.gov/ridge/standard/KDMX_loop.gif"],
  [
    "",
    "https://mesonet.agron.iastate.edu/plotting/auto/plot/220/which:1C::cat:categorical::csector:IA::_r:t::dpi:100.png",
  ],
  [
    "",
    "https://mesonet.agron.iastate.edu/plotting/auto/plot/220/which:2C::cat:categorical::csector:IA::_r:t::dpi:100.png",
  ],
  [
    "",
    "https://mesonet.agron.iastate.edu/plotting/auto/plot/220/which:3C::cat:categorical::csector:IA::_r:t::dpi:100.png",
  ],
  [
    "",
    "https://mesonet.agron.iastate.edu/plotting/auto/plot/84/::sector:IA::src:mrms::opt:acc::ptype:g::dpi:100.png",
  ],
  [
    "",
    "https://water.noaa.gov/resources/hydrographs/mcwi4_hg.png",
  ],
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/WFO/dmx/EXTENT3/GOES19-DMX-EXTENT3-600x600.mp4",
  ],
  [
    "",
    "https://x-hv1.pivotalweather.com/maps/warnings/nwshaz.us_mw.png",
  ],
  ["", "iframe|https://plyamb2.videstra.live/?id=493fd135-f884-4992-93dc-c7cb89f5176f&token=HVkoOWLAothHEIBR7mkcIsxmvnweGKdUqdfzvNe_rVWQc0ogISZTmqALk8HXO8im"],
  [
    "",
    "iframe|https://cloud.iowadot.gov/Highway/OTO/its-cameras/Stream/?video=https://video4.iowadot.gov:8888/ames/d2tv74lb/playlist.m3u8",
  ],
  ["", "iframe|https://atmsqf.iowadot.gov/snapshots/Public/Rural/D2TV03.jpg"],
  ["",
    "iframe|https://atmsqf.iowadot.gov/snapshots/Public/Rural/D2TV01.jpg"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  30000,600000,600000,600000,
  300000,300000,120000,90000,
  30000,600000,20000,20000
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
  var aRSS = [
//  ["https://homelandsecurity.iowa.gov/topics/48/feed", 60],           // Example RSS feed, refresh every 60 minutes
//  ["https://homelandsecurity.iowa.gov/news/11/all/all/rss.xml", 60], // Example Atom feed, refresh every 120 minutes
  ];
