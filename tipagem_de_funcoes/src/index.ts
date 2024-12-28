// TIPAGEM DE FUNCOES
type Args = string | number | boolean
function bootstrap(dirname : string, args? : Args[]):boolean{
    return true
}

bootstrap('import.meta.dirname', [1, 'oi'])

type MainFunction = (args: string) => boolean
const main : MainFunction = (args) => true

// main(1) // erro
main('2') // correto

interface Functions {
    execute(args:string) : boolean
    handle(req: Request, res: Response) : void
}

const fnc : Functions = {
    execute(args) {
        return true
    },
    handle(req, res) {
        
    },
}

//

interface CustomLogOptions {
    color?: string,
    time?:Date,
    author?:string
}
function customLog (text:string, options:CustomLogOptions = {}):void{
    const {color="green", time, author} = options
    if(color) console.log(text + ' ' + color)
    if(time) console.log('At: ' + time.toString())
    if(author) console.log('By: ' + author)
}

customLog('Hello World', {
    color: "blue",
    time: new Date(),
    author: 'Marie'
})