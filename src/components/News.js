import React, { Component } from 'react'
import { NewsItem } from './NewsItem';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "Tom Fornelli",
            "title": "Iowa vs. Penn State score, takeaways: No. 3 Hawkeyes win top-five battle behind dominant defense - CBSSports.com",
            "description": "Iowa now sets its sights on an undefeated regular season after dispatching its toughest opponent",
            "url": "https://www.cbssports.com/college-football/news/iowa-vs-penn-state-score-takeaways-no-3-hawkeyes-win-top-five-battle-behind-dominant-defense/live/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/10/09/942e6081-bd1c-4c93-8951-d1617faf9163/thumbnail/1200x675/77d60dee9f0526697759cf6a350e4547/iowa-defense-flexing-g.png",
            "publishedAt": "2021-10-10T00:31:00Z",
            "content": "Roaring back from a two-touchdown deficit in the first half, No. 3 Iowa used a stellar defensive effort with some key breakaway plays on offense to pick up a 23-20 win over  No. 4 Penn State, keeping… [+6123 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBC New York"
            },
            "author": "NBC New York",
            "title": "Unruly Passenger Questioned After NYC Flight Makes Emergency Landing: Officials - NBC New York",
            "description": "A potential security concern prompted an emergency landing at LaGuardia Airport and led police to place one of the plane’s passengers into custody for…",
            "url": "https://www.nbcnewyork.com/news/local/plane-makes-emergency-landing-at-laguardia-airport-fdny/3315051/",
            "urlToImage": "https://media.nbcnewyork.com/2021/10/laguardia-emergency-landing.png?resize=1200%2C675&quality=85&strip=all",
            "publishedAt": "2021-10-10T00:08:12Z",
            "content": "A potential security concern prompted an emergency landing at LaGuardia Airport and led police to place one of the plane's passengers into custody for questioning, federal and airline officials confi… [+1353 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": null,
            "title": "Allen West, Texas GOP gubernatorial hopeful, has COVID-19 - Associated Press",
            "description": "GARLAND, Texas (AP) — Tea party firebrand Allen West, a candidate for the Republican nomination for governor of Texas, said Saturday that he has received monoclonal antibody injections after being diagnosed with COVID-19 pneumonia.",
            "url": "https://apnews.com/article/coronavirus-pandemic-allen-west-texas-pneumonia-health-03839ff2547c8895fb0e4f155705322a",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/dffb198beb5b412d9295612b95dbb775/3000.jpeg",
            "publishedAt": "2021-10-10T00:00:34Z",
            "content": "GARLAND, Texas (AP) Tea party firebrand Allen West, a candidate for the Republican nomination for governor of Texas, said Saturday that he has received monoclonal antibody injections after being diag… [+1905 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Colombian nun kidnapped in Mali in 2017 is freed - BBC News",
            "description": "Gloria Cecilia Narváez was kidnapped by Islamist militants while working as a missionary.",
            "url": "https://www.bbc.com/news/world-africa-58859526",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6AA5/production/_121010372_nun.jpg",
            "publishedAt": "2021-10-09T23:49:48Z",
            "content": "Image source, Malian President's office\r\nA Colombian nun kidnapped by Islamists in Mali four years ago has been freed.\r\nGloria Cecilia Narváez was taken hostage in 2017 while working as a missionary … [+2379 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Sonnet Swire and Veronica Stracqualursi, CNN",
            "title": "Army Gen. Raymond Odierno, who commanded Iraq War strategy, dies at 67 - CNN",
            "description": "Gen. Ray Odierno, a retired four-star Army general who commanded US troops during the Iraq War, died Friday of cancer, according to Army spokesman Lt. Col. Terence M. Kelly.",
            "url": "https://www.cnn.com/2021/10/09/politics/army-gen-ray-odierno-dead/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211009180237-restricted-ray-odierno-2018-super-tease.jpg",
            "publishedAt": "2021-10-09T23:09:00Z",
            "content": "(CNN)Gen. Ray Odierno, a retired four-star Army general who commanded US troops during the Iraq War, died Friday of cancer, according to Army spokesman Lt. Col. Terence M. Kelly.\r\nKelly provided a st… [+2777 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Dave Wilson",
            "title": "Freshman Caleb Williams takes over at QB, ignites Oklahoma offense in 'epic' Red River Showdown comeback - ESPN",
            "description": "Oklahoma's Lincoln Riley said he didn't know if he'd \"ever been prouder of a team\" after the sixth-ranked Sooners rallied from a 21-point first-quarter deficit Saturday behind freshman QB Caleb Williams in the latest edition of the Red River Showdown.",
            "url": "https://www.espn.com/college-football/story/_/id/32368467/freshman-caleb-williams-takes-qb-ignites-oklahoma-offense-epic-red-river-showdown-comeback",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1009%2Fr920629_1296x729_16%2D9.jpg",
            "publishedAt": "2021-10-09T22:45:58Z",
            "content": "In another Texas-Oklahoma classic, Lincoln Riley's quarterback switch propelled the sixth-ranked Sooners to a historic comeback.\r\nAlready in a deep hole in the second quarter, OU quarterback Spencer … [+3427 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Lauryn Overhultz",
            "title": "Kim Kardashian and Kanye West spotted leaving Ritz Carlton ahead of her first 'SNL' appearance - Fox News",
            "description": "Kim Kardashian and estranged husband Kanye West were seen leaving the Ritz Carlton together hours before the reality star is set to host \"Saturday Night Live.\"",
            "url": "https://www.foxnews.com/entertainment/kim-kardashian-kanye-west-leave-ritz-carlton-ahead-snl-hosting",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/SINGLE_USE_ONLY_BACKGRID_Kim_Kanye_SNL_Display.jpg",
            "publishedAt": "2021-10-09T22:33:59Z",
            "content": "Kim Kardashian and estranged husband Kanye West were spotted leaving the Ritz Carlton hotel in New York City ahead of the reality star's hosting duties on Saturday. \r\nKardashian, 40, will make her fi… [+1809 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Elaine Yu",
            "title": "China’s Xi Emphasizes ‘Peaceful Reunification’ With Taiwan, Days After Record Show of Force - The Wall Street Journal",
            "description": "Remarks part of speech to mark 110th anniversary of revolution that overturned imperial rule",
            "url": "https://www.wsj.com/articles/chinas-xi-emphasizes-peaceful-reunification-with-taiwan-days-after-record-show-of-force-11633823669",
            "urlToImage": "https://images.wsj.net/im-414620/social",
            "publishedAt": "2021-10-09T22:00:00Z",
            "content": "HONG KONGChinese President Xi Jinping called for a peaceful reunification with Taiwan days after Chinas Peoples Liberation Army sent a record 56 bombers and other aircraft on sorties near the self-ru… [+274 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vulture"
            },
            "author": "Alejandra Gularte",
            "title": "Adele’s First Instagram Live Includes Sneak Peek of ‘Easy on Me’ - Vulture",
            "description": "“I’m gonna get in trouble.”",
            "url": "http://www.vulture.com/2021/10/watch-adeles-ig-live-includes-sneak-peek-of-easy-on-me.html",
            "urlToImage": "https://pyxis.nymag.com/v1/imgs/7d2/662/7e002c5dd331054758fc740f0e5e96972d-adele.1x.rsocial.w1200.jpg",
            "publishedAt": "2021-10-09T21:24:11Z",
            "content": "Adele went live on Instagram Saturday and surprised fans by playing a snippet of her upcoming single, Easy on Me. The short preview featured heartbreaking lyrics like, And there is hope in these wate… [+1032 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Notebookcheck.net"
            },
            "author": "Alex Alderson",
            "title": "Google Pixel 6 Pro: Leaked assembly video confirms impressive battery capacity, copper cooling and non-uniform display bezels - Notebookcheck.net",
            "description": "A Pixel 6 Pro assembly video has leaked, confirming several aspects about the device in the process. The video also contains a hands-on photo of the Pixel 6 Pro's front, nearly two weeks before Google unveils the device.",
            "url": "https://www.notebookcheck.net/Google-Pixel-6-Pro-Leaked-assembly-video-confirms-impressive-battery-capacity-copper-cooling-and-non-uniform-display-bezels.570540.0.html",
            "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Screenshot_2021_10_09_153014.png",
            "publishedAt": "2021-10-09T20:53:36Z",
            "content": "We are still a few weeks from the Pixel 6 series' official unveiling. However, a Pixel 6 Pro assembly video has leaked online, as have two retailer listings. As we have discussed, the latter confirms… [+1197 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Associated Press",
            "title": "Rome protesters clash with police as thousands pack the streets in opposition to COVID vaccine rule - Fox News",
            "description": "Thousands of demonstrators marched down Rome’s Via Veneto and other main streets on Saturday, some clashing with police, to protest a government rule requiring COVID-19 vaccines or negative tests to access workplaces next week.",
            "url": "https://www.foxnews.com/world/marchers-rome-protest-work-vaccine-rule",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/Rome-covid-protest-4.jpg",
            "publishedAt": "2021-10-09T20:21:42Z",
            "content": "Thousands of demonstrators marched down Romes Via Veneto and other main streets on Saturday, some clashing with police, to protest a government rule requiring COVID-19 vaccines or negative tests to a… [+2254 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Chris Cwik",
            "title": "George Kittle placed on injured reserve and will miss at least three weeks due to calf injury - Yahoo Sports",
            "description": "George Kittle, David Montgomery and Jaire Alexander all hit injured reserve on Saturday.",
            "url": "https://sports.yahoo.com/george-kittle-placed-on-injured-reserve-and-will-miss-at-least-three-weeks-due-to-calf-injury-201409304.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/oat1ySlG.5rR.G2Hcxxh.w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MjU-/https://s.yimg.com/os/creatr-uploaded-images/2021-10/d80c63f0-293c-11ec-8f7e-b2ed37336542",
            "publishedAt": "2021-10-09T20:14:09Z",
            "content": "San Francisco 49ers rookie quarterback Trey Lance won't have his most dangerous offensive weapon in his first start. Tight end George Kittle was placed on injured reserve on Saturday due to a calf in… [+2166 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Reuters",
            "title": "First Berlin Teslas could come next month, Elon Musk tells fans - CNBC",
            "description": "Elon Musk told Tesla fans in Berlin that the first cars from its new Berlin factory could roll off the production line as early as next month.",
            "url": "https://www.cnbc.com/2021/10/09/first-berlin-teslas-could-come-next-month-elon-musk-tells-fans.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106926992-1628885077267-elon.jpg?v=1628885182",
            "publishedAt": "2021-10-09T19:36:45Z",
            "content": "The first cars to emerge from Tesla's new Berlin factory should roll off the production line as early as next month, CEO Elon Musk said at the site of the plant on Saturday, but added that volume pro… [+2406 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Martin Pengelly, Charles Kaiser",
            "title": "Facebook whistleblower testimony should prompt new oversight – Schiff - The Guardian",
            "description": "‘I think we need regulation to protect people’s private data,’ influential Democrat says in wake of Frances Haugen revelations",
            "url": "https://amp.theguardian.com/technology/2021/oct/09/facebook-whistleblower-testimony-frances-haugen-adam-schiff",
            "urlToImage": "https://i.guim.co.uk/img/media/b22efe9527c74c1c5f247ab3757d9570e35b527d/0_0_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=59ba18eeb8f237a3485e7c23db1832c5",
            "publishedAt": "2021-10-09T19:36:00Z",
            "content": "Testimony in Congress this week by the whistleblower Frances Haugen should prompt action to implement meaningful oversight of Facebook and other tech giants, the influential California Democrat Adam … [+3242 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Stephanie Halasz, CNN",
            "title": "Austrian Chancellor Sebastian Kurz resigns amid corruption scandal - CNN",
            "description": "Austria's Chancellor Sebastian Kurz said in a televised speech he was stepping down from his office Saturday evening following corruption allegations.",
            "url": "https://www.cnn.com/2021/10/09/europe/sebastian-kurz-resigns-austria-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190527152754-01-sebastian-kurz-0527-super-tease.jpg",
            "publishedAt": "2021-10-09T19:07:00Z",
            "content": "(CNN)Austrian leader Sebastian Kurz said he was stepping down from his office Saturday evening, days after his office was raided by Austrian prosecutors investigating him and close team members on su… [+1248 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MMA Fighting"
            },
            "author": "MMA Fighting Newswire",
            "title": "Tyson Fury vs. Deontay Wilder full fight video - MMA Fighting",
            "description": "The Tyson Fury vs. Deontay Wilder full fight video has the first two meetings between these two legends.",
            "url": "https://www.mmafighting.com/2021/10/9/22716918/tyson-fury-vs-deontay-wilder-full-fight-video",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/se5CiJhCw72nqVXEmWpCQ9fnISE=/0x0:3130x1639/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22911146/1202997541.jpg",
            "publishedAt": "2021-10-09T19:00:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "BISWAJEET BANERJEE",
            "title": "Police arrest Indian minister's son in killing of farmers - Yahoo News",
            "description": "Indian police on Saturday arrested the son of a junior minister in Prime Minister Narendra Modi’s government as a suspect days after nine people were killed ...",
            "url": "https://news.yahoo.com/police-arrest-indian-ministers-son-185502532.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/.60QNPzTLa7CauVRKqW96g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDI-/https://s.yimg.com/uu/api/res/1.2/lXVisMyKZltZMfXdy7Bw9g--~B/aD0zMzE4O3c9NDk2MzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/ap.org/82949bf749eb29d721f59cf74b51ddc4",
            "publishedAt": "2021-10-09T18:55:02Z",
            "content": "LUCKNOW, India (AP) Indian police on Saturday arrested the son of a junior minister in Prime Minister Narendra Modis government as a suspect days after nine people were killed in a deadly escalation … [+2686 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Peter Aitken",
            "title": "GOP senators bash weak jobs report, Biden's talk of 'progress' - Fox Business",
            "description": "Republican senators have blasted the latest disappointing jobs report, as well as President Biden's efforts to portray the shortage as part of \"progress.\"",
            "url": "https://www.foxbusiness.com/politics/gop-senators-bash-weak-jobs-report-biden-progress",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/10/0/0/Biden-build-thumb.jpg?ve=1&tl=1",
            "publishedAt": "2021-10-09T18:45:16Z",
            "content": "Republican senators, including possible presidential hopefuls, have blasted the latest disappointing jobs report, as well as President Biden’s efforts to portray the shortage as part of \"progress.\" \r… [+3216 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9News.com KUSA"
            },
            "author": "Alexia Carrasco",
            "title": "Larimer County health officials asking community to help stop spread of COVID-19 - 9News.com KUSA",
            "description": "The Larimer County Department of Health and Environment is urging the community to help prevent the spread of COVID-19 as the fall months approach.",
            "url": "https://www.9news.com/article/news/health/coronavirus/larimer-county-health-officials-rise-covid19-hospitalizations/73-2a6957d2-fe67-4bae-a59c-d56fe4a27dac",
            "urlToImage": "https://media.9news.com/assets/KUSA/images/559e88c0-a0f2-497d-94f4-bf2f6f032274/559e88c0-a0f2-497d-94f4-bf2f6f032274_1140x641.jpg",
            "publishedAt": "2021-10-09T17:56:00Z",
            "content": "LARIMER COUNTY, Colo. Health officials in Larimer County urge residents to get vaccinated and wear their masks as the fall and winter months approach to help keep hospitalizations down. \r\nThe Larimer… [+1887 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Kim Lyons",
            "title": "Boeing Starliner test flight delayed until 2022 - The Verge",
            "description": "A test flight for Boeing’s Starliner spacecraft has been pushed back to 2022. The craft is meant to be part of  NASA’s Commercial Crew Program that will take passengers to and from the International Space Station.",
            "url": "https://www.theverge.com/2021/10/9/22718002/boeing-starliner-test-flight-delayed-nasa-2022",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/eXO9tWiBPKsZl_N7Hs9sZnflwS4=/0x399:5568x3314/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22912966/1234298178.jpg",
            "publishedAt": "2021-10-09T17:52:06Z",
            "content": "The spacecraft has been plagued by technical problems\r\nA test flight for Boeings Starliner has been pushed back to 2022\r\nNASA/Joel Kowsky\r\nNASA has officially pushed back the launch of its Orbital Fl… [+1657 chars]"
        }
    ]

    constructor() {
        super();
        console.log('hello from news component');
        this.state = {
            articles: this.articles
        }
    }

   /*  async componentDidMount(){
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f726607cf9ce4c5c83444169551334a2';
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
    } */

    render() {
        return (
            <div className='container my-3'>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-4" key={element.url}>
                                    <NewsItem 
                                        title={element.title.slice(0,40)} 
                                        description={element.description.slice(0,75)} 
                                        newsUrl = {element.url} 
                                        imageUrl = {element.urlToImage} />
                                </div>

                    })}
                </div>
            </div>
        )
    }
}

export default News
