export default {
    "requestParameters": {
      "mode": "WALK,TRANSIT",
      "fromPlace": "31.9637032,35.8746904",
      "routerId": "default",
      "toPlace": "32.0232583,35.8483421",
      "maxWalkDistance": "2000",
      "cutoffSec": "3600"
    },
    "plan": {
      "date": 1542126797000,
      "from": {
        "name": "Origin",
        "lon": 35.8746904,
        "lat": 31.9637032,
        "orig": "",
        "vertexType": "NORMAL"
      },
      "to": {
        "name": "Destination",
        "lon": 35.8483421,
        "lat": 32.0232583,
        "orig": "",
        "vertexType": "NORMAL"
      },
      "itineraries": [
        {
          "duration": 3129,
          "startTime": 1542126797000,
          "endTime": 1542129926000,
          "walkTime": 506,
          "transitTime": 1721,
          "waitingTime": 902,
          "walkDistance": 637.9910601447594,
          "walkLimitExceeded": false,
          "elevationLost": 0,
          "elevationGained": 0,
          "transfers": 1,
          "legs": [
            {
              "startTime": 1542126797000,
              "endTime": 1542127301000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 635.527,
              "pathway": false,
              "mode": "WALK",
              "route": "",
              "agencyTimeZoneOffset": 7200000,
              "interlineWithPreviousLeg": false,
              "from": {
                "name": "Origin",
                "lon": 35.8746904,
                "lat": 31.9637032,
                "departure": 1542126797000,
                "orig": "",
                "vertexType": "NORMAL"
              },
              "to": {
                "name": "Stop 50",
                "stopId": "2:created_stop_50",
                "lon": 35.879042,
                "lat": 31.961275,
                "arrival": 1542127301000,
                "departure": 1542127902000,
                "stopIndex": 378,
                "stopSequence": 378,
                "vertexType": "TRANSIT"
              },
              "legGeometry": {
                "points": "o{abEyw}yEIuDfC?`@}BFaCz@kA?a@g@oCbDWfAGZONWEiB",
                "length": 13
              },
              "rentedBike": false,
              "transitLeg": false,
              "duration": 504,
              "steps": [
                {
                  "distance": 85.534,
                  "relativeDirection": "DEPART",
                  "streetName": "Dijlah Street",
                  "absoluteDirection": "EAST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.87469809916507,
                  "lat": 31.963602439029543,
                  "elevation": []
                },
                {
                  "distance": 75.302,
                  "relativeDirection": "RIGHT",
                  "streetName": "Odeh Al Shawareb Street",
                  "absoluteDirection": "SOUTH",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.875602900000004,
                  "lat": 31.963652200000002,
                  "elevation": []
                },
                {
                  "distance": 260.765,
                  "relativeDirection": "LEFT",
                  "streetName": "Al Najaf Street",
                  "absoluteDirection": "EAST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.875607900000006,
                  "lat": 31.962975000000004,
                  "elevation": []
                },
                {
                  "distance": 132.464,
                  "relativeDirection": "RIGHT",
                  "streetName": "Sa'd Bin Abi Waqqas Street",
                  "absoluteDirection": "SOUTH",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.8781594,
                  "lat": 31.962666100000003,
                  "elevation": []
                },
                {
                  "distance": 81.462,
                  "relativeDirection": "SLIGHTLY_LEFT",
                  "streetName": "road",
                  "absoluteDirection": "SOUTHEAST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": true,
                  "lon": 35.8783161,
                  "lat": 31.961482300000004,
                  "elevation": []
                }
              ]
            },
            {
              "startTime": 1542127902000,
              "endTime": 1542128548000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 4036.5923191985435,
              "pathway": false,
              "mode": "BUS",
              "route": "Cheetah Bus: North Station--Madaba",
              "agencyName": "Mapping Amman",
              "agencyUrl": "http://www.mappingamman.com/",
              "agencyTimeZoneOffset": 7200000,
              "routeType": 3,
              "routeId": "2:B25",
              "interlineWithPreviousLeg": false,
              "agencyId": "0",
              "tripId": "2:6",
              "serviceDate": "20181113",
              "from": {
                "name": "Stop 50",
                "stopId": "2:created_stop_50",
                "lon": 35.879042,
                "lat": 31.961275,
                "arrival": 1542127301000,
                "departure": 1542127902000,
                "stopIndex": 378,
                "stopSequence": 378,
                "vertexType": "TRANSIT"
              },
              "to": {
                "name": "Stop 379",
                "stopId": "2:created_stop_379",
                "lon": 35.909439,
                "lat": 31.972853,
                "arrival": 1542128548000,
                "departure": 1542128848000,
                "stopIndex": 399,
                "stopSequence": 399,
                "vertexType": "TRANSIT"
              },
              "legGeometry": {
                "points": "}labE_s~yEv@aJdDmIhE_IjDkIpAaJhAaJdAcJfAcJhAaJdAcJiHaBkJiDiL_D{JyDiFwEgJyH}FgHsFmH{FgHmG}GoG{G",
                "length": 22
              },
              "routeShortName": "Cheetah Bus: North Station--Madaba",
              "routeLongName": "باص: مجمع الشمال - مادبا",
              "rentedBike": false,
              "transitLeg": true,
              "duration": 646,
              "steps": []
            },
            {
              "startTime": 1542128848000,
              "endTime": 1542129923000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 8573.265891502433,
              "pathway": false,
              "mode": "BUS",
              "route": "Coaster: Salt--North Station",
              "agencyName": "Mapping Amman",
              "agencyUrl": "http://www.mappingamman.com/",
              "agencyTimeZoneOffset": 7200000,
              "routeType": 3,
              "routeId": "2:C01",
              "interlineWithPreviousLeg": false,
              "agencyId": "0",
              "tripId": "2:7",
              "serviceDate": "20181113",
              "from": {
                "name": "Stop 379",
                "stopId": "2:created_stop_379",
                "lon": 35.909439,
                "lat": 31.972853,
                "arrival": 1542128548000,
                "departure": 1542128848000,
                "stopIndex": 71,
                "stopSequence": 71,
                "vertexType": "TRANSIT"
              },
              "to": {
                "name": "Stop 521",
                "stopId": "2:created_stop_521",
                "lon": 35.848337,
                "lat": 32.023055,
                "arrival": 1542129923000,
                "departure": 1542129924000,
                "stopIndex": 114,
                "stopSequence": 114,
                "vertexType": "TRANSIT"
              },
              "legGeometry": {
                "points": "iucbE}pdzEuGdHoFnHoFlHsFjHkJ|DsKpCiInF}FdHaGbHkG~GkG|GiG~GeG`HqE|HsEzHmE|HkE~HiE`IkE~HiE~HqE|HqEzHkFnH{GzFgOnJ{JvDsKtCsKtCgJlEsH`GcElCwF|F}GpG{FfH{FhHuFjHsFjHkClI{@bJTdJzA~IbB|IdB~I",
                "length": 44
              },
              "routeShortName": "Coaster: Salt--North Station",
              "routeLongName": "كوستر: السلط - مجمع الشمال",
              "rentedBike": false,
              "transitLeg": true,
              "duration": 1075,
              "steps": []
            },
            {
              "startTime": 1542129924000,
              "endTime": 1542129926000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 2.29,
              "pathway": false,
              "mode": "WALK",
              "route": "",
              "agencyTimeZoneOffset": 7200000,
              "interlineWithPreviousLeg": false,
              "from": {
                "name": "Stop 521",
                "stopId": "2:created_stop_521",
                "lon": 35.848337,
                "lat": 32.023055,
                "arrival": 1542129923000,
                "departure": 1542129924000,
                "stopIndex": 114,
                "stopSequence": 114,
                "vertexType": "TRANSIT"
              },
              "to": {
                "name": "Destination",
                "lon": 35.8483421,
                "lat": 32.0232583,
                "arrival": 1542129926000,
                "orig": "",
                "vertexType": "NORMAL"
              },
              "legGeometry": {
                "points": "yombEorxyECB",
                "length": 2
              },
              "rentedBike": false,
              "transitLeg": false,
              "duration": 2,
              "steps": [
                {
                  "distance": 2.29,
                  "relativeDirection": "DEPART",
                  "streetName": "Fa'iq Sweidan Street",
                  "absoluteDirection": "NORTHWEST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.8482421,
                  "lat": 32.023175300000005,
                  "elevation": []
                }
              ]
            }
          ],
          "tooSloped": false
        },
        {
          "duration": 3782,
          "startTime": 1542126797000,
          "endTime": 1542130579000,
          "walkTime": 638,
          "transitTime": 1342,
          "waitingTime": 1802,
          "walkDistance": 810.1045789415093,
          "walkLimitExceeded": false,
          "elevationLost": 0,
          "elevationGained": 0,
          "transfers": 1,
          "legs": [
            {
              "startTime": 1542126797000,
              "endTime": 1542127433000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 807.633,
              "pathway": false,
              "mode": "WALK",
              "route": "",
              "agencyTimeZoneOffset": 7200000,
              "interlineWithPreviousLeg": false,
              "from": {
                "name": "Origin",
                "lon": 35.8746904,
                "lat": 31.9637032,
                "departure": 1542126797000,
                "orig": "",
                "vertexType": "NORMAL"
              },
              "to": {
                "name": "Stop 49",
                "stopId": "2:created_stop_49",
                "lon": 35.880819,
                "lat": 31.960992,
                "arrival": 1542127433000,
                "departure": 1542128634000,
                "stopIndex": 45,
                "stopSequence": 45,
                "vertexType": "TRANSIT"
              },
              "legGeometry": {
                "points": "o{abEyw}yEIuDfC?`@}BFaCz@kA?a@g@oCbDWfAGZONWEiB?A?}@HmAVwBP}@H]",
                "length": 19
              },
              "rentedBike": false,
              "transitLeg": false,
              "duration": 636,
              "steps": [
                {
                  "distance": 85.534,
                  "relativeDirection": "DEPART",
                  "streetName": "Dijlah Street",
                  "absoluteDirection": "EAST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.87469809916507,
                  "lat": 31.963602439029543,
                  "elevation": []
                },
                {
                  "distance": 75.302,
                  "relativeDirection": "RIGHT",
                  "streetName": "Odeh Al Shawareb Street",
                  "absoluteDirection": "SOUTH",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.875602900000004,
                  "lat": 31.963652200000002,
                  "elevation": []
                },
                {
                  "distance": 260.765,
                  "relativeDirection": "LEFT",
                  "streetName": "Al Najaf Street",
                  "absoluteDirection": "EAST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.875607900000006,
                  "lat": 31.962975000000004,
                  "elevation": []
                },
                {
                  "distance": 132.464,
                  "relativeDirection": "RIGHT",
                  "streetName": "Sa'd Bin Abi Waqqas Street",
                  "absoluteDirection": "SOUTH",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.8781594,
                  "lat": 31.962666100000003,
                  "elevation": []
                },
                {
                  "distance": 207.428,
                  "relativeDirection": "SLIGHTLY_LEFT",
                  "streetName": "road",
                  "absoluteDirection": "SOUTHEAST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": true,
                  "lon": 35.8783161,
                  "lat": 31.961482300000004,
                  "elevation": []
                },
                {
                  "distance": 46.14,
                  "relativeDirection": "CONTINUE",
                  "streetName": "link",
                  "absoluteDirection": "EAST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": true,
                  "lon": 35.880354700000005,
                  "lat": 31.961122600000003,
                  "elevation": []
                }
              ]
            },
            {
              "startTime": 1542128634000,
              "endTime": 1542129126000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 3377.7044124845547,
              "pathway": false,
              "mode": "BUS",
              "route": "Bus 252: Jordan University--Middle East Square",
              "agencyName": "Mapping Amman",
              "agencyUrl": "http://www.mappingamman.com/",
              "agencyTimeZoneOffset": 7200000,
              "routeType": 3,
              "routeId": "2:B15",
              "interlineWithPreviousLeg": false,
              "agencyId": "0",
              "tripId": "2:84",
              "serviceDate": "20181113",
              "from": {
                "name": "Stop 49",
                "stopId": "2:created_stop_49",
                "lon": 35.880819,
                "lat": 31.960992,
                "arrival": 1542127433000,
                "departure": 1542128634000,
                "stopIndex": 45,
                "stopSequence": 45,
                "vertexType": "TRANSIT"
              },
              "to": {
                "name": "Stop 547",
                "stopId": "2:created_stop_547",
                "lon": 35.897628,
                "lat": 31.985918,
                "arrival": 1542129126000,
                "departure": 1542129726000,
                "stopIndex": 61,
                "stopSequence": 61,
                "vertexType": "TRANSIT"
              },
              "legGeometry": {
                "points": "ekabEa~~yE{EiGsO_HiDaHmEyHgGKoLtAuLGgLgBqJcEmImFoGyGaGeH_GeHmDaEuFkHcKoJ",
                "length": 17
              },
              "routeShortName": "Bus 252: Jordan University--Middle East Square",
              "routeLongName": "باص ٢٥٢: الجامعة الأردنية - ميدان الشرق الأوسط",
              "rentedBike": false,
              "transitLeg": true,
              "duration": 492,
              "steps": []
            },
            {
              "startTime": 1542129726000,
              "endTime": 1542130576000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 6715.88719188877,
              "pathway": false,
              "mode": "BUS",
              "route": "Coaster: Sweileh--Zarqa'a",
              "agencyName": "Mapping Amman",
              "agencyUrl": "http://www.mappingamman.com/",
              "agencyTimeZoneOffset": 7200000,
              "routeType": 3,
              "routeId": "2:C04",
              "interlineWithPreviousLeg": false,
              "agencyId": "0",
              "tripId": "2:9",
              "serviceDate": "20181113",
              "from": {
                "name": "Stop 547",
                "stopId": "2:created_stop_547",
                "lon": 35.897628,
                "lat": 31.985918,
                "arrival": 1542129126000,
                "departure": 1542129726000,
                "stopIndex": 308,
                "stopSequence": 308,
                "vertexType": "TRANSIT"
              },
              "to": {
                "name": "Stop 521",
                "stopId": "2:created_stop_521",
                "lon": 35.848337,
                "lat": 32.023055,
                "arrival": 1542130576000,
                "departure": 1542130577000,
                "stopIndex": 342,
                "stopSequence": 342,
                "vertexType": "TRANSIT"
              },
              "legGeometry": {
                "points": "}ffbEcgbzEkG~GkG|GiG~GeG`HqE|HsEzHmE|HkE~HiE`IkE~HiE~HqE|HqEzHkFnHkLvLwJrD{JvDsKtCsKtCgJlEsH`GcElCwF|F}GpG{FfH{FhHuFjHsFjHkClI{@bJTdJzA~IbB|IdB~I",
                "length": 35
              },
              "routeShortName": "Coaster: Sweileh--Zarqa'a",
              "routeLongName": "كوستر: صويلح - الزرقاء",
              "rentedBike": false,
              "transitLeg": true,
              "duration": 850,
              "steps": []
            },
            {
              "startTime": 1542130577000,
              "endTime": 1542130579000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 2.29,
              "pathway": false,
              "mode": "WALK",
              "route": "",
              "agencyTimeZoneOffset": 7200000,
              "interlineWithPreviousLeg": false,
              "from": {
                "name": "Stop 521",
                "stopId": "2:created_stop_521",
                "lon": 35.848337,
                "lat": 32.023055,
                "arrival": 1542130576000,
                "departure": 1542130577000,
                "stopIndex": 342,
                "stopSequence": 342,
                "vertexType": "TRANSIT"
              },
              "to": {
                "name": "Destination",
                "lon": 35.8483421,
                "lat": 32.0232583,
                "arrival": 1542130579000,
                "orig": "",
                "vertexType": "NORMAL"
              },
              "legGeometry": {
                "points": "yombEorxyECB",
                "length": 2
              },
              "rentedBike": false,
              "transitLeg": false,
              "duration": 2,
              "steps": [
                {
                  "distance": 2.29,
                  "relativeDirection": "DEPART",
                  "streetName": "Fa'iq Sweidan Street",
                  "absoluteDirection": "NORTHWEST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.8482421,
                  "lat": 32.023175300000005,
                  "elevation": []
                }
              ]
            }
          ],
          "tooSloped": false
        },
        {
          "duration": 3813,
          "startTime": 1542126797000,
          "endTime": 1542130610000,
          "walkTime": 506,
          "transitTime": 1625,
          "waitingTime": 1682,
          "walkDistance": 637.9910601447594,
          "walkLimitExceeded": false,
          "elevationLost": 0,
          "elevationGained": 0,
          "transfers": 1,
          "legs": [
            {
              "startTime": 1542126797000,
              "endTime": 1542127301000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 635.527,
              "pathway": false,
              "mode": "WALK",
              "route": "",
              "agencyTimeZoneOffset": 7200000,
              "interlineWithPreviousLeg": false,
              "from": {
                "name": "Origin",
                "lon": 35.8746904,
                "lat": 31.9637032,
                "departure": 1542126797000,
                "orig": "",
                "vertexType": "NORMAL"
              },
              "to": {
                "name": "Stop 50",
                "stopId": "2:created_stop_50",
                "lon": 35.879042,
                "lat": 31.961275,
                "arrival": 1542127301000,
                "departure": 1542127602000,
                "stopIndex": 33,
                "stopSequence": 33,
                "vertexType": "TRANSIT"
              },
              "legGeometry": {
                "points": "o{abEyw}yEIuDfC?`@}BFaCz@kA?a@g@oCbDWfAGZONWEiB",
                "length": 13
              },
              "rentedBike": false,
              "transitLeg": false,
              "duration": 504,
              "steps": [
                {
                  "distance": 85.534,
                  "relativeDirection": "DEPART",
                  "streetName": "Dijlah Street",
                  "absoluteDirection": "EAST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.87469809916507,
                  "lat": 31.963602439029543,
                  "elevation": []
                },
                {
                  "distance": 75.302,
                  "relativeDirection": "RIGHT",
                  "streetName": "Odeh Al Shawareb Street",
                  "absoluteDirection": "SOUTH",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.875602900000004,
                  "lat": 31.963652200000002,
                  "elevation": []
                },
                {
                  "distance": 260.765,
                  "relativeDirection": "LEFT",
                  "streetName": "Al Najaf Street",
                  "absoluteDirection": "EAST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.875607900000006,
                  "lat": 31.962975000000004,
                  "elevation": []
                },
                {
                  "distance": 132.464,
                  "relativeDirection": "RIGHT",
                  "streetName": "Sa'd Bin Abi Waqqas Street",
                  "absoluteDirection": "SOUTH",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.8781594,
                  "lat": 31.962666100000003,
                  "elevation": []
                },
                {
                  "distance": 81.462,
                  "relativeDirection": "SLIGHTLY_LEFT",
                  "streetName": "road",
                  "absoluteDirection": "SOUTHEAST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": true,
                  "lon": 35.8783161,
                  "lat": 31.961482300000004,
                  "elevation": []
                }
              ]
            },
            {
              "startTime": 1542127602000,
              "endTime": 1542128027000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 2913.048208978856,
              "pathway": false,
              "mode": "BUS",
              "route": "Coaster: Balad (Jordan Museum)--Wadi Seer",
              "agencyName": "Mapping Amman",
              "agencyUrl": "http://www.mappingamman.com/",
              "agencyTimeZoneOffset": 7200000,
              "routeType": 3,
              "routeId": "2:C03",
              "interlineWithPreviousLeg": false,
              "agencyId": "0",
              "tripId": "2:11",
              "serviceDate": "20181113",
              "from": {
                "name": "Stop 50",
                "stopId": "2:created_stop_50",
                "lon": 35.879042,
                "lat": 31.961275,
                "arrival": 1542127301000,
                "departure": 1542127602000,
                "stopIndex": 33,
                "stopSequence": 33,
                "vertexType": "TRANSIT"
              },
              "to": {
                "name": "Stop 67",
                "stopId": "2:created_stop_67",
                "lon": 35.84873,
                "lat": 31.957193,
                "arrival": 1542128027000,
                "departure": 1542129407000,
                "stopIndex": 50,
                "stopSequence": 50,
                "vertexType": "TRANSIT"
              },
              "legGeometry": {
                "points": "}labE_s~yEn@dJj@dJVfJTdJ^fJ\\dJ\\fJXfJXdJZfJPfJNdJn@dJrA`JnBzIpBzIpBxI",
                "length": 18
              },
              "routeShortName": "Coaster: Balad (Jordan Museum)--Wadi Seer",
              "routeLongName": "كوستر: البلد (راس العين - متحف الأردن) - وادي السير",
              "rentedBike": false,
              "transitLeg": true,
              "duration": 425,
              "steps": []
            },
            {
              "startTime": 1542129407000,
              "endTime": 1542130607000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 8529.541009531302,
              "pathway": false,
              "mode": "BUS",
              "route": "Bus 259: Al Deiri Al Gharbi (Jordan University)--Al Deiri Al Gharbi (8th Circle)",
              "agencyName": "Mapping Amman",
              "agencyUrl": "http://www.mappingamman.com/",
              "agencyTimeZoneOffset": 7200000,
              "routeType": 3,
              "routeId": "2:B17",
              "interlineWithPreviousLeg": false,
              "agencyId": "0",
              "tripId": "2:86",
              "serviceDate": "20181113",
              "from": {
                "name": "Stop 67",
                "stopId": "2:created_stop_67",
                "lon": 35.84873,
                "lat": 31.957193,
                "arrival": 1542128027000,
                "departure": 1542129407000,
                "stopIndex": 41,
                "stopSequence": 41,
                "vertexType": "TRANSIT"
              },
              "to": {
                "name": "Stop 521",
                "stopId": "2:created_stop_521",
                "lon": 35.848337,
                "lat": 32.023055,
                "arrival": 1542130607000,
                "departure": 1542130608000,
                "stopIndex": 80,
                "stopSequence": 80,
                "vertexType": "TRANSIT"
              },
              "legGeometry": {
                "points": "ms`bEquxyEwE|NcFnAoKzCiKdDcKlDwJ|DyJ~DwJ|DwJ~DuQbHuJ~D{I|EyH|FwH~FoGbFgEpBmK|CiLbByLV{LCqRJeGW{LKuLg@qJ}DuFiHkE_IkE_IyEwHmG}GgHkGoHeGgJoEqLmAqLkAsLgAcDwCeB}IcB}I",
                "length": 40
              },
              "routeShortName": "Bus 259: Al Deiri Al Gharbi (Jordan University)--Al Deiri Al Gharbi (8th Circle)",
              "routeLongName": "باص 259: الدير الغربي (الجامعة الأردنية) - الدير الغربي ( الدوار الثامن)",
              "rentedBike": false,
              "transitLeg": true,
              "duration": 1200,
              "steps": []
            },
            {
              "startTime": 1542130608000,
              "endTime": 1542130610000,
              "departureDelay": 0,
              "arrivalDelay": 0,
              "realTime": false,
              "distance": 2.29,
              "pathway": false,
              "mode": "WALK",
              "route": "",
              "agencyTimeZoneOffset": 7200000,
              "interlineWithPreviousLeg": false,
              "from": {
                "name": "Stop 521",
                "stopId": "2:created_stop_521",
                "lon": 35.848337,
                "lat": 32.023055,
                "arrival": 1542130607000,
                "departure": 1542130608000,
                "stopIndex": 80,
                "stopSequence": 80,
                "vertexType": "TRANSIT"
              },
              "to": {
                "name": "Destination",
                "lon": 35.8483421,
                "lat": 32.0232583,
                "arrival": 1542130610000,
                "orig": "",
                "vertexType": "NORMAL"
              },
              "legGeometry": {
                "points": "yombEorxyECB",
                "length": 2
              },
              "rentedBike": false,
              "transitLeg": false,
              "duration": 2,
              "steps": [
                {
                  "distance": 2.29,
                  "relativeDirection": "DEPART",
                  "streetName": "Fa'iq Sweidan Street",
                  "absoluteDirection": "NORTHWEST",
                  "stayOn": false,
                  "area": false,
                  "bogusName": false,
                  "lon": 35.8482421,
                  "lat": 32.023175300000005,
                  "elevation": []
                }
              ]
            }
          ],
          "tooSloped": false
        }
      ]
    },
    "debugOutput": {
      "precalculationTime": 19,
      "pathCalculationTime": 237,
      "pathTimes": [
        96,
        69,
        72
      ],
      "renderingTime": 1,
      "totalTime": 257,
      "timedOut": false
    },
    "elevationMetadata": {
      "ellipsoidToGeoidDifference": 16.916457601620138,
      "geoidElevation": false
    }
  }