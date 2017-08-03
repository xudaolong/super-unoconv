'use strict';

const isFunction = require('lodash.isfunction');
const childProcess = require('child_process');
const mime = require('mime');

class SuperUnoconv {

    constructor() {

    }

    /**
     * Convert a document.
     *
     * @param {String} file
     * @param {String} outputFormat
     * @param {Object|Function} options
     * @param {Function} callback
     * @api public
     */
    convert(file, outputFormat, options, callback) {

        let args,
            bin = 'unoconv';

        if (isFunction(options)) {
            callback = options;
            options = null;
        }

        args = [
            `-f ${outputFormat}`,
        ];

        // if you need specify document output basename, filename or directory
        if (options && options.output) {
            args.push(`-o ${options.output}`);
        }

        // if your document have password
        if (options && options.password) {
            args.push(`--password ${options.password}`);
        }

        if (options && options.port) {
            args.push(`-p ${options.port}`);
        }

        // if you want to keep timestamp and permissions of the original document
        if (options && options.preserve) {
            args.push(`--preserve`);
        }

        args.push(file);

        if (options && options.bin) {
            bin = options.bin;
        }

        let timeout;
        if (options && options.timeout) {
            timeout = options.timeout;
        }

        childProcess.exec(`${bin} ${args.join(' ')}`, {
            timeout: timeout || 30000
        }, (err, stdout, stderr) => {
            if (err) {
                return callback(err, null, null);
            }
            if (stderr) {
                return callback(null, null, new Error(stderr.toString()));
            }
            callback(null, stdout, null);
        });
    }

    /**
     * Start a listener.
     *
     * @param {Object} options
     * @return {ChildProcess}
     * @api public
     */
    listen(options) {
        let args,
            bin = 'unoconv';

        args = ['--listener'];

        if (options && options.port) {
            args.push('-p' + options.port);
        }

        if (options && options.bin) {
            bin = options.bin;
        }

        return childProcess.spawn(bin, args);
    }


    /**
     * Detect supported conversion formats.
     *
     * @param {Object|Function} options
     * @param {Function} callback
     */
    detectSupportedFormats(options, callback) {
        let docType,
            detectedFormats = {
                document: [],
                graphics: [],
                presentation: [],
                spreadsheet: []
            },
            bin = 'unoconv';

        if (isFunction(options)) {
            callback = options;
            options = null;
        }

        if (options && options.bin) {
            bin = options.bin;
        }

        childProcess.execFile(bin, ['--show'], (err, stdout, stderr) => {
            if (err) {
                return callback(err);
            }

            // For some reason --show outputs to stderr instead of stdout
            let lines = stderr.split('\n');

            lines.forEach((line) => {
                if (line === 'The following list of document formats are currently available:') {
                    docType = 'document';
                } else if (line === 'The following list of graphics formats are currently available:') {
                    docType = 'graphics';
                } else if (line === 'The following list of presentation formats are currently available:') {
                    docType = 'presentation';
                } else if (line === 'The following list of spreadsheet formats are currently available:') {
                    docType = 'spreadsheet';
                } else {
                    let format = line.match(/^(.*)-/);

                    if (format) {
                        format = format[1].trim();
                    }

                    let extension = line.match(/\[(.*)\]/);

                    if (extension) {
                        extension = extension[1].trim().replace('.', '');
                    }

                    let description = line.match(/-(.*)\[/);

                    if (description) {
                        description = description[1].trim();
                    }

                    if (format && extension && description) {
                        detectedFormats[docType].push({
                            'format': format,
                            'extension': extension,
                            'description': description,
                            'mime': mime.lookup(extension)
                        });
                    }
                }
            });

            if (detectedFormats.document.length < 1 &&
                detectedFormats.graphics.length < 1 &&
                detectedFormats.presentation.length < 1 &&
                detectedFormats.spreadsheet.length < 1) {
                return callback(new Error('Unable to detect supported formats'));
            }

            callback(null, detectedFormats);
        });
    }
}

module.exports = new SuperUnoconv();
