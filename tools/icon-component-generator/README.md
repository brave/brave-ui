## Usage

*Tool is broken at the moment. 

This tool batch processes SVGs within a folder by optimizing the XML with SVGO, converting it to JSX and outputting them as TSX files that can be dropped into the icon component folder.

1. Create a folder with the SVG files inside.
2. `cd` into the `icon-component-generator` folder
3. `npm install`
4. Run the comman

```
node ./ [Full Path Of Directory with SVG files relative to the icon-component-generator folder] [Destination Path For TSX files relative to the icon-component-generator folder]
```

#### Example

`node ./ ~/MyIcons/svg-folder .../../icons/new-ones`
