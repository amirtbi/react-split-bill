import Button from "./Button";
function Input(props: { children: any; disabled?: boolean }) {
  return (
    <>
      <div className="bill-field">
        <label>{props.children}</label>
        <input type="text" disabled={props.disabled} />
      </div>
    </>
  );
}

function SelectInput(props: { children: any }) {
  return (
    <>
      <div className="bill-field">
        <label htmlFor="">{props.children}</label>
        <select>
          <option value="You">You</option>
          <option value="Friend">Friend</option>
        </select>
      </div>
    </>
  );
}
function BillForm() {
  return (
    <>
      <form className="split-bill">
        <h1>Split your Bill</h1>
        <div>
          <Input>Bill value</Input>
          <Input>Your expense</Input>
          <Input disabled>Friend expenses</Input>
          <SelectInput>Who is paying the bill?</SelectInput>
        </div>
        <div style={{ width: "100%", padding: "10px" }}>
          <Button style={{ width: "100%", marginTop: "10px" }}>Split</Button>
        </div>
      </form>
    </>
  );
}

export default BillForm;
