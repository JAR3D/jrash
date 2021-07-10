const React = require('react');

const useWindowResize = () => {
    const [winDim, setWinDim] = React.useState({x:-1, y:-1});

    React.useEffect(() => {
        const resizeHandler = (e) => {
            setWinDim({
                x:document.body.clientWidth,
                y:document.body.clientHeight,
            })
        }

        if(window){
            window.addEventListener('resize', resizeHandler)
        }

        return () => window.removeEventListener('resize', resizeHandler)
    }, [window])

    return { winDim };
}

exports.useWindowResize = useWindowResize;