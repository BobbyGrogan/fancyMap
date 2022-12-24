var map = L.map('map').setView([10, 0], 2.5);
            
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=O3HwDMgtqcy5weLoOAmD', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

var markerIcon = L.icon ({ 
    iconUrl: 'images/house.png', 
    iconSize: [40, 40],
    iconAnchor: [19, 37],
    popupAnchor: [2, -34] 
});

var marker1 = L.marker([37.7927, -122.4275], { color: "#ee2299", fillColor: '0044aa', icon: markerIcon, }).addTo(map);
marker1.bindPopup('<div class="house"><ul><h3>Spreckels Mansion</h3><li class="address"><a href="https://www.google.com/maps/place/2080+Washington+St,+San+Francisco,+CA+94109/">2080 Washington Street, San Francisco</a></li><li>Owned by: <a target="_blank" href="https://en.wikipedia.org/wiki/Danielle_Steel">Danielle Steel</a></li><li>Estimated Price: $100,000,000</li><p>Built in the <a href="https://en.wikipedia.org/wiki/French_Baroque_architecture">French Baroque</a> Chateau style in 1913 for the son of sugar tycoon <a href="https://en.wikipedia.org/wiki/Claus_Spreckels">Claus Spreckels</a>. In 1968, the house was divided into four units. <a href="https://en.wikipedia.org/wiki/Danielle_Steel">Danielle Steel</a>, a romance author, purchased the home in the 2000s and restored it to a single residence. </p><div><a target="_blank" href="https://en.wikipedia.org/wiki/Spreckels_Mansion_(San_Francisco)">Wikipedia</a><a style="float: right;" target="_blank" href="https://earth.google.com/web/@37.79262878,-122.42765432,115.9089947a,116.7949015d,35y,44.67352256h,49.99714156t,0r">Google Earth</a></div></ul></div>');

var marker2 = L.marker([51.569, -0.1529], { color: "#ee2299", fillColor: '0044aa', icon: markerIcon, }).addTo(map);
marker2.bindPopup('<div class="house"><ul><h3>Witanhurst Mansion</h3><li class="address"><a href="https://www.google.com/maps/search/Highgate+W+Hill,+London+N6+6LS/">Highgate W Hill, London N6 6LS</a></li><li>Owned by: <a target="_blank" href="https://en.wikipedia.org/wiki/Andrey_Guryev">Andrey Guryev</a></li><li>Estimated Price: $400,000,000</li><p>The estate, formerly Parkfield, has existed since 1774, but the current house was built for soap magnate Sir <a href="https://en.wikipedia.org/wiki/Arthur_Crosfield">Arthur Crosfield</a> from 1913-1920 in the Georgian Revial Style. The property was first sold in 1970 and passed between owners, including a member of the Syrian ruling <a href="https://en.wikipedia.org/wiki/Al-Assad_family">Assad family</a>. The property is currently owned by Russian fertilizer billionare <a href="https://en.wikipedia.org/wiki/Andrey_Guryev">Andrey Guryev</a>. It is the largest private residence in London aside from <a href="https://en.wikipedia.org/wiki/Buckingham_Palace">Buckingham Palace</a>.</p><div><a target="_blank" href="https://en.wikipedia.org/wiki/Witanhurst">Wikipedia</a><a style="float: right;" target="_blank" href="https://earth.google.com/web/@51.569154,-0.152777,133.98921515a,147.88661963d,35y,-92.11963232h,49.74536779t,0r">Google Earth</a></div></ul></div>');

var marker3 = L.marker([43.7092, 7.3208], { color: "#ee2299", fillColor: '0044aa', icon: markerIcon, }).addTo(map);
marker3.bindPopup('<div class="house"><ul><h3>Villa Leopolda</h3><li class="address"><a href="https://www.google.com/maps/place/1670+Av.+Léopold+II,+06230+Villefranche-sur-Mer,+France">1670 Av. Léopold II, 06230 Villefranche-sur-Mer</a></li><li>Owned by: <a target="_blank" href=https://en.wikipedia.org/wiki/Lily_Safra>Lily Safra</a></li><li>Estimated price: $800,000,000</li><p>The villa takes its name from Belgian <a href="https://en.wikipedia.org/wiki/Leopold_II_of_Belgium"> King Leopold II</a> who constructed the home on his estate for his mistress <a href="https://en.wikipedia.org/wiki/Caroline_Delacroix">Caroline Delacroix</a>. The current home was built by American architect <a href="https://en.wikipedia.org/wiki/Ogden_Codman_Jr.">Ogden Codman Jr.</a> in the <a href="https://en.wikipedia.org/wiki/Beaux-Arts_architecture">Beaux Arts</a> style with a Rivieria flare. The property passed from Belgian royalty to the Canadian <a href="https://en.wikipedia.org/wiki/Izaak_Walton_Killam">Killam Family</a> and was owned briefly by the <a href="https://en.wikipedia.org/wiki/Gianni_Agnelli">Agnelli Family</a>. The home was purchased by <a href="https://en.wikipedia.org/wiki/Edmond_Safra">Edmond Safra</a> and was home to his wife <a href="https://en.wikipedia.org/wiki/Lily_Safra">Lily</a>. </p><div><a target="_blank" href="https://en.wikipedia.org/wiki/Villa_Leopolda">Wikipedia</a><a style="float: right;" target="_blank" href="https://earth.google.com/web/@43.70881915,7.3213289,173.13444404a,247.12035241d,35y,-51.28099608h,61.20255392t,0r">Google Earth</a></div></ul></div>');

var marker4 = L.marker([35.541, -82.553], { color: "#ee2299", fillColor: '0044aa', icon: markerIcon, }).addTo(map);
marker4.bindPopup('<div class="house"><ul><h3>Biltmore Estate</h3><li class="address"><a href="https://www.google.com/maps/place/Biltmore/@35.5405665,-82.5545144,17z/">1 Lodge St, Asheville</a></li><li>Owned by: <a target="_blank" href=https://en.wikipedia.org/wiki/Vanderbilt_family>Vanderbilt Family</a></li><li>Estimated price: $400,000,000</li><p><a href="https://en.wikipedia.org/wiki/George_Washington_Vanderbilt_II">George Vanderbilt II</a>, grandson of rail and shipping magnate <a href="https://en.wikipedia.org/wiki/Cornelius_Vanderbilt">Cornelius Vanderbilt</a> began construction of the mansion in 1889 on an estate of >100,000 acres which he owned. His wife <a href="https://en.wikipedia.org/wiki/Edith_Stuyvesant_Gerry">Edith</a> managed the estate until the 1920s. The final resident of the home, <a href="https://en.wikipedia.org/wiki/John_Francis_Amherst_Cecil">John Cecil</a>, stopped living in the home in 1954. The property currently is a house and grounds museum operated by <a href="https://en.wikipedia.org/wiki/Vanderbilt_family">Vanderbilt decendents</a> under the <a href="https://en.wikipedia.org/wiki/The_Biltmore_Company">The Biltmore Company</a>. Biltmore is the largest privately owned house in the USA at 178,926 sq. ft.</p><div><a target="_blank" href="https://en.wikipedia.org/wiki/Biltmore_Estate">Wikipedia</a><a style="float: right;" target="_blank" href="https://earth.google.com/web/@35.54073196,-82.55237978,680.8570534a,192.5069171d,35y,-63.4095916h,68.29190345t,0r">Google Earth</a></div></ul></div>');

var marker5 = L.marker([40.91861111, -72.26472222], { color: "#ee2299", fillColor: '0044aa', icon: markerIcon, }).addTo(map);
marker5.bindPopup('<div class="house"><ul><h3>Fair Field</h3><li class="address"><a href="https://www.google.com/maps/place/281+Daniel'+"'"+'s+Lane,+Sagaponack,+NY+11962">281 Daniel'+"'"+'s Lane, Sagaponack</a></li><li>Owned by: <a target="_blank" href=https://en.wikipedia.org/wiki/Ira_Rennert>Ira Rennert</a></li><li>Estimated price: $200,000,000</li><p>Fair Field is a huge estate in <a href="https://en.wikipedia.org/wiki/The_Hamptons">The Hamptons</a> owned by junk bond financier <a href="https://en.wikipedia.org/wiki/Ira_Rennert">Ira Rennert</a>. Rennert owns the <a href="https://en.wikipedia.org/wiki/Renco_Group">Renco Group</a>. The home includes many buildings and has a total square footage of ~110,000 sq. ft.</p><div><a target="_blank" href="https://en.wikipedia.org/wiki/Fair_Field">Wikipedia</a><a style="float: right;" target="_blank" href="https://earth.google.com/web/@40.91903882,-72.26586571,6.2279556a,469.82630241d,35y,-16.81449096h,67.51886986t,0r">Google Earth</a></div></ul></div>')

var marker6 = L.marker([46.23520000, 6.14166667], { color: "#ee2299", fillColor: '0044aa', icon: markerIcon, }).addTo(map);
marker6.bindPopup('<div class="house"><ul><h3>Château de Pregny</h3><li class="address"><a href="https://www.google.com/maps/place/Ch%C3%A2teau+de+Pregny/@46.2352901,6.1405025,17z/">Rte de Pregny 30, Pregny-Chambésy</a></li><li>Owned by: <a target="_blank" href=https://en.wikipedia.org/wiki/Nadine_de_Rothschild>Nadine de Rothschild</a></li><li>Estimated price: $300,000,000</li><p>The estate was originally bought by Adolphe Carl von Rothschild in 1857. The residence, often referred to as the Rothschild Castle, was built in the <a href="https://en.wikipedia.org/wiki/Ch%C3%A2teauesque">Châteauesque</a> style. It was passed onto <a href="https://en.wikipedia.org/wiki/Maurice_de_Rothschild">Maurice de Rothschild</a>. When Maurice died, his son <a href="https://en.wikipedia.org/wiki/Edmond_Adolphe_de_Rothschild">Edmond de Rothschild</a> inherited the estate. Currently it is the home of Edmond'+"'"+'s wife <a href="https://en.wikipedia.org/wiki/Nadine_de_Rothschild">Nadine</a>. Though it has never gone to market, it is certainly one of the most expsnive homes in Switzerland.</p><div><a target="_blank" href="https://en.wikipedia.org/wiki/Ch%C3%A2teau_de_Pregny">Wikipedia</a><a style="float: right;" target="_blank" href="https://earth.google.com/web/@46.23498397,6.14211255,445.64730896a,507.23490142d,35y,-67.34980418h,45.82539306t,0r">Google Earth</a></div></ul></div>')

var marker7 = L.marker([22.22861111, 114.19694444], { color: "#ee2299", fillColor: '0044aa', icon: markerIcon, }).addTo(map);
marker7.bindPopup('<div class="house"><ul><h3>The Lookout</h3><li class="address"><a href="https://www.google.com/maps/place/The+Lookout/@22.2287549,114.1958658,18">South Bay Road, Hong Kong</a></li><li>Owned by: <a target="_blank" href=https://opencorporates.com/companies/hk/F0001150>Green Heights Inc.</a></li><li>Estimated price: $400,000,000</li><p>This is certainly one of the most expensive homes in Hong Kong, given its incredible location. According to <a href="http://battleforhongkong.blogspot.com/2020/11/the-lookout.html">this article</a> the home was built in 1935 by Irish William Ritchie and saw the action in the Sino-Japanese war. The home was sold before the Hong Kong handover and is owned by Green Heights Inc., a Panamanian shell company according to <a href="https://gwulo.com/node/42005#17~22.22879~114.19695~Map_by_GovHK-Markers~100">Gwulo</a>. The real owner is unknown.</p><div><a target="_blank" href="https://earth.google.com/web/@22.22910239,114.19695452,24.74909675a,227.37083589d,35y,21.44668359h,70.67479997t,0r">Google Earth</a></div></ul></div>')

var marker8 = L.marker([22.27166667, 114.15916667], { color: "#ee2299", fillColor: '0044aa', icon: markerIcon, }).addTo(map);
marker8.bindPopup('<div class="house"><ul><h3>Bracken Hill</h3><li class="address"><a href="https://www.google.com/maps/place/Bracken+Hill,+14+Barker+Rd,+The+Peak,+Hong+Kong/@22.2717678,114.1571849,17z/">14 Barker Rd, The Peak, Hong Kong</a></li><li>Owned by: Unknown</li><li>Estimated price: $300,000,000</li><p>According to <a href="https://gwulo.com/node/30679#18~22.27156~114.15885~Map_by_GovHK-Markers~100">Gwulo</a> the house was built in 1953. It overlooks the skyscraper of central Hong Kong Island and <a href="https://en.wikipedia.org/wiki/Victoria_Harbour">Victoria Harbor</a> beyond. Little more is known about the home, but given its size and location, it is likely one of the most expensive homes in the world. According to this <a href="https://www.scmp.com/business/companies/article/1849151/has-alibabas-jack-ma-bought-hk15-billion-home-hong-kongs-peak">article</a> Jack Ma bought a nearby mansion in 2015 for ~$200,000,000.</p><div><a target="_blank" href="https://earth.google.com/web/@22.27182254,114.15942425,314.73484058a,89.75981371d,35y,-157.6028715h,47.45999776t,0r">Google Earth</a></div></ul></div>')

var marker9 = L.marker([18.96803333, 72.80952222], { color: "#ee2299", fillColor: '0044aa', icon: markerIcon, }).addTo(map);
marker9.bindPopup('<div class="house"><ul><h3>Antilia</h3><li class="address"><a href="https://www.google.com/maps/place/7JCJXR95%2B5V8/@18.9679125,72.8086061,18z/">XR95+5V8, Cumballa Hill, Mumbai</a></li><li>Owned by: <a href=https://en.wikipedia.org/wiki/Mukesh_Ambani>Mukesh Ambani</a></li><li>Estimated price: $500,000,000</li><p>This home in Mumbai is unlike any other, it is an entire skyscraper. 27 stories and 400,000 square feet are occupied by <a href="https://en.wikipedia.org/wiki/Mukesh_Ambani">Mukesh Ambani</a> and his family. Ambani is the chairman of <a href="https://en.wikipedia.org/wiki/Reliance_Industries">Reliance Industries</a>. The building has nine high speed elavators and is serviced by a staff of 600. Some consider it the most expensive home in the world, but realisitcally it is unlikely its resale value would be so high.</p><div><a target="_blank" href="https://en.wikipedia.org/wiki/Antilia_(building)">Wikipedia</a><a style="float: right;" target="_blank" href="https://earth.google.com/web/@18.96791141,72.80978219,51.04878915a,677.68254991d,35y,14.64482246h,15.72164277t,0.00000085r">Google Earth</a></div></ul></div>')

var marker10 = L.marker([-26.17250000, 28.04527778], { color: "#ee2299", fillColor: '0044aa', icon: markerIcon, }).addTo(map);
marker10.bindPopup('<div class="house"><ul><h3>Brenthurst Estate</h3><li class="address"><a href="https://www.google.com/maps/@-26.1727902,28.0447752,18.42z">1904 First Avenue, Johannesburg</a></li><li>Owned by: <a href=https://en.wikipedia.org/wiki/Nicky_Oppenheimer>Nicky Oppenheimer</a></li><li>Estimated price: $50,000,000</li><p>The home was built in the late 19th century and became notable when it became property of the Oppenheimer family in 1922. In that year <a href="https://en.wikipedia.org/wiki/Ernest_Oppenheimer">Ernest Oppenheimer</a>, chairman of the <a href="https://en.wikipedia.org/wiki/De_Beers">De Beers diamond company</a>. After his death, his son <a href="https://en.wikipedia.org/wiki/Harry_Oppenheimer">Harry Oppenheimer</a> occupied the home and held the same position at De Beers. Currently the home is owned by <a href="https://en.wikipedia.org/wiki/Nicky_Oppenheimer">Harry Oppenheimer</a> who himself was also formerly the chairman of De Beers. The house is a mix of <a href="https://en.wikipedia.org/wiki/Arts_and_Crafts_movement">Arts and Crafts</a> and <a href="https://en.wikipedia.org/wiki/Victorian_architecture">Victorian</a> style architecture. The estate has given most of its 40 acres to <a href="https://en.wikipedia.org/wiki/Brenthurst_Gardens">Brenthurst Gardens</a> and <a href="https://en.wikipedia.org/wiki/Brenthurst_Library">Brenthurst Library</a>.</p><div><a target="_blank" href="https://en.wikipedia.org/wiki/Parktown_mansions#Brenthurst">Wikipedia</a><a style="float: right;" target="_blank" href="https://earth.google.com/web/@-26.17251341,28.0456999,1715.31232014a,237.47816977d,35y,-2.46252249h,41.10855793t,-0r">Google Earth</a></div></ul></div>')