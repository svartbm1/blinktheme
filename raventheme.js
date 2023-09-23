// Theme to match my blink shell to custom xfce4 terminal color scheme.

black       = '#000000';
red         = '#C77EB0'; // red
green       = '#64b27d'; // green
yellow      = '#706dd1'; // yellow
blue        = '#5a82a6'; // blue
magenta     = '#7d6294'; // pink
cyan        = '#578d8a'; // cyan
white       = '#EFEFEF'; // light gray
lightBlack  = '#414141'; // medium gray
lightRed    = '#e8bddb'; // red
lightGreen  = '#40f373'; // green
lightYellow = '#afade0'; // yellow
lightBlue   = '#91b1cf'; // blue
lightMagenta= '#ab90c2'; // pink
lightCyan   = '#95c2c0'; // cyan
lightWhite  = '#FFFFFF'; // white

t.prefs_.set('color-palette-overrides',
                 [ black , red     , green  , yellow,
                  blue     , magenta , cyan   , white,
                  lightBlack   , lightRed  , lightGreen , lightYellow,
                  lightBlue    , lightMagenta  , lightCyan  , lightWhite ]);

t.prefs_.set('cursor-color', white);
t.prefs_.set('foreground-color', white);
t.prefs_.set('background-color', black);
