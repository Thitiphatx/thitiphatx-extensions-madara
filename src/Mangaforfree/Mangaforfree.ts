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

const DOMAIN = 'https://mangaforfree.com'

export const MangaforfreeInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'Mangaforfree',
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
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED
}

export class Mangaforfree extends Madara {

    baseUrl: string = DOMAIN

    override alternativeChapterAjaxEndpoint = false
    override usePostIds = false
}