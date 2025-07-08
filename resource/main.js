function print(text) {console.log(text)}

function timeout(ms) {return new Promise(resolve => setTimeout(resolve,ms))}

async function getFetch(path,type) {
    try {
        let req = new Request("https://" + location.host + "/" + path)
        let res = await fetch(req)

        return await res[type || "json"]()
    }
    catch (err) {
        console.log("getFecth err: " + err)

        await timeout(4000)
        
        return await getFetch(path,type) 
    }
}

async function getFetchURL(url,type) {
    try {
        let req = new Request(url)
        let res = await fetch(req)

        return await res[type || "json"]()
    }
    catch (err) {
        console.log("getFecth err: " + err)

        await timeout(4000)
        
        return await getFetchURL(url,type) 
    }
}

function createElement(name,parent) {
    let element = document.createElement(name)

    if (parent) {parent.appendChild(element)}

    return element
}