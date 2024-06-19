import React from 'react'

const style = {
    dark: {
        backgroundColor: "black",
        color: "white"
    },
    orange: {
        backgroundColor: "orange",
        color: "white"
    },
    red: {
        backgroundColor: "red",
        color: "white"
    },
    violet: {
        backgroundColor: "violet",
        color: "white"
    }
}

function HOC(WrappedComp) {
    return function (args) {
        let temp = {};
        args.dark ? temp = { ...style.dark } : args.orange ? temp = { ...style.orange } : args.red ? temp = { ...style.red } : args.violet ? temp = { ...style.violet } : temp = {}
        let obj = { ...args, style: temp }
        console.log("obj", obj.style);
        return <WrappedComp {...obj} />

    }
}

export default HOC
