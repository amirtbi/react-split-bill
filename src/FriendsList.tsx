import Button from "./Button";
import { FriendProps } from "./friends.props";
function Friend(props: {
  friend: FriendProps;
  selectedFriend: FriendProps | null;
  onSelection: (friendData: FriendProps) => void;
}) {
  const { friend, selectedFriend, onSelection } = props;
  return (
    <>
      <li
        className={`friend-row ${
          selectedFriend?.id === friend.id ? "selected" : ""
        }`}
      >
        <div className="avatar">
          <img src={friend.avatar} alt="image" />
        </div>
        <div className="info">
          <p>{friend.friendName}</p>
          {friend.balance > 0 && (
            <p className="green">
              {friend.friendName} ows you {friend.balance}$
            </p>
          )}
          {friend.balance < 0 && (
            <p className="red">
              You owed {friend.friendName} {friend.balance}$
            </p>
          )}
          {friend.balance === 0 && <p>You and {friend.friendName} are even</p>}
        </div>
        <div className="action">
          <Button onClick={() => onSelection(friend)}>
            {selectedFriend?.id === friend.id ? "close" : "Select"}
          </Button>
        </div>
      </li>
    </>
  );
}

function FriendsList(props: {
  friends: FriendProps[];
  selectedFriend: FriendProps | null;
  onSelection: (friendData: FriendProps) => void;
}) {
  const { friends, selectedFriend, onSelection } = props;
  return (
    <>
      <div className="container">
        {friends.length === 0 ? (
          <p>Not any new friends</p>
        ) : (
          friends.map((friend) => (
            <Friend
              friend={friend}
              key={friend.id}
              selectedFriend={selectedFriend}
              onSelection={onSelection}
            />
          ))
        )}
      </div>
    </>
  );
}

export default FriendsList;
