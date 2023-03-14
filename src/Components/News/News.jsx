import React from "react";
import s from "./News.module.css"
import Post from "../Profile/MyPosts/Post/Post";


const News = (props) => {

    debugger

    const addRefElement = React.createRef()

    const addPostElement = () => {
        let text = addRefElement.current.value
        props.addPostElement(text)
    }

    const postElements = props.state.newsPostData.map(s => <Post message={s.message} LikesCount={s.LikesCount}/>)


    return (
        <div className={s.container}>
            <div className={s.NewsWrap}>

                <h1>‘Sometimes Things Break’: Twitter Outages Are on the Rise</h1>
                <p>Elon Musk’s repeated job cuts are stoking new fears that there aren’t
                    enough people to triage Twitter’s problems.</p>
                <img
                    src='https://static01.nyt.com/images/2023/03/01/business/00twitter-infrastructure/00twitter-infrastructure-superJumbo.jpg?quality=75&auto=webp'
                    alt='business/00twitter-infrastructure'/>
                <p>
                    After Elon Musk bought Twitter last year and eliminated thousands of its employees,
                    many users were so alarmed by the cuts that #RIPTwitter and #GoodbyeTwitter began trending.
                </p>
                <p>
                    The social media service remains operational today.
                    But its outages, bugs and other glitches are increasingly piling up.
                </p>
                <p>
                    In February alone, Twitter experienced at least four widespread outages, compared with nine in all
                    of 2022, according to NetBlocks,
                    an organization that tracks internet outages. That suggests the frequency of service failures is on
                    the rise, NetBlocks said.
                    And bugs that have made Twitter less usable — by preventing people from posting tweets, for instance
                    — have been more noticeable,
                    researchers and users said.
                </p>
                <p>
                    Twitter’s reliability has deteriorated as Mr. Musk has repeatedly slashed the company’s work force.
                    After another round of layoffs on Saturday, Twitter has fewer than 2,000 employees, down from 7,500
                    when Mr. Musk took over in October.
                    The latest cuts affected dozens of engineers responsible for keeping the site online, three current
                    and former employees said.
                </p>
                <p>
                    Some employees said Mr. Musk had also recently stoked more unease and distrust with an informal peer
                    evaluation.
                    Some managers received calls this month from Steve Davis, a trusted lieutenant of Mr.
                    Musk’s who had led his tunneling start-up, the Boring Company, according to two people with
                    knowledge of the matter.
                </p>
            </div>
            <div className={s.containerBtn}>
                <div>
                    <textarea ref={addRefElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostElement}>Add Post</button>
                </div>
                {postElements}
            </div>
        </div>

    )
}

export default News;