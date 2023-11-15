declare const io:any;
const url = 'http://localhost:3000';
const serve = io(url);

const connect = () => {
    serve.on('connect' , () => {
        console.log( 'socket 链接', serve.id);
    });

    serve.on('passageUpdate' , () => {
        
    });
}

export const usePassageSocket = () => {
    return {connect}
}