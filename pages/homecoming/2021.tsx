import * as React from "react";
import Img from "react-optimized-image";
import ArtAndSpark from "../../data/images/homecoming/2021/art_and_spark.png";
import Banner from "../../data/images/homecoming/2021/banner.png";
import DonateDetails from "../../data/images/homecoming/donate_details.png";
import Paypal from "../../data/images/paypal.png";
import Layout from "../../lib/layout/index";
import Markdown from "../../lib/markdown";
import styles from "./2021.module.css";

export default class Homecoming2021 extends React.Component {
    render() {
        return <Layout title="Homecoming 2021" extraClassName={styles.wrapper}>
            <div className="row">
                <Img src={Banner} alt="Homecoming 2021 - 18th Setember - 25th September" />
            </div>

            <div className="row">
                <div className="uk-grid">

                    <div className="uk-width-1-3@m">
                        <Img src={ArtAndSpark} alt="Homecoming 2021 - Art and Spark - 25th September" sizes={[413]} />
                    </div>
                    <div className="uk-width-2-3@m">
                        <h2>Art &amp; Spark</h2>
                        <p>
                            As part of Homecoming 2021 we will have <b>Art &amp; Spark</b> - an art auction designed to auction off art pieces and services provided by members of the Jacobs University community.
                            You can find more information about the items below.
                        </p>
                        <p>
                            The auction will take place as a blind auction where all donations are commitments.
                            A blind auction is an auction where bidders only know their own bid.
                            All donations being commitments means that every bidder will pay their bid - regardless if their bid is highest or not.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="uk-grid">
                    <div className="uk-width-2-3@m">
                        <h2>How to participate?</h2>
                        <p>
                            To bid on a particular item, please send us a donation via Paypal by clicking the button below.
                            In the Note field, please add the words <code>Art Auction 2021 [Piece Number Here]</code>.
                            Please also provide an email address so that we can contact you in case you win.
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="3BMMTLGA99298" />
                                <input type="image" src={Paypal as unknown as string} width="200" height="60" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            </form>
                        </p>
                        <p>
                            To find out the results of this auction and celebrate homecoming, join us in the main event on <b>Saturday, September 25<sup>th</sup></b>.
                        </p>
                    </div>
                    <div className="uk-width-1-3@m">
                        <Img src={DonateDetails} width={557} height={347} alt="PayPal Donation Screenshot" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="uk-grid">
                    <h3>Items</h3>
                </div>
            </div>
            <div className="row">
                <div className="uk-grid uk-child-width-1-2@m uk-grid-small">
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
        "description": "Live DJ Session with Stefan Rustler",
        "bio": "",
        "value": 0,
        "donor": "Stefan Rustler (BSc ‘12)  \nPresident  \nJacobs University Alumni Association"
    },
    {
        "no": 3,
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
        "donor": "Muratidzwa K Mandaza",
    },
    {
        "no": 5,
        "description": "Photo from a Fridays For Future demonstration",
        "bio": "Faisal is primarily a photographer by profession and skill, with special focus in documentary photography. Other than that he also uses installation to express his crazy ideas.",
        "value": 600,
        "donor": "Faisal Qadir"
    },
    {
        "no": 6,
        "description": "Personal Tarot Card Reading",
        "bio": "Nida Abbas is a third year student of Biochemistry and CellBiology from Pakistan. She has an interest in spirituality and everything which cannot be classified in the ordinary. Nida wants to show a part of her world to you in hopes of making you interested in it. ",
        "value": 25,
        "donor": "Nida Abbas",
    },
    {
        "no": 7,
        "description": "Cocktail session",
        "bio": "",
        "value": 0,
        "donor": "Dominik Kundel (‘14)"
    },
    {
        "no": 8,
        "description": "",
        "bio": "",
        "value": 0,
        "donor": "Raju Gurung (‘14)"
    }
]

interface ArtAndSparkItem {
    no: number;
    description: string;
    donor: string;
    bio: string;
    value: number;
    image?: ImgSrc;
}

class ArtItem extends React.Component<ArtAndSparkItem> {
    render() {
        const { no, description, donor, value, image, bio } = this.props;
        return <div>
            <div className="uk-card uk-card-body uk-card-default">
                <div>
                    <h3 className="uk-card-title">Auction Item #{no}</h3>
                    {image && <Img src={image} title={`Auction Item #{no}`} />}
                </div>

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
                    <Markdown children={donor} />
                </div>
            </div>
        </div>
    }
}