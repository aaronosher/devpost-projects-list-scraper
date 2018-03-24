import rp from 'request-promise'

function proccessRequest(options) {
    return rp(options)
        .then(($) => {
            try {
                let projects = [];
                $('.link-to-software').each((i, elem) => {
                    // console.log(elem.attribs.href)
                    if (elem.attribs) {
                        projects.push(elem.attribs.href)
                    }
                })
                return Promise.resolve(projects)
            } catch (e) {
                return Promise.reject(e)
            }
        })
}

export default proccessRequest