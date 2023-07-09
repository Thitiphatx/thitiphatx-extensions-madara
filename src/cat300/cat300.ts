import {
    ContentRating,
    SourceInfo,
    BadgeColor,
    SourceIntents
} from '@paperback/types'

import {
    getExportVersion,
    Madara
} from '../Madara'

const DOMAIN = 'https://cat300.com'

export const cat300Info: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'cat300',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'Thitiphatx',
    authorWebsite: 'http://github.com/Thitiphatx',
    icon: 'icon.png',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: DOMAIN,
    sourceTags: [
        {
            text: '18+',
            type: BadgeColor.YELLOW
        }
    ],
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS
}

export class cat300 extends Madara {

    baseUrl: string = DOMAIN

    override alternativeChapterAjaxEndpoint = true
    override usePostIds = false
    override hasAdvancedSearchPage = true
}