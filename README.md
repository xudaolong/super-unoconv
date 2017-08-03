# Super-unoconv

A better node.js wrapper for converting documents with [unoconv](http://dag.wieers.com/home-made/unoconv/) that runs on node v7.x.

## Requirements

[Unoconv](http://dag.wieers.com/home-made/unoconv/) is required, which requires [LibreOffice](http://www.libreoffice.org/) (or OpenOffice.)

## Installation

- Unoconv
  - brew install unoconv
- LibreOffice

## Demo

```
const tool = require('../lib/');

tool.convert('./demo.xlsx', 'pdf', {
    output: './demo.pdf',
    preserve: true,
}, (err, result) => {
    if (err) console.log(err);
    console.log("ok~", result);
});

```

## API

- convert(file, outputFormat, options, callback)
  - file : who need to format
  - outputFormat : formate type
  - options 
  
    ```
    output : if you need specify document output basename, filename or directory
    password : if your document have password
    preserve : if you want to keep timestamp and permissions of the original document
    timeout : if you want to set if the thread run long time
    ``` 
  - callback

##  Document formats

```
{
    document: [
        {
            format: 'bib',
            extension: 'bib',
            description: 'BibTeX',
            mime: 'application/octet-stream'
        },
        {
            format: 'doc',
            extension: 'doc',
            description: 'MicrosoftWord97/2000/XP',
            mime: 'application/msword'
        },
        {
            format: 'doc6',
            extension: 'doc',
            description: 'MicrosoftWord6.0',
            mime: 'application/msword'
        },
        {
            format: 'doc95',
            extension: 'doc',
            description: 'MicrosoftWord95',
            mime: 'application/msword'
        },
        {
            format: 'docbook',
            extension: 'xml',
            description: 'DocBook',
            mime: 'text/xml'
        },
        {
            format: 'docx',
            extension: 'docx',
            description: 'MicrosoftOfficeOpenXML',
            mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        },
        {
            format: 'docx7',
            extension: 'docx',
            description: 'MicrosoftOfficeOpenXML',
            mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        },
        {
            format: 'fodt',
            extension: 'fodt',
            description: 'OpenDocumentText(FlatXML)',
            mime: 'application/octet-stream'
        },
        {
            format: 'html',
            extension: 'html',
            description: 'HTMLDocument(OpenOffice.orgWriter)',
            mime: 'text/html'
        },
        {
            format: 'latex',
            extension: 'ltx',
            description: 'LaTeX2e',
            mime: 'application/octet-stream'
        },
        {
            format: 'mediawiki',
            extension: 'txt',
            description: 'MediaWiki',
            mime: 'text/plain'
        },
        {
            format: 'odt',
            extension: 'odt',
            description: 'ODFTextDocument',
            mime: 'application/vnd.oasis.opendocument.text'
        },
        {
            format: 'ooxml',
            extension: 'xml',
            description: 'MicrosoftOfficeOpenXML',
            mime: 'text/xml'
        },
        {
            format: 'ott',
            extension: 'ott',
            description: 'OpenDocumentText',
            mime: 'application/vnd.oasis.opendocument.text-template'
        },
        {
            format: 'pdb',
            extension: 'pdb',
            description: 'AportisDoc(Palm)',
            mime: 'application/x-pilot'
        },
        {
            format: 'pdf',
            extension: 'pdf',
            description: 'PortableDocumentFormat',
            mime: 'application/pdf'
        },
        {
            format: 'psw',
            extension: 'psw',
            description: 'PocketWord',
            mime: 'application/octet-stream'
        },
        {
            format: 'rtf',
            extension: 'rtf',
            description: 'RichTextFormat',
            mime: 'text/rtf'
        },
        {
            format: 'sdw',
            extension: 'sdw',
            description: 'StarWriter5.0',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'sdw4',
            extension: 'sdw',
            description: 'StarWriter4.0',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'sdw3',
            extension: 'sdw',
            description: 'StarWriter3.0',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'stw',
            extension: 'stw',
            description: 'OpenOffice.org1.0TextDocumentTemplate',
            mime: 'application/vnd.sun.xml.writer.template'
        },
        {
            format: 'sxw',
            extension: 'sxw',
            description: 'OpenOffice.org1.0TextDocument',
            mime: 'application/vnd.sun.xml.writer'
        },
        {
            format: 'text',
            extension: 'txt',
            description: 'TextEncoded',
            mime: 'text/plain'
        },
        {
            format: 'txt',
            extension: 'txt',
            description: 'Text',
            mime: 'text/plain'
        },
        {
            format: 'uot',
            extension: 'uot',
            description: 'UnifiedOfficeFormattext',
            mime: 'application/octet-stream'
        },
        {
            format: 'vor',
            extension: 'vor',
            description: 'StarWriter5.0Template',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'vor4',
            extension: 'vor',
            description: 'StarWriter4.0Template',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'vor3',
            extension: 'vor',
            description: 'StarWriter3.0Template',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'wps',
            extension: 'wps',
            description: 'MicrosoftWorks',
            mime: 'application/vnd.ms-works'
        },
        {
            format: 'xhtml',
            extension: 'html',
            description: 'XHTMLDocument',
            mime: 'text/html'
        }
    ],
    graphics: [
        {
            format: 'bmp',
            extension: 'bmp',
            description: 'WindowsBitmap',
            mime: 'image/x-ms-bmp'
        },
        {
            format: 'emf',
            extension: 'emf',
            description: 'EnhancedMetafile',
            mime: 'application/x-msmetafile'
        },
        {
            format: 'eps',
            extension: 'eps',
            description: 'EncapsulatedPostScript',
            mime: 'application/postscript'
        },
        {
            format: 'fodg',
            extension: 'fodg',
            description: 'OpenDocumentDrawing(FlatXML)',
            mime: 'application/octet-stream'
        },
        {
            format: 'gif',
            extension: 'gif',
            description: 'GraphicsInterchangeFormat',
            mime: 'image/gif'
        },
        {
            format: 'html',
            extension: 'html',
            description: 'HTMLDocument(OpenOffice.orgDraw)',
            mime: 'text/html'
        },
        {
            format: 'jpg',
            extension: 'jpg',
            description: 'JointPhotographicExpertsGroup',
            mime: 'image/jpeg'
        },
        {
            format: 'met',
            extension: 'met',
            description: 'OS/2Metafile',
            mime: 'application/octet-stream'
        },
        {
            format: 'odd',
            extension: 'odd',
            description: 'OpenDocumentDrawing',
            mime: 'application/octet-stream'
        },
        {
            format: 'otg',
            extension: 'otg',
            description: 'OpenDocumentDrawingTemplate',
            mime: 'application/vnd.oasis.opendocument.graphics-template'
        },
        {
            format: 'pbm',
            extension: 'pbm',
            description: 'PortableBitmap',
            mime: 'image/x-portable-bitmap'
        },
        {
            format: 'pct',
            extension: 'pct',
            description: 'MacPict',
            mime: 'image/x-pict'
        },
        {
            format: 'pdf',
            extension: 'pdf',
            description: 'PortableDocumentFormat',
            mime: 'application/pdf'
        },
        {
            format: 'pgm',
            extension: 'pgm',
            description: 'PortableGraymap',
            mime: 'image/x-portable-graymap'
        },
        {
            format: 'png',
            extension: 'png',
            description: 'PortableNetworkGraphic',
            mime: 'image/png'
        },
        {
            format: 'ppm',
            extension: 'ppm',
            description: 'PortablePixelmap',
            mime: 'image/x-portable-pixmap'
        },
        {
            format: 'ras',
            extension: 'ras',
            description: 'SunRasterImage',
            mime: 'image/x-cmu-raster'
        },
        {
            format: 'std',
            extension: 'std',
            description: 'OpenOffice.org1.0DrawingTemplate',
            mime: 'application/vnd.sun.xml.draw.template'
        },
        {
            format: 'svg',
            extension: 'svg',
            description: 'ScalableVectorGraphics',
            mime: 'image/svg+xml'
        },
        {
            format: 'svm',
            extension: 'svm',
            description: 'StarViewMetafile',
            mime: 'application/octet-stream'
        },
        {
            format: 'swf',
            extension: 'swf',
            description: 'MacromediaFlash(SWF)',
            mime: 'application/x-shockwave-flash'
        },
        {
            format: 'sxd',
            extension: 'sxd',
            description: 'OpenOffice.org1.0Drawing',
            mime: 'application/vnd.sun.xml.draw'
        },
        {
            format: 'sxd3',
            extension: 'sxd',
            description: 'StarDraw3.0',
            mime: 'application/vnd.sun.xml.draw'
        },
        {
            format: 'sxd5',
            extension: 'sxd',
            description: 'StarDraw5.0',
            mime: 'application/vnd.sun.xml.draw'
        },
        {
            format: 'sxw',
            extension: 'sxw',
            description: 'StarOfficeXML(Draw)',
            mime: 'application/vnd.sun.xml.writer'
        },
        {
            format: 'tiff',
            extension: 'tiff',
            description: 'TaggedImageFileFormat',
            mime: 'image/tiff'
        },
        {
            format: 'vor',
            extension: 'vor',
            description: 'StarDraw5.0Template',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'vor3',
            extension: 'vor',
            description: 'StarDraw3.0Template',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'wmf',
            extension: 'wmf',
            description: 'WindowsMetafile',
            mime: 'application/x-msmetafile'
        },
        {
            format: 'xhtml',
            extension: 'xhtml',
            description: 'XHTML',
            mime: 'application/xhtml+xml'
        },
        {
            format: 'xpm',
            extension: 'xpm',
            description: 'XPixMap',
            mime: 'image/x-xpixmap'
        }
    ],
    presentation: [
        {
            format: 'bmp',
            extension: 'bmp',
            description: 'WindowsBitmap',
            mime: 'image/x-ms-bmp'
        },
        {
            format: 'emf',
            extension: 'emf',
            description: 'EnhancedMetafile',
            mime: 'application/x-msmetafile'
        },
        {
            format: 'eps',
            extension: 'eps',
            description: 'EncapsulatedPostScript',
            mime: 'application/postscript'
        },
        {
            format: 'fodp',
            extension: 'fodp',
            description: 'OpenDocumentPresentation(FlatXML)',
            mime: 'application/octet-stream'
        },
        {
            format: 'gif',
            extension: 'gif',
            description: 'GraphicsInterchangeFormat',
            mime: 'image/gif'
        },
        {
            format: 'html',
            extension: 'html',
            description: 'HTMLDocument(OpenOffice.orgImpress)',
            mime: 'text/html'
        },
        {
            format: 'jpg',
            extension: 'jpg',
            description: 'JointPhotographicExpertsGroup',
            mime: 'image/jpeg'
        },
        {
            format: 'met',
            extension: 'met',
            description: 'OS/2Metafile',
            mime: 'application/octet-stream'
        },
        {
            format: 'odg',
            extension: 'odg',
            description: 'ODFDrawing(Impress)',
            mime: 'application/vnd.oasis.opendocument.graphics'
        },
        {
            format: 'odp',
            extension: 'odp',
            description: 'ODFPresentation',
            mime: 'application/vnd.oasis.opendocument.presentation'
        },
        {
            format: 'otp',
            extension: 'otp',
            description: 'ODFPresentationTemplate',
            mime: 'application/vnd.oasis.opendocument.presentation-template'
        },
        {
            format: 'pbm',
            extension: 'pbm',
            description: 'PortableBitmap',
            mime: 'image/x-portable-bitmap'
        },
        {
            format: 'pct',
            extension: 'pct',
            description: 'MacPict',
            mime: 'image/x-pict'
        },
        {
            format: 'pdf',
            extension: 'pdf',
            description: 'PortableDocumentFormat',
            mime: 'application/pdf'
        },
        {
            format: 'pgm',
            extension: 'pgm',
            description: 'PortableGraymap',
            mime: 'image/x-portable-graymap'
        },
        {
            format: 'png',
            extension: 'png',
            description: 'PortableNetworkGraphic',
            mime: 'image/png'
        },
        {
            format: 'potm',
            extension: 'potm',
            description: 'MicrosoftPowerPoint2007/2010XMLTemplate',
            mime: 'application/vnd.ms-powerpoint.template.macroenabled.12'
        },
        {
            format: 'pot',
            extension: 'pot',
            description: 'MicrosoftPowerPoint97/2000/XPTemplate',
            mime: 'application/vnd.ms-powerpoint'
        },
        {
            format: 'ppm',
            extension: 'ppm',
            description: 'PortablePixelmap',
            mime: 'image/x-portable-pixmap'
        },
        {
            format: 'pptx',
            extension: 'pptx',
            description: 'MicrosoftPowerPoint2007/2010XML',
            mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        },
        {
            format: 'pps',
            extension: 'pps',
            description: 'MicrosoftPowerPoint97/2000/XP(Autoplay)',
            mime: 'application/vnd.ms-powerpoint'
        },
        {
            format: 'ppt',
            extension: 'ppt',
            description: 'MicrosoftPowerPoint97/2000/XP',
            mime: 'application/vnd.ms-powerpoint'
        },
        {
            format: 'pwp',
            extension: 'pwp',
            description: 'PlaceWare',
            mime: 'application/octet-stream'
        },
        {
            format: 'ras',
            extension: 'ras',
            description: 'SunRasterImage',
            mime: 'image/x-cmu-raster'
        },
        {
            format: 'sda',
            extension: 'sda',
            description: 'StarDraw5.0(OpenOffice.orgImpress)',
            mime: 'application/vnd.stardivision.draw'
        },
        {
            format: 'sdd',
            extension: 'sdd',
            description: 'StarImpress5.0',
            mime: 'application/vnd.stardivision.impress'
        },
        {
            format: 'sdd3',
            extension: 'sdd',
            description: 'StarDraw3.0(OpenOffice.orgImpress)',
            mime: 'application/vnd.stardivision.impress'
        },
        {
            format: 'sdd4',
            extension: 'sdd',
            description: 'StarImpress4.0',
            mime: 'application/vnd.stardivision.impress'
        },
        {
            format: 'sxd',
            extension: 'sxd',
            description: 'OpenOffice.org1.0Drawing(OpenOffice.orgImpress)',
            mime: 'application/vnd.sun.xml.draw'
        },
        {
            format: 'sti',
            extension: 'sti',
            description: 'OpenOffice.org1.0PresentationTemplate',
            mime: 'application/vnd.sun.xml.impress.template'
        },
        {
            format: 'svg',
            extension: 'svg',
            description: 'ScalableVectorGraphics',
            mime: 'image/svg+xml'
        },
        {
            format: 'svm',
            extension: 'svm',
            description: 'StarViewMetafile',
            mime: 'application/octet-stream'
        },
        {
            format: 'swf',
            extension: 'swf',
            description: 'MacromediaFlash(SWF)',
            mime: 'application/x-shockwave-flash'
        },
        {
            format: 'sxi',
            extension: 'sxi',
            description: 'OpenOffice.org1.0Presentation',
            mime: 'application/vnd.sun.xml.impress'
        },
        {
            format: 'tiff',
            extension: 'tiff',
            description: 'TaggedImageFileFormat',
            mime: 'image/tiff'
        },
        {
            format: 'uop',
            extension: 'uop',
            description: 'UnifiedOfficeFormatpresentation',
            mime: 'application/octet-stream'
        },
        {
            format: 'vor',
            extension: 'vor',
            description: 'StarImpress5.0Template',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'vor3',
            extension: 'vor',
            description: 'StarDraw3.0Template(OpenOffice.orgImpress)',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'vor4',
            extension: 'vor',
            description: 'StarImpress4.0Template',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'vor5',
            extension: 'vor',
            description: 'StarDraw5.0Template(OpenOffice.orgImpress)',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'wmf',
            extension: 'wmf',
            description: 'WindowsMetafile',
            mime: 'application/x-msmetafile'
        },
        {
            format: 'xhtml',
            extension: 'xml',
            description: 'XHTML',
            mime: 'text/xml'
        },
        {
            format: 'xpm',
            extension: 'xpm',
            description: 'XPixMap',
            mime: 'image/x-xpixmap'
        }
    ],
    spreadsheet: [
        {
            format: 'csv',
            extension: 'csv',
            description: 'TextCSV',
            mime: 'text/csv'
        },
        {
            format: 'dbf',
            extension: 'dbf',
            description: 'dBASE',
            mime: 'application/octet-stream'
        },
        {
            format: 'dif',
            extension: 'dif',
            description: 'DataInterchangeFormat',
            mime: 'application/octet-stream'
        },
        {
            format: 'fods',
            extension: 'fods',
            description: 'OpenDocumentSpreadsheet(FlatXML)',
            mime: 'application/octet-stream'
        },
        {
            format: 'html',
            extension: 'html',
            description: 'HTMLDocument(OpenOffice.orgCalc)',
            mime: 'text/html'
        },
        {
            format: 'ods',
            extension: 'ods',
            description: 'ODFSpreadsheet',
            mime: 'application/vnd.oasis.opendocument.spreadsheet'
        },
        {
            format: 'ooxml',
            extension: 'xml',
            description: 'MicrosoftExcel2003XML',
            mime: 'text/xml'
        },
        {
            format: 'ots',
            extension: 'ots',
            description: 'ODFSpreadsheetTemplate',
            mime: 'application/vnd.oasis.opendocument.spreadsheet-template'
        },
        {
            format: 'pdf',
            extension: 'pdf',
            description: 'PortableDocumentFormat',
            mime: 'application/pdf'
        },
        {
            format: 'pxl',
            extension: 'pxl',
            description: 'PocketExcel',
            mime: 'application/octet-stream'
        },
        {
            format: 'sdc',
            extension: 'sdc',
            description: 'StarCalc5.0',
            mime: 'application/vnd.stardivision.calc'
        },
        {
            format: 'sdc4',
            extension: 'sdc',
            description: 'StarCalc4.0',
            mime: 'application/vnd.stardivision.calc'
        },
        {
            format: 'sdc3',
            extension: 'sdc',
            description: 'StarCalc3.0',
            mime: 'application/vnd.stardivision.calc'
        },
        {
            format: 'slk',
            extension: 'slk',
            description: 'SYLK',
            mime: 'application/octet-stream'
        },
        {
            format: 'stc',
            extension: 'stc',
            description: 'OpenOffice.org1.0SpreadsheetTemplate',
            mime: 'application/vnd.sun.xml.calc.template'
        },
        {
            format: 'sxc',
            extension: 'sxc',
            description: 'OpenOffice.org1.0Spreadsheet',
            mime: 'application/vnd.sun.xml.calc'
        },
        {
            format: 'uos',
            extension: 'uos',
            description: 'UnifiedOfficeFormatspreadsheet',
            mime: 'application/octet-stream'
        },
        {
            format: 'vor3',
            extension: 'vor',
            description: 'StarCalc3.0Template',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'vor4',
            extension: 'vor',
            description: 'StarCalc4.0Template',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'vor',
            extension: 'vor',
            description: 'StarCalc5.0Template',
            mime: 'application/vnd.stardivision.writer'
        },
        {
            format: 'xhtml',
            extension: 'xhtml',
            description: 'XHTML',
            mime: 'application/xhtml+xml'
        },
        {
            format: 'xls',
            extension: 'xls',
            description: 'MicrosoftExcel97/2000/XP',
            mime: 'application/vnd.ms-excel'
        },
        {
            format: 'xls5',
            extension: 'xls',
            description: 'MicrosoftExcel5.0',
            mime: 'application/vnd.ms-excel'
        },
        {
            format: 'xls95',
            extension: 'xls',
            description: 'MicrosoftExcel95',
            mime: 'application/vnd.ms-excel'
        },
        {
            format: 'xlt',
            extension: 'xlt',
            description: 'MicrosoftExcel97/2000/XPTemplate',
            mime: 'application/vnd.ms-excel'
        },
        {
            format: 'xlt5',
            extension: 'xlt',
            description: 'MicrosoftExcel5.0Template',
            mime: 'application/vnd.ms-excel'
        },
        {
            format: 'xlt95',
            extension: 'xlt',
            description: 'MicrosoftExcel95Template',
            mime: 'application/vnd.ms-excel'
        },
        {
            format: 'xlsx',
            extension: 'xlsx',
            description: 'MicrosoftExcel2007/2010XML',
            mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }
    ]
}
```

