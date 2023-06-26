import {
    ContentRating,
    LanguageCode,
    SourceInfo,
    TagType
} from 'paperback-extensions-common'
import {
    getExportVersion,
    Madara
} from '../Madara'

const DOMAIN = 'https://cat300.com'

export const cat300Info: SourceInfo = {
    version: getExportVersion('0.0.1'),
    name: 'cat300',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'Thitiphatx',
    authorWebsite: 'http://github.com/Thitiphatx',
    icon: 'icon.png',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: DOMAIN,
    sourceTags: [
        {
            text: 'Notifications',
            type: TagType.GREEN
        }
    ]
}

export class cat300 extends Madara {

    baseUrl: string = DOMAIN

    languageCode: LanguageCode = LanguageCode.ENGLISH

    override hasAdvancedSearchPage = true

    override sourceTraversalPathName = 'mangas'
    
    override alternativeChapterAjaxEndpoint = true
}
