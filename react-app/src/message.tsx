function Message(){
    // JSX: JavaScript XML
    const name = 'Jake';
    if(!name)
        return <h1>Hello World</h1>;
    return <h1>Hi, {name}</h1>;
}

export default Message;