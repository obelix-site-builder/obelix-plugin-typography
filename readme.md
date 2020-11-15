# obelix-plugin-typography
> A [Typography.js](https://kyleamathews.github.io/typography.js/) plugin for [Obelix](https://github.com/obelix-site-builder/obelix)

This [Obelix](https://github.com/obelix-site-builder/obelix) plugin generates a stylesheet based on a [Typography.js](https://kyleamathews.github.io/typography.js/) configuration or theme.

## Usage
Install into your project (or globally if you prefer):

```
npm install --save obelix-plugin-typography
```

If you plan on using a Typography.js theme, install that too.

Then in your `obelix.edn` file, configure the plugin:

```clojure
{:plugins 
 {:obelix-plugin-typography
  {:fileName "typography.css"  ;; The name of the generated CSS file, defaults to typography.css
   :theme "typography-theme-fairy-gates"  ;; Optional, the Typography.js theme to use
   ;; In addition or instead of a theme, specify any Typography.js
   ;; options you want. These will override the theme settings.
   :baseFontSize 16
   :baseLineHeight 1.5
   ;; etc.
   }}}
```

**Important**: This plugin only generates the typography stylesheet. You still need to add a `<link>` to it in the layouts or pages you want it to be applied to.
