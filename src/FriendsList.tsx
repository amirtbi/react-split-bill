import Button from "./Button";
function Friend(props: {
  data: { avatar: string; friendName: string; balance: number; id: number };
}) {
  const { data } = props;
  return (
    <>
      <div className="friend-row">
        <div className="avatar">
          <img src={data.avatar} alt="image" />
        </div>
        <div className="info">
          <p>{data.friendName}</p>
          {data.balance > 0 && (
            <p className="green">
              {data.friendName} ows you {data.balance}$
            </p>
          )}
          {data.balance < 0 && (
            <p className="red">
              You owed {data.friendName} {data.balance}$
            </p>
          )}
          {data.balance === 0 && <p>You and {data.friendName} are even</p>}
        </div>
        <div className="action">
          <Button>Select</Button>
        </div>
      </div>
    </>
  );
}

function FriendsList(props: {
  friends: {
    friendName: string;
    avatar: string;
    id: number;
    balance: number;
  }[];
}) {
  const { friends } = props;
  return (
    <>
      <div className="container">
        {friends.length === 0 ? (
          <p>Not any new friends</p>
        ) : (
          friends.map((friend) => <Friend data={friend} key={friend.id} />)
        )}
      </div>
    </>
  );
}

export default FriendsList;
