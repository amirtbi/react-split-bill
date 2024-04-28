import { useState } from "react";
function Friend(props: { data: { avatar: string; friendName: string } }) {
  const { data } = props;
  return (
    <>
      <div className="friend-row">
        <div className="avatar">
          <img src={data.avatar} alt="image" />
        </div>
        <div className="info">
          <p>{data.friendName}</p>
          <p>Friend ows me 20$</p>
        </div>
        <div className="action">
          <button>Select</button>
        </div>
      </div>
    </>
  );
}

function AddFriend() {
  return (
    <>
      <div className="form-container">
        <div className="form-field">
          <label>Friend name</label>
          <input type="text" placeholder="friend name..." />
        </div>
        <div className="form-field">
          <label htmlFor="">Image url</label>
          <input type="file" placeholder="image url..." />
        </div>
        <div
          className="action"
          style={{
            display: "inline-flex",
            justifyContent: "space-between",
            flexDirection: "row",
            gap: "2px",
            marginTop: "10px",
          }}
        >
          <button>Add</button>
        </div>
      </div>
    </>
  );
}

function FriendsList(props: {
  friends: { friendName: string; avatar: string; id: string }[];
}) {
  const { friends } = props;

  const [addingFriendIsOpen, setAddFriendStatus] = useState(false);
  return (
    <>
      <div className="container">
        {friends.map((friend) => (
          <Friend data={friend} key={friend.id} />
        ))}

        {addingFriendIsOpen && <AddFriend />}
        <div className="action" style={{ width: "100%" }}>
          <button
            onClick={() => setAddFriendStatus((isOpen) => !isOpen)}
            style={{ width: "100%" }}
          >
            {addingFriendIsOpen ? "Close" : "Add"}
          </button>
        </div>
      </div>
    </>
  );
}

export default FriendsList;
