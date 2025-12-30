import { Command } from "./command.interface";

export const COMMANDS: Command[] = [

  // SYSTEM / FIRST TIME
  { label: 'Connecting Display First Time', cmd: 'RUN "CISPL.BAS"\n' },

  // DISPLAY
  { label: 'Clear Display', cmd: '[CA,00,000,000,                    ]' },
  { label: 'Line 1 Text', cmd: '[CA,01,000,020,ABCDEFGHIJKLMNOPQRST]' },
  { label: 'Line 2 Text', cmd: '[CA,02,000,020,NBC BEARING JAIPUR  ]' },
  { label: 'Line 3 Text', cmd: '[CA,03,000,020,NBC BEARING JAIPUR  ]' },
  { label: 'Line 4 Text', cmd: '[CA,04,000,020,NBC BEARING JAIPUR  ]' },

  // DISPLAY CONTROL
  { label: 'Display ON (Backlight ON)', cmd: '[CA,05,000,000,                    ]' },
  { label: 'Display OFF (Backlight OFF)', cmd: '[CA,06,000,000,                    ]' },
  { label: 'Display Blink 0.5s ON / 0.5s OFF', cmd: '[CA,07,005,005,                    ]' },
  { label: 'Display Blink 1s ON / 1s OFF',     cmd: '[CA,07,010,010,                    ]' },

  // BUZZER
  { label: 'Buzzer ON',  cmd: '[CA,08,000,000,                    ]' },
  { label: 'Buzzer OFF', cmd: '[CA,09,000,000,                    ]' },
  { label: 'Beep 1 Time (0.1s)', cmd: '[CA,10,001,001,                    ]' },
  { label: 'Beep 3 Times (0.1s)', cmd: '[CA,10,001,003,                    ]' },
  { label: 'Beep 5 Times (0.2s)', cmd: '[CA,10,002,005,                    ]' },

  // LED
  { label: 'LED ON',  cmd: '[CA,11,000,000,                    ]' },
  { label: 'LED OFF', cmd: '[CA,12,000,000,                    ]' },
  { label: 'LED Blink 0.5s / 0.5s', cmd: '[CA,13,005,005,                    ]' },

  // RESPONSE
  { label: 'Power ON Response ON',  cmd: '[CA,14,000,000,                    ]' },
  { label: 'Power ON Response OFF', cmd: '[CA,15,000,000,                    ]' },
  { label: 'OK Response ON',  cmd: '[CA,16,000,000,                    ]' },
  { label: 'OK Response OFF', cmd: '[CA,17,000,000,                    ]' },
  { label: 'ERR Response ON',  cmd: '[CA,18,000,000,                    ]' },
  { label: 'ERR Response OFF', cmd: '[CA,19,000,000,                    ]' },

  // BANNER
  { label: 'Clear Banner Starting Program', cmd: '[CA,20,000,000,                    ]' },
  { label: 'Banner Line 1 Starting Program', cmd: '[CA,21,000,020,NBC BEARING JAIPUR  ]' },
  { label: 'Banner Line 2 Starting Program', cmd: '[CA,22,000,020,NBC BEARING JAIPUR  ]' },
  { label: 'Banner Line 3 Starting Program', cmd: '[CA,23,000,020,NBC BEARING JAIPUR  ]' },
  { label: 'Banner Line 4 Starting Program', cmd: '[CA,24,000,020,NBC BEARING JAIPUR  ]' },
  { label: 'Default Banner Starting Program', cmd: '[CA,25,000,000,                    ]' }

];