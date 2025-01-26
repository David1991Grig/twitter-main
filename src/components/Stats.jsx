import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, changeFollowers, changeFollowing} = useContext(TwitterContext);
    console.log(stats, user);
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div onClick={() => {
                    changeFollowers(true)
                }}
                     onContextMenu={e => {
                             e.preventDefault()
                         changeFollowers(false);
                     }}>Followers: {stats.followers}</div>
                <div onClick={() => {
                    changeFollowing(true);
                }}
                     onContextMenu={e => {
                         e.preventDefault()
                         changeFollowing(false);
                     }}
                >Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;