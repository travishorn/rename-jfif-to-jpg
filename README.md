# Rename JFIF to JPG

Recursively rename .jfif files to .jpg

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

Either click the **Clone or download** button above, or clone the repository

```
git clone https://github.com/travishorn/rename-jfif-to-jpg.git
```

Change into the directory

```
cd rename-jfif-to-jpg
```

Install dependencies

```
npm install
```

## Usage

Put all of your jfif files into a subdirectory called `photos`

Run the conversion

```
node convert.js
```

All jfif files in the `photos` directory and any subdirectories will have their
extensions renamed to jpg

## License

The MIT License

Copyright 2020 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.