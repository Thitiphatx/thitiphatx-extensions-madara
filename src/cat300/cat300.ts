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
    version: getExportVersion('0.0.0'),
    name: 'Cat300',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'Thitiphatx',
    authorWebsite: 'http://github.com/Thitiphatx',
    icon: 'icon.png',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: DOMAIN,
    sourceTags: [
        {
            text: 'Notifications',
            type: TagType.GREEN
        },
        {
            text: '18+',
            type: TagType.YELLOW
        },
    ]
}

export class cat300 extends Madara {

    baseUrl: string = DOMAIN

    languageCode: LanguageCode = LanguageCode.THAI

    override hasAdvancedSearchPage = true

    override userAgent = false

    override alternativeChapterAjaxEndpoint = false
}
