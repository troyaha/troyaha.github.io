var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;
                        font-size: 50px;`
    var index = 0
    return function ( message ) {
        var num = index
        setTimeout (
            () => container.textContent += message [ num ],
            500 * velocity * num
        )
        index++ < message.length - 1 ? arguments.callee ( message ) : null
    }
})( 1 )

typeMessage ( `С Днем Рождения!)` )