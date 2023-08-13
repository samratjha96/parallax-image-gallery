const { useEffect, useState } = require('react')

const useDimension = () => {
    const [dimension, setDimension] = useState({width: 0, height: 0})
    const updatedDimension = () => {
        const { innerWidth, innerHeight } = window
        setDimension({width: innerWidth, height: innerHeight})
    }
    useEffect(() => {
        updatedDimension()
        window.addEventListener('resize', updatedDimension);
        return () => {window.removeEventListener("resize", updatedDimension)}
    }, [])
    return dimension
}

export default useDimension