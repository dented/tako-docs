define({ "api": [  {    "type": "get",    "url": "/my/details",    "title": "",    "name": "Get_My_Details",    "group": "My",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "user",            "description": "<p>model</p>"          }        ]      },      "examples": [        {          "title": "{",          "content": "{\n  \"data\": {\n    \"user\": {\n      \"slug\": \"gram\",\n      \"profile\": {\n        \"name\": \"Graham\",\n        \"about\": \"Vice trust fund cornhole stumptown waistcoat fashion axe cred wes anderson. Fap slow-carb pickled leggings. Pork belly kogi mustache. Sustainable portland tousled chicharrones cronut craft beer crucifix.\",\n        \"location\": \"Lake Erniestad\",\n        \"likes\": 0,\n        \"banner\": {\n          \"bg_color\": \"#fff\",\n          \"original\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"large\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t1600_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"medium\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t1200_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"small\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t640_a4306cfebad7c9165836f6089a0894fe.jpg\"\n        },\n        \"avatar\": {\n          \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n        }\n      },\n      \"videos\": [\n        {\n          \"id\": \"36QTRMSOEZcE5v\",\n          \"slug\": \"corporis-recusandae\",\n          \"title\": \"quantifying the microchip won't do anything, we need to generate the primary SQL capacitor!\",\n          \"likes\": 541,\n          \"views\": 47644,\n          \"user\": {\n            \"slug\": \"gram\",\n            \"profile\": {\n              \"name\": \"Graham\",\n              \"avatar\": {\n                \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n              }\n            }\n          },\n          \"language\": {\n            \"id\": \"36QTQfxGm8hVNn\",\n            \"slug\": \"putty\",\n            \"name\": \"Putty\"\n          },\n          \"file\": null,\n          \"video_type\": {\n            \"id\": \"36QTQgUg1v2ZZ1\",\n            \"type\": \"public\"\n          }\n        }\n      ],\n      \"playlists\": [\n        {\n          \"id\": \"36QTTJa0xGGm07\",\n          \"slug\": \"quaerat-occaecati\",\n          \"title\": \"Use the open-source HDD application, then you can connect the auxiliary port!\",\n          \"user\": {\n            \"slug\": \"gram\",\n            \"profile\": {\n              \"name\": \"Graham\",\n              \"avatar\": {\n                \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n              }\n            }\n          }\n        }\n      ]\n    }\n  }\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/my/details_controller.rb",    "groupTitle": "My"  },  {    "type": "put",    "url": "/my/details",    "title": "",    "name": "Update_My_Details",    "group": "My",    "version": "1.0.0",    "description": "<p>Update the object in users based off how the model is built. I will update params later</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "user",            "description": "<p>model:</p>"          }        ]      },      "examples": [        {          "title": "{",          "content": "{\n  \"data\": {\n    \"user\": {\n      \"slug\": \"gram-1\",\n      \"profile\": {\n        \"name\": \"Graham\",\n        \"about\": \"Vice trust fund cornhole stumptown waistcoat fashion axe cred wes anderson. Fap slow-carb pickled leggings. Pork belly kogi mustache. Sustainable portland tousled chicharrones cronut craft beer crucifix.\",\n        \"location\": \"Lake Erniestad\",\n        \"likes\": 0,\n        \"banner\": {\n          \"bg_color\": \"#fff\",\n          \"original\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"large\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t1600_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"medium\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t1200_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"small\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t640_a4306cfebad7c9165836f6089a0894fe.jpg\"\n        },\n        \"avatar\": {\n          \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n        }\n      },\n      \"videos\": [\n        {\n          \"id\": \"36QTRMSOEZcE5v\",\n          \"slug\": \"corporis-recusandae\",\n          \"title\": \"quantifying the microchip won't do anything, we need to generate the primary SQL capacitor!\",\n          \"likes\": 541,\n          \"views\": 47644,\n          \"user\": {\n            \"slug\": \"gram-1\",\n            \"profile\": {\n              \"name\": \"Graham\",\n              \"avatar\": {\n                \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n              }\n            }\n          },\n          \"language\": {\n            \"id\": \"36QTQfxGm8hVNn\",\n            \"slug\": \"putty\",\n            \"name\": \"Putty\"\n          },\n          \"file\": null,\n          \"video_type\": {\n            \"id\": \"36QTQgUg1v2ZZ1\",\n            \"type\": \"public\"\n          }\n        }\n      ],\n      \"playlists\": [\n        {\n          \"id\": \"36QTTJa0xGGm07\",\n          \"slug\": \"quaerat-occaecati\",\n          \"title\": \"Use the open-source HDD application, then you can connect the auxiliary port!\",\n          \"user\": {\n            \"slug\": \"gram-1\",\n            \"profile\": {\n              \"name\": \"Graham\",\n              \"avatar\": {\n                \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n              }\n            }\n          }\n        }\n      ]\n    }\n  }\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/my/details_controller.rb",    "groupTitle": "My"  },  {    "type": "get",    "url": "/my/playlists",    "title": "",    "name": "Collection_of_my_playlists",    "group": "My_Playlists",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "Playlist",            "description": "<p>Collection of playlists</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "{\n  \"meta\": {\n    \"status\": 200,\n    \"message\": \"Success\"\n  },\n  \"data\": {\n    \"playlists\": [\n      {\n        \"id\": \"36QTTJa0xGGm07\",\n        \"slug\": \"quaerat-occaecati\",\n        \"title\": \"Use the open-source HDD application, then you can connect the auxiliary port!\",\n        \"user\": {\n          \"slug\": \"gram-1\",\n          \"profile\": {\n            \"name\": \"Graham\",\n            \"avatar\": {\n              \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n              \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n              \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n              \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n            }\n          }\n        },\n        \"videos\": [\n          {\n            \"id\": \"36QTRzqs6U315b\",\n            \"slug\": \"accusamus-sed\",\n            \"title\": \"If we back up the bandwidth, we can get to the RAM driver through the 1080p FTP capacitor!\",\n            \"likes\": 526,\n            \"views\": 81556,\n            \"user\": {\n              \"slug\": \"aut-animi\"\n            },\n            \"language\": {\n              \"id\": \"36QTQgNeUBEwjP\",\n              \"slug\": \"heroku\",\n              \"name\": \"Heroku\"\n            },\n            \"file\": null,\n            \"video_type\": {\n              \"id\": \"36QTQgUg1v2ZZ1\",\n              \"type\": \"public\"\n            }\n          },\n          {\n            \"id\": \"36QTScOtuThfCZ\",\n            \"slug\": \"blanditiis-sint\",\n            \"title\": \"Try to synthesize the THX monitor, maybe it will transmit the primary firewall!\",\n            \"likes\": 801,\n            \"views\": 18783,\n            \"user\": {\n              \"slug\": \"aut-animi\"\n            },\n            \"language\": {\n              \"id\": \"36QTQgOaYg9AAx\",\n              \"slug\": \"flask\",\n              \"name\": \"Flask\"\n            },\n            \"file\": null,\n            \"video_type\": {\n              \"id\": \"36QTQgUg1v2ZZ1\",\n              \"type\": \"public\"\n            }\n          },\n          {\n            \"id\": \"36QTScQ9L8ucSd\",\n            \"slug\": \"expedita-nisi\",\n            \"title\": \"Use the multi-byte JBOD program, then you can navigate the cross-platform program!\",\n            \"likes\": 450,\n            \"views\": 19849,\n            \"user\": {\n              \"slug\": \"iste-aut\",\n              \"profile\": {\n                \"name\": \"Wilmer Tillman\",\n                \"avatar\": {\n                  \"original\": null,\n                  \"large\": null,\n                  \"medium\": null,\n                  \"small\": null\n                }\n              }\n            },\n            \"language\": {\n              \"id\": \"36QTQgSUWkvOrP\",\n              \"slug\": \"html-css\",\n              \"name\": \"HTML-CSS\"\n            },\n            \"file\": null,\n            \"video_type\": {\n              \"id\": \"36QTQgUWLptCel\",\n              \"type\": \"private\"\n            }\n          }\n        ]\n      }\n    ]\n  },\n  \"links\": {\n    \"self\": \"http://localhost:4000/v1/my/playlists?page=1\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/my/playlists_controller.rb",    "groupTitle": "My_Playlists"  },  {    "type": "post",    "url": "/my/playlists",    "title": "",    "name": "Create_a_Playlist",    "group": "My_Playlists",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "Playlist",            "description": "<p>model</p>"          }        ]      }    },    "filename": "./app/controllers/v1/my/playlists_controller.rb",    "groupTitle": "My_Playlists"  },  {    "type": "get",    "url": "/my/playlists/:id",    "title": "",    "name": "Playlist_detials",    "group": "My_Playlists",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "Playlist",            "description": "<p>model</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "{\n  \"meta\": {\n    \"status\": 200,\n    \"message\": \"Success\"\n  },\n  \"data\": {\n    \"playlist\": {\n      \"id\": \"36QTTJa0xGGm07\",\n      \"slug\": \"quaerat-occaecati\",\n      \"title\": \"Use the open-source HDD application, then you can connect the auxiliary port!\",\n      \"user\": {\n        \"slug\": \"gram-1\",\n        \"profile\": {\n          \"name\": \"Graham\",\n          \"avatar\": {\n            \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n            \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n            \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n            \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n          }\n        }\n      },\n      \"videos\": [\n        {\n          \"id\": \"36QTRzqs6U315b\",\n          \"slug\": \"accusamus-sed\",\n          \"title\": \"If we back up the bandwidth, we can get to the RAM driver through the 1080p FTP capacitor!\",\n          \"likes\": 526,\n          \"views\": 81556,\n          \"user\": {\n            \"slug\": \"aut-animi\"\n          },\n          \"language\": {\n            \"id\": \"36QTQgNeUBEwjP\",\n            \"slug\": \"heroku\",\n            \"name\": \"Heroku\"\n          },\n          \"file\": null,\n          \"video_type\": {\n            \"id\": \"36QTQgUg1v2ZZ1\",\n            \"type\": \"public\"\n          }\n        },\n        {\n          \"id\": \"36QTScOtuThfCZ\",\n          \"slug\": \"blanditiis-sint\",\n          \"title\": \"Try to synthesize the THX monitor, maybe it will transmit the primary firewall!\",\n          \"likes\": 801,\n          \"views\": 18783,\n          \"user\": {\n            \"slug\": \"aut-animi\"\n          },\n          \"language\": {\n            \"id\": \"36QTQgOaYg9AAx\",\n            \"slug\": \"flask\",\n            \"name\": \"Flask\"\n          },\n          \"file\": null,\n          \"video_type\": {\n            \"id\": \"36QTQgUg1v2ZZ1\",\n            \"type\": \"public\"\n          }\n        },\n        {\n          \"id\": \"36QTScQ9L8ucSd\",\n          \"slug\": \"expedita-nisi\",\n          \"title\": \"Use the multi-byte JBOD program, then you can navigate the cross-platform program!\",\n          \"likes\": 450,\n          \"views\": 19849,\n          \"user\": {\n            \"slug\": \"iste-aut\",\n            \"profile\": {\n              \"name\": \"Wilmer Tillman\",\n              \"avatar\": {\n                \"original\": null,\n                \"large\": null,\n                \"medium\": null,\n                \"small\": null\n              }\n            }\n          },\n          \"language\": {\n            \"id\": \"36QTQgSUWkvOrP\",\n            \"slug\": \"html-css\",\n            \"name\": \"HTML-CSS\"\n          },\n          \"file\": null,\n          \"video_type\": {\n            \"id\": \"36QTQgUWLptCel\",\n            \"type\": \"private\"\n          }\n        }\n      ]\n    }\n  }\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/my/playlists_controller.rb",    "groupTitle": "My_Playlists"  },  {    "type": "delete",    "url": "/my/playlists",    "title": "",    "name": "Remove_Playlist",    "group": "My_Playlists",    "version": "1.0.0",    "success": {      "examples": [        {          "title": "Success",          "content": "{\n  \"meta\": {\n    \"status\": 200,\n    \"message\": \"Success\"\n  },\n  \"data\": null\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/my/playlists_controller.rb",    "groupTitle": "My_Playlists"  },  {    "type": "post",    "url": "/my/playlists/:id/",    "title": "",    "name": "Update_Playlist_details",    "group": "My_Playlists",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "Playlist",            "description": "<p>model</p>"          }        ]      }    },    "filename": "./app/controllers/v1/my/playlists_controller.rb",    "groupTitle": "My_Playlists"  },  {    "type": "get",    "url": "/technologies",    "title": "",    "name": "GetTechnologiesList",    "group": "Technologies",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "Langauges",            "description": "<p>Collection of languages</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "{\n  \"data\": {\n    \"languages\": [\n      {\n        \"slug\": \"d\",\n        \"name\": \"D\",\n        \"total_videos\": 0,\n        \"videos\": []\n      },\n      {\n        \"slug\": \"rust\",\n        \"name\": \"Rust\",\n        \"total_videos\": 1,\n        \"videos\": [\n          {\n            \"id\": \"36QTRzum4YpFm3\",\n            \"slug\": \"officia-autem\",\n            \"title\": \"Try to reboot the SSL system, maybe it will bypass the optical driver!\",\n            \"likes\": 985,\n            \"views\": 33069,\n            \"user\": {\n              \"slug\": \"et-nostrum\",\n              \"profile\": {\n                \"name\": \"Winifred Stokes PhD\",\n                \"avatar\": {\n                  \"original\": null,\n                  \"large\": null,\n                  \"medium\": null,\n                  \"small\": null\n                }\n              }\n            },\n            \"language\": {\n              \"id\": \"36QTQfuvatQxlv\",\n              \"slug\": \"rust\",\n              \"name\": \"Rust\"\n            },\n            \"file\": null,\n            \"video_type\": {\n              \"id\": \"36QTQgUpi0BwTH\",\n              \"type\": \"pro\"\n            }\n          }\n        ]\n      }\n    ]\n  },\n  \"links\": {\n    \"self\": \"http://localhost:4000/v1/technologies?page=1\",\n    \"next\": \"http://localhost:4000/v1/technologies?page=2\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/technologies_controller.rb",    "groupTitle": "Technologies"  },  {    "type": "get",    "url": "/technologies/:id",    "title": "",    "name": "Get_Technology_by_Id",    "group": "Technologies",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "Language",            "description": "<p>model</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "{\n  \"data\": {\n    \"language\": {\n      \"slug\": \"ruby\",\n      \"name\": \"Ruby\",\n      \"total_videos\": 2,\n      \"videos\": [\n        {\n          \"id\": \"36QTRzuSiOWVxX\",\n          \"slug\": \"cum-aliquam\",\n          \"title\": \"You can't parse the alarm without programming the multi-byte SMS hard drive!\",\n          \"likes\": 484,\n          \"views\": 42437,\n          \"user\": {\n            \"slug\": \"asperiores-iste\",\n            \"profile\": {\n              \"name\": \"Ms. Jamie Hintz\",\n              \"avatar\": {\n                \"original\": null,\n                \"large\": null,\n                \"medium\": null,\n                \"small\": null\n              }\n            }\n          },\n          \"language\": {\n            \"id\": \"36QTQgSnsvE8fv\",\n            \"slug\": \"ruby\",\n            \"name\": \"Ruby\"\n          },\n          \"file\": null,\n          \"video_type\": {\n            \"id\": \"36QTQgUg1v2ZZ1\",\n            \"type\": \"public\"\n          }\n        },\n        {\n          \"id\": \"36QTScK3ru1D4Z\",\n          \"slug\": \"minima-aut\",\n          \"title\": \"You can't transmit the feed without navigating the redundant PCI array!\",\n          \"likes\": 251,\n          \"views\": 83454,\n          \"user\": {\n            \"slug\": \"nihil-est\",\n            \"profile\": {\n              \"name\": \"Kira Walker\",\n              \"avatar\": {\n                \"original\": null,\n                \"large\": null,\n                \"medium\": null,\n                \"small\": null\n              }\n            }\n          },\n          \"language\": {\n            \"id\": \"36QTQgSnsvE8fv\",\n            \"slug\": \"ruby\",\n            \"name\": \"Ruby\"\n          },\n          \"file\": null,\n          \"video_type\": {\n            \"id\": \"36QTQgUg1v2ZZ1\",\n            \"type\": \"public\"\n          }\n        }\n      ]\n    }\n  }\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/technologies_controller.rb",    "groupTitle": "Technologies"  },  {    "type": "get",    "url": "/users/:id",    "title": "",    "name": "Get_user_profile",    "group": "Users",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "User",            "description": "<p>model</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "{\n  \"data\": {\n    \"user\": {\n      \"slug\": \"gram\",\n      \"profile\": {\n        \"name\": \"Graham\",\n        \"about\": \"Vice trust fund cornhole stumptown waistcoat fashion axe cred wes anderson. Fap slow-carb pickled leggings. Pork belly kogi mustache. Sustainable portland tousled chicharrones cronut craft beer crucifix.\",\n        \"location\": \"Lake Erniestad\",\n        \"likes\": 0,\n        \"banner\": {\n          \"bg_color\": \"#fff\",\n          \"original\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"large\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t1600_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"medium\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t1200_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"small\": \"http://localhost:3000/banners/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t640_a4306cfebad7c9165836f6089a0894fe.jpg\"\n        },\n        \"avatar\": {\n          \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n          \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n        }\n      },\n      \"videos\": [\n        {\n          \"id\": \"36QTRMSOEZcE5v\",\n          \"slug\": \"corporis-recusandae\",\n          \"title\": \"quantifying the microchip won't do anything, we need to generate the primary SQL capacitor!\",\n          \"likes\": 541,\n          \"views\": 47644,\n          \"user\": {\n            \"slug\": \"gram\",\n            \"profile\": {\n              \"name\": \"Graham\",\n              \"avatar\": {\n                \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n              }\n            }\n          },\n          \"language\": {\n            \"id\": \"36QTQfxGm8hVNn\",\n            \"slug\": \"putty\",\n            \"name\": \"Putty\"\n          },\n          \"file\": null,\n          \"video_type\": {\n            \"id\": \"36QTQgUg1v2ZZ1\",\n            \"type\": \"public\"\n          }\n        }\n      ],\n      \"playlists\": [\n        {\n          \"id\": \"36QTTJa0xGGm07\",\n          \"slug\": \"quaerat-occaecati\",\n          \"title\": \"Use the open-source HDD application, then you can connect the auxiliary port!\",\n          \"user\": {\n            \"slug\": \"gram\",\n            \"profile\": {\n              \"name\": \"Graham\",\n              \"avatar\": {\n                \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n                \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n              }\n            }\n          }\n        }\n      ]\n    }\n  }\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/users_controller.rb",    "groupTitle": "Users"  },  {    "type": "post",    "url": "/users/:user_id/likes",    "title": "",    "name": "Like_a_user",    "group": "Users",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "Profile",            "description": "<p>model</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "{\n  \"data\": {\n    \"profile\": {\n      \"name\": \"Kirsten Volkman III\",\n      \"about\": \"Beard blog farm-to-table portland fixie roof cardigan. Slow-carb kogi pabst. Cleanse fashion axe bushwick heirloom portland williamsburg. Single-origin coffee organic pinterest. Cleanse diy banjo williamsburg food truck paleo bushwick.\",\n      \"location\": \"South Elmer\",\n      \"likes\": 4,\n      \"banner\": {\n        \"bg_color\": \"#fff\",\n        \"original\": null,\n        \"large\": null,\n        \"medium\": null,\n        \"small\": null\n      },\n      \"avatar\": {\n        \"original\": null,\n        \"large\": null,\n        \"medium\": null,\n        \"small\": null\n      }\n    }\n  }\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/likes_controller.rb",    "groupTitle": "Users"  },  {    "type": "get",    "url": "/videos/:id",    "title": "",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "field",            "defaultValue": "id",            "description": "<p>Id of the video</p>"          }        ]      }    },    "name": "GetVideo",    "group": "Videos",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "Video",            "description": "<p>model</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "{\n  \"data\": {\n    \"video\": {\n      \"id\": \"36QTQgUzO5LJNX\",\n      \"slug\": \"iusto-est\",\n      \"title\": \"connecting the application won't do anything, we need to generate the redundant AI feed!\",\n      \"likes\": 727,\n      \"views\": 73503,\n      \"user\": {\n        \"slug\": \"alias-soluta\",\n        \"profile\": {\n          \"name\": \"Freeman Ankunding\",\n          \"avatar\": {\n            \"original\": null,\n            \"large\": null,\n            \"medium\": null,\n            \"small\": null\n          }\n        }\n      },\n      \"language\": {\n        \"id\": \"36QTQfvhzJBoJD\",\n        \"slug\": \"dynamics-crm\",\n        \"name\": \"Dynamics-CRM\"\n      },\n      \"file\": null,\n      \"video_type\": {\n        \"id\": \"36QTQgUg1v2ZZ1\",\n        \"type\": \"public\"\n      }\n    }\n  }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "VideoNotFound",            "description": "<p>Id not found within Collection</p>"          }        ]      },      "examples": [        {          "title": "NotFound",          "content": "{\n  \"meta\": {\n    \"status\": 404,\n    \"message\": \"No video with 123323\"\n  },\n  \"data\": null\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/videos_controller.rb",    "groupTitle": "Videos"  },  {    "type": "get",    "url": "/videos",    "title": "",    "name": "GetVideoList",    "group": "Videos",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "Videos",            "description": "<p>Collection of Videos</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "{\n  \"data\": {\n    \"videos\": [\n      {\n        \"id\": \"36QTRMSOEZcE5v\",\n        \"slug\": \"corporis-recusandae\",\n        \"title\": \"quantifying the microchip won't do anything, we need to generate the primary SQL capacitor!\",\n        \"likes\": 541,\n        \"views\": 47644,\n        \"user\": {\n          \"slug\": \"gram\",\n          \"profile\": {\n            \"name\": \"Graham\",\n            \"avatar\": {\n              \"original\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/a4306cfebad7c9165836f6089a0894fe.jpg\",\n              \"large\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t128_a4306cfebad7c9165836f6089a0894fe.jpg\",\n              \"medium\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t64_a4306cfebad7c9165836f6089a0894fe.jpg\",\n              \"small\": \"http://localhost:3000/avatars/e78/8ac/ed7/42f/e1c/430/551/76e/dd3/4fb/t32_a4306cfebad7c9165836f6089a0894fe.jpg\"\n            }\n          }\n        },\n        \"language\": {\n          \"id\": \"36QTQfxGm8hVNn\",\n          \"slug\": \"putty\",\n          \"name\": \"Putty\"\n        },\n        \"file\": null,\n        \"video_type\": {\n          \"id\": \"36QTQgUg1v2ZZ1\",\n          \"type\": \"public\"\n        }\n      }\n    ]\n  },\n  \"links\": {\n    \"self\": \"http://localhost:4000/v1/videos?page=1\",\n    \"next\": \"http://localhost:4000/v1/videos?page=2\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/videos_controller.rb",    "groupTitle": "Videos"  },  {    "type": "post",    "url": "/videos/:video_is/likes",    "title": "",    "name": "Like_a_video",    "group": "Videos",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "Video",            "description": "<p>model</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "{\n  \"data\": {\n    \"video\": {\n      \"id\": \"36QTQgUzO5LJNX\",\n      \"slug\": \"iusto-est\",\n      \"title\": \"connecting the application won't do anything, we need to generate the redundant AI feed!\",\n      \"likes\": 727,\n      \"views\": 73503,\n      \"user\": {\n        \"slug\": \"alias-soluta\",\n        \"profile\": {\n          \"name\": \"Freeman Ankunding\",\n          \"avatar\": {\n            \"original\": null,\n            \"large\": null,\n            \"medium\": null,\n            \"small\": null\n          }\n        }\n      },\n      \"language\": {\n        \"id\": \"36QTQfvhzJBoJD\",\n        \"slug\": \"dynamics-crm\",\n        \"name\": \"Dynamics-CRM\"\n      },\n      \"file\": null,\n      \"video_type\": {\n        \"id\": \"36QTQgUg1v2ZZ1\",\n        \"type\": \"public\"\n      }\n    }\n  }\n}",          "type": "json"        }      ]    },    "filename": "./app/controllers/v1/likes_controller.rb",    "groupTitle": "Videos"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./doc/main.js",    "group": "_Users_gram_code_dented_io_tako_doc_main_js",    "groupTitle": "_Users_gram_code_dented_io_tako_doc_main_js",    "name": ""  }] });
