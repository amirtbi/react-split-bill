import { FormEvent, useState } from "react";
import Button from "./Button";
import { FriendProps } from "./friends.props";
function Input(props: {
  children: any;
  disabled?: boolean;
  bill?: string;
  payedByUser?: string;
  onSetBill?: (value: string) => void;
  onPayedByUser?: (value: string) => void;
  friendExpenses?: string;
  [x: string]: any;
}) {
  const {
    children,
    disabled,
    bill,
    onSetBill,
    payedByUser,
    friendExpenses,
    onPayedByUser,
    ...otherProps
  } = props;
  return (
    <>
      <div className="bill-field">
        <label>{children}</label>
        {typeof bill === "string" && onSetBill ? (
          <input
            onChange={(e) => onSetBill(e.target.value)}
            value={bill}
            type="text"
            {...otherProps}
          />
        ) : null}
        {typeof payedByUser === "string" &&
        onPayedByUser &&
        typeof bill === "string" ? (
          <input
            value={payedByUser}
            onChange={(e) =>
              onPayedByUser(
                Number(e.target.value) > Number(bill)
                  ? payedByUser
                  : e.target.value
              )
            }
            type="text"
            {...otherProps}
          />
        ) : null}
        {typeof friendExpenses === "string" ? (
          <input
            value={friendExpenses}
            type="text"
            disabled={disabled}
            {...otherProps}
          />
        ) : null}
      </div>
    </>
  );
}

function SelectInput(props: {
  friendName: string;
  children: any;
  onWhoIsPaying: (value: string) => void;
  whosIsPaying: string;
}) {
  return (
    <>
      <div className="bill-field">
        <label>{props.children}</label>
        <select
          value={props.whosIsPaying}
          onChange={(e) => props.onWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{props.friendName}</option>
        </select>
      </div>
    </>
  );
}
function BillForm(props: {
  selectedFriend: FriendProps;
  onSplitBill: (value: number) => void;
}) {
  const { selectedFriend, onSplitBill } = props;
  const [bill, setBill] = useState("");
  const [payedByUser, setPayedByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const payedByFriend = `${Number(bill) - Number(payedByUser)}`;

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!bill || !payedByUser) return;
    onSplitBill(
      whoIsPaying === "user" ? Number(payedByFriend) : -Number(payedByUser)
    );
  };
  return (
    <>
      <form className="split-bill" onSubmit={handleFormSubmit}>
        <h1>Split your Bill with {selectedFriend.friendName}</h1>
        <div style={{ width: "100%" }}>
          <Input bill={bill} onSetBill={setBill}>
            Bill value
          </Input>
          <Input
            payedByUser={payedByUser}
            bill={bill}
            onPayedByUser={setPayedByUser}
          >
            Your expense
          </Input>
          <Input disabled friendExpenses={payedByFriend}>
            {selectedFriend.friendName} expenses
          </Input>
          <SelectInput
            whosIsPaying={whoIsPaying}
            friendName={selectedFriend.friendName}
            onWhoIsPaying={setWhoIsPaying}
          >
            Who is paying the bill?
          </SelectInput>
        </div>
        <div style={{ width: "100%", padding: "10px" }}>
          <Button style={{ width: "100%", marginTop: "10px" }}>Split</Button>
        </div>
      </form>
    </>
  );
}

export default BillForm;
