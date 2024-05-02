import { FormEvent, useState } from "react";
import Button from "./Button";

function AddFriendForm(props: { onAddFriend: any }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoad] = useState(false);
  const { onAddFriend } = props;
  const [errors, setError] = useState({
    name: { message: "", error: false },
    url: { message: "", error: false },
  });
  const validateForm = () => {
    if (name === "") {
      console.log("prev value of name", errors);
      setError((prevValue) => ({
        ...prevValue,
        name: {
          message: "Firstname field is required",
          error: true,
        },
      }));
    }
    if (url === "") {
      setError((prevValue) => ({
        ...prevValue,
        url: { message: "Url field is requried!", error: true },
      }));
    }
  };
  const clearForm = () => {
    setName(() => "");
    setUrl(() => "");
    setError(() => ({
      url: {
        message: "",
        error: false,
      },
      name: {
        message: "",
        error: false,
      },
    }));
  };
  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (name === "" || url === "") return;
    validateForm();
    // Clear form when adding form process is completed
    setLoad(() => true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(onAddFriend({ name, url }));
      }, 3000);
    }).then(() => {
      setLoad(false);
      clearForm();
    });
  };
  return (
    <>
      <form className="form-container" onSubmit={onSubmitForm}>
        <div className="form-field">
          <div>
            <label>Friend name</label>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              placeholder="friend name..."
            />
            {errors.name.error && (
              <small className="error">{errors.name.message}</small>
            )}
          </div>
        </div>
        <div className="form-field">
          <div>
            <label>Image url</label>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              name="url"
              placeholder="image url..."
            />
            {errors.url.error && (
              <small className="error">{errors.url.message}</small>
            )}
          </div>
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
          <Button>{loading ? "Loading" : "Add"}</Button>
        </div>
      </form>
    </>
  );
}

export default AddFriendForm;
