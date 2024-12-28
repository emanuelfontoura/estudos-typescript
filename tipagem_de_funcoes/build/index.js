function bootstrap(dirname, args) {
    return true;
}
bootstrap('import.meta.dirname', [1, 'oi']);
const main = (args) => true;
// main(1) // erro
main('2'); // correto
const fnc = {
    execute(args) {
        return true;
    },
    handle(req, res) {
    },
};
function customLog(text, options = {}) {
    const { color = "green", time, author } = options;
    if (color)
        console.log(text + ' ' + color);
    if (time)
        console.log('At: ' + time.toString());
    if (author)
        console.log('By: ' + author);
}
customLog('Hello World', {
    color: "blue",
    time: new Date(),
    author: 'Marie'
});
export {};
