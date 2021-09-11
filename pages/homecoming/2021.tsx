import * as React from "react";
import Img from "react-optimized-image";
import ArtAndSpark from "../../data/images/homecoming/2021/art_and_spark.png";
import Banner from "../../data/images/homecoming/2021/banner.png";
import DonateDetails from "../../data/images/homecoming/donate_details.png";
import Paypal from "../../data/images/paypal.png";
import Layout from "../../lib/layout/index";
import Markdown from "../../lib/markdown";
import styles from "./2021.module.css";

import Item2 from "../../data/images/homecoming/2021/item2.jpg";
import Item3 from "../../data/images/homecoming/2021/item3.jpg";
import Item5 from "../../data/images/homecoming/2021/item5.jpg";
import Item6 from "../../data/images/homecoming/2021/item6.jpg";
import Item7 from "../../data/images/homecoming/2021/item7.jpg";
import Item10 from "../../data/images/homecoming/2021/item10.jpg";

export default class Homecoming2021 extends React.Component {
    render() {
        return <Layout title="Homecoming 2021 - ART &amp; SPARK AUCTION" extraClassName={styles.wrapper}>
            <div className="row">
                <Img src={Banner} className="uk-align-center" alt="Homecoming 2021 - Art &amp; Spark Auction - Support The Next Alumni Generation" sizes={[1800, 900, 450]} />
            </div>

            <div className="row">
                <div className="uk-grid">
                    <div className="uk-width-1-2@m">
                        <p>
                            Every year as part of Homecoming, talented members of the Jacobs University community donate their creativity to raise funds for the Alumni Scholarship Program. As the mission of Jacobs University Alumni Association’s is the advancement of education, science and research, providing financial support for the next generations of students is key to fulfilling our goal.
                        </p>
                        <p>
                            You can find a quick glance at scholarship facts and figures in the image <span className="uk-visible@m">on the right</span><span className="uk-hidden@m">below</span>.
                        </p>
                        <p className="uk-hidden@m">
                            <Img src={ArtAndSpark} alt="Alumni Scholarship - Awarded to two students in 2021 - Selected based on Academic Excellence &amp; Financial Situation" sizes={[447]} />
                        </p>
                        <h3>How does the Auction work?</h3>
                        <p>
                            The Homecoming auction is what is called a 'blind auction'. &quot;What's a blind auction?&quot; you may ask. In a blind auction all bidders simultaneously submit their bids 'blindly' so that no bidder knows the bid of any other participant. While the highest bidder wins the item, all bids are considered donations and go directly to the scholarship program.
                        </p>
                    </div>
                    <div className="uk-width-1-2@m uk-visible@m">
                        <Img src={ArtAndSpark} alt="Alumni Scholarship - Awarded to two students in 2021 - Selected based on Academic Excellence &amp; Financial Situation" sizes={[447]} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="uk-grid">
                    <div className="uk-width-2-3@m">
                        <h3>How Do I Participate?</h3>
                        <p>
                            To bid on a particular item, please send us a donation via Paypal by clicking the button below.
                            In the Note field, please add the words <code>Art Auction 2021 [Piece Number Here]</code> and provide an email address so that we can contact you in case you win.
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="3BMMTLGA99298" />
                                <input type="image" src={Paypal as unknown as string} width="200" height="60" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            </form>
                        </p>
                        <h3>How do I find out the results?</h3>
                        <p>
                            Join us on <b>Saturday, September 25<sup>th</sup></b>, from 17.00-18.30 CEST at the Homecoming Main Event for an exciting culmination of the week and stellar agenda! Our keynote speaker, Anca Dragan, is a renowned alumna who will share her story about her path into AI and Robotics. We'll meet 'alumni from around the world' and learn about what 'life is like at Jacobs today'. We'll be entertained by alumni and current students who will share their musical talents, and top it all off by sharing the results of the auction.
                        </p>
                        <p>
                            Register for all Homecoming events and become part of the Homecoming community on the <a href="https://www.jacobs-university.de/homecoming-2021" target="_blank" rel="noreferrer noopener">Jacobs University Website</a>!
                        </p>
                    </div>
                    <div className="uk-width-1-3@m">
                        <Img src={DonateDetails} width={557} height={347} alt="PayPal Donation Screenshot" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="uk-grid">
                    <div>
                        <br />
                        <h3>Items</h3>
                        <p>
                            Here are the items up for bid!
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="uk-grid uk-child-width-1-1">
                    {artitems.map(item => <ArtItem {...item} key={item.no} />)}
                </div>
            </div>
        </Layout>
    }
}

const artitems: Array<ArtAndSparkItem> = [
    {
        "no": 1,
        "description": "Personal ballet lesson with Lormaigne Bockmühl  \nLength: 1 hour",
        "bio": "Lormaigne has been a part of a professional ballet company since the age of 13. She began her training with Acts Manila, a premier ballet company in the Philippines. She has won several international ballet competitions that have taken place in New York, Hong Kong, Manila, and Japan. In 2019, she began training in the Hamburg Ballet School  (Hamburg Ballett John Neumeier). She has recently finished training and will now be dancing for School Ballet De Genève.",
        "value": 60,
        "donor": "Syna Vastardis (ISCP ‘23)  \nJacobs University Ballet Club",
    },
    {
        "no": 2,
        "image": <Img className="uk-cover" src={Item2} width={500} />,
        "description": "This one-hour DJ workshop will show you the basics of DJing. You will be guided by choosing matching songs, match beats and phrases, to create smooth transitions and energising build-ups. The workshop can be either held in person (Zurich or Bangkok) with the full equipment or virtually in a video-call using DJ software that can be screen-shared and controlled with a computer. The music genres can cover anything from pop, RnB and electronic music.",
        "bio": "Stefan started out DJing in the student bar \"The Other Side\" at Jacobs University in 2010, using his iPhone-headphones and free DJing software. After his time at Jacobs, you could still find him hitting the turntables at the Alumni Homecoming. Stefan now splits his time between Bangkok and Zurich and continues to play in his leisure time for private events - mostly tech house.",
        "value": 100,
        "donor": "Stefan Rustler (BSc ‘12)  \nPresident  \nJacobs University Alumni Association"
    },
    {
        "no": 3,
        "image": <Img className="uk-cover" src={Item3} width={500} />,
        "description": "Title is \"Night Walk in Melbourne\". Photography with passepartout and frame; 13x18 cm, 2014/21. It is a part of larger series called “Modern Nomads” and was created in Melbourne, Australia as a part of urban impression series of photographs.",
        "bio": "Predrag Tapavicki is Head of Alumni and Career Services at Jacobs university, where he’s been working since early 2011. Born in Bosnia and Herzegovina. In Germany since 1993. Master in Political Science / International Relations from the University of Bremen. Exhibitions since 1994 in Germany, USA, Canada.  Being on the road is one of the central themes. Observations of life in a variety of contexts - questioning the aesthetics of social space - subtle and often hidden interest in the political moment. The images come from Bremen, San Francisco, Berlin, London, Dublin, Malaga, Rome, Melbourne, Singapore, New York, Adelaide, Athens, Hanover ...  \nPublic Collections:  \nSAP, Walldorf, Germany  \nRoyal Bank, Vancouver, Canada",
        "value": 500,
        "donor": "Predrag Tapavicki  \nHead of Alumni & Career Services  \nJacobs University",
    },
    {
        "no": 4,
        "description": "This is a dance/electronica instrumental theme to inspire fiery passion, intense motivation and pure enjoyment in a well-delivered \"Surge\"⚡🔥.  \nLength: 2 minutes, 5",
        "bio": "My name is Kuda, but I go by the musical artist name Kae.Zo. I've been producing music for a long time, but in secret; this song is titled \"Surge\" to symbolise the surge of confidence and passion that fueled me to share my incredible creativity with you, my well-deserving audience⚡🔥",
        "value": 49,
        "donor": "Muratidzwa K Mandaza, JU ‘23",
    },
    {
        "no": 5,
        "image": <Img className="uk-cover" src={Item5} width={500} />,
        "description": "Photo from a Fridays For Future demonstration",
        "bio": "Faisal is primarily a photographer by profession and skill, with special focus in documentary photography. Other than that he also uses installation to express his crazy ideas.",
        "value": 600,
        "donor": "Faisal Qadir"
    },
    {
        "no": 6,
        "image": <Img className="uk-cover" src={Item6} width={500} />,
        "description": "Personal Tarot Card Reading",
        "bio": "Nida Abbas is a third year student of Biochemistry and CellBiology from Pakistan. She has an interest in spirituality and everything which cannot be classified in the ordinary. Nida wants to show a part of her world to you in hopes of making you interested in it. ",
        "value": 25,
        "donor": "Nida Abbas",
    },
    {
        "no": 7,
        "image": <Img className="uk-cover" src={Item7} width={500} />,
        "description": "Virtual Cocktail Mixology Class - In this 2 hour class you'll be learning to make 3 drinks from the comfort of your home, tips and tricks on what makes a good drink and how you can use the skills learned in this session to develop your own unique drinks. If you don't drink alcohol, don't worry! The drinks we'll cover will be decided based on your preferences. To make this class accessible for anyone, it does NOT include the ingredients but you'll receive the list of ingredients ahead of time and you can invite up to 4 people to join you in your experience. As a bonus I'll be matching the value of the auction up to 450 Euro to donate to an organization supporting workers in the food & beverage industry.",
        "bio": "Dominik graduated from Jacobs in 2014 with a degree in Computer Science. He's currently living in the San Francisco Bay Area. During the day he's working at Twilio as a Developer Advocate and by night he's working on his cocktail skills, developing recipes and documenting his work on instagram.com/cocktail.and.code. In August 2020, one of his cocktail creations was recognized with the Best Concept award in the Home Bar Awards. His favorite cocktail is a Negroni and his favorite glassware a Nick & Nora",
        "value": 200,
        "donor": "Dominik Kundel (‘14)"
    },
    {
        "no": 8,
        "description": "",
        "bio": "",
        "value": 0,
        "donor": "Raju Gurung (‘14)"
    },
    {
        "no": 9,
        "description": "Title: Beautifully Tragic, Tragically Beautiful Medium: Oil on canvas Dimensions: 61*46cm  \nGrowing up on the Renaissance era women figure paintings, with the then renaissance ideals serving as the symbolic catalysts to the inaccurate representation of how a woman’s body should be like, this artwork depicts the same but in today’s day and age.  \n\nOn the right, you can see an idealized version of a woman who fit the beauty standards of today’s post-colonial time perfectly i.e. the glorified white-skinny-blond hair global beauty myth created by the beauty industry. The beauty routine being changed from the Victorian frequent use of ammonia or lead-based white paint to the millennial/Gen Z obsession with cosmetic surgeries, injectables and skincare; going to extreme lengths to achieve the Western ideal of beauty.  \n\nOn the left is shown a colonized woman of colour dealing with the myth of beauty to be the perfect person in the capitalistic world, switching to cosmetic surgeries on the right due to the notion that their face should not have the slightest “flaw”. Trying to fix from the de rigueur injectable facial fillers and botox underlying issues perceived as the physical ones i.e. getting the colour “fixed”, brows fixed, the jaw etc. Capitalism collaborates with patriarchy so as the perceived abnormalities never end, and the woman’s position never improves because the society is never satisfied with her and the fingers still keep pointing to the perceived flaws post surgeries.",
        "bio": "Michelle is an amateur artist who makes art solely for the love of it.  \nI often find myself putting paint to the canvas just to calm the chaos in my head. Most times, the colors that soothe my soul or reflect it, make it to my palette, and the imagery that clears my mind begins to unfold in front of me. Art to me is therapeutic and the goal of my art is always to enjoy the cathartic process of creating.",
        "value": 1000,
        "donor": "Michelle Mushtaq"
    },
    {
        "no": 10,
        "image": <Img className="uk-cover" src={Item10} width={500} />,
        "description": "Title: Sphere  \nPrint, passepartout, Marbled Paper 1:1  \nPainting area is 30cm diameter  \nFramed dimensions: 50 x 70 cm",
        "bio": "Cornelia Lohmann has lived in Bremen for more than 20 years. She has overseen the paper studio at Jacobs for nearly 20 years",
        "value": 120,
        "donor": "Cornelia Lohmann"
    }
]

interface ArtAndSparkItem {
    no: number;
    description: string;
    donor: string;
    bio: string;
    value: number;
    image?: React.ReactNode;
}

class ArtItem extends React.Component<ArtAndSparkItem> {
    render() {
        const { no, description, donor, value, image, bio } = this.props;
        return <div>
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid">
                <div className={(no % 2 === 0 ? "uk-card-media-left" : "uk-flex-last@s uk-card-media-right") + " uk-cover-container"}>
                    {image && <div className="uk-card-media-top">{image}</div>}
                    {image && <canvas width="500" height="666"></canvas>}
                </div>
                <div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">Auction Item #{no}</h3>
                        <div>
                            <h4>Description</h4>
                            <Markdown children={description} />
                        </div>

                        {value > 0 && <div>
                            <h4>Value</h4>
                            <p>{value} &euro;</p>
                        </div>}

                        <div>
                            <h4>Donor</h4>
                            <Markdown children={donor} />
                        </div>
                        <div>
                            <h4>Bio</h4>
                            <Markdown children={bio} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}