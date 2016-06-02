import program from 'commander';

program.version('0.0.1')
        .option('-d, --directory [directory]', 'Specify a directory default is current directory')
        .option('-p, --prefix [prefix]', 'Specify a file prefix default is none')
        .option('-a, --annex [annex]', 'Specify a file annex eg -test or -2')
        .option('-n, --name [name]', 'Specify the resultant file name default is result.csv')
        .parse(process.argv);

export default program;
