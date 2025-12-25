
import { Track } from '../types';

const csvData = `
track_id,track_name,track_number,track_popularity,explicit,artist_name,artist_popularity,artist_followers,artist_genres,album_id,album_name,album_release_date,album_total_tracks,album_type,track_duration_min
3EJS5LyekDim1Tf5rBFmZl,"Trippy Mane (ft. Project Pat)",4,0,TRUE,Diplo,77,2812821,moombahton,5QRFnGnBeMGePBKF2xTz5z,"d00mscrvll, Vol. 1",2025-10-31,9,album,1.55
1oQW6G2ZiwMuHqlPpP27DB,OMG!,1,0,TRUE,Yelawolf,64,2363438,"country hip hop, southern hip hop",4SUmmwnv0xTjRcLdjczGg2,OMG!,2025-10-31,1,single,3.07
7mdkjzoIYlf1rx9EtBpGmU,"Hard 2 Find",1,4,TRUE,"Riff Raff",48,193302,N/A,3E3zEAL8gUYWaLYB9L7gbp,"Hard 2 Find",2025-10-31,1,single,2.55
67rW0Zl7oB3qEpD5YWWE5w,"Still Get Like That (ft. Project Pat & Starrah)",8,30,TRUE,Diplo,77,2813710,moombahton,5QRFnGnBeMGePBKF2xTz5z,"d00mscrvll, Vol. 1",2025-10-31,9,album,1.69
15xptTfRBrjsppW0INUZjf,"ride me like a harley",2,0,TRUE,Rumelis,48,8682,"dark r&b",06FDIpSHYmZAZoyuYtc7kd,"come closer / ride me like a harley",2025-10-30,2,single,2.39
4ccpCcZYseq8VrPMK1EDs0,BLEED,1,2,FALSE,Minzie,46,7218,"dark r&b",2NQv9p3ZQW0Ed1LB9enix8,BLEED,2025-10-30,3,single,2.76
3QoQ3HqXTAjgEl9LbNMbYp,"Te Procuro na Cidade",1,20,FALSE,AZERDK,30,1657,N/A,1PpuOsLjPWshDLxkr0oHeU,"Te Procuro na Cidade",2025-10-30,1,single,4.12
1YEZbdT417SfolPQzaoHs2,"come closer",1,27,FALSE,Rumelis,49,8802,"dark r&b",06FDIpSHYmZAZoyuYtc7kd,"come closer / ride me like a harley",2025-10-30,2,single,2.53
4pZ949nFW5SurwzE0TSe7I,"Cupido Vagabundo",1,16,FALSE,"Toni dos Anjos",6,475,N/A,60DLQZkzpvDvVfvEC6VOJM,"Cupido Vagabundo",2025-10-30,2,single,2.92
0L0LgwFZ7UtBnRNQvSBty6,"LET’S GO!",1,33,TRUE,PsychoYP,48,154802,"nigerian drill, alté, afro adura, afrobeats, afrobeat, afroswing",3ARxksm8CspGeAaZZB1v2w,"LET’S GO!",2025-10-28,1,single,2.4
0NZKfcua68wuZePhjp8N2I,"Root of all Evil",5,65,FALSE,"Daniel Caesar",85,11137714,N/A,115s3YJqm6iLblABdjtgzQ,"Son Of Spergy",2025-10-24,12,album,4.41
22c6Yop5YVEAhw8UG6O1W1,"My Muse",2,67,TRUE,"Leon Thomas",74,735818,N/A,6ph5zbGAudn0EKyw3vXbXM,PHOLKS,2025-10-24,7,single,2.75
2Zq3Trov36G0TtrUt4ZklL,superstar,2,59,TRUE,Artemas,74,1378935,N/A,75FM00r9Lgdi0YHv7vvzzB,LOVERCORE,2025-10-24,14,album,2.82
1NXbNEAcPvY5G1xvfN57aA,Dracula,3,80,TRUE,"Tame Impala",84,9509731,"neo-psychedelic, indie",5WulAOx9ilWy1h8UGZ1gkI,Deadbeat,2025-10-17,12,album,3.42
6gRNWnK8b8BVfzrF65HGcf,"PSYCHWARD (with WesGhost ft. Project Pat)",1,51,TRUE,Diplo,77,2812337,moombahton,5oq9z5XNldcl7wTiEamVvo,PSYCHWARD,2025-10-17,4,single,2.88
0Oriikd4ETp5qmzek6ZUD5,"Talk To You (ft. Elton John)",1,72,TRUE,"Sam Fender",73,1204977,N/A,5tmaU5xBUYQYr2VkWhokIb,"Talk To You (ft. Elton John)",2025-10-17,1,single,5.28
0lRnxwJeUOxwEvWMw4uQKj,"Think About Us",1,68,FALSE,"Sonny Fodera",66,306842,house,1jmVSpWhzD8vciWg2Qtd5V,"Think About Us",2025-10-17,1,single,2.96
2OZVskV28xxJjjhQqKTLSg,"PIXELATED KISSES",1,88,TRUE,Joji,81,10638942,N/A,3FLlai6YTV9IwCU0KolG1w,"PIXELATED KISSES",2025-10-14,1,single,1.84
7Lo6USa0PiDkwSL3SkohSi,Leavin,1,70,TRUE,"Rod Wave",76,9673984,N/A,3vz6TtkNMj2rdOIsJsTA3I,Leavin,2025-10-13,1,single,2.81
3Dy4xsff7c0fRaTJpA54yd,"Gone Gone Gone",1,79,FALSE,"David Guetta",87,27141717,edm,39FHrt5YWp4HY7dHDn8Owz,"Gone Gone Gone",2025-10-10,2,single,3.3
4nds6JYKbzMdpXwuINhSEZ,"Part of Me",1,75,TRUE,"A Boogie Wit da Hoodie",77,8986062,"melodic rap",0UGixmRqK86q9d6T0kAFnv,"Part of Me",2025-10-10,1,single,2.78
1DwscornXpj8fmOmYVlqZt,"Stateside + Zara Larsson",10,74,FALSE,PinkPantheress,78,4761364,"bedroom pop",12Lig9oAX9nvpWHft5cHgF,"Fancy Some More?",2025-10-10,31,album,3.07
2qtQauWqPaGHrmrXbDa35k,Constellations,1,68,FALSE,"Ian Asher",70,223449,N/A,03loS7NR32bzSoH06Z2ESq,Constellations,2025-10-10,1,single,2.73
0l72HGRQkAR0imHxvpLi8a,"Die On This Hill",1,76,FALSE,"SIENNA SPIRO",66,182377,N/A,5pIGU5FZ74YPdUrBdk9lcC,"Die On This Hill",2025-10-10,3,single,3.61
4WFfPxJv1KRekG6mxn837K,"EYES CLOSED (with ZAYN)",1,88,FALSE,JISOO,73,7282227,k-pop,3LOalJiwqPsviLuoNboNfc,"EYES CLOSED (with ZAYN)",2025-10-10,1,single,3.02
31TXxq8gfgYyrYClnYY48m,"The Fate of Ophelia",1,87,FALSE,"Taylor Swift",100,145443567,"country, pop, indie, folk",1W57oNaAkGObOQKBTxg4e9,"The Life of a Showgirl",2025-10-03,12,album,3.76
5eXgqtg3T8Av0m1FUaGHex,"The Life of a Showgirl (feat. Sabrina Carpenter)",12,93,TRUE,"Taylor Swift",100,145489371,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,4.02
62V2ZHslgQV98gH4AuVXnr,"Ruin The Friendship",6,92,FALSE,"Taylor Swift",100,145396321,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,3.67
3yWuTOYDztXjZxdE2cIRUa,Opalite,3,97,FALSE,"Taylor Swift",100,145443567,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,3.92
4qmFC3Jz5aQ0erlk2OSi2X,Honey,11,91,TRUE,"Taylor Swift",100,145489371,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,3.02
2x3mwb96B6TquRqMtbxUE1,"Actually Romantic",7,93,TRUE,"Taylor Swift",100,145396321,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,2.72
1appZ3c336FkPvCuywfmrs,CANCELLED!,10,93,TRUE,"Taylor Swift",100,145396321,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,3.52
2TEQvxxQabwLQMqWMg1qGu,"Wi$h Li$t",8,93,TRUE,"Taylor Swift",100,145396321,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,3.45
5ylJtmaWPJ33cW3En7WOu0,Wood,9,93,TRUE,"Taylor Swift",100,145443567,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,2.5
017erFbOyCrdz0yburnVGZ,"you're a star",1,74,FALSE,"Fred again..",77,2201446,"stutter house, house",3dmu97DsoFpSptXPtJEzCJ,"you're a star",2025-10-03,1,single,3.65
62HoDY1Km6lm47haFpUn9c,"Eldest Daughter",5,92,TRUE,"Taylor Swift",100,145396321,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,4.1
1jgTiNob5cVyXeJ3WgX5bL,"Elizabeth Taylor",2,95,FALSE,"Taylor Swift",100,145489371,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,3.47
03bTIHJElXZ0O0jqOQvAbY,"Father Figure",4,94,TRUE,"Taylor Swift",100,145542136,"country, pop, indie, folk",4a6NzYL1YHRUgx9e3YZI6I,"The Life of a Showgirl",2025-10-03,12,album,3.54
4hFt3Ht6b9OLsesqx51aq1,superstar,1,68,TRUE,Artemas,74,1377042,N/A,2r7vK3RnYfofnAkMruYhSI,superstar,2025-10-01,3,single,2.82
6DYul32gElizGgTrtRYrNY,gigolo,1,77,TRUE,bbno$,78,2730121,N/A,58Xf2l1m7iWhfwoRjx75C0,gigolo,2025-09-30,1,single,1.97
04a44cx2PJthIbN2aLMXhl,"TIT FOR TAT",1,91,TRUE,"Tate McRae",88,9256589,pop,1ks1k7zln4TyBjn1CF3vCz,"TIT FOR TAT",2025-09-26,1,single,2.93
2ZCDXVmOLnKUHYVpycIq5F,"What You Is",1,74,TRUE,"YoungBoy Never Broke Again",84,14936207,N/A,6hGxO3RlfPxP0OuXukj5Ju,"What You Is",2025-09-26,1,single,3.76
709ZIqPHyFOpx2QdjmeWAM,Dracula,1,85,TRUE,"Tame Impala",84,9509731,"neo-psychedelic, indie",2kCjkEVRnLdEV5UOaQSAG4,Dracula,2025-09-26,3,single,3.42
6sGIMrtIzQjdzNndVxe397,"So Easy (To Fall In Love)",5,90,FALSE,"Olivia Dean",88,1499215,"pop soul",0l8zYqoUeBYg47Gmevq9HZ,"The Art of Loving",2025-09-26,12,album,2.81
68APF7rM3bIxKCjqeO1QSZ,ADD,1,68,TRUE,Khantrast,62,394628,"anime rap, anime",2NaTp3h74cDqtrlgDe9b4W,ADD,2025-09-24,1,single,2.62
1n4Y7LSSZ38HgEdpPpivpg,"Post Sex Clarity",8,78,FALSE,"Lola Young",77,1461346,N/A,5jUCvcrzCNng7N3iNVY4ts,"I’m Only F**king Myself",2025-09-19,14,album,4.36
2wn0AYkmcF0Cm7PmvA7hJ7,"Pretty & Petty",13,74,TRUE,"Cardi B",81,25953771,N/A,1LsNb6mVitbLZCxnRsbCDJ,"AM I THE DRAMA?",2025-09-19,23,album,3.05
5q9I5RmmrLC4U2mW2BnF3K,"Safe (feat. Kehlani)",8,75,TRUE,"Cardi B",81,25953771,N/A,1LsNb6mVitbLZCxnRsbCDJ,"AM I THE DRAMA?",2025-09-19,23,album,2.96
7dHblXsJTRemgyIvFNJE7t,Magnet,3,71,TRUE,"Cardi B",81,25957976,N/A,1LsNb6mVitbLZCxnRsbCDJ,"AM I THE DRAMA?",2025-09-19,23,album,2.97
1kO8TSZU0ORR4eJpirLPGW,DEPRESSED,1,69,TRUE,Anne-Marie,75,12848260,N/A,4wdp5hBwGx9AgqUoiCCDUV,DEPRESSED,2025-09-19,1,single,2.3
2cBtsB7Pi89q9yWk59a2sX,ErrTime,16,69,TRUE,"Cardi B",81,25957976,N/A,1LsNb6mVitbLZCxnRsbCDJ,"AM I THE DRAMA?",2025-09-19,23,album,2.44
55lijDD6OAjLFFUHU9tcDm,"WHERE IS MY HUSBAND!",1,92,FALSE,RAYE,81,2853248,N/A,01sqwTOTrN9gaYQc1rr6Zw,"WHERE IS MY HUSBAND!",2025-09-19,1,single,3.27
4zzfmeA6MXiM9O4anGZkq5,"Just Like Heaven - Live From Glastonbury",2,55,FALSE,"Olivia Rodrigo",85,49083617,"pop rock, alternative pop, pop punk",5BBcARy3vgB43n1VZELFno,"Friday I'm In Love / Just Like Heaven - Live From Glastonbury (A BBC Recording)",2025-09-08,2,single,3.92
388JceJm4tGkeHkfPKmr,"Friday I'm In Love - Live From Glastonbury",1,61,FALSE,"Olivia Rodrigo",84,49050008,"pop rock, alternative pop, pop punk",5BBcARy3vgB43n1VZELFno,"Friday I'm In Love / Just Like Heaven - Live From Glastonbury (A BBC Recording)",2025-09-08,2,single,4.11
1mEQbSq0PCNjyL6oMgHKFQ,"LOVE SONG",3,75,FALSE,"Justin Bieber",91,85008100,"pop, contemporary r&b",2KrREEyHxkdFGYAd1DmMdS,"SWAG II",2025-09-05,44,album,2.87
3NFs3XUduzBfvc5Bx1gmzh,"The Dead Dance",1,84,FALSE,"Lady Gaga",88,42237551,"art pop, pop",1KdrtZn2AmuQPHKIr3h4e6,"The Dead Dance",2025-09-03,1,single,3.8
5pobX21I8uZdHM8YOWItU7,"The Dead Dance",9,80,FALSE,"Lady Gaga",89,42275793,"art pop, pop",3ARwSvDQv2OHYnLeDC3Lxi,MAYHEM,2025-09-01,17,album,3.8
0je57Uq5eTk1wrPzn9sWbl,"When Did You Get Hot?",8,91,FALSE,"Sabrina Carpenter",91,26538275,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,2.42
5B3GZOZYXNzWpUXQC42hxZ,"Sugar Talking",4,84,TRUE,"Sabrina Carpenter",91,26559943,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,3.06
42VUCXerQ5qTr4Qp6PhKo4,Tears,2,92,FALSE,"Sabrina Carpenter",91,26538275,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,2.66
6wkYQMrFfb0huLB5Qn19Iv,"We Almost Broke Up Again Last Night",5,82,TRUE,"Sabrina Carpenter",91,26559943,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,3.38
21IVPfi81m6ywNgOvqTj1i,"Don’t Worry I’ll Make You Worry",10,81,TRUE,"Sabrina Carpenter",91,26538275,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,3.7
1qyw5wSUkEvH8DtaCdx7Lg,"Go Go Juice",9,85,TRUE,"Sabrina Carpenter",91,26516295,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,3.22
4tVVmShMF2PYdLqcejrsy2,Goodbye,12,84,TRUE,"Sabrina Carpenter",91,26559943,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,3.75
25jgQBxuUkGDdCG1WGKKN9,"House Tour",11,87,FALSE,"Sabrina Carpenter",91,26538275,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,2.82
2BwO5K8Q7EPAJSGze3AAh9,Manchild,1,88,TRUE,"Sabrina Carpenter",91,26559943,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,3.56
3EMfeKtNK4q4k3sVjwg5Yy,"My Man on Willpower",3,85,TRUE,"Sabrina Carpenter",91,26559943,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,3.29
1PdUyYYw9sGU0yhLrpeHKt,"Never Getting Laid",7,83,TRUE,"Sabrina Carpenter",91,26516295,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,3.47
4SRShYMtFIGgnOU7iBicMH,"Nobody’s Son",6,88,TRUE,"Sabrina Carpenter",91,26538275,pop,1aqg30bNvLSWgShZgX4oop,"Man’s Best Friend",2025-08-29,12,album,3.04
0t1fdMrn7JOg9DDsT95bxt,"we never dated",9,78,FALSE,sombr,85,2795852,N/A,7mvXPtV4jvA1hp5Wx2FAJA,"I Barely Know Her",2025-08-22,10,album,3.28
5Lfdb0KKLWKEns27p20uYt,"i wish i knew how to quit you",3,78,FALSE,sombr,85,2795852,N/A,7mvXPtV4jvA1hp5Wx2FAJA,"I Barely Know Her",2025-08-22,10,album,3.87
7qjZnBKE73H4Oxkopwulqe,"back to friends",4,91,FALSE,sombr,85,2789144,N/A,7mvXPtV4jvA1hp5Wx2FAJA,"I Barely Know Her",2025-08-22,10,album,3.31
1IfGOnXoMBkiKC9xljlSfa,"Jealous Type",1,81,TRUE,"Doja Cat",86,34748949,N/A,5faw0b6BBJiTHGNl9aaoc5,"Jealous Type",2025-08-21,1,single,2.72
5iH81hIpxAYJKrominvxST,"Man I Need",1,95,FALSE,"Olivia Dean",88,1499215,"pop soul",0Bv6OJO0L5gcf20DMww64a,"Man I Need",2025-08-15,3,single,3.06
6yxZxKwf5HzBNlcdKDjvTL,"MEN DONT CRY",12,15,TRUE,"Seven Kay",5,156,N/A,02sCZlBqPGO4OBLdVW1aj6,M.I.A,2025-08-15,14,album,3.88
6Ur4ZVoemg8EI6WT7aHBWk,downtown,1,62,TRUE,"Lil Peep",82,15702014,"emo rap, cloud rap",1oaHlsVVHDlbcxYTtoFB56,downtown,2025-08-15,1,single,2.03
7JnVFO5eZ9Rys19qSDUyMy,goddamn,4,65,TRUE,mgk,78,5643375,N/A,30aIA1FrouOX9kHxP4dEr6,"lost americana",2025-08-08,13,album,3.11
0U1nO2frLx8w2dIsfvlP1d,"Hell At Night (feat. Ella Langley)",1,76,FALSE,BigXthaPlug,79,2059774,"southern hip hop",1Nn0cOJPNZqKJlkq4AgY2V,"Hell At Night (feat. Ella Langley)",2025-08-08,1,single,2.98
5Xnkr4b6swk6BA5IinCIlU,"Holy Water",1,73,FALSE,Marshmello,80,34481381,edm,6DD756fhA5jj74FmDBncgU,"Holy Water",2025-08-08,1,single,2.49
0WsC4ETIXyiHDMXRaPMvKe,"wgft (feat. Burna Boy)",9,78,TRUE,Gunna,85,10342615,"melodic rap",6l2aad6LJghHkbd0KX1f7w,"The Last Wun",2025-08-08,25,album,3.07
46yD4yZk5XdaLWM6WSN8cC,"forever be mine (feat. Wizkid)",1,64,TRUE,Gunna,85,10342615,"melodic rap",7tWxhICLUYrxpalqEqT4kT,"forever be mine (feat. Wizkid)",2025-08-07,1,single,2.88
2SsY5k7UWFqgye3PUMG3Oq,"The Subway",1,87,TRUE,"Chappell Roan",82,7310428,N/A,7GlwcUYHB99l7k13I2Hira,"The Subway",2025-08-01,1,single,4.2
3hBzKgqQKkChH9hyb3MhmT,"I Think I Like You Better When You’re Gone",10,80,TRUE,"Reneé Rapp",72,1261419,N/A,6ULnaZahd0zTGVUBVQO6mN,"BITE ME",2025-08-01,12,album,2.38
44t9rTRjK82lBbZwuePQOE,"Leave Me Alone",1,73,TRUE,"Reneé Rapp",72,1262133,N/A,6ULnaZahd0zTGVUBVQO6mN,"BITE ME",2025-08-01,12,album,2.36
1jTe5liUdnRjbie1luBi6J,"Is It a Crime",1,69,TRUE,"Mariah the Scientist",73,1178436,"alternative r&b",7jafwvgoGHW0JJGxQMgOci,"Is It a Crime",2025-07-31,2,single,3.02
0t3pcqgBjuAVBgY2oEUIlH,"It Depends (feat. Bryson Tiller)",1,79,TRUE,"Chris Brown",87,28327351,r&b,6FA7O8oQl5eReFrDYjkusP,"It Depends (feat. Bryson Tiller)",2025-07-25,1,single,4.53
6tlZIGGXozhQpYyKesjwWL,"Back in the Saddle",1,76,FALSE,"Luke Combs",83,13397845,country,5zx6pJUEcQKKA7k8hBNkUJ,"Back in the Saddle",2025-07-25,1,single,3.55
5FMyXeZ0reYloRTiCkPprT,"Which One (feat. Central Cee)",1,83,TRUE,Drake,95,103067383,rap,4TWJJZmgYm6tE6PzqpluQ0,"Which One",2025-07-25,1,single,2.81
3htoQPC7v5x04gWCQz1y2S,WRONG,2,76,FALSE,"Chris Grey",72,968416,"dark r&b",6mSpxfnTwcvHKJqPFfF6KA,"FUNHOUSE / WRONG",2025-07-25,2,single,2.95
`;

function parseCSV(csv: string): Track[] {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1).map(line => {
    // This is a simplified parser; it doesn't handle commas within quoted fields perfectly.
    // For this specific dataset, it seems to work okay.
    const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
    
    const trackObject: any = {};
    headers.forEach((header, i) => {
      let value: any = values[i] ? values[i].replace(/"/g, '').trim() : '';
      
      if (['track_number', 'track_popularity', 'artist_popularity', 'artist_followers', 'album_total_tracks'].includes(header)) {
        value = parseInt(value, 10) || 0;
      } else if (header === 'track_duration_min') {
        value = parseFloat(value) || 0;
      } else if (header === 'explicit') {
        value = value === 'TRUE';
      } else if (header === 'artist_genres') {
         value = value === 'N/A' ? [] : value.split(',').map((g: string) => g.trim());
      } else if (header === 'album_type') {
         value = ['album', 'single', 'compilation'].includes(value) ? value : 'single';
      }
      
      trackObject[header] = value;
    });
    return trackObject as Track;
  });
}

export const spotifyTracks: Track[] = parseCSV(csvData);


// Data processing for charts

// 1. Bar Chart: Top 10 Artists by Popularity
export const getTopArtistsByPopularity = (limit: number = 10) => {
    const artistData: { [key: string]: { totalPopularity: number; count: number, followers: number } } = {};

    spotifyTracks.forEach(track => {
        if (!artistData[track.artist_name]) {
            artistData[track.artist_name] = { totalPopularity: 0, count: 0, followers: 0 };
        }
        artistData[track.artist_name].totalPopularity += track.artist_popularity;
        artistData[track.artist_name].count += 1;
        artistData[track.artist_name].followers = Math.max(artistData[track.artist_name].followers, track.artist_followers);
    });

    const averagedArtistData = Object.keys(artistData).map(artistName => ({
        name: artistName,
        averagePopularity: artistData[artistName].totalPopularity / artistData[artistName].count,
        followers: artistData[artistName].followers
    }));

    return averagedArtistData.sort((a, b) => b.averagePopularity - a.averagePopularity).slice(0, limit);
};

// 2. Line Chart: Average Track Popularity by Release Year
export const getPopularityByYear = () => {
    const yearData: { [key: string]: { totalPopularity: number; count: number } } = {};
    
    spotifyTracks.forEach(track => {
        const year = new Date(track.album_release_date).getFullYear();
        if (isNaN(year)) return;
        
        if (!yearData[year]) {
            yearData[year] = { totalPopularity: 0, count: 0 };
        }
        yearData[year].totalPopularity += track.track_popularity;
        yearData[year].count += 1;
    });

    return Object.keys(yearData).map(year => ({
        year: parseInt(year),
        averagePopularity: yearData[year].totalPopularity / yearData[year].count
    })).sort((a, b) => a.year - b.year);
};


// 3. Pie Chart: Explicit vs. Non-Explicit
export const getExplicitDistribution = () => {
    const distribution = {
        '露骨': 0,
        '非露骨': 0
    };
    spotifyTracks.forEach(track => {
        if (track.explicit) {
            distribution['露骨'] += 1;
        } else {
            distribution['非露骨'] += 1;
        }
    });

    return [
        { name: '露骨', value: distribution['露骨'] },
        { name: '非露骨', value: distribution['非露骨'] }
    ];
};

// 4. Scatter Plot: Artist Popularity vs Track Popularity
export const getArtistTrackPopularityData = () => {
    return spotifyTracks.map(track => ({
        artistPopularity: track.artist_popularity,
        trackPopularity: track.track_popularity,
        name: track.track_name
    })).filter(d => d.artistPopularity > 0 && d.trackPopularity > 0);
};

// 5. Radar Chart: Genre Comparison
export const getGenreStats = () => {
    const genreCounts: { [key: string]: number } = {};
    spotifyTracks.forEach(track => {
        track.artist_genres.forEach(genre => {
            genreCounts[genre] = (genreCounts[genre] || 0) + 1;
        });
    });

    const topGenres = Object.entries(genreCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([genre]) => genre);

    const genreStats: { [key: string]: { artistPop: number[], trackPop: number[], followers: number[] } } = {};
    topGenres.forEach(g => {
        genreStats[g] = { artistPop: [], trackPop: [], followers: [] };
    });

    spotifyTracks.forEach(track => {
        track.artist_genres.forEach(genre => {
            if (topGenres.includes(genre)) {
                genreStats[genre].artistPop.push(track.artist_popularity);
                genreStats[genre].trackPop.push(track.track_popularity);
                genreStats[genre].followers.push(track.artist_followers);
            }
        });
    });

    const avg = (arr: number[]) => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
    
    const maxArtistPop = Math.max(...spotifyTracks.map(t => t.artist_popularity));
    const maxTrackPop = 100;
    const maxFollowers = Math.max(...spotifyTracks.map(t => t.artist_followers));


    return topGenres.map(genre => ({
        subject: genre,
        A: (avg(genreStats[genre].artistPop) / maxArtistPop) * 100,
        B: (avg(genreStats[genre].trackPop) / maxTrackPop) * 100,
        C: (avg(genreStats[genre].followers) / maxFollowers) * 100,
        fullMark: 100
    }));
};


// 6. Bubble Chart: Followers vs Artist Popularity vs Track Popularity
export const getPopularityBubbleData = () => {
    return spotifyTracks.map(track => ({
        artistPopularity: track.artist_popularity,
        trackPopularity: track.track_popularity,
        followers: track.artist_followers,
        name: track.artist_name,
    })).filter(d => d.artistPopularity > 50 && d.trackPopularity > 50 && d.followers > 1000000);
}
