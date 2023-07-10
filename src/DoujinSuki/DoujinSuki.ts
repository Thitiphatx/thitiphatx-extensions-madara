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

const DOMAIN = 'https://doujin-suki.com'

export const DoujinSukiInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'Doujin-Suki',
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

export class DoujinSuki extends Madara {

    baseUrl: string = DOMAIN

    override alternativeChapterAjaxEndpoint = true
    override usePostIds = false
    override hasAdvancedSearchPage = true
    override directoryPath = 'doujin'
}