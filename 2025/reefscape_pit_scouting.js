var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width x Length",
      "code": "wxl",
      "type": "text",
      "size": 20,
      "maxSize": 50,
      "defaultValue": "N/A"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "text",
      "size": 20,
      "maxSize": 50,
      "defaultValue": "N/A"
    },
    { "name": "max speed",
      "code": "spd",
      "type": "text",
      "size": 20,
      "maxSize": 50,
      "defaultValue": "N/A"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50,
      "defaultValue": "N/A"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Coral Intake Type",
      "code": "in",
      "type": "radio",
      "choices": {
        "cf": "floor<br>",
        "cs": "station<br>"
      }
    },
    { "name": "Coral L1",
      "code": "lv1",
      "type": "bool"
    },
    { "name": "Coral L2",
      "code": "lv2",
      "type": "bool"
    },
    { "name": "Coral L3",
      "code": "lv3",
      "type": "bool"
    },
    { "name": "Coral L4",
      "code": "lv4",
      "type": "bool"
    },
    { "name": "Processor",
      "code": "prc",
      "type": "bool"
    },
    { "name": "Net",
      "code": "net",
      "type": "bool"
    },
    { "name": "Remove algae from reef?",
      "code": "rlg",
      "type": "bool"
    },
    { "name": "Can your robot<br>go onto the other<br>side of the field?",
      "code": "und",
      "type": "bool"
    },
    { "name": "Number of usage<br>batteries",
      "code": "bat",
      "type": "number",
      "min": 1,
      "max": 20
    },
    { "name": "Any known issues<br>W/ your robot?",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250,
      "defaultValue": "N/A"
    },
    { "name": "Photo taken of robot",
      "code": "pic",
      "type": "bool"
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
