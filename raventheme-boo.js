// Theme to match my blink shell to custom xfce4 terminal color scheme.

black       = '#000000';
red         = '#ba86a6'; // red
green       = '#588c7b'; // green
yellow      = '#7c74be'; // yellow
blue        = '#5a7d9e'; // blue
magenta     = '#7e68a4'; // pink
cyan        = '#538383'; // cyan
white       = '#bbbbbb'; // light gray
lightBlack  = '#414141'; // medium gray
lightRed    = '#cd749c'; // red
lightGreen  = '#4db391'; // green
lightYellow = '#9b80ff'; // yellow
lightBlue   = '#5b95d7'; // blue
lightMagenta= '#b281e2'; // pink
lightCyan   = '#41b0b0'; // cyan
lightWhite  = '#FFFFFF'; // white
cursorColor = '#808080'; // grey

t.prefs_.set('color-palette-overrides',
                 [ black , red     , green  , yellow,
                  blue     , magenta , cyan   , white,
                  lightBlack   , lightRed  , lightGreen , lightYellow,
                  lightBlue    , lightMagenta  , lightCyan  , lightWhite ]);

t.prefs_.set('cursor-color', cursorColor);
t.prefs_.set('foreground-color', white);
t.prefs_.set('background-color', black);
