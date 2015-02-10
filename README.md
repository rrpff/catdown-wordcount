# catdown-wordcount

Catdown plugin. Emits a "wordcount" event with a number and a pluralised string every time the editor is changed.

## Usage

Install with `npm`.

```bash
$ npm install --save catdown-wordcount
```

`use` it on your Catdown editor.

```js
editor.use(require("catdown-wordcount"));
```

Then bind some events to it.

```js
editor.on("wordcount", function(num, msg){
	// num === 2
	// msg === "2 words"
});
```