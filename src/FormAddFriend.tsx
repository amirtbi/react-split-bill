import { FormEvent, useState } from "react";
import Button from "./Button";
function AddFriendForm(props: { onAddFriend: any }) {
  const { onAddFriend } = props;
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [friend, setFriend] = useState({ name: "", url: "" });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userInfo = { name, url };
    onAddFriend(userInfo);
  };
  const handle = (e: InputEvent) => {
    const { name, value } = e.target;
    console.log(e);
    setFriend((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  return (
    <>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <div className="form-field">
          <label>Friend name</label>
          <input
            value={friend.name}
            onChange={(e) => handle(e)}
            name="name"
            type="text"
            placeholder="friend name..."
          />
        </div>
        <div className="form-field">
          <label>Image url</label>
          <input
            value={friend.url}
            onChange={(e) => handle(e)}
            type="text"
            name="url"
            placeholder="image url..."
          />
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
          <Button>Add</Button>
        </div>
      </form>
    </>
  );
}

export default AddFriendForm;
