import sources from './sources'
import cheerio from 'cheerio'
import proccessRequest from './getProjects'

/**
 * Gets projects for page
 * @param {number} page 
 */
function getProjects(page) {

    let options = {
        uri: sources.devpost + page,
        transform: (body) => {
            return cheerio.load(body)
        }
    }

    return proccessRequest(options)
}

export default getProjects
