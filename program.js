process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {

    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

        switch (instruction) {
            case 'info':
                process.stdout.write('Version:' + process.versions.node + '.\n');
                break;

            case 'lang':
                process.stdout.write('Language: ' + process.env.lang + '.\n');
                break;

            case 'exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;

            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
    }
});