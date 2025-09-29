const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const cors = require("cors"); 
const app = express();
const PORT = 3000;


app.use(cors()); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 


const maharashtraHeritageData = {
    'Mumbai': [

    { 
        name: 'Gateway of India', 
        category: 'Heritage Site', 
        description: 'The Gateway of India is located at Apollo Bunder in Colaba Mumbai facing the Arabian Sea. It was built in 1924 to commemorate the visit of King George V and Queen Mary. The monument was designed by Scottish architect George Wittet and constructed using yellow basalt stone. It represents Indo-Saracenic architecture which is a blend of Hindu Muslim and British styles. The Gateway is 26 meters high and has a central dome with intricate latticework and graceful arches. During British rule it served as the ceremonial entrance to India and in 1948 the last British troops left India through this Gateway. Today it is a major tourist attraction near the Taj Mahal Palace Hotel and the starting point for ferry rides to Elephanta Caves.'
    },
    { 
        name: 'Siddhivinayak Temple', 
        category: 'Hindu Temple', 
        description:'The Siddhivinayak Temple is located in Prabhadevi Mumbai and is one of the most famous Hindu temples dedicated to Lord Ganesha. It was built in 1801 and attracts thousands of devotees every day. The temple has a beautiful sanctum sanctorum with a black stone idol of Lord Ganesha. Many Bollywood actors politicians and common people visit the temple to seek blessings. It is considered a symbol of faith and devotion in Mumbai and hosts a large celebration during the Ganesh Chaturthi festival.'
    },
    { 
        name: 'Juhu Beach', 
        category: 'Natural',  
        description: 'Juhu Beach is one of the most famous beaches in Mumbai located in the western suburbs. It is popular for evening outings street food local snacks and family gatherings. Tourists enjoy walking along the sandy shore watching the sunset and experiencing the vibrant atmosphere. The beach is also known for various festivals and events held throughout the year. People visit the beach to relax play games and enjoy the lively culture of Mumbai.'
    },
    {
        name: "Mumbadevi Temple",
        category:"Hindu Temple", 
        description:'The Mumbadevi Temple is situated in Bhuleshwar Mumbai and is dedicated to the goddess Mumbadevi who is the city deity of Mumbai. It is believed to be several centuries old and is a center of worship for local residents. The temple has a simple design with a sanctum housing the idol of the goddess. It is visited by devotees seeking protection prosperity and blessings. The temple holds historical and cultural importance as it gave the city its name and remains an important spiritual site.'
    },
    {
        name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalay",
        category: "Heritage Site",
        description: "The Chhatrapati Shivaji Maharaj Vastu Sangrahalay formerly known as the Prince of Wales Museum is located in South Mumbai. It was established in 1922 and designed by architect George Wittet. The museum showcases Indian art archaeology and cultural history. Its architecture combines Indo-Saracenic elements with British colonial designs. The museum has a large collection of sculptures coins paintings and decorative arts. It is an important cultural and heritage landmark that attracts both historians and tourists."
    },
    {
        name: "Elephanta Caves",
        category: "Heritage Site",
        description: "The Elephanta Caves are located on Elephanta Island about 11 kilometers from Mumbai and are a UNESCO World Heritage Site known for their ancient rock-cut temples. These caves were built between the fifth and eighth centuries and are primarily dedicated to Lord Shiva and contain magnificent stone carvings sculptures and shrines. The most famous sculpture is the three-headed Shiva known as Trimurti which represents creation preservation and destruction. The caves display the skill of ancient Indian rock-cut architecture and hold great historical and religious importance. They can be reached by ferry from the Gateway of India and are a popular tourist attraction."
    },
    {
        name: "Rajabai Clock Tower",
        category: "Heritage Site",
        description: "The Rajabai Clock Tower is located within the University of Mumbai campus and is another important heritage structure in the city. It was built in the late nineteenth century and designed by British architect Sir George Gilbert Scott in the Gothic Revival style inspired by Big Ben in London. The tower stands about 85 meters tall and has beautiful stained-glass windows and detailed stonework. It was funded by a wealthy stockbroker Premchand Roychand in memory of his mother Rajabai. Today the tower serves as a landmark of South Mumbai and reflects the blend of education architecture and history."
    },
    {
        name: "Global Pagoda",
        category: "Pagoda/Buddhist-Vihara", // 'Tourist Attraction' चा बदल 'Pagoda/Buddhist-Vihara'
        description: "The Global Pagoda is located at Gorai Mumbai and is a modern Buddhist monument inspired by the Great Stupa of Sanchi. It is made of stone and designed to be the largest meditation hall in the world without any supporting pillars inside. The pagoda attracts devotees tourists and meditation enthusiasts from all over the world. Its architecture and serene surroundings make it a unique spiritual and cultural attraction."
    },
    {
        name: "ISKCON Temple Juhu",
        category: "Hindu Temple", // 'Worship Sites' चा बदल 'Hindu Temple'
        description: "The ISKCON Temple in Juhu Mumbai is dedicated to Lord Krishna and is part of the International Society for Krishna Consciousness. It was established in 1978 and is known for its beautiful architecture and peaceful environment. The temple hosts regular devotional programs kirtans and festivals such as Janmashtami which attract devotees from across the country. It serves as a center of spiritual learning and cultural activities in Mumbai."
    },
    {
        name: "Mahalaxmi Temple",
        category: "Hindu Temple", // 'Worship Sites' चा बदल 'Hindu Temple'
        description: "The Mahalaxmi Temple is located in the Mahalaxmi area of Mumbai and is dedicated to Goddess Mahalaxmi who is considered the goddess of wealth and prosperity. The temple was built in the late 18th century and attracts thousands of devotees every week. The temple has a traditional design with the idol of the goddess adorned with gold and jewelry. It is visited by people seeking blessings financial stability and protection and is an important spiritual and cultural landmark in Mumbai."
    },
    {
        name: "Walkeshwar Temple",
        category: "Hindu Temple", // 'Worship Sites' चा बदल 'Hindu Temple'
        description: "The Walkeshwar Temple is situated in the Walkeshwar area of Mumbai and is dedicated to Lord Shiva. It was originally built in the 12th century and rebuilt in modern times. The temple complex includes the famous Banganga Tank which is considered sacred by devotees. The temple is visited by locals and tourists for worship meditation and cultural ceremonies. It is an important religious site that represents the historical and spiritual heritage of Mumbai."
    },
    {
        name: "Sewri Fort",
        category: "Fort",
        description: "The Sewri Fort is located in the eastern part of Mumbai near the Sewri mudflats. It was built by the British in the 17th century to defend the city from Dutch and Portuguese attacks. The fort is now in ruins but offers a panoramic view of the surrounding area including the docks and flamingo bird habitats. It is visited by history enthusiasts photographers and tourists who are interested in exploring Mumbai’s colonial past."
    },
    {
        name: "Mahim Fort",
        category: "Fort",
        description: "The Mahim Fort is situated in the Mahim area of Mumbai near the Mahim Creek. It was built by the Portuguese in the 16th century and later strengthened by the British to protect the city from sea invasions. The fort has a simple design with stone walls and bastions and is partially in ruins today. It is a historical landmark where visitors can learn about the colonial history of Mumbai and enjoy views of the creek and surrounding areas."
    },
    {
        name: "Castella de Aguada",
        category: "Fort",
        description: "Castella de Aguada also known as the Bandra Fort is located in Bandra Mumbai overlooking the Arabian Sea. It was built by the Portuguese in 1640 as a watchtower and supply point for ships. The fort offers spectacular views of the sea and the Bandra-Worli Sea Link. Today it is a popular tourist spot for photography sightseeing and enjoying sunsets while exploring Mumbai’s colonial heritage."
    },
    {
        name: "Bandra Fort",
        category: "Fort",
        description: "The Bandra Fort is located near the Bandstand area of Mumbai and is a small yet historic fort built by the Portuguese in the 17th century. It was constructed to defend the city and monitor incoming ships. The fort overlooks the Arabian Sea and provides scenic views of the coastline and Bandra-Worli Sea Link. It is a popular site for tourists and locals who enjoy history walks and photography."
    },
    {
        name: "Bombay Castle",
        category: "Fort",
        description: "Bombay Castle is located in the Fort area of South Mumbai and was built by the British East India Company in the 17th century. It was the original fortified settlement in Bombay and played a key role in defending the city against invasions. The fort has stone walls bastions and historical gates. It is an important heritage site representing the colonial history of Mumbai and attracts history enthusiasts and tourists."
    },
    {
        name: "Kanheri Caves",
        category: "Pagoda/Buddhist-Vihara", // 'Heritage Site' चा बदल 'Pagoda/Buddhist-Vihara' 
        description: "The Kanheri Caves are located inside the Sanjay Gandhi National Park in Borivali Mumbai. They are a complex of rock-cut Buddhist caves that date from the 1st century BCE to the 10th century CE. The caves include viharas chaityas and intricate carvings depicting Buddhist teachings. They were used as monasteries and meditation halls by Buddhist monks. The caves provide historical insights into ancient Indian architecture religion and art and are a peaceful retreat within the city."
    },
    {
        name: "Jogeshwari Caves",
        category: "Heritage Site",
        description: "The Jogeshwari Caves are located in the Jogeshwari area of Mumbai and are considered one of the earliest Hindu cave temples in India. They are believed to have been built in the 6th century and are dedicated to Goddess Jogeshwari. The caves contain large rock-cut sculptures of deities and intricate carvings. They provide historical evidence of early Hindu architectural style and attract both devotees and tourists interested in ancient Indian heritage."
    },
    {
        name: "Mahakali Caves",
        category: "Pagoda/Buddhist-Vihara", // 'Heritage Site' चा बदल 'Pagoda/Buddhist-Vihara'
        description: "The Mahakali Caves are situated in the Andheri region of Mumbai and date back to the 1st century BCE. These are Buddhist rock-cut caves that include viharas and chaityas with simple yet elegant carvings. The caves were used by monks for meditation and residential purposes. They are an important historical and archaeological site that reflects the Buddhist influence in ancient Mumbai."
    },
    {
        name: "Mandapeshwar Caves",
        category: "Heritage Site",
        description: "The Mandapeshwar Caves are located in Borivali Mumbai and are rock-cut Hindu caves believed to be built in the 8th century. The caves are dedicated to Lord Shiva and contain carved pillars sculptures and shrines. They were used by ascetics for meditation and religious practices. The caves are a significant historical landmark and attract visitors interested in ancient architecture and spirituality."
    },
    {
        name: "Marine Drive",
        category: "Natural", // 'Natural Site' चा बदल 'Natural'
        description: "Marine Drive is a famous seafront promenade in South Mumbai stretching along the Arabian Sea. It is also known as the Queen’s Necklace because its street lights resemble a string of pearls at night. The promenade is popular for evening walks jogging and watching the sunset. It attracts both locals and tourists who enjoy the view of the sea and the city skyline. Marine Drive is also surrounded by iconic Art Deco buildings which make it an architectural and natural landmark in Mumbai."
    },
    {
        name: "Juhu Beach",
        category: "Natural", // 'Natural Site' चा बदल 'Natural'
        description: "Juhu Beach is one of the most famous beaches in Mumbai located in the western suburbs. It is popular for evening outings street food local snacks and family gatherings. Tourists enjoy walking along the sandy shore watching the sunset and experiencing the vibrant atmosphere. The beach is also known for various festivals and events held throughout the year. People visit the beach to relax play games and enjoy the lively culture of Mumbai."
    },
    {
        name: "Girgaon Chowpatty",
        category: "Natural", // 'Natural Site' चा बदल 'Natural'
        description: "Girgaon Chowpatty is a famous urban beach in South Mumbai known for its cultural events and the Ganesh Visarjan festival. People gather here during Ganesh Chaturthi to immerse idols in the sea. It is a lively spot with food stalls and entertainment and attracts both locals and tourists who want to experience Mumbai’s cultural vibrancy. The beach also offers scenic views of the Arabian Sea and sunset."
    },
    {
        name: "Sanjay Gandhi National Park",
        category: "Natural", // 'Natural Site' चा बदल 'Natural'
        description: "Sanjay Gandhi National Park is located in Borivali Mumbai and is a large protected area of forest within the city limits. The park is home to a variety of flora and fauna and offers trekking boating and nature walks. It also contains the Kanheri Caves which are ancient rock-cut Buddhist caves. The park provides a peaceful retreat from the busy city and is a popular destination for nature lovers and students."
    },
    {
        name: "Hanging Gardens",
        category: "Natural", // 'Natural Site' चा बदल 'Natural'
        description: "The Hanging Gardens also called Pherozeshah Mehta Gardens are located on Malabar Hill Mumbai. They are terraced gardens built in the style of a Japanese garden. The gardens offer beautiful views of the city and the Arabian Sea. They have well-maintained lawns flowering plants and hedges shaped like animals. The gardens are a peaceful place for morning walks evening relaxation and family outings."
    },
    {
        name: "Powai Lake",
        category: "Natural", // 'Natural Site' चा बदल 'Natural'
        description: "Powai Lake is an artificial freshwater lake situated in the Powai area of Mumbai. It is surrounded by lush greenery and hills which provide a scenic and tranquil environment. The lake is a popular spot for picnics photography and birdwatching. Powai Lake attracts both tourists and locals who enjoy spending time close to nature within the city."
    },
    {
        name: "Global Pagoda",
        category: "Pagoda/Buddhist-Vihara", // 'Natural Site' चा बदल 'Pagoda/Buddhist-Vihara' 
        description: "The Global Pagoda is located at Gorai Mumbai and is a modern Buddhist monument surrounded by natural greenery. It is inspired by the Great Stupa of Sanchi and designed to be the largest meditation hall in the world without any supporting pillars inside. The serene surroundings and landscaped gardens make it a unique spiritual and natural attraction for visitors and meditation enthusiasts."
    },
    {
        name: "Haji Ali Dargah",
        category: "mosque", // Mosques/Churches/Dargahs (Non-Hindu/Jain/Buddhist) साठी 'Others'
        description: "The Haji Ali Dargah is located on an islet off the coast of Worli Mumbai and is a famous Islamic shrine dedicated to Saint Haji Ali. It was built in 1431 and is visited by people of all faiths. The dargah can be reached by a narrow causeway during low tide. Its white marble structure and dome are visible from a distance and make it a prominent landmark. It is considered a place of faith hope and miracles and is one of the most visited religious sites in Mumbai."
    },
    {
        name: "Jama Masjid",
        category: "mosque", // Mosques/Churches/Dargahs (Non-Hindu/Jain/Buddhist) साठी 'Others'
        description: "The Jama Masjid is located in the Kalbadevi area of Mumbai and is one of the largest mosques in the city. It was built in the 18th century and serves as a place of daily prayers and community gatherings for Muslims. The mosque has a spacious courtyard multiple domes and minarets. It is a significant religious and cultural landmark attracting both devotees and tourists interested in Islamic architecture."
    },
    {
        name: "Mount Mary Basilica",
        category: "church", // Mosques/Churches/Dargahs (Non-Hindu/Jain/Buddhist) साठी 'Others'
        description: "The Mount Mary Basilica is situated in Bandra Mumbai and is a Roman Catholic church dedicated to the Virgin Mary. It was built in the eighteenth century and is famous for its beautiful Gothic architecture. Every year the Bandra Fair is held near the basilica and attracts thousands of devotees and tourists. The church is visited by people seeking blessings and is considered a symbol of faith harmony and spirituality in Mumbai."
    },
    {
        name: "St. Thomas Cathedral",
        category: "church", // Mosques/Churches/Dargahs (Non-Hindu/Jain/Buddhist) साठी 'Others'
        description: "St. Thomas Cathedral is located in Fort Mumbai and is one of the oldest churches in the city. It was built in the early eighteenth century by the British East India Company and serves as a place of worship for the Anglican community. The church has elegant colonial architecture with stained-glass windows and high ceilings. It is an important historical and religious landmark in Mumbai attracting tourists and worshippers alike."
    },
    {
        name: "Shree Satya Sai Baba Pagoda",
        category: "Pagoda/Buddhist-Vihara",
        description: "The Shree Satya Sai Baba Pagoda is located in Andheri Mumbai and serves as a spiritual center for meditation and worship. The pagoda has beautiful architecture and serene surroundings which attract devotees and tourists alike. Regular spiritual sessions and cultural events are organized here to promote peace and devotion. It is considered a peaceful place for reflection and spiritual learning in Mumbai."
    },
    {
        name: "Vipassana Pagoda",
        category: "Pagoda/Buddhist-Vihara",
        description: "The Vipassana Pagoda is situated at Gorai Mumbai and is a meditation hall dedicated to Vipassana practice. It is inspired by the Shwedagon Pagoda of Myanmar and built to promote peace and mindfulness. The pagoda is surrounded by lush greenery and tranquil surroundings. It attracts meditation enthusiasts tourists and spiritual seekers from across India and abroad. It is one of the most prominent Buddhist spiritual sites in Mumbai."
    },
    {
        name: "Godiji Parshwanath Temple",
        category: "Jain Temple", // 'Worship Sites' चा बदल 'Jain Temple'
        description: "The Godiji Parshwanath Temple is located in Byculla Mumbai and is one of the oldest and most prominent Jain temples in the city. It is dedicated to Lord Parshwanath the 23rd Tirthankar in Jainism. The temple has beautiful carvings and marble idols and hosts regular prayers and festivals such as Mahavir Jayanti. It is visited by devotees from Mumbai and nearby regions for worship meditation and spiritual activities."
    },
    {
        name: "Babu Amichand Panalal Adishwarji Jain Temple",
        category: "Jain Temple", // 'Worship Sites' चा बदल 'Jain Temple'
        description: "The Babu Amichand Panalal Adishwarji Jain Temple is situated in Walkeshwar Mumbai and is famous for its elaborate architecture and serene environment. It is dedicated to Lord Adishwarji and attracts devotees for daily prayers and special Jain festivals. The temple has detailed marble work and a peaceful prayer hall. It is an important spiritual and cultural landmark for the Jain community in Mumbai."
    },
    {
        name: "Shree Satyapir Jain Temple",
        category: "Jain Temple", // 'Worship Sites' चा बदल 'Jain Temple'
        description: "The Shree Satyapir Jain Temple is located in Malad Mumbai and serves as a spiritual center for the Jain community. It is dedicated to Lord Mahavir and other Tirthankaras. The temple hosts religious ceremonies meditation sessions and community gatherings. It is visited by devotees seeking blessings and spiritual learning and is known for its peaceful surroundings and cultural significance."
    },
    ],
    'Pune': [
    
    {
        name: "Dagdusheth Halwai Ganapati Temple",
        category: "Hindu Temple",
        description: "A renowned Ganesh temple in Pune, established in 1893, attracting thousands of devotees annually."
    },
    {
        name: "BAPS Shri Swaminarayan Mandir",
        category: "Hindu Temple",
        description: "A grand temple in Ambegaon, known for its intricate carvings and spiritual ambiance."
    },
    {
        name: "ISKCON NVCC Temple",
        category: "Hindu Temple",
        description: "A serene temple in Kondhwa dedicated to Lord Krishna, offering spiritual programs and vegetarian cuisine."
    },
    {
        name: "Parvati Hill Temple",
        category: "Hindu Temple",
        description: "An ancient temple atop Parvati Hill, providing panoramic views of Pune city."
    },
    {
        name: "Omkareshwar Temple",
        category: "Hindu Temple",
        description: "A historic Shiva temple located near the confluence of the Mutha and Mula rivers."
    },
    {
        name: "Chand Tara Masjid",
        category: "Mosque",
        description: "The largest mosque in Pune, serving as the city headquarters for the Tablighi Jamaat."
    },
    {
        name: "Kamar Ali Darvesh Dargah",
        category: "Mosque",
        description: "A revered shrine in Pune, attracting devotees seeking blessings and spiritual solace."
    },
    {
        name: "Makka Masjid",
        category: "Mosque",
        description: "A prominent mosque in Pune known for its architectural beauty and peaceful environment."
    },
    {
        name: "Aundh Masjid",
        category: "Mosque",
        description: "A mosque located in the Aundh area, serving the local Muslim community."
    },
    {
        name: "Babajan Dargah",
        category: "Mosque",
        description: "The resting place of the revered Sufi saint Hazrat Babajan, attracting pilgrims from various regions."
    },
    {
        name: "St. Patrick's Cathedral",
        category: "Church",
        description: "A historic cathedral in Ghorpadi, known for its Gothic architecture and serene ambiance."
    },
    {
        name: "St. Xavier's Church",
        category: "Church",
        description: "A prominent church in Camp, offering spiritual services and community activities."
    },
    {
        name: "St. Ignatius Church",
        category: "Church",
        description: "A Catholic church in Pune, known for its educational institutions and charitable works."
    },
    {
        name: "St. Mary's Church",
        category: "Church",
        description: "An Anglican church in Camp, offering traditional services and community outreach."
    },
    {
        name: "Christ The King Church",
        category: "Church",
        description: "A church in Sainikwadi, known for its vibrant congregation and youth programs."
    },
    {
        name: "Shree Sambhavnath Jain Mandir",
        category: "Jain Temple",
        description: "A revered Jain temple in Akurdi, dedicated to Lord Sambhavnath."
    },
    {
        name: "Shree Vasupujya Jain Shwetambar Trust",
        category: "Jain Temple",
        description: "A Jain temple in Akurdi, known for its spiritual teachings and community services."
    },
    {
        name: "Nakoda Jain Bhavan",
        category: "Jain Temple",
        description: "A prominent Jain temple in Pune, dedicated to Lord Nakoda."
    },
    {
        name: "Shree Vimalnath Swami Jain Mandir",
        category: "Jain Temple",
        description: "A Jain temple in Balaji Nagar, known for its serene environment and spiritual significance."
    },
    {
        name: "Shree Sheetalnath Shwetambar Jain Derasar",
        category: "Jain Temple",
        description: "A Jain temple in Balaji Nagar, dedicated to Lord Sheetalnath."
    },
    {
        name: "Suleman (Kapichit) Buddhist Caves",
        category: "Pagoda/Buddhist-Vihara",
        description: "Ancient Buddhist caves near Pune, known for their historical significance and rock-cut architecture."
    },
    {
        name: "Mahakassap Mahavihar",
        category: "Pagoda/Buddhist-Vihara",
        description: "A Buddhist monastery in Pune, dedicated to the teachings of Mahakassapa."
    },
    {
        name: "Buddha Vihar",
        category: "Pagoda/Buddhist-Vihara",
        description: "A Buddhist temple in Pune, offering meditation sessions and spiritual teachings."
    },
    {
        name: "Takshshila Bauddha Vihar",
        category: "Pagoda/Buddhist-Vihara",
        description: "A Buddhist temple in Chinchwad, known for its peaceful ambiance and community activities."
    },
    {
        name: "Dhammankur Buddha Vihar",
        category: "Pagoda/Buddhist-Vihara",
        description: "A Buddhist temple in Pune, dedicated to the practice of Vipassana meditation."
    },
    {
        name: "Moreshwar Temple, Moregaon",
        category: "Hindu Temple",
        description: "Moreshwar Temple located in Moregaon Pune district is one of the Ashtavinayak temples dedicated to Lord Ganesha. The temple is believed to fulfill devotees’ wishes and is visited by thousands every year. The idol here is considered self-manifested and is worshipped as a remover of obstacles. The temple complex has a main hall, a sanctum with the idol, and beautifully decorated entrances. Festivals such as Ganesh Chaturthi and special aartis attract large crowds. The temple is situated in a serene area surrounded by greenery which enhances the spiritual experience for pilgrims."
    },
    {
        name: "Siddhivinayak Temple, Siddhatek",
        category: "Hindu Temple",
        description: "Siddhivinayak Temple in Siddhatek Pune district is an ancient Ashtavinayak shrine dedicated to Lord Ganesha. Devotees visit here seeking success and removal of obstacles. The temple is located on the banks of the Bhima River and features an idol of Ganesha facing east. Its architecture is traditional with intricate carvings and a peaceful courtyard for devotees. Special celebrations during Ganesh Chaturthi and other festivals make the temple a hub of cultural and spiritual activities. Many pilgrims believe visiting this temple grants spiritual wisdom and prosperity."
    },
    {
        name: "Ballaleshwar Temple, Pali",
        category: "Hindu Temple",
        description: "Ballaleshwar Temple situated in Pali Pune district is famous for its idol of Lord Ganesha worshipped by devotees. It is associated with the legend of a young devotee Ballal whose unwavering faith pleased Lord Ganesha. The temple has a main sanctum, beautifully carved pillars, and traditional architecture reflecting Maharashtra’s heritage. Festivals and special poojas are held throughout the year, drawing large gatherings. The serene surroundings and historical importance make it a major pilgrimage site in the Ashtavinayak circuit."
    },
    {
        name: "Varadavinayak Temple, Mahad",
        category: "Hindu Temple",
        description: "Varadavinayak Temple in Mahad Pune district is dedicated to Lord Ganesha known as the giver of boons. The temple is set amidst lush greenery and is known for its calm and peaceful environment. Devotees believe that praying here grants them wishes and spiritual blessings. The temple structure is traditional with a sanctum housing the idol, intricately decorated entrance, and a courtyard for devotees. Special festivals like Ganesh Chaturthi see large gatherings and celebrations, making it a vibrant spiritual center."
    },
    {
        name: "Chintamani Temple, Theur",
        category: "Hindu Temple",
        description: "Chintamani Temple in Theur Pune district is an Ashtavinayak temple devoted to Lord Ganesha. Pilgrims believe visiting this temple removes their worries and brings peace of mind. The temple has a sanctum with the idol of Ganesha, beautifully decorated halls, and traditional architectural elements. Festivals, special aartis, and devotional singing attract large numbers of devotees. Its location provides a tranquil spiritual environment that enhances meditation and prayer. The temple is a significant part of the Ashtavinayak pilgrimage and Maharashtra’s religious heritage."
    },

    {
        name: "Alandi Sant Dnyaneshwar Temple",
        category: "Hindu Temple",
        description: "Alandi is a famous pilgrimage town in Pune district known for the samadhi of Sant Dnyaneshwar, one of the most revered Marathi saints and poet-saints of the Bhakti movement. The temple and samadhi attract thousands of devotees throughout the year, especially during Ashadhi Ekadashi, when grand processions and fairs are held. The temple complex is serene with a main shrine, small surrounding shrines, and a peaceful garden. Pilgrims come here to seek spiritual guidance, participate in devotional kirtans, and experience the deep sense of devotion and tranquility that the site offers. Alandi is not only a spiritual hub but also a cultural landmark representing Maharashtra’s rich religious heritage."
    },
    {
        name: "Dehu Sant Tukaram Temple",
        category: "Hindu Temple",
        description: "Dehu is a town in Pune district famous for the temple dedicated to Sant Tukaram, the 17th-century Marathi saint and poet known for his abhangas (devotional songs) in praise of Lord Vitthal. The temple houses the samadhi of Sant Tukaram and serves as a center for religious and cultural gatherings. Devotees visit to participate in daily prayers, kirtans, and annual festivals such as Tukaram Jayanti. The temple complex includes beautifully maintained gardens and halls for devotional activities. Dehu is considered a spiritual and cultural landmark, reflecting the Bhakti tradition and the legacy of Sant Tukaram in Maharashtra."
    },
    {
        name: "Jejuri Khandoba Temple",
        category: "Hindu Temple",
        description: "Jejuri is a prominent pilgrimage site in Pune district known for the Khandoba Temple dedicated to Lord Khandoba, a regional form of Lord Shiva. The temple is situated on a hill, offering panoramic views of the surrounding countryside. It is famous for the vibrant festival of Bhandara, where turmeric is thrown in celebration, attracting thousands of devotees. The temple has a sanctum with the idol of Lord Khandoba, traditional architecture, and several smaller shrines within the complex. Devotees visit Jejuri seeking blessings for prosperity, courage, and protection. The site holds great religious, cultural, and historical significance in Maharashtra."
    },

    {
        name: "Sinhagad Fort",
        category: "Fort",
        description: "Sinhagad Fort located approximately 30 km southwest of Pune city is one of the most historically significant forts in the Maratha empire. It was famously captured by Tanaji Malusare in 1670, who sacrificed his life in the battle. The fort sits on a hilltop overlooking the surrounding valleys and features several bastions, gates, and water reservoirs that display Maratha military architecture. Visitors can trek through well-marked paths surrounded by lush greenery, explore the ancient structures, and enjoy panoramic views of the Sahyadri ranges. Sinhagad also hosts cultural and historical events and is a popular destination for trekking enthusiasts, history lovers, and photographers who come for the sunrise and sunset views."
    },
    {
        name: "Rajgad Fort",
        category: "Fort",
        description: "Rajgad Fort located near Velhe approximately 60 km southwest of Pune served as the capital of the Maratha Empire for 27 years. Situated on a hill at an elevation of around 4,000 feet, the fort has a commanding view of the surrounding Sahyadri mountains. Rajgad features strong fortifications, multiple gates, ancient structures, caves, and water tanks. It is known for its strategic importance in Maratha history and was the residence of Chhatrapati Shivaji Maharaj during his early reign. Visitors can trek through challenging paths, explore historical ruins, and enjoy the spectacular landscapes surrounding the fort."
    },
    {
        name: "Torna Fort (Prachandagad)",
        category: "Fort",
        description: "Torna Fort located near Velhe approximately 55 km southwest of Pune is historically important as it was the first fort captured by Chhatrapati Shivaji Maharaj at the age of 16, marking the beginning of his conquests. The fort sits on a steep hill with challenging terrain and ancient cave structures. Torna features bastions, gates, temples, and water reservoirs that reflect the strategic planning of Maratha forts. Trekkers and history enthusiasts visit Torna for adventure, breathtaking sunrise views, and to explore its panoramic landscapes. The fort offers a glimpse into Shivaji Maharaj's early military genius and the fortification style of the era."
    },
    {
        name: "Purandar Fort",
        category: "Fort",
        description: "Purandar Fort located approximately 40 km southeast of Pune is a historically significant fort known as the birthplace of Sambhaji Maharaj, son of Chhatrapati Shivaji Maharaj. Situated on a hilltop, it has strong defensive walls, multiple gates, temples, and large water reservoirs. The fort played a key role in Maratha military strategy and witnessed several historical battles. Visitors can trek to the fort, explore the ruins, and enjoy panoramic views of surrounding hills and valleys. Purandar is a major site for history enthusiasts, photographers, and trekking groups due to its historical, architectural, and natural significance."
    },
    {
        name: "Lohagad Fort",
        category: "Fort",
        description: "Lohagad Fort located near Malavli approximately 52 km northwest of Pune sits on a hilltop and was captured by Chhatrapati Shivaji Maharaj in 1648. The fort is known for its distinctive 'Vinchu Kata' or Scorpion Tail structure, strong bastions, gates, and ancient water cisterns. Lohagad is accessible via a relatively easy trekking path, making it popular among beginners and families. Visitors explore the fort’s historical architecture, enjoy panoramic views of the valleys, and learn about Maratha military planning. The surrounding greenery and scenic landscapes add to its trekking and heritage appeal."
    },
    {
        name: "Visapur Fort",
        category: "Fort",
        description: "Visapur Fort located adjacent to Lohagad near Malavli was built during 1713–1720 CE by Balaji Vishwanath, the first Peshwa of the Maratha Empire. The fort sits atop a hill and features massive stone walls, bastions, water cisterns, and ruined structures. It offers panoramic views of the Western Ghats and surrounding valleys. Trekkers enjoy moderate climbing routes through dense forests while exploring the historical remnants of the fort. Visapur Fort is significant for understanding Peshwa-era fortification, architecture, and Maratha history, making it both a trekking and educational destination."
    },
    {
        name: "Tikona Fort",
        category: "Fort",
        description: "Tikona Fort located near Kamshet approximately 35 km northwest of Pune is a triangular-shaped hill fort with moderate trekking difficulty. The fort features ancient temples, water tanks, bastions, and several gates. Tikona offers panoramic views of Pawna Lake, surrounding valleys, and the Sahyadri mountains. The fort is historically significant for Maratha military strategy and was used as a lookout post due to its elevated location. Visitors come for trekking, photography, history exploration, and enjoying the scenic landscapes and adventurous climbs."
    },
    {
        name: "Rohida Fort (Vichitragad)",
        category: "Fort",
        description: "Rohida Fort located near Bhor approximately 50 km southwest of Pune is strategically positioned to monitor routes between Pune and the Konkan region. The hilltop fort features gates, bastions, temples, water tanks, and old structures. Visitors can trek through moderate paths, explore historical ruins, and enjoy panoramic views of the Sahyadri mountains. Rohida Fort holds immense Maratha historical value and provides insights into ancient defense strategies and hill fort architecture."
    },
    {
        name: "Shivneri Fort",
        category: "Fort",
        description: "Shivneri Fort located near Junnar approximately 90 km north of Pune is renowned as the birthplace of Chhatrapati Shivaji Maharaj. The hilltop fort has historical structures, bastions, gates, temples, and water reservoirs. Easy to moderate trekking paths allow visitors to explore the fort, see the statue of Jijabai, and enjoy panoramic views of the surrounding landscape. Shivneri Fort is an important cultural and heritage site providing insight into Shivaji Maharaj’s early life and the strategic planning of Maratha forts."
    },
    {
        name: "Rajmachi Fort",
        category: "Fort",
        description: "Rajmachi Fort located near Lonavala consists of two hill forts: Shrivardhan and Manaranjan. The fort complex features gates, bastions, temples, and water reservoirs. Trekking to Rajmachi involves moderate trails through lush greenery and scenic landscapes. Visitors enjoy panoramic views, explore historical structures, and learn about Maratha military strategy. Rajmachi Fort is a popular destination for trekkers, history enthusiasts, and nature lovers due to its cultural and natural significance."
    },

    {
        name: "Aga Khan Palace",
        category: "Heritage Site",
        description: "Aga Khan Palace located in Pune city is one of the most significant historical monuments in India. Built in 1892 by Sultan Muhammed Shah Aga Khan III, it served as a prison for Mahatma Gandhi, his wife Kasturba Gandhi, and his secretary during the Quit India Movement in 1942. The palace is surrounded by spacious gardens and has large halls, intricate arches, and beautifully maintained interiors. Visitors can explore the rooms, museum exhibits, and memorials of Kasturba and Mahatma Gandhi. The palace symbolizes India’s struggle for independence and is a prominent cultural and heritage site."
    },
    {
        name: "Shaniwar Wada",
        category: "Heritage Site",
        description: "Shaniwar Wada located in Pune city was built in 1732 as the seat of the Peshwas of the Maratha Empire. The fortification complex includes massive walls, gates, watchtowers, gardens, and a palace courtyard. Historically, it witnessed battles, intrigues, and the administration of the Maratha rulers. Visitors can explore the ruins, gates, and gardens while learning about Maratha history and architecture. Shaniwar Wada is also famous for its evening light and sound show depicting Maratha heritage."
    },
    {
        name: "Pataleshwar Cave Temple",
        category: "Heritage Site",
        description: "Pataleshwar Cave Temple located in Pune city is an 8th-century rock-cut cave dedicated to Lord Shiva. Carved out of basalt rock, the temple features a main sanctum with a Shiva Linga, pillars, and a courtyard. Visitors can explore the temple complex, appreciate ancient architecture, and learn about historical rock-cut temple design. The temple is a calm spiritual site as well as a historical landmark reflecting early medieval Indian architecture."
    },
    {
        name: "Raja Dinkar Kelkar Museum",
        category: "Heritage Site",
        description: "Raja Dinkar Kelkar Museum located in Pune city houses a rich collection of artifacts, sculptures, and everyday objects from 18th and 19th-century India. The museum displays paintings, musical instruments, jewelry, textiles, and weapons collected by Dr. Dinkar Kelkar. Visitors can explore more than 20,000 objects showcasing cultural and artistic heritage. The museum provides insights into historical lifestyles, craftsmanship, and the rich cultural legacy of Pune and Maharashtra."
    },
    {
        name: "Vishrambaug Wada",
        category: "Heritage Site",
        description: "Vishrambaug Wada located in Pune city is a historical mansion built in the early 19th century by Peshwa Baji Rao II. The Wada has intricate wooden carvings, spacious courtyards, and large halls that reflect traditional Maratha architecture. Visitors can explore the mansion, learn about the Peshwa era lifestyle, and admire the artistic detailing. The Wada is an important cultural and historical site offering a glimpse into the aristocratic life of Pune during Maratha rule."
    },
    {
        name: "Bund Garden",
        category: "Others", // Historical, but fits best under 'Others' as a non-religious attraction/park
        description: "Bund Garden located near the Mula-Mutha River in Pune was built during the British colonial period. The garden features well-maintained lawns, walking paths, fountains, and scenic views of the river. It served as a recreational site for the British officials and is now popular among locals and tourists for walking, picnics, and leisure. The garden is historically significant as an example of British landscaping and urban planning in Pune."
    },
    {
        name: "Parvati Hill Temple Complex",
        category: "Hindu Temple", // Main feature is the temple complex
        description: "Parvati Hill Temple Complex located in Pune city is a hilltop complex consisting of several temples, including the main Parvati Temple dedicated to Lord Parvati. The hill has 103 steps leading to the temples and offers panoramic views of Pune city. The complex also houses a museum and historical structures that date back to the Peshwa era. Visitors climb the hill for spiritual purposes, historical exploration, and to enjoy the scenic vistas of Pune."
    },
    {
        name: "Raja Bhai Clock Tower",
        category: "Heritage Site",
        description: "Raja Bhai Clock Tower located in Pune city is a prominent landmark and historical monument built during the British period. The tower features colonial architectural style with a large clock face and decorative details. It has been an important timekeeping and landmark structure in Pune for over a century. Visitors admire the architecture, historical significance, and the central location of the tower in the city."
    },

    {
        name: "Pataleshwar Cave Temple",
        category: "Heritage Site",
        description: "Pataleshwar Cave Temple located in Pune city is an 8th-century rock-cut temple dedicated to Lord Shiva. Carved entirely out of a single basalt rock, the cave features a main sanctum housing a Shiva Linga, surrounded by intricately carved pillars, niches, and a spacious courtyard. The temple reflects early medieval Indian rock-cut architectural style and provides insights into religious practices of the period. Visitors can admire the detailed carvings, ancient inscriptions, and the serene ambiance of the site while exploring its historical significance. Pataleshwar Temple is an important heritage site for history enthusiasts, devotees, and architecture lovers visiting Pune."
    },
    {
        name: "Bhaje Caves",
        category: "Pagoda/Buddhist-Vihara",
        description: "Bhaje Caves located near Lonavala in Pune district are a group of 22 rock-cut Buddhist caves dating back to the 2nd century BCE. The caves include stupas, chaityas, viharas, and intricately carved pillars, showcasing the early Buddhist architectural style. The site provides insight into the monastic life and spiritual practices of ancient Buddhist communities in the region. Visitors trek through scenic paths surrounded by lush greenery to reach the caves, explore the historic carvings, and learn about their religious and cultural importance. Bhaje Caves also serve as a testament to the engineering skills and artistic craftsmanship of the era."
    },
    {
        name: "Karla Caves",
        category: "Pagoda/Buddhist-Vihara",
        description: "Karla Caves located near Lonavala in Pune district are a prominent example of rock-cut Buddhist architecture dating back to the 2nd century BCE. The complex includes a large chaitya hall with intricately carved columns, viharas for monks, stupas, and ornamental gateways. The caves reflect the advanced architectural and artistic skills of the period and played a significant role in religious and cultural activities. Visitors trek to the site, explore the elaborate carvings, learn about the history of Buddhism in the region, and enjoy panoramic views of the surrounding Western Ghats. Karla Caves are a major destination for history enthusiasts, researchers, and trekkers alike."
    },
    {
        name: "Bedse Caves",
        category: "Pagoda/Buddhist-Vihara",
        description: "Bedse Caves located near Pune district are a group of Buddhist rock-cut caves believed to date back to the 1st century BCE. The caves include chaityas, viharas, and finely carved gateways that highlight the early Buddhist architectural style. The site is surrounded by lush greenery and offers a serene environment for visitors. Exploration of Bedse Caves provides insight into monastic life, religious rituals, and artistic skills of the period. Visitors enjoy trekking to the caves, studying the inscriptions and carvings, and appreciating the historical significance of this heritage site."
    },
    {
        name: "Vetalwadi Caves",
        category: "Pagoda/Buddhist-Vihara",
        description: "Vetalwadi Caves located near Lonavala in Pune district are a small but historically significant group of Buddhist rock-cut caves carved from basalt rock. The caves feature viharas and chaityas with simple yet meaningful architectural elements. The site provides a glimpse into early Buddhist settlements and monastic practices in the region. Visitors trek to the caves through scenic landscapes, explore the stone structures, and enjoy the panoramic views of surrounding hills. Vetalwadi Caves are a notable heritage site for those interested in ancient architecture, religious history, and natural beauty."
    },

    {
        name: "Pandavgad Caves",
        category: "Pagoda/Buddhist-Vihara", // Assuming these caves are Buddhist-related, common for this region's ancient caves
        description: "Pandavgad Caves located near Pune district are a group of ancient rock-cut caves attributed to Buddhist monks dating back to around the 2nd century BCE. The caves include chaityas, viharas, and water cisterns carved into basalt rock, reflecting early Indian rock-cut architecture. The site is surrounded by dense forest and hilly terrain, offering a scenic trekking experience. Visitors explore the caves to admire the ancient carvings, understand the monastic lifestyle of the era, and enjoy panoramic views of the Western Ghats. The caves are historically significant for their inscriptions and architectural features."
    },
    {
        name: "Kothaligad (Peth) Caves",
        category: "Pagoda/Buddhist-Vihara", // Assuming these caves are Buddhist-related
        description: "Kothaligad Caves located near Lonavala in Pune district are small rock-cut caves situated at the base of Kothaligad Fort. Believed to have been used by Buddhist monks, the caves feature simple viharas and water cisterns. The site offers insight into early religious practices and monastic life in the region. Visitors usually trek to the caves along scenic trails, explore the stone structures, and enjoy views of surrounding hills and valleys. The caves are an important heritage site highlighting early rock-cut architecture."
    },
    {
        name: "Peth Fort Caves",
        category: "Heritage Site", // Keeping as Heritage Site since they are associated with a Fort and storage/practical use
        description: "Peth Fort Caves located in Pune district are rock-cut structures associated with the fort complex. The caves were historically used for storage and possibly religious purposes by the local inhabitants. They feature stone-cut chambers, niches, and water storage areas. Visitors trekking to Peth Fort can explore the caves, understand their practical use in fort life, and enjoy scenic views of the surrounding Sahyadri hills. The caves represent local historical and architectural heritage of Pune district."
    },
    {
        name: "Khandala Caves",
        category: "Pagoda/Buddhist-Vihara",
        description: "Khandala Caves located near Khandala in Pune district are a set of rock-cut Buddhist caves dating back to the 1st and 2nd centuries BCE. The caves include chaityas, viharas, and carved pillars, showcasing the craftsmanship of early Buddhist architects. Visitors can trek to the caves through lush greenery, study the stone carvings, and learn about Buddhist monastic traditions and lifestyle. The caves provide both historical knowledge and scenic trekking experiences in the Western Ghats."
    },
    {
        name: "Junnar Caves",
        category: "Pagoda/Buddhist-Vihara",
        description: "Junnar Caves located near Junnar in Pune district are a large group of Buddhist rock-cut caves dating from the 2nd century BCE to the 2nd century CE. The caves feature viharas, chaityas, stupas, and intricately carved pillars. The site was an important center for Buddhist learning and spiritual practice. Visitors trek through hilly terrain to explore the caves, admire architectural details, and study inscriptions detailing historical, cultural, and religious practices. The Junnar Caves are a significant heritage site in Pune district reflecting early Buddhist architecture and culture."
    },

    {
        name: "Sinhagad Fort Hill Surroundings",
        category: "Natural",
        description: "The hills surrounding Sinhagad Fort located approximately 30 km southwest of Pune are known for their lush greenery, rugged terrain, and panoramic views of the Sahyadri ranges. These natural landscapes provide scenic trekking routes, especially during the monsoon season when waterfalls and streams add to the beauty. Visitors enjoy trekking, photography, and bird watching while experiencing the natural splendor that complements the historical significance of Sinhagad Fort."
    },
    {
        name: "Pawna Lake",
        category: "Natural",
        description: "Pawna Lake located near Lonavala in Pune district is an artificial lake surrounded by hills, offering serene waters and stunning landscapes. Popular for camping, trekking, and picnics, the lake attracts locals and tourists alike. Visitors enjoy activities like boating, photography, and witnessing spectacular sunsets over the water, making it a favorite natural getaway from Pune city."
    },
    {
        name: "Mulshi Lake and Dam",
        category: "Natural",
        description: "Mulshi Lake located approximately 40 km west of Pune is a reservoir formed by Mulshi Dam on the Mula River. Surrounded by hills and greenery, the lake is known for its serene environment, boating opportunities, and picturesque views. Visitors explore the nearby forested areas, enjoy trekking trails, and capture the scenic beauty during monsoon when the water levels rise and the landscape turns lush and vibrant."
    },
    {
        name: "Lavasa City Hills",
        category: "Natural",
        description: "Lavasa City located near Pune is an artificial yet naturally scenic city built amidst the Sahyadri hills. The area features rolling hills, river valleys, and landscaped surroundings. Visitors enjoy trekking, cycling, nature walks, and lakeside activities while taking in the greenery and panoramic views. Lavasa offers a blend of natural beauty and planned urban environment, making it a popular weekend getaway from Pune."
    },
    {
        name: "Bhushi Dam",
        category: "Natural",
        description: "Bhushi Dam located near Lonavala in Pune district is a popular monsoon destination with water flowing over stepped rocks and surrounded by hills. The dam area attracts tourists for picnics, trekking, and enjoying the scenic beauty. Visitors can experience the natural waterfalls, lush greenery, and recreational activities such as photography, swimming in shallow areas, and enjoying local food stalls during the peak season."
    },
    {
        name: "Khadakwasla Dam",
        category: "Natural",
        description: "Khadakwasla Dam located approximately 20 km southwest of Pune city is a popular lake and dam surrounded by rolling hills and open landscapes. The site is ideal for picnics, boating, and nature walks. Visitors enjoy the sunset views, bird watching, and the tranquil environment. The area is historically important as it supplies water to Pune, and it has become a natural recreational spot for locals and tourists."
    },
    {
        name: "Lonavala and Khandala Hills",
        category: "Natural",
        description: "Lonavala and Khandala located about 65 km northwest of Pune are famous hill stations in the Sahyadri ranges. They feature lush green valleys, waterfalls, caves, and trekking trails. Visitors enjoy sightseeing, monsoon treks, photography, and exploring natural formations such as Tiger’s Leap, Duke’s Nose, and various waterfalls. The region is a major natural retreat for nature lovers, adventure seekers, and photographers."
    },
    {
        name: "Rajmachi Hills",
        category: "Natural",
        description: "Rajmachi Hills located near Lonavala in Pune district offer scenic trekking trails, dense forests, and panoramic views of the surrounding Western Ghats. The hills are part of the Rajmachi Fort complex and are rich in flora and fauna. Visitors trek through challenging routes, enjoy camping, explore waterfalls, and experience the serene natural environment. The hills provide an ideal combination of adventure, historical exploration, and nature immersion."
    },
    {
        name: "Tamhini Ghat",
        category: "Natural",
        description: "Tamhini Ghat located approximately 50 km from Pune connects Pune and Konkan and is famous for its lush greenery, waterfalls, and misty hills. The area is particularly popular during monsoon for trekking, nature walks, and sightseeing. Visitors enjoy the flowing streams, scenic viewpoints, and the vibrant flora and fauna. Tamhini Ghat is a must-visit natural retreat for adventure lovers and photographers seeking serene landscapes."
    },
    {
        name: "Bhimashankar Wildlife Sanctuary",
        category: "Natural",
        description: "Bhimashankar Wildlife Sanctuary located in Pune district is a protected area in the Western Ghats and home to diverse flora and fauna, including the Indian giant squirrel and a variety of bird species. The sanctuary features dense forests, rivers, waterfalls, and trekking trails. Visitors come for wildlife spotting, trekking, bird watching, and enjoying the pristine natural environment. Bhimashankar is also a significant ecological zone and a source of natural heritage for Pune and Maharashtra."
    }
],

    
 'Chhatrapati Sambhajinagar': [
       
    
    {
        name: "Grishneshwar Temple",
        category: "Hindu Temple",
        description: "Grishneshwar Temple located near Ellora Caves in Aurangabad district is one of the twelve Jyotirlinga shrines dedicated to Lord Shiva. The temple features traditional Maratha-style architecture with a sanctum housing the Shiva Linga, intricately carved pillars, and beautifully decorated halls. Visitors come to perform rituals, participate in festivals, and explore the temple complex. Grishneshwar Temple is historically and religiously significant, attracting pilgrims and tourists from across Maharashtra and India."
    },
    {
        name: "Lakshyavinayak Temple",
        category: "Hindu Temple",
        description: "Lakshyavinayak Temple located near Ellora is dedicated to Lord Ganesha. The temple features a sanctum, halls for devotees, and traditional Maratha-style architecture. Visitors come to offer prayers, perform rituals, and attend Ganesh festivals. The temple is an important spiritual site in Sambhajinagar district."
    },
    {
        name: "Bhadra Maruti Mandir",
        category: "Hindu Temple",
        description: "Bhadra Maruti Mandir located in Khultabad area is dedicated to Lord Hanuman. The temple features a sanctum, traditional architecture, and space for devotees to perform rituals. Visitors participate in Hanuman Jayanti celebrations, perform daily prayers, and admire the temple's cultural significance."
    },
    {
        name: "Girija Devi Temple",
        category: "Hindu Temple",
        description: "Girija Devi Temple located in Mahishmal area is dedicated to Goddess Girija. The temple features a sanctum, decorated halls, and carved pillars. Visitors come to perform rituals, attend festivals, and explore the temple’s cultural and spiritual significance."
    },
    {
        name: "Dakshayani Devi Temple",
        category: "Hindu Temple",
        description: "Dakshayani Devi Temple located in Lasur area is dedicated to Goddess Dakshayani. The temple features a sanctum, traditional architecture, and space for devotees. Visitors perform prayers, rituals, and participate in religious festivals. The temple is an important spiritual landmark in Aurangabad district."
    },
    {
        name: "Kaygaon Toke Temples",
        category: "Hindu Temple",
        description: "Kaygaon Toke Temples located in Kaygaon area are a cluster of temples dedicated to various Hindu deities. The temples feature traditional architecture with sanctums and decorated halls. Visitors perform rituals, attend festivals, and explore the cultural heritage of the area."
    },
    {
        name: "Shri Ganesh Mandir (Panchakki Area)",
        category: "Hindu Temple",
        description: "Shri Ganesh Mandir located in Panchakki area of Aurangabad city is dedicated to Lord Ganesha. The temple features traditional Maratha-style architecture with a sanctum housing the idol and decorated halls. Visitors offer prayers, perform rituals, and participate in Ganesh festivals, making it a culturally significant site."
    },
    {
        name: "Siddhivinayak Temple",
        category: "Hindu Temple",
        description: "Siddhivinayak Temple located in Aurangabad city is dedicated to Lord Ganesha. The temple features a sanctum, decorated halls, and traditional architecture. Visitors come to perform rituals, seek blessings, and participate in Ganesh Chaturthi celebrations. The temple is an important spiritual center in Sambhajinagar district."
    },
    {
        name: "Bhawani Mata Mandir",
        category: "Hindu Temple",
        description: "Bhawani Mata Mandir located in Aurangabad district is dedicated to Goddess Bhawani. The temple features a sanctum, traditional architecture, and halls for devotees to perform rituals. Visitors come to offer prayers, celebrate festivals, and explore the temple’s spiritual significance."
    },
    {
        name: "Khandoba Temple",
        category: "Hindu Temple",
        description: "Khandoba Temple located in Aurangabad district is dedicated to Lord Khandoba, a popular regional deity. The temple features a sanctum, decorated halls, and traditional architecture. Visitors perform religious ceremonies, attend festivals, and learn about local spiritual practices. The temple is culturally and historically significant in Sambhajinagar district."
    },
    {
        name: "Jagdishwar Temple",
        category: "Hindu Temple",
        description: "Jagdishwar Temple located in Aurangabad city is dedicated to Lord Shiva. The temple features a sanctum with a Shiva Linga, intricately carved pillars, and a courtyard. Visitors perform rituals, participate in Mahashivratri celebrations, and admire the temple’s architectural beauty. It is an important spiritual and heritage site in the district."
    },
    {
        name: "Keshavdeva Mandir",
        category: "Hindu Temple",
        description: "Keshavdeva Mandir located in Aurangabad city is dedicated to Lord Krishna. The temple features intricate carvings, a sanctum, and decorated halls. Visitors perform rituals, participate in Janmashtami celebrations, and explore the temple complex. The temple holds religious and cultural significance in Sambhajinagar district."
    },
    {
        name: "Hanuman Mandir (Chikhalthana)",
        category: "Hindu Temple",
        description: "Hanuman Mandir located in Chikhalthana area of Aurangabad city is dedicated to Lord Hanuman. The temple features a sanctum, decorated halls, and traditional architecture. Visitors come to offer prayers, especially on Tuesdays and Saturdays, and participate in religious ceremonies. The temple is an important spiritual site in Sambhajinagar district."
    },
    {
        name: "Shri Sant Tukaram Maharaj Mandir",
        category: "Hindu Temple",
        description: "Shri Sant Tukaram Maharaj Mandir located in Aurangabad city is dedicated to the saint Tukaram. The temple features a sanctum, assembly hall, and decorated premises. Devotees visit for spiritual discourses, prayers, and religious events. The temple preserves the legacy of Tukaram Maharaj and is culturally significant in the district."
    },
    {
        name: "Shri Ram Mandir",
        category: "Hindu Temple",
        description: "Shri Ram Mandir located in Aurangabad city is dedicated to Lord Rama. The temple features a sanctum, decorated halls, and traditional architecture. Visitors perform daily prayers, celebrate festivals like Ram Navami, and explore the temple premises. It is an important religious and cultural landmark in Sambhajinagar district."
    },
    {
        name: "Shani Mandir",
        category: "Hindu Temple",
        description: "Shani Mandir located in Aurangabad city is dedicated to Lord Shani. The temple features a sanctum, decorative pillars, and a courtyard for rituals. Visitors offer prayers, perform rituals, and celebrate special occasions. The temple is a significant spiritual site for local residents and pilgrims."
    },
    {
        name: "Vithoba Temple",
        category: "Hindu Temple",
        description: "Vithoba Temple located in Aurangabad city is dedicated to Lord Vithoba. The temple features a sanctum, decorated halls, and traditional Maratha-style architecture. Visitors participate in religious ceremonies, especially during Ashadi Ekadashi, and explore the temple premises. The temple is an important spiritual and cultural center in Sambhajinagar district."
    },
    
    {
        name: "Bibi Ka Maqbara Mosque Area",
        category: "mosque", // Non-Hindu/Jain/Buddhist worship site
        description: "Bibi Ka Maqbara Mosque located in Aurangabad city is part of the famous Bibi Ka Maqbara complex, built by Azam Shah in memory of his mother. The mosque features Mughal-style architecture with domes, arches, minarets, and beautifully carved marble work. Visitors come to offer prayers, admire the architecture, and learn about Mughal history. The mosque is an important spiritual and historical site in Sambhajinagar district."
    },
    {
        name: "Jama Masjid Aurangabad",
        category: "Mosque", // Non-Hindu/Jain/Buddhist worship site
        description: "Jama Masjid located in Aurangabad city is one of the oldest mosques in the district, built during the Mughal era. The mosque features a large courtyard, elegant arches, domes, and minarets with intricate carvings. Devotees visit to offer prayers, especially during Jummah, and participate in festivals such as Eid. The mosque holds historical, architectural, and spiritual significance in Sambhajinagar district."
    },
    {
        name: "Quila Mosque",
        category: "Mosque", // Non-Hindu/Jain/Buddhist worship site
        description: "Quila Mosque located near Aurangabad fort is a historical mosque featuring traditional Islamic architecture with arches, domes, and minarets. The mosque is visited by devotees for daily prayers and during Islamic festivals. It is also admired for its historical significance and proximity to the Aurangabad fort. The mosque provides a peaceful spiritual environment and reflects the Islamic heritage of the district."
    },
    {
        name: "Ganj-e-Shah Mosque",
        category: "Mosque", // Non-Hindu/Jain/Buddhist worship site
        description: "Ganj-e-Shah Mosque located in Aurangabad city is a Mughal-era mosque known for its intricate architecture, large courtyard, and decorative minarets. Devotees perform prayers and participate in community religious events. The mosque also attracts tourists interested in history and Islamic architecture. It is a significant spiritual and cultural site in Sambhajinagar district."
    },
    {
        name: "Mecca Masjid",
        category: "Mosque", // Non-Hindu/Jain/Buddhist worship site
        description: "Mecca Masjid located in Aurangabad city is a prominent mosque built in traditional Mughal style with a large prayer hall, domes, and minarets. Devotees visit for regular prayers, Jummah prayers, and Eid celebrations. The mosque is historically significant and reflects the Islamic cultural heritage of Sambhajinagar district. Its architecture and serene surroundings make it an important spiritual landmark."
    },
    
    {
        name: "Shantinath Jain Temple",
        category: "Jain Temple",
        description: "Shantinath Jain Temple located in the heart of Aurangabad city near the old city area is dedicated to Lord Shantinath, the 16th Tirthankara of Jainism. The temple features intricate marble carvings, a sanctum with the idol of Lord Shantinath, and beautifully decorated halls for devotees. Visitors perform rituals, offer prayers, and participate in festivals such as Paryushan and Mahavir Jayanti. The temple is a peaceful spiritual center and preserves the cultural and religious heritage of the Jain community in Sambhajinagar district."
    },
    {
        name: "Kundalpur Jain Temple",
        category: "Jain Temple",
        description: "Kundalpur Jain Temple located in the outskirts of Aurangabad district near the village of Kundalpur is a significant pilgrimage site for Jains. The temple complex features traditional Jain architectural elements, including marble idols, carved pillars, and decorated halls. Devotees visit to perform rituals, meditate, and celebrate Jain festivals. The temple is culturally and spiritually important, reflecting the religious traditions of the local Jain community."
    },
    {
        name: "Parshvanath Jain Mandir",
        category: "Jain Temple",
        description: "Parshvanath Jain Mandir located in Aurangabad city near the Panchakki area is dedicated to Lord Parshvanath, the 23rd Tirthankara. The temple features a sanctum with the idol, intricately carved pillars, and halls for devotees. Visitors perform daily rituals, participate in Mahavir Jayanti celebrations, and engage in spiritual learning. The temple serves as an important center for Jain religious and cultural activities in Sambhajinagar district."
    },
    {
        name: "Adinath Jain Temple",
        category: "Jain Temple",
        description: "Adinath Jain Temple located near the Ellora Caves in Aurangabad district is dedicated to Lord Adinath, the first Tirthankara of Jainism. The temple features a sanctum, marble carvings, traditional architecture, and halls for religious gatherings. Devotees perform rituals, offer prayers, meditate, and celebrate Jain festivals. The temple is historically and spiritually significant and represents the Jain community's religious heritage in Sambhajinagar district."
    },
    {
        name: "Mahavir Jain Temple",
        category: "Jain Temple",
        description: "Mahavir Jain Temple located in Aurangabad city near the CIDCO area is dedicated to Lord Mahavir, the 24th Tirthankara. The temple features a sanctum with the idol of Mahavir, decorated halls, and carved pillars. Visitors perform rituals, offer prayers, and participate in important festivals such as Mahavir Jayanti and Paryushan. The temple is a significant spiritual and cultural center for Jains in Sambhajinagar district."
    },


    {
        name: "Global Vipassana Pagoda",
        category: "Pagoda/Buddhist-Vihara",
        description: "Global Vipassana Pagoda located near Gorai village in Aurangabad district is a monumental structure built to commemorate the teachings of Lord Buddha and promote Vipassana meditation. The pagoda features a large central dome, intricate stone carvings, meditation halls, and a serene environment for spiritual practice. Visitors participate in meditation courses, attend spiritual talks, and explore the architecture which is inspired by traditional Burmese pagodas. It is a major cultural, spiritual, and tourist attraction in Sambhajinagar district."
    },
    {
        name: "Dhamma Giri Meditation Centre",
        category: "Pagoda/Buddhist-Vihara",
        description: "Dhamma Giri Meditation Centre located in Igatpuri near Aurangabad district is one of the most renowned centers for Vipassana meditation. The center features large meditation halls, traditional architecture, and serene surroundings conducive to spiritual practice. Visitors and practitioners come to learn Vipassana meditation, participate in 10-day courses, and experience the teachings of Lord Buddha. The center plays a pivotal role in promoting Buddhist teachings in Sambhajinagar district."
    },
    {
        name: "Buddha Vihar",
        category: "Pagoda/Buddhist-Vihara",
        description: "Buddha Vihar located in Aurangabad city near the Himayat Bagh area is a prominent Buddhist worship site featuring statues of Lord Buddha, meditation halls, and peaceful gardens. Devotees and visitors come for prayers, meditation, and spiritual learning. The Vihar also organizes cultural programs and festivals related to Buddha Purnima. It serves as a key spiritual and cultural center for Buddhists in Sambhajinagar district."
    },
    {
        name: "Shanti Stupa",
        category: "Pagoda/Buddhist-Vihara",
        description: "Shanti Stupa located on a hilltop near Aurangabad city is a serene Buddhist monument dedicated to peace and Lord Buddha. The stupa features traditional Buddhist architectural design, a large white dome, and surrounding meditation spaces. Visitors climb the hill, perform rituals, meditate, and enjoy panoramic views of the city. The Shanti Stupa is a symbol of spiritual harmony and cultural heritage in Sambhajinagar district."
    },
    {
        name: "Satya Sai Pagoda",
        category: "Pagoda/Buddhist-Vihara",
        description: "Satya Sai Pagoda located in Aurangabad district near the central city area is a small but significant Buddhist worship site. It features a sanctum with Buddha statues, meditation halls, and traditional pagoda architecture. Visitors participate in meditation sessions, offer prayers, and celebrate Buddhist festivals. The pagoda provides a tranquil environment for spiritual learning and reflection in Sambhajinagar district."
    },

    {
        name: "St. Francis Church",
        category: "Church", // Non-Hindu/Jain/Buddhist worship site
        description: "St. Francis Church located in the heart of Aurangabad city near the CIDCO area is one of the oldest churches in the district. The church features Gothic-style architecture with tall spires, stained glass windows, and a large prayer hall. Devotees and visitors attend regular mass, participate in Christmas and Easter celebrations, and engage in community activities. The church holds cultural and spiritual significance and serves as a key center for the Christian community in Sambhajinagar district."
    },
    {
        name: "Holy Trinity Church",
        category: "Church", // Non-Hindu/Jain/Buddhist worship site
        description: "Holy Trinity Church located in Aurangabad city near the Panchakki area is known for its serene environment and beautiful architecture. The church features a sanctum, stained glass panels, high ceilings, and a large assembly hall for prayers and religious gatherings. Visitors participate in Sunday services, Christmas programs, and other religious events. The church is a prominent spiritual and cultural landmark in Sambhajinagar district."
    },
    {
        name: "St. John the Baptist Church",
        category: "Church", // Non-Hindu/Jain/Buddhist worship site
        description: "St. John the Baptist Church located in Aurangabad city near the Aurangpura locality is dedicated to St. John the Baptist. The church showcases traditional European-style architecture with carved altars, stained glass windows, and spacious prayer halls. Devotees attend regular prayers, special feast days, and Christmas and Easter celebrations. The church is culturally significant and serves as a center for Christian religious and social activities in Sambhajinagar district."
    },
    {
        name: "Our Lady of Fatima Church",
        category: "Church", // Non-Hindu/Jain/Buddhist worship site
        description: "Our Lady of Fatima Church located in Aurangabad city near the Garkheda area is dedicated to the Virgin Mary. The church features a sanctum with an idol of Our Lady of Fatima, stained glass windows, and a spacious hall for prayers and gatherings. Devotees visit for daily prayers, participate in religious ceremonies, and celebrate festivals like Christmas and Marian feasts. The church is an important spiritual and cultural site in Sambhajinagar district."
    },
    {
        name: "St. Joseph's Church",
        category: "Church", // Non-Hindu/Jain/Buddhist worship site
        description: "St. Joseph's Church located in Aurangabad city near the central market area is a historic church dedicated to St. Joseph. The church features traditional European-style architecture, stained glass windows, and a large prayer hall. Devotees and visitors attend mass, participate in Christmas and Easter events, and engage in community programs. The church is culturally significant and a key spiritual center for Christians in Sambhajinagar district."
    },


    {
        name: "Devgiri Fort",
        category: "Fort",
        description: "Devgiri Fort also known as Daulatabad Fort is located near Daulatabad village in Aurangabad district. This massive hill fort was built in the 12th century and later strengthened by the Yadavas and Mughals. It features a complex of fortified walls, bastions, moats, and gates designed for strategic defense. Visitors explore its ramparts, ancient structures, and enjoy panoramic views of the surrounding region. The fort is historically significant for its military architecture and cultural heritage in Sambhajinagar district."
    },
 
    {
        name: "Antur Fort",
        category: "Fort",
        description: "Antur Fort located near Antur village in Aurangabad district is a hill fort known for its strategic location and historic importance. The fort features stone walls, watchtowers, and a fortified entrance. Visitors can explore the ruins, ancient water tanks, and scenic landscapes around the fort. Antur Fort represents the rich history and architectural ingenuity of medieval Maharashtra and is a cultural landmark in Sambhajinagar district."
    },
    {
        name: "Vetalwadi Fort",
        category: "Fort",
        description: "Vetalwadi Fort situated near Vetalwadi village in Aurangabad district is a hill fort built for military defense during medieval times. The fort features fortified walls, bastions, and ancient structures. Visitors enjoy trekking to the fort, exploring its ruins, and observing the natural surroundings. The fort is historically important and reflects the regional architectural and strategic heritage of Sambhajinagar district."
    },
    {
        name: "Pedka Fort",
        category: "Fort",
        description: "Pedka Fort located near Pedka village in Aurangabad district is an ancient fort built on a hilltop. It features stone fortifications, watchtowers, and a fortified entrance. Visitors can explore the fort’s ruins, ancient water cisterns, and enjoy panoramic views of the surrounding landscape. Pedka Fort holds historical significance for its military architecture and heritage in Sambhajinagar district."
    },
    {
        name: "Lohgad Fort",
        category: "Fort",
        description: "Lohgad Fort located near Aurangabad city in Sambhajinagar district is a hill fort with historical importance. The fort features fortified walls, bastions, gates, and ancient structures. Visitors explore its ruins, ancient water storage systems, and enjoy trekking opportunities. Lohgad Fort reflects the military strategies and architectural skills of medieval rulers and is an important cultural landmark in the district."
    },
    {
        name: "Bhangshi Fort",
        category: "Fort",
        description: "Bhangshi Fort situated near Bhangshi village in Aurangabad district is a historic fort built for regional defense. It features fortified walls, bastions, gates, and watchtowers. Visitors can explore its ruins, ancient water tanks, and enjoy the natural landscape around the fort. Bhangshi Fort is historically significant and showcases the strategic architecture of medieval Maharashtra in Sambhajinagar district."
    },

    
    {
        name: "Ajanta Caves",
        category: "Pagoda/Buddhist-Vihara", // Primary historical and religious classification for Buddhist caves
        description: "Ajanta Caves located near Fardapur village in Aurangabad district are a UNESCO World Heritage Site famous for ancient Buddhist rock-cut architecture and murals. The caves feature monasteries, prayer halls, intricate sculptures, and paintings depicting the life of Lord Buddha. Visitors explore the caves, study the art, and understand the Buddhist heritage. Ajanta Caves are a key cultural and historical landmark in Sambhajinagar district."
    },
    {
        name: "Ellora Caves",
        category: "Heritage Site", // Keeping as Heritage Site due to the mix of Buddhist, Hindu, and Jain temples
        description: "Ellora Caves located near Ellora village in Aurangabad district are a UNESCO World Heritage Site featuring Buddhist, Hindu, and Jain rock-cut temples. The caves include monasteries, prayer halls, carved pillars, and iconic sculptures such as the Kailasa Temple. Visitors explore the caves, learn about the diverse religious history, and admire the architectural brilliance. Ellora Caves are an important cultural, historical, and spiritual site in Sambhajinagar district."
    },
    {
        name: "Pittalkhora Caves",
        category: "Pagoda/Buddhist-Vihara",
        description: "Pittalkhora Caves located near Nanded road in Aurangabad district are ancient Buddhist rock-cut caves. The caves feature carved prayer halls, monasteries, and intricate sculptures. Visitors explore the caves to understand early Buddhist architecture and heritage. Pittalkhora Caves are a significant historical and archaeological site in Sambhajinagar district."
    },
    {
        name: "Aurangabad Caves",
        category: "Pagoda/Buddhist-Vihara",
        description: "Aurangabad Caves located on a hill near Aurangabad city in Sambhajinagar district are Buddhist rock-cut caves. The caves feature monasteries, prayer halls, statues of Buddha, and intricate carvings. Visitors explore the caves for spiritual reflection, cultural learning, and understanding ancient Buddhist architecture. Aurangabad Caves are an important historical and religious site in the district."
    },
    {
        name: "Ghatotkach Caves",
        category: "Pagoda/Buddhist-Vihara",
        description: "Ghatotkach Caves located near Bhangshi area in Aurangabad district are ancient Buddhist rock-cut caves featuring monasteries, carved pillars, and prayer halls. Visitors study the art, architecture, and religious significance. The caves provide insights into early Buddhist culture and heritage in Sambhajinagar district."
    },

    // Monuments
    {
        name: "Bibi Ka Maqbara",
        category: "Heritage Site",
        description: "Bibi Ka Maqbara located in Aurangabad city is a famous Mughal-era monument built by Azam Shah in memory of his mother. The structure resembles the Taj Mahal with marble work, domes, and a garden complex. Visitors admire the architecture, take tours, and learn about Mughal history. It is an iconic historical and cultural landmark in Sambhajinagar district."
    },
    {
        name: "52 Gates of Aurangabad",
        category: "Heritage Site",
        description: "The 52 Gates of Aurangabad spread across Aurangabad city are historic gateways built during the Mughal and Nizam era. Each gate features distinct architectural styles and inscriptions. Visitors explore the gates, learn about their history, and understand the strategic urban planning of ancient Aurangabad. These gates are culturally and historically significant in Sambhajinagar district."
    },
    {
        name: "Soneri Mahal",
        category: "Heritage Site",
        description: "Soneri Mahal located in Aurangabad city is a historic palace known for its ornate architecture, golden facade, and intricate carvings. Visitors admire the interiors, gardens, and learn about the royal history. Soneri Mahal is an important cultural and historical monument in Sambhajinagar district."
    },
    {
        name: "Khultabad Maqbaras and Monuments",
        category: "Heritage Site",
        description: "Khultabad Maqbaras located in Khultabad area of Aurangabad district are Islamic tombs and monuments, including the tomb of Aurangzeb. The monuments feature domes, arches, and intricate Mughal architecture. Visitors explore the site for historical learning, cultural understanding, and architectural appreciation. These monuments are a key historical and cultural landmark in Sambhajinagar district."
    },
    {
        name: "Shidarth Udyan",
        category: "Others", // Classified as a park/garden, which fits better under 'Others' or could be 'Natural', but keeping consistent with "Bund Garden" as "Others" if the main purpose is recreational.
        description: "Shidarth Udyan located in Aurangabad city is a historical garden with monuments, statues, and walking paths. The garden reflects Mughal and regional architecture. Visitors enjoy the landscape, study cultural artifacts, and explore historical structures. It is a popular historical and recreational site in Sambhajinagar district."
    },
    {
        name: "Panchakki",
        category: "Heritage Site",
        description: "Panchakki located near Aurangabad city is a historic water mill complex built during the Mughal period. It features water channels, a grinding system, and associated structures. Visitors explore the complex, learn about ancient engineering, and admire the architecture. Panchakki is a significant historical and cultural site in Sambhajinagar district."
    },
    {
        name: "Mahishmal Tower",
        category: "Heritage Site",
        description: "Mahishmal Tower located on a hill near Aurangabad district is an ancient tower built for observation and defense. The tower features stone construction, staircases, and strategic viewpoints. Visitors climb the tower, explore the surrounding ruins, and enjoy panoramic views. Mahishmal Tower is historically important and reflects the architectural heritage of Sambhajinagar district."
    },
    {
        name: "Chhatrapati Shivaji Maharaj Museum",
        category: "Heritage Site",
        description: "Chhatrapati Shivaji Maharaj Museum located in Aurangabad city showcases historical artifacts, weapons, sculptures, and cultural exhibits related to Maratha history. Visitors explore galleries, learn about Chhatrapati Shivaji Maharaj, and understand the historical and cultural heritage of the region. The museum is a key educational and historical site in Sambhajinagar district."
    },

    {
        name: "Bhadra Maruti Lake",
        category: "Natural",
        description: "Bhadra Maruti Lake located near Khultabad in Aurangabad district is a serene waterbody surrounded by greenery and hills. Visitors come here for nature walks, photography, and bird watching. The lake is also a local spot for relaxation and picnics. It reflects the natural beauty and tranquility of Sambhajinagar district."
    },
    {
        name: "Aurangabad Hills",
        category: "Natural",
        description: "Aurangabad Hills situated on the outskirts of Aurangabad city are a scenic range of hills with rocky terrains and lush vegetation. Visitors explore the hills for trekking, sightseeing, and photography. The hills are home to diverse flora and fauna and provide panoramic views of the district. They are an important natural landmark in Sambhajinagar district."
    },
    {
        name: "Grishneshwar Surroundings",
        category: "Natural",
        description: "The area surrounding Grishneshwar Temple near Ellora in Aurangabad district features natural landscapes, small hills, and peaceful surroundings. Visitors enjoy the scenic beauty, take nature walks, and combine spiritual visits with nature exploration. It is a significant natural site in Sambhajinagar district."
    },
    {
        name: "Ellora Caves Hills",
        category: "Natural",
        description: "The hills around Ellora Caves in Aurangabad district provide natural landscapes, rocky terrain, and greenery. Visitors explore the area for trekking, sightseeing, and photography while visiting the caves. The hills enhance the natural charm and heritage value of Sambhajinagar district."
    },
    {
        name: "Aurangabad Garden Parks",
        category: "Natural", // Classifying parks as Natural sites
        description: "Aurangabad city has several garden parks including Shidarth Udyan and others, which offer green spaces, flowering plants, walking paths, and recreational areas. Visitors enjoy morning walks, family outings, and photography. These parks are important for ecological balance and urban natural beauty in Sambhajinagar district."
    },
    {
        name: "Ajanta Wildlife Sanctuary",
        category: "Natural",
        description: "Ajanta Wildlife Sanctuary located near Fardapur village in Aurangabad district is a protected area known for its rich biodiversity including tigers, leopards, sambars, and various bird species. The sanctuary features dense forests, grasslands, and hilly terrain. Visitors come for wildlife observation, eco-tourism, photography, and trekking. It is an important ecological and conservation area in Sambhajinagar district."
    },
    {
        name: "Paithan Bird Sanctuary",
        category: "Natural",
        description: "Paithan Bird Sanctuary located near Paithan town in Aurangabad district is a haven for migratory and resident birds. The sanctuary features wetlands, ponds, and surrounding greenery. Visitors enjoy bird watching, nature walks, and photography. It plays a key role in avian conservation and maintaining ecological balance in Sambhajinagar district."
    },
    {
        name: "Kailash Wildlife Sanctuary",
        category: "Natural",
        description: "Kailash Wildlife Sanctuary situated near Aurangabad district covers hilly terrain and forested areas. The sanctuary is home to species like leopards, wild boars, and various reptiles and birds. Visitors explore the sanctuary for trekking, wildlife spotting, and eco-tourism. It is a vital ecological site contributing to wildlife conservation in Sambhajinagar district."
    }
],
};
app.get('/api/places', (req, res) => {
    const places = Object.keys(maharashtraHeritageData);
    res.json({ places: places });
});

app.get('/api/sites', (req, res) => {
    const { place, category } = req.query;

    if (!place) {
        return res.status(400).json({ error: 'Place parameter is required.' });
    }

    const sites = maharashtraHeritageData[place] || [];

    let filteredSites = sites;
    if (category && category !== 'all') {
        filteredSites = sites.filter(site => 
            site.category.toLowerCase().includes(category.toLowerCase())
        );
    }
    console.log(`Serving filtered sites for: ${category} in ${place}`);

    res.json({ sites: filteredSites, place: place, category: category });
});


app.get('/api/places', (req, res) => {
    const places = Object.keys(maharashtraHeritageData);
    res.json({ places: places });
});

app.get('/api/sites', (req, res) => {
    const { place, category } = req.query;

    if (!place) {
        return res.status(400).json({ error: 'Place parameter is required.' });
    }

    const sites = maharashtraHeritageData[place] || [];

    let filteredSites = sites;
    if (category && category !== 'all') {
        filteredSites = sites.filter(site => 
            site.category.toLowerCase().includes(category.toLowerCase())
        );
    }
    console.log(`Serving filtered sites for: ${category} in ${place}`);

    res.json({ sites: filteredSites, place: place, category: category });
});


// --- New API Endpoint for Google Search ---

app.get('/api/search', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required.' });
    }

    try {
        // Google Search Tool वापरून माहिती मिळवा
        const searchResults = await google.search({ queries: [`${query} Maharashtra Heritage`] });

        let snippet = 'No detailed information found.';
        let link = '#';

        // पहिल्या निकालाचा स्निपेट आणि URL वापरा
        if (searchResults && searchResults.length > 0) {
            snippet = searchResults[0].snippet;
            link = searchResults[0].url;
        }

        res.json({ 
            query: query, 
            snippet: snippet,
            url: link 
        });

    } catch (error) {
        console.error('External Search API Error:', error);
        res.status(500).json({ error: 'Failed to perform external search.' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Open in browser: http://localhost:${PORT}/`); 
});
