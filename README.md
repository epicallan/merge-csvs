
# Merge-csvs

> Description
  merges csv files in the current directory or specified directory into one file.
  A command line API is made available on global install that can be used E.g

  ```
  $ merge-csvs --prefix test
  ```
# Options
```
Usage: merge-csvs [options]

 Options:

   -h, --help                   output usage information
   -V, --version                output the version number
   -d, --directory [directory]  Specify a directory default is current directory
   -p, --prefix [prefix]        Specify a file prefix default is none
   -a, --annex [annex]          Specify a file annex eg -test or -2
   -n, --name [name]            Specify the resultant file name default is result.csv
```

## Installation for development

```
$ npm install
```

```
$ npm run dev

```
CD / move into the directory with the csvs you want to merge and run

```
$ merge-csvs
```

## Run in Production
Adds the module's main script to your systems path(See the bin key in package.json)
```
$  npm run build && npm link
```

CD / move into the directory with the csvs you want to merge and run

```
 $ merge-csvs
```

## Note

> Make sure you have the right path to the nodeJs executable in the [index.js file](https://github.com/epicallan/merge-csvs/blob/master/index.js#L1)

## License
MIT © [Allan](http://github.com/epicallan)
