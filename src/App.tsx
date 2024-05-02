import "./App.css";
import FriendsList from "./FriendsList";
import SplitBill from "./Bill";
import AddFriendForm from "./FormAddFriend";
import Button from "./Button";
import { FriendProps } from "./friends.props";
import { useState } from "react";

function App() {
  const [addingFriendIsOpen, setAddFriendStatus] = useState<boolean>(true);
  const [friends, setFriends] = useState<FriendProps[]>([]);
  const [selectedFriend, setSelectedFriend] = useState<FriendProps | null>(
    null
  );

  const handleSelectedFriend = (friend: FriendProps) => {
    console.log("Selected friend", friend);
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setAddFriendStatus(false);
  };
  const addFriend = (friend: { url: string; name: string }) => {
    const { url, name } = friend;
    const newFriend = {
      friendName: name,
      avatar: url,
      balance: 0,
      id: crypto.randomUUID(),
    };
    setFriends((friends) => [...friends, newFriend]);
  };

  const splitBillHandle = (value: number) => {
    console.log("value", value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : { ...friend }
      )
    );
    setSelectedFriend(null);
  };
  return (
    <>
      <div className="app">
        <div>
          <FriendsList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={handleSelectedFriend}
          />
          {addingFriendIsOpen && <AddFriendForm onAddFriend={addFriend} />}
          <Button
            onClick={() => setAddFriendStatus((isOpen) => !isOpen)}
            style={{ width: "100%" }}
          >
            {addingFriendIsOpen ? "Close" : "Add friend"}
          </Button>
        </div>
        {selectedFriend && (
          <SplitBill
            selectedFriend={selectedFriend}
            onSplitBill={splitBillHandle}
          />
        )}
      </div>
    </>
  );
}

export default App;
