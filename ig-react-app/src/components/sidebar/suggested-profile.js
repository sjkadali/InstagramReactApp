import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import LoggedInUserContext from '../../context/logged-in-user';
import { Link } from 'react-router-dom';
import { updateLoggedInUserFollowing, updateFollowedUserFollowers } from '../../services/firebase';

const SuggestedProfile = ({
    profileDocId,
    username,
    profileId,
    userId,
    loggedInUserDocId
}) => {
    const [followed, setFollowed] = useState(false);
    //const { setActiveUser } = useContext(LoggedInUserContext);

    async function handleFollowUser()  {
        setFollowed(true);

        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
        await updateFollowedUserFollowers(profileDocId, userId, false);
    }

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img
                    className="rounded-full w-8 flex mr-3"
                    src={`/images/avatars/${username}.jpg`}
                    alt="hh"
                />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm">{username}</p>
                </Link>
            </div>            
            <button
                className="text-xs font-bold text-blue-medium"
                type="button"
                onClick={handleFollowUser}
            >
                Follow
            </button>                 
        </div>
    ) : null;
}
export default SuggestedProfile;

SuggestedProfile.propTypes = {
    profileDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired
};